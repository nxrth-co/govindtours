'use client';

import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileCheck2,
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
      desc: 'For expiring booklets, exhausted visa pages, or marital/address updates.',
      timeframe: 'Normal / Tatkal',
      tag: 'Renewal',
    },
    {
      title: 'Tatkal Scheme (Fast-Track)',
      desc: 'Accelerated passport dispatch within 1 to 3 days for urgent departure dates.',
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
    { num: '01', title: 'File Review', desc: 'Pre-check certificates to prevent document hold.' },
    { num: '02', title: 'Fee Payment', desc: 'Treasury payment and official profile submission.' },
    { num: '03', title: 'Slot Booking', desc: 'Earliest available date at PSK or Post Office PSK.' },
    { num: '04', title: 'PSK Visit', desc: 'Biometric capture and counter verification.' },
    { num: '05', title: 'Dispatch', desc: 'Delivered by Speed Post directly to your home address.' },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-24">
      {/* Header Section: Spacious & Clean */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block">
              Passport Seva Kendra Desk
            </span>
            <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
              Indian Passport &amp; <span className="text-primary">Tatkal Services</span>
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Eliminate appointment delays and documentation rejections with full-service Seva portal assistance.
            </p>
          </div>

          <button
            onClick={openModal}
            className="self-start md:self-auto bg-primary-container hover:bg-primary text-white px-7 py-3.5 rounded-xl font-headline font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Book Appointment Consultation
          </button>
        </div>
      </section>

      {/* Services Grid: Clean & Modular */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface tracking-tight">
            Available Passport Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                    {svc.tag}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600">{svc.timeframe}</span>
                </div>

                <h3 className="font-headline font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6">
                <button
                  onClick={openModal}
                  className="w-full py-2 bg-slate-100 hover:bg-primary-container hover:text-white text-slate-800 rounded-xl text-xs font-headline font-bold transition-colors text-center"
                >
                  Apply With Our Desk
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents & Roadmap Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Document Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block mb-1">
                Documentation
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-extrabold text-on-surface tracking-tight">
                Mandatory PSK Checklist
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requiredDocuments.map((doc) => (
                <div
                  key={doc.title}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-2.5"
                >
                  <h4 className="font-headline font-bold text-sm text-on-surface">{doc.title}</h4>
                  <ul className="space-y-1.5">
                    {doc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Step Process */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block mb-1">
                Procedure
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-extrabold text-on-surface tracking-tight">
                Application Journey
              </h3>
            </div>

            <div className="space-y-3">
              {roadmap.map((s) => (
                <div
                  key={s.num}
                  className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30 flex items-start gap-4"
                >
                  <span className="text-base font-headline font-black text-primary/40 shrink-0">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-xs text-on-surface uppercase tracking-wider">{s.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{s.desc}</p>
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
