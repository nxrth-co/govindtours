import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ChatbotWidget from '@/components/chat/ChatbotWidget';
import { ContactModalProvider } from '@/context/ContactModalContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Govind Tours | Flights, Visas, Holidays & Travel Insurance',
  description:
    'Govind Tours is your trusted travel partner. From visa approvals and air tickets to customized domestic and international holiday packages, we manage everything with professional care.',
  keywords: [
    'Govind Tours',
    'Visa Services Ahmedabad',
    'Air Tickets Booking',
    'Holiday Packages',
    'Travel Insurance',
    'Passport Assistance',
  ],
  icons: {
    icon: '/logo-icon.svg',
    shortcut: '/logo-icon.svg',
    apple: '/logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-background text-on-background font-body antialiased selection:bg-secondary-container selection:text-on-secondary-container flex flex-col min-h-screen">
        <ContactModalProvider>
          <Header />
          <main className="flex-grow pt-[76px] sm:pt-[84px]">
            {children}
          </main>
          <Footer />
          <ContactModal />
          <ChatbotWidget />
        </ContactModalProvider>
      </body>
    </html>
  );
}
