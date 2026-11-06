# Docker Containerization Architecture

## Overview
This document specifies the containerization architecture for the Govind Tours Next.js portal. The container configuration packages the Next.js 15 App Router application with React 19, Tailwind CSS, and `pnpm` into an ultra-lean, secure, and production-ready container image.

---

## Architecture & Multi-Stage Build

The container uses a 4-stage multi-stage `Dockerfile` based on `node:20-alpine`:

```
┌───────────────────────────────────────────────┐
│              Stage 1: Base                    │
│    node:20-alpine + corepack enable (pnpm)    │
└───────────────────────┬───────────────────────┘
                        │
         ┌──────────────┴──────────────┐
         ▼                             ▼
┌──────────────────┐          ┌──────────────────┐
│  Stage 2: Deps   │          │ Stage 3: Builder │
│  libc6-compat    │          │ Copies deps      │
│  pnpm install    ├─────────►│ BUILD_STANDALONE │
│  --frozen-lock   │          │ pnpm run build   │
└──────────────────┘          └────────┬─────────┘
                                       │
                                       ▼
                              ┌──────────────────┐
                              │ Stage 4: Runner  │
                              │ Non-root user    │
                              │ Standalone app   │
                              │ Exposes port 3000│
                              └──────────────────┘
```

### Stage Details

1. **`base` (`node:20-alpine`)**:
   - Enables Corepack to activate `pnpm` pinned to repository lockfiles without global npm installs.
   - Sets working directory to `/app`.

2. **`deps`**:
   - Installs `libc6-compat` for Alpine Linux compatibility.
   - Copies `package.json` and `pnpm-lock.yaml`.
   - Runs `pnpm install --frozen-lockfile` to install exact dependency trees with deterministic integrity.

3. **`builder`**:
   - Copies node modules from `deps` and workspace source files.
   - Sets `NEXT_TELEMETRY_DISABLED=1` and `BUILD_STANDALONE=true`.
   - Executes `pnpm run build`. Next.js traces all dependencies and outputs a self-contained Node server in `.next/standalone`.

4. **`runner`**:
   - Creates a dedicated system user and group (`nextjs:nodejs`, UID/GID 1001).
   - Copies only the standalone bundle (`.next/standalone`), static assets (`.next/static`), and `public/` assets.
   - Runs with unprivileged `USER nextjs`.
   - Starts the application via `CMD ["node", "server.js"]` listening on port `3000`.

---

## Footprint Optimization: Next.js Standalone

By configuring `output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined` in `next.config.mjs`:
- Standard Next.js images with full `node_modules` typically weigh between 1.0 GB and 1.4 GB.
- With Next.js standalone tracing on Alpine, unnecessary dependencies and dev toolchains are stripped, yielding an image size of **~150 MB** (an ~88% reduction).
- Windows local development builds continue to run normally without throwing elevated symlink privilege errors (`EPERM`).

---

## Security Hardening & Zero-Trust Baseline

- **Non-Root Execution:** The container process runs strictly under unprivileged user `nextjs:nodejs` (UID 1001). Root login is disabled.
- **Zero Secret Baking:** `.dockerignore` blocks `.env`, `.env*.local`, `.git`, `.dev`, and temporary test artifacts from entering the build context or image layers.
- **Runtime Secret Injection:** Secrets such as `GROQ_API_KEY` are provided at runtime via environment variables (`docker run -e ...`) or through `docker-compose.yml` (`env_file` / `environment`).
- **Telemetry Disabled:** `NEXT_TELEMETRY_DISABLED=1` is enforced across build and runtime stages.

---

## Orchestration: Docker Compose

The included `docker-compose.yml` provides a production-grade single-command orchestration specification:

- **Service:** `web`
- **Container Name:** `govind-tours-site`
- **Port Mapping:** `3000:3000`
- **Restart Policy:** `unless-stopped`
- **Healthcheck:** Periodic HTTP status probe via `wget` against `http://127.0.0.1:3000/`.
- **Environment Handling:** Automatically binds `GROQ_API_KEY` from local `.env` if present.

---

## Usage Instructions

### 1. Build and Run via Docker Compose (Recommended)
```powershell
docker compose up --build -d
```
To view logs:
```powershell
docker compose logs -f web
```
To stop the container:
```powershell
docker compose down
```

### 2. Build and Run via Docker CLI
Build the image:
```powershell
docker build -t govind-tours-site:latest .
```
Run the container:
```powershell
docker run -d --name govind-tours-site -p 3000:3000 -e GROQ_API_KEY="your-key-here" govind-tours-site:latest
```

### 3. Verify Health
Visit `http://localhost:3000` in your browser, or query:
```powershell
docker ps --filter "name=govind-tours-site"
```

