'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Palmtree, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Compass,
  Calendar,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export default function PackagesPage() {
  const { openModal } = useContactModal();
  const [activeCategory, setActiveCategory] = useState<'all' | 'beach' | 'himalayas' | 'heritage' | 'island'>('all');

  const packages = [
    {
      id: 'goa',
      title: 'Goa',
      tagline: 'Sun-Kissed Beaches & Tropical Living',
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
      title: 'Kerala',
      tagline: "God's Own Country & Serene Backwaters",
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
      title: 'Uttarakhand',
      tagline: 'Land of Gods & Alpine Pilgrimages',
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
      title: 'Leh Ladakh',
      tagline: 'Rugged Heights, High Passes & Monasteries',
      category: 'himalayas',
      image: '/packages/ladakh.jpg',
      badge: 'Thrill & High Altitude',
      description:
        "Embark on a journey to Leh Ladakh's rugged landscapes, pristine lakes, and monasteries. A dream destination for thrill-seekers and those looking to immerse in the raw beauty.",
      inclusions: ['Pangong Tso Camping', 'Nubra Valley Camel Safari', 'Khardung La High Pass', 'Oxygen & Medical Prep'],
      duration: '6N / 7D',
      recommendedFor: 'Bikers, Explorers & Photographers'
    },
    {
      id: 'kashmir',
      title: 'Jammu Kashmir',
      tagline: 'Paradise on Earth & Valley of Blooms',
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
      title: 'Andaman & Nicobar',
      tagline: 'Crystalline Waters & Coral Sanctuaries',
      category: 'island',
      image: '/packages/andaman.jpg',
      badge: 'Tropical Archipelago',
      description:
        'Dive into the crystalline waters of Andaman, famous for its pristine beaches and vibrant marine life. A sanctuary for beach lovers and adventure enthusiasts, offering endless serenity.',
      inclusions: ['Radhanagar Beach Sunset', 'Scuba & Snorkeling Session', 'Havelock Private Ferry', 'Cellular Jail Light & Sound'],
      duration: '5N / 6D',
      recommendedFor: 'Scuba Divers, Beach Lovers & Couples'
    },
    {
      id: 'himachal',
      title: 'Himachal',
      tagline: 'Snow-Capped Peaks & Tranquil Valleys',
      category: 'himalayas',
      image: '/packages/himachal.jpg',
      badge: 'Quiet Hill Stations',
      description:
        'Experience the charm of Himachal Pradesh with its snow-capped peaks, lush valleys, and quiet hill stations. A destination that offers tranquility, adventure, and picturesque beauty.',
      inclusions: ['Manali Solang Valley Snow Point', 'Shimla Mall Road Stay', 'Dharamshala Monastery Visit', 'Private Vehicle Throughout'],
      duration: '6N / 7D',
      recommendedFor: 'Snow Lovers, Couples & Families'
    },
    {
      id: 'rajasthan',
      title: 'Rajasthan',
      tagline: 'Grand Forts, Desert Sunsets & Royalty',
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
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Hero Banner Section with Original Alpine Lake Landscape */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 min-h-[380px] sm:min-h-[460px] flex items-center justify-center text-center">
          {/* Alpine Turquoise Lake Backdrop */}
          <div className="absolute inset-0 -z-10 select-none">
            <Image
              src="/packages/hero_banner.jpg"
              alt="Discover Your Dream Destinations"
              fill
              priority
              className="object-cover object-center brightness-[0.82]"
            />
            {/* Soft dark vignette gradient to ensure crisp typography */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
              <Compass className="w-4 h-4 text-white" />
              <span>Tailored Holidays by Govind Tours</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-md">
              Discover Your Dream Destinations: <br className="hidden sm:inline" />
              <span className="text-white/95">Unveiling Our Exclusive Tour Packages!</span>
            </h1>

            <p className="text-white/90 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
              Custom domestic escapes and international retreats crafted with transparent itineraries, verified stays, and dedicated 24/7 on-tour support.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="bg-primary hover:bg-primary-container text-white px-8 py-3.5 rounded-xl font-headline font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95 duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Inquire Custom Package</span>
              </button>
              <a
                href="#packages-grid"
                className="bg-white/90 hover:bg-white text-slate-800 px-7 py-3.5 rounded-xl font-headline font-bold text-sm shadow-md transition-all backdrop-blur-sm"
              >
                Explore Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Section Header */}
      <section id="packages-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Itineraries</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-slate-900 tracking-tight">
              Explore Our Tailored Tour Packages Today!
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Every package is fully customizable according to your dates, hotel category preferences, and group size.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
            {[
              { id: 'all', label: 'All Destinations' },
              { id: 'beach', label: 'Beaches & Wellness' },
              { id: 'himalayas', label: 'Himalayas & Valleys' },
              { id: 'heritage', label: 'Royal Heritage' },
              { id: 'island', label: 'Island Sanctuaries' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-white text-primary font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modular Packages Grid: 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPackages.map((pkg, index) => {
            // Row-by-row alternating pattern matching legacy site:
            // Row 0 & 2: Image on Left (sm:order-1)
            // Row 1 & 3: Image on Right (sm:order-2)
            const rowIndex = Math.floor(index / 2);
            const imageOnRight = rowIndex % 2 === 1;

            return (
              <div
                key={pkg.id}
                id={pkg.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
              >
                {/* 50% Location Image */}
                <div
                  className={`w-full sm:w-1/2 relative aspect-[4/3] sm:aspect-auto min-h-[260px] sm:min-h-[350px] overflow-hidden bg-slate-100 ${
                    imageOnRight ? 'sm:order-2' : 'sm:order-1'
                  }`}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    priority={index < 4}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-bold tracking-wide shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>
                </div>

                {/* 50% Package Information Card */}
                <div
                  className={`w-full sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between space-y-4 ${
                    imageOnRight ? 'sm:order-1' : 'sm:order-2'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{pkg.duration}</span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500">
                        {pkg.recommendedFor}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-headline font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-xs sm:text-[13px] font-semibold text-primary">
                      {pkg.tagline}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Highlights / Inclusions */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-600">
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        onClick={openModal}
                        className="w-full bg-primary hover:bg-primary-container text-white py-2.5 px-4 rounded-xl font-headline font-bold text-xs sm:text-sm transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Connect Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advisory & Custom Itinerary Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-primary-fixed">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Customized Itineraries &amp; Transparent Quotes</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-headline font-bold tracking-tight">
              Looking for a Destination Outside This List?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We curate bespoke domestic circuits across Himachal, Uttarakhand, and South India, as well as international packages for Dubai, Maldives, Singapore, Bali, Europe, and the UK. Connect directly with our travel desk for customized day-wise itineraries, flight options, and visa advisory.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={openModal}
                className="bg-primary hover:bg-primary-container text-white px-7 py-3 rounded-xl font-headline font-bold text-sm shadow-md transition-all active:scale-95"
              >
                Connect With Travel Desk
              </button>
              <a
                href="https://wa.me/919426417399?text=Hello%20Govind%20Tours,%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-headline font-bold text-sm transition-all"
              >
                WhatsApp Inquiry (+91 94264 17399)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

