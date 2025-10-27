import Image from 'next/image';
import { destinations } from '@/data/destinations';

export const metadata = {
  title: 'Destinations | [Company Name]'
};

export default function DestinationsPage() {
  return (
    <div className="section-shell space-y-12">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-sand-600">Destinations</p>
        <h1 className="text-4xl font-semibold text-slate-900">From Tbilisi Lights to Svaneti Peaks</h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Explore the regions we curate with local storytellers. Each card links to tours and AI customization. Hover for
          glassmorphism glow and micro-interactions.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article key={destination.slug} id={destination.slug} className="group overflow-hidden rounded-3xl bg-white shadow-glass">
            <div className="relative h-56 w-full">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">{destination.name}</h2>
              <p className="text-sm text-slate-600">{destination.description}</p>
              <a href="/tours" className="text-sm font-semibold text-sand-600">
                Explore Tours →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
