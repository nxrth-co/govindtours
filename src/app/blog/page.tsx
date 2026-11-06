'use client';

import React from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function BlogPage() {
  const { openModal } = useContactModal();

  const articles = [
    {
      id: 1,
      title: 'Schengen Visa 2026: Biometric Rules & How to Avoid Rejections',
      excerpt: 'A comprehensive breakdown of required bank balances, cover letter framing, and appointment slot tips for European embassies.',
      category: 'Visa Advisory',
      readTime: '6 min read',
      date: 'Sep 28, 2026',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'First-Time International Flyers: 10 Practical Airport Rules',
      excerpt: 'From currency card limits and immigration counter questions to packing liquids in hand baggage without security confiscations.',
      category: 'Travel Guide',
      readTime: '8 min read',
      date: 'Sep 15, 2026',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Best Months to Visit Dubai: Balancing Weather & Desert Safaris',
      excerpt: 'Plan your Dubai trip between October and April to take full advantage of outdoor souks, beach clubs, and pleasant evenings.',
      category: 'Destinations',
      readTime: '5 min read',
      date: 'Aug 30, 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      title: 'Tatkal vs Normal Indian Passport: Timelines & Required IDs',
      excerpt: 'Understand when Tatkal applies, which 3 ID documents are legally mandatory, and how police verification works post-dispatch.',
      category: 'Passport Guide',
      readTime: '4 min read',
      date: 'Aug 14, 2026',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      title: 'Why Overseas Travel Insurance is Essential for Every Trip',
      excerpt: 'Emergency medical evacuation can exceed $50,000 USD. Here is why an inexpensive policy is your most critical travel safety net.',
      category: 'Insurance',
      readTime: '5 min read',
      date: 'Jul 22, 2026',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      title: 'Discovering Royal Rajasthan: Palaces, Forts & Desert Camps',
      excerpt: 'A curated driving itinerary through Jaipur, Jodhpur, and Udaipur with tips on heritage boutique stays and local cuisine.',
      category: 'India Circuits',
      readTime: '7 min read',
      date: 'Jul 05, 2026',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Header Section */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center max-w-2xl space-y-2">
          <span className="text-xs font-mono text-slate-500 block">
            GOVIND TOURS JOURNAL • AHMEDABAD
          </span>
          <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
            Travel Insights, Guides &amp; Visa Updates
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Practical advice from our licensed travel consultants, embassy updates, packing essentials, and destination guides.
          </p>
        </div>
      </section>

      {/* 2. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 text-slate-800 text-[10px] font-medium px-2 py-0.5 rounded">
                    {art.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-headline font-semibold text-base text-slate-900 group-hover:text-[#a10017] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a10017] hover:underline"
                >
                  <span>Inquire with our desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
