import { createAuthClient } from "better-auth/react";

// Points at the Bun backend. Override with NEXT_PUBLIC_AUTH_URL in prod.
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL ?? "http://localhost:3001",
});

export const { signIn, signUp, signOut, useSession } = authClient;
