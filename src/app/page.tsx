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
  MapPin, 
  Sparkles,
  Clock,
  Award,
  Star,
  ExternalLink
} from 'lucide-react';
import ApertureCarousel, { Slide } from '@/components/ui/aperture-carousel';
import { useContactModal } from '@/context/ContactModalContext';

export default function HomePage() {
  const { openModal } = useContactModal();

  const services = [
    {
      title: 'Air Tickets',
      desc: 'Instant booking for domestic & international routes with 24/7 rescheduling.',
      icon: Plane,
      href: '/air-tickets',
      tag: 'Best Airfares',
      accent: 'text-secondary bg-secondary/10',
    },
    {
      title: 'Visa Services',
      desc: 'Comprehensive tourist & business visa guidance for 60+ countries.',
      icon: FileText,
      href: '/visa',
      tag: '99% Approvals',
      accent: 'text-primary bg-primary/10',
    },
    {
      title: 'Tour Packages',
      desc: 'Curated itineraries spanning tropical beaches, heritage circuits, and Europe.',
      icon: Palmtree,
      href: '/packages',
      tag: 'Custom Itineraries',
      accent: 'text-emerald-700 bg-emerald-50',
    },
    {
      title: 'Passport Assistance',
      desc: 'Tatkal expedited slots, new applications, renewals, and police verification prep.',
      icon: BookOpen,
      href: '/passport',
      tag: 'Seva Kendra Support',
      accent: 'text-amber-700 bg-amber-50',
    },
    {
      title: 'Travel Insurance',
      desc: 'Embassy-compliant Schengen & international medical and baggage coverage.',
      icon: ShieldCheck,
      href: '/travel-insurance',
      tag: 'Instant Issuance',
      accent: 'text-purple-700 bg-purple-50',
    },
  ];

  const destinations = [
    {
      title: 'Goa Coastal Paradise',
      duration: '4N / 5D',
      price: '₹18,500',
      image: '/packages/goa.jpg',
      category: 'Beach & Coastal',
      badge: 'Popular',
    },
    {
      title: 'Kerala Backwaters & Hills',
      duration: '5N / 6D',
      price: '₹24,999',
      image: '/packages/kerala.jpg',
      category: 'Nature & Wellness',
      badge: "God's Own Country",
    },
    {
      title: 'Royal Rajasthan Heritage',
      duration: '6N / 7D',
      price: '₹34,500',
      image: '/packages/rajasthan.jpg',
      category: 'India Special',
      badge: 'Cultural',
    },
    {
      title: 'Leh Ladakh High Passes',
      duration: '6N / 7D',
      price: '₹38,000',
      image: '/packages/ladakh.jpg',
      category: 'Thrill & Altitude',
      badge: 'Adventure',
    },
  ];

  const proofPoints = [
    { label: 'Visa Approvals', value: '2,000+', desc: 'High approval rate across US, UK & Schengen' },
    { label: 'Custom Holidays', value: '500+', desc: 'Bespoke domestic & international packages' },
    { label: 'Industry Trust', value: '15+ Yrs', desc: 'Operating authorized desk since 2010' },
    { label: 'Client Satisfaction', value: '99.4%', desc: 'Verified reviews & return travelers' },
  ];

  const clientReviews = [
    {
      name: 'APURVA MAHARANA',
      url: 'https://www.google.com/maps/contrib/117496087145937635483?hl=en-US&sa=X&ved=2ahUKEwia8riTyqeBAxXCSWwGHfI_B5QQvvQBegQIARBc',
      service: 'Holiday & Stays Booking',
      comment:
        'They smoothly handled everything as per our choice. Very good service provided at the stays which were booked by the agency. Was recommended by a friend and now even I will do the same.',
      initials: 'AM',
      rating: 5,
    },
    {
      name: 'VINAY SHAH',
      url: 'https://www.google.com/maps/contrib/112387067822474815718?hl=en-US&sa=X&ved=2ahUKEwia8riTyqeBAxXCSWwGHfI_B5QQvvQBegQIARA_',
      service: 'Ticketing & Consultation',
      comment:
        'Nikulbhai at Govind Tours was excellent. He was very professional, polite, prompt, patient and tried his hardest to get the right tickets at the right price. He even tried his best for Train tickets when the flights were prohibitively expensive. I would recommend Nikulbhai for your travel needs.',
      initials: 'VS',
      rating: 5,
    },
    {
      name: 'JIGNA DAVE',
      url: 'https://www.google.com/maps/contrib/113176706805171570188/reviews?authuser=1&hl=en-GB',
      service: 'UK Visa Assistance',
      comment:
        'I recently applied for my UK visa through Govind Tours, and I am very happy with their service. The process was smooth, well-guided, and completely hassle-free. They provided clear instructions, handled documentation carefully, and kept me updated at every step. Thanks to their professional support, I received my visa without any difficulty.',
      initials: 'JD',
      rating: 5,
    },
  ];

  const heroSlides: Slide[] = [
    {
      image: '/hero/ladakh.jpg',
      tag: 'Himalayan High Passes',
      title: 'Leh Ladakh',
      caption: 'Pangong Tso azure waters, Nubra Valley sand dunes & ancient high-altitude monasteries.',
      href: '/packages#ladakh',
      ctaLabel: 'Explore Ladakh Package',
    },
    {
      image: '/hero/kerala.jpg',
      tag: "God's Own Country",
      title: 'Kerala Backwaters',
      caption: 'Traditional thatched houseboats, Alleppey lagoons & rejuvenating Ayurvedic wellness retreats.',
      href: '/packages#kerala',
      ctaLabel: 'Explore Kerala Package',
    },
    {
      image: '/hero/kashmir.jpg',
      tag: 'Paradise on Earth',
      title: 'Jammu & Kashmir',
      caption: 'Morning shikaras on Dal Lake, snow-clad Gulmarg peaks & peaceful pine valley sanctuaries.',
      href: '/packages#kashmir',
      ctaLabel: 'Explore Kashmir Package',
    },
    {
      image: '/hero/rajasthan.jpg',
      tag: 'Royal Heritage Circuit',
      title: 'Grand Rajasthan',
      caption: 'Intricately carved stone fortresses, desert safari dunes & royal palace living in Jaipur & Jodhpur.',
      href: '/packages#rajasthan',
      ctaLabel: 'Explore Rajasthan Package',
    },
    {
      image: '/hero/goa.jpg',
      tag: 'Tropical Coastal Escape',
      title: 'Sun-Kissed Goa',
      caption: 'Palm-fringed beaches, tranquil coastal sunsets, Portuguese architecture & watersports.',
      href: '/packages#goa',
      ctaLabel: 'Explore Goa Package',
    },
    {
      image: '/hero/alpine.jpg',
      tag: 'Alpine Lakes & Wilderness',
      title: 'Uttarakhand Peaks',
      caption: 'Sacred mountain trails, Nainital emerald waters & panoramic Himalayan vistas.',
      href: '/packages#uttarakhand',
      ctaLabel: 'Explore Uttarakhand Package',
    },
  ];

  const quickNav = [
    {
      name: 'Air Tickets',
      desc: 'Domestic & Global Flights',
      href: '/air-tickets',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Visa Services',
      desc: 'Fast-Track Approvals',
      href: '/visa',
      img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Tour Packages',
      desc: 'Curated Itineraries',
      href: '/packages',
      img: '/hero/ladakh.jpg',
    },
    {
      name: 'Passport Desk',
      desc: 'Tatkal & Appointments',
      href: '/passport',
      img: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Trip Insurance',
      desc: 'Embassy-Compliant',
      href: '/travel-insurance',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-28 pb-24">
      {/* Hero Section: Aperture Carousel with Iris Transition */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4">
        {/* Full-width Carousel Frame */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group">
          <ApertureCarousel
            slides={heroSlides}
            height="58vh"
            autoplay={5500}
            duration={1050}
            ariaLabel="Govind Tours Signature Packages Carousel"
          />
        </div>

        {/* Circular Quick Navigation Rail (Underneath Carousel) */}
        <div className="mt-8 sm:mt-10 pt-4">
          <div className="text-center mb-6">
            <span className="text-[11px] font-headline font-bold uppercase tracking-widest text-primary">
              Instant Portals &amp; Direct Services
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {quickNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col items-center text-center group active:scale-95"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative mb-3 shadow-inner ring-2 ring-slate-100 group-hover:ring-primary/40 transition-all">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="font-headline font-bold text-xs sm:text-sm text-slate-900 group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Micro Agency Trust Metrics */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-500 pt-4 border-t border-slate-200/60">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Govt. Registered Agency</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>99% Visa Approval Track Record</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Sindhu Bhavan Marg, Ahmedabad Desk</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Direct WhatsApp Support</span>
          </div>
        </div>
      </section>

      {/* Metrics Row: Clean & Airy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-surface-container-low border border-outline-variant/30 p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {proofPoints.map((item, idx) => (
              <div key={item.label} className={idx !== proofPoints.length - 1 ? 'lg:border-r border-slate-200/60 lg:pr-8' : ''}>
                <div className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary mt-1">
                  {item.label}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services: Modular Clean Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface tracking-tight">
              Modular Travel Solutions
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            Choose standalone services or bundle them together for seamless international travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 border border-slate-200/70 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-headline font-bold text-primary group-hover:gap-3 transition-all pt-4 border-t border-slate-100"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}

          {/* Quick Callout Card in the grid */}
          <div className="bg-gradient-to-br from-secondary to-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-secondary-fixed-dim">Custom Request</span>
              <h3 className="text-2xl font-headline font-bold mt-3 mb-2">Need a custom plan?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect directly with our travel desk for complex corporate groups, multi-city itineraries, or urgent visa queries.
              </p>
            </div>
            <button
              onClick={openModal}
              className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-secondary px-6 py-3.5 rounded-xl font-headline font-bold text-sm shadow hover:bg-slate-50 transition-all"
            >
              <span>Speak to an Advisor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Holiday Packages: Clean Minimal Gallery */}
      <section className="bg-surface-container-low py-20 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block mb-2">
                Handpicked Vacations
              </span>
              <h2 className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface tracking-tight">
                Curated Travel Escapes
              </h2>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-headline font-bold text-primary hover:gap-3 transition-all"
            >
              <span>Explore All Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.title}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <Link href="/packages" className="relative h-48 overflow-hidden bg-slate-100 block">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-sm">
                    {dest.badge}
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      {dest.category} • {dest.duration}
                    </span>
                    <Link href="/packages" className="block">
                      <h4 className="font-headline font-bold text-base text-on-surface leading-snug group-hover:text-primary transition-colors">
                        {dest.title}
                      </h4>
                    </Link>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Starting from</span>
                      <span className="font-headline font-extrabold text-lg text-primary-container">
                        {dest.price}
                      </span>
                    </div>
                    <button
                      onClick={openModal}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-primary-container hover:text-white text-xs font-bold font-headline transition-colors"
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

      {/* Why Choose Us: Spacious Split Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-primary font-headline font-bold text-xs uppercase tracking-widest block">
              The Govind Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
              Why Travelers Choose Our Dedicated Desk
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We cut through the noise of conflicting travel advisories with verifiable documentation, prompt answers, and dedicated concierge assistance.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-headline font-bold text-primary hover:gap-3 transition-all"
              >
                <span>Visit our Ahmedabad Office</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h4 className="font-headline font-bold text-base text-on-surface pt-2">Transparent Quotations</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Clear itemized pricing with zero surprise charges or hidden booking add-ons.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h4 className="font-headline font-bold text-base text-on-surface pt-2">Embassy Compliance</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Meticulous document vetting ensuring complete alignment with consulate guidelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h4 className="font-headline font-bold text-base text-on-surface pt-2">24/7 Duty Assistance</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Direct phone and WhatsApp escalation while you are on an active overseas itinerary.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h4 className="font-headline font-bold text-base text-on-surface pt-2">End-to-End Handling</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Flight seats, hotel vouchers, local excursions, and visas managed under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block">
              Google Verified Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-headline font-extrabold text-on-surface tracking-tight">
              What Our Travelers Say
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            Direct feedback from travelers who booked visas, itineraries, and tickets through our desk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {clientReviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-md">
                    {rev.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Profile Link */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-headline font-bold text-xs flex items-center justify-center shrink-0">
                    {rev.initials}
                  </div>
                  <div>
                    <a
                      href={rev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-headline font-bold text-sm text-on-surface hover:text-primary transition-colors flex items-center gap-1.5 group"
                    >
                      <span>{rev.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
                    </a>
                    <span className="text-[11px] text-slate-400 block">Google Reviewer</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Footer Action Block: Minimal & Airy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-secondary-fixed-dim font-headline font-bold text-xs uppercase tracking-widest block">
            Ready to Begin?
          </span>
          <h3 className="text-3xl sm:text-4xl font-headline font-extrabold tracking-tight">
            Connect with our travel team today
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Reach out via phone, WhatsApp, or request an instant callback to receive customized fares and visa advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={openModal}
              className="bg-primary-container hover:bg-primary text-white px-8 py-3.5 rounded-xl font-headline font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Get In Touch
            </button>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-xl font-headline font-bold text-sm transition-all"
            >
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
