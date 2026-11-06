'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck2, 
  Sparkles 
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
    { step: '01', title: 'Profile Assessment', desc: 'Review travel history & identify optimal visa category.' },
    { step: '02', title: 'Dossier Preparation', desc: 'Complete official paperwork, cover letters, and document audit.' },
    { step: '03', title: 'Appointment & Biometrics', desc: 'Secure VFS/Embassy dates with interview briefing.' },
    { step: '04', title: 'Approval & Handover', desc: 'Application tracking until your visa or E-visa is issued.' },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-24">
      {/* Header Section: Clean & Focused */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block">
              99.2% Historical Success
            </span>
            <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
              Visa Assistance for <span className="text-primary">60+ Countries</span>
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              From instant tourist E-Visas to intricate US, UK, and Schengen embassy dossiers.
            </p>
          </div>

          <button
            onClick={openModal}
            className="self-start md:self-auto bg-primary-container hover:bg-primary text-white px-7 py-3.5 rounded-xl font-headline font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Start Visa Assessment
          </button>
        </div>
      </section>

      {/* Country Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface tracking-tight">
              Select Destination
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'evisa', label: 'E-Visas' },
              { id: 'embassy', label: 'Embassy / Stamp' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedCategory(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all ${
                  selectedCategory === f.id
                    ? 'bg-on-surface text-white shadow-sm'
                    : 'bg-surface-container text-slate-600 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCountries.map((c) => (
            <div
              key={c.country}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{c.flag}</span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      c.category === 'evisa'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-blue-50 text-secondary'
                    }`}
                  >
                    {c.type}
                  </span>
                </div>

                <div>
                  <h3 className="font-headline font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                    {c.country}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Processing:</span>
                    <span className="font-medium text-slate-700">{c.processingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Validity:</span>
                    <span className="font-medium text-slate-700">{c.validity}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <span className="font-headline font-extrabold text-sm text-primary-container">
                  {c.fee}
                </span>
                <button
                  onClick={openModal}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-primary-container hover:text-white text-slate-800 rounded-lg text-xs font-headline font-bold transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Document Checklist & Process: Modular 2-Column Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Document Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block mb-1">
                Document Checklist
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-extrabold text-on-surface tracking-tight">
                Standard Requirements
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {documentChecklist.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-primary font-headline font-bold text-sm">
                    <FileCheck2 className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Process Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block mb-1">
                How It Works
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-extrabold text-on-surface tracking-tight">
                Our 4-Step Workflow
              </h3>
            </div>
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/30 flex items-start gap-4"
                >
                  <span className="text-xl font-headline font-black text-primary/40 shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-sm text-on-surface">{step.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{step.desc}</p>
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
