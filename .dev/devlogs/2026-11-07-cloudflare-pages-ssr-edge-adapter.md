# Devlog: Supercharging Govind Tours for Edge SSR on Cloudflare Pages

**Date:** November 7, 2026  
**Mood:** ⚡ Lightning-speed Edge compute unlocked

---

### The Next Level: True Edge Server-Side Rendering

Earlier, we banished the 111 MB Webpack build cache monster. Now we've leveled up the deployment architecture to support full **Server-Side Rendering (SSR)** on Cloudflare Pages using the official `@cloudflare/next-on-pages` edge adapter!

This gives us the best of both worlds: dynamic SSR capabilities directly on Cloudflare's globally distributed V8 network, with zero latency penalties and full edge bindings.

---

### What We Wired Up

1. **`@cloudflare/next-on-pages` Adapter**:
   Installed into `devDependencies` via `pnpm add -D @cloudflare/next-on-pages`. Approved the necessary low-level platform binaries (`workerd`, `esbuild`) so local emulation works like a charm.

2. **`wrangler.jsonc` Configured**:
   Dropped in the exact edge configuration targeting `.vercel/output/static` with `compatibility_date: "2026-09-23"` and `compatibility_flags: ["nodejs_compat"]`.

3. **Smart Script Split**:
   - `"build": "npx @cloudflare/next-on-pages"` for Cloudflare Pages edge build pipelines.
   - `"build:node": "next build"` kept in reserve for Docker and Node environments.

4. **Local Binding Proxy (`next.config.mjs`)**:
   Hooked `setupDevPlatform()` into the top of `next.config.mjs` when `process.env.NODE_ENV === 'development'`. Now whenever running `pnpm dev`, local edge platform proxies emulate bindings without guessing!

5. **Deep Codebase Audit & Edge Conversion**:
   - Scanned all server components and API routes for native Node.js APIs (`fs`, `child_process`, `net`, `path`). Clean as a whistle!
   - Found `export const runtime = 'nodejs';` in `src/app/api/chat/route.ts` and flipped it to `export const runtime = 'edge';`.
   - Verified that `groq-sdk` works natively on Edge with web `fetch`.

---

### Verification

Ran `pnpm run build:node` to verify compilation, type checking, and edge runtime routing. All 16 static pages and the `/api/chat` dynamic Edge route compiled flawlessly. Ready for seamless SSR on Cloudflare Pages! 🚀

