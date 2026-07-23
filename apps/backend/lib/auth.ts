import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

// Prisma 7 requires a driver adapter. Neon's serverless driver talks to
// Postgres over its pooled connection using DATABASE_URL.
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  // Only these origins may hold a session. Wildcard would let any site drive
  // authenticated requests with the user's cookie (CSRF surface) — so pin it.
  trustedOrigins: [process.env.FRONTEND_URL!],

  emailAndPassword: {
    enabled: true,
    // No email sender wired (out of scope). Verification would block every
    // signup from ever completing, so keep it off until a sender exists.
    requireEmailVerification: false,
  },

  // OAuth: only registered if credentials are present. Empty stubs in .env
  // leave these effectively inert until you fill real client IDs/secrets.
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
