# Logo Integration & Navbar Decluttering

## Overview
Integrated the official brand logos provided in `assets/` into the site's public distribution assets, replaced generic compass icons across the header, footer, and metadata favicon, and decluttered the primary navigation bar.

## Changes Implemented

1. **Brand Assets & Favicon Setup**:
   - Copied `assets/logo-full.png` and `assets/logo-icon.svg` into `public/`.
   - Added `favicon.svg` and linked `logo-icon.svg` in `src/app/layout.tsx` metadata `icons` for browser tabs and mobile shortcuts.

2. **Full Logo Integration**:
   - **Header ([src/components/Header.tsx](../src/components/Header.tsx))**: Replaced the generic SVG compass icon and dual-colored text with the official `logo-full.png` via Next.js `Image` with priority loading.
   - **Footer ([src/components/Footer.tsx](../src/components/Footer.tsx))**: Replaced the text/icon logo with `logo-full.png` enclosed in a clean white badge.

3. **Navbar Decluttering**:
   - Streamlined the wide, 7-link navbar into 3 concise primary categories: **Flights**, **Visas**, and **Holidays**.
   - Grouped secondary offerings (**Passport Assistance** & **Travel Insurance**) under a clean **More** dropdown.
   - Added direct **Contact** link and a compact **Inquire** CTA button.
   - Maintained a streamlined mobile drawer and updated mobile bottom bar.

## Verification
- Verified production build (`pnpm build`). All 9 static routes pre-rendered without error.

