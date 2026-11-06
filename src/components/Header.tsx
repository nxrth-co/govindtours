'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useContactModal } from '@/context/ContactModalContext';
import CardNav, { CardNavItem } from './CardNav';
import { 
  Plane, 
  FileText, 
  Palmtree, 
  Compass, 
  Phone
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useContactModal();

  const navItems: CardNavItem[] = [
    {
      label: 'Travel Services',
      description: 'Domestic & international flights and custom curated holiday escapes.',
      links: [
        { label: 'Air Tickets & Flights', href: '/air-tickets' },
        { label: 'Tour Packages', href: '/packages' },
        { label: 'Travel Insurance', href: '/travel-insurance' },
      ],
    },
    {
      label: 'Visa & Documents',
      description: 'Consulate documentation, biometric guidance & passport services.',
      links: [
        { label: 'Visa Approvals', href: '/visa' },
        { label: 'Passport Assistance', href: '/passport' },
        { label: 'Payment Details', href: '/payment-details' },
      ],
    },
    {
      label: 'Company & Help',
      description: 'Our Ahmedabad headquarters, verified client reviews & advisories.',
      links: [
        { label: 'Contact & Office Desk', href: '/contact' },
        { label: 'Travel Blog & Insights', href: '/blog' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
      ],
    },
  ];

  const mobileBottomItems = [
    { name: 'Flights', href: '/air-tickets', icon: Plane },
    { name: 'Visas', href: '/visa', icon: FileText },
    { name: 'Home', href: '/', icon: Compass, isCenter: true },
    { name: 'Packages', href: '/packages', icon: Palmtree },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {/* Top Floating CardNav Header */}
      <header className="fixed top-0 left-0 w-full z-50 pt-2 sm:pt-3.5 px-3 sm:px-6 pointer-events-none">
        <div className="pointer-events-auto max-w-5xl mx-auto">
          <CardNav
            logo={
              <Image
                src="/logo-full.png"
                alt="Govind Tours"
                width={136}
                height={40}
                priority
                className="h-7 sm:h-8 w-auto object-contain"
              />
            }
            logoAlt="Govind Tours"
            logoHref="/"
            items={navItems}
            cta={{
              label: 'Inquire Now',
              onClick: openModal,
            }}
            theme="light"
            surface="glass"
            cardEffect="rise"
            openOn="click"
            maxWidth={880}
            linkComponent={Link}
          />
        </div>
      </header>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex justify-around items-center shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]">
        {mobileBottomItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          if (item.isCenter) {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-5"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-colors ${
                    isActive
                      ? 'bg-[#a10017] text-white ring-4 ring-white'
                      : 'bg-slate-900 text-white ring-4 ring-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-medium mt-1 text-slate-700">
                  {item.name}
                </span>
              </Link>
            );
          }
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-colors ${
                isActive ? 'text-primary font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] font-medium font-headline">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
