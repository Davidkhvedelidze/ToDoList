export type Destination = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: 'tbilisi',
    name: 'Tbilisi',
    description: 'Night markets, rooftop wine bars, sulfur baths, and design hotels on every hillside.',
    image: 'https://images.unsplash.com/photo-1505842465776-3acb7acf5afc?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'kazbegi',
    name: 'Kazbegi',
    description: 'Snow-dusted peaks, Gergeti Trinity vistas, and alpine picnics with local guides.',
    image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'kakheti',
    name: 'Kakheti',
    description: 'Qvevri cellars, amber wine tastings, and boutique chateaus at sunset.',
    image: 'https://images.unsplash.com/photo-1524593689594-aa3b0f04250d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'gudauri',
    name: 'Gudauri',
    description: 'Heli-ski thrills, spa lodges, and warm supra feasts after snowy adventures.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'batumi',
    name: 'Batumi',
    description: 'Black Sea sunsets, botanical gardens, and Art Deco nights on the boulevard.',
    image: 'https://images.unsplash.com/photo-1548783307-f63adc987966?auto=format&fit=crop&w=1200&q=80'
  }
];
