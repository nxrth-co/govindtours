'use client';

import React, { useState } from 'react';
import { 
  Plane, 
  Calendar, 
  Users, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Percent, 
  Sparkles 
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function AirTicketsPage() {
  const { openModal } = useContactModal();
  const [flightType, setFlightType] = useState<'domestic' | 'international'>('international');
  const [searchParams, setSearchParams] = useState({
    from: 'Ahmedabad (AMD)',
    to: 'Dubai (DXB)',
    departDate: '2026-11-15',
    returnDate: '2026-11-22',
    passengers: '1 Adult, Economy',
  });

  const popularRoutes = [
    {
      from: 'Ahmedabad (AMD)',
      to: 'Dubai (DXB)',
      airline: 'Emirates / SpiceJet',
      duration: '3h 30m',
      stops: 'Non-stop',
      price: '₹17,499',
      badge: 'Direct Flight',
    },
    {
      from: 'Mumbai (BOM)',
      to: 'London (LHR)',
      airline: 'Virgin Atlantic / BA',
      duration: '9h 15m',
      stops: 'Non-stop',
      price: '₹46,800',
      badge: 'Popular',
    },
    {
      from: 'Ahmedabad (AMD)',
      to: 'Singapore (SIN)',
      airline: 'Singapore Airlines',
      duration: '5h 15m',
      stops: 'Non-stop',
      price: '₹22,400',
      badge: 'Best Value',
    },
    {
      from: 'Ahmedabad (AMD)',
      to: 'Bangkok (BKK)',
      airline: 'Thai Airways / IndiGo',
      duration: '4h 10m',
      stops: 'Non-stop',
      price: '₹17,900',
      badge: 'Getaway',
    },
    {
      from: 'Delhi (DEL)',
      to: 'Toronto (YYZ)',
      airline: 'Air Canada / Lufthansa',
      duration: '15h 30m',
      stops: '1 Stop',
      price: '₹68,500',
      badge: 'Student Fares',
    },
    {
      from: 'Mumbai (BOM)',
      to: 'Kuala Lumpur (KUL)',
      airline: 'Malaysia Airlines',
      duration: '5h 00m',
      stops: 'Non-stop',
      price: '₹16,999',
      badge: 'Instant Seat',
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="space-y-20 lg:space-y-28 pb-24">
      {/* Header & Search Form: Compact, Minimal & Spacious */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block">
              IATA Ticketing Desk
            </span>
            <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
              Domestic &amp; International <span className="text-primary">Flight Fares</span>
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              Negotiated agent fares, flexible date rescheduling, extra baggage allowance, and embassy-compliant dummy tickets.
            </p>
          </div>

          {/* Clean Flight Inquiry Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm max-w-5xl">
            <div className="flex gap-2 mb-6">
              <button
                type="button"
                onClick={() => setFlightType('international')}
                className={`px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all ${
                  flightType === 'international'
                    ? 'bg-on-surface text-white shadow-sm'
                    : 'bg-surface-container text-slate-600 hover:text-slate-900'
                }`}
              >
                International Flights
              </button>
              <button
                type="button"
                onClick={() => setFlightType('domestic')}
                className={`px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all ${
                  flightType === 'domestic'
                    ? 'bg-on-surface text-white shadow-sm'
                    : 'bg-surface-container text-slate-600 hover:text-slate-900'
                }`}
              >
                Domestic Flights
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">From</label>
                <input
                  type="text"
                  value={searchParams.from}
                  onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all font-medium text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">To</label>
                <input
                  type="text"
                  value={searchParams.to}
                  onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all font-medium text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Departure</label>
                <input
                  type="date"
                  value={searchParams.departDate}
                  onChange={(e) => setSearchParams({ ...searchParams, departDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all font-medium text-slate-800"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Class &amp; Pax</label>
                <input
                  type="text"
                  value={searchParams.passengers}
                  onChange={(e) => setSearchParams({ ...searchParams, passengers: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-1 focus:ring-primary focus:border-primary transition-all font-medium text-slate-800"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-primary-container hover:bg-primary text-white py-2.5 px-4 rounded-xl font-headline font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  Request Fare Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Routes: Clean Minimal Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-100 gap-4">
          <div>
            <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block mb-1">
              Indicative Fares
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-extrabold text-on-surface tracking-tight">
              Popular Flight Routes
            </h2>
          </div>
          <button
            onClick={openModal}
            className="text-primary font-headline font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
          >
            <span>Inquire for Custom Group Rates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoutes.map((route) => (
            <div
              key={route.from + route.to}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {route.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{route.airline}</span>
                </div>

                <div className="flex items-center justify-between my-4">
                  <div>
                    <span className="text-lg font-headline font-extrabold text-on-surface block">
                      {route.from.split(' ')[0]}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {route.from.match(/\((.*?)\)/)?.[1] || ''}
                    </span>
                  </div>

                  <div className="flex flex-col items-center px-4">
                    <span className="text-[10px] text-slate-400 font-medium mb-1">{route.duration}</span>
                    <div className="w-16 h-0.5 bg-slate-200 relative flex items-center justify-center">
                      <Plane className="w-3 h-3 text-primary absolute -top-1 rotate-90" />
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold mt-1">{route.stops}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-headline font-extrabold text-on-surface block">
                      {route.to.split(' ')[0]}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {route.to.match(/\((.*?)\)/)?.[1] || ''}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] text-slate-400 block">From</span>
                  <span className="text-base font-headline font-extrabold text-primary-container">
                    {route.price}
                  </span>
                </div>

                <button
                  onClick={openModal}
                  className="px-3.5 py-1.5 bg-slate-100 hover:bg-primary-container hover:text-white text-slate-800 rounded-lg text-xs font-headline font-bold transition-colors"
                >
                  Book Seat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Book Air Tickets: Modular Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface-container-low p-8 sm:p-12 border border-outline-variant/30">
          <div className="mb-8">
            <h3 className="text-2xl font-headline font-bold text-on-surface">
              Why Book With Our Ticketing Desk
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="font-headline font-bold text-sm text-on-surface pt-1">Special Agent Fares</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct GDS allocations with exclusive discounts for corporate and family travel.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="font-headline font-bold text-sm text-on-surface pt-1">Date Changes &amp; Rerouting</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Quick re-issues and human escalation without navigating airline phone trees.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="font-headline font-bold text-sm text-on-surface pt-1">Visa-Synced Itineraries</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Verifiable roundtrip flight tickets tailored for embassy appointment files.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
                04
              </div>
              <h4 className="font-headline font-bold text-sm text-on-surface pt-1">Baggage Guidance</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear cabin and check-in baggage weight limits for multi-carrier layovers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
