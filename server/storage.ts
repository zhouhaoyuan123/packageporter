import { installationJobs, type InstallationJob, type InsertInstallationJob } from "@shared/schema";

export interface IStorage {
  createInstallationJob(job: InsertInstallationJob): Promise<InstallationJob>;
  getInstallationJob(id: number): Promise<InstallationJob | undefined>;
  updateInstallationJob(id: number, updates: Partial<InstallationJob>): Promise<InstallationJob | undefined>;
  deleteInstallationJob(id: number): Promise<void>;
  cleanupExpiredJobs(): Promise<void>;
}

export class MemStorage implements IStorage {
  private installationJobs: Map<number, InstallationJob>;
  private currentId: number;

  constructor() {
    this.installationJobs = new Map();
    this.currentId = 1;
  }

  async createInstallationJob(insertJob: InsertInstallationJob): Promise<InstallationJob> {
    const id = this.currentId++;
    const job: InstallationJob = {
      id,
      status: "pending",
      packages: insertJob.packages,
      progress: 0,
      currentStep: null,
      bundleSize: null,
      downloadPath: null,
      errorMessage: null,
      createdAt: new Date(),
      completedAt: null,
      expiresAt: null,
    };
    this.installationJobs.set(id, job);
    return job;
  }

  async getInstallationJob(id: number): Promise<InstallationJob | undefined> {
    return this.installationJobs.get(id);
  }

  async updateInstallationJob(id: number, updates: Partial<InstallationJob>): Promise<InstallationJob | undefined> {
    const job = this.installationJobs.get(id);
    if (!job) return undefined;
    
    const updatedJob = { ...job, ...updates };
    this.installationJobs.set(id, updatedJob);
    return updatedJob;
  }

  async deleteInstallationJob(id: number): Promise<void> {
    this.installationJobs.delete(id);
  }

  async cleanupExpiredJobs(): Promise<void> {
    const now = new Date();
    const jobsToDelete: number[] = [];
    
    this.installationJobs.forEach((job, id) => {
      // Delete expired completed jobs
      if (job.expiresAt && job.expiresAt < now) {
        jobsToDelete.push(id);
        console.log(`Cleaning up expired job ${id}`);
      }
      // Delete failed jobs older than 10 seconds
      if (job.status === "failed" && job.completedAt) {
        const tenSecondsAgo = new Date();
        tenSecondsAgo.setSeconds(tenSecondsAgo.getSeconds() - 10);
        if (job.completedAt < tenSecondsAgo) {
          jobsToDelete.push(id);
          console.log(`Cleaning up failed job ${id}`);
        }
      }
    });
    
    for (const id of jobsToDelete) {
      this.installationJobs.delete(id);
    }
  }
}

export const storage = new MemStorage();
