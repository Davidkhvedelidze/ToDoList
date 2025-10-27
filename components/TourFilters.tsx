'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Tour } from '@/data/tours';
import { tours } from '@/data/tours';

type FilterState = {
  region: string;
  theme: string;
  duration: string;
  budget: string;
};

const initialFilters: FilterState = {
  region: 'All',
  theme: 'All',
  duration: 'All',
  budget: 'All'
};

const uniqueValues = (key: keyof FilterState) => {
  const values = new Set<string>();
  tours.forEach((tour) => {
    values.add(String(tour[key as keyof Tour]));
  });
  return ['All', ...Array.from(values)];
};

export function TourFilters() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesRegion = filters.region === 'All' || tour.region === filters.region;
      const matchesTheme = filters.theme === 'All' || tour.theme === filters.theme;
      const matchesDuration = filters.duration === 'All' || tour.duration === filters.duration;
      const matchesBudget = filters.budget === 'All' || tour.budget === filters.budget;
      return matchesRegion && matchesTheme && matchesDuration && matchesBudget;
    });
  }, [filters]);

  const setFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="section-shell">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Tailored Tours</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Filter by region, theme, duration, and budget to watch AI-ready itineraries appear. Each card includes highlights,
            price range, and an instant link to view details or let the AI modify the journey.
          </p>
        </div>
        <Link href="/tours" className="text-sm font-semibold text-sand-600 hover:text-sand-500">
          View all tours →
        </Link>
      </div>
      <div className="mt-8 grid gap-4 rounded-3xl bg-white p-6 shadow-glass md:grid-cols-4">
        {(['region', 'theme', 'duration', 'budget'] as (keyof FilterState)[]).map((key) => (
          <div key={key} className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">{key}</label>
            <select
              value={filters[key]}
              onChange={(event) => setFilter(key, event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:border-sand-400 focus:outline-none"
            >
              {uniqueValues(key).map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredTours.map((tour) => (
          <article key={tour.slug} className="overflow-hidden rounded-3xl bg-white shadow-glass">
            <div className="relative h-64 w-full">
              <Image
                src={tour.heroImage}
                alt={tour.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-slate-500">
                <span>{tour.region}</span>
                <span>•</span>
                <span>{tour.theme}</span>
                <span>•</span>
                <span>{tour.duration}</span>
                <span>•</span>
                <span>{tour.budget}</span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">{tour.title}</h3>
              <ul className="grid gap-2 text-sm text-slate-600">
                {tour.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-semibold text-sand-600">
                <span>{tour.priceRange}</span>
                <div className="flex items-center gap-3">
                  <Link href={`/tours/${tour.slug}`} className="rounded-full bg-sand-500 px-4 py-2 text-white">
                    View Details
                  </Link>
                  <a href="#ai-chat" className="text-sand-600 hover:text-sand-500">
                    Ask AI to Modify →
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
