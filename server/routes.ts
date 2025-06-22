import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { installationRequestSchema } from "@shared/schema";
import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import archiver from "archiver";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function registerRoutes(app: Express): Promise<Server> {
  // Create installation job
  app.post("/api/installations", async (req, res) => {
    try {
      const validatedData = installationRequestSchema.parse(req.body);
      const job = await storage.createInstallationJob({
        packages: validatedData.packages as any,
      });
      
      // Start installation process asynchronously
      processInstallation(job.id);
      
      res.json(job);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Get installation job status
  app.get("/api/installations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const job = await storage.getInstallationJob(id);
      
      if (!job) {
        return res.status(404).json({ message: "Installation job not found" });
      }
      
      res.json(job);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Download bundle
  app.get("/api/installations/:id/download", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const job = await storage.getInstallationJob(id);
      
      if (!job || job.status !== "completed" || !job.downloadPath) {
        return res.status(404).json({ message: "Bundle not available for download" });
      }
      
      const filePath = path.join(__dirname, "..", job.downloadPath);
      const exists = await fs.access(filePath).then(() => true).catch(() => false);
      
      if (!exists) {
        return res.status(404).json({ message: "Bundle file not found" });
      }
      
      res.download(filePath, "packages.zip", (err) => {
        if (err) {
          console.error("Download error:", err);
        }
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function processInstallation(jobId: number) {
  try {
    const job = await storage.getInstallationJob(jobId);
    if (!job) return;

    await storage.updateInstallationJob(jobId, {
      status: "installing",
      currentStep: "Creating isolated environment...",
      progress: 10,
    });

    // Create temporary directory
    const tempDir = path.join(__dirname, "..", "temp", `job-${jobId}`);
    await fs.mkdir(tempDir, { recursive: true });

    await storage.updateInstallationJob(jobId, {
      currentStep: "Initializing npm project...",
      progress: 20,
    });

    // Initialize package.json
    const packageJson = {
      name: `bundle-${jobId}`,
      version: "1.0.0",
      dependencies: {},
    };

    await fs.writeFile(
      path.join(tempDir, "package.json"),
      JSON.stringify(packageJson, null, 2)
    );

    // Install packages
    const packages = job.packages as Array<{ name: string; version?: string }>;
    for (let i = 0; i < packages.length; i++) {
      const pkg = packages[i];
      const packageSpec = pkg.version ? `${pkg.name}@${pkg.version}` : pkg.name;
      
      await storage.updateInstallationJob(jobId, {
        currentStep: `Installing ${packageSpec}...`,
        progress: 30 + (i / packages.length) * 40,
      });

      await installPackage(tempDir, packageSpec);
    }

    await storage.updateInstallationJob(jobId, {
      currentStep: "Generating package bundle...",
      progress: 80,
    });

    // Create zip bundle
    const bundlePath = await createBundle(tempDir, jobId);
    const stats = await fs.stat(bundlePath);
    const bundleSize = formatBytes(stats.size);

    await storage.updateInstallationJob(jobId, {
      status: "completed",
      currentStep: "Bundle ready for download",
      progress: 100,
      downloadPath: `temp/bundle-${jobId}.zip`,
      bundleSize,
      completedAt: new Date(),
    });

    // Clean up temp directory (keep only the zip)
    await fs.rm(tempDir, { recursive: true, force: true });

  } catch (error: any) {
    console.error("Installation error:", error);
    await storage.updateInstallationJob(jobId, {
      status: "failed",
      errorMessage: error.message,
      completedAt: new Date(),
    });
  }
}

function installPackage(cwd: string, packageSpec: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const npm = spawn("npm", ["install", packageSpec], { cwd });
    
    npm.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Package installation failed: ${packageSpec}`));
      }
    });

    npm.on("error", (error) => {
      reject(new Error(`Failed to start npm: ${error.message}`));
    });
  });
}

function createBundle(tempDir: string, jobId: number): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const bundlePath = path.join(__dirname, "..", "temp", `bundle-${jobId}.zip`);
      
      // Ensure temp directory exists
      await fs.mkdir(path.dirname(bundlePath), { recursive: true });
      
      const { createWriteStream } = await import("fs");
      const output = createWriteStream(bundlePath);
      const archive = archiver("zip", { zlib: { level: 9 } });

      output.on("close", () => {
        resolve(bundlePath);
      });

      archive.on("error", (err: any) => {
        reject(err);
      });

      archive.pipe(output);
      archive.directory(tempDir, false);
      archive.finalize();
    } catch (error) {
      reject(error);
    }
  });
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
