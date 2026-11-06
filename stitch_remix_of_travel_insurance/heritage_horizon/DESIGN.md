# Design System Strategy: The Curated Odyssey

## 1. Overview & Creative North Star
This design system is built upon the "Curated Odyssey" — a visual philosophy that moves travel agency design away from cluttered "deal-heavy" layouts and toward a sophisticated, editorial experience. 

The goal is to position the agency as a high-end digital concierge. We achieve this by breaking the rigid, boxed-in "template" look. Instead of standard grids, we use **intentional asymmetry**, overlapping imagery, and an expansive typographic scale. We lean into breathing room (whitespace) to signal luxury and professional calm, ensuring the user feels guided rather than sold to.

## 2. Colors & Surface Philosophy
The palette balances the high-energy "Heritage Red" (#a10017) with the "Trustworthy Blue" (#0f5fae), grounded in a sophisticated suite of warm neutrals.

### The "No-Line" Rule
To maintain a premium editorial feel, **1px solid borders are strictly prohibited for sectioning.** Structural boundaries must be defined exclusively through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to create a soft, seamless transition.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine paper. 
- Use `surface-container-lowest` (#ffffff) for the most prominent interactive cards.
- Use `surface-container` (#f6eaf4) or `surface-container-low` (#fcf0fa) for background wrappers.
- By nesting a "lowest" card inside a "low" section, we define the object’s importance through tonal contrast rather than outlines.

### The "Glass & Gradient" Rule
Flat colors can feel "out-of-the-box." To add "soul" and professional polish:
- **Interactive Gradients:** Primary buttons should use a subtle linear gradient from `primary` (#a10017) to `primary-container` (#c6222a).
- **Glassmorphism:** For floating elements like sticky navigation or search overlays, use a semi-transparent `surface` color with a `backdrop-blur` (12px–20px). This allows the vibrant colors of travel photography to bleed through, softening the interface.

## 3. Typography
Typography is our primary tool for establishing an authoritative, yet vibrant voice. We utilize a pairing of **Plus Jakarta Sans** for character and **Inter** for absolute clarity.

- **Display & Headline (Plus Jakarta Sans):** These are our "Editorial" levels. Use `display-lg` for hero statements with tight letter-spacing (-0.02em). These should feel like magazine headlines.
- **Title & Body (Inter):** These are our "Utility" levels. `title-md` and `body-lg` handle the heavy lifting of travel itineraries and descriptions. 
- **The Hierarchy Rule:** Always pair a high-contrast `display-sm` headline with a `body-md` description. The stark difference in size creates the "signature" high-end look that standard apps lack.

## 4. Elevation & Depth
We eschew traditional Material Design shadows in favor of **Tonal Layering** and **Ambient Light**.

### The Layering Principle
Depth is achieved by stacking the surface-container tiers. Place a `surface-container-lowest` card on a `surface-container-low` section. The human eye perceives the lighter shade as "closer" to the viewer, creating a natural lift without visual noise.

### Ambient Shadows
When a "floating" effect is necessary (e.g., a "Book Now" sticky bar), shadows must be:
- **Extra-Diffused:** Use blur values between 20px and 40px.
- **Low-Opacity:** 4% to 8% max.
- **Tinted:** Instead of a gray shadow, use a color derived from `on-surface` (#1f1a20) to mimic natural light.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., in high-contrast modes or complex input fields), use a **Ghost Border**: the `outline-variant` token at 15% opacity. Never use 100% opaque borders.

## 5. Components

### Buttons
- **Primary:** Rounded `xl` (1.5rem), `primary` to `primary-container` gradient. Typography: `label-md` (All Caps, 0.05em tracking).
- **Secondary:** Surface-tinted background with `on-secondary-container` text. No border.
- **Tertiary:** Purely typographic using `secondary` color, paired with a small 16px icon.

### Cards & Destination Tiles
- **Prohibited:** Divider lines. 
- **Construction:** Use `spacing-6` padding. Separate the "Price Tag" from the "Location" using vertical white space (`spacing-4`). Use glassmorphism overlays for labels sitting directly on imagery.

### Input Fields
- **Style:** Background set to `surface-container-high`. 
- **Interaction:** On focus, the background shifts to `surface-container-lowest` with a 1px "Ghost Border" in `primary`.

### Travel Chips (Filters/Tags)
- **Selection:** Use `secondary-container` for active states. Use `rounded-full` to contrast against the `md` (0.75rem) corners of the main cards.

### Navigation (Mobile & Desktop)
- **Design:** A floating `surface` container with `backdrop-blur`. Use `spacing-10` for top/bottom margins to allow the hero image to "peek" through the top of the viewport.

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical margins (e.g., more padding on the left than the right in editorial sections) to create visual interest.
- **Do** use the full range of the Spacing Scale (especially `spacing-16` and `spacing-20`) to separate major content blocks.
- **Do** treat photography as a structural element—let images break the grid or overlap container edges.

### Don't
- **Don't** use 1px dividers to separate list items. Use background color shifts or `spacing-4` gaps.
- **Don't** use pure black (#000000) for text. Use `on-surface` (#1f1a20) to maintain a soft, premium feel.
- **Don't** use "Drop Shadows" on cards unless they are part of a modal or high-level overlay. Tonal layering is the default.