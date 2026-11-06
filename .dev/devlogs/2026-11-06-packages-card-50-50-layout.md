# Devlog: Perfect 50/50 Card Symmetry & Row-by-Row Flow 🎨📐

**Date:** November 6, 2026  
**Mood:** Precise & Polished  
**Topic:** Implementing 50/50 Package Card Image Fitting & Alternating Rows  

---

Hey team! Another quick coffee-side update! ☕✨

When inspecting the layout on `/packages`, we made sure the images and cards match the old site's rhythm down to the millimeter:

### The Layout Refinement
1. **True 50/50 Proportions (`w-full sm:w-1/2`)**:
   Instead of an asymmetrical column split, each card is split cleanly in half—50% dedicated to the high-resolution location photo (`min-h-[350px]` with smooth object-cover scaling), and 50% dedicated to the title, duration, description, and "Connect Now" CTA.

2. **Row-by-Row Alternating Pattern (`Math.floor(index / 2) % 2 === 1`)**:
   - **Row 1 (Goa & Kerala):** Both cards have the image on the **LEFT** and text on the **RIGHT**.
   - **Row 2 (Uttarakhand & Leh Ladakh):** Both cards have text on the **LEFT** and the image on the **RIGHT**.
   - **Row 3 (Jammu Kashmir & Andaman):** Images on the **LEFT**, text on the **RIGHT**.
   - **Row 4 (Himachal & Rajasthan):** Text on the **LEFT**, images on the **RIGHT**.

3. **Homepage Cross-Integration (`src/app/page.tsx`)**:
   We also linked the homepage's featured holiday cards to use these official package images and route directly into `/packages`.

Ran `pnpm build`, 15/15 static pages pre-rendered cleanly with 0 errors. Everything is locked in! 🚀

