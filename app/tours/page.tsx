import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/data/tours';

export const metadata = {
  title: 'Tours | [Company Name] Georgian Adventures'
};

export default function ToursPage() {
  return (
    <div className="section-shell space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-sand-600">Tours</p>
        <h1 className="text-4xl font-semibold text-slate-900">Tailor-Made Tours Across Georgia</h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Choose from AI-powered itineraries across Tbilisi, Kakheti, Kazbegi, Gudauri, and Svaneti. Adjust by region, pace,
          and passions—then ask our assistant to customize transfers, hotels, and experiences.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {tours.map((tour) => (
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
              <h2 className="text-2xl font-semibold text-slate-900">{tour.title}</h2>
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
    </div>
  );
}
