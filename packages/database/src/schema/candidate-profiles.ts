import {
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";
import { user } from "./auth";

export const candidateProfiles = pgTable("candidate_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id")
    .notNull()
    .unique()
    .references(() => user.id, { onDelete: "cascade" }),

  headline: text("headline"),
  bio: text("bio"),
  resumeUrl: text("resume_url"),
  portfolioUrl: text("portfolio_url"),
  linkedinUrl: text("linkedin_url"),
  twitterUrl: text("twitter_url"),
  githubUrl: text("github_url"),

  skills: jsonb("skills").$type<string[]>().default([]),
  experienceYears: integer("experience_years"),
  location: text("location"),
  isOpenToWork: boolean("is_open_to_work").notNull().default(true),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
