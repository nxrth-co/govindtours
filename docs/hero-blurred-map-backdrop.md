# Hero Section Blurred Map Backdrop

## Overview
Implemented a subtle, low-opacity, blurred world map backdrop in the homepage hero section ([src/app/page.tsx](../src/app/page.tsx)), matching the user-provided reference visuals.

## Key Details
- **Asset**: Sourced the clean wooden world map graphic to `public/world-map-bg.jpg`.
- **Visual Styling**:
  - `opacity-[0.14]`: Delivers an understated, elegant watermark feel.
  - `blur-[2px]`: Softens geometric contours to maintain high contrast and legibility for text and buttons.
  - Multi-directional radial and linear background gradient overlays (`from-background/70 via-transparent to-background`) for seamless blending into the page.
  - `pointer-events-none select-none`: Ensures zero interference with mouse interactions or clicks.

## Verification
- Pre-rendered cleanly across all static routes with `pnpm build`.

