'use client';

import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function PassportPage() {
  const { openModal } = useContactModal();

  const services = [
    {
      title: 'Fresh Passport Application',
      desc: 'First-time passport applicants. Profile creation on official Seva portal & appointment booking.',
      timeframe: 'Normal (15–20 Days)',
      tag: 'Adult (18+)',
    },
    {
      title: 'Passport Renewal / Re-issue',
      desc: 'For expiring booklets, exhausted visa pages, or marital and address updates.',
      timeframe: 'Normal / Tatkal',
      tag: 'Renewal',
    },
    {
      title: 'Tatkal Scheme (Fast-Track)',
      desc: 'Accelerated passport dispatch within 1 to 3 days for urgent overseas travel.',
      timeframe: '1–3 Working Days',
      tag: 'Express Priority',
    },
    {
      title: 'Lost or Damaged Passport',
      desc: 'Requisite police report documentation, Annexure-F filing, and booklet re-issue.',
      timeframe: 'Verification Based',
      tag: 'Replacement',
    },
    {
      title: 'Minor Passport (Under 18)',
      desc: '5-year validity passports for children with parental consent paperwork.',
      timeframe: 'Normal (10–15 Days)',
      tag: 'Minors & Infants',
    },
    {
      title: 'Police Clearance Certificate (PCC)',
      desc: 'Official clearance documentation required for long-term work permits & residency.',
      timeframe: '7–10 Days',
      tag: 'PCC Application',
    },
  ];

  const requiredDocuments = [
    { 
      title: 'Proof of Date of Birth', 
      items: ['Birth Certificate (Municipal)', 'School Leaving / 10th Matriculation', 'PAN Card or Life Policy'] 
    },
    { 
      title: 'Proof of Present Address', 
      items: ['Aadhaar Card (matching current address)', 'Active Bank Passbook with seal & photo', 'Electricity / Gas utility bill'] 
    },
    { 
      title: 'Identity Verification', 
      items: ['Voter ID Card (EPIC)', 'Driving License', 'Existing / Expired Old Passport'] 
    },
    { 
      title: 'Tatkal Requirements', 
      items: ['Any 3 verification documents from official Gazette list (Aadhaar, PAN, Voter ID, Service ID)'] 
    },
  ];

  const roadmap = [
    { num: '01', title: 'Document Audit', desc: 'Pre-check certificates against Seva Kendra standards.' },
    { num: '02', title: 'Portal Filing', desc: 'Official portal submission and treasury fee deposit.' },
    { num: '03', title: 'Slot Scheduling', desc: 'Earliest available date at PSK or Post Office PSK.' },
    { num: '04', title: 'PSK Visit Briefing', desc: 'Biometric capture and counter verification instructions.' },
    { num: '05', title: 'Police Verification & Delivery', desc: 'Speed Post delivery directly to your home address.' },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Header Section */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-slate-500 block">
              PASSPORT SEVA KENDRA DESK • AHMEDABAD
            </span>
            <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
              Indian Passport &amp; Tatkal Assistance
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Eliminate appointment delays and documentation rejections with full-service Seva portal assistance and Tatkal fast-tracking.
            </p>
          </div>

          <button
            onClick={openModal}
            className="self-start md:self-auto bg-[#a10017] hover:bg-[#860013] text-white px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors shrink-0"
          >
            Book passport consultation
          </button>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-xs font-medium text-slate-500 block mb-1">
            Service Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
            Passport Application Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 transition-colors duration-150 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {svc.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{svc.timeframe}</span>
                </div>

                <h3 className="font-headline font-semibold text-base text-slate-900">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">PSK Slot Support</span>
                <button
                  onClick={openModal}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Document Requirements & Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Document Checklist */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-medium text-slate-500 block mb-1">
                Verification
              </span>
              <h3 className="text-xl font-headline font-semibold text-slate-900">
                Required Documents Checklist
              </h3>
            </div>

            <div className="space-y-3">
              {requiredDocuments.map((doc) => (
                <div key={doc.title} className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h4 className="font-headline font-semibold text-xs text-slate-900">
                    {doc.title}
                  </h4>
                  <ul className="space-y-1">
                    {doc.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-medium text-slate-500 block mb-1">
                Step-by-Step
              </span>
              <h3 className="text-xl font-headline font-semibold text-slate-900">
                Seva Kendra Workflow
              </h3>
            </div>

            <div className="space-y-3">
              {roadmap.map((step) => (
                <div key={step.num} className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5">
                  <span className="text-xs font-mono text-slate-400 shrink-0 pt-0.5">
                    {step.num}
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
