import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[55vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-5">
        <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
          <Compass className="w-6 h-6" />
        </div>
        <div className="space-y-1.5">
          <span className="text-xs font-mono text-slate-400 block">
            404 • ROUTE NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-headline font-semibold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The travel destination or itinerary you requested may have moved or is no longer listed.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 bg-[#a10017] hover:bg-[#860013] text-white px-4 py-2 rounded-lg font-headline font-semibold text-xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
