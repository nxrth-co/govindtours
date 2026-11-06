'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  Tag
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function BlogPage() {
  const { openModal } = useContactModal();

  const articles = [
    {
      id: 1,
      title: 'Schengen Visa 2026: New Biometric Rules & How to Avoid Common Rejections',
      excerpt: 'A comprehensive breakdown of required bank balances, cover letter framing, and appointment slot tips for European embassies.',
      category: 'Visa Advisory',
      readTime: '6 min read',
      date: 'Sep 28, 2026',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Top 10 Tips for First-Time International Flyers Departing From India',
      excerpt: 'From currency card limits and immigration counter questions to packing liquids in hand baggage without security confiscations.',
      category: 'Travel Guide',
      readTime: '8 min read',
      date: 'Sep 15, 2026',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Best Time to Visit Dubai: Balancing Weather, Mega-Shopping & Desert Safaris',
      excerpt: 'Plan your Dubai trip between October and April to take full advantage of outdoor souks, beach clubs, and global village festivities.',
      category: 'Destination Spotlight',
      readTime: '5 min read',
      date: 'Aug 30, 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      title: 'Tatkal vs Normal Indian Passport: Key Differences in Timeline & Eligibility',
      excerpt: 'Understand when Tatkal applies, which 3 ID documents are legally mandatory, and how police verification works post-dispatch.',
      category: 'Passport Guide',
      readTime: '4 min read',
      date: 'Aug 14, 2026',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      title: 'Why Travel Insurance is Mandatory Even If Your Destination Doesn’t Demand It',
      excerpt: 'Medical repatriation can cost in excess of $50,000 USD. Here is why an inexpensive policy is your most critical travel safety net.',
      category: 'Insurance Insights',
      readTime: '5 min read',
      date: 'Jul 22, 2026',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 6,
      title: 'Discovering Royal Rajasthan: Palaces, Forts & Desert Camps of the Maharajas',
      excerpt: 'A curated driving itinerary through Jaipur, Jodhpur, and Udaipur with tips on the best heritage boutique stays and local delicacies.',
      category: 'India Special',
      readTime: '7 min read',
      date: 'Jul 05, 2026',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* Header Section */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto text-center max-w-2xl space-y-4">
          <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block">
            Govind Tours Journal
          </span>
          <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
            Travel Insights, Guides &amp; <span className="text-primary">Visa Updates</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Stay informed with expert advice from our licensed travel consultants, embassy updates, packing essentials, and destination guides.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-extrabold uppercase px-3 py-1 rounded-md shadow-sm">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold text-primary group-hover:gap-3 transition-all"
                >
                  <span>Talk to an Expert on This Topic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / Inquiry Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-headline font-extrabold tracking-tight">
            Need Expert Assistance For Your Upcoming Journey?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Our consultants are on call to assist with flight ticketing, visa appointments, and customized domestic or international holiday planning.
          </p>
          <div className="pt-2">
            <button
              onClick={openModal}
              className="bg-primary-container hover:bg-primary text-white px-8 py-3.5 rounded-full font-headline font-bold text-sm uppercase tracking-wider shadow-lg transition-all active:scale-95"
            >
              Get In Touch With An Agent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
