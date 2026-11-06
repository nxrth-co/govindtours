'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function VisaPage() {
  const { openModal } = useContactModal();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'evisa' | 'embassy'>('all');

  const countries = [
    {
      country: 'United Arab Emirates',
      type: 'E-Visa',
      validity: '30 / 60 Days',
      processingTime: '24–48 Hours',
      fee: 'From ₹6,499',
      category: 'evisa',
      flag: '🇦🇪',
      description: 'Quick online tourist visa. Express 12-hour turnaround available.',
    },
    {
      country: 'Schengen (Europe 27)',
      type: 'Stamp / Biometrics',
      validity: 'Up to 90 Days',
      processingTime: '15 Days',
      fee: 'From ₹12,500',
      category: 'embassy',
      flag: '🇪🇺',
      description: 'France, Switzerland, Germany & Italy. Dossier prep and slot booking.',
    },
    {
      country: 'United States',
      type: 'B1 / B2 Visa',
      validity: '10 Yrs Multiple',
      processingTime: 'Interview Slot',
      fee: 'From ₹16,800',
      category: 'embassy',
      flag: '🇺🇸',
      description: 'DS-160 filling, expedited appointments, and mock interview prep.',
    },
    {
      country: 'United Kingdom',
      type: 'Standard Visitor',
      validity: '6M / 2 Yrs',
      processingTime: '3–4 Weeks',
      fee: 'From ₹14,200',
      category: 'embassy',
      flag: '🇬🇧',
      description: 'Financial documents review and VFS priority submission.',
    },
    {
      country: 'Singapore',
      type: 'E-Visa',
      validity: 'Up to 2 Yrs',
      processingTime: '3–4 Days',
      fee: 'From ₹2,800',
      category: 'evisa',
      flag: '🇸🇬',
      description: 'Authorized ICA agency submission delivered to your email.',
    },
    {
      country: 'Canada',
      type: 'Visitor Visa',
      validity: 'Passport Term',
      processingTime: '4–6 Weeks',
      fee: 'From ₹15,500',
      category: 'embassy',
      flag: '🇨🇦',
      description: 'Portal profile creation, tie-back verification, and biometrics.',
    },
    {
      country: 'Thailand',
      type: 'E-Visa',
      validity: '60 Days',
      processingTime: '3 Days',
      fee: 'From ₹3,200',
      category: 'evisa',
      flag: '🇹🇭',
      description: 'Pre-approved tourist visa to bypass airport arrival queues.',
    },
    {
      country: 'Australia',
      type: 'Subclass 600',
      validity: '1 Yr Multiple',
      processingTime: '15–20 Days',
      fee: 'From ₹13,900',
      category: 'evisa',
      flag: '🇦🇺',
      description: 'Direct digital submission into Australian Home Affairs portal.',
    },
  ];

  const filteredCountries = countries.filter(
    (c) => selectedCategory === 'all' || c.category === selectedCategory
  );

  const documentChecklist = [
    { title: 'Valid Passport', desc: 'Min. 6 months validity from return date + 2 blank pages.' },
    { title: 'Photographs', desc: 'Recent studio photos matching exact embassy specs.' },
    { title: 'Financial Records', desc: 'Last 6 months verified bank statement + 3 years ITR.' },
    { title: 'Employment Proof', desc: 'Leave sanction letter / NOC or GST certificate for businesses.' },
    { title: 'Flight & Hotel Vouchers', desc: 'Verifiable confirmed booking itineraries provided by our desk.' },
    { title: 'Travel Insurance', desc: 'Embassy-compliant medical coverage policy.' },
  ];

  const processSteps = [
    { step: '01', title: 'Profile Assessment', desc: 'Review travel history and identify optimal visa category.' },
    { step: '02', title: 'Dossier Preparation', desc: 'Complete official paperwork, cover letters, and document audit.' },
    { step: '03', title: 'Appointment & Biometrics', desc: 'Secure VFS/Embassy dates with interview briefing.' },
    { step: '04', title: 'Approval & Handover', desc: 'Application tracking until your visa or E-visa is issued.' },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Header Section */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-slate-500 block">
              CONSULAR &amp; VISA DESK • AHMEDABAD
            </span>
            <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
              Tourist &amp; Business Visa Assistance
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              From instant tourist E-Visas to intricate US, UK, and Schengen embassy dossiers with high approval track record.
            </p>
          </div>

          <button
            onClick={openModal}
            className="self-start md:self-auto bg-[#a10017] hover:bg-[#860013] text-white px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors shrink-0"
          >
            Check visa requirements
          </button>
        </div>
      </section>

      {/* 2. Countries & Requirements Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-medium text-slate-500 block mb-1">
              Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
              Popular Visa Destinations
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
            {[
              { id: 'all', label: 'All' },
              { id: 'evisa', label: 'E-Visa' },
              { id: 'embassy', label: 'Embassy / Stamp' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCountries.map((c) => (
            <div
              key={c.country}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 transition-colors duration-150 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{c.flag}</span>
                  <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {c.type}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline font-semibold text-base text-slate-900">
                    {c.country}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Processing:</span>
                    <span className="font-medium text-slate-800">{c.processingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Validity:</span>
                    <span className="font-medium text-slate-800">{c.validity}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block">Consultation fee</span>
                  <span className="font-headline font-semibold text-sm text-slate-900 tabular-nums">
                    {c.fee}
                  </span>
                </div>
                <button
                  onClick={openModal}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Document Checklist & 4-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Document Checklist */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-medium text-slate-500 block mb-1">
                Standard Requirements
              </span>
              <h3 className="text-xl font-headline font-semibold text-slate-900">
                Core Document Checklist
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documentChecklist.map((doc) => (
                <div key={doc.title} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <h4 className="font-headline font-semibold text-xs text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{doc.title}</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-medium text-slate-500 block mb-1">
                Workflow
              </span>
              <h3 className="text-xl font-headline font-semibold text-slate-900">
                How We Process Your Visa
              </h3>
            </div>

            <div className="space-y-3">
              {processSteps.map((step) => (
                <div key={step.step} className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5">
                  <span className="text-xs font-mono text-slate-400 shrink-0 pt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-headline font-semibold text-xs sm:text-sm text-slate-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
