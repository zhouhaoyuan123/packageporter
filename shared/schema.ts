import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const packages = pgTable("packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  version: text("version"),
});

export const installationJobs = pgTable("installation_jobs", {
  id: serial("id").primaryKey(),
  status: text("status").notNull().default("pending"), // pending, installing, completed, failed
  packages: jsonb("packages").notNull(), // array of {name, version}
  progress: integer("progress").notNull().default(0),
  currentStep: text("current_step"),
  bundleSize: text("bundle_size"),
  downloadPath: text("download_path"),
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  completedAt: timestamp("completed_at"),
});

export const insertPackageSchema = createInsertSchema(packages).pick({
  name: true,
  version: true,
});

export const insertInstallationJobSchema = createInsertSchema(installationJobs).pick({
  packages: true,
});

export const packageSchema = z.object({
  name: z.string().min(1, "Package name is required"),
  version: z.string().optional(),
});

export const installationRequestSchema = z.object({
  packages: z.array(packageSchema).min(1, "At least one package is required"),
});

export type Package = typeof packages.$inferSelect;
export type InsertPackage = z.infer<typeof insertPackageSchema>;
export type InstallationJob = typeof installationJobs.$inferSelect;
export type InsertInstallationJob = z.infer<typeof insertInstallationJobSchema>;
export type InstallationRequest = z.infer<typeof installationRequestSchema>;
