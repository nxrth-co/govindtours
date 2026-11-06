# Global Layout & Design System Architecture

## Overview
This document outlines the architecture, component hierarchy, and design token integration for the rebuild of the **Govind Tours** platform. The modern design system originates from Google Stage / Material 3 specifications (`stitch_remix_of_travel_insurance`) merged with the sitemap and business logic from the legacy website (`old_website`).

---

## 1. Design System Tokens & Styling

### Color Palette
Extracted directly from the Stage Remix exports, the color scheme utilizes a primary crimson and secondary oceanic blue identity:
- **Primary / Brand Accent**: `#a10017` / `#c6222a` (`primary`, `primary-container`)
- **Secondary / Action Accent**: `#0f5fae` / `#6faafe` (`secondary`, `secondary-container`)
- **Neutral Surfaces**: `#fff7fb` (`background` / `surface`), `#f6eaf4` (`surface-container`), `#ffffff` (`surface-container-lowest`)
- **Text & Foreground**: `#1f1a20` (`on-background` / `on-surface`), `#5b403e` (`on-surface-variant`)

### Typography
- **Headlines & Display**: `Plus Jakarta Sans` (configured via `next/font/google` variable `--font-headline`)
- **Body & Captions**: `Inter` (configured via `next/font/google` variable `--font-body`)

---

## 2. Component Hierarchy & App Router Structure

```
src/
├── app/
│   ├── layout.tsx              # Root Layout: fonts, metadata, global providers
│   ├── globals.css             # Tailwind base layers, typography mappings
│   └── page.tsx                # Home Page with Hero, Stats, Services, and Packages
├── components/
│   ├── Header.tsx              # Desktop top navbar + mobile bottom navigation bar
│   ├── Footer.tsx              # Multi-column footer with contact details and quick links
│   └── ContactModal.tsx        # Stage Remix split modal for inquiries
└── context/
    └── ContactModalContext.tsx # React Context provider for global modal control
```

---

## 3. Key Architectural Decisions

1. **Decoupled Modal State Management (`ContactModalContext`)**:
   - Allows any button or interactive link across any page (e.g., Header "Contact Us", Hero "Book Consultation", Destination "Inquire") to trigger the dialog without prop drilling.
   
2. **Dual-Tier Navigation for Mobile**:
   - Desktop uses a sticky glassmorphism header with active route underline indicator.
   - Mobile devices get both a collapsible top menu and a fixed bottom navigation bar (`[Flights]`, `[Visa]`, `[Home]`, `[Packages]`, `[Passport]`), optimizing thumb reachability.

3. **Zero Layout Shift (CLS) Font Optimization**:
   - Utilizes `next/font/google` to host and optimize `Plus_Jakarta_Sans` and `Inter`, preventing external CDN render-blocking.
