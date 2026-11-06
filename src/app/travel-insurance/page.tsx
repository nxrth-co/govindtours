'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Check, 
  HeartPulse, 
  Briefcase, 
  PlaneTakeoff, 
  PhoneCall, 
  FileCheck2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function TravelInsurancePage() {
  const { openModal } = useContactModal();

  const plans = [
    {
      name: 'Asia Essential',
      coverage: '$50,000 USD',
      price: '₹750 / Week',
      popular: false,
      tag: 'Thailand, Bali & Dubai',
      features: [
        'Emergency Medical Evacuation',
        'Hospital Cash Allowance',
        'Loss of Checked Baggage ($500)',
        'Flight Delay Reimbursement',
        'Personal Accident Cover',
      ],
    },
    {
      name: 'Schengen Compliant',
      coverage: '€30,000 EUR',
      price: '₹1,250 / Week',
      popular: true,
      tag: 'Mandatory Europe Visa',
      features: [
        '100% Embassy Approved Policy',
        'Zero Deductible on Medical',
        'Emergency Dental Cover',
        'Trip Cancellation (€2,000)',
        'Loss of Passport Support',
        '24/7 Cashless Hospitalization',
      ],
    },
    {
      name: 'USA & Global Platinum',
      coverage: '$250,000 USD',
      price: '₹2,100 / Week',
      popular: false,
      tag: 'Worldwide Coverage',
      features: [
        'Full USA & Canada Medical',
        'Missed Flight Connection',
        'Loss of Baggage ($1,500)',
        'Emergency Family Visit Cover',
        'Hijack Distress Allowance',
        'Direct Hospital Billing Network',
      ],
    },
  ];

  const benefits = [
    { title: 'Cashless Hospitalization', desc: 'Direct claim settlement across verified international hospital networks.' },
    { title: 'Baggage Loss & Delay', desc: 'Compensation protection if airlines misplace or delay checked baggage.' },
    { title: 'Trip Cancellation', desc: 'Reimbursement of non-refundable flight and hotel reservations due to medical emergencies.' },
    { title: '24/7 Global Helpline', desc: 'Round-the-clock emergency medical guarantees and consular assistance.' },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-24">
      {/* Header Section: Spacious & Clean */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block">
              Embassy-Approved Protection
            </span>
            <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
              International <span className="text-primary">Travel Insurance</span>
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Medical emergency cover, cashless international hospitalization, and Schengen embassy-compliant policies issued in minutes.
            </p>
          </div>

          <button
            onClick={openModal}
            className="self-start md:self-auto bg-primary-container hover:bg-primary text-white px-7 py-3.5 rounded-xl font-headline font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Get Instant Policy Quote
          </button>
        </div>
      </section>

      {/* Plans Comparison: Clean Bento Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-4 border-b border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-on-surface tracking-tight">
            Protection Tiers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                p.popular
                  ? 'bg-slate-900 text-white shadow-xl ring-2 ring-primary-container'
                  : 'bg-white border border-slate-200/80 shadow-sm text-on-surface'
              }`}
            >
              <div className="space-y-6">
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${p.popular ? 'text-primary-fixed-dim' : 'text-slate-400'}`}>
                    {p.tag}
                  </span>
                  <h3 className="font-headline font-extrabold text-xl">{p.name}</h3>
                  <div className="mt-3">
                    <span className="text-[11px] text-slate-400 block">Sum Insured</span>
                    <span className="text-2xl font-headline font-extrabold">{p.coverage}</span>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-emerald-500">
                    {p.price}
                  </div>
                </div>

                <div className={`pt-6 border-t ${p.popular ? 'border-slate-800' : 'border-slate-100'}`}>
                  <ul className="space-y-2.5">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={p.popular ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={openModal}
                  className={`w-full py-2.5 rounded-xl text-xs font-headline font-bold transition-all ${
                    p.popular
                      ? 'bg-primary-container hover:bg-primary text-white shadow-md'
                      : 'bg-slate-100 hover:bg-primary-container hover:text-white text-slate-800'
                  }`}
                >
                  Request Policy
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Policy Specification Sheet & Graphic Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                Comprehensive Coverage Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-headline font-bold text-on-surface">
                Travel Insurance Policy Scope &amp; Inclusions
              </h2>
            </div>
            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full self-start sm:self-auto font-medium">
              Consulate Approved
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-50">
            <Image
              src="/travel_insurance_card.jpg"
              alt="Official Travel Insurance Policy Inclusions"
              width={1275}
              height={2020}
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits: Minimal Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface-container-low p-8 sm:p-12 border border-outline-variant/30">
          <div className="mb-8">
            <h3 className="text-2xl font-headline font-bold text-on-surface">
              Core Policy Inclusions
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <div key={b.title} className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-headline font-bold text-sm text-on-surface pt-1">{b.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
