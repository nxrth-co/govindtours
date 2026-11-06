import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Govind Tours',
  description:
    'Read the official Privacy Policy of Govind Tours. Learn how we collect, handle, safeguard, and process your travel and personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-16 lg:space-y-20 pb-20">
      {/* 1. Header Section */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-mono text-slate-500 block">
            DATA PROTECTION &amp; CONFIDENTIALITY NOTICE
          </span>
          <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Govind Tours &amp; Travels (Ahmedabad) · Practices for collecting, verifying, and safeguarding traveler personal information.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl p-6 sm:p-10 border border-slate-200 space-y-8 text-slate-700 leading-relaxed text-xs sm:text-sm">
          {/* Introduction */}
          <div className="space-y-3">
            <h2 className="text-lg font-headline font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-slate-700 shrink-0" />
              <span>1. Introduction</span>
            </h2>
            <p>
              Govind Tours recognizes the importance of maintaining user confidentiality and safeguarding data provided for airline reservations, visa processing, and holiday bookings.
            </p>
            <p>
              This Privacy Policy applies to all travelers who inquire about or purchase travel services through Govind Tours customer interfaces, including our physical Bodakdev office, direct phone/WhatsApp desk, and web portal.
            </p>
            <p>
              By accessing our services or submitting documentation for ticketing and consular filing, the user agrees to the practices outlined in this policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Type of Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-lg font-headline font-semibold text-slate-900 tracking-tight flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-700 shrink-0" />
              <span>2. Information We Collect &amp; Consular Purpose</span>
            </h2>
            <p>
              Information collected by our desk is strictly restricted to details required for booking airline seats, issuing travel insurance, and fulfilling foreign consulate requirements:
            </p>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 space-y-1.5">
              <h3 className="font-headline font-semibold text-xs text-slate-900">
                Primary Identity &amp; Contact Records
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full legal name (as per passport), date of birth, contact telephone numbers, email address, physical residential address, and emergency contact details.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Passport &amp; Visa Documents:</strong> Scanned bio-pages, existing visa stamps, photographs, financial statements, and appointment forms submitted for consular docket preparation.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Co-Traveler Data:</strong> Details of accompanying family members or group travelers provided with their explicit consent.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Payment &amp; Remittance Records:</strong> Bank transaction reference numbers (UTR), invoicing details, and GST identifiers. We do not store credit card CVV numbers.
                </span>
              </li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Data Protection & Redaction */}
          <div className="space-y-3">
            <h2 className="text-lg font-headline font-semibold text-slate-900 tracking-tight">
              3. Data Protection &amp; Embassy Sharing
            </h2>
            <p>
              Traveler documentation is shared solely with certified airlines, accredited Global Distribution Systems (GDS), registered hotel suppliers, and official visa application centers (e.g., VFS Global, BLS International, official embassy portals).
            </p>
            <p>
              We do not sell, rent, or lease traveler personal details to third-party marketing brokers. Financial files submitted for visa processing are purged or securely archived following visa decision confirmation.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Contact Officer */}
          <div className="space-y-2">
            <h2 className="text-lg font-headline font-semibold text-slate-900 tracking-tight">
              4. Contact &amp; Grievance
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              For any questions regarding personal data records, corrections, or document return requests, please reach out directly to our compliance desk:
            </p>
            <div className="pt-1 text-xs text-slate-800 space-y-0.5 font-medium">
              <div>Govind Tours &amp; Travels</div>
              <div>A-312, Shilp Aaron, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054</div>
              <div>Email: info@govindtours.com | Phone: +91 94264 17399</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
