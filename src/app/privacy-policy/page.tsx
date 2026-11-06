import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Govind Tours',
  description:
    'Read the official Privacy Policy of Govind Tours. Learn how we collect, handle, safeguard, and process your travel and personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-16 lg:space-y-20 pb-24">
      {/* Header Section */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-headline font-bold text-slate-500 hover:text-primary transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-on-surface text-xs font-bold uppercase tracking-wider shadow-sm">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span>Data Protection &amp; Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Govind Tours (India) · Practices for handling and securing user personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-headline font-bold text-on-surface tracking-tight flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <span>Introduction</span>
            </h2>
            <p>
              Govind Tours (India), recognizes the importance of privacy of its users and also of maintaining confidentiality of the information provided by its users as a responsible data controller and data processer.
            </p>
            <p>
              This Privacy Policy provides for the practices for handling and securing user&apos;s Personal Information (defined hereunder) by Govind Tours and its subsidiaries and affiliates.
            </p>
            <p>
              This Privacy Policy is applicable to any person (&lsquo;User&rsquo;) who purchase, intend to purchase, or inquire about any product(s) or service(s) made available by GT through any of GT customer interface channels including its website, mobile site, mobile app &amp; offline channels including call centres and offices (collectively referred herein as &ldquo;Sales Channels&rdquo;).
            </p>
            <p>
              For the purpose of this Privacy Policy, wherever the context so requires &ldquo;you&rdquo; or &ldquo;your&rdquo; shall mean User and the term &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo; shall mean Govind Tours. For the purpose of this Privacy Policy, Website means the website(s), mobile site(s) and mobile app(s).
            </p>
            <p>
              By using or accessing the Website or other Sales Channels, the User hereby agrees with the terms of this Privacy Policy and the contents herein. If you disagree with this Privacy Policy please do not use or access our Website or other Sales Channels.
            </p>
            <p>
              This Privacy Policy does not apply to any website(s), mobile sites and mobile apps of third parties, even if their websites/products are linked to our Website. User should take note that information and privacy practices of Govind Tours business partners, advertisers, sponsors or other sites to which Govind Tours provides hyperlink(s), may be materially different from this Privacy Policy. Accordingly, it is recommended that you review the privacy statements and policies of any such third parties with whom they interact.
            </p>
            <p>
              This Privacy Policy is an integral part of your User Agreement with Govind Tours and all capitalized terms used, but not otherwise defined herein, shall have the respective meanings as ascribed to them in the User Agreement.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Type of Information We Collect */}
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-headline font-bold text-on-surface tracking-tight flex items-center gap-2.5">
              <FileText className="w-6 h-6 text-primary shrink-0" />
              <span>Type Of Information We Collect &amp; It&apos;s Legal Basis</span>
            </h2>
            <p>
              The information as detailed below is collected for us to be able to provide the services chosen by you and also to fulfill our legal obligations as well as our obligations towards third parties as per our User Agreement.
            </p>
            <p>
              &ldquo;Personal Information&rdquo; of User shall include the information shared by the User and collected by us for the following purposes:
            </p>

            {/* Registration on the Website */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 space-y-2">
              <h3 className="font-headline font-bold text-base text-on-surface">
                Registration on the Website
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Information which you provide while subscribing to or registering on the Website, including but not limited to information about your personal identity such as name, gender, marital status, religion, age, profile picture etc., your contact details such as your email address, postal addresses, frequent flyer number, telephone (mobile or otherwise) and/or fax numbers. The information may also include information such as your banking details (including credit/debit card) and any other information relating to your income and/or lifestyle; billing information payment history etc. (as shared by you).
              </p>
            </div>

            {/* Other Information */}
            <div className="space-y-4 pt-2">
              <h3 className="font-headline font-bold text-base text-on-surface">
                Other Information and Documents Collected
              </h3>
              <p className="text-sm text-slate-600">
                We may also collect some other information and documents including but not limited to:
              </p>

              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>Transactional history:</strong> (other than banking details) about your e-commerce activities, buying behavior.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>Security details:</strong> Your usernames, passwords, email addresses and other security-related information used by you in relation to our Services.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>User-stored files:</strong> Data either created by you or by a third party and which you wish to store on our servers such as image files, documents etc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>Public and social data:</strong> Data available in public domain or received from any third party including social media channels, including but not limited to personal or non-personal information from your linked social media channels (like name, email address, friend list, profile pictures or any other information that is permitted to be received as per your account settings) as a part of your account information.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>Co-traveler information:</strong> Information pertaining to any other traveler(s) for whom you make a booking through your registered Govind Tours account. In such case, you must confirm and represent that each of the other traveler(s) for whom a booking has been made, has agreed to have the information shared by you disclosed to us and further be shared by us with the concerned service provider(s).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>Visa application documents:</strong> If you request Govind Tours to provide visa related services, copies of your passport, bank statements, originals of filled-in application forms, photographs, and any other information which may be required by the respective embassy to process your visa application.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>LRS &amp; RBI compliance:</strong> For international bookings, Users, in compliance with the Liberalized Remittance Scheme (LRS) of RBI or any other law may be required to provide details such as their PAN information or passport details number or any such information required by Service Provider. Such information shall be strictly used as per the aforesaid requirements only. In case a User does not wish to provide this information, Govind Tours may not be able to process the booking. Govind Tours will never share User’s PAN details without their prior consent unless otherwise such action is required by any law enforcement authority for investigation, by court order or in reference to any legal process.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>Hotel check-in identification:</strong> In case you opt for contactless check-in at Hotels, copies of your government identification like Aadhaar, driving license, election card etc., Self-declaration and any other information like date of birth, destination/origin of travel and place of residence that may be required by the concerned Hotel to honor your hotel booking.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <span>
                    <strong>Health &amp; vaccination records:</strong> Your Covid-19 Vaccination status and certificate in case you wish to avail any service for provision of which such Covid-19 vaccination related information is required or want to access your vaccination certificate at a later stage for travel related or any other purpose. Govind Tours will never process the beneficiary id and other id details contained in the vaccination certificate.
                  </span>
                </li>
              </ul>
            </div>

            {/* Safeguard Commitment */}
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 space-y-3 mt-6">
              <h4 className="font-headline font-bold text-base text-primary">
                Lawful Purpose &amp; Redaction Commitment
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                Such information shall be strictly used for the aforesaid specified &amp; lawful purpose only. User further understands that Govind Tours may share this information with the end service provider or any other third party for provision and facilitation of the desired booking. Govind Tours will always redact all/any sensitive &amp; confidential information contained in the vaccination certificate, passbook, bank statement or any other identity card submitted for the purpose of availing a service, promotional offer or booking a product on the Website.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                In case a User does not wish to provide this information or opts for deletion of the information already provided, Govind Tours may not be able to process the desired booking request. Govind Tours will never share any of the above information collected including PAN card details, Vaccination status &amp; certificate, Passport details, Aadhaar Card details without their prior consent unless otherwise such action is required by any law enforcement authority for investigation, by court order or in reference to any legal process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

