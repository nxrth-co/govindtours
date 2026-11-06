/**
 * Govind Tours Site Knowledge Base & Context Engine
 * Provides structured ground-truth data for all site pages, services, pricing,
 * contact details, and banking information for the AI Travel Desk Concierge.
 */

export interface PageDocument {
  id: string;
  title: string;
  route: string;
  category: 'core' | 'service' | 'company' | 'legal';
  summary: string;
  keywords: string[];
  content: string;
}

export const SITE_PAGES: PageDocument[] = [
  {
    id: 'home',
    title: 'Govind Tours & Travels - Homepage',
    route: '/',
    category: 'core',
    summary:
      'Official portal of Govind Tours (Ahmedabad). Complete travel desk offering air ticketing, visa approvals, bespoke holiday circuits, passport assistance, and embassy-mandated travel insurance.',
    keywords: ['home', 'overview', 'services', 'agency', 'govind tours', 'ahmedabad', 'travels'],
    content: `Govind Tours & Travels is an accredited travel management firm based in Bodakdev, Ahmedabad.
Key Service Desks:
1. Air Tickets (IATA issuance, competitive international and domestic fares, seat and meal selection).
2. Visa Services (60+ countries with 99% approval track record, document vetting, and appointment slots).
3. Curated Tour Packages (Handcrafted circuits with verified stays, transfers, and local guides).
4. Passport Assistance (Fresh, Renewal, and Tatkal fast-track appointments at Passport Seva Kendra).
5. Travel Insurance (Schengen-compliant €30,000 cover, worldwide medical and baggage protection).
Office Location: A-312, Shilp Aaron, Sindhu Bhavan Marg, Bodakdev, Ahmedabad.
Direct Phone / WhatsApp: +91 94264 17399
Email: info@govindtours.com`,
  },
  {
    id: 'air-tickets',
    title: 'Air Tickets & Flight Booking Desk',
    route: '/air-tickets',
    category: 'service',
    summary:
      'Domestic and international airline ticketing desk. IATA-authorized issuance, instant re-issues, cancellation support, and competitive group fares.',
    keywords: [
      'flight',
      'flights',
      'air ticket',
      'air tickets',
      'airlines',
      'booking',
      'dubai flight',
      'london flight',
      'singapore flight',
      'bangkok flight',
      'iata',
      'fares',
    ],
    content: `Air Ticketing Services at Govind Tours:
- Domestic & International Flight Bookings across all major carriers (Emirates, Singapore Airlines, Qatar Airways, Air India, IndiGo, British Airways, Virgin Atlantic, etc.).
- Popular Routes & Sample Indicative Fares:
  * Ahmedabad (AMD) to Dubai (DXB): Non-stop, ~3h 30m, from ₹17,499.
  * Mumbai (BOM) to London (LHR): Non-stop, ~9h 15m, from ₹46,800.
  * Ahmedabad (AMD) to Singapore (SIN): Non-stop, ~5h 15m, from ₹22,400.
  * Ahmedabad (AMD) to Bangkok (BKK): Non-stop, ~4h 10m, from ₹17,900.
  * Delhi (DEL) to New York (JFK): Direct/1-stop, from ₹68,500.
  * Bengaluru (BLR) to Paris (CDG): 1-stop, from ₹44,200.
- Value Added Services:
  * Seat Selection & Special Meal Requests.
  * Excess Baggage Pre-booking at discounted rates.
  * Same-day emergency ticket reissuance and refund tracking.
  * Group booking discounts for corporate and family groups.
To book or inquire about live flight rates, contact the IATA desk at +91 94264 17399 or visit [Air Tickets](/air-tickets).`,
  },
  {
    id: 'visa',
    title: 'Visa Services & Consulate Approvals',
    route: '/visa',
    category: 'service',
    summary:
      'Comprehensive visa documentation and filing for 60+ countries. E-visas, biometric appointment scheduling, cover letter drafting, and financial dossier audits.',
    keywords: [
      'visa',
      'visas',
      'schengen',
      'dubai visa',
      'uae visa',
      'us visa',
      'b1 b2',
      'uk visa',
      'singapore visa',
      'thailand visa',
      'e-visa',
      'vfs',
      'biometrics',
      'rejection',
    ],
    content: `Visa Services at Govind Tours (99% Track Record across 60+ Countries):
1. United Arab Emirates (UAE / Dubai) E-Visa:
   - Validity: 30 / 60 Days Tourist.
   - Processing: 24 to 48 Hours (Express 12h available).
   - Fee: From ₹6,499.
2. Schengen (27 European Countries - France, Germany, Switzerland, Italy, etc.):
   - Type: Biometrics & Embassy Stamp.
   - Validity: Up to 90 Days.
   - Processing: 15 Working Days.
   - Fee: From ₹12,500.
   - Services: Dossier preparation, itinerary framing, VFS appointment slot booking, mandatory travel insurance.
3. United States (USA B1/B2 Visitor Visa):
   - Validity: 10 Years Multiple Entry.
   - Fee: From ₹16,800.
   - Services: DS-160 application review, early biometric and consular interview slot hunting, mock interview prep.
4. United Kingdom (UK Standard Visitor):
   - Validity: 6 Months to 2 Years.
   - Processing: 3 to 4 Weeks.
   - Fee: From ₹14,200.
   - Services: Financial documents audit, salary slips verification, VFS priority filing.
5. Singapore E-Visa:
   - Processing: 3 to 5 Days, Fee: From ₹3,499. Authorized submission through ICA.
6. Thailand (Tourist & E-Visa on Arrival):
   - Processing: 3 to 5 Days, Fee: From ₹4,100.
7. Australia (Subclass 600 Visitor Stream):
   - Processing: 4 to 6 Weeks, Fee: From ₹11,900.
8. Canada (Visitor TRV):
   - Processing: 6 to 8 Weeks, Fee: From ₹13,500.
Consultation: Walk-in at Shilp Aaron, Bodakdev or contact +91 94264 17399. Visit [Visa Services](/visa).`,
  },
  {
    id: 'packages',
    title: 'Holiday Tour Packages & Bespoke Circuits',
    route: '/packages',
    category: 'service',
    summary:
      'Curated domestic and international holiday tour packages. Verified 4-star stays, private AC chauffeur transfers, guided heritage walks, and customizable family itineraries.',
    keywords: [
      'package',
      'packages',
      'holidays',
      'tours',
      'goa',
      'kerala',
      'rajasthan',
      'ladakh',
      'kashmir',
      'uttarakhand',
      'andaman',
      'dubai package',
      'bali package',
      'europe package',
      'itinerary',
    ],
    content: `Curated Holiday Packages by Govind Tours:
1. Goa Coastal Circuit (Beach & Coastal):
   - Duration: 4 Nights / 5 Days
   - Route: AMD → GOI
   - Starting Price: ₹18,500 per person
   - Inclusions: Beachfront resort stay, watersports assistance, North & South Goa sightseeing, Old Goa heritage walks, private AC transfers.
2. Kerala Backwaters & Munnar (Nature & Wellness):
   - Duration: 5 Nights / 6 Days
   - Route: AMD → COK
   - Starting Price: ₹24,999 per person
   - Inclusions: Alleppey private luxury houseboat, Munnar tea plantation resort, Ayurvedic wellness spa session, daily breakfast & dinner.
3. Royal Rajasthan Heritage (Palaces & Desert):
   - Duration: 6 Nights / 7 Days
   - Route: AMD → JAI → JDH
   - Starting Price: ₹34,500 per person
   - Inclusions: Heritage haveli stays, Mehrangarh Fort, Amber Palace guided tours, Sam sand dunes luxury camping with folk dinner.
4. Leh Ladakh High Passes (High Altitude Adventure):
   - Duration: 6 Nights / 7 Days
   - Route: AMD → DEL → IXL
   - Starting Price: ₹38,000 per person
   - Inclusions: Pangong Tso lakeside camps, Khardung La pass crossing, Nubra Valley camel safari, oxygen kit and acclimatization support.
5. Uttarakhand Peaks & Lakes (Sacred Mountains):
   - Duration: 6 Nights / 7 Days (AMD → DEL → DED)
   - Inclusions: Nainital lake boating, Mussoorie hill excursions, Rishikesh evening Ganga Aarti, dedicated mountain chauffeur.
6. Jammu & Kashmir Valleys (Scenic Paradise):
   - Duration: 6 Nights / 7 Days (AMD → SXR)
   - Inclusions: Dal Lake shikara ride, Gulmarg gondola ride, Pahalgam valleys, Srinagar deluxe houseboat.
7. Andaman Coral Islands (Tropical Beaches):
   - Duration: 5 Nights / 6 Days
   - Inclusions: Port Blair Cellular Jail sound & light show, Havelock Radhanagar beach, scuba diving / snorkeling transfers.
8. Dubai Skyline & Desert Safari (International):
   - Duration: 4 Nights / 5 Days
   - Inclusions: 4-star Deira/Downtown hotel, Burj Khalifa 124th floor tickets, desert safari with BBQ dinner, Marina Dhow cruise.
All packages are customizable for couples, families, and private groups. Explore more at [Tour Packages](/packages).`,
  },
  {
    id: 'passport',
    title: 'Passport Assistance & Seva Kendra Filing',
    route: '/passport',
    category: 'service',
    summary:
      'Professional guidance for fresh passports, renewals, Tatkal fast-track appointments, minor passports, and Police Clearance Certificates (PCC).',
    keywords: [
      'passport',
      'tatkal',
      'passport renewal',
      'fresh passport',
      'psk',
      'seva kendra',
      'pcc',
      'police clearance',
      'minor passport',
      'damaged passport',
    ],
    content: `Passport Assistance Services at Govind Tours:
1. Fresh Passport Application:
   - For first-time applicants (adults 18+).
   - Timeline: 15 to 20 working days under Normal scheme.
   - Services: Seva portal profile creation, documentation vetting, and PSK slot scheduling.
2. Passport Renewal / Re-issue:
   - For expiring booklets (validity under 1 year), exhausted visa pages, or address/marital status change.
3. Tatkal Scheme (Express Fast-Track):
   - Accelerated passport dispatch within 1 to 3 working days.
   - For urgent business or medical foreign travel.
4. Lost or Damaged Passport:
   - Assistance with FIR filing, Annexure-F framing, and expedited booklet re-issue.
5. Minor Passport (Under 18):
   - 5-year validity booklets with parental consent documentation (Annexure-D).
6. Police Clearance Certificate (PCC):
   - Official clearance documentation required for long-term overseas work visas and immigration.
Mandatory Document Checklist:
- Date of Birth: Municipal Birth Certificate or 10th School Leaving Certificate.
- Identity & Address: Aadhaar Card, Voter ID, or Utility Bills matching name.
Visit [Passport Assistance](/passport) or contact our desk on +91 94264 17399.`,
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance & Overseas Medical Cover',
    route: '/travel-insurance',
    category: 'service',
    summary:
      'Embassy-approved travel insurance with cashless hospitalization, baggage delay, flight cancellation, and Schengen €30,000 compliant medical protection.',
    keywords: [
      'insurance',
      'travel insurance',
      'schengen insurance',
      'medical cover',
      'cashless',
      'baggage loss',
      'flight cancellation',
      'policy',
    ],
    content: `Travel Insurance Plans at Govind Tours:
1. Asia Essential:
   - Medical Coverage: $50,000 USD
   - Rate: ₹750 / week
   - Coverage: Emergency medical evacuation, checked baggage loss ($500), flight delay reimbursement, personal accident cover. Ideal for Thailand, Bali, Dubai, and Singapore.
2. Schengen Compliant (Mandatory European Visa):
   - Medical Coverage: €30,000 EUR
   - Rate: ₹1,250 / week
   - Coverage: 100% Embassy approved, zero medical deductible, emergency dental cover, trip cancellation up to €2,000, 24/7 cashless hospital network.
3. USA & Global Platinum:
   - Medical Coverage: $250,000 USD
   - Rate: ₹2,100 / week
   - Coverage: Full USA & Canada medical costs, missed connections, baggage loss up to $1,500, emergency family visit allowance, cashless direct billing network.
All policies are issued digitally within minutes. View full details at [Travel Insurance](/travel-insurance).`,
  },
  {
    id: 'payment-details',
    title: 'Official Bank & Payment Accounts',
    route: '/payment-details',
    category: 'company',
    summary:
      'Verified bank account coordinates for NEFT, RTGS, IMPS, and official remittances for ticket issuance, holiday packages, and visa consular fees.',
    keywords: [
      'payment',
      'bank',
      'bank details',
      'sbi',
      'icici',
      'account number',
      'ifsc',
      'rtgs',
      'neft',
      'imps',
      'wire transfer',
      'remittance',
    ],
    content: `Official Bank Accounts of GOVIND TOURS AND TRAVELS:
Account 1: State Bank of India (SBI) - Primary Current Account
- Beneficiary Name: GOVIND TOURS AND TRAVELS
- Account Number: 38291049281
- Account Type: Current Account
- IFSC Code: SBIN0000691
- Branch: Bodakdev Branch, Sindhu Bhavan Marg, Ahmedabad - 380054

Account 2: ICICI Bank Ltd - Instant IMPS / RTGS / NEFT
- Beneficiary Name: GOVIND TOURS AND TRAVELS
- Account Number: 000705019842
- Account Type: Current Account
- IFSC Code: ICIC0000007
- Branch: S.G. Highway Branch, Ahmedabad - 380054

Safety Notice:
Please ensure beneficiary name matches "GOVIND TOURS AND TRAVELS". After completing the transfer, share the transaction UTR number or bank receipt with our accounts desk via WhatsApp at +91 94264 17399 or email info@govindtours.com. Full verification at [Payment Details](/payment-details).`,
  },
  {
    id: 'contact',
    title: 'Office Contact & Consultation Desk',
    route: '/contact',
    category: 'company',
    summary:
      'Headquarters in Bodakdev, Ahmedabad. Office address, direct phone/WhatsApp desk, email, and consultation hours.',
    keywords: [
      'contact',
      'office',
      'address',
      'phone',
      'whatsapp',
      'email',
      'hours',
      'timing',
      'location',
      'shilp aaron',
      'sindhu bhavan',
      'bodakdev',
      'ahmedabad',
    ],
    content: `Govind Tours Headquarters & Travel Desk:
- Physical Address:
  A-312, Shilp Aaron,
  Opposite Marutinandan,
  Sindhu Bhavan Marg, Bodakdev,
  Ahmedabad, Gujarat 380054, India.
- Phone & WhatsApp: +91 94264 17399 (Direct Desk)
- Official Email: info@govindtours.com
- Working Hours:
  * Monday to Saturday: 10:00 AM – 7:00 PM
  * Sunday: Closed (Emergency ticket support reachable via phone)
  * National Holidays: Closed
- Walk-ins are welcome for in-person document verification, holiday planning, and visa counseling. Reach us via [Contact Desk](/contact).`,
  },
  {
    id: 'blog',
    title: 'Travel Advisory & Knowledge Hub',
    route: '/blog',
    category: 'company',
    summary:
      'Travel advisories, Schengen biometric requirements, first-time airport departure guides, Tatkal passport instructions, and seasonal destination guides.',
    keywords: [
      'blog',
      'articles',
      'schengen guide',
      'airport tips',
      'dubai best time',
      'tatkal vs normal',
      'travel advice',
    ],
    content: `Travel Advisory & Insight Articles:
1. Schengen Visa 2026: Biometric Rules & Avoiding Rejections (Bank balance requirements, cover letter framing, and appointment slot tips).
2. First-Time International Flyers: 10 Airport Rules (LRS limits, hand baggage liquid regulations, and immigration questioning).
3. Best Months to Visit Dubai: Balancing Weather & Desert Safaris (October to April peak season recommendations).
4. Tatkal vs Normal Indian Passport: Timelines, required ID documents, and police verification.
5. Why Overseas Travel Insurance is Essential for Every Trip ($50k+ medical evacuation risks).
Explore the full blog at [Travel Blog](/blog).`,
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy & Data Safeguards',
    route: '/privacy-policy',
    category: 'legal',
    summary:
      'Strict client data protection protocols. Handling of passport copies, biometric schedules, financial statements, and RBI Liberalised Remittance Scheme compliance.',
    keywords: ['privacy', 'policy', 'data protection', 'confidentiality', 'gdpr', 'lrs', 'security'],
    content: `Govind Tours Privacy & Data Protection Policy:
- Personal documents (passports, PAN, bank statements) are used strictly for airline ticketing, visa submissions, and insurance underwriting.
- No commercial sharing or third-party resale of personal contact information.
- Compliance with RBI Liberalised Remittance Scheme (LRS) regulations and consular submission standards.
- Digital document archives are protected with encrypted access and redacted after completion.
Read the full document at [Privacy Policy](/privacy-policy).`,
  },
];

/**
 * Matches a query against the knowledge base and returns relevant page documents.
 */
export function getRelevantPages(query: string, limit = 3): PageDocument[] {
  const normalized = query.toLowerCase();

  const scored = SITE_PAGES.map((page) => {
    let score = 0;
    // Route or id exact match
    if (normalized.includes(page.id) || normalized.includes(page.route.replace('/', ''))) {
      score += 10;
    }
    // Keyword match
    for (const kw of page.keywords) {
      if (normalized.includes(kw)) {
        score += 5;
      }
    }
    // Title match
    const titleWords = page.title.toLowerCase().split(/\s+/);
    for (const word of titleWords) {
      if (word.length > 3 && normalized.includes(word)) {
        score += 3;
      }
    }
    return { page, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const matched = scored.filter((item) => item.score > 0).map((item) => item.page);

  // If no high-confidence match, return top general pages (home, contact, packages)
  if (matched.length === 0) {
    return [SITE_PAGES[0], SITE_PAGES[7], SITE_PAGES[3]].slice(0, limit);
  }

  return matched.slice(0, limit);
}

/**
 * Builds the comprehensive site context string for injection into the system prompt.
 */
export function buildSiteContext(query?: string): string {
  const directory = SITE_PAGES.map((p) => `- [${p.title}](${p.route}): ${p.summary}`).join('\n');

  let detailedContext = '';
  if (query && query.trim().length > 0) {
    const relevant = getRelevantPages(query, 3);
    detailedContext = `\n### RELEVANT SITE PAGES FOR CURRENT QUERY:\n` +
      relevant
        .map(
          (p) =>
            `#### Page: ${p.title} (URL: ${p.route})\n${p.content}`
        )
        .join('\n\n');
  } else {
    // Default high-level context
    detailedContext = `\n### OVERVIEW OF KEY DESKS & BANKING:\n` +
      SITE_PAGES.filter((p) => ['contact', 'payment-details', 'visa', 'packages'].includes(p.id))
        .map((p) => `#### ${p.title} (${p.route}):\n${p.content}`)
        .join('\n\n');
  }

  return `### GOVIND TOURS SITE MAP & PAGE DIRECTORY:\n${directory}\n${detailedContext}`;
}

