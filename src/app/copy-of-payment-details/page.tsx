'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Copy, 
  CheckCircle2, 
  ArrowLeft 
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function CopyOfPaymentDetailsPage() {
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
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Header Section */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-2 text-center">
          <div className="flex justify-center mb-2">
            <Link
              href="/payment-details"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to main payment details</span>
            </Link>
          </div>
          <span className="text-xs font-mono text-slate-500 block">
            ARCHIVE NOTICE • REMITTANCE DESK
          </span>
          <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
            Accounts &amp; Payment Verification
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Authorized banking credentials for traveler invoicing, ticket confirmations, and consulate fees.
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {primaryAccounts.map((acc) => (
            <div
              key={acc.bank}
              className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-headline font-semibold text-sm text-slate-900">{acc.bank}</h3>
                      <span className="text-[11px] text-slate-500">{acc.badge}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      Account Name / Beneficiary
                    </span>
                    <span className="font-headline font-semibold text-slate-800 text-sm">
                      {acc.beneficiary}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      Account Number
                    </span>
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200 font-mono text-xs text-slate-900">
                      <span>{acc.accountNumber}</span>
                      <button
                        onClick={() => copyToClipboard(acc.accountNumber, `copy-${acc.bank}-acc`)}
                        className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                        title="Copy Account Number"
                      >
                        {copiedField === `copy-${acc.bank}-acc` ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      IFSC Code
                    </span>
                    <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200 font-mono text-xs text-slate-900">
                      <span>{acc.ifsc}</span>
                      <button
                        onClick={() => copyToClipboard(acc.ifsc, `copy-${acc.bank}-ifsc`)}
                        className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                        title="Copy IFSC"
                      >
                        {copiedField === `copy-${acc.bank}-ifsc` ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 block mb-0.5">
                      Account Type &amp; Branch
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {acc.accountType} • {acc.branch}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">NEFT / RTGS / IMPS</span>
                <span className="text-[11px] text-slate-600 font-medium">Verified Current Account</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[#f7f6f4] p-5 sm:p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
          <h4 className="font-headline font-semibold text-sm text-slate-900">
            Payment Confirmation Protocol
          </h4>
          <p className="leading-relaxed">
            Please share the transaction UTR number to WhatsApp <strong>+91 94264 17399</strong> or email <strong>info@govindtours.com</strong> for instant reconciliation.
          </p>
        </div>
      </section>
    </div>
  );
}
