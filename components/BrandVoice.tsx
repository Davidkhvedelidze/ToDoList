const values = ['Hospitality', 'Authenticity', 'Adventure', 'Sustainability', 'Personalization'];
const rules = [
  'Do celebrate Georgian culture',
  'Do use sensory imagery',
  'Do invite action',
  "Don't sound corporate",
  "Don't overpromise",
  "Don't forget local language touches"
];
const taglines = [
  'See Georgia Your Way.',
  'Your Story. Our Country.',
  'Toast the Caucasus with Us.',
  'Mountains, Wine, and Your Moment.',
  'From Tbilisi Lights to Svaneti Peaks.',
  'Crafted Tours, Georgian Hearts.',
  'Chase Sunsets over Kakheti.',
  'Feel Georgia, Fully.',
  'Adventure Poured by Locals.',
  'Journey Deeper into Georgia.'
];

export function BrandVoice() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 rounded-3xl bg-white/80 p-10 shadow-glass lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sand-600">Brand Voice</p>
            <h2 className="text-3xl font-semibold text-slate-900">Friendly, Expert, Modern, Proudly Local</h2>
          </div>
          <p className="text-sm text-slate-600">
            Writing stays short, clear, and emotional. Every line should feel like a warm Georgian welcome paired with
            cutting-edge travel expertise.
          </p>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-600">Core Values</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-700">
              {values.map((value) => (
                <li key={value} className="rounded-full bg-sand-50 px-4 py-2">
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-600">Writing Rules</h3>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700">
              {rules.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-sand-600">Tagline Ideas</h3>
          <ul className="grid gap-3 text-sm text-slate-700">
            {taglines.map((tagline) => (
              <li key={tagline} className="rounded-2xl bg-sand-50 px-4 py-3">
                {tagline}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
