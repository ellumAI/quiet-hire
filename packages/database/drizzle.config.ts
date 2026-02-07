import { defineConfig } from "drizzle-kit";
import { env } from "./src";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema/*",
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
