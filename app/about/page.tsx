import { BrandVoice } from '@/components/BrandVoice';
import { AboutTeam } from '@/components/AboutTeam';

export const metadata = {
  title: 'About | [Company Name]'
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="section-shell space-y-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-sand-600">About</p>
        <h1 className="text-4xl font-semibold text-slate-900">Crafting AI-Powered Georgian Journeys</h1>
        <p className="max-w-3xl text-sm text-slate-600">
          We blend local experts, storytellers, and technologists to create a personal, smart, and authentically Georgian travel
          brand. Explore our brand voice, values, and the team bringing the Caucasus to life.
        </p>
      </section>
      <BrandVoice />
      <AboutTeam />
    </div>
  );
}
