export function AdminDashboardPreview() {
  const modules = [
    {
      title: 'Tours Management',
      description: 'CRUD tours, drag-and-drop itinerary builder, status badges, Supabase sync.',
      metrics: ['42 active tours', '8 drafts', '3 awaiting AI approval']
    },
    {
      title: 'Destinations & Hotels',
      description: 'Filterable tables with galleries, partner notes, sustainability tags.',
      metrics: ['65 destinations', '120 hotel partners']
    },
    {
      title: 'AI Suggestions Queue',
      description: 'Approve / reject AI itineraries, view prompt history, multi-language briefs.',
      metrics: ['12 new itineraries', 'Average response 4 min']
    },
    {
      title: 'Customer Chat',
      description: 'Split view for AI conversation history and live agent reply panel powered by Supabase real-time.',
      metrics: ['87 conversations today', 'Satisfaction 4.8/5']
    },
    {
      title: 'Analytics',
      description: 'Conversion funnel, AI chat satisfaction, booking sources, revenue dashboard.',
      metrics: ['Conversion +18%', 'Top source: AI Chat']
    }
  ];

  return (
    <section className="section-shell">
      <div className="rounded-3xl bg-slate-900 p-10 text-sand-50">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Admin Dashboard Blueprint</h2>
            <p className="mt-2 max-w-2xl text-sm text-sand-100">
              Next.js + Supabase + Tailwind + Clerk/Auth.js stack. Sticky action bars, responsive grids, and live data from
              bookings, AI itineraries, and chat queues.
            </p>
          </div>
          <span className="rounded-full border border-sand-200/40 px-4 py-2 text-xs uppercase tracking-wide text-sand-200">
            Internal Team
          </span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <article key={module.title} className="rounded-3xl bg-white/10 p-6 shadow-glass">
              <h3 className="text-lg font-semibold text-white">{module.title}</h3>
              <p className="mt-2 text-sm text-sand-100">{module.description}</p>
              <ul className="mt-4 space-y-1 text-xs text-sand-200">
                {module.metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
