import { defineConfig } from "prisma/config";

// Prisma 7 moved the connection URL out of schema.prisma into this config.
// The Prisma CLI loads this file without auto-reading .env, so load it here.
// process.loadEnvFile is native to both Bun and Node — no dotenv needed.
try {
  process.loadEnvFile();
} catch {
  // .env absent (e.g. CI with real env vars) — DATABASE_URL already set.
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
