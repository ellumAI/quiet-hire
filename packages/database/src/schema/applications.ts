import {
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  real,
  pgEnum,
} from "drizzle-orm/pg-core";
import { user } from "./auth";
import { jobs } from "./jobs";

// ── Enums ──────────────────────────────────────────────────────────────────────

export const applicationStatusEnum = pgEnum("application_status", [
  "pending",
  "reviewing",
  "shortlisted",
  "interviewing",
  "rejected",
  "hired",
]);

// ── Applications ───────────────────────────────────────────────────────────────

export const applications = pgTable("applications", {
  id: uuid("id").primaryKey().defaultRandom(),

  jobId: uuid("job_id")
    .notNull()
    .references(() => jobs.id, { onDelete: "cascade" }),
  candidateId: text("candidate_id").references(() => user.id, {
    onDelete: "set null",
  }),

  // For non-registered candidates
  candidateEmail: text("candidate_email").notNull(),
  candidateName: text("candidate_name").notNull(),

  // Application content
  resumeUrl: text("resume_url"),
  coverLetter: text("cover_letter"),

  // Status & filtering
  status: applicationStatusEnum("status").notNull().default("pending"),

  // AI relevance check
  relevanceScore: real("relevance_score"),
  relevanceFeedback: text("relevance_feedback"),
  isRelevant: boolean("is_relevant"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
