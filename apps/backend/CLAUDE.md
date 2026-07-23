---
description: Backend conventions — Bun runtime, Bun-native APIs over npm equivalents.
globs: "*.ts, package.json"
alwaysApply: false
---

# apps/backend

Bun service in the `signoz` turborepo. Sibling `apps/frontend` is Next.js — the
rules below apply to this package only.

## Runtime

Use Bun, not Node.js.

- `bun <file>` — not `node` or `ts-node`
- `bun install` / `bun run <script>` / `bunx <pkg>` — not npm, yarn, pnpm, npx
- `bun test` — not jest or vitest
- Bun loads `.env` automatically. No `dotenv`.

## Prefer Bun-native over dependencies

Reach for these before adding a package:

| Need | Use | Not |
|---|---|---|
| HTTP server | `Bun.serve()` | express |
| Postgres | `Bun.sql` | pg, postgres.js |
| SQLite | `bun:sqlite` | better-sqlite3 |
| Redis | `Bun.redis` | ioredis |
| WebSocket | built-in `WebSocket` | ws |
| File I/O | `Bun.file` | `node:fs` readFile/writeFile |
| Subprocess | ``Bun.$`ls` `` | execa |

Bun API docs are vendored at `node_modules/bun-types/docs/**.mdx`.

## Testing

```ts
import { test, expect } from "bun:test";
```

## Layout

<!-- TODO: fill in — see note below -->
