# Devlog: Slaying the 111MB Webpack Beast for Cloudflare Pages

**Date:** November 7, 2026  
**Mood:** ☕ Triumphant coffee vibes & silky smooth CI/CD pipelines

---

### The "Wait, Why Is A Single File 111 Megabytes?!" Moment

So picture this: you set up a slick Next.js 15 site with beautiful Tailwind styling, an ultra-fast Groq AI chatbot, and smooth page transitions. You push to Git, connect Cloudflare Pages, kick your feet up, hit Deploy, and bam:
```
[ERROR] Error: Pages only supports files up to 25 MiB in size
.next/cache/webpack/client-production/0.pack is 111 MiB in size
```
Ouch. Cloudflare Pages slammed on the emergency brakes. 

For a second, it felt like someone accidentally sneaked an entire 4K movie into the build folder! But looking closer under the hood, the actual frontend static assets were featherweight (our biggest image in the entire project is barely 1.49 MB!). The culprit was Webpack being *way* too enthusiastic with its build cache and packing a whopping 111 MB of compiler artifacts into `.next/cache/webpack/client-production/0.pack`. 

Even worse: Cloudflare Pages was being pointed straight at the `.next` directory. Not only does `.next` contain that huge cache monster, but `.next` is an internal Node runtime directory—it doesn't even have a root `index.html`! If Cloudflare had uploaded it, visitors would have been greeted by a chorus of 404s.

Time to fix it cleanly and permanently.

---

### The Surgical Architecture Fix

Here is how we turned the deployment from an obstacle course into a butter-smooth one-click deploy:

#### 1. Banishing the Webpack Disk Cache (`next.config.mjs`)
Next.js allows custom webpack configuration hooks. By telling Webpack:
```javascript
webpack: (config, { dev }) => {
  if (!dev) {
    config.cache = false;
  }
  return config;
}
```
Webpack now performs compilation directly in-memory during production builds and never dumps those 100+ MB `.pack` files to disk! The largest file in `.next` instantly plummeted from **111 MiB** to **0.44 MiB**.

#### 2. Adaptive Static Export (`out/`)
Cloudflare Pages thrives on clean, static HTML/CSS/JS assets distributed globally across its CDN edge. 
In `next.config.mjs`, we hooked into Cloudflare's automatic runner environment variable (`CF_PAGES=1`):
- When `CF_PAGES=1` or `NEXT_EXPORT=true`: Next.js exports pure static HTML/CSS/JS directly to the `out/` directory with `images.unoptimized = true`.
- When `BUILD_STANDALONE=true`: Docker builds still get the lightweight `standalone` Node output for VPS/container deployment!
Zero compromise, maximum flexibility.

#### 3. Edge-Native Cloudflare Pages Functions (`functions/api/chat.ts`)
"Wait, what about our Groq AI Travel Concierge at `/api/chat`?"
Cloudflare Pages has native serverless functions via the `/functions` directory. We created `functions/api/chat.ts`, which catches `POST /api/chat` at the Cloudflare Edge, builds site context from our ground-truth knowledge base (`src/lib/siteKnowledge.ts`), and fires off requests to Groq via native web `fetch()`. Zero extra Node overhead, sub-millisecond edge invocation, and full conversational AI for our travelers!

#### 4. The Nuclear Postbuild Clean & `wrangler.toml`
To leave nothing to chance:
- Added a cross-platform `postbuild` script in `package.json` that sweeps away any stray `.next/cache` directory.
- Created `wrangler.toml` configured with `pages_build_output_dir = "out"`, signaling Wrangler and Cloudflare Pages exactly where the validated static assets live.

---

### The Verdict

We ran the complete build pipeline with `CF_PAGES=1`:
- All 17 pages compiled.
- All 16 static HTML pages exported to `out/`.
- Highest asset size: **1.49 MB** (well below the 25 MB ceiling).
- Webpack pack files: **0 MB**.
- Cloudflare Pages Functions: **Ready to rock**.

Grab a cup of coffee, push to git, and trigger that redeploy on Cloudflare Pages—it's ready to fly! 🚀

