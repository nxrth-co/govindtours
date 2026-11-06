# Govind Tours - Core Pages & Architecture Specification

## Overview
This document specifies the complete set of primary destination and service routes reconstructed from the legacy Govind Tours sitemap (`old_website`), redesigned using Google Stage Material 3 design tokens (`stitch_remix_of_travel_insurance`).

---

## Route Inventory & Components

### 1. `/` (Home Landing Page)
- **Path**: `src/app/page.tsx`
- **Features**:
  - Full-width hero with background scenery, dual CTA buttons ("Book Consultation" and "Explore Packages").
  - Live stats banner: 2000+ Visa approvals, 500+ Custom holidays, 15+ Years experience, 99.4% satisfaction.
  - Core services directory cards linking directly to dedicated service routes.
  - Trending holiday packages showcase with starting rates.
  - Agency credentials, guarantees, and pre-footer inquiry prompt.

### 2. `/air-tickets` (Air Ticketing & Route Search)
- **Path**: `src/app/air-tickets/page.tsx`
- **Design Origin**: `air_tickets/`, `flight_search_form_1/`, `popular_flight_routes/`
- **Features**:
  - Interactive flight search engine with Domestic / International tabs, Round-trip / One-way toggle.
  - Live agency routes grid: New Delhi to Dubai, Mumbai to London, Bengaluru to Singapore, Ahmedabad to Bangkok, New Delhi to Toronto, Chennai to Kuala Lumpur.
  - Live fare comparison indicators, flight duration, and airline badges.
  - Special agency benefits: GDS student/senior discounts, date-change waivers, visa-synced dummy itineraries.

### 3. `/visa` (Visa Assistance & Embassy Directory)
- **Path**: `src/app/visa/page.tsx`
- **Design Origin**: `visa_services/`, `document_checklist/`, `visa_status_tracker/`
- **Features**:
  - Category filter pills: All Destinations, E-Visas, Stamp / Embassy Visas.
  - Comprehensive country matrix: UAE/Dubai, Schengen (27 European nations), USA (B1/B2), UK, Singapore, Canada, Thailand, Australia.
  - Essential document checklist covering civil certificates, bank statements, ITR, leave letters, and travel insurance.
  - 4-step roadmap: Profile review, dossier preparation, biometrics/slot booking, and visa issuance.

### 4. `/holidays` (Curated Holiday Packages)
- **Path**: `src/app/holidays/page.tsx`
- **Design Origin**: `curated_tour_packages/`, `beach_holidays_catalog/`, `tour_categories/`
- **Features**:
  - Category filters: Beaches & Islands, Heritage & Forts, Europe Specials, Family Getaways.
  - Rich package cards: Dubai & Abu Dhabi, Maldives Overwater Villas, Royal Rajasthan Circuit, Grand Europe Odyssey, Bali Villas, Kashmir Paradise.
  - Detailed inclusions breakdown: 4-star/5-star hotels, transfers, sightseeing, breakfast, private chauffeurs.
  - Custom tailor-made trip builder banner.

### 5. `/passport` (Passport Services & Tatkal Assistance)
- **Path**: `src/app/passport/page.tsx`
- **Design Origin**: `passport_services/`, `passport_application_guide_1/`
- **Features**:
  - Service directory: Fresh adult passport, passport renewal, Tatkal emergency scheme, lost/damaged replacement, minor passport, Police Clearance Certificate (PCC).
  - Mandatory civil documents checklist for Passport Seva Kendra (PSK) appointments.
  - 5-step application timeline from document pre-audit to Speed Post dispatch.

### 6. `/travel-insurance` (Overseas Medical & Trip Protection)
- **Path**: `src/app/travel-insurance/page.tsx`
- **Design Origin**: `travel_insurance/`, `insurance_plans_comparison/`
- **Features**:
  - Policy tier comparison: Asia Essential ($50k), Schengen Compliant (€30k, zero deductible, 100% embassy approved), USA & Global Platinum ($250k).
  - Feature highlights: Cashless hospitalization, baggage loss/delay allowance, trip cancellation refund, 24/7 global multi-lingual helpline.

### 7. `/payment-details` (Official Banking & UPI Verification)
- **Path**: `src/app/payment-details/page.tsx`
- **Design Origin**: `www.govindtours.com_payment-details.png`
- **Features**:
  - Official current account specifications: State Bank of India (SBI) & ICICI Bank Ltd.
  - One-click clipboard copy buttons for Account Numbers and IFSC codes.
  - Registered merchant UPI handle (`govindtours@icici`) and QR code display.
  - 3-step payment verification protocol and official fraud prevention advisory.

### 8. `/contact` (Concierge Contact Hub & 24/7 Emergency Line)
- **Path**: `src/app/contact/page.tsx`
- **Design Origin**: `get_in_touch_modal/`, `emergency_hub/`
- **Features**:
  - Complete headquarters address in Scindia House, Connaught Place, New Delhi.
  - Direct WhatsApp concierge, landline numbers, and department email addresses.
  - 24/7 overseas traveler emergency escalation hotline.
  - Full interactive on-page inquiry form with instant submission confirmation.

### 9. `/blog` (Travel Insights & Visa Advisories)
- **Path**: `src/app/blog/page.tsx`
- **Design Origin**: `www.govindtours.com_blog.png`
- **Features**:
  - Articles on 2026 Schengen visa rules, first-time international travel tips, Dubai seasonal guides, Tatkal passport eligibility, and travel insurance essentials.
  - Category tags, reading time, publication dates, and direct links to agent consultation.
