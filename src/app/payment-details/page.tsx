'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  CreditCard, 
  QrCode, 
  ShieldCheck, 
  Copy, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function PaymentDetailsPage() {
  const { openModal } = useContactModal();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const primaryAccounts = [
    {
      bank: 'State Bank of India (SBI)',
      beneficiary: 'GOVIND TOURS AND TRAVELS',
      accountNumber: '38291049281',
      accountType: 'Current Account',
      ifsc: 'SBIN0000691',
      branch: 'Bodakdev Branch, Sindhu Bhavan Marg, Ahmedabad - 380054',
      badge: 'Primary Current Account',
    },
    {
      bank: 'ICICI Bank Ltd',
      beneficiary: 'GOVIND TOURS AND TRAVELS',
      accountNumber: '000705019842',
      accountType: 'Current Account',
      ifsc: 'ICIC0000007',
      branch: 'S.G. Highway Branch, Ahmedabad - 380054',
      badge: 'Instant IMPS / RTGS / NEFT',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-24">
      {/* Header Section */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-on-surface text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Secure Banking &amp; Remittance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
            Official Bank &amp; <span className="text-primary">Payment Details</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Direct account details for air ticketing, holiday package bookings, visa consulate fees, and overseas remittances.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bank Account Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {primaryAccounts.map((acc) => (
            <div
              key={acc.bank}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                {/* Header of Card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-base text-on-surface">{acc.bank}</h3>
                      <span className="text-[11px] font-semibold text-emerald-600">{acc.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Details Fields */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Account Name / Beneficiary
                    </span>
                    <span className="font-headline font-bold text-slate-800 text-sm sm:text-base">
                      {acc.beneficiary}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Account Number
                    </span>
                    <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 font-mono font-bold text-sm text-slate-800">
                      <span>{acc.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(acc.accountNumber, `${acc.bank}-acc`)}
                        className="p-1 text-slate-400 hover:text-primary transition-colors"
                        title="Copy Account Number"
                      >
                        {copiedField === `${acc.bank}-acc` ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      IFSC Code
                    </span>
                    <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 font-mono font-bold text-sm text-slate-800">
                      <span>{acc.ifsc}</span>
                      <button
                        onClick={() => copyToClipboard(acc.ifsc, `${acc.bank}-ifsc`)}
                        className="p-1 text-slate-400 hover:text-primary transition-colors"
                        title="Copy IFSC"
                      >
                        {copiedField === `${acc.bank}-ifsc` ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Account Type &amp; Branch
                    </span>
                    <span className="text-slate-600 text-xs block leading-relaxed">
                      {acc.accountType} · {acc.branch}
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified Corporate Account
                </span>
                <span className="text-[11px] text-slate-400">Govind Tours &amp; Travels</span>
              </div>
            </div>
          ))}
        </div>

        {/* Original Bank Details Sheet Graphic Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                Official Agency Notice
              </span>
              <h2 className="text-xl sm:text-2xl font-headline font-bold text-on-surface">
                Bank Remittance Reference Sheet
              </h2>
            </div>
            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full self-start sm:self-auto font-medium">
              Official Invoice Records
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50">
            <Image
              src="/payment_details_card.jpg"
              alt="Official Bank Payment Details Sheet"
              width={1275}
              height={1360}
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Verification & Payment Instructions */}
        <div className="rounded-3xl bg-surface-container-low p-8 sm:p-10 border border-outline-variant/30 space-y-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-headline font-bold text-base text-on-surface">
                Payment Confirmation Guidelines
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                After completing an IMPS, NEFT, or RTGS bank transfer, please share the transaction reference (UTR) or screenshot along with your passenger name and booking reference directly to our accounts desk at <strong>+91 94264 17399</strong> or via email at <strong>info@govindtours.com</strong>.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/60 flex flex-wrap gap-4 items-center justify-between">
            <div className="text-xs text-slate-500">
              Need assistance? Call our desk Monday to Saturday, 10:00 AM – 7:00 PM.
            </div>
            <button
              onClick={openModal}
              className="bg-primary text-white px-6 py-2.5 rounded-xl font-headline font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary-container transition-all"
            >
              Contact Accounts Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

