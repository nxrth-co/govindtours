# Devlog: 2026-11-06 - Hero Blurred World Map Texture

Subtle textures make all the difference! 🗺️✨

The user shared reference images showing a soft, low-opacity, blurred wooden map texture underneath hero copy. We brought that exact treatment to life on the homepage hero section.

### What Got Done
1. **Asset Pipeline**:
   - Converted the uploaded reference world map into `/public/world-map-bg.jpg`.
2. **Backdrop Implementation**:
   - Positioned an absolute, full-bleed layer behind the hero grid in [src/app/page.tsx](../../src/app/page.tsx).
   - Applied `opacity-[0.14]` and `blur-[2px]` along with subtle linear gradient masks so the edges dissolve into the page background.
   - Text, buttons, and badges retain 100% crisp contrast and readability with zero click interception (`pointer-events-none`).
3. **Build**:
   - Built cleanly via `pnpm build` with zero warnings.

