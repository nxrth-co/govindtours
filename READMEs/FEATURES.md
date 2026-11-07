# Project Features & Documentation Directory

- [Global Layout & Design System Architecture](../docs/global-layout-and-design-system.md) - Design token integration, Next.js root layout, responsive navigation header, footer, and global contact modal.
- [Core Pages & Route Architecture](../docs/pages-and-features.md) - Full specification of reconstructed pages including Air Tickets, Visa Services, Holidays, Passport, Travel Insurance, Payment Details, Contact Hub, and Blog.

- [Business Details & Site Data Correction](../docs/business-data-correction.md) - Replaced placeholder Delhi contact info with verified Ahmedabad headquarters, updated official phone/email, and dropped unverified payment-details section.

- [Minimal & Spacious Modular UI Redesign](../docs/minimal-spacious-redesign.md) - Re-architected cluttered pages into minimal, high-breathing-room layouts with compressed modular cards while preserving design decisions.

- [Logo Integration & Navbar Decluttering](../docs/logo-and-navbar-update.md) - Replaced generic icons with official logo-full in header/footer, set logo-icon as favicon, and minimized navigation bar links.

- [Verified Google Reviews Integration](../docs/google-reviews.md) - Integrated real verified Google client reviews with reviewer links, star ratings, and service badges.

- [Privacy Policy Implementation](../docs/privacy-policy.md) - Created official Privacy Policy page covering data collection, RBI LRS compliance, document redaction, and footer quick links.

- [Hero Section Blurred Map Backdrop](../docs/hero-blurred-map-backdrop.md) - Implemented soft blurred, low-opacity world map background in the homepage hero section.

- [Hero Section Half-Viewport & Circular Quick Links](../docs/hero-half-viewport-and-circular-nav.md) - Re-engineered hero section into a scenic animated crossfade layout with circular visual navigation pills.

- [Payment & Travel Insurance Pages](../docs/payment-and-travel-insurance-pages.md) - Rebuilt /payment-details, /copy-of-payment-details, and /travel-insurance with embedded reference cards, copy actions, and modern responsive theme.

- [React Bits CardNav Navigation Integration](../docs/cardnav-navigation-integration.md) - Integrated animated <CardNav /> floating navbar with white theme, crimson accents, and modular service cards.

- [Tour Packages Page Rebuild & Route Migration](../docs/packages-page-implementation.md) - Migrated /holidays to /packages, implemented 8 official packages with authentic destination photography, alpine lake hero banner, and interactive filters.

- [Aperture Carousel Hero Integration](../docs/aperture-carousel-hero-integration.md) - Integrated interactive <ApertureCarousel /> in homepage hero featuring iris click-transitions, panoramic package slides, and quick circular navigation.
- [Git LFS & Repository Hygiene Setup](../docs/git-lfs-and-repo-setup.md) - Configured Git LFS for binary media assets, updated .gitignore against build caches and temp code, and synchronized with remote repository.
- [Homepage 9-Pass Unslop Redesign](../docs/homepage-unslop-redesign.md) - Comprehensive de-slopping of the homepage and aperture carousel across Spacing, Color, Icons, Copy, Type, Layout, Details, Visuals, and Motion.
- [Site-Wide Unslop Refactoring](../docs/site-wide-unslop-refactoring.md) - Complete aesthetic harmonization and de-slopping across all subpages (/air-tickets, /packages, /visa, /passport, /travel-insurance, /payment-details, /contact, /blog, /privacy-policy, and modals).
- [Groq AI Travel Concierge & Full-Page Chat](../docs/groq-ai-chatbot.md) - Groq-powered AI Travel Desk with floating widget, full-page concierge desk (/chat), site knowledge retrieval engine, and strict design-taste-frontend styling.
- [Docker Containerization](../docs/docker-containerization.md) - Production-ready multi-stage Docker packaging with Next.js standalone optimization, non-root user security hardening, and Docker Compose orchestration.
- [Cloudflare Pages Deployment & 25 MiB Asset Optimization](../docs/cloudflare-pages-deployment.md) - Solved the 25 MiB file size limit by eliminating Webpack disk cache packs, configuring automatic static export to out/, adding Cloudflare Pages Functions for Groq AI (/api/chat), and creating wrangler.toml.
- [Cloudflare Pages SSR & Edge Adapter Optimization](../docs/cloudflare-pages-ssr-edge-adapter.md) - Integrated @cloudflare/next-on-pages edge adapter, wrangler.jsonc configuration, setupDevPlatform() for local binding testing, and converted API routes to edge runtime.
