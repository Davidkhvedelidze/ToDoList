export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'georgia-private-tour-guide',
    title: 'Ultimate Guide to Planning a Georgia Private Tour',
    excerpt: 'Routes, regions, and AI tips to tailor your private journey with chauffeurs and local concierges.',
    category: 'Planning',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'custom-caucasus-adventure',
    title: '7-Day Custom Caucasus Itinerary for Adventure Seekers',
    excerpt: 'Kazbegi ridgelines, Gudauri ski runs, and Svaneti hikes designed for thrill and culture.',
    category: 'Adventure',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'tbilisi-day-trips',
    title: 'Tbilisi Day Trips: Wine, History, and Hidden Gems',
    excerpt: 'From Uplistsikhe caves to Kakheti tastings, curate day escapes without leaving the capital.',
    category: 'City Guides',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1526481280695-3c469f1173da?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'luxury-wine-tours-kakheti',
    title: 'Luxury Wine Tours in Kakheti: Insider Picks',
    excerpt: 'Boutique estates, qvevri masters, and candlelit tastings curated with local sommeliers.',
    category: 'Wine',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=1200&q=80'
  }
];
