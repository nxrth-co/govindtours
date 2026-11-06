'use client';

import React, { useState } from 'react';
import { 
  Plane, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function AirTicketsPage() {
  const { openModal } = useContactModal();
  const [flightType, setFlightType] = useState<'international' | 'domestic'>('international');
  const [searchParams, setSearchParams] = useState({
    from: 'Ahmedabad (AMD)',
    to: 'Dubai (DXB)',
    departDate: '2026-11-15',
    returnDate: '2026-11-22',
    passengers: '1 Adult, Economy',
  });

  const popularRoutes = [
    {
      from: 'Ahmedabad',
      fromCode: 'AMD',
      to: 'Dubai',
      toCode: 'DXB',
      airline: 'Emirates / SpiceJet',
      duration: '3h 30m',
      stops: 'Non-stop',
      price: '₹17,499',
      badge: 'Direct flight',
    },
    {
      from: 'Mumbai',
      fromCode: 'BOM',
      to: 'London',
      toCode: 'LHR',
      airline: 'Virgin Atlantic / BA',
      duration: '9h 15m',
      stops: 'Non-stop',
      price: '₹46,800',
      badge: 'Daily connection',
    },
    {
      from: 'Ahmedabad',
      fromCode: 'AMD',
      to: 'Singapore',
      toCode: 'SIN',
      airline: 'Singapore Airlines',
      duration: '5h 15m',
      stops: 'Non-stop',
      price: '₹22,400',
      badge: 'Direct route',
    },
    {
      from: 'Ahmedabad',
      fromCode: 'AMD',
      to: 'Bangkok',
      toCode: 'BKK',
      airline: 'Thai Airways / IndiGo',
      duration: '4h 10m',
      stops: 'Non-stop',
      price: '₹17,900',
      badge: 'Holiday route',
    },
    {
      from: 'Delhi',
      fromCode: 'DEL',
      to: 'Toronto',
      toCode: 'YYZ',
      airline: 'Air Canada / Lufthansa',
      duration: '15h 30m',
      stops: '1 Stop',
      price: '₹68,500',
      badge: 'Student quota',
    },
    {
      from: 'Mumbai',
      fromCode: 'BOM',
      to: 'Kuala Lumpur',
      toCode: 'KUL',
      airline: 'Malaysia Airlines',
      duration: '5h 00m',
      stops: 'Non-stop',
      price: '₹16,999',
      badge: 'Direct flight',
    },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Header & Search Form */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-slate-500 block">
              IATA TICKETING DESK • AHMEDABAD
            </span>
            <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
              Domestic &amp; International Flight Bookings
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Negotiated airline fares, flexible date rescheduling, corporate group bookings, and embassy-compliant flight reservation vouchers.
            </p>
          </div>

          {/* Clean Flight Inquiry Form */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-sm max-w-5xl">
            <div className="flex gap-2 mb-5">
              <button
                type="button"
                onClick={() => setFlightType('international')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  flightType === 'international'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                International routes
              </button>
              <button
                type="button"
                onClick={() => setFlightType('domestic')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  flightType === 'domestic'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                Domestic routes
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">Departure city</label>
                <input
                  type="text"
                  value={searchParams.from}
                  onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">Destination</label>
                <input
                  type="text"
                  value={searchParams.to}
                  onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">Travel date</label>
                <input
                  type="date"
                  value={searchParams.departDate}
                  onChange={(e) => setSearchParams({ ...searchParams, departDate: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">Class &amp; passengers</label>
                <input
                  type="text"
                  value={searchParams.passengers}
                  onChange={(e) => setSearchParams({ ...searchParams, passengers: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-[#a10017] hover:bg-[#860013] text-white py-2 px-4 rounded-lg font-headline font-semibold text-xs transition-colors"
                >
                  Request fare quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. Popular Routes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-slate-200 gap-3">
          <div>
            <span className="text-xs font-medium text-slate-500 block mb-1">
              Indicative Fares
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
              Popular Flight Connections
            </h2>
          </div>
          <button
            onClick={openModal}
            className="text-xs font-semibold text-[#a10017] hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Inquire for custom group rates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {popularRoutes.map((route) => (
            <div
              key={route.from + route.to}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {route.badge}
                  </span>
                  <span className="text-xs text-slate-400">{route.airline}</span>
                </div>

                <div className="flex items-center justify-between my-4">
                  <div>
                    <span className="text-base font-headline font-semibold text-slate-900 block">
                      {route.from}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {route.fromCode}
                    </span>
                  </div>

                  <div className="flex flex-col items-center px-3">
                    <span className="text-[10px] text-slate-400 mb-1">{route.duration}</span>
                    <div className="w-16 h-px bg-slate-200 relative flex items-center justify-center">
                      <Plane className="w-3 h-3 text-slate-400 absolute rotate-90" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium mt-1">{route.stops}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-base font-headline font-semibold text-slate-900 block">
                      {route.to}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {route.toCode}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
                <div>
                  <span className="text-[10px] text-slate-400 block">Starting from</span>
                  <span className="text-base font-headline font-semibold text-slate-900 tabular-nums">
                    {route.price}
                  </span>
                </div>

                <button
                  onClick={openModal}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  Book seat
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Desk Advantages: Grounded Factual Points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#f7f6f4] p-6 sm:p-8 border border-slate-200">
          <div className="mb-6">
            <h3 className="text-lg font-headline font-semibold text-slate-900">
              Why Book Through Our Ticketing Desk
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">01</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Special GDS Fares</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct airline system access with corporate allocations and negotiated baggage allowances.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">02</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Date Changes &amp; Rerouting</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct phone escalation with our Ahmedabad desk to reissue or change flights without waiting on call centers.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">03</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Embassy Itinerary Vouchers</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Verifiable flight reservations structured specifically for Schengen, UK, and US consulate appointment files.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">04</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Baggage &amp; Transit Rules</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear weight limits, layover transit visa checks, and terminal transfer guidance before you fly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
