# Server-Side Rendering (SSR) Optimization for Cloudflare Pages via `@cloudflare/next-on-pages`

## Overview
This document specifies the architecture, dependencies, and configuration updates implemented to adapt the Next.js project for full Server-Side Rendering (SSR) and Edge execution on Cloudflare Pages using `@cloudflare/next-on-pages`.

---

## 1. Adapter Installation & Tooling
- Installed `@cloudflare/next-on-pages` as a development dependency via `pnpm add -D @cloudflare/next-on-pages`.
- Approved native postinstall build binaries (`workerd`, `esbuild`) to ensure native V8 execution simulation.

---

## 2. Wrangler Configuration (`wrangler.jsonc`)
Created `wrangler.jsonc` in the project root:
```jsonc
{
  "name": "govindtours",
  "pages_build_output_dir": ".vercel/output/static",
  "compatibility_date": "2026-09-23",
  "compatibility_flags": ["nodejs_compat"]
}
```
- Sets the mandatory top-level project name `govindtours`.
- Sets the Cloudflare Pages asset output directory to `.vercel/output/static` where `@cloudflare/next-on-pages` writes compiled edge chunks and static assets.
- Enables `nodejs_compat` to provide compatibility layers for Node-style globals on Cloudflare Workers.

---

## 3. Build Scripts (`package.json`)
Updated npm scripts in `package.json`:
- `"build": "npx @cloudflare/next-on-pages"`: Default build script used by Cloudflare Pages during CI/CD to compile the Next.js App Router into Cloudflare Edge Worker bundles.
- `"build:node": "next build"`: Preserved for standalone Node.js container builds (e.g., Dockerfile).

---

## 4. Local Edge Dev Platform Setup (`next.config.mjs`)
Configured `setupDevPlatform()` at the top of `next.config.mjs`:
```javascript
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}
```
When running `pnpm dev`, this initializes Cloudflare's platform proxy emulator so that edge bindings (KV, D1, R2, environment variables) can be tested locally before deployment.

---

## 5. API & Server Component Audit (Edge Runtime Compliance)

### Scan Results
- **Node.js Native APIs (`fs`, `child_process`, `net`, `os`, `path`, etc.)**: None detected in application code. All modules use pure web standards (`fetch`, `Request`, `Response`, `NextRequest`, `NextResponse`).
- **Runtime Directives**:
  - `src/app/api/chat/route.ts` was previously using `export const runtime = 'nodejs';`.
  - Updated to `export const runtime = 'edge';`.
  - Verified `groq-sdk` runs seamlessly on V8 Edge without requiring native Node OS modules.

### Recommendations for Future Development
- If file reading is ever needed, use Cloudflare **KV** or **R2 Object Storage** instead of `node:fs`.
- If subprocesses or shell commands are ever needed, use HTTP webhook triggers or external microservices instead of `child_process`.
- For cryptographic hashing, use the global Web Cryptography API (`crypto.subtle`) rather than `node:crypto`.

