# Minimal & Spacious Modular UI Redesign

## Overview
De-cluttered the entire website by removing visual noise and excessive image clutter while preserving the brand's core color palette, typography tokens, and essential content. The copy and data points have been compressed into clean, modular bento components with generous breathing room.

## Key Changes
1. **Homepage ([src/app/page.tsx](../src/app/page.tsx))**:
   - Replaced the overwhelming full-screen image cover with a crisp, asymmetric editorial hero layout (copy on left, single high-impact card on right).
   - Compressed the statistics bar into a clean, border-delimited modular row.
   - Restructured the 5 core services into an airy bento grid with an integrated quick-inquiry callout card.
   - Refined the featured destinations gallery with clean cards and restrained badges.
   - Simplified the "Why Choose Us" section into an uncluttered split layout with 4 numbered cards.

2. **Tour Packages ([src/app/holidays/page.tsx](../src/app/holidays/page.tsx))**:
   - Converted the heavy dark hero into an airy, header block with custom inquiry CTA.
   - Simplified category filter buttons into clean pills.
   - Compressed package card inclusions and metrics into clean, uncluttered cards.

3. **Visa Services ([src/app/visa/page.tsx](../src/app/visa/page.tsx))**:
   - Streamlined destination cards into modular grid units.
   - Formatted the document requirements and 4-step workflow side-by-side into a balanced 2-column layout.

4. **Air Tickets ([src/app/air-tickets/page.tsx](../src/app/air-tickets/page.tsx))**:
   - Compacted flight inquiry inputs into a clean, single-row form layout.
   - Converted flight route listings into clean minimal cards with departure/destination badges.
   - Modularized key ticketing benefits.

5. **Passport & Travel Insurance ([src/app/passport/page.tsx](../src/app/passport/page.tsx), [src/app/travel-insurance/page.tsx](../src/app/travel-insurance/page.tsx))**:
   - Standardized page headers and compressed checklists into balanced 2-column modular sections.
   - Streamlined insurance tier cards with refined typography and padding.

## Verification
- Built cleanly with `pnpm build` across all routes.

