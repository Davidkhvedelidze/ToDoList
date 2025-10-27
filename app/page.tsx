import { HeroSection } from '@/components/HeroSection';
import { AITravelChatSection } from '@/components/AITravelChatSection';
import { TopDestinations } from '@/components/TopDestinations';
import { TourFilters } from '@/components/TourFilters';
import { BlogShowcase } from '@/components/BlogShowcase';
import { AboutTeam } from '@/components/AboutTeam';
import { SEOPlan } from '@/components/SEOPlan';
import { SocialCaptions } from '@/components/SocialCaptions';
import { BrandVoice } from '@/components/BrandVoice';
import { AdminDashboardPreview } from '@/components/AdminDashboardPreview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandVoice />
      <AITravelChatSection />
      <TopDestinations />
      <TourFilters />
      <BlogShowcase />
      <SEOPlan />
      <SocialCaptions />
      <AboutTeam />
      <AdminDashboardPreview />
    </>
  );
}
