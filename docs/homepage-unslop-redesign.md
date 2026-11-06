# Homepage 9-Pass Unslop Redesign

## 1. Overview
The Govind Tours homepage (`src/app/page.tsx`) and its accompanying hero component (`src/components/ui/aperture-carousel.tsx`) were systematically overhauled following the **unslop** design methodology. The redesign replaces AI-generated design tells (multi-hue saturated gradients, uppercase tracked labels, bouncing scale transitions, floating background blobs, and colored icon bubbles) with the grounded, quiet, and credible aesthetic of a genuine consular travel agency in Bodakdev, Ahmedabad.

---

## 2. The 9 Passes Applied

### Pass 1: Spacing
- Replaced erratic section spacing (`space-y-20 lg:space-y-28`) with disciplined intervals (`space-y-16 lg:space-y-24`).
- Standardized card paddings across sibling components (`p-6` on service cards, `p-5` on holiday cards, `p-6 sm:p-8` on metric containers).
- Normalized internal element gaps to 8px / 16px / 24px increments.

### Pass 2: Color
- Neutralized backgrounds to clean white (`#ffffff`) and warm parchment gray (`#f7f6f4`).
- Eliminated saturated gradients (`bg-gradient-to-br from-secondary to-slate-900`); replaced the consultation banner with a grounded dark slate (`bg-slate-900 text-white`).
- Replaced multi-colored icon backgrounds (emerald, amber, purple, blue) with unified monochrome slate icon containers (`bg-slate-100 text-slate-700`).
- Dedicated `#a10017` (Govind Ruby Crimson) strictly as the single primary accent for key links and interactive CTAs.

### Pass 3: Icons
- Standardized Lucide icons to `16px–20px` with `strokeWidth={1.75}` in muted slate tones.
- Removed arbitrary decorative icon bubbles.
- Preserved clean star rating SVGs for verified Google reviews (`text-amber-500 fill-amber-500`).

### Pass 4: Copy
- Removed uppercase shouting (`OUR CAPABILITIES`, `HANDPICKED VACATIONS`, `INSTANT PORTALS & DIRECT SERVICES`, `THE GOVIND STANDARD`).
- Converted all labels to sentence case with quiet typography (`Capabilities`, `Handpicked Circuits`, `Desk Assurance`, `Direct Travel Portals`).
- Replaced hype words and exclamation marks with concrete operational facts: "A-207, Shilp Aaron, Sindhu Bhavan Marg, Bodakdev", "Mon–Sat 10:00 AM – 7:00 PM", and exact turnaround descriptors ("Same-day issuance", "PSK Slot", "99% approval track").

### Pass 5: Type
- Softened all section headers from `font-extrabold` (weight 800) to `font-semibold` (weight 600) with calibrated line-heights.
- Reduced Aperture Carousel title weight from 800 to 600, softened tag badges, and improved caption legibility.
- Added `tabular-nums` to numerical indicators (`2,000+`, `15+`, `4.9/5`, `₹18,500`).

### Pass 6: Layout
- Established a calm, rhythmic sequence:
  1. Full-bleed Aperture Carousel with circular iris reveal.
  2. Direct Service Portals Rail with circular destination preview thumbnails.
  3. Quiet Trust Bar with official accreditation items.
  4. 4-column Verified Metrics Strip with hairline vertical dividers.
  5. 3x2 Core Travel Capabilities Bento (Air Tickets, Visa, Packages, Passport, Insurance, and Direct Line Desk).
  6. Handpicked Holiday Circuits with airport departure route notation (`AMD → GOI`, `AMD → COK`, `AMD → JAI → JDH`, `AMD → DEL → IXL`).
  7. 4-point Desk Assurance Split Layout.
  8. Verified Google Reviews with direct contributor profile links.
  9. Ahmedabad Travel Desk Callout.

### Pass 7: Details
- Enforced clean nested corner radius math:
  - Hero carousel & major banners: `rounded-2xl`
  - Content cards & panels: `rounded-xl`
  - Buttons, pill tags & badges: `rounded-lg`
- Replaced heavy drop shadows with hairline borders (`border border-slate-200`) and quiet elevation (`shadow-sm`).

### Pass 8: Visuals
- Anchored the page with authentic landscape photography in the Aperture Carousel and curated holiday cards.
- Removed floating gradients, decorative pseudo-elements, and AI slop artifacts.

### Pass 9: Motion
- Removed `hover:scale-105` and `active:scale-95` transform pops.
- Replaced with subtle, instantaneous state transitions (`transition-colors duration-150` and gentle border color shifts).

---

## 3. Verification
- Production build executed with `pnpm build` (`next build`).
- Output: 15/15 static pages successfully prerendered with zero errors or TypeScript warnings.

