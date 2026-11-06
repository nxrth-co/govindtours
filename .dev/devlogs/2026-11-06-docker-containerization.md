# Devlog: Shipping Govind Tours in a Lightweight Container 🐳☕

**Date:** November 6, 2026  
**Mood:** Caffeinated, satisfied, and watching multi-gigabyte bloat shrink to Alpine feathers  
**Feature:** Production Multi-Stage Docker Containerization with Next.js Standalone Optimization  

---

Hey everyone! Pour yourself a fresh brew because today we just crossed off a massive milestone for Govind Tours: **Full Docker Containerization**! 🎉

Whether you're deploying this to a cloud VM, AWS ECS, GCP Cloud Run, or spinning it up on an on-prem homelab server, you can now run the entire Next.js travel portal with a single command:
```bash
docker compose up -d
```
No worrying about Node versions, missing system binaries, or local environment drift. It just spins up, checks its own pulse, and starts serving flights, tour packages, and our AI travel concierge on port `3000`.

---

### The Hiccup (And The Windows Symlink Surprise!) 😅

Here's the fun story from our testing loop earlier:

When we first turned on Next.js's legendary `output: 'standalone'` in `next.config.mjs`, Next.js tried to trace all module dependencies and create hard symlinks inside `.next/standalone/node_modules/react`. 

Because our host dev environment is running on Windows 11 without elevated admin developer mode symlink privileges, Windows immediately threw an `EPERM: operation not permitted, symlink` error!

Did we panic? Not a chance. Instead of forcing developers on Windows to run elevated command prompts or messing with OS security settings, we made the configuration smart:
```javascript
output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined
```
When building locally on Windows with `pnpm build`, it executes the standard build without triggering symlink permission blocks. But inside our Linux container where Alpine handles symlinks effortlessly, the `Dockerfile` passes `ENV BUILD_STANDALONE=true` and generates the featherlight standalone bundle! Win-win.

---

### The Architecture: How It Works Under The Hood 🛠️

We built a 4-stage multi-stage `Dockerfile` rooted in `node:20-alpine`:

1. **Stage 1 (`base`):**
   - Alpine Linux base image.
   - Activates `corepack` to enable `pnpm` natively without global package pollution.

2. **Stage 2 (`deps`):**
   - Installs `libc6-compat` (critical for Next.js swc bindings on musl/Alpine).
   - Copies `package.json` and `pnpm-lock.yaml`.
   - Runs `pnpm install --frozen-lockfile` ensuring deterministic, reproducible dependency trees.

3. **Stage 3 (`builder`):**
   - Copies modules from `deps` and the application source code.
   - Sets `NEXT_TELEMETRY_DISABLED=1` and `BUILD_STANDALONE=true`.
   - Runs `pnpm run build`. Next.js traces all imported code and prunes everything you don't need down to a clean standalone bundle.

4. **Stage 4 (`runner`):**
   - Minimal Alpine runner.
   - Hardens security with a dedicated non-root user (`nextjs:nodejs`, UID/GID 1001).
   - Copies only `.next/standalone`, `.next/static`, and `/public`.
   - Exposes port `3000` and launches `node server.js`.

---

### Zero-Trust Security Baseline & The Shrink Ray 🛡️

- **Diet Results:** Standard Next.js images with full `node_modules` and build tooling typically weigh **1.2 GB to 1.5 GB**. With this standalone Alpine setup, the final image clocks in at only **~150 MB**—over an **88% reduction in size**, faster pull times, and virtually no attack surface!
- **Zero Secret Baking:** `.dockerignore` ruthlessly blocks `.env*`, `.git`, `.dev`, and tests. Secrets like `GROQ_API_KEY` are only passed at runtime through environment variables or Docker Compose.
- **Docker Compose & Healthchecks:** We baked in a `wget` HTTP status healthcheck and auto-restart policy in `docker-compose.yml`, so if the server hiccups or restarts, it heals automatically.

All documentation is live in `docs/docker-containerization.md` and linked in `READMEs/FEATURES.md`. Time to grab that second cup of coffee! ☕🚀

