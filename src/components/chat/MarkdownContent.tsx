'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

interface MarkdownContentProps {
  content: string;
  onSuggestionClick?: (text: string) => void;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="chat-markdown text-slate-800 text-xs sm:text-sm leading-relaxed space-y-2">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-base sm:text-lg font-headline font-semibold text-slate-900 tracking-tight mt-3 mb-1.5 border-b border-slate-200/80 pb-1">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-sm sm:text-base font-headline font-semibold text-slate-900 tracking-tight mt-3 mb-1.5">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xs sm:text-sm font-headline font-semibold text-slate-900 tracking-tight mt-2.5 mb-1">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xs font-headline font-semibold text-slate-800 mt-2 mb-1">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-slate-700 leading-relaxed mb-2 last:mb-0">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-4 space-y-1 text-slate-700 mb-2.5 marker:text-slate-400">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-4 space-y-1 text-slate-700 mb-2.5 marker:text-slate-500 font-medium">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-slate-900">{children}</strong>
          ),
          em: ({ children }) => <em className="italic text-slate-700">{children}</em>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-slate-900 bg-slate-50/80 pl-3 py-1.5 my-2.5 text-slate-600 text-xs rounded-r">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => {
            const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
            if (isInternal) {
              return (
                <Link
                  href={href || '/'}
                  className="inline-flex items-center text-slate-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors"
              >
                {children}
              </a>
            );
          },
          table: ({ children }) => (
            <div className="overflow-x-auto my-3 rounded-lg border border-slate-200/80">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
          tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-100 bg-white">{children}</tbody>
          ),
          tr: ({ children }) => <tr>{children}</tr>,
          th: ({ children }) => (
            <th className="px-3 py-2 font-headline font-semibold text-slate-900 text-xs">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-slate-600 whitespace-normal text-xs">{children}</td>
          ),
          code: ({ children }) => (
            <code className="bg-slate-100 text-slate-800 text-[11px] font-mono px-1.5 py-0.5 rounded border border-slate-200/60">
              {children}
            </code>
          ),
          hr: () => <hr className="border-slate-200/80 my-3" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
