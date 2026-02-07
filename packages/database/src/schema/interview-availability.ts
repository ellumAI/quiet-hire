import {
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  integer,
  time,
} from "drizzle-orm/pg-core";
import { user } from "./auth";
import { jobs } from "./jobs";

export const interviewAvailability = pgTable("interview_availability", {
  id: uuid("id").primaryKey().defaultRandom(),

  jobId: uuid("job_id")
    .notNull()
    .references(() => jobs.id, { onDelete: "cascade" }),
  recruiterId: text("recruiter_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  dayOfWeek: integer("day_of_week").notNull(), // 0=Sunday, 6=Saturday
  startTime: time("start_time").notNull(),
  endTime: time("end_time").notNull(),
  timezone: text("timezone").notNull().default("Africa/Lagos"),

  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
