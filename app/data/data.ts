export const museums = [
  {
    id: 1,
    name: "Louvre Museum",
    price: "€120",
    img: "/assets/66.jpg",
    extraImages: ["/assets/63.jpg", "/assets/63.jpg", "/assets/63.jpg"],
     specialRoutes: [
    "/museums/louvre/after-hours",
    "/museums/louvre/masterpieces",
  ],
    description:
      "Explore the world’s largest art museum, home to the Mona Lisa and countless masterpieces from antiquity to the Renaissance.",
  },
  {
    id: 2,
    name: "Orsay Museum",
    price: "€100",
    img: "/assets/116.jpg",
    extraImages: ["/assets/117.jpg", "/assets/118.jpg", "/assets/119.jpg"],
    description:
      "Admire stunning Impressionist art by Monet, Van Gogh, and Degas in this converted Beaux-Arts railway station.",
    details: {
      title: "Private Visit of Orsay Museum",
      intro:
        "Experience Paris through the eyes of its most famous artists. The Musée d’Orsay is one of those places that changes the way you see art.",
      fullDescription: [
        "Once a Beaux-Arts railway station, today it’s home to the world’s most celebrated collection of Impressionist and Post-Impressionist masterpieces.",
        "Inside, sunlight floods through the glass roof, glazing over the works of Monet, Renoir, Degas, Cézanne, and Van Gogh — artists who redefined beauty and captured modern life with bold color and emotion.",
        "Your private guide connects the dots between their lives, their friendships, and the Paris they painted. Between galleries, pause to admire the building itself, a masterpiece in its own right.",
        "End your visit with a Champagne moment on the museum’s terrace, overlooking the Seine and the Louvre — a perfect finish to an experience filled with color, culture, and story.",
      ],
      highlights: [
        "• Private art historian",
        "• Skip-the-line access",
        "• Hotel pick-up to the museum",
        "• Champagne moment on the terrace",
      ],
      duration: "2.5 hours",
      groupSize: "6 guests maximum (more on request)",
      cost: "From €750 for two guests",
    },
  },
  {
    id: 3,
    name: "Opera Garnier",
    price: "€90",
    img: "/assets/124.jpg",
    extraImages: ["/assets/87.jpg", "/assets/125.jpg", "/assets/126.jpg"],
    description:
      "Step into opulence and history at Paris’s grand opera house — an architectural masterpiece of the 19th century.",
    details: {
      title: "Private Visit of Opéra Garnier",
      intro:
        "For design lovers, architecture enthusiasts, and anyone who loves a touch of theatre.",
      fullDescription: [
        "The Palais Garnier is one of the most stunning buildings in Paris — a true symbol of 19th-century glamour and architectural mastery.",
        "Designed by Charles Garnier, it’s a perfect harmony of marble, gold leaf, and crystal. Once inside, the grand staircase itself feels like a performance.",
        "Your private guide leads you through the ornate foyers, lavish auditorium, and private boxes once reserved for Paris’s elite. You’ll hear stories of the Belle Époque and the legend that inspired *The Phantom of the Opera*.",
        "Look up to admire Marc Chagall’s fresco — a colorful counterpoint to the old-world glamour. It’s a perfect reflection of Paris: timeless yet always reinventing.",
        "For a truly special experience, opt for a live performance, with Champagne service and private transfers.",
      ],
      highlights: [
        "• Private guided visit",
        "• Skip-the-line access",
        "• Chauffeur pickup from your hotel to Opera Garnier",
        "• Performance reservation upon request",
        "• Lunch or dinner at a nearby restaurant to conclude the visit",
      ],
      duration: "2.5 hours",
      groupSize: "6 guests maximum",
      cost: "From €890 for two guests",
    },
  },
  {
    id: 4,
    name: "Carnavalet Museum",
    price: "€80",
    img: "/assets/131.jpg",
    extraImages: ["/assets/133.jpg", "/assets/132.jpg", "/assets/134.jpg"],
    description:
      "Journey through the history of Paris from its origins to the present in this charming and beautifully restored mansion.",
    details: {
      title: "Private Visit of Musée Carnavalet",
      intro:
        "For anyone who loves Paris and wants to understand how it became the city it is today.",
      fullDescription: [
        "The Musée Carnavalet, tucked inside the Marais, tells the full story of Paris from its earliest days to the modern era.",
        "With your private guide, you’ll walk through centuries in a single afternoon — from the salons of the aristocracy to the chaos of the Revolution, and the rise of art and fashion.",
        "See portraits of revolutionaries, furniture from royal homes, and signs from old Parisian shops. Hear echoes of freedom from WWII declared by General Charles de Gaulle.",
        "After your visit, stroll through the Marais with your guide, where medieval streets meet designer boutiques — and enjoy lunch in one of its cozy cafés.",
      ],
      highlights: [
        "• Private historian guide",
        "• Skip-the-line access",
        "• Chauffeur pickup from your hotel to the museum",
        "• Lunch in the Marais district",
      ],
      duration: "2.5 hours",
      groupSize: "6 guests maximum",
      cost: "From €890 for two guests",
    },
  },
  {
    id: 5,
    name: "Versailles Palace",
    price: "€150",
    img: "/assets/112.jpg",
    extraImages: ["/assets/113.jpg", "/assets/115.jpg", "/assets/91.jpg"],
    description:
      "Walk in the footsteps of French royalty in the Hall of Mirrors and gardens of this UNESCO World Heritage site.",
    details: {
      title: "Private Visit of Versailles Palace",
      intro:
        "For guests who want to step into France’s royal past and see how grandeur was truly lived.",
      fullDescription: [
        "Versailles is not just a palace — it’s a statement of power, art, and ambition. Built for Louis XIV, the 'Sun King,' this magnificent estate redefined royal living.",
        "With your private historian, walk through the Hall of Mirrors, the King’s and Queen’s Apartments, and secret corridors most visitors never see.",
        "Hear the stories of court life — how etiquette ruled every move, how alliances were sealed with a dance, and how Versailles became a model of royal power across Europe.",
        "Step outside to marvel at the vast gardens, filled with fountains, sculptures, and geometric perfection, designed to show that the king ruled even nature itself.",
        "Enhance your day with a carriage ride through the gardens or a private visit to Marie Antoinette’s Petit Trianon.",
      ],
      highlights: [
        "• Private historian guide",
        "• Skip-the-line entry",
        "• Private roundtrip chauffeur",
        "• Lunch at Ore – restaurant by Michelin chef Alain Ducasse",
        "• Optional gourmet picnic during summer season",
      ],
      duration: "5 hours (half-day) or 8 hours (full-day, on request)",
      groupSize: "6 guests maximum",
      cost: "From €1,450 for two guests",
    },
  },
];

export const ParisExperienceSections = [
   {
  id: 1,
  name: "Private Visit of Montmartre with Wine Tasting",
  price: "€576",
  img: "/assets/127.jpg",
  extraImages: ["/assets/128.jpg", "/assets/103.jpg", "/assets/129.jpg"],
  description:
    "Discover the soul of Montmartre — its art, vineyards, and charm — on a private guided walk ending with a refined wine tasting that celebrates Paris’ poetic hilltop village.",
  details: {
    title: "Private Visit of Montmartre with Wine Tasting",
    intro:
      "Art, heritage, and the quiet poetry of wine. Step into the storybook streets of Montmartre — Paris’ hilltop village where art, history, and soul intertwine. This private walking journey reveals the neighbourhood’s bohemian charm and vineyard legacy, culminating in a curated wine tasting that celebrates the hill’s enduring spirit of indulgence and artistry.",
    fullDescription: [
      "Overview — Duration: 3 hours. Meeting Point: Agreed meeting point or hotel pick-up (upon request). Availability: Year-round (ideal from spring to autumn). Cost: €576.",
      "1. Welcome & Ascent — Your experience begins at Église Saint-Jean de Montmartre, an Art Nouveau cathedral. As you ascend the hill, your guide brings to life the tales of artists and dreamers who made Montmartre their muse — from Picasso and Modigliani to Renoir.",
      "2. Artistic Landmarks — Explore Le Bateau-Lavoir, Le Passe-Muraille, and Dalida Square, each revealing a unique layer of the hill’s creative past and its influence on generations of artists.",
      "3. Clos Montmartre Vineyard — Pause at Clos Montmartre, the city’s last active vineyard, hidden behind cobblestone lanes and ivy-draped walls. Learn about its centuries-old winemaking tradition and the limited cuvée that embodies Montmartre’s independent spirit.",
      "4. Rue de l’Abreuvoir & Place du Tertre — Wander along Rue de l’Abreuvoir, one of Paris’s most photographed streets, to reach Place du Tertre, where artists still paint en plein air. The square’s timeless atmosphere captures the essence of Montmartre’s living creativity.",
      "5. Sacré-Cœur & The Finale — Arrive at the summit to enjoy panoramic views over Paris. Conclude with a private cheese and wine tasting led by our sommelier — four elegant French wines paired with light gourmet bites and insights connecting terroir to tale, art to earth. Optional upgrades available for personalized wine selections and pairings."
    ],
    highlights: [
      "• Private, expert guide fluent in art history and local heritage",
      "• Sommelier-led tasting of 4 curated wines with refined pairings",
      "• Visit to Montmartre’s last vineyard, Clos Montmartre",
      "• Scenic walk through Rue de l’Abreuvoir and Place du Tertre",
      "• Optional chauffeur service for hotel pick-up and drop-off"
    ],
    duration: "3 hours",
    groupSize: "Private — up to 6 guests (custom groups available on request)",
    cost: "€576 (base price)",
    meetingPoint: "Agreed meeting point or hotel pick-up (upon request)",
    availability: "Year-round (best from spring to autumn)",
    inclusions: [
      "Private, expert guide",
      "Sommelier-led wine tasting of 4 wines with light gourmet bites",
      "Guided walking tour through Montmartre’s artistic landmarks",
      "Complimentary bottled water"
    ],
    optionalAddOns: [
      "Private chauffeur service (roundtrip)",
      "Upgraded wine selection & gourmet pairings",
      "Extended full-day itinerary with Louvre & Seine cruise"
    ]
  }
},
  {
    id: 2,
    name: "Lunch/Dinner Seine River Boat Cruise",
    price: "€120",
    img: "/assets/57.jpg",
    description:
      "Glide along the Seine River and enjoy a delicious lunch or dinner as the city of Paris sparkles around you. This relaxing cruise combines great food, live music, and unforgettable views of the Eiffel Tower and other landmarks.",
  },
  {
    id: 3,
    name: "Paris Full Day Magic: Montmartre, Nôtre Dame, Louvre, Seine River Boat Cruise",
    price: "€90",
    img: "/assets/58.jpg",
    description:
      "Spend a full day discovering the magic of Paris — from the bohemian charm of Montmartre to the beauty of Nôtre Dame and the art-filled halls of the Louvre. End your day with a relaxing Seine River cruise as the city lights come alive.",
  },

];

export const shoppings = [
  {
    id: 1,
    name: "Shopping at the Historic La Samaritaine",
    price: "€120",
    img: "/assets/135.jpg",
    description:
      "Step inside one of Paris’s most iconic department stores, blending timeless architecture with the latest in luxury shopping and dining.",
    href: "/shopping/la-samaritaine",
  },
  {
    id: 2,
    name: "Shopping at Le Marais District",
    price: "€100",
    img: "/assets/75.jpg",
    description:
      "Wander through cobblestone streets lined with trendy boutiques, vintage stores, and Parisian cafés in the heart of Le Marais.",
    href: "/shopping/le-marais",
  },
  {
    id: 3,
    name: "Antique Shopping at Puces de Saint-Ouen",
    price: "€90",
    img: "/assets/74.jpg",
    description:
      "Discover Paris’s famous flea market — a treasure trove of antiques, art, and unique finds for those who love a bit of history.",
    href: "/shopping/puces-de-saint-ouen",
  },
  {
    id: 4,
    name: "Shopping at La Vallée Village",
    price: "€80",
    img: "/assets/77.jpg",
    description:
      "Enjoy open-air luxury shopping with exclusive designer discounts just outside Paris — perfect for a relaxed, stylish day out.",
    href: "/shopping/la-vallee-village",
  },
];

export const wines = [
  {
    id: 1,
    name: "Private Parisian Wine Tasting with a Sommelier",
    price: "€120",
    img: "/assets/104.jpg",
    description:
      "Enjoy an intimate wine-tasting session led by an expert sommelier, where every sip tells a story of France’s finest vineyards.",
  },
  {
    id: 2,
    name: "Full-Day Champagne Region Visit",
    price: "€100",
    img: "/assets/79.jpg",
    description:
      "Escape to the legendary Champagne countryside for a day of cellar tours, vineyard walks, and bubbly indulgence.",
  },
];