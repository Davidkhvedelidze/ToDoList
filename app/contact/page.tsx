export const metadata = {
  title: 'Contact | [Company Name]'
};

export default function ContactPage() {
  return (
    <div className="section-shell space-y-10">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-sand-600">Contact</p>
        <h1 className="text-4xl font-semibold text-slate-900">Let’s Plan Your Georgian Story</h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Reach us via WhatsApp, phone, or AI chat. Share your travel dates, group size, preferred pace, and dream experiences.
          We’ll reply within a Georgian toast or two.
        </p>
      </header>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 rounded-3xl bg-white p-8 shadow-glass">
          <h2 className="text-2xl font-semibold text-slate-900">Talk to a Human Host</h2>
          <ul className="space-y-4 text-sm text-slate-700">
            <li>
              <strong className="text-slate-900">Phone:</strong> <a href="tel:+995555123456">+995 555 123 456</a>
            </li>
            <li>
              <strong className="text-slate-900">Email:</strong> <a href="mailto:hello@company.ge">hello@company.ge</a>
            </li>
            <li>
              <strong className="text-slate-900">WhatsApp:</strong> <a href="https://wa.me/995555123456">Message us instantly</a>
            </li>
            <li>
              <strong className="text-slate-900">Office:</strong> 12 Erekle II St, Tbilisi, Georgia
            </li>
          </ul>
          <div className="rounded-2xl bg-sand-50 p-4 text-xs text-slate-600">
            We respond daily between 09:00–23:00 Georgian time. Need a faster answer? Launch the AI guide to get instant
            itineraries and save them for later.
          </div>
        </div>
        <div className="space-y-6 rounded-3xl bg-sand-100 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Quick Request</h2>
          <form className="space-y-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-sand-600">Name</label>
              <input className="mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-sand-600">Email</label>
              <input className="mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-sand-600">Preferred Dates</label>
              <input className="mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm" placeholder="e.g., 12-19 May" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-sand-600">Message</label>
              <textarea className="mt-1 w-full rounded-xl border border-sand-300 bg-white px-3 py-2 text-sm" rows={4} placeholder="Tell us about your ideal trip" />
            </div>
            <button className="w-full rounded-full bg-sand-500 px-4 py-3 text-sm font-semibold text-white">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
