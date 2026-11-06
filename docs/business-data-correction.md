# Business Details & Site Data Correction

## Overview
Replaced fictitious placeholder contact and headquarters data with verified official business records for **Govind Tours** (cross-checked from `govindtours.com` / `govindtours.online`). In addition, removed the unverified bank details page and cleaned up related links.

## Changes Made
1. **Official Business Address**:
   - Updated from mock Connaught Place, New Delhi address to:
     `A-312, Shilp Aaron, Opposite Marutinandan, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat - 380054, India`
2. **Official Contact Numbers & Emails**:
   - Phone / WhatsApp: `+91 94264 17399`
   - Official Email: `info@govindtours.com`
3. **Dropped Bank Details Section**:
   - Removed `/payment-details` route.
   - Updated navigation in [Header.tsx](../src/components/Header.tsx), [Footer.tsx](../src/components/Footer.tsx), and CTA buttons in [page.tsx](../src/app/page.tsx) to point to `/contact`.
4. **Form Placeholders & Metadata**:
   - Updated contact form and modal placeholders to `+91 94264 17399`.
   - Updated SEO keywords to target Ahmedabad instead of New Delhi.

