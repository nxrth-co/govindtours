'use client';

import React, { useState, useEffect } from 'react';
import { useContactModal } from '@/context/ContactModalContext';
import { X, User, Mail, Phone, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      closeModal();
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-50 p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-primary rounded-full transition-all active:scale-95 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Sidebar (Desktop only) */}
        <div className="hidden md:flex md:w-5/12 relative overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-br from-primary to-secondary" />
          <img
            alt="Luxury travel scenery"
            className="absolute inset-0 object-cover w-full h-full grayscale-[15%] contrast-[1.1]"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
          />
          <div className="relative z-10 mt-auto p-8 lg:p-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
            <h3 className="text-white text-2xl lg:text-3xl font-extrabold font-headline mb-3 tracking-tight leading-tight">
              Your Curated Journey Awaits.
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-body">
              Connect with our travel concierge to begin designing an itinerary tailored exclusively to your desires.
            </p>
            <div className="flex items-center gap-2.5 text-white/90">
              <ShieldCheck className="w-5 h-5 text-secondary-container" />
              <span className="text-xs uppercase tracking-widest font-semibold">
                Direct Agent Consultation
              </span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-10 overflow-y-auto">
          <header className="mb-8">
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-1.5 block">
              Govind Tours Concierge
            </span>
            <h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight">
              Get in Touch
            </h2>
            <div className="w-12 h-1 bg-primary-container rounded-full mt-3" />
          </header>

          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
              <h3 className="text-2xl font-bold font-headline text-on-surface">Thank You!</h3>
              <p className="text-slate-600 text-sm max-w-sm">
                Your request has been received. One of our destination specialists will call or WhatsApp you within 2 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-primary/30 rounded-xl focus:ring-4 focus:ring-primary/10 transition-all text-on-surface text-sm"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-primary/30 rounded-xl focus:ring-4 focus:ring-primary/10 transition-all text-on-surface text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94264 17399"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-primary/30 rounded-xl focus:ring-4 focus:ring-primary/10 transition-all text-on-surface text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                  How can we help?
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about destinations, travel dates, or visa questions..."
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-100 hover:bg-slate-50 focus:bg-white border border-transparent focus:border-primary/30 rounded-xl focus:ring-4 focus:ring-primary/10 transition-all text-on-surface text-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-primary-container hover:bg-primary text-white font-headline font-bold rounded-xl shadow-lg shadow-primary-container/20 hover:shadow-primary-container/40 transition-all active:scale-[0.98] text-sm uppercase tracking-wider mt-2"
              >
                Send Travel Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
