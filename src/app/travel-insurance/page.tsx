'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Check, 
  HeartPulse, 
  Briefcase, 
  PlaneTakeoff, 
  PhoneCall, 
  ArrowRight
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function TravelInsurancePage() {
  const { openModal } = useContactModal();

  const plans = [
    {
      name: 'Asia Essential',
      coverage: '$50,000 USD',
      price: '₹750 / week',
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
      price: '₹1,250 / week',
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
      price: '₹2,100 / week',
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
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Header Section */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono text-slate-500 block">
              EMBASSY-COMPLIANT PROTECTION • AHMEDABAD
            </span>
            <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
              International Travel Insurance
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Medical emergency cover, cashless international hospitalization, and Schengen embassy-compliant policies issued in minutes.
            </p>
          </div>

          <button
            onClick={openModal}
            className="self-start md:self-auto bg-[#a10017] hover:bg-[#860013] text-white px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors shrink-0"
          >
            Get policy quote
          </button>
        </div>
      </section>

      {/* 2. Plans Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <span className="text-xs font-medium text-slate-500 block mb-1">
            Policy Options
          </span>
          <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
            Protection Tiers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-xl p-6 flex flex-col justify-between transition-colors duration-150 ${
                p.popular
                  ? 'bg-slate-900 text-white border border-slate-800'
                  : 'bg-white border border-slate-200 text-slate-900'
              }`}
            >
              <div className="space-y-5">
                <div>
                  <span className={`text-[11px] font-mono block mb-1 ${p.popular ? 'text-slate-400' : 'text-slate-400'}`}>
                    [{p.tag}]
                  </span>
                  <h3 className="font-headline font-semibold text-lg">{p.name}</h3>
                  <div className="mt-3">
                    <span className={`text-[11px] block ${p.popular ? 'text-slate-400' : 'text-slate-400'}`}>Sum Insured</span>
                    <span className="text-xl font-headline font-semibold tabular-nums">{p.coverage}</span>
                  </div>
                  <div className={`mt-0.5 text-xs font-medium tabular-nums ${p.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {p.price}
                  </div>
                </div>

                <div className={`pt-4 border-t ${p.popular ? 'border-slate-800' : 'border-slate-100'}`}>
                  <ul className="space-y-2">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${p.popular ? 'text-slate-300' : 'text-slate-600'}`} />
                        <span className={p.popular ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={openModal}
                  className={`w-full py-2 px-3 rounded-lg font-headline font-semibold text-xs transition-colors ${
                    p.popular
                      ? 'bg-[#a10017] hover:bg-[#860013] text-white'
                      : 'border border-slate-200 hover:bg-slate-50 text-slate-900'
                  }`}
                >
                  Inquire this plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#f7f6f4] p-6 sm:p-8 border border-slate-200">
          <div className="mb-6">
            <h3 className="text-lg font-headline font-semibold text-slate-900">
              Why Overseas Insurance is Essential
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={b.title} className="space-y-1.5">
                <span className="text-xs font-mono text-slate-400 block">0{i + 1}</span>
                <h4 className="font-headline font-semibold text-sm text-slate-900">{b.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
