'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-sand-700">
          [Company Name]
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-800 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-sand-600">
              {link.label}
            </Link>
          ))}
          <Link
            href="/tours"
            className="rounded-full bg-sand-500 px-4 py-2 text-white shadow-md transition hover:bg-sand-600"
          >
            Start Your AI Tour
          </Link>
        </nav>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="md:hidden">
          <div className="space-y-2 border-t border-slate-200 bg-sand-50 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tours"
              className="block rounded-full bg-sand-500 px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setIsOpen(false)}
            >
              Start Your AI Tour
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
