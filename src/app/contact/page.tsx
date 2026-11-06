'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Building2, 
  ShieldCheck
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
      {/* 1. Header Section */}
      <section className="bg-[#f7f6f4] py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center max-w-2xl space-y-2">
          <span className="text-xs font-mono text-slate-500 block">
            BODAKDEV OFFICE • AHMEDABAD
          </span>
          <h1 className="text-3xl sm:text-4xl font-headline font-semibold text-slate-900 tracking-tight">
            Connect With Our Travel Desk
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Visit our office on Sindhu Bhavan Marg or speak directly with our licensed travel consultants via phone or WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. Main Grid: Info + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-6">
              <h3 className="font-headline font-semibold text-lg text-slate-900">
                Ahmedabad Headquarters
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-slate-900">Office Address</h4>
                    <p className="text-slate-500 mt-0.5 leading-relaxed">
                      A-312, Shilp Aaron, Opposite Marutinandan, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-slate-900">Phone &amp; WhatsApp</h4>
                    <p className="text-slate-500 mt-0.5">+91 94264 17399 (Direct Desk &amp; WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-slate-900">Official Email</h4>
                    <p className="text-slate-500 mt-0.5">info@govindtours.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-slate-900">Working Hours</h4>
                    <p className="text-slate-500 mt-0.5">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                    <p className="text-slate-400 text-[11px] mt-0.5">Closed on Sundays &amp; National Holidays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-headline font-semibold text-xs">
                  Active Traveler Support
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you are currently traveling on an active ticket or itinerary and need emergency rescheduling, our desk is reachable directly on <strong>+91 94264 17399</strong>.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-slate-200">
            <h3 className="font-headline font-semibold text-lg text-slate-900 mb-1">
              Send an Online Inquiry
            </h3>
            <p className="text-slate-500 text-xs mb-6">
              Our travel specialists review incoming requests throughout the day.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-slate-700 mx-auto" />
                <h4 className="font-headline font-semibold text-base text-slate-900">Inquiry Received</h4>
                <p className="text-slate-600 text-xs max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Govind Tours. A consultant will review your query and respond via phone or email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-4 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-lg text-xs"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-600">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Patel"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-600">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-600">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-600">Service Category</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                    >
                      <option value="Visa Assistance">Visa Assistance</option>
                      <option value="Air Tickets">Air Tickets</option>
                      <option value="Holiday Packages">Holiday Packages</option>
                      <option value="Passport Support">Passport Support</option>
                      <option value="Travel Insurance">Travel Insurance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">Message / Itinerary Details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your travel dates, passenger count, or visa requirements..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#a10017] hover:bg-[#860013] text-white px-6 py-2.5 rounded-lg font-headline font-semibold text-xs transition-colors"
                >
                  Send inquiry to desk
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
