import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const FRONTEND = process.env.FRONTEND_URL ?? "http://localhost:3000";
const PORT = Number(process.env.PORT ?? 3001);

const app = express();

// credentials:true so the session cookie rides cross-origin — needs an
// explicit origin, never "*".
app.use(cors({ origin: FRONTEND, credentials: true }));

// Better Auth needs the raw request body, so mount it BEFORE express.json().
// Express 5 wildcard syntax: "/api/auth/*splat".
app.all("/api/auth/*splat", toNodeHandler(auth));

// JSON parsing only for our own routes, after the auth handler.
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`auth server on http://localhost:${PORT}`);
});
