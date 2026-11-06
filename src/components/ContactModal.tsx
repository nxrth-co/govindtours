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
    }, 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] border border-slate-200">
        {/* Close Button */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-50 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Visual Sidebar (Desktop only) */}
        <div className="hidden md:flex md:w-5/12 relative overflow-hidden bg-slate-900 text-white">
          <img
            alt="Scenic travel landscape"
            className="absolute inset-0 object-cover w-full h-full brightness-[0.6]"
            src="/hero/ladakh.jpg"
          />
          <div className="relative z-10 mt-auto p-6 lg:p-8 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent space-y-2">
            <span className="text-[11px] font-mono text-slate-300 block">
              AHMEDABAD DESK
            </span>
            <h3 className="text-white text-xl font-semibold font-headline tracking-tight leading-snug">
              Plan your travel with an advisor
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Air tickets, foreign visas, overseas insurance, and holiday circuits managed directly from Bodakdev.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-xs pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct consultation</span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 overflow-y-auto">
          <header className="mb-6">
            <span className="text-xs font-mono text-slate-500 block mb-1">
              INQUIRY DESK
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 font-headline tracking-tight">
              Get in Touch
            </h2>
          </header>

          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-slate-800" />
              <h3 className="text-lg font-semibold font-headline text-slate-900">Inquiry Received</h3>
              <p className="text-slate-600 text-xs max-w-sm leading-relaxed">
                Thank you for contacting Govind Tours. A destination consultant will call or WhatsApp you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 94264 17399"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600">
                  How can we help?
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about destinations, dates, or visa questions..."
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:outline-none focus:border-slate-400 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#a10017] hover:bg-[#860013] text-white font-headline font-semibold rounded-lg transition-colors text-xs"
                >
                  Send travel request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
