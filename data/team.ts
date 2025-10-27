export type TeamMember = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: 'Nino K.',
    role: 'Founder & Experience Curator',
    quote: '“We plan every itinerary like a supra toast—personal, heartfelt, unforgettable.”',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Levan M.',
    role: 'Lead Mountain Guide',
    quote: '“The Caucasus trails are stories in motion. I tailor each day to your heartbeat.”',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Mariam T.',
    role: 'Sommelier & Wine Host',
    quote: '“From qvevri to glass, I match every traveler with a vintage they’ll remember forever.”',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Giorgi L.',
    role: 'AI Product Lead',
    quote: '“Our assistant listens first, then crafts tours that feel hand-written for you.”',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
  }
];
