'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUp, RotateCcw, Copy, Check } from 'lucide-react';
import MarkdownContent from '@/components/chat/MarkdownContent';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'welcome',
    role: 'assistant',
    content: `Welcome to the **Govind Tours** Travel Desk.

I can provide verified facts and direct links for:
- [Air Tickets & Flights](/air-tickets) (Domestic and international routes, IATA issuance)
- [Visa Approvals](/visa) (UAE e-visas, Schengen 27, US B1/B2, and UK visitor documentation)
- [Tour Packages](/packages) (Goa, Kerala, Rajasthan, Ladakh, and international circuits)
- [Passport Assistance](/passport) (Fresh applications, renewals, and Tatkal fast-track appointments)
- [Travel Insurance](/travel-insurance) (Mandatory Schengen €30,000 cover and global medical plans)
- [Bank Coordinates](/payment-details) (Verified SBI and ICICI current accounts)

What would you like to inquire about today?`,
    timestamp: 'Just now',
  },
];

const SUGGESTED_PROMPTS = [
  {
    title: 'Schengen Visa Requirements',
    desc: 'Biometrics, required documents, and appointment fees',
    query: 'What are the required documents, biometric rules, and fees for a Schengen Visa?',
  },
  {
    title: 'Goa & Kerala Holiday Circuits',
    desc: 'Pricing, inclusions, and day-by-day itineraries',
    query: 'Compare the Goa Coastal Circuit and Kerala Backwaters holiday packages with pricing and inclusions.',
  },
  {
    title: 'Flights from Ahmedabad (AMD)',
    desc: 'Non-stop routes to Dubai, Singapore, and London',
    query: 'What direct international flights operate from Ahmedabad (AMD) and what are sample fares?',
  },
  {
    title: 'Official Bank & Wire Accounts',
    desc: 'Verified SBI and ICICI account numbers and IFSC codes',
    query: 'Provide the official SBI and ICICI bank account coordinates and IFSC codes for wire transfer.',
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

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
        throw new Error(data.error || 'Unable to retrieve answer from desk server');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content:
          data.reply ||
          'Inquiry noted. Please reach our Bodakdev desk directly on +91 94264 17399.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `**Desk Notice**: ${err.message || 'Service temporarily unreachable.'}\n\nPlease speak with our consultants on **+91 94264 17399** or visit [Contact Desk](/contact).`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#faf9f6] text-slate-800 antialiased">
      {/* 1. Minimal Header Bar */}
      <header className="sticky top-0 z-30 bg-[#faf9f6]/90 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </Link>
            <span className="text-slate-300">/</span>
            <div className="flex items-center gap-2">
              <span className="font-headline font-semibold text-xs tracking-tight text-slate-900">
                Govind Tours
              </span>
              <span className="text-slate-400 text-xs">·</span>
              <span className="text-xs text-slate-500 font-normal">Travel Desk</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+919426417399"
              className="text-slate-500 hover:text-slate-900 transition-colors hidden sm:inline"
            >
              +91 94264 17399
            </a>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
              title="Start a fresh conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>New consultation</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Main Conversation Stream (Centered Column) */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 py-8 flex flex-col justify-between">
        <div className="space-y-6 flex-1">
          {/* Header intro only shown when conversation is at the initial message */}
          {messages.length === 1 && (
            <div className="space-y-6 pt-4 pb-4">
              <div className="space-y-1.5">
                <h1 className="text-2xl sm:text-3xl font-headline font-semibold tracking-tight text-slate-900">
                  Travel Consultation
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
                  Air ticketing, consular documentation, tailored domestic and international circuits, and passport appointments. Grounded in Bodakdev office records.
                </p>
              </div>

              {/* Minimal suggested prompt cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt.title}
                    onClick={() => handleSendMessage(prompt.query)}
                    disabled={isLoading}
                    className="text-left p-3.5 rounded-xl border border-black/[0.06] bg-white hover:border-black/20 hover:bg-white/80 transition-all text-xs group disabled:opacity-50"
                  >
                    <div className="font-headline font-semibold text-slate-900 group-hover:text-black">
                      {prompt.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                      {prompt.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-5">
            {messages.map((message) => {
              const isUser = message.role === 'user';
              return (
                <div
                  key={message.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-2 mb-1 px-1 text-[11px] text-slate-400">
                    <span>{isUser ? 'You' : 'Travel Desk'}</span>
                    <span>·</span>
                    <span>{message.timestamp}</span>
                  </div>

                  <div
                    className={`rounded-xl text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? 'bg-[#18181b] text-white px-4 py-2.5 max-w-[85%]'
                        : 'bg-white border border-black/[0.06] text-slate-800 p-5 sm:p-6 w-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]'
                    }`}
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    ) : (
                      <div className="space-y-3">
                        <MarkdownContent content={message.content} />

                        <div className="pt-3 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-slate-400">
                          <span>Bodakdev Headquarters Record</span>
                          <button
                            onClick={() => handleCopy(message.id, message.content)}
                            className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-800 transition-colors"
                          >
                            {copiedId === message.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-600">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Quiet Loading State */}
            {isLoading && (
              <div className="bg-white border border-black/[0.06] rounded-xl p-5 w-full space-y-2 text-xs text-slate-500">
                <div className="text-[11px] text-slate-400">Consulting travel records...</div>
                <div className="space-y-1.5 pt-1">
                  <div className="h-2 bg-slate-100 rounded w-full animate-pulse" />
                  <div className="h-2 bg-slate-100 rounded w-4/5 animate-pulse" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      </main>

      {/* 3. Minimal Bottom Input Bar */}
      <footer className="sticky bottom-0 z-30 bg-[#faf9f6]/95 backdrop-blur-md border-t border-black/[0.05] py-3.5 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto w-full">
          <div className="bg-white border border-black/[0.08] focus-within:border-black/30 rounded-xl p-2.5 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex items-end gap-2">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about flights, visa requirements, packages, or bank details..."
              rows={2}
              disabled={isLoading}
              className="flex-1 bg-transparent resize-none text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none leading-relaxed disabled:opacity-50 min-h-[44px]"
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-black text-white flex items-center justify-center shrink-0 disabled:opacity-20 transition-all active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
            <span>Govind Tours &amp; Travels · Bodakdev, Ahmedabad</span>
            <span className="hidden sm:inline">Press Return to send</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
