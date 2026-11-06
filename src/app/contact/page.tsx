'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Visa Assistance',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* Header Section */}
      <section className="bg-surface-container-low py-16 px-4 sm:px-6 lg:px-8 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto text-center max-w-2xl space-y-4">
          <span className="text-secondary font-headline font-bold text-xs uppercase tracking-widest block">
            Direct Concierge Access
          </span>
          <h1 className="text-4xl sm:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
            Connect With Our <span className="text-primary">Travel Desk</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Visit our office in Bodakdev, Ahmedabad or speak with a senior travel advisor via phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="font-headline font-extrabold text-2xl text-on-surface">
                Headquarters
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-slate-800">Office Address</h4>
                    <p className="text-slate-500 mt-0.5 leading-relaxed">
                      A-312, Shilp Aaron, Opposite Marutinandan, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-slate-800">Phone &amp; WhatsApp</h4>
                    <p className="text-slate-500 mt-0.5">+91 94264 17399 (Direct &amp; WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-slate-800">Official Email</h4>
                    <p className="text-slate-500 mt-0.5">info@govindtours.com (General &amp; Bookings)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-slate-800">Working Hours</h4>
                    <p className="text-slate-500 mt-0.5">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                    <p className="text-slate-400 text-xs mt-0.5">Closed on Sundays &amp; National Holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-headline font-bold text-sm uppercase tracking-wider">
                  24/7 Traveler Emergency Desk
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you are currently traveling on an active booking and require urgent flight rescheduling or emergency assistance, our travel desk is available at <strong>+91 94264 17399</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg">
            <h3 className="font-headline font-extrabold text-2xl sm:text-3xl text-on-surface mb-2">
              Send an Online Inquiry
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Fill out the details below and an experienced travel specialist will respond within 2 hours.
            </p>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-headline font-bold text-2xl text-on-surface">Message Received!</h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Govind Tours. Our destination consultant will reach out via phone or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs uppercase"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Patel"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94264 17399"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option>Visa Assistance</option>
                      <option>Air Ticket Reservation</option>
                      <option>Tour Package Booking</option>
                      <option>Passport Application / Tatkal</option>
                      <option>Travel Insurance Policy</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your destination, dates of travel, number of travelers, or any specific questions..."
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary-container hover:bg-primary text-white font-headline font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-primary-container/25 transition-all active:scale-[0.98]"
                >
                  Send Travel Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
