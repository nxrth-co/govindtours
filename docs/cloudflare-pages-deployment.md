# Cloudflare Pages Deployment & 25 MiB Asset Optimization

## Overview
This document outlines the optimization and build configuration changes implemented to enable seamless zero-error deployment of the Next.js repository on **Cloudflare Pages**, resolving the 25 MiB single-file limit rejection.

---

## 1. Problem Root Cause Analysis
During Cloudflare Pages deployment, the deployment worker failed with:
```
[ERROR] Error: Pages only supports files up to 25 MiB in size
  .next/cache/webpack/client-production/0.pack is 111 MiB in size
```
- **Webpack Build Cache**: During `pnpm build`, Webpack compiles internal modules into pack files inside `.next/cache/webpack/client-production/`. The binary archive `0.pack` was ~111 MiB.
- **Incorrect Asset Directory**: Cloudflare Pages was pointed to `.next` as the static output directory. Cloudflare Pages validates and uploads every individual file as an edge asset, strictly rejecting any file above 25 MiB.
- **Root Directory Mismatch**: `.next` is an internal Node server directory and does not contain `index.html` at its root, which would have resulted in 404 errors for all routes if served statically.

---

## 2. Architecture & Technical Solution

### A. Next.js Config Adaptive Output (`next.config.mjs`)
- **Static Export on Cloudflare Pages**: Automatically detects `process.env.CF_PAGES === '1'` or `process.env.NEXT_EXPORT === 'true'` and sets `output: 'export'` with `images.unoptimized = true`.
- **Docker Standalone Preserved**: When `BUILD_STANDALONE=true` (e.g. inside Dockerfile for self-hosted container environments), it outputs `standalone`.
- **Webpack Production Cache Disabling**: Set `config.cache = false` during non-dev builds. This completely prevents Webpack from generating the 111 MiB `0.pack` file on disk.

### B. Automated Cache Purge Hook (`package.json`)
- Added a cross-platform `postbuild` script:
  ```json
  "postbuild": "node -e \"try { require('fs').rmSync('.next/cache', { recursive: true, force: true }); } catch (e) {}\""
  ```
- Ensures that zero residual cache files exist in `.next/cache` even if custom caching plugins run.

### C. Cloudflare Pages Functions Integration (`functions/api/chat.ts`)
- Cloudflare Pages serves static assets from `out/` and serverless edge functions from `/functions`.
- Created `functions/api/chat.ts` to seamlessly handle `POST /api/chat` calls at the edge.
- Directly invokes Groq API (`https://api.groq.com/openai/v1/chat/completions`) using native Web `fetch`, preserving full AI Travel Concierge functionality without requiring a Node.js server.

### D. Wrangler Configuration (`wrangler.toml`)
- Created root `wrangler.toml`:
  ```toml
  name = "govindtours"
  compatibility_date = "2024-11-01"
  compatibility_flags = ["nodejs_compat"]
  pages_build_output_dir = "out"
  ```
- Explicitly guides Cloudflare Pages build runners to use `out/` as the validated asset output directory.

---

## 3. Deployment Checklist for Cloudflare Pages Dashboard

1. **Build Command**: `pnpm build`
2. **Build Output Directory**: `out`
3. **Framework Preset**: `Next.js (Static HTML Export)` or `None`
4. **Environment Variables**:
   - `GROQ_API_KEY`: *(Your Groq API key)*
   - `GROQ_MODEL`: `qwen/qwen3.8-27b` *(Optional, defaults to qwen/qwen3.8-27b)*
   - `CF_PAGES`: `1` *(Automatically set by Cloudflare)*

