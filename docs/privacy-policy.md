# Privacy Policy Implementation

## Overview
Implemented the official **Privacy Policy** page for Govind Tours ([src/app/privacy-policy/page.tsx](../src/app/privacy-policy/page.tsx)) and added quick links to it in the footer ([src/components/Footer.tsx](../src/components/Footer.tsx)).

## Key Sections Covered
1. **Introduction & Scope**:
   - Status as data controller and processor for Govind Tours (India) and affiliates.
   - Applicability across Sales Channels (website, mobile, and offline agency offices).
   - Terms regarding User Agreement and third-party hyperlinks.
2. **Type of Information Collected & Legal Basis**:
   - Registration & identity information.
   - Transactional, login security, and co-traveler consent representations.
   - Mandatory visa paperwork (passports, financial statements, embassy forms).
   - RBI Liberalized Remittance Scheme (LRS) / PAN collection protocols.
   - Contactless hotel check-in identity documentation.
   - Health / Covid-19 vaccination certificate handling and strict redaction procedures.
3. **Redaction & Non-Disclosure Commitment**:
   - Affirmative policy that sensitive data (PAN, Aadhaar, Passport, bank accounts) will never be shared without consent unless required by court order or law enforcement.

## Navigation Integration
- Added **Privacy Policy** to the "Quick Links" column in [Footer.tsx](../src/components/Footer.tsx).
- Added **Privacy Policy** to the bottom copyright legal bar alongside "Contact & Support" and "Blog".

## Verification
- Built cleanly with `pnpm build` across all 12 static routes.

