import Link from 'next/link';

const quickLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Sustainability', href: '#' }
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: '📸' },
  { label: 'Facebook', href: 'https://www.facebook.com', icon: '📘' },
  { label: 'YouTube', href: 'https://www.youtube.com', icon: '▶️' }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="section-shell grid gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-sand-600">[Company Name]</p>
          <p className="text-sm text-slate-600">
            Crafting personal, intelligent, and deeply local adventures across Georgia with AI precision and warm hospitality.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-800">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-sand-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-800">Top Experiences</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Kakheti Wine Immersion</li>
            <li>Kazbegi Alpine Adventure</li>
            <li>Tbilisi Nightlife Stories</li>
            <li>Svaneti Heritage Trail</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-slate-800">Follow Our Journey</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="flex items-center gap-2 hover:text-sand-600" target="_blank" rel="noreferrer">
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white/80 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} [Company Name]. Crafted with love in Georgia.
      </div>
    </footer>
  );
}
