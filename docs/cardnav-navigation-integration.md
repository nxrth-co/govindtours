# React Bits <CardNav /> Navigation Integration

## Overview
Integrated the animated, modular `<CardNav />` navigation component from **React Bits** customized strictly to Govind Tours' crisp white aesthetic, brand crimson (`#a10017`), deep ocean accents (`#0f5fae`), and slate typography.

## Architecture & Components

1. **Component Module (`src/components/CardNav.tsx`)**:
   - Built with Next.js client-side reactivity (`'use client'`).
   - Integrated with `@hugeicons/react` and `@hugeicons/core-free-icons` for dual-arrow link transitions.
   - Used SSR-safe isomorphic layout effects (`useIsomorphicLayoutEffect`) to eliminate React 19 hydration/server warnings.
   - Native integration with Next.js router (`LinkComponent={Link}`).

2. **Styling & Theme (`src/components/CardNav.css`)**:
   - **Custom White Theme Tokens:**
     - `--cn-panel`: `rgba(255, 255, 255, 0.94)` with `backdrop-filter: blur(20px) saturate(1.6)`
     - `--cn-solid`: `#ffffff`
     - `--cn-edge`: `rgba(161, 0, 23, 0.08)` (subtle brand rim)
     - `--cn-highlight`: `rgba(255, 255, 255, 1)`
     - `--cn-shadow`: `0 20px 40px -15px rgba(15, 23, 42, 0.08)`
     - `--cn-text`: `#0f172a` (slate-900)
     - `--cn-hover`: `rgba(161, 0, 23, 0.06)`
     - `--cn-ring`: `#a10017` (crimson red)
     - `--cn-tile`: `linear-gradient(180deg, #ffffff 0%, #fafafa 100%)`
     - `--cn-cta`: `linear-gradient(135deg, #ba1823 0%, #a10017 100%)`
   - Added hover state color shifts for category links to highlight with Govind Tours brand crimson (`#a10017`).

3. **Information Architecture (`src/components/Header.tsx`)**:
   - **Card 1 (Travel Services):** Air Tickets & Flights (`/air-tickets`), Holiday Packages (`/holidays`), Travel Insurance (`/travel-insurance`).
   - **Card 2 (Visa & Documents):** Visa Approvals (`/visa`), Passport Assistance (`/passport`), Payment Details (`/payment-details`).
   - **Card 3 (Company & Help):** Contact Desk (`/contact`), Travel Blog & Insights (`/blog`), Privacy Policy (`/privacy-policy`).
   - **Action CTA:** "Inquire Now" button hooked directly to the global `useContactModal` modal.
   - **Branding:** Official `logo-full.png` centered on desktop and left-aligned on mobile.

4. **Responsive Layout Support**:
   - Floating centered layout with `max-width: 880px` on desktop.
   - Seamless narrow view (< 560px) stacking cards and placing the CTA at the bottom of the card drawer.
   - Maintained thumb-friendly mobile bottom dock for quick smartphone access.

## Verification
- Clean compilation via `pnpm build` (`next build` exited with code 0).
- All 14 static application routes successfully generated.

