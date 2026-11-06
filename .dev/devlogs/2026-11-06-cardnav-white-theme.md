# Devlog: Elevating the Navigation with React Bits <CardNav /> 🧭✨

**Date:** November 6, 2026  
**Mood:** Hyped & Polished  
**Topic:** Floating CardNav in Pure White & Govind Crimson  

---

Hey fellow devs! Grab your fresh brew, because this navbar upgrade turned out insanely gorgeous! ☕🚀

The user came in with a killer ready-made prompt from React Bits: the interactive `<CardNav />` component, which replaces standard boring navbars with an animated, spring-physics floating bar that unfolds into modular cards when you hit "Menu". The brief was super clear: *“Customize this in our white theme and colors only.”*

### The Setup & Tech Stack 📦
First, we pulled down the necessary icon packages using our trusty package manager:
```bash
pnpm add @hugeicons/react @hugeicons/core-free-icons
```
Both installed in under a minute without a hitch.

Next, we ported the component into TypeScript as `src/components/CardNav.tsx` and created `src/components/CardNav.css`. We made sure to introduce an SSR-safe `useIsomorphicLayoutEffect` so Next.js doesn't complain about server-side layout effects, and wired the `linkComponent` directly to Next.js's `<Link>` for instantaneous client-side route transitions!

### White Theme & Brand Color Calibration 🎨
Out of the box, `CardNav` comes with dark and light variants, but we tuned the white theme to match Govind Tours down to the sub-pixel:
- **Surface:** Frosted pure white (`rgba(255, 255, 255, 0.94)`) with a high-saturation 20px backdrop blur.
- **Edges & Rims:** Subtle Govind crimson tint (`rgba(161, 0, 23, 0.08)`) with a crisp highlight rim.
- **Cards & Typography:** Crisp slate (`#0f172a`), muted subtext (`#64748b`), and animated double-arrow link icons that light up in brand red (`#a10017`) on hover.
- **CTA:** Signature crimson gradient (`#ba1823` to `#a10017`) with a warm ruby shadow.

### The Information Architecture 🗺️
We organized the dropdown cards into three logical travel domains:
1. **Travel Services:** Flights, Tour Packages, and Travel Insurance.
2. **Visa & Documents:** Visa Approvals, Passport Assistance, and Payment Remittance.
3. **Company & Help:** Ahmedabad Office Contact Desk, Travel Blog, and Privacy Policy.

The CTA button on the right triggers the global `ContactModal` instantly, whether clicked on a wide desktop or at the bottom of the drawer on mobile!

### The Build Test 🏎️
We cleared Next's build cache and ran `pnpm build`. It completed with flying colors—all 14 static pages pre-rendered without a single TypeScript or CSS glitch.

The floating pill sits effortlessly above our scenic hero, breathes with authentic luxury, and delivers an incredible pair of wings to the site’s UX. Cheers to smooth navigation! 🛫🌍

