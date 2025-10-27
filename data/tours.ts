export type Tour = {
  slug: string;
  title: string;
  region: string;
  theme: string;
  duration: string;
  budget: 'Budget' | 'Mid-range' | 'Luxury';
  highlights: string[];
  priceRange: string;
  heroImage: string;
  itinerary: { day: string; summary: string }[];
  testimonial: { name: string; quote: string; location: string };
};

export const tours: Tour[] = [
  {
    slug: 'tbilisi-toasts-and-trails',
    title: 'Tbilisi Toasts & Trails',
    region: 'Tbilisi',
    theme: 'Culture',
    duration: '4 days',
    budget: 'Mid-range',
    highlights: ['Sulfur baths & wine bars', 'Mtskheta UNESCO trip', 'Urban art crawl'],
    priceRange: '$890 - $1,150 pp',
    heroImage: 'https://images.unsplash.com/photo-1548588684-d416bd6b7c7b?auto=format&fit=crop&w=1400&q=80',
    itinerary: [
      { day: 'Day 1', summary: 'Old Town walk, sulfur bath ritual, welcome supra with live polyphony.' },
      { day: 'Day 2', summary: 'Street art and design tour, craft market, Tbilisi nightlife concierge.' },
      { day: 'Day 3', summary: 'Day trip to Mtskheta & Jvari, qvevri tasting, sunset at Mtatsminda.' },
      { day: 'Day 4', summary: 'AI-personalized free day suggestions, airport transfer.' }
    ],
    testimonial: {
      name: 'Elena P.',
      quote: 'Our AI host nailed every request—from speakeasies to heritage tours. Felt like Tbilisi was ours.',
      location: 'Barcelona'
    }
  },
  {
    slug: 'kakheti-wine-odyssey',
    title: 'Kakheti Wine Odyssey',
    region: 'Kakheti',
    theme: 'Wine',
    duration: '5 days',
    budget: 'Luxury',
    highlights: ['Boutique vineyards', 'Qvevri masterclass', 'Private chateau stays'],
    priceRange: '$1,650 - $2,200 pp',
    heroImage: 'https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=1400&q=80',
    itinerary: [
      { day: 'Day 1', summary: 'Scenic drive to Telavi, sunset tasting in centuries-old cellar.' },
      { day: 'Day 2', summary: 'Qvevri winemaking workshop, farmhouse lunch, bio-vineyard tour.' },
      { day: 'Day 3', summary: 'Sighnaghi arts walk, private cooking class, spa evening.' },
      { day: 'Day 4', summary: 'Helicopter hop over Alazani Valley, mountain picnic, jazz night.' },
      { day: 'Day 5', summary: 'AI-personalized add-ons, return via Bodbe monastery.' }
    ],
    testimonial: {
      name: 'Marcus & Lea',
      quote: 'The vineyard hosts, the helicopter surprise, the qvevri stories—we lived Georgian wine culture.',
      location: 'Zurich'
    }
  },
  {
    slug: 'kazbegi-alpine-quest',
    title: 'Kazbegi Alpine Quest',
    region: 'Kazbegi',
    theme: 'Adventure',
    duration: '6 days',
    budget: 'Mid-range',
    highlights: ['4x4 to Juta', 'Glacier hike', 'Local mountain guides'],
    priceRange: '$1,250 - $1,600 pp',
    heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    itinerary: [
      { day: 'Day 1', summary: 'Drive the Georgian Military Highway, khinkali workshop, stargazing.' },
      { day: 'Day 2', summary: 'Gergeti sunrise hike, 4x4 to Truso Valley, picnic with shepherds.' },
      { day: 'Day 3', summary: 'Chaukhi massif trek, mountain spa evening.' },
      { day: 'Day 4', summary: 'Paragliding add-on, visit Dariali gorge, farm-to-table dinner.' },
      { day: 'Day 5', summary: 'Juta alpine lakes hike with local guide.' },
      { day: 'Day 6', summary: 'Wrap-up brunch, optional Tbilisi nightlife finale.' }
    ],
    testimonial: {
      name: 'Noah G.',
      quote: 'The AI route balanced thrill and rest—our guide Tamuna was a legend in the mountains.',
      location: 'Sydney'
    }
  },
  {
    slug: 'svaneti-heritage-expedition',
    title: 'Svaneti Heritage Expedition',
    region: 'Svaneti',
    theme: 'Culture',
    duration: '8 days',
    budget: 'Mid-range',
    highlights: ['UNESCO tower villages', 'Local polyphony nights', 'Guesthouse hospitality'],
    priceRange: '$1,480 - $1,920 pp',
    heroImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80',
    itinerary: [
      { day: 'Day 1', summary: 'Fly to Mestia, welcome supra with your host family.' },
      { day: 'Day 2', summary: 'Ushguli jeep tour, UNESCO village exploration.' },
      { day: 'Day 3', summary: 'Shkhara glacier hike, cooking class.' },
      { day: 'Day 4', summary: 'Museum of History, parapets photography walk.' },
      { day: 'Day 5', summary: 'Hike to Koruldi Lakes, picnic with views.' },
      { day: 'Day 6', summary: 'Adishi valley trek, meet local artisans.' },
      { day: 'Day 7', summary: 'Free day with AI suggestions for hidden villages.' },
      { day: 'Day 8', summary: 'Return to Tbilisi via Kutaisi wine stop.' }
    ],
    testimonial: {
      name: 'Mira T.',
      quote: 'Folk songs under the stars, hikes with stories, and guesthouses that felt like family.',
      location: 'Tallinn'
    }
  }
];
