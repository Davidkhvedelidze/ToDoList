import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-pattern parallax-bg text-white">
      <div className="hero-overlay">
        <div className="section-shell flex min-h-[70vh] flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
              Craft Your Georgian Escape
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Craft Your Georgian Escape
            </h1>
            <p className="text-lg text-sand-100 md:text-xl">
              Blend Tbilisi nights, Kakheti vineyards, and alpine air with a tap. Our AI travel designer listens, then tailors every toast, trail, and city light to you.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tours"
                className="rounded-full bg-sand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sand-400"
              >
                Start Your AI-Crafted Tour
              </Link>
              <Link
                href="#ai-chat"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Chat with the AI Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
