const keywordClusters = [
  {
    title: 'Georgia Private Tours & Chauffeured Experiences',
    description: 'Focus landing page on bespoke drivers, luxury stays, AI-crafted itineraries, and concierge services.'
  },
  {
    title: 'Custom Caucasus Itineraries & Tailor-Made Journeys',
    description: 'Highlight multi-country planning across Georgia, Armenia, and Azerbaijan with AI personalization.'
  },
  {
    title: 'Tbilisi Day Trips & Urban Adventures',
    description: 'Showcase curated day escapes, private drivers, vineyard add-ons, and UNESCO heritage routes.'
  },
  {
    title: 'Georgian Wine Tours & Culinary Experiences',
    description: 'Feature qvevri tastings, boutique vineyards, cooking classes, and sommelier-hosted evenings.'
  },
  {
    title: 'Adventure Tours in Kazbegi, Gudauri, and Svaneti',
    description: 'Drive demand for mountain escapes with hiking, skiing, guesthouses, and 4x4 logistics.'
  }
];

const blogIdeas = [
  'Ultimate Guide to Planning a Georgia Private Tour',
  '7-Day Custom Caucasus Itinerary for Adventure Seekers',
  'Tbilisi Day Trips: Wine, History, and Hidden Gems',
  'Luxury Wine Tours in Kakheti: Insider Picks',
  'Family-Friendly Georgia: Multi-Generational Tour Ideas',
  'Winter in Gudauri: Custom Ski Trips for Every Budget',
  'Food Lover\'s Route: Culinary Tours Across Georgia',
  'Romantic Escapes: Honeymoon Itineraries in Georgia',
  'Off-the-Beaten-Path: Svaneti and Tusheti Trekking Planner',
  'Sustainable Travel in Georgia: Responsible Tour Options'
];

const ctas = [
  'Ready to craft your private tour? Launch our AI Travel Assistant now.',
  'Curious about Kakheti wine nights? Chat with us for a personalized tasting route.',
  'Plan your custom Caucasus journey in minutes — talk to our virtual guide.'
];

export function SEOPlan() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 rounded-3xl bg-white/85 p-10 shadow-glass lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">SEO & Content Strategy</h2>
          <p className="text-sm text-slate-600">
            Build a 3-month editorial calendar targeting high-intent keywords like “Georgia private tour,” “Tbilisi day trips,”
            and “custom Caucasus itinerary.” Link landing pages to AI chat, tours, and WhatsApp for conversion loops.
          </p>
          <div className="rounded-3xl bg-sand-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-600">Keyword Clusters</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {keywordClusters.map((cluster) => (
                <li key={cluster.title}>
                  <p className="font-semibold text-slate-900">{cluster.title}</p>
                  <p>{cluster.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-glass">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-600">Blog Calendar</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {blogIdeas.map((idea) => (
                <li key={idea}>• {idea}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-sand-100 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-700">AI-Powered CTAs</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {ctas.map((cta) => (
                <li key={cta}>• {cta}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
