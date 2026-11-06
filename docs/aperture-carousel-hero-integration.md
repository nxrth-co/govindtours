# Aperture Carousel Hero Integration

## Overview
Implemented the interactive, full-bleed `<ApertureCarousel />` component into the homepage hero section ([src/components/ui/aperture-carousel.tsx](../src/components/ui/aperture-carousel.tsx) & [src/app/page.tsx](../src/app/page.tsx)), featuring circular iris transitions, animated progress tracks, custom lens cursor navigation, and high-resolution panoramic package photography.

## Technical Architecture

1. **Component Module ([src/components/ui/aperture-carousel.tsx](../src/components/ui/aperture-carousel.tsx))**:
   - Built under the standard `components/ui` directory supporting shadcn architecture.
   - **Interactive Circular Iris:** Uses the Web Animations API to animate a dynamic `clipPath: circle(...)` expanding from the exact coordinates `(x, y)` of the user's click or tap.
   - **Scale & Hairline Ring:** Coupled with a scale-down animation on the incoming slide and an expanding hairline ring.
   - **Interactive Cursor Lens:** Custom "Next" / "Prev" floating lens cursor dynamically tracking pointer position on fine-pointer devices.
   - **SSR-Safe:** Utilizes `useIsomorphicLayoutEffect` to avoid server-side warnings in Next.js 15.
   - **Autoplay & Intersection Observer:** Automatically runs slide progression with pause-on-tab-switch / pause-off-screen capabilities.

2. **Tour Packages Integration ([src/app/page.tsx](../src/app/page.tsx))**:
   Features 6 panoramic 16:9 slides showcasing Govind Tours' signature domestic and regional holiday packages:
   - **Leh Ladakh** (`/hero/ladakh.jpg`): Pangong Tso azure waters & high-altitude passes.
   - **Kerala Backwaters** (`/hero/kerala.jpg`): Traditional Alleppey houseboats at golden sunset.
   - **Jammu & Kashmir** (`/hero/kashmir.jpg`): Dal Lake morning shikaras with snow-capped Himalayan peaks.
   - **Grand Rajasthan** (`/hero/rajasthan.jpg`): Mehrangarh Fort ramparts overlooking the twilight city.
   - **Sun-Kissed Goa** (`/hero/goa.jpg`): Palm-fringed beaches and coastal sunset reflections.
   - **Uttarakhand Peaks** (`/hero/alpine.jpg`): Alpine lakes, sacred trails, and mountain wilderness.

3. **Circular Quick Navigation Rail**:
   - Embedded directly below the hero carousel, connecting visitors directly to:
     - Air Tickets (`/air-tickets`)
     - Visa Services (`/visa`)
     - Tour Packages (`/packages`)
     - Passport Desk (`/passport`)
     - Trip Insurance (`/travel-insurance`)

4. **Agency Trust Badges**:
   - Highlighted government registration, 99% visa approval track record, and verified Ahmedabad headquarters contact.

## Verification
- Verified static generation via `pnpm build`: all 15 routes compiled with code 0.

