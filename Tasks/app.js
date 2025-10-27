const destinationData = [
  {
    name: 'Tbilisi',
    description: 'Sultry rooftops, sulfur baths, and night markets under fairy lights.',
    image:
      'https://images.unsplash.com/photo-1505842465776-3acb7acf5afc?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kazbegi',
    description: 'Glacier hikes, Holy Trinity vistas, and stargazing in alpine lodges.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Kakheti',
    description: 'Qvevri wine rituals, rolling vineyards, and supra feasts at sunset.',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Gudauri',
    description: 'Powder slopes, heli-ski dreams, and après-ski khinkali sessions.',
    image:
      'https://images.unsplash.com/photo-1528840138-231dbad7fcd0?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Batumi',
    description: 'Black Sea sunsets, art deco boulevards, and botanical wanderings.',
    image:
      'https://images.unsplash.com/photo-1578926501400-8329a1dce1a1?auto=format&fit=crop&w=900&q=80',
  },
];

const tourData = [
  {
    title: 'City Lights & Wine Nights',
    region: 'Tbilisi',
    theme: 'Culture',
    duration: '4 Days',
    budget: 'Mid-range',
    highlights: ['Tbilisi old town tour', 'Mtskheta UNESCO visit', 'Kakheti wine masterclass'],
    priceRange: '$950 - $1,250',
    image:
      'https://images.unsplash.com/photo-1526481280695-3c46973ed05b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kazbegi Alpine Adventure',
    region: 'Kazbegi',
    theme: 'Nature',
    duration: '6 Days',
    budget: 'Mid-range',
    highlights: ['Gergeti glacier trek', '4x4 to Juta Valley', 'Local mountain guesthouses'],
    priceRange: '$1,450 - $1,800',
    image:
      'https://images.unsplash.com/photo-1459666644539-a9755287d6b0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Boutique Kakheti Wine Escape',
    region: 'Kakheti',
    theme: 'Wine',
    duration: '3 Days',
    budget: 'Luxury',
    highlights: ['Private cellar tastings', 'Qvevri workshop', 'Wine resort spa evening'],
    priceRange: '$1,200 - $1,600',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Gudauri Powder Quest',
    region: 'Gudauri',
    theme: 'Adventure',
    duration: '5 Days',
    budget: 'Luxury',
    highlights: ['Heli-ski add-ons', 'Local guide-led freeride days', 'Khinkali après evenings'],
    priceRange: '$1,750 - $2,200',
    image:
      'https://images.unsplash.com/photo-1516569422535-d6e0bbe1b0d5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Black Sea & Highlands Combo',
    region: 'Batumi',
    theme: 'Balanced',
    duration: '7 Days',
    budget: 'Mid-range',
    highlights: ['Batumi art walk', 'Adjara wine tasting', 'Svaneti tower villages'],
    priceRange: '$1,650 - $2,100',
    image:
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Svaneti Trekking Odyssey',
    region: 'Svaneti',
    theme: 'Nature',
    duration: '8 Days',
    budget: 'Budget',
    highlights: ['Ushguli UNESCO hike', 'Guesthouse dinners', 'Local polyphonic evenings'],
    priceRange: '$1,150 - $1,450',
    image:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
  },
];

const blogPosts = [
  {
    title: 'Ultimate Guide to Planning a Georgia Private Tour',
    tag: 'Private Tours',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1534137667199-675a46e143f3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: '7-Day Custom Caucasus Itinerary for Adventure Seekers',
    tag: 'Adventure',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Tbilisi Day Trips: Wine, History, and Hidden Gems',
    tag: 'City Escapes',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Luxury Wine Tours in Kakheti: Insider Picks',
    tag: 'Wine',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Family-Friendly Georgia: Multi-Generational Tour Ideas',
    tag: 'Family',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Winter in Gudauri: Custom Ski Trips for Every Budget',
    tag: 'Winter',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: "Food Lover's Route: Culinary Tours Across Georgia",
    tag: 'Food',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Romantic Escapes: Honeymoon Itineraries in Georgia',
    tag: 'Romance',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Off-the-Beaten-Path: Svaneti and Tusheti Trekking Planner',
    tag: 'Trekking',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1523419409543-0c1df022bdd7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Sustainable Travel in Georgia: Responsible Tour Options',
    tag: 'Sustainability',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
];

const blogIdeaList = [
  'Ultimate Guide to Planning a Georgia Private Tour',
  '7-Day Custom Caucasus Itinerary for Adventure Seekers',
  'Tbilisi Day Trips: Wine, History, and Hidden Gems',
  'Luxury Wine Tours in Kakheti: Insider Picks',
  'Family-Friendly Georgia: Multi-Generational Tour Ideas',
  'Winter in Gudauri: Custom Ski Trips for Every Budget',
  "Food Lover's Route: Culinary Tours Across Georgia",
  'Romantic Escapes: Honeymoon Itineraries in Georgia',
  'Off-the-Beaten-Path: Svaneti and Tusheti Trekking Planner',
  'Sustainable Travel in Georgia: Responsible Tour Options',
];

const keywordClusters = [
  'Georgia Private Tours & Chauffeured Experiences',
  'Custom Caucasus Itineraries & Tailor-Made Journeys',
  'Tbilisi Day Trips & Urban Adventures',
  'Georgian Wine Tours & Culinary Experiences',
  'Adventure Tours in Kazbegi, Gudauri, and Svaneti',
];

const metaItems = [
  {
    title: 'Georgia Private Tours | Tailor-Made Caucasus Journeys',
    description:
      'Design a private tour through Georgia with local experts, luxury stays, and AI-crafted itineraries.',
  },
  {
    title: 'Custom Caucasus Itineraries | Plan with Local AI Guides',
    description:
      'Mix Georgia, Armenia, and Azerbaijan in one personalized itinerary built by our AI travel assistant.',
  },
  {
    title: 'Tbilisi Day Trips | Wine, Culture & Mountain Escapes',
    description:
      'Book curated day trips from Tbilisi with private drivers, vineyard tastings, and UNESCO sites.',
  },
  {
    title: 'Georgian Wine Tours | Boutique Kakheti Tastings',
    description:
      'Sip through Kakheti with private cellar visits, qvevri workshops, and gourmet pairings.',
  },
  {
    title: 'Georgia Adventure Tours | Kazbegi & Gudauri Experts',
    description:
      'Customize your mountain adventure with guided hikes, 4x4 journeys, and heli-ski add-ons.',
  },
];

const renderDestinations = () => {
  const container = document.querySelector('#destinations .grid');
  if (!container) return;

  destinationData.forEach((destination) => {
    const card = document.createElement('article');
    card.className = 'destination-card';
    card.innerHTML = `
      <div class="rounded-[1.7rem] bg-white/40 p-1">
        <img src="${destination.image}" alt="${destination.name}" loading="lazy" />
        <div class="card-body">
          <p class="badge">${destination.name}</p>
          <p class="mt-3 text-sm text-slate-600">${destination.description}</p>
          <a class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sand-600 hover:gap-3 transition" href="#tours">Explore Tours →</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
};

const buildFilterOptions = () => {
  const regionSelect = document.getElementById('regionFilter');
  const themeSelect = document.getElementById('themeFilter');
  const durationSelect = document.getElementById('durationFilter');
  const budgetSelect = document.getElementById('budgetFilter');

  const regions = new Set(['All', ...tourData.map((tour) => tour.region)]);
  const themes = new Set(['All', ...tourData.map((tour) => tour.theme)]);
  const durations = new Set(['All', ...tourData.map((tour) => tour.duration)]);
  const budgets = new Set(['All', ...tourData.map((tour) => tour.budget)]);

  const populate = (select, values) => {
    select.innerHTML = '';
    values.forEach((value) => {
      const option = document.createElement('option');
      option.value = value.toLowerCase();
      option.textContent = value;
      select.appendChild(option);
    });
  };

  populate(regionSelect, regions);
  populate(themeSelect, themes);
  populate(durationSelect, durations);
  populate(budgetSelect, budgets);
};

const renderTours = () => {
  const container = document.querySelector('.tour-cards');
  if (!container) return;

  const region = document.getElementById('regionFilter').value;
  const theme = document.getElementById('themeFilter').value;
  const duration = document.getElementById('durationFilter').value;
  const budget = document.getElementById('budgetFilter').value;

  const matches = tourData.filter((tour) => {
    const matchRegion = region === 'all' || tour.region.toLowerCase() === region;
    const matchTheme = theme === 'all' || tour.theme.toLowerCase() === theme;
    const matchDuration = duration === 'all' || tour.duration.toLowerCase() === duration;
    const matchBudget = budget === 'all' || tour.budget.toLowerCase() === budget;
    return matchRegion && matchTheme && matchDuration && matchBudget;
  });

  container.innerHTML = '';

  matches.forEach((tour) => {
    const card = document.createElement('article');
    card.className = 'tour-card';
    card.innerHTML = `
      <div>
        <img src="${tour.image}" alt="${tour.title}" loading="lazy" />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge">${tour.region}</span>
          <span class="badge">${tour.theme}</span>
          <span class="badge">${tour.duration}</span>
          <span class="badge">${tour.budget}</span>
        </div>
        <h3 class="text-xl font-semibold text-slate-900">${tour.title}</h3>
        <ul class="list-disc space-y-2 pl-5 text-sm text-slate-600">
          ${tour.highlights.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <div class="mt-auto flex items-center justify-between">
          <p class="text-sm font-semibold text-sand-600">${tour.priceRange}</p>
          <button class="rounded-full bg-sand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sand-600">View Details</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (!matches.length) {
    container.innerHTML = '<p class="text-sm text-slate-600">No tours match your filters yet. Try another combination or ask our AI guide.</p>';
  }
};

const renderBlogGrid = () => {
  const grid = document.querySelector('.blog-grid');
  if (!grid) return;

  blogPosts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'overflow-hidden rounded-3xl bg-sand-50/80 shadow-lg backdrop-blur';
    card.innerHTML = `
      <img class="h-48 w-full object-cover" src="${post.image}" alt="${post.title}" loading="lazy" />
      <div class="p-6">
        <div class="flex items-center justify-between text-xs text-sand-600">
          <span class="font-semibold uppercase tracking-[0.2em]">${post.tag}</span>
          <span>${post.readTime}</span>
        </div>
        <h3 class="mt-3 text-lg font-semibold text-slate-900">${post.title}</h3>
        <button class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sand-600 transition hover:gap-3">Read Story →</button>
      </div>
    `;
    grid.appendChild(card);
  });
};

const renderSeoLists = () => {
  const blogList = document.getElementById('blogIdeas');
  const keywordList = document.getElementById('keywordClusters');
  const metaList = document.getElementById('metaInfo');

  if (blogList) {
    blogIdeaList.forEach((idea) => {
      const item = document.createElement('li');
      item.textContent = idea;
      blogList.appendChild(item);
    });
  }

  if (keywordList) {
    keywordClusters.forEach((keyword) => {
      const item = document.createElement('li');
      item.textContent = keyword;
      keywordList.appendChild(item);
    });
  }

  if (metaList) {
    metaItems.forEach((meta) => {
      const item = document.createElement('li');
      item.innerHTML = `<span class="font-semibold text-slate-800">${meta.title}</span><br /><span class="text-slate-600">${meta.description}</span>`;
      metaList.appendChild(item);
    });
  }
};

const bindFilterEvents = () => {
  ['regionFilter', 'themeFilter', 'durationFilter', 'budgetFilter'].forEach((id) => {
    const select = document.getElementById(id);
    select.addEventListener('change', renderTours);
  });
};

const setupScrollButton = () => {
  const button = document.getElementById('scrollToDestinations');
  const destinationSection = document.getElementById('destinations');
  if (!button || !destinationSection) return;

  button.addEventListener('click', () => {
    destinationSection.scrollIntoView({ behavior: 'smooth' });
  });
};

const chatWidget = document.getElementById('chatWidget');
const openChatButton = document.getElementById('openChat');
const closeChatButton = document.getElementById('closeChat');
const footerChatButton = document.getElementById('footerChatButton');

const toggleChat = (open) => {
  if (!chatWidget) return;
  chatWidget.classList.toggle('hidden', !open);
};

const setupChatTriggers = () => {
  if (openChatButton) {
    openChatButton.addEventListener('click', () => toggleChat(true));
  }

  if (footerChatButton) {
    footerChatButton.addEventListener('click', () => toggleChat(true));
  }

  if (closeChatButton) {
    closeChatButton.addEventListener('click', () => toggleChat(false));
  }

  const floatingIcon = document.createElement('button');
  floatingIcon.className = 'floating-icon';
  floatingIcon.innerHTML = 'AI';
  floatingIcon.setAttribute('aria-label', 'Open AI chat');
  floatingIcon.addEventListener('click', () => toggleChat(true));
  document.body.appendChild(floatingIcon);
};

const init = () => {
  renderDestinations();
  buildFilterOptions();
  renderTours();
  bindFilterEvents();
  renderBlogGrid();
  renderSeoLists();
  setupScrollButton();
  setupChatTriggers();
};

window.addEventListener('DOMContentLoaded', init);
