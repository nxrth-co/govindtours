'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MessageSquare,
  X,
  Send,
  Maximize2,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
import MarkdownContent from './MarkdownContent';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const INITIAL_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `### Welcome to Govind Tours Travel Desk

I am your digital travel concierge for **Govind Tours & Travels** (Bodakdev, Ahmedabad). I can help you with:

- **[Air Tickets](/air-tickets)**: Domestic and international route fares, seat selection, and direct ticketing.
- **[Visa Services](/visa)**: 60+ countries (UAE E-Visa, Schengen 27, US B1/B2, UK, Singapore).
- **[Tour Packages](/packages)**: Goa (₹18,500), Kerala (₹24,999), Rajasthan, Ladakh, and international circuits.
- **[Passport Assistance](/passport)**: Fresh filing, renewals, and Tatkal fast-track appointments.
- **[Travel Insurance](/travel-insurance)**: Mandatory Schengen €30,000 cover and global medical plans.
- **[Bank & Payment Details](/payment-details)**: Verified SBI and ICICI current accounts.

How may I assist your journey today?`,
  timestamp: 'Just now',
};

const SUGGESTIONS = [
  'Schengen Visa Requirements',
  'Goa and Kerala Tour Packages',
  'Flights from Ahmedabad',
  'Tatkal Passport Assistance',
  'Official Bank Wire Details',
  'Office Location & Hours',
];

export default function ChatbotWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Do not render floating widget on the full page chat route
  if (pathname === '/chat') {
    return null;
  }

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const history = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Server error occurred');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'Thank you for contacting Govind Tours. Please reach our desk on +91 94264 17399.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `**Desk Notice**: ${err.message || 'Unable to connect with the AI desk.'}\n\nYou can speak directly with our Ahmedabad travel desk at **+91 94264 17399** or visit [Contact Desk](/contact).`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 select-none">
      {/* Floating Action Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            setUnreadBadge(false);
          }}
          aria-label="Open Govind Tours AI Travel Desk"
          className="group relative flex items-center gap-2.5 bg-slate-900 text-white pl-4 pr-5 py-3 rounded-full shadow-[0_12px_32px_-4px_rgba(15,23,42,0.35)] hover:bg-[#a10017] hover:shadow-[0_12px_32px_-4px_rgba(161,0,23,0.4)] transition-all duration-300 active:scale-95 border border-slate-800"
        >
          <div className="relative w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
            <MessageSquare className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 group-hover:text-white/80 leading-tight">
              AI Travel Desk
            </span>
            <span className="text-xs font-headline font-semibold text-white tracking-tight leading-tight">
              Ask Govind Tours
            </span>
          </div>

          {unreadBadge && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
          )}
        </button>
      )}

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div className="flex flex-col w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[82vh] bg-white rounded-2xl shadow-[0_24px_60px_-12px_rgba(15,23,42,0.25)] border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Panel Header */}
          <div className="bg-slate-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white">
                <Compass className="w-4 h-4 text-slate-200" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-headline font-semibold text-xs tracking-tight text-white">
                    Govind Tours AI Desk
                  </h3>
                  <span className="text-[9px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 py-0.2 rounded">
                    Groq Fast
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-normal">
                  Bodakdev Office • Mon–Sat 10AM–7PM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="w-7 h-7 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/chat"
                onClick={() => setIsOpen(false)}
                title="Expand to Full Page Chat"
                className="w-7 h-7 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="w-7 h-7 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Full Page Link Banner */}
          <div className="bg-[#f7f6f4] px-3.5 py-1.5 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
              Verified Ahmedabad Desk Data
            </span>
            <Link
              href="/chat"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1 text-primary hover:text-[#7f0012] font-semibold transition-colors"
            >
              <span>Full Page Mode</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((message) => {
              const isUser = message.role === 'user';
              return (
                <div
                  key={message.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 shadow-sm text-xs sm:text-sm ${
                      isUser
                        ? 'bg-slate-900 text-white rounded-br-none'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    ) : (
                      <MarkdownContent content={message.content} />
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {message.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Shimmer / Skeleton Loading State */}
            {isLoading && (
              <div className="flex flex-col items-start space-y-1.5 max-w-[80%]">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm w-full space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-primary animate-spin" />
                    <span>Consulting travel records...</span>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="h-2.5 bg-slate-100 rounded w-full animate-pulse" />
                    <div className="h-2.5 bg-slate-100 rounded w-4/5 animate-pulse" />
                    <div className="h-2.5 bg-slate-100 rounded w-2/3 animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSendMessage(suggestion)}
                disabled={isLoading}
                className="text-[11px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full shrink-0 transition-colors disabled:opacity-50"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-slate-900/10 focus-within:border-slate-400 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about visas, flights, packages, or bank details..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-xs text-slate-900 placeholder:text-slate-400 outline-none disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center hover:bg-primary disabled:opacity-30 disabled:hover:bg-slate-900 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5 px-0.5">
              <span>Powered by Groq High-Speed LLM</span>
              <span>Press Enter to send</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

