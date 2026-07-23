import { auth } from "./lib/auth";

const FRONTEND = process.env.FRONTEND_URL ?? "http://localhost:3000";
const PORT = Number(process.env.PORT ?? 3001);

// CORS for the frontend origin. Credentials must be allowed so the session
// cookie rides cross-origin; that requires an explicit origin, never "*".
function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin === FRONTEND ? origin : FRONTEND;
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const origin = req.headers.get("origin");
    const url = new URL(req.url);

    // Preflight
    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // Hand every /api/auth/* request to Better Auth, then attach CORS.
    if (url.pathname.startsWith("/api/auth")) {
      const res = await auth.handler(req);
      const headers = new Headers(res.headers);
      for (const [k, v] of Object.entries(corsHeaders(origin))) headers.set(k, v);
      return new Response(res.body, { status: res.status, headers });
    }

    if (url.pathname === "/health") {
      return Response.json({ ok: true });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`auth server on http://localhost:${server.port}`);
