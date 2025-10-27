import Link from 'next/link';
import Image from 'next/image';
import { destinations } from '@/data/destinations';

export function TopDestinations() {
  return (
    <section className="section-shell">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Top Destinations</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            Tbilisi rooftops, Kazbegi summits, Kakheti vineyards, Gudauri slopes, and Batumi sunsets—curated with local hosts
            who know every toast and trail.
          </p>
        </div>
        <Link href="/destinations" className="text-sm font-semibold text-sand-600 hover:text-sand-500">
          Explore all destinations →
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <article key={destination.slug} className="group overflow-hidden rounded-3xl bg-white shadow-glass">
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
              <h3 className="text-xl font-semibold text-slate-900">{destination.name}</h3>
              <p className="text-sm text-slate-600">{destination.description}</p>
              <Link href={`/destinations#${destination.slug}`} className="text-sm font-semibold text-sand-600">
                Explore Tours →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
