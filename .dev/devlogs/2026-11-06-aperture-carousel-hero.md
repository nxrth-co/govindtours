# Devlog: Circular Iris Magic — Aperture Carousel Meets Govind Tours! 🌄📸

**Date:** November 6, 2026  
**Mood:** Hyped & Aesthetically Thrilled  
**Topic:** Integrating Aperture Carousel as the Homepage Hero  

---

Hey team! Grab your mugs because this homepage update is an absolute showstopper! ☕✨

The user brought us an incredible open-source component from the shadcn universe: `<ApertureCarousel />`. If you haven't seen it in action, it's a full-bleed interactive image carousel where the next slide opens through a circular iris expanding outward from wherever you click, accompanied by a razor-thin hairline ring, a masked title elevation animation, and a custom lens cursor that tracks your pointer!

The brief: *“Implement this home's hero section. but use our packages. and if possible then download legitimages or create new if possible.”*

### Setting Up `components/ui/` 🛠️
We created the standard shadcn directory `src/components/ui/` and implemented `aperture-carousel.tsx`. To ensure Next.js 15 plays nice without server console warnings, we converted layout effects into an isomorphic hook (`useIsomorphicLayoutEffect`). We also extended the slide definitions to include travel tags, destination links, and CTA buttons!

### Ultra-HD 16:9 Panoramic Photography 🏔️
A standard portrait card image doesn't do justice to an epic hero carousel. So we generated and curated ultra-high-resolution panoramic 16:9 landscape photographs for our signature packages (`public/hero/`):
1. `ladakh.jpg` — Pangong Tso's azure waters reflecting barren golden mountain ridges.
2. `kerala.jpg` — Traditional thatched Kettuvallam houseboat gliding across the Alleppey backwaters at sunset.
3. `kashmir.jpg` — Morning Shikaras drifting on Dal Lake with blooming water lilies and snowy Himalayan peaks behind.
4. `rajasthan.jpg` — Dramatic Mehrangarh Fort towering over the twilight desert city.
5. `goa.jpg` — Tropical palm-fringed shoreline with warm orange and pink sunset reflections.
6. `alpine.jpg` — Crystalline alpine mountain lake reflecting jagged limestone peaks.

### Framing the Hero & Circular Quick Links 🚀
We anchored the carousel within a rounded 3-xl frame (`height="58vh"`) right below our floating `CardNav`. Underneath the carousel, we seamlessly brought in the circular quick navigation rail (Air Tickets, Visas, Tour Packages, Passports, and Travel Insurance), followed by agency trust badges ("Govt. Registered Agency • 99% Visa Approval Track Record • Bodakdev, Ahmedabad Desk").

### Build Check 🏁
Ran `pnpm build` (`next build`). All 15 routes pre-rendered statically in 13.2 seconds with **zero errors**.

Clicking anywhere on the hero now bursts into a cinematic travel iris, giving visitors an unforgettable first impression. Cheers to next-level design! 🛫🌍

