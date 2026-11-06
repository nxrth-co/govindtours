# Payment & Travel Insurance Pages Rebuilt

## Overview
Implemented the requested pages according to their official assets, modernizing their structure to fit our minimal, spacious, and responsive theme:
1. `/payment-details` ([src/app/payment-details/page.tsx](../src/app/payment-details/page.tsx))
2. `/copy-of-payment-details` ([src/app/copy-of-payment-details/page.tsx](../src/app/copy-of-payment-details/page.tsx))
3. `/travel-insurance` ([src/app/travel-insurance/page.tsx](../src/app/travel-insurance/page.tsx))

## Changes & Enhancements

1. **Payment Details (`/payment-details`)**:
   - Structured corporate bank accounts (State Bank of India & ICICI Bank) with one-click clipboard copy for Account Numbers and IFSC codes.
   - Incorporated the official agency **Bank Remittance Reference Sheet** (`/payment_details_card.jpg`).
   - Added payment confirmation guidelines (UTR/screenshot submission to WhatsApp at `+91 94264 17399`).

2. **Copy of Payment Details (`/copy-of-payment-details`)**:
   - Dedicated route hosting the secondary **Remittance & Bank Voucher Copy** (`/copy_payment_details_card.jpg`).
   - Cross-linked with the primary `/payment-details` page.
   - Outlines safety advisories on corporate account verification.

3. **Travel Insurance (`/travel-insurance`)**:
   - Retained the clean, 3-tier coverage structure (*Asia Essential*, *Schengen Compliant €30,000*, and *USA & Global Platinum*).
   - Embedded the official **Travel Insurance Policy Inclusions & Scope Sheet** (`/travel_insurance_card.jpg`).
   - Laid out 4 core inclusions (*Cashless Hospitalization*, *Baggage Loss*, *Trip Cancellation*, and *24/7 Global Helpline*).

4. **Navigation Integration**:
   - Added "Payment Details" under the **More** dropdown in [src/components/Header.tsx](../src/components/Header.tsx).
   - Linked "Payment Details" in the Quick Links and bottom policy bar in [src/components/Footer.tsx](../src/components/Footer.tsx).

## Verification
- Verified static generation via `pnpm build` (all 14 routes pre-rendered successfully).

