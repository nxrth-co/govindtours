import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-inner">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-bold font-headline text-secondary tracking-widest uppercase">
            Error 404
          </span>
          <h1 className="text-3xl font-headline font-bold text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The destination or page you are looking for may have moved or no longer exists.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white px-6 py-3 rounded-xl font-headline font-bold text-sm shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

