'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Plane, 
  FileText, 
  Palmtree, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  ExternalLink,
  Phone,
  Clock,
  Building2
} from 'lucide-react';
import ApertureCarousel, { Slide } from '@/components/ui/aperture-carousel';
import { useContactModal } from '@/context/ContactModalContext';

export default function HomePage() {
  const { openModal } = useContactModal();

  const services = [
    {
      title: 'Air Tickets',
      desc: 'Domestic and international route ticketing with real-time seat assignment and reissue support.',
      icon: Plane,
      href: '/air-tickets',
      code: 'IATA Desk',
      turnaround: 'Same-day issuance',
    },
    {
      title: 'Visa Services',
      desc: 'Pre-check filing, appointment scheduling, and cover letter vetting for 60+ countries.',
      icon: FileText,
      href: '/visa',
      code: 'Consular',
      turnaround: '99% approval track',
    },
    {
      title: 'Tour Packages',
      desc: 'Bespoke domestic and international circuits with verified stays, transfers, and local guides.',
      icon: Palmtree,
      href: '/packages',
      code: 'Circuits',
      turnaround: 'Tailored itineraries',
    },
    {
      title: 'Passport Assistance',
      desc: 'Application assistance, document cross-checking, Tatkal appointment slots, and renewal filing.',
      icon: BookOpen,
      href: '/passport',
      code: 'PSK Slot',
      turnaround: 'Tatkal & Normal',
    },
    {
      title: 'Travel Insurance',
      desc: 'Embassy-mandated Schengen and overseas medical cover, baggage delay, and cancellation policies.',
      icon: ShieldCheck,
      href: '/travel-insurance',
      code: 'Medical',
      turnaround: 'Instant digital policy',
    },
  ];

  const destinations = [
    {
      title: 'Goa Coastal Circuit',
      route: 'AMD → GOI',
      duration: '4N / 5D',
      price: '₹18,500',
      image: '/packages/goa.jpg',
      circuit: 'North & South Goa beaches, Old Goa churches',
    },
    {
      title: 'Kerala Backwaters & Munnar',
      route: 'AMD → COK',
      duration: '5N / 6D',
      price: '₹24,999',
      image: '/packages/kerala.jpg',
      circuit: 'Munnar tea estates, Alleppey private houseboat',
    },
    {
      title: 'Royal Rajasthan Heritage',
      route: 'AMD → JAI → JDH',
      duration: '6N / 7D',
      price: '₹34,500',
      image: '/packages/rajasthan.jpg',
      circuit: 'Mehrangarh Fort, Amber Palace, desert camps',
    },
    {
      title: 'Leh Ladakh High Passes',
      route: 'AMD → DEL → IXL',
      duration: '6N / 7D',
      price: '₹38,000',
      image: '/packages/ladakh.jpg',
      circuit: 'Pangong Tso, Khardung La, Nubra Valley sand dunes',
    },
  ];

  const proofPoints = [
    { label: 'Visa applications processed', value: '2,000+', note: 'US, UK, Schengen & Canada' },
    { label: 'Tailored holiday circuits', value: '500+', note: 'Verified domestic and international' },
    { label: 'Years operating desk', value: '15+', note: 'Serving Gujarat travelers since 2010' },
    { label: 'Google client rating', value: '4.9/5', note: 'Over 60+ verified reviews' },
  ];

  const clientReviews = [
    {
      name: 'Apurva Maharana',
      url: 'https://www.google.com/maps/contrib/117496087145937635483?hl=en-US&sa=X&ved=2ahUKEwia8riTyqeBAxXCSWwGHfI_B5QQvvQBegQIARBc',
      service: 'Holiday & Stays Booking',
      comment:
        'They smoothly handled everything as per our choice. Very good service provided at the stays which were booked by the agency. Was recommended by a friend and now even I will do the same.',
      initials: 'AM',
      rating: 5,
    },
    {
      name: 'Vinay Shah',
      url: 'https://www.google.com/maps/contrib/112387067822474815718?hl=en-US&sa=X&ved=2ahUKEwia8riTyqeBAxXCSWwGHfI_B5QQvvQBegQIARA_',
      service: 'Ticketing & Consultation',
      comment:
        'Nikulbhai at Govind Tours was excellent. He was very professional, polite, prompt, patient and tried his hardest to get the right tickets at the right price. He even tried his best for Train tickets when flights were prohibitively expensive. I would recommend Nikulbhai for your travel needs.',
      initials: 'VS',
      rating: 5,
    },
    {
      name: 'Jigna Dave',
      url: 'https://www.google.com/maps/contrib/113176706805171570188/reviews?authuser=1&hl=en-GB',
      service: 'UK Visa Assistance',
      comment:
        'I recently applied for my UK visa through Govind Tours, and I am very happy with their service. The process was smooth, well-guided, and completely hassle-free. They provided clear instructions, handled documentation carefully, and kept me updated at every step.',
      initials: 'JD',
      rating: 5,
    },
  ];

  const heroSlides: Slide[] = [
    {
      image: '/hero/ladakh.jpg',
      tag: 'Himalayan Pass Circuit',
      title: 'Leh Ladakh',
      caption: 'Pangong Tso azure waters, Nubra Valley sand dunes, and high-altitude Buddhist monasteries.',
      href: '/packages#ladakh',
      ctaLabel: 'View Ladakh itinerary',
    },
    {
      image: '/hero/kerala.jpg',
      tag: 'Backwaters & Spice Hills',
      title: 'Kerala Circuit',
      caption: 'Private thatched houseboats across Alleppey lagoons and mist-covered Munnar plantations.',
      href: '/packages#kerala',
      ctaLabel: 'View Kerala itinerary',
    },
    {
      image: '/hero/kashmir.jpg',
      tag: 'Dal Lake & Alpine Valleys',
      title: 'Jammu & Kashmir',
      caption: 'Morning shikara rides on Dal Lake, snow-dusted Gulmarg meadows, and quiet pine valleys.',
      href: '/packages#kashmir',
      ctaLabel: 'View Kashmir itinerary',
    },
    {
      image: '/hero/rajasthan.jpg',
      tag: 'Royal Heritage & Fortresses',
      title: 'Grand Rajasthan',
      caption: 'Carved sandstone bastions in Jodhpur, Amber Palace in Jaipur, and Thar desert safaris.',
      href: '/packages#rajasthan',
      ctaLabel: 'View Rajasthan itinerary',
    },
    {
      image: '/hero/goa.jpg',
      tag: 'Coastal & Heritage Escape',
      title: 'Sun-Kissed Goa',
      caption: 'Quiet southern coves, heritage Portuguese quarters in Fontainhas, and sea-view resorts.',
      href: '/packages#goa',
      ctaLabel: 'View Goa itinerary',
    },
    {
      image: '/hero/alpine.jpg',
      tag: 'Lakes & Himalayan Foothills',
      title: 'Uttarakhand Peaks',
      caption: 'Nainital lake views, Corbett wildlife safaris, and high-altitude pilgrimage routes.',
      href: '/packages#uttarakhand',
      ctaLabel: 'View Uttarakhand itinerary',
    },
  ];

  const quickPortals = [
    {
      name: 'Air Tickets',
      desc: 'Domestic & global fares',
      href: '/air-tickets',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Visa Services',
      desc: 'Schengen, US, UK, Gulf',
      href: '/visa',
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Tour Packages',
      desc: 'Custom holiday circuits',
      href: '/packages',
      img: '/hero/ladakh.jpg',
    },
    {
      name: 'Passport Desk',
      desc: 'PSK slots & renewals',
      href: '/passport',
      img: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Trip Insurance',
      desc: 'Embassy-compliant cover',
      href: '/travel-insurance',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. Hero Section: Cinematic Aperture Carousel with Iris Transition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4">
        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
          <ApertureCarousel
            slides={heroSlides}
            height="58vh"
            autoplay={6000}
            duration={1000}
            ariaLabel="Govind Tours Featured Circuits"
          />
        </div>

        {/* 2. Direct Service Portals Rail */}
        <div className="mt-8 pt-2">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-medium text-slate-500">
              Direct Travel Portals
            </span>
            <span className="text-xs text-slate-400">
              Ahmedabad Desk
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {quickPortals.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 hover:border-slate-300 transition-colors duration-150 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden relative mb-2.5 bg-slate-100 ring-1 ring-slate-200">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="font-headline font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#a10017] transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quiet Trust Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-600 pt-4 border-t border-slate-200">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
            Registered Travel Desk since 2010
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
            Consular document validation
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
            Shilp Aaron, Bodakdev office
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
            Dedicated phone &amp; WhatsApp support
          </span>
        </div>
      </section>

      {/* 3. Verified Metrics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#f7f6f4] border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {proofPoints.map((item, idx) => (
              <div 
                key={item.label} 
                className={idx < proofPoints.length - 1 ? 'lg:border-r lg:border-slate-300/70 lg:pr-6' : ''}
              >
                <div className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tabular-nums tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-slate-700 mt-1">
                  {item.label}
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Travel Capabilities: Quiet 3x2 Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <span className="text-xs font-medium text-slate-500 block mb-1">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
              Desk Services &amp; Ticketing
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-sm">
            Standalone services or complete itineraries managed through one desk in Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors duration-150 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded">
                      {service.turnaround}
                    </span>
                  </div>

                  <h3 className="text-lg font-headline font-semibold text-slate-900 mb-1.5 group-hover:text-[#a10017] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    [{service.code}]
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a10017] hover:underline"
                  >
                    <span>View details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Direct Consultation Card */}
          <div className="bg-slate-900 text-white rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-200 flex items-center justify-center">
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <span className="text-[11px] font-medium text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded">
                  Direct Line
                </span>
              </div>
              <h3 className="text-lg font-headline font-semibold text-white mb-1.5">
                Custom Route Consultation
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Complex multi-city flight connections, corporate delegation bookings, or urgent consular appointment filings.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                +91 94264 17399
              </span>
              <button
                onClick={openModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-slate-200 underline"
              >
                <span>Request callback</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Selected Holiday Circuits: Clean Minimal Presentation */}
      <section className="bg-[#f7f6f4] py-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
            <div>
              <span className="text-xs font-medium text-slate-500 block mb-1">
                Handpicked Circuits
              </span>
              <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
                Curated Travel Itineraries
              </h2>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a10017] hover:underline"
            >
              <span>View all tour packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((dest) => (
              <div
                key={dest.title}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between group"
              >
                <div>
                  <Link href="/packages" className="relative h-44 overflow-hidden bg-slate-100 block">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      {dest.route}
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-white/90 text-slate-800 text-[10px] font-medium px-2 py-0.5 rounded">
                      {dest.duration}
                    </div>
                  </Link>

                  <div className="p-5 space-y-2">
                    <Link href="/packages" className="block">
                      <h4 className="font-headline font-semibold text-base text-slate-900 group-hover:text-[#a10017] transition-colors">
                        {dest.title}
                      </h4>
                    </Link>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {dest.circuit}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Starting from</span>
                      <span className="font-headline font-semibold text-base text-slate-900 tabular-nums">
                        {dest.price}
                      </span>
                    </div>
                    <button
                      onClick={openModal}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Desk Assurance: Clear Factual Points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-medium text-slate-500 block">
              Desk Assurance
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight leading-snug">
              Why Travelers Book Through Our Bodakdev Office
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We cut through the confusion of conflicting airline rules and consulate requirements with verified documentation, transparent quotes, and immediate answers.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#a10017] hover:underline"
              >
                <span>Office directions &amp; hours</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">01</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Itemized Quotations</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Clear fare breakdown with airport taxes, visa fees, and stay costs stated upfront with zero hidden charges.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">02</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Consulate Compliance</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Thorough review of financial proof, cover letters, and insurance before submitting files to visa centers.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">03</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Direct Desk Contact</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Direct phone and WhatsApp access to the advisor managing your booking while on domestic or overseas travel.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono text-slate-400 block">04</span>
              <h4 className="font-headline font-semibold text-sm text-slate-900">Single Desk Coordination</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Flights, stay vouchers, local excursions, and overseas insurance combined in a unified documentation packet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Verified Client Reviews: Direct Google Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-medium text-slate-500 block mb-1">
              Client Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
              Verified Google Reviews
            </h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-sm">
            Read directly from travelers who booked ticketing, visas, and holiday packages with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {clientReviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded">
                    {rev.service}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-5 flex items-center justify-between">
                <div>
                  <a
                    href={rev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-headline font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#a10017] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{rev.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <span className="text-[11px] text-slate-400 block">Verified Google Reviewer</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center">
                  {rev.initials}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Office Desk Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 block">
                AHMEDABAD TRAVEL DESK
              </span>
              <h3 className="text-xl sm:text-2xl font-headline font-semibold text-white tracking-tight">
                Plan your itinerary with an advisor
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed">
                Visit our Bodakdev desk or connect directly on WhatsApp for flight reservations, visa queries, and custom holiday quotes.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  A-207, Shilp Aaron, Sindhu Bhavan Marg
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Mon–Sat 10:00 AM – 7:00 PM
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
              <button
                onClick={openModal}
                className="bg-[#a10017] hover:bg-[#860013] text-white px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors text-center"
              >
                Inquire online
              </button>
              <a
                href="tel:+919426417399"
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-5 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors text-center"
              >
                Call desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
