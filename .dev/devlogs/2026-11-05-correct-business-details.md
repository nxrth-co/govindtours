# Devlog: 2026-11-05 - Correcting Business Data & Pruning Payment Section

Grabbed another espresso and did some fact-checking! ☕️

Turns out our site had placeholder text mentioning Connaught Place, New Delhi with mock 98765-series phone numbers. We cross-referenced the actual operational details for Govind Tours (`govindtours.com` / `govindtours.online`) and aligned everything with reality.

### What Got Done
1. **Real Headquarters & Contact Info**:
   - Swapped out all Delhi placeholder addresses for the official Ahmedabad office: `A-312, Shilp Aaron, Opposite Marutinandan, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat - 380054`.
   - Updated the primary WhatsApp & phone number across the board to `+91 94264 17399`.
   - Consolidated emails to `info@govindtours.com`.
2. **Dropped Bank Details**:
   - Nuked the unverified `/payment-details` route and cleaned up references in [Header.tsx](../../src/components/Header.tsx), [Footer.tsx](../../src/components/Footer.tsx), and the homepage CTA button in [page.tsx](../../src/app/page.tsx).
   - Replaced "Payment Info" in the navbar with a clean "Contact" link.
3. **Verified Build**:
   - Ran `pnpm build` and verified all 9 static routes pre-render cleanly with zero TypeScript or webpack issues.

