import Image from 'next/image';
import { team } from '@/data/team';

const timeline = [
  {
    year: '2015',
    title: 'Origins in Tbilisi',
    description: 'Started as a boutique agency crafting nightlife-to-wine escapes for friends of friends.'
  },
  {
    year: '2018',
    title: 'Mountain & Wine Expansion',
    description: 'Opened Kazbegi and Svaneti bases with local guides, launched qvevri cellar partnerships.'
  },
  {
    year: '2022',
    title: 'AI Travel Companion',
    description: 'Introduced AI itinerary assistant blending data with Georgian hospitality wisdom.'
  }
];

export function AboutTeam() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">About Us</h2>
          <p className="text-sm text-slate-600">
            [Company Name] is a modern Georgian travel collective blending AI intelligence with soulful hospitality. We speak in
            short, vivid sentences that invite emotion. Our core values—hospitality, authenticity, adventure, sustainability,
            personalization—guide every toast, hike, and hidden courtyard.
          </p>
          <ul className="space-y-4 border-l-2 border-sand-300 pl-6 text-sm text-slate-600">
            {timeline.map((item) => (
              <li key={item.year}>
                <p className="text-xs font-semibold uppercase tracking-wide text-sand-600">{item.year}</p>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6">
          {team.map((member) => (
            <article key={member.name} className="flex gap-4 rounded-3xl bg-white/90 p-4 shadow-glass">
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                <p className="text-xs uppercase tracking-wide text-sand-600">{member.role}</p>
                <p className="text-xs text-slate-600">{member.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
