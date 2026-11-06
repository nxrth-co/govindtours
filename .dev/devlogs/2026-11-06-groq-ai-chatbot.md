# Devlog: Pouring Groq Speed Into Govind Tours ☕✈️

**Date:** November 6, 2026  
**Mood:** Hyped, caffeinated, and marveling at sub-second token generation  
**Feature:** Groq-Powered AI Travel Concierge Desk & Full-Page Chat Layout  

---

Hey team! Grab your favorite mug because today we just shipped something genuinely incredible for the Govind Tours portal. 

You know how when travelers land on a travel agency site, they're juggling a dozen burning questions at once? *"What are the Schengen biometrics rules?", "Can you get me on the morning Ahmedabad to Dubai flight?", "What does the 4-night Goa Coastal circuit actually include?", "Where do I send the RTGS wire?"*

Usually, they have to click through three different tabs or dial the office. But as of right now, Govind Tours has its own **24/7 Digital Concierge** powered directly by the lightning-fast **Groq API**!

---

### The Hiccup (And The Win!)

So here's the funny story from earlier: I initialized the Groq client expecting to run `llama-3.3-70b-versatile`. We hit the Groq completions endpoint and *bam*—Groq threw a `model_not_found` 404! 

Rather than giving up or scratching our heads, we polled `groq.models.list()` live on the account. Turns out, this particular Groq environment had `openai/gpt-oss-120b`, `openai/gpt-oss-20b`, and the blazing-fast `qwen/qwen3.8-27b`. When we tested the `gpt-oss` models with short token limits, their deep-reasoning traces were eating the max tokens before outputting user content. But `qwen/qwen3.8-27b`? Pure magic. Instantaneous tokens (~100-200ms time-to-first-token), razor-sharp formatting, and flawless instruction adherence.

---

### How We Engineered It Under The Hood

#### 1. Zero-Trust Security Baseline & The Server Route
First things first: never leak the key. We wired up `src/app/api/chat/route.ts` as a Next.js App Router server handler. The client sends only message histories; the server reads `process.env.GROQ_API_KEY` in isolated node runtime, binds the conversation context, and interfaces with the `groq-sdk`.

#### 2. The Site Knowledge & Context Engine (`src/lib/siteKnowledge.ts`)
The prompt required that the AI be able to view and answer questions based on the site's pages. So we built a structured ground-truth registry containing every corner of the site:
- `/` (Home & core services overview)
- `/air-tickets` (AMD -> DXB ₹17,499, BOM -> LHR ₹46,800, AMD -> SIN ₹22,400, IATA desk)
- `/visa` (UAE e-visas ₹6,499, Schengen €30k insurance prep ₹12,500, US B1/B2 ₹16,800, 60+ countries)
- `/packages` (Goa ₹18,500, Kerala ₹24,999, Rajasthan ₹34,500, Ladakh ₹38,000, Uttarakhand, Kashmir)
- `/passport` (Fresh 15-20 days, Tatkal 1-3 days express dispatch, Seva Kendra slot guidance)
- `/travel-insurance` (Asia $50k, Schengen €30k, USA/Global $250k)
- `/payment-details` (SBI Current A/c 38291049281, ICICI A/c 000705019842, IFSC codes)
- `/contact` (Bodakdev HQ at A-312 Shilp Aaron, +91 94264 17399, Mon–Sat 10AM–7PM)
- `/blog` & `/privacy-policy`

Before querying Groq, `buildSiteContext()` dynamically searches the site registry and injects the exact page data into the system prompt. And even cooler: the AI proactively includes markdown links like `[Explore Tour Packages](/packages)` so travelers can jump straight to the booking pages!

#### 3. Strict Taste-Skill & Anti-Emoji Enforcement
We followed `/design-taste-frontend` to the letter:
- **Anti-Emoji Policy:** Completely stripped of all decorative emoji clutter. In its place: pristine typographic contrast (`font-headline` Plus Jakarta Sans & `font-body` Inter), clean markdown tables, bold accents, and Lucide icons.
- **Color Calibration:** Absolute neutral slate canvas (`#f7f6f4`), crisp 1px borders (`border-slate-200`), pure white card surfaces, and singular crimson accents (`#a10017`).
- **Markdown Rendering:** Powered by `react-markdown` via `MarkdownContent.tsx`, supporting styled headers, tables, lists, and safe internal client routing.

#### 4. The Two Experiences: Floating Widget + Full-Page `/chat`
- **Floating Bottom-Right Widget (`ChatbotWidget.tsx`):** Docked right at `bottom-20 md:bottom-6 right-4 md:right-6 z-40` so it hovers gracefully above the mobile bottom nav. One-click pills, auto-scrolling chat history, and an expand icon.
- **Dedicated Full-Page Chat (`/chat`):** A full-blown asymmetric split layout (`min-h-[100dvh]`) with a 4-column concierge dossier on the left (live office status, quick question topics, direct phone dial button, and site links) alongside an 8-column full-height chat stream on the right with copy-to-clipboard and keyboard shortcuts.

---

### Pre-Flight Check

We ran `tsc --noEmit` followed by a complete `pnpm build`. All 17 static and dynamic routes built in 26 seconds with green checkmarks across the board.

Next time you visit the site, tap the desk icon in the bottom right corner or head to `/chat` and ask anything about flights, visas, or Goa packages—it's fast, accurate, and feels like talking to an elite Bodakdev travel agent! 🚀

