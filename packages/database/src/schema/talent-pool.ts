import {
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";
import { user } from "./auth";
import { jobs } from "./jobs";

export const talentPool = pgTable("talent_pool", {
  id: uuid("id").primaryKey().defaultRandom(),

  candidateEmail: text("candidate_email").notNull(),
  candidateName: text("candidate_name"),
  candidateId: text("candidate_id").references(() => user.id, {
    onDelete: "set null",
  }),

  resumeUrl: text("resume_url"),
  skills: jsonb("skills").$type<string[]>(),

  // GDPR consent
  consentGiven: boolean("consent_given").notNull().default(false),
  consentGivenAt: timestamp("consent_given_at"),

  // Which job rejection led to this opt-in
  sourceJobId: uuid("source_job_id").references(() => jobs.id, {
    onDelete: "set null",
  }),

  createdAt: timestamp("created_at").notNull().defaultNow(),
});
