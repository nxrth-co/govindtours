'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Palmtree, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Compass
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function PackagesPage() {
  const { openModal } = useContactModal();
  const [activeCategory, setActiveCategory] = useState<'all' | 'beach' | 'himalayas' | 'heritage' | 'island'>('all');

  const packages = [
    {
      id: 'goa',
      title: 'Goa Coastal Circuit',
      route: 'AMD → GOI',
      category: 'beach',
      image: '/packages/goa.jpg',
      badge: 'Beach & Coastal',
      description:
        'Relax on the sun-kissed beaches of Goa, renowned for vibrant nightlife, Portuguese architecture, and water sports. Perfect for a mix of relaxation and adventure, Goa offers a tropical paradise like no other.',
      inclusions: ['Beachfront Resorts', 'Watersports Assistance', 'Old Goa Heritage Walks', 'Private AC Transfers'],
      duration: '4N / 5D',
      recommendedFor: 'Couples, Families & Groups'
    },
    {
      id: 'kerala',
      title: 'Kerala Backwaters & Munnar',
      route: 'AMD → COK',
      category: 'beach',
      image: '/packages/kerala.jpg',
      badge: 'Nature & Wellness',
      description:
        'Experience the serene backwaters, lush greenery, and rejuvenating Ayurveda therapies in Kerala. Known as "God\'s Own Country", it\'s a haven for nature and wellness enthusiasts.',
      inclusions: ['Alleppey Houseboat Stay', 'Munnar Tea Estates', 'Ayurvedic Wellness Spa', 'Daily Breakfast & Dinner'],
      duration: '5N / 6D',
      recommendedFor: 'Wellness, Honeymoon & Leisure'
    },
    {
      id: 'uttarakhand',
      title: 'Uttarakhand Peaks & Lakes',
      route: 'AMD → DEL → DED',
      category: 'himalayas',
      image: '/packages/uttarakhand.jpg',
      badge: 'Sacred Mountains',
      description:
        'Discover the enchanting landscapes of Uttarakhand, from snow-clad mountains to sacred pilgrimage sites. Ideal for adventure seekers and nature lovers alike, this state promises unforgettable memories.',
      inclusions: ['Nainital Lake Boating', 'Rishikesh Ganga Aarti', 'Mussoorie Hills Sightseeing', 'Safe Mountain Chauffeur'],
      duration: '6N / 7D',
      recommendedFor: 'Family, Pilgrimage & Adventure'
    },
    {
      id: 'ladakh',
      title: 'Leh Ladakh High Passes',
      route: 'AMD → DEL → IXL',
      category: 'himalayas',
      image: '/packages/ladakh.jpg',
      badge: 'High Altitude',
      description:
        "Embark on a journey to Leh Ladakh's rugged landscapes, pristine lakes, and monasteries. A dream destination for thrill-seekers and those looking to immerse in the raw beauty.",
      inclusions: ['Pangong Tso Camping', 'Nubra Valley Camel Safari', 'Khardung La High Pass', 'Oxygen & Medical Prep'],
      duration: '6N / 7D',
      recommendedFor: 'Bikers, Explorers & Photographers'
    },
    {
      id: 'kashmir',
      title: 'Jammu & Kashmir Valleys',
      route: 'AMD → SXR',
      category: 'himalayas',
      image: '/packages/kashmir.jpg',
      badge: 'Scenic Valleys',
      description:
        'Witness the mesmerizing beauty of Jammu & Kashmir, the "Paradise on Earth" - with stunning valleys, shikara rides on Dal Lake, and snow-capped peaks. A journey filled with spirituality and natural wonders awaits you.',
      inclusions: ['Dal Lake Luxury Shikara', 'Gulmarg Gondola Ride', 'Pahalgam Valley Excursion', 'Authentic Wazwan Meals'],
      duration: '5N / 6D',
      recommendedFor: 'Family Vacation & Honeymoon'
    },
    {
      id: 'andaman',
      title: 'Andaman & Nicobar Islands',
      route: 'AMD → MAA → IXZ',
      category: 'island',
      image: '/packages/andaman.jpg',
      badge: 'Archipelago',
      description:
        'Dive into the crystalline waters of Andaman, famous for its pristine beaches and vibrant marine life. A sanctuary for beach lovers and adventure enthusiasts, offering endless serenity.',
      inclusions: ['Radhanagar Beach Sunset', 'Scuba & Snorkeling Session', 'Havelock Private Ferry', 'Cellular Jail Light & Sound'],
      duration: '5N / 6D',
      recommendedFor: 'Scuba Divers, Beach Lovers & Couples'
    },
    {
      id: 'himachal',
      title: 'Himachal Pine Valleys',
      route: 'AMD → CHD → KUU',
      category: 'himalayas',
      image: '/packages/himachal.jpg',
      badge: 'Hill Stations',
      description:
        'Experience the charm of Himachal Pradesh with its snow-capped peaks, lush valleys, and quiet hill stations. A destination that offers tranquility, adventure, and picturesque beauty.',
      inclusions: ['Manali Solang Valley Snow Point', 'Shimla Mall Road Stay', 'Dharamshala Monastery Visit', 'Private Vehicle Throughout'],
      duration: '6N / 7D',
      recommendedFor: 'Snow Lovers, Couples & Families'
    },
    {
      id: 'rajasthan',
      title: 'Grand Rajasthan Heritage',
      route: 'AMD → JAI → JDH',
      category: 'heritage',
      image: '/packages/rajasthan.jpg',
      badge: 'Royal Heritage',
      description:
        'Step into the royal heritage of Rajasthan with its grand forts, vibrant culture, and desert wilderness. Relish the tales of kings and queens in the land of historic grandeur.',
      inclusions: ['Jaipur Amber Fort Tour', 'Sam Dunes Camel Safari', 'Udaipur Lake Pichola Cruise', 'Heritage Haveli Hotel Stays'],
      duration: '6N / 7D',
      recommendedFor: 'Culture Seekers, History & Families'
    },
  ];

  const filteredPackages = packages.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Hero Banner: Clean Alpine Lake Landscape */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 min-h-[360px] sm:min-h-[420px] flex items-center justify-center text-center">
          <div className="absolute inset-0 -z-10 select-none">
            <Image
              src="/packages/hero_banner.jpg"
              alt="Holiday Circuits by Govind Tours"
              fill
              priority
              className="object-cover object-center brightness-[0.78]"
            />
            <div className="absolute inset-0 bg-slate-900/40" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-10 space-y-4 text-white">
            <span className="text-xs font-mono text-slate-200 block">
              AHMEDABAD TRAVEL DESK • CURATED CIRCUITS
            </span>

            <h1 className="text-3xl sm:text-5xl font-headline font-semibold text-white tracking-tight leading-tight">
              Tailored Holiday Packages
            </h1>

            <p className="text-slate-200 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
              Custom domestic getaways and international holidays crafted with verified stays, chauffeur-driven transfers, and 24/7 on-tour support.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={openModal}
                className="bg-[#a10017] hover:bg-[#860013] text-white px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Inquire custom package</span>
              </button>
              <a
                href="#packages-grid"
                className="bg-white/90 hover:bg-white text-slate-900 px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors"
              >
                Browse circuits below
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Section Header */}
      <section id="packages-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-1">
            <span className="text-xs font-medium text-slate-500 block">
              Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
              Selected Tour Circuits
            </h2>
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
            {[
              { id: 'all', label: 'All' },
              { id: 'beach', label: 'Beaches & Wellness' },
              { id: 'himalayas', label: 'Himalayas & Valleys' },
              { id: 'heritage', label: 'Royal Heritage' },
              { id: 'island', label: 'Islands' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeCategory === tab.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modular Packages Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPackages.map((pkg, index) => {
            const rowIndex = Math.floor(index / 2);
            const imageOnRight = rowIndex % 2 === 1;

            return (
              <div
                key={pkg.id}
                id={pkg.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col sm:flex-row group"
              >
                {/* 50% Location Image */}
                <div
                  className={`w-full sm:w-1/2 relative aspect-[4/3] sm:aspect-auto min-h-[240px] sm:min-h-[320px] overflow-hidden bg-slate-100 ${
                    imageOnRight ? 'sm:order-2' : 'sm:order-1'
                  }`}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    priority={index < 2}
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-mono">
                      {pkg.route}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/90 text-slate-800 text-[10px] font-medium">
                      {pkg.badge}
                    </span>
                  </div>
                </div>

                {/* 50% Package Information Card */}
                <div
                  className={`w-full sm:w-1/2 p-5 sm:p-6 flex flex-col justify-between space-y-4 ${
                    imageOnRight ? 'sm:order-1' : 'sm:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="font-medium text-slate-700">{pkg.duration}</span>
                      <span className="text-[11px] text-slate-400">{pkg.recommendedFor}</span>
                    </div>

                    <h3 className="text-lg font-headline font-semibold text-slate-900 group-hover:text-[#a10017] transition-colors">
                      {pkg.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Highlights / Inclusions */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600">
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-1">
                      <button
                        onClick={openModal}
                        className="w-full bg-[#a10017] hover:bg-[#860013] text-white py-2 px-3 rounded-lg font-headline font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Inquire package</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Advisory & Custom Itinerary Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 text-white">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-slate-400 block">
              CUSTOM ITINERARY DESK
            </span>

            <h2 className="text-xl sm:text-3xl font-headline font-semibold tracking-tight">
              Looking for a custom destination?
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We curate bespoke domestic circuits across South India and the North East, as well as international holiday packages for Dubai, Maldives, Singapore, Bali, Europe, and the UK. Connect with our Bodakdev desk for tailored day-wise itineraries, flight options, and visa advisory.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={openModal}
                className="bg-[#a10017] hover:bg-[#860013] text-white px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors"
              >
                Inquire custom itinerary
              </button>
              <a
                href="https://wa.me/919426417399?text=Hello%20Govind%20Tours,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors"
              >
                WhatsApp (+91 94264 17399)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
