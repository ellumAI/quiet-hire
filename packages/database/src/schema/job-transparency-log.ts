import { pgTable, timestamp, uuid, integer } from "drizzle-orm/pg-core";
import { jobs } from "./jobs";

// ── Job Transparency Log (ERD §1.4) ────────────────────────────────────────────
// Snapshots of applicant counts for historical tracking.
// Updated daily via cron or on-demand on application submit.

export const jobTransparencyLog = pgTable("job_transparency_log", {
  id: uuid("id").primaryKey().defaultRandom(),

  jobId: uuid("job_id")
    .notNull()
    .references(() => jobs.id, { onDelete: "cascade" }),

  totalApplicants: integer("total_applicants").notNull(),
  underReview: integer("under_review").notNull(),
  interviewing: integer("interviewing").notNull(),

  snapshotDate: timestamp("snapshot_date").notNull().defaultNow(),
});
