# Devlog: 2026-11-06 - Privacy Policy Page & Footer Quick Links

Privacy is paramount in travel, especially when passports, PANs, and visa bank statements are involved! 🛡️

We built out the official **Privacy Policy** page for Govind Tours adhering to the user's exact legal text, styled with our minimal and airy layout design tokens.

### What Got Done
- **Dedicated Route**: Created `src/app/privacy-policy/page.tsx` with full legal compliance details:
  - User definitions, sales channel scope, third-party link disclaimers.
  - Data collection breakdown (identity, registration, co-traveler bookings).
  - Specialized travel processing (embassy visa dossiers, RBI Liberalized Remittance Scheme compliance, contactless hotel check-in ID).
  - Sensitive document redaction and non-disclosure commitments.
- **Footer Navigation**: Added direct quick links to `/privacy-policy` both in the main "Quick Links" column and the bottom copyright utility bar in [Footer.tsx](../../src/components/Footer.tsx).
- **Verified Build**: Ran `pnpm build`, creating all 12 static routes with zero errors.

