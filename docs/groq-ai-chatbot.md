# Groq AI Travel Concierge & Full-Page Chat Desk

## Overview
Govind Tours & Travels now features an intelligent, low-latency AI Travel Desk powered by the **Groq LLM API** (`qwen/qwen3.8-27b`). The assistant serves as a 24/7 digital concierge grounded in the site's verified travel catalog, consular requirements, packages, bank coordinates, and headquarters consultation hours.

The feature is accessible via two surfaces:
1. **Floating Chatbot Widget**: Positioned at the bottom-right corner across the entire website (`bottom-20 md:bottom-6 right-4 md:right-6 z-40`), featuring instant prompt chips, live loading skeletons, markdown rendering, and an expand-to-full-page shortcut.
2. **Dedicated Full-Page Chat Layout (`/chat`)**: Engineered according to the `/design-taste-frontend` (`taste-skill`) design system with an asymmetric split layout (`min-h-[100dvh]`), live desk status indicator, topic shortcuts, verified site page directory, full conversation history, copy-to-clipboard, and keyboard navigation.

---

## Architecture & Data Flow

```
[User Browser]
   │
   ├──> [ChatbotWidget.tsx] (Floating Action Drawer on all pages)
   └──> [/chat Page.tsx] (Full-Page Editorial Split-View)
           │
           ▼
     [POST /api/chat]
           │
           ├──> [siteKnowledge.ts] (Extracts verified page data for query)
           │       ├── Routes: /, /air-tickets, /visa, /packages, /passport,
           │       │          /travel-insurance, /payment-details, /contact, /blog
           │       └── Injects structured context into System Prompt
           │
           ▼
     [Groq SDK / Client] (process.env.GROQ_API_KEY)
           │
           ▼
     [Model: qwen/qwen3.8-27b] (Ultra-fast inference ~100-200ms TTFT)
           │
           ▼
     [MarkdownContent.tsx] (Renders bolding, tables, internal links, zero emojis)
```

---

## Key Modules & Components

### 1. Context Engine (`src/lib/siteKnowledge.ts`)
- Maintains a structured directory of all 10 site routes with their summaries, keywords, pricing, and deep technical details.
- `getRelevantPages(query, limit)`: Intelligently ranks and extracts page context relevant to the user query.
- `buildSiteContext(query)`: Dynamically generates the ground-truth context injected into the system prompt, ensuring the AI can view and reference site pages on demand.

### 2. Secure Route Handler (`src/app/api/chat/route.ts`)
- Server-side runtime isolating `GROQ_API_KEY` from client exposure (Zero-Trust Security Baseline).
- Validates input message histories and attaches the specialized Govind Tours travel persona.
- Enforces the **Anti-Emoji Policy**, markdown table generation, and internal page link citations (`[View Packages](/packages)`).
- Model selection defaults to `qwen/qwen3.8-27b` with `process.env.GROQ_MODEL` override support.

### 3. Markdown Formatting (`src/components/chat/MarkdownContent.tsx`)
- Formats AI outputs with high-readability typography (`font-headline`, `font-body`).
- Renders tables, blockquotes, lists, and converts internal links (`/packages`, `/visa`, `/payment-details`) to seamless Next.js navigation.

### 4. Floating Action Widget (`src/components/chat/ChatbotWidget.tsx`)
- Fixed at `bottom-20 md:bottom-6 right-4 md:right-6 z-40`, safely floating above the mobile bottom navigation bar.
- One-click quick suggestion pills for common travel questions.
- Header actions: Reset chat, Expand to `/chat`, Close.
- Automatically unmounts when the user is already on the `/chat` route.

### 5. Minimalist Full-Page Chat Layout (`src/app/chat/page.tsx`)
- Refactored using `/minimalist-ui`, `/brandkit`, and `/unslop`:
  - **Single Focused Column**: Replaced noisy multi-card sidebar with a centered, distraction-free reading column (`max-w-3xl mx-auto`).
  - **Quiet Chrome**: Clean header with subtle back action, context badge ("Travel Desk"), direct desk phone, and reset trigger.
  - **Warm Bone Canvas**: `#faf9f6` background with flat hairlines (`border-black/[0.06]`) and practically non-existent shadows.
  - **Editorial Prompt Tiles**: 4 flat cards for Schengen visa, holiday circuits, flights from Ahmedabad, and verified bank coordinates.
  - **Document-Style Cards**: Assistant replies rendered in open document cards with subtle copy button and zero emoji clutter.
  - **Sticky Minimal Input**: Compact textarea with clean upward send action and `Return` key support.

