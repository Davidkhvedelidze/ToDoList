import Image from 'next/image';
import { notFound } from 'next/navigation';
import { tours } from '@/data/tours';

interface TourDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export function generateMetadata({ params }: TourDetailPageProps) {
  const tour = tours.find((item) => item.slug === params.slug);
  if (!tour) {
    return {
      title: 'Tour Not Found | [Company Name]'
    };
  }

  return {
    title: `${tour.title} | [Company Name]`
  };
}

export default function TourDetailPage({ params }: TourDetailPageProps) {
  const tour = tours.find((item) => item.slug === params.slug);

  if (!tour) {
    notFound();
    return null;
  }

  return (
    <div className="space-y-12">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={tour.heroImage}
          alt={tour.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900/80" />
        <div className="section-shell absolute inset-0 flex flex-col justify-end">
          <div className="max-w-3xl space-y-4 text-white">
            <p className="text-xs uppercase tracking-wide text-sand-200">
              {tour.region} • {tour.theme} • {tour.duration} • {tour.budget}
            </p>
            <h1 className="text-4xl font-semibold">{tour.title}</h1>
            <p className="max-w-2xl text-sm text-sand-100">
              Ask the AI assistant to customize this itinerary—swap hotels, add wine tastings, or adjust your pace.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="#itinerary" className="rounded-full bg-sand-500 px-5 py-2 font-semibold text-white">
                View Itinerary
              </a>
              <a href="#ai-chat" className="rounded-full border border-white/60 px-5 py-2 font-semibold text-white">
                Ask AI to modify tour
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="itinerary" className="section-shell space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Day-by-Day Itinerary</h2>
            <div className="space-y-4 rounded-3xl bg-white p-6 shadow-glass">
              {tour.itinerary.map((item) => (
                <details key={item.day} className="rounded-2xl border border-sand-100 bg-sand-50/70 p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-sand-700">{item.day}</summary>
                  <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-glass">
              <h3 className="text-lg font-semibold text-slate-900">Interactive Map</h3>
              <p className="mt-2 text-sm text-slate-600">
                Preview the key regions in this tour. Customize with Gudauri ski days, Kakheti vineyard add-ons, or Svaneti
                detours.
              </p>
              <div className="mt-4 h-48 w-full overflow-hidden rounded-2xl bg-slate-200">
                <iframe
                  title={`${tour.title} map`}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=43.0%2C41.5%2C46.0%2C43.5&layer=mapnik"
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="rounded-3xl bg-sand-100 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Testimonial</h3>
              <p className="mt-2 text-sm text-slate-600">“{tour.testimonial.quote}”</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-sand-600">
                {tour.testimonial.name} — {tour.testimonial.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-3xl bg-white/90 p-10 shadow-glass">
          <h2 className="text-2xl font-semibold text-slate-900">Modify with AI</h2>
          <p className="mt-2 text-sm text-slate-600">
            Tell our assistant your travel dates, group size, pace, interests, accommodation style, and budget. We summarize the
            plan with vehicle type, hotel selection, and price estimate before sending it to your inbox or displaying it on the
            site.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-sand-600">
            <a href="#ai-chat" className="rounded-full bg-sand-500 px-5 py-2 text-white">
              Chat with AI Guide
            </a>
            <a href="mailto:hello@company.ge" className="rounded-full border border-sand-400 px-5 py-2">
              Send to Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
