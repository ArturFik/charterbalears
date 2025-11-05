const en = {
  meta: { label: "English", shortLabel: "EN" },
  common: {
    brand: "CharterBalears",
    phoneDisplay: "+34 (697) 726-944",
    phoneHref: "tel:+34697726944",
    emailDisplay: "charterbalears@gmail.com",
    emailHref: "mailto:charterbalears@gmail.com",
    whatsappHref: "https://wa.me/34697726944",
  },
  header: {
    nav: {
      home: "Home",
      tours: "Tours",
      yacht: "The Yacht",
      blog: "Blog",
      faq: "FAQ",
    },
    actions: { cta: "Charter Now" },
    language: { ariaLabel: "Select language" },
    navigationToggle: "Toggle navigation",
  },
  heroSlider: {
    phoneCta: "Call CharterBalears",
    slides: [
      {
        id: "southwest",
        tourId: 1,
        image: "/1.png",
        title: "Southwest Coast Tour",
        subtitle: "Luxury cruise through Mallorca's glamorous southwest coves",
        description:
          "Sail past Portals Vells, Cala Fornells and Sa Dragonera with time for swimming, snorkeling and sunset aperitifs.",
        price: "from €89 per guest",
        duration: "3 hours",
        capacity: "Up to 10 guests",
        buttonLabel: "Book Southwest Tour",
        buttonLink: "/tours/1",
      },
      {
        id: "landmarks",
        tourId: 2,
        image: "/Southeast/2CalaBlava/22.png",
        title: "Coastal Landmarks Tour",
        subtitle: "Experience Palma Cathedral and Mallorca's iconic bays",
        description:
          "Admire La Seu from the sea and swim the crystal waters of Cala Blava, Cala Vella and the picture-perfect Cala Pi.",
        price: "from €95 per guest",
        duration: "4 hours",
        capacity: "Up to 10 guests",
        buttonLabel: "Book Landmarks Tour",
        buttonLink: "/tours/2",
      },
      {
        id: "cabrera",
        tourId: 3,
        image: "/kabrera/111.png",
        title: "Cabrera National Park Expedition",
        subtitle: "Full-day escape to Mallorca's wild archipelago",
        description:
          "Reach the protected Cabrera islands, swim in cobalt coves and watch for dolphins on the open-water crossing.",
        price: "from €150 per guest",
        duration: "8 hours",
        capacity: "Up to 8 guests",
        buttonLabel: "Book Cabrera Expedition",
        buttonLink: "/tours/3",
      },
    ],
  },
  home: {
    about: {
      title: "Luxury Yacht Charter EDENROC in Mallorca",
      lead: "EDENROC is a 16-metre Azimut flybridge that blends Italian craftsmanship with contemporary engineering.",
      paragraphs: [
        "Three refined cabins, two elegant bathrooms and a bespoke galley welcome up to seven guests in complete comfort.",
        "Enjoy panoramic Balearic views from the flybridge or host an intimate celebration in the salon.",
        "Perfect for premium charters around Mallorca, Ibiza, Menorca and Formentera.",
      ],
      ctaLabel: "Explore EDENROC Yacht",
      ctaLink: "/yacht",
      ctaAria: "Explore EDENROC luxury yacht details",
      imageAlt:
        "Luxury yacht EDENROC interior with Italian design and premium amenities",
    },
    activities: {
      heading: "Exclusive Yacht Experiences in Mallorca",
      description:
        "Curated adventures and tailor-made moments for discerning travellers in the Balearic Islands.",
      cards: [
        {
          title: "Underwater Exploration & Snorkeling",
          description:
            "Glide through turquoise coves with powerful sea scooters and guided snorkeling sessions.",
        },
        {
          title: "Premium Sport Fishing",
          description:
            "Target bluefin tuna with tournament-grade gear and an expert crew on board.",
        },
        {
          title: "Private Yacht Events",
          description:
            "Host unforgettable celebrations with bespoke catering, mixology and live entertainment.",
        },
      ],
    },
    contact: {
      heading: "Begin Your Luxury Yacht Journey in Mallorca",
      description:
        "Contact our charter specialists to curate your bespoke experience aboard EDENROC.",
      primary: {
        label: "+34 (697) 726-944",
        ariaLabel: "Call yacht charter phone number",
        href: "tel:+34697726944",
      },
      secondary: {
        label: "Contact Yacht Charter",
        ariaLabel: "Send email to yacht charter",
        href: "mailto:charterbalears@gmail.com",
      },
    },
  },
  about: {
    hero: {
      title: "Motor Yacht EDENROC - Azimut 50",
      subtitle:
        "16-metre luxury flybridge yacht for premium experiences in the Balearic Islands",
    },
    specs: {
      title: "Technical Specifications",
      items: [
        { label: "Model", value: "Azimut 50" },
        { label: "Length", value: "15.54 m" },
        { label: "Beam", value: "4.55 m" },
        { label: "Hull material", value: "Fibreglass" },
        { label: "Engines", value: "2 × 715 hp" },
        { label: "Cruising speed", value: "26 knots" },
        { label: "Maximum speed", value: "32 knots" },
        { label: "Fuel capacity", value: "2200 L" },
        { label: "Fresh water capacity", value: "590 L" },
        { label: "Passenger capacity", value: "10 guests" },
        { label: "Cabins", value: "3" },
      ],
    },
    features: {
      title: "Premium Features & Amenities",
      items: [
        {
          title: "Spacious Flybridge",
          description:
            "Expansive upper deck with lounge seating and dining for panoramic Mediterranean sunsets.",
        },
        {
          title: "Luxury Cabins",
          description:
            "Three refined suites with premium bedding, climate control and mood lighting.",
        },
        {
          title: "Modern Galley",
          description:
            "Fully equipped galley with professional appliances for bespoke onboard dining.",
        },
      ],
    },
  },
  tours: {
    hero: {
      title: "Exclusive Sea Tours & Yacht Charter in Mallorca",
      subtitle: "Find your perfect luxury journey aboard the EDENROC yacht.",
    },
    filters: {
      heading: "Find your perfect yacht tour",
      type: {
        label: "Tour type",
        options: [
          { value: "all", label: "All tour types" },
          { value: "standard", label: "Standard charter" },
          { value: "premium", label: "Premium charter" },
          { value: "business", label: "Business charter" },
          { value: "active", label: "Active adventure" },
        ],
      },
      season: {
        label: "Season",
        options: [
          { value: "all", label: "All seasons" },
          { value: "year-round", label: "Year-round" },
          { value: "April-October", label: "April–October" },
          { value: "May-September", label: "May–September" },
          { value: "March-November", label: "March–November" },
        ],
      },
      duration: {
        label: "Duration",
        options: [
          { value: "all", label: "Any duration" },
          { value: "3 hours", label: "3 hours" },
          { value: "4 hours", label: "4 hours" },
          { value: "5 hours", label: "5 hours" },
          { value: "6 hours", label: "6 hours" },
          { value: "8 hours", label: "8 hours" },
        ],
      },
      availability: {
        label: "Availability",
        options: [
          { value: "all", label: "All tours" },
          { value: "available", label: "Available now" },
          { value: "unavailable", label: "Currently unavailable" },
        ],
      },
    },
    labels: {
      clear: "Clear all filters",
      unavailable: "Unavailable",
      viewDetails: "View tour details",
      bookNow: "Book now",
      perPersonSuffix: "per guest",
      noResultsTitle: "No yacht tours found",
      noResultsDescription:
        "Adjust your filter criteria to see other premium experiences.",
    },
    detailLabels: {
      duration: "Duration:",
      capacity: "Capacity:",
      season: "Season:",
    },
    list: [
      {
        id: 1,
        slug: "southwest",
        image: "/1.png",
        imageAlt: "Southwest coast yacht tour Mallorca",
        title: "Southwest Coast Tour",
        shortDescription:
          "Scenic cruise along Mallorca's southwest shoreline with snorkeling stops, drinks and curated playlists.",
        type: "standard",
        typeLabel: "Standard charter",
        season: "year-round",
        seasonLabel: "Year-round",
        duration: "3 hours",
        durationLabel: "3 hours",
        price: "€890",
        pricePerPerson: "€89",
        capacity: "10 guests",
        capacityLabel: "Up to 10 guests",
        minCapacityLabel: "Minimum 8 guests",
        maxCapacityLabel: "Maximum 11 guests",
        available: true,
        highlights: [
          "Coastal panoramas",
          "Snorkeling stop",
          "Local refreshments",
          "Bilingual crew",
        ],
        departure: "Real Club Náutico de Palma",
        fuelSurcharge: "€20-40 per guest",
        included: [
          "Snacks",
          "Beer and soft drinks",
          "Coffee & tea",
          "Snorkeling masks",
        ],
        extraServices: [
          { name: "Seascooter", price: "€50" },
          { name: "SUP board", price: "€50" },
          { name: "Premium bar", price: "On request" },
        ],
        coves: [
          {
            id: "saPorrassa",
            name: "Isla de Sa Porrassa",
            description:
              "Rocky islet near Magaluf marking the start of the southwest itinerary with dramatic cliffscapes.",
            highlights: ["Rock formations", "Wild scenery", "Photo hotspot"],
            visitType: "Panoramic pass",
            images: ["/1.png", "/2.png", "/3.png"],
          },
          {
            id: "portalsVells",
            name: "Cala Portals Vells",
            description:
              "Turquoise bay framed by pine forest, ideal for snorkeling and exploring sandstone caves.",
            highlights: ["Crystal water", "Sea caves", "Perfect snorkeling"],
            visitType: "Swimming stop · 30–60 min",
            images: ["/4.png", "/5.png"],
          },
          {
            id: "malgrats",
            name: "Isla Malgrats",
            description:
              "Protected twin islands where pristine water reveals colourful fish and seabirds.",
            highlights: ["Marine reserve", "Wildlife spotting", "Clear water"],
            visitType: "Panoramic pass",
            images: ["/6.png", "/7.jpg", "/8.jpg"],
          },
          {
            id: "fornells",
            name: "Cala Fornells",
            description:
              "Elegant bay dotted with villas and calm waters for relaxed swimming and photos.",
            highlights: [
              "Exclusive setting",
              "Sheltered waters",
              "Mediterranean villas",
            ],
            visitType: "Relax stop · 30 min",
            images: ["/9.jpg", "/10.jpg", "/11.jpg"],
          },
          {
            id: "dragonera",
            name: "Sa Dragonera",
            description:
              "Dragon-shaped natural park delivering a striking finale with towering cliffs.",
            highlights: ["Natural park", "Unique silhouette", "Wild coastline"],
            visitType: "Panoramic pass",
            images: ["/12.jpg", "/13.jpg"],
          },
        ],
      },
      {
        id: 2,
        slug: "landmarks",
        image: "/Southeast/4CalaPi/4.jpeg",
        imageAlt: "Luxury yacht at Cala Pi Mallorca",
        title: "Coastal Landmarks Tour",
        shortDescription:
          "Landmark-focused cruise showcasing Palma Cathedral and Mallorca's most photogenic southern coves.",
        type: "standard",
        typeLabel: "Standard charter",
        season: "year-round",
        seasonLabel: "Year-round",
        duration: "4 hours",
        durationLabel: "4 hours",
        price: "€950",
        pricePerPerson: "€95",
        capacity: "10 guests",
        capacityLabel: "Up to 10 guests",
        minCapacityLabel: "Minimum 8 guests",
        maxCapacityLabel: "Maximum 12 guests",
        available: true,
        highlights: [
          "Cathedral panorama",
          "Crystal-clear coves",
          "Snorkeling gear",
          "Tailor-made service",
        ],
        departure: "Port de Palma",
        fuelSurcharge: "€20-40 per guest",
        included: ["Snacks", "Soft drinks", "Coffee & tea", "Snorkeling masks"],
        extraServices: [
          { name: "Seascooter", price: "€50" },
          { name: "SUP board", price: "€50" },
        ],
        coves: [
          {
            id: "laSeu",
            name: "Palma Cathedral (La Seu)",
            description:
              "Gothic masterpiece rising above Palma Bay, glowing gold at sunrise and sunset.",
            highlights: ["Grand facade", "Historic skyline", "Sea perspective"],
            visitType: "Scenic pass",
            images: ["/Southeast/1LaSeu/1.png", "/Southeast/1LaSeu/22.png"],
          },
          {
            id: "calaBlava",
            name: "Cala Blava",
            description:
              "Emerald cove with sculpted rocks and grottoes perfect for a first swim.",
            highlights: ["Emerald water", "Rock formations", "Quiet ambience"],
            visitType: "Swimming stop · 45 min",
            images: [
              "/Southeast/2CalaBlava/2.jpg",
              "/Southeast/2CalaBlava/22.png",
            ],
          },
          {
            id: "calaVella",
            name: "Cala Vella",
            description:
              "Sheltered bay with soft white sand and pine-framed cliffs, ideal for lounging afloat.",
            highlights: ["Calm water", "Scenic cliffs", "Sandbar swimming"],
            visitType: "Swimming & relaxation · 60 min",
            images: [
              "/Southeast/3CalaVella/3.jpg",
              "/Southeast/3CalaVella/33.png",
              "/Southeast/3CalaVella/333.png",
            ],
          },
          {
            id: "calaPi",
            name: "Cala Pi",
            description:
              "Iconic fjord-like bay where turquoise water cuts between dramatic cliffs.",
            highlights: ["Iconic landscape", "Turquoise water", "Final swim"],
            visitType: "Final swimming stop · 50 min",
            images: [
              "/Southeast/4CalaPi/4.jpeg",
              "/Southeast/4CalaPi/4.png",
              "/Southeast/4CalaPi/44.jpeg",
              "/Southeast/4CalaPi/444.jpg",
            ],
          },
        ],
      },
      {
        id: 3,
        slug: "cabrera",
        image: "/kabrera/1.png",
        imageAlt: "Cabrera National Park yacht expedition",
        title: "Cabrera National Park Expedition",
        shortDescription:
          "Full-day voyage to the protected Cabrera archipelago with pristine nature and unforgettable views.",
        type: "premium",
        typeLabel: "Premium charter",
        season: "April-October",
        seasonLabel: "April–October",
        duration: "8 hours",
        durationLabel: "8 hours",
        price: "€1200",
        pricePerPerson: "€150",
        capacity: "8 guests",
        capacityLabel: "Up to 8 guests",
        minCapacityLabel: "Minimum 6 guests",
        maxCapacityLabel: "Maximum 10 guests",
        available: true,
        highlights: [
          "National park access",
          "Wild archipelago",
          "Dolphin sightings",
          "Chef-prepared lunch",
        ],
        departure: "Port de Palma",
        fuelSurcharge: "€30-50 per guest",
        included: [
          "Lunch onboard",
          "Snacks",
          "Beer & wine",
          "Soft drinks",
          "Coffee & tea",
          "Snorkeling equipment",
        ],
        extraServices: [
          { name: "Seascooter", price: "€60" },
          { name: "SUP board", price: "€60" },
          { name: "Professional photos", price: "€80" },
        ],
        coves: [
          {
            id: "routeToCabrera",
            name: "Voyage to Cabrera",
            description:
              "Blue-water crossing where Mallorca fades away and the silhouettes of Cabrera emerge.",
            highlights: [
              "Open sea adventure",
              "Panoramic views",
              "Fresh sea breeze",
            ],
            visitType: "Open-water cruise · 2 h",
            images: ["/kabrera/1.png"],
          },
          {
            id: "archipelago",
            name: "Cabrera Archipelago",
            description:
              "Protected national park of uninhabited islands with crystal water, marine life and absolute tranquillity.",
            highlights: ["Protected nature", "Crystal waters", "Marine life"],
            visitType: "Exploration & swimming · 3 h",
            images: ["/kabrera/11.png"],
          },
          {
            id: "coastlineReturn",
            name: "Return along Mallorca's coast",
            description:
              "Scenic cruise back along Mallorca's southeast coastline with pine forests and golden cliffs.",
            highlights: ["Coastal scenery", "Hidden coves", "Sunset colours"],
            visitType: "Coastal cruise · 2 h",
            images: ["/kabrera/111.png"],
          },
        ],
      },
    ],
  },
  tourDetail: {
    breadcrumbRoot: "Luxury yacht tours",
    galleryAria: "Tour gallery",
    loading: "Loading...",
    nextButton: "Next",
    nextButtonAria: "Next slide",
    photoLabel: "Photo",
    photoOf: "of",
    perPersonSuffix: "per guest",
    availability: {
      available: "Available for booking",
      unavailable: "Currently unavailable",
    },
    features: {
      duration: "Tour duration",
      season: "Best season",
      departure: "Departure location",
    },
    highlightsTitle: "Premium tour highlights",
    actions: {
      bookByPhone: "Book luxury yacht tour",
      whatsapp: "Message on WhatsApp",
      unavailableNotice: "This luxury yacht tour is temporarily unavailable",
      viewAvailableTours: "View available yacht tours",
    },
    contact: {
      title: "Questions about this yacht tour?",
      description:
        "Our charter concierge will help shape the perfect Mallorca itinerary for you.",
      phoneLabel: "+34 (697) 726-944",
      emailLabel: "charterbalears@gmail.com",
    },
    notFound: {
      title: "Yacht tour not found",
      description: "The requested experience is currently unavailable.",
      cta: "Back to luxury yacht tours",
    },
  },
  faq: {
    hero: {
      title: "Frequently Asked Questions",
      subtitle:
        "Everything you need to know about our luxury yacht charters in Mallorca.",
    },
    intro: {
      title: "Common questions about yacht EDENROC charters",
      description:
        "Find answers about services, booking, onboard experience and preparation for your Balearic voyage.",
    },
    items: [
      {
        question: "What is included in the yacht charter price?",
        answer:
          "The charter covers yacht rental with full equipment, crew services, fuel for the planned route, insurance and port fees. Optional extras such as catering, specialist activities or extended fuel are available at additional cost.",
      },
      {
        question: "Do I need sailing experience to charter a yacht?",
        answer:
          "No prior experience is required. Our professional crew handles navigation and operations. Bareboat charters are available only with the appropriate licence and sea-time evidence.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Cancellations 30+ days before departure receive a full refund. 15–29 days: 50% refund. Less than 15 days: no refund, though rescheduling is possible subject to availability. Weather cancellations are fully refundable.",
      },
      {
        question: "How many people can the yacht accommodate?",
        answer:
          "EDENROC welcomes up to 10 guests on day charters and up to 7 guests for overnight stays across three cabins with ensuite facilities.",
      },
      {
        question: "What should I bring for the fishing tour?",
        answer:
          "We supply all fishing gear, licences and safety equipment. Bring sunscreen, sunglasses, non-slip shoes, a light jacket, camera and necessary medication. If prone to seasickness, consider preventative medication.",
      },
      {
        question: "Are children allowed on board?",
        answer:
          "Families are welcome. We provide life jackets for all ages and can adapt activities for children. Children under 12 must be supervised by adults at all times. Safety briefing is mandatory for everyone.",
      },
      {
        question: "What happens in case of bad weather?",
        answer:
          "We monitor forecasts continuously. Tours may be rescheduled or adjusted for safety. Weather cancellations receive a full refund. Safety of guests and crew is our top priority.",
      },
      {
        question: "Is food and drinks included?",
        answer:
          "Complimentary refreshments are included. Bespoke catering from snacks to gourmet menus can be arranged on request. Guests may bring favourite beverages.",
      },
      {
        question: "Can we customise the tour route?",
        answer:
          "Absolutely. We specialise in tailor-made itineraries. During booking we discuss favourite swimming spots, sightseeing, dining and pace to craft a personal route.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfer, Visa, MasterCard and cash (EUR). A 30% deposit secures the booking with balance due 14 days prior. Last-minute bookings may require full payment.",
      },
    ],
    contact: {
      title: "Still have questions?",
      description:
        "Our charter specialists are ready to craft your Mediterranean yachting experience.",
      phoneCta: "Call us now",
      emailCta: "Send email",
    },
  },
  bigFish: {
    hero: {
      title: "Big Fish Mallorca - Catch Your Dream Trophy",
      subtitle: "BIG GAME FISHING on a comfortable luxury yacht",
    },
    intro: {
      title: "What is BIG GAME Fishing?",
      lead: "The most thrilling fishing experience in the world — this is the hunt for giants, not coastal catch.",
      paragraphs: [
        "Picture a 100–200 kg bluefin tuna striking the lure. The battle, adrenaline and victory create memories for life.",
        "Mallorcan waters host bluefin tuna up to 400 kg and swordfish up to 4.5 metres: a paradise for anglers and thrill-seekers.",
      ],
      imageAlt: "Big game fishing catch - large tuna in Mediterranean waters",
    },
    advantages: {
      title: "Why choose our big game fishing?",
      items: [
        {
          title: "Professional team",
          description:
            "Experienced crew focused on safety, optimal tactics and unforgettable trophies.",
        },
        {
          title: "Comfortable yacht",
          description:
            "Relax in elegant cabins or shaded deck lounges whenever you wish.",
        },
        {
          title: "Personalised service",
          description:
            "Tailored itineraries and timing aligned with your preferences.",
        },
        {
          title: "Premium equipment",
          description:
            "Tournament-grade gear suitable for newcomers and seasoned anglers.",
        },
      ],
    },
    packages: {
      title: "Fishing tour packages",
      items: [
        {
          name: "Big Game",
          price: "€1300",
          details: [
            "Target: Giant tuna (100–200 kg)",
            "Departure: 08:00",
            "Return: 16:00",
          ],
          highlight: "Ultimate big game experience",
        },
        {
          name: "Trolling",
          price: "€1300",
          details: [
            "Target: Medium tuna (6–10 kg)",
            "Departure: 08:00",
            "Return: 16:00",
          ],
          highlight: "Classic trolling action",
        },
        {
          name: "Half-day",
          price: "€750",
          details: [
            "Target: Smaller fish (up to 5 kg)",
            "Start: 10:00",
            "Return: 14:00",
          ],
          highlight: "Flexible schedule available",
        },
      ],
      discountNote:
        "Special offer: 20% discount for multi-day tours or returning guests.",
    },
    steps: {
      title: "How to book your fishing adventure",
      items: [
        {
          number: "01",
          title: "Contact us",
          description:
            "Reach out by phone, message or email with your preferred dates and fishing goals.",
        },
        {
          number: "02",
          title: "Discuss details",
          description:
            "We align expectations and secure the booking with a confirmation deposit.",
        },
        {
          number: "03",
          title: "Weather confirmation",
          description:
            "We confirm the trip 48–72 hours prior based on forecasts and regulations.",
        },
        {
          number: "04",
          title: "Final payment & departure",
          description:
            "Complete the balance and meet the crew for your big game adventure.",
        },
      ],
    },
    cta: {
      title: "Stop dreaming – join the Big Game!",
      description:
        "Book with us for breathtaking offshore action and unforgettable emotions.",
      primary: "Book your fishing tour",
      secondary: "Get more information",
    },
  },
  blog: {
    hero: {
      title: "Blog - First-hand Information",
      subtitle:
        "Discover insights, stories and expert advice about yacht charters and Mediterranean adventures.",
    },
    posts: [
      {
        id: 1,
        title: "Yacht Charter Mallorca",
        excerpt:
          "Set sail on an unforgettable Balearic voyage with insider advice on routes, cuisine and hidden anchorages.",
        author: "Fadik Play",
        date: "May 6",
        readTime: "3 min read",
        views: "3 views",
        likes: null,
        category: "Luxury Charters",
        image: "/gallery/1.jpg",
        imageAlt: "Luxury yacht anchored in a turquoise Mallorcan bay",
      },
      {
        id: 2,
        title: "Mallorca Private Yacht Charter",
        excerpt:
          "Why a private charter is the ultimate escape: bespoke itineraries, curated crew service and absolute privacy.",
        author: "Fadik Play",
        date: "May 2",
        readTime: "2 min read",
        views: "7 views",
        likes: null,
        category: "Private Charters",
        image: "/gallery/6.jpg",
        imageAlt: "Private party celebrating on the deck of a yacht",
      },
      {
        id: 3,
        title: "Luxury Yacht Charter Mallorca",
        excerpt:
          "A guide to the finest Balearic anchorages, gourmet picnics and sunset rituals aboard EDENROC.",
        author: "Fadik Play",
        date: "May 2",
        readTime: "2 min read",
        views: "6 views",
        likes: null,
        category: "Luxury Experience",
        image: "/gallery/price-header.jpg",
        imageAlt: "Elegant yacht interior with premium finishes",
      },
      {
        id: 4,
        title: "Celebrities on board EDENROC",
        excerpt:
          "Behind the scenes: how international artists turned EDENROC into a floating film set.",
        author: "Dmitry Pavlov",
        date: "Jul 14, 2023",
        readTime: "1 min read",
        views: "208 views",
        likes: "5 likes",
        category: "Celebrities",
        image: "/gallery/7.jpg",
        imageAlt: "Famous guests enjoying a yacht party",
      },
      {
        id: 5,
        title: "Places of interest in Palma de Mallorca",
        excerpt:
          "From La Seu and the Royal Palace to secret tapas bars — a curated guide for yacht travellers.",
        author: "Hanna Doboshne",
        date: "Feb 26, 2023",
        readTime: "2 min read",
        views: "22 views",
        likes: "5 likes",
        category: "Travel Guide",
        image: "/gallery/5.jpg",
        imageAlt: "Historic architecture in Palma de Mallorca",
      },
      {
        id: 6,
        title: "Travelling with my partner on a yacht",
        excerpt:
          "One couple's story of sunsets, secluded bays and bespoke service aboard EDENROC.",
        author: "Jesus Santos",
        date: "Feb 13, 2023",
        readTime: "2 min read",
        views: "23 views",
        likes: "11 likes",
        category: "Romantic Getaways",
        image: "/gallery/4.jpg",
        imageAlt: "Romantic sunset moment on a yacht bow",
      },
    ],
  },
  footer: {
    brandDescription:
      "For a unique maritime experience in the heart of Mallorca, CharterBalears offers luxurious charters aboard EDENROC with a crew dedicated to tailor-made service.",
    yachtName: "Yacht EDENROC",
    social: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
    },
    quickLinksTitle: "Quick links",
    quickLinks: [
      { href: "/yacht", label: "The Yacht EDENROC" },
      { href: "/routes", label: "Routes & Charters" },
      { href: "/services", label: "Services" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
    destinationsTitle: "Destinations",
    destinations: [
      { href: "/routes/mallorca", label: "Mallorca" },
      { href: "/routes/ibiza", label: "Ibiza" },
      { href: "/routes/menorca", label: "Menorca" },
      { href: "/routes/formentera", label: "Formentera" },
    ],
    contactTitle: "Contact info",
    contact: [
      { type: "phone", label: "+34 (697) 726-944", href: "tel:+34697726944" },
      {
        type: "email",
        label: "charterbalears@gmail.com",
        href: "mailto:charterbalears@gmail.com",
      },
      {
        type: "address",
        label: "MARINA PORT DE MALLORCA · Berth A44, Port de Mallorca",
      },
    ],
    company: "SWAE Group OÜ | NIF N0531322F Spain | Boat EDENROC",
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    copyright: "© 2024 CharterBalears. All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    description:
      "The page you're looking for seems to have sailed away. Perhaps it's exploring distant shores or enjoying the Mediterranean sunset.",
    primaryCta: "Return to home",
    secondaryCta: "Explore our tours",
    contactPrompt: "Can't find what you're looking for?",
    phoneLabel: "+34 (697) 726-944",
    emailLabel: "charterbalears@gmail.com",
  },
};

const cloneDeep = (value) => JSON.parse(JSON.stringify(value));

const mapOptionLabels = (options, dictionary) =>
  options.map((option) => ({
    ...option,
    label: dictionary[option.value] ?? option.label,
  }));

const overrideTourList = (list, overrides) =>
  list.map((tour) => {
    const override = overrides[tour.slug];
    if (!override) {
      return tour;
    }
    const updated = { ...tour, ...override };
    if (override.highlights) {
      updated.highlights = override.highlights;
    }
    if (override.included) {
      updated.included = override.included;
    }
    if (override.extraServices) {
      updated.extraServices = override.extraServices;
    }
    return updated;
  });

const overrideBlogPosts = (posts, overrides) =>
  posts.map((post) => {
    const override = overrides[post.id];
    if (!override) {
      return post;
    }
    return { ...post, ...override };
  });

const es = cloneDeep(en);
es.meta = { label: "Español", shortLabel: "ES" };
es.header = {
  ...es.header,
  nav: {
    home: "Inicio",
    tours: "Excursiones",
    yacht: "El Yate",
    blog: "Blog",
    faq: "FAQ",
  },
  actions: { cta: "Reservar ahora" },
  language: { ariaLabel: "Seleccionar idioma" },
  navigationToggle: "Abrir o cerrar navegación",
};

const esHeroSlideOverrides = {
  southwest: {
    title: "Ruta Costa Suroeste",
    subtitle: "Crucero de lujo por las calas más glamurosas del suroeste",
    description:
      "Navega por Portals Vells, Cala Fornells y Sa Dragonera con paradas para nadar, hacer snorkel y brindar al atardecer.",
    price: "desde 89 € por persona",
    duration: "3 horas",
    capacity: "Hasta 10 invitados",
    buttonLabel: "Reservar tour suroeste",
  },
  landmarks: {
    title: "Ruta de Iconos Costeros",
    subtitle: "Descubre la Catedral de Palma y las calas más icónicas",
    description:
      "Contempla La Seu desde el mar y disfruta del agua cristalina de Cala Blava, Cala Vella y la fotogénica Cala Pi.",
    price: "desde 95 € por persona",
    duration: "4 horas",
    capacity: "Hasta 10 invitados",
    buttonLabel: "Reservar ruta de iconos",
  },
  cabrera: {
    title: "Expedición Parque Nacional Cabrera",
    subtitle: "Escapada de día completo al archipiélago protegido",
    description:
      "Visita las islas vírgenes de Cabrera, nada en calas azul cobalto y observa delfines durante la travesía.",
    price: "desde 150 € por persona",
    duration: "8 horas",
    capacity: "Hasta 8 invitados",
    buttonLabel: "Reservar Cabrera",
  },
};

es.heroSlider.phoneCta = "Llamar a CharterBalears";
es.heroSlider.slides = es.heroSlider.slides.map((slide) => {
  const override = esHeroSlideOverrides[slide.id];
  return override ? { ...slide, ...override } : slide;
});

es.home.about = {
  ...es.home.about,
  title: "Charter de lujo EDENROC en Mallorca",
  lead: "EDENROC es un flybridge Azimut de 16 metros que combina artesanía italiana y tecnología moderna.",
  paragraphs: [
    "Tres cabinas refinadas, dos baños elegantes y una cocina a medida acogen hasta siete invitados con máximo confort.",
    "Disfruta de vistas panorámicas desde el flybridge o celebra encuentros privados en el salón.",
    "Ideal para charters premium por Mallorca, Ibiza, Menorca y Formentera.",
  ],
  ctaLabel: "Descubrir el yate EDENROC",
  ctaAria: "Ver detalles del yate de lujo EDENROC",
  imageAlt:
    "Interior del yate de lujo EDENROC con diseño italiano y comodidades premium",
};

es.home.activities = {
  ...es.home.activities,
  heading: "Experiencias exclusivas en yate en Mallorca",
  description:
    "Aventuras a medida y momentos inolvidables para viajeros exigentes en las Baleares.",
  cards: es.home.activities.cards.map((card, index) => {
    const overrides = [
      {
        title: "Exploración submarina y snorkel",
        description:
          "Deslízate por calas turquesa con scooters marinos potentes y guías de snorkel.",
      },
      {
        title: "Pesca deportiva premium",
        description:
          "Persigue atunes rojos con equipo profesional y tripulación experta a bordo.",
      },
      {
        title: "Eventos privados en yate",
        description:
          "Celebra momentos únicos con catering, mixología y entretenimiento personalizado.",
      },
    ];
    return overrides[index] ? { ...card, ...overrides[index] } : card;
  }),
};

es.home.contact = {
  ...es.home.contact,
  heading: "Comienza tu viaje de lujo en Mallorca",
  description:
    "Contacta con nuestro equipo de charter para diseñar una experiencia a medida a bordo del EDENROC.",
  primary: {
    ...es.home.contact.primary,
    label: "+34 (697) 726-944",
    ariaLabel: "Llamar al número de charter",
  },
  secondary: {
    ...es.home.contact.secondary,
    label: "Contactar por correo",
    ariaLabel: "Enviar correo al equipo de charter",
  },
};

es.tours.hero = {
  title: "Excursiones exclusivas y charters en Mallorca",
  subtitle: "Encuentra la travesía perfecta a bordo del EDENROC.",
};
es.tours.filters.heading = "Encuentra tu excursión ideal";
es.tours.filters.type = {
  ...es.tours.filters.type,
  label: "Tipo de excursión",
  options: mapOptionLabels(es.tours.filters.type.options, {
    all: "Todos los tipos",
    standard: "Charter estándar",
    premium: "Charter premium",
    business: "Charter corporativo",
    active: "Aventura activa",
  }),
};
es.tours.filters.season = {
  ...es.tours.filters.season,
  label: "Temporada",
  options: mapOptionLabels(es.tours.filters.season.options, {
    all: "Todas las temporadas",
    "year-round": "Todo el año",
    "April-October": "Abril–Octubre",
    "May-September": "Mayo–Septiembre",
    "March-November": "Marzo–Noviembre",
  }),
};
es.tours.filters.duration = {
  ...es.tours.filters.duration,
  label: "Duración",
  options: mapOptionLabels(es.tours.filters.duration.options, {
    all: "Cualquier duración",
    "3 hours": "3 horas",
    "4 hours": "4 horas",
    "5 hours": "5 horas",
    "6 hours": "6 horas",
    "8 hours": "8 horas",
  }),
};
es.tours.filters.availability = {
  ...es.tours.filters.availability,
  label: "Disponibilidad",
  options: mapOptionLabels(es.tours.filters.availability.options, {
    all: "Todas las excursiones",
    available: "Disponibles ahora",
    unavailable: "No disponibles",
  }),
};
es.tours.labels = {
  clear: "Borrar filtros",
  unavailable: "No disponible",
  viewDetails: "Ver detalles de la excursión",
  bookNow: "Reservar ahora",
  perPersonSuffix: "por persona",
  noResultsTitle: "No se han encontrado excursiones",
  noResultsDescription:
    "Ajusta los filtros para ver otras experiencias de lujo.",
};

const esTourOverrides = {
  southwest: {
    title: "Ruta Costa Suroeste",
    shortDescription:
      "Crucero escénico con paradas de snorkel, bebidas locales y música a medida.",
    typeLabel: "Charter estándar",
    seasonLabel: "Todo el año",
    durationLabel: "3 horas",
    price: "890 €",
    pricePerPerson: "89 €",
    capacityLabel: "Hasta 10 invitados",
    minCapacityLabel: "Mínimo 8 invitados",
    maxCapacityLabel: "Máximo 11 invitados",
    highlights: [
      "Panorámicas costeras",
      "Parada de snorkel",
      "Refrescos locales",
      "Tripulación bilingüe",
    ],
    fuelSurcharge: "20-40 € por persona",
    included: [
      "Snacks",
      "Cerveza y refrescos",
      "Café y té",
      "Máscaras de snorkel",
    ],
    extraServices: [
      { name: "Scooter marino", price: "50 €" },
      { name: "Tabla SUP", price: "50 €" },
      { name: "Barra premium", price: "A consultar" },
    ],
  },
  landmarks: {
    title: "Ruta de Iconos Costeros",
    shortDescription:
      "Excursión que combina la Catedral de Palma con las calas más fotogénicas del sur.",
    typeLabel: "Charter estándar",
    seasonLabel: "Todo el año",
    durationLabel: "4 horas",
    price: "950 €",
    pricePerPerson: "95 €",
    capacityLabel: "Hasta 10 invitados",
    minCapacityLabel: "Mínimo 8 invitados",
    maxCapacityLabel: "Máximo 12 invitados",
    highlights: [
      "Panorámica de la Catedral",
      "Calas cristalinas",
      "Equipo de snorkel",
      "Servicio a medida",
    ],
    fuelSurcharge: "20-40 € por persona",
    included: ["Snacks", "Refrescos", "Café y té", "Máscaras de snorkel"],
    extraServices: [
      { name: "Scooter marino", price: "50 €" },
      { name: "Tabla SUP", price: "50 €" },
    ],
  },
  cabrera: {
    title: "Expedición Parque Nacional Cabrera",
    shortDescription:
      "Travesía de día completo al archipiélago protegido con paisajes inolvidables.",
    typeLabel: "Charter premium",
    seasonLabel: "Abril–Octubre",
    durationLabel: "8 horas",
    price: "1.200 €",
    pricePerPerson: "150 €",
    capacityLabel: "Hasta 8 invitados",
    minCapacityLabel: "Mínimo 6 invitados",
    maxCapacityLabel: "Máximo 10 invitados",
    highlights: [
      "Acceso a parque nacional",
      "Archipiélago salvaje",
      "Avistamiento de delfines",
      "Almuerzo gourmet",
    ],
    fuelSurcharge: "30-50 € por persona",
    included: [
      "Almuerzo a bordo",
      "Snacks",
      "Cerveza y vino",
      "Refrescos",
      "Café y té",
      "Equipo de snorkel",
    ],
    extraServices: [
      { name: "Scooter marino", price: "60 €" },
      { name: "Tabla SUP", price: "60 €" },
      { name: "Sesión fotográfica", price: "80 €" },
    ],
  },
};
es.tours.list = overrideTourList(es.tours.list, esTourOverrides);

es.tourDetail = {
  ...es.tourDetail,
  breadcrumbRoot: "Excursiones de lujo en yate",
  galleryAria: "Galería de la excursión",
  loading: "Cargando...",
  nextButton: "Siguiente",
  nextButtonAria: "Siguiente imagen",
  photoLabel: "Foto",
  photoOf: "de",
  perPersonSuffix: "por persona",
  availability: {
    available: "Disponible para reservar",
    unavailable: "No disponible actualmente",
  },
  features: {
    duration: "Duración de la excursión",
    season: "Mejor época",
    departure: "Puerto de salida",
  },
  highlightsTitle: "Momentos destacados premium",
  actions: {
    bookByPhone: "Reservar tour de lujo",
    whatsapp: "Mensaje por WhatsApp",
    unavailableNotice: "Esta excursión no está disponible temporalmente",
    viewAvailableTours: "Ver excursiones disponibles",
  },
  contact: {
    title: "¿Dudas sobre esta excursión?",
    description:
      "Nuestro concierge de charter te ayudará a diseñar el itinerario perfecto en Mallorca.",
    phoneLabel: "+34 (697) 726-944",
    emailLabel: "charterbalears@gmail.com",
  },
  notFound: {
    title: "Excursión no encontrada",
    description: "La experiencia solicitada no está disponible actualmente.",
    cta: "Volver a excursiones de lujo",
  },
};

es.faq.hero = {
  title: "Preguntas frecuentes",
  subtitle:
    "Todo lo que necesitas saber sobre nuestros charters de lujo en Mallorca.",
};
es.faq.intro = {
  title: "Preguntas habituales sobre el charter EDENROC",
  description:
    "Resolvemos dudas sobre servicios, reservas, experiencia a bordo y preparación del viaje.",
};
es.faq.items = [
  {
    question: "¿Qué incluye el precio del charter?",
    answer:
      "Incluye alquiler del yate con equipamiento completo, tripulación profesional, combustible del itinerario planificado, seguros y tasas portuarias. Servicios extra como catering o actividades especiales tienen suplemento.",
  },
  {
    question: "¿Necesito experiencia náutica para alquilar?",
    answer:
      "No es necesario. Nuestra tripulación se encarga de la navegación y maniobras. Solo los charters sin tripulación requieren licencia y experiencia demostrable.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Más de 30 días: reembolso completo. 15–29 días: 50% de reembolso. Menos de 15 días: no hay reembolso, pero podemos reprogramar según disponibilidad. Las cancelaciones por meteorología se reembolsan al 100%.",
  },
  {
    question: "¿Cuántas personas pueden embarcar?",
    answer:
      "EDENROC admite hasta 10 invitados en salidas de día y hasta 7 pernoctando en tres cabinas con baños ensuite.",
  },
  {
    question: "¿Qué debo llevar a la excursión de pesca?",
    answer:
      "Proporcionamos equipo de pesca, licencias y material de seguridad. Recomendamos protector solar, gafas, calzado antideslizante, chaqueta ligera, cámara y medicación personal. Si eres propenso al mareo, trae medicación preventiva.",
  },
  {
    question: "¿Pueden venir niños?",
    answer:
      "Sí, disponemos de chalecos para todas las edades y adaptamos actividades. Los menores de 12 años deben ir acompañados de adultos. Realizamos briefing de seguridad obligatorio.",
  },
  {
    question: "¿Qué pasa si hace mal tiempo?",
    answer:
      "Monitorizamos el tiempo constantemente. Podemos reprogramar o ajustar la ruta por seguridad. Las cancelaciones por meteorología se reembolsan íntegramente.",
  },
  {
    question: "¿Hay comida y bebida incluida?",
    answer:
      "Incluimos refrescos y agua. Ofrecemos catering desde aperitivos hasta menús gourmet de chef bajo petición. Puedes traer tus bebidas favoritas.",
  },
  {
    question: "¿Podemos personalizar la ruta?",
    answer:
      "Sí, diseñamos itinerarios a medida según tus preferencias de calas, gastronomía, ocio y ritmo.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos transferencia bancaria, Visa, MasterCard y efectivo en euros. El 30% de depósito confirma la reserva y el saldo se abona 14 días antes. En reservas de última hora puede requerirse el pago completo.",
  },
];

es.bigFish.hero = {
  title: "Big Fish Mallorca - ¡Atrapa tu trofeo!",
  subtitle: "PESCA DE ALTURA en un yate de lujo confortable",
};
es.bigFish.intro = {
  title: "¿Qué es la pesca BIG GAME?",
  lead: "La experiencia de pesca más emocionante del mundo: un duelo real con gigantes del mar.",
  paragraphs: [
    "Imagina un atún de 150 kg mordiendo el señuelo. La adrenalina y la victoria crean recuerdos imborrables.",
    "Las aguas baleares albergan atunes rojos de hasta 400 kg y peces espada de 4,5 metros: un paraíso para pescadores y aventureros.",
  ],
  imageAlt:
    "Pesca de altura en el Mediterráneo con un gran atún en la cubierta",
};
es.bigFish.advantages = {
  ...es.bigFish.advantages,
  title: "¿Por qué elegir nuestra experiencia Big Game?",
  items: [
    {
      title: "Tripulación profesional",
      description:
        "Equipo experimentado, centrado en la seguridad y en capturas memorables.",
    },
    {
      title: "Yate confortable",
      description:
        "Relájate en cabinas elegantes o en cubierta a la sombra cuando quieras.",
    },
    {
      title: "Servicio personalizado",
      description:
        "Ruta y horarios diseñados previamente según tus preferencias.",
    },
    {
      title: "Equipo premium",
      description:
        "Material de competición apto tanto para principiantes como para expertos.",
    },
  ],
};
es.bigFish.packages = {
  ...es.bigFish.packages,
  title: "Paquetes de pesca",
  items: [
    {
      name: "Big Game",
      price: "1.300 €",
      details: [
        "Objetivo: Atún gigante (100–200 kg)",
        "Salida: 08:00",
        "Regreso: 16:00",
      ],
      highlight: "Experiencia definitiva de pesca de altura",
    },
    {
      name: "Trolling",
      price: "1.300 €",
      details: [
        "Objetivo: Atún medio (6–10 kg)",
        "Salida: 08:00",
        "Regreso: 16:00",
      ],
      highlight: "Pesca clásica al curricán",
    },
    {
      name: "Medio día",
      price: "750 €",
      details: [
        "Objetivo: Piezas de hasta 5 kg",
        "Inicio: 10:00",
        "Regreso: 14:00",
      ],
      highlight: "Horarios flexibles disponibles",
    },
  ],
  discountNote:
    "Oferta especial: 20% de descuento en tours multijornada o clientes recurrentes.",
};
es.bigFish.steps = {
  ...es.bigFish.steps,
  title: "Cómo reservar tu aventura de pesca",
  items: [
    {
      number: "01",
      title: "Contacto",
      description: "Llámanos o escríbenos con tus fechas y objetivos de pesca.",
    },
    {
      number: "02",
      title: "Detalles",
      description:
        "Definimos preferencias y formalizamos la reserva con una señal.",
    },
    {
      number: "03",
      title: "Confirmación meteorológica",
      description:
        "Confirmamos la salida 48–72 horas antes según previsión y normativa.",
    },
    {
      number: "04",
      title: "Pago final y embarque",
      description: "Liquida el saldo y prepárate para una pesca épica.",
    },
  ],
};
es.bigFish.cta = {
  ...es.bigFish.cta,
  title: "¡Deja de soñar y ven a por el gran pez!",
  description:
    "Reserva con nosotros para vivir la emoción de la pesca offshore.",
  primary: "Reservar tour de pesca",
  secondary: "Solicitar información",
};

const esBlogOverrides = {
  1: {
    title: "Alquiler de yates en Mallorca",
    excerpt:
      "Planifica tu travesía balear con consejos sobre rutas, gastronomía y fondeos secretos.",
    readTime: "3 min de lectura",
    views: "3 lecturas",
    category: "Charters de lujo",
  },
  2: {
    title: "Charter privado en Mallorca",
    excerpt:
      "Privacidad absoluta, servicio a medida y ritmo propio: claves de un charter inolvidable.",
    readTime: "2 min de lectura",
    views: "7 lecturas",
    category: "Charters privados",
  },
  3: {
    title: "Lujo mediterráneo a bordo",
    excerpt:
      "Guía de fondeos, picnics gourmet y rituales al atardecer en el EDENROC.",
    readTime: "2 min de lectura",
    views: "6 lecturas",
    category: "Experiencias de lujo",
  },
  4: {
    title: "Celebridades a bordo de EDENROC",
    excerpt:
      "Así transformaron artistas internacionales el yate en un plató flotante.",
    date: "14 jul 2023",
    readTime: "1 min de lectura",
    views: "208 lecturas",
    likes: "5 me gusta",
    category: "Celebridades",
  },
  5: {
    title: "Qué ver en Palma de Mallorca",
    excerpt:
      "La Seu, el Palacio Real y rincones gastronómicos para navegantes.",
    date: "26 feb 2023",
    readTime: "2 min de lectura",
    views: "22 lecturas",
    likes: "5 me gusta",
    category: "Guía de viaje",
  },
  6: {
    title: "Viajar en pareja en yate",
    excerpt:
      "Relato de una pareja entre puestas de sol, calas secretas y servicio impecable.",
    date: "13 feb 2023",
    readTime: "2 min de lectura",
    views: "23 lecturas",
    likes: "11 me gusta",
    category: "Escapadas románticas",
  },
};
es.blog.hero = {
  title: "Blog - Información de primera mano",
  subtitle:
    "Historias, consejos y experiencias para disfrutar del Mediterráneo en un yate de lujo.",
};
es.blog.posts = overrideBlogPosts(es.blog.posts, esBlogOverrides);

es.footer = {
  ...es.footer,
  brandDescription:
    "Para vivir el Mediterráneo de forma única, CharterBalears ofrece charters de lujo a bordo del EDENROC con servicio totalmente personalizado.",
  quickLinksTitle: "Enlaces directos",
  quickLinks: [
    { href: "/yacht", label: "El yate EDENROC" },
    { href: "/routes", label: "Rutas y charters" },
    { href: "/services", label: "Servicios" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ],
  destinationsTitle: "Destinos",
  destinations: [
    { href: "/routes/mallorca", label: "Mallorca" },
    { href: "/routes/ibiza", label: "Ibiza" },
    { href: "/routes/menorca", label: "Menorca" },
    { href: "/routes/formentera", label: "Formentera" },
  ],
  contactTitle: "Información de contacto",
  contact: [
    { type: "phone", label: "+34 (697) 726-944", href: "tel:+34697726944" },
    {
      type: "email",
      label: "charterbalears@gmail.com",
      href: "mailto:charterbalears@gmail.com",
    },
    {
      type: "address",
      label: "MARINA PORT DE MALLORCA · Atraque A44, Port de Mallorca",
    },
  ],
  company: "SWAE Group OÜ | NIF N0531322F España | Yate EDENROC",
  legal: {
    privacy: "Política de privacidad",
    terms: "Condiciones de servicio",
  },
  copyright: "© 2024 CharterBalears. Todos los derechos reservados.",
};

es.notFound = {
  title: "Página no encontrada",
  description:
    "La página que buscas parece haber zarpado. Quizá esté disfrutando de un atardecer mediterráneo.",
  primaryCta: "Volver al inicio",
  secondaryCta: "Explorar excursiones",
  contactPrompt: "¿No encuentras lo que buscas?",
  phoneLabel: "+34 (697) 726-944",
  emailLabel: "charterbalears@gmail.com",
};

const de = cloneDeep(en);
de.meta = { label: "Deutsch", shortLabel: "DE" };
de.header = {
  ...de.header,
  nav: {
    home: "Startseite",
    tours: "Touren",
    yacht: "Die Yacht",
    blog: "Blog",
    faq: "FAQ",
  },
  actions: { cta: "Jetzt chartern" },
  language: { ariaLabel: "Sprache auswählen" },
  navigationToggle: "Navigation ein- oder ausblenden",
};

const deHeroSlideOverrides = {
  southwest: {
    title: "Tour Südwestküste",
    subtitle: "Luxuskreuzfahrt durch Mallorcas glamouröse Südwestbuchten",
    description:
      "Kreuzen Sie entlang Portals Vells, Cala Fornells und Sa Dragonera mit Stopps zum Schwimmen, Schnorcheln und Aperitif bei Sonnenuntergang.",
    price: "ab 89 € pro Gast",
    duration: "3 Stunden",
    capacity: "Bis zu 10 Gäste",
    buttonLabel: "Tour Südwesten buchen",
  },
  landmarks: {
    title: "Tour Küstenhighlights",
    subtitle: "Erleben Sie die Kathedrale von Palma und ikonische Buchten",
    description:
      "Bewundern Sie La Seu vom Meer aus und genießen Sie das kristallklare Wasser von Cala Blava, Cala Vella und Cala Pi.",
    price: "ab 95 € pro Gast",
    duration: "4 Stunden",
    capacity: "Bis zu 10 Gäste",
    buttonLabel: "Highlight-Tour buchen",
  },
  cabrera: {
    title: "Cabrera-Nationalpark Expedition",
    subtitle: "Ganztägige Auszeit zum unberührten Archipel",
    description:
      "Erreichen Sie die geschützten Cabrera-Inseln, baden Sie in kobaltblauen Buchten und halten Sie Ausschau nach Delfinen.",
    price: "ab 150 € pro Gast",
    duration: "8 Stunden",
    capacity: "Bis zu 8 Gäste",
    buttonLabel: "Cabrera buchen",
  },
};

de.heroSlider.phoneCta = "CharterBalears anrufen";
de.heroSlider.slides = de.heroSlider.slides.map((slide) => {
  const override = deHeroSlideOverrides[slide.id];
  return override ? { ...slide, ...override } : slide;
});

de.home.about = {
  ...de.home.about,
  title: "Luxus-Charter EDENROC auf Mallorca",
  lead: "EDENROC ist eine 16-Meter-Azimut-Flybridge, die italienische Handwerkskunst mit moderner Technik verbindet.",
  paragraphs: [
    "Drei elegante Kabinen, zwei stilvolle Bäder und eine maßgeschneiderte Kombüse bieten bis zu sieben Gästen höchsten Komfort.",
    "Genießen Sie Panorama-Ausblicke vom Flybridge oder feiern Sie private Anlässe im Salon.",
    "Ideal für Premium-Charter rund um Mallorca, Ibiza, Menorca und Formentera.",
  ],
  ctaLabel: "Yacht EDENROC entdecken",
  ctaAria: "Details zur Luxusyacht EDENROC ansehen",
  imageAlt:
    "Luxuriöses EDENROC-Interieur mit italienischem Design und Premium-Komfort",
};

de.home.activities = {
  ...de.home.activities,
  heading: "Exklusive Yachterlebnisse auf Mallorca",
  description:
    "Kuratiert Erlebnisse und maßgeschneiderte Momente für anspruchsvolle Reisende auf den Balearen.",
  cards: de.home.activities.cards.map((card, index) => {
    const overrides = [
      {
        title: "Unterwasser-Entdeckung & Schnorcheln",
        description:
          "Gleiten Sie mit leistungsstarken Sea-Scootern durch türkisfarbene Buchten und geführte Schnorchelspots.",
      },
      {
        title: "Premium Hochseeangeln",
        description:
          "Erleben Sie Thunfischjagden mit Profi-Equipment und einer eingespielten Crew.",
      },
      {
        title: "Private Yacht-Events",
        description:
          "Feiern Sie besondere Anlässe mit individuellem Catering, Mixology und Entertainment.",
      },
    ];
    return overrides[index] ? { ...card, ...overrides[index] } : card;
  }),
};

de.home.contact = {
  ...de.home.contact,
  heading: "Starten Sie Ihre Luxusreise auf Mallorca",
  description:
    "Kontaktieren Sie unser Charter-Team, um Ihr individuelles Erlebnis auf der EDENROC zu planen.",
  primary: {
    ...de.home.contact.primary,
    label: "+34 (697) 726-944",
    ariaLabel: "Charter telefonisch kontaktieren",
  },
  secondary: {
    ...de.home.contact.secondary,
    label: "Kontakt per E-Mail",
    ariaLabel: "E-Mail an das Charter-Team senden",
  },
};

de.tours.hero = {
  title: "Exklusive Seetouren & Yachtcharter auf Mallorca",
  subtitle: "Finden Sie Ihre perfekte Reise an Bord der EDENROC.",
};
de.tours.filters.heading = "Finden Sie Ihre ideale Tour";
de.tours.filters.type = {
  ...de.tours.filters.type,
  label: "Tourtyp",
  options: mapOptionLabels(de.tours.filters.type.options, {
    all: "Alle Tourtypen",
    standard: "Standard-Charter",
    premium: "Premium-Charter",
    business: "Business-Charter",
    active: "Aktiv-Erlebnis",
  }),
};
de.tours.filters.season = {
  ...de.tours.filters.season,
  label: "Saison",
  options: mapOptionLabels(de.tours.filters.season.options, {
    all: "Alle Saisons",
    "year-round": "Ganzjährig",
    "April-October": "April–Oktober",
    "May-September": "Mai–September",
    "March-November": "März–November",
  }),
};
de.tours.filters.duration = {
  ...de.tours.filters.duration,
  label: "Dauer",
  options: mapOptionLabels(de.tours.filters.duration.options, {
    all: "Beliebig",
    "3 hours": "3 Stunden",
    "4 hours": "4 Stunden",
    "5 hours": "5 Stunden",
    "6 hours": "6 Stunden",
    "8 hours": "8 Stunden",
  }),
};
de.tours.filters.availability = {
  ...de.tours.filters.availability,
  label: "Verfügbarkeit",
  options: mapOptionLabels(de.tours.filters.availability.options, {
    all: "Alle Touren",
    available: "Sofort verfügbar",
    unavailable: "Derzeit nicht verfügbar",
  }),
};
de.tours.labels = {
  clear: "Filter zurücksetzen",
  unavailable: "Nicht verfügbar",
  viewDetails: "Tourdetails anzeigen",
  bookNow: "Jetzt buchen",
  perPersonSuffix: "pro Gast",
  noResultsTitle: "Keine Touren gefunden",
  noResultsDescription:
    "Passen Sie die Filter an, um weitere Luxus-Erlebnisse zu sehen.",
};

const deTourOverrides = {
  southwest: {
    title: "Tour Südwestküste",
    shortDescription:
      "Panoramafahrt entlang Mallorcas Südwestküste mit Schnorchelstopps, Drinks und kuratierter Musik.",
    typeLabel: "Standard-Charter",
    seasonLabel: "Ganzjährig",
    durationLabel: "3 Stunden",
    price: "890 €",
    pricePerPerson: "89 €",
    capacityLabel: "Bis zu 10 Gäste",
    minCapacityLabel: "Mindestens 8 Gäste",
    maxCapacityLabel: "Maximal 11 Gäste",
    highlights: [
      "Küstenpanorama",
      "Schnorchelstopp",
      "Lokale Erfrischungen",
      "Zweisprachige Crew",
    ],
    fuelSurcharge: "20–40 € pro Gast",
    included: [
      "Snacks",
      "Bier & Softdrinks",
      "Kaffee & Tee",
      "Schnorchelmasken",
    ],
    extraServices: [
      { name: "Sea-Scooter", price: "50 €" },
      { name: "SUP-Board", price: "50 €" },
      { name: "Premium-Bar", price: "auf Anfrage" },
    ],
  },
  landmarks: {
    title: "Tour Küstenhighlights",
    shortDescription:
      "Kombiniert die Kathedrale von Palma mit den fotogensten Buchten des Südens.",
    typeLabel: "Standard-Charter",
    seasonLabel: "Ganzjährig",
    durationLabel: "4 Stunden",
    price: "950 €",
    pricePerPerson: "95 €",
    capacityLabel: "Bis zu 10 Gäste",
    minCapacityLabel: "Mindestens 8 Gäste",
    maxCapacityLabel: "Maximal 12 Gäste",
    highlights: [
      "Kathedralenblick",
      "Kristallklare Buchten",
      "Schnorchelausrüstung",
      "Individueller Service",
    ],
    fuelSurcharge: "20–40 € pro Gast",
    included: ["Snacks", "Softdrinks", "Kaffee & Tee", "Schnorchelmasken"],
    extraServices: [
      { name: "Sea-Scooter", price: "50 €" },
      { name: "SUP-Board", price: "50 €" },
    ],
  },
  cabrera: {
    title: "Cabrera-Nationalpark Expedition",
    shortDescription:
      "Ganztages-Ausflug zum geschützten Cabrera-Archipel mit unberührter Natur.",
    typeLabel: "Premium-Charter",
    seasonLabel: "April–Oktober",
    durationLabel: "8 Stunden",
    price: "1.200 €",
    pricePerPerson: "150 €",
    capacityLabel: "Bis zu 8 Gäste",
    minCapacityLabel: "Mindestens 6 Gäste",
    maxCapacityLabel: "Maximal 10 Gäste",
    highlights: [
      "Zugang zum Nationalpark",
      "Unberührtes Inselreich",
      "Delfinbeobachtung",
      "Gourmet-Lunch an Bord",
    ],
    fuelSurcharge: "30–50 € pro Gast",
    included: [
      "Mittagessen an Bord",
      "Snacks",
      "Bier & Wein",
      "Softdrinks",
      "Kaffee & Tee",
      "Schnorchelausrüstung",
    ],
    extraServices: [
      { name: "Sea-Scooter", price: "60 €" },
      { name: "SUP-Board", price: "60 €" },
      { name: "Fotoshooting", price: "80 €" },
    ],
  },
};
de.tours.list = overrideTourList(de.tours.list, deTourOverrides);

de.tourDetail = {
  ...de.tourDetail,
  breadcrumbRoot: "Luxus-Yachttouren",
  galleryAria: "Tourgalerie",
  loading: "Wird geladen...",
  nextButton: "Weiter",
  nextButtonAria: "Nächstes Bild",
  photoLabel: "Foto",
  photoOf: "von",
  perPersonSuffix: "pro Gast",
  availability: {
    available: "Zur Buchung verfügbar",
    unavailable: "Derzeit nicht verfügbar",
  },
  features: {
    duration: "Tourdauer",
    season: "Beste Reisezeit",
    departure: "Abfahrtshafen",
  },
  highlightsTitle: "Exklusive Highlights",
  actions: {
    bookByPhone: "Luxustour telefonisch buchen",
    whatsapp: "Nachricht via WhatsApp",
    unavailableNotice: "Diese Tour ist momentan nicht verfügbar",
    viewAvailableTours: "Verfügbare Touren ansehen",
  },
  contact: {
    title: "Fragen zu dieser Tour?",
    description:
      "Unser Charter-Concierge hilft Ihnen bei der Planung des perfekten Mallorca-Erlebnisses.",
    phoneLabel: "+34 (697) 726-944",
    emailLabel: "charterbalears@gmail.com",
  },
  notFound: {
    title: "Tour nicht gefunden",
    description: "Die angefragte Erfahrung ist derzeit nicht verfügbar.",
    cta: "Zurück zu den Luxustouren",
  },
};

de.faq.hero = {
  title: "Häufig gestellte Fragen",
  subtitle:
    "Alles, was Sie über unsere Luxusyacht-Charter auf Mallorca wissen müssen.",
};
de.faq.intro = {
  title: "Beliebte Fragen zum Charter der EDENROC",
  description:
    "Antworten zu Leistungen, Buchung, Bord-Erlebnis und Reisevorbereitung.",
};
de.faq.items = [
  {
    question: "Was ist im Charterpreis enthalten?",
    answer:
      "Der Preis umfasst Yachtmiete mit kompletter Ausstattung, professionelle Crew, Treibstoff für die geplante Route, Versicherung und Hafenabgaben. Zusatzleistungen wie Catering oder spezielle Aktivitäten sind optional buchbar.",
  },
  {
    question: "Brauche ich Segelerfahrung?",
    answer:
      "Nein. Unsere Crew übernimmt Navigation und Manöver. Nur Bareboat-Charter erfordern einen entsprechenden Schein und Erfahrung.",
  },
  {
    question: "Wie lautet die Stornierungsregelung?",
    answer:
      "Mehr als 30 Tage vorher: volle Rückerstattung. 15–29 Tage: 50%. Weniger als 15 Tage: keine Rückerstattung, aber Verschiebung nach Verfügbarkeit möglich. Wetterbedingte Absagen werden vollständig erstattet.",
  },
  {
    question: "Wie viele Personen können an Bord?",
    answer:
      "Die EDENROC bietet Platz für bis zu 10 Gäste bei Tagestörns und bis zu 7 Gäste über Nacht in drei Kabinen mit Ensuite-Bädern.",
  },
  {
    question: "Was sollte ich zur Angeltour mitbringen?",
    answer:
      "Wir stellen Angelgerät, Lizenzen und Sicherheitsausrüstung. Empfohlen sind Sonnenschutz, Sonnenbrille, rutschfeste Schuhe, leichte Jacke, Kamera und persönliche Medikamente. Reisekrankheitsmittel bei Bedarf mitbringen.",
  },
  {
    question: "Dürfen Kinder mitfahren?",
    answer:
      "Ja, wir haben Rettungswesten für alle Altersgruppen und passen Aktivitäten an. Kinder unter 12 Jahren benötigen die Aufsicht eines Erwachsenen. Sicherheitsbriefing ist verpflichtend.",
  },
  {
    question: "Was passiert bei schlechtem Wetter?",
    answer:
      "Wir beobachten die Wetterlage fortlaufend. Touren können angepasst oder verschoben werden. Bei wetterbedingter Absage erstatten wir vollständig.",
  },
  {
    question: "Sind Speisen und Getränke inklusive?",
    answer:
      "Erfrischungen sind inkludiert. Individuelles Catering – von Snacks bis Gourmet-Menüs – arrangieren wir gern. Eigene Getränke dürfen mitgebracht werden.",
  },
  {
    question: "Können wir die Route anpassen?",
    answer:
      "Ja, wir erstellen individuelle Routen gemäß Ihren Wünschen hinsichtlich Buchten, Gastronomie, Aktivitäten und Tempo.",
  },
  {
    question: "Welche Zahlungsmethoden gibt es?",
    answer:
      "Akzeptiert werden Banküberweisung, Visa, MasterCard und Bargeld (EUR). 30 % Anzahlung sichern die Buchung, Restzahlung 14 Tage vor Abfahrt. Kurzfristige Buchungen können Vollzahlung erfordern.",
  },
];

de.bigFish.hero = {
  title: "Big Fish Mallorca – Fangen Sie Ihren Traumfisch",
  subtitle: "BIG-GAME-FISHING auf einer komfortablen Luxusyacht",
};
de.bigFish.intro = {
  title: "Was ist Big-Game-Fishing?",
  lead: "Das aufregendste Angelabenteuer der Welt – ein echter Kampf mit Giganten des Meeres.",
  paragraphs: [
    "Stellen Sie sich vor, ein 150-kg-Thunfisch schnappt nach dem Köder – Adrenalin pur und Erinnerungen fürs Leben.",
    "In den balearischen Gewässern leben Blauflossenthunfische bis 400 kg und Schwertfische bis 4,5 Meter – ein Paradies für Angler und Adrenalinliebhaber.",
  ],
  imageAlt: "Hochseeangeln im Mittelmeer mit einem großen Thunfisch an Deck",
};
de.bigFish.advantages = {
  ...de.bigFish.advantages,
  title: "Warum unsere Big-Game-Tour?",
  items: [
    {
      title: "Professionelles Team",
      description:
        "Erfahrene Crew mit Fokus auf Sicherheit, Taktik und unvergessliche Fänge.",
    },
    {
      title: "Komfortable Yacht",
      description:
        "Entspannen Sie in eleganten Kabinen oder im schattigen Deckbereich.",
    },
    {
      title: "Individueller Service",
      description:
        "Route, Zeiten und Details werden im Voraus nach Ihren Wünschen geplant.",
    },
    {
      title: "Premium-Ausrüstung",
      description:
        "Turnierfähiges Gerät – ideal für Einsteiger und Profis gleichermaßen.",
    },
  ],
};
de.bigFish.packages = {
  ...de.bigFish.packages,
  title: "Angelpakete",
  items: [
    {
      name: "Big Game",
      price: "1.300 €",
      details: [
        "Ziel: Riesenthun (100–200 kg)",
        "Abfahrt: 08:00",
        "Rückkehr: 16:00",
      ],
      highlight: "Ultimatives Hochsee-Erlebnis",
    },
    {
      name: "Trolling",
      price: "1.300 €",
      details: [
        "Ziel: Mittlerer Thun (6–10 kg)",
        "Abfahrt: 08:00",
        "Rückkehr: 16:00",
      ],
      highlight: "Klassisches Schleppen",
    },
    {
      name: "Halbtags",
      price: "750 €",
      details: ["Ziel: Fische bis 5 kg", "Start: 10:00", "Rückkehr: 14:00"],
      highlight: "Flexible Zeiteinteilung",
    },
  ],
  discountNote:
    "Spezialangebot: 20 % Rabatt bei Mehrtagestouren oder Stammgästen.",
};
de.bigFish.steps = {
  ...de.bigFish.steps,
  title: "So buchen Sie Ihr Angelabenteuer",
  items: [
    {
      number: "01",
      title: "Kontakt aufnehmen",
      description:
        "Melden Sie sich per Telefon, Nachricht oder E-Mail mit Wunschdaten und Zielarten.",
    },
    {
      number: "02",
      title: "Details abstimmen",
      description:
        "Wir klären Ihre Wünsche und sichern die Buchung mit einer Anzahlung.",
    },
    {
      number: "03",
      title: "Wetterfreigabe",
      description:
        "48–72 Stunden vorher bestätigen wir die Tour anhand der Wetterlage.",
    },
    {
      number: "04",
      title: "Restzahlung & Abfahrt",
      description:
        "Begleichen Sie den Restbetrag und treffen Sie die Crew zur großen Ausfahrt.",
    },
  ],
};
de.bigFish.cta = {
  ...de.bigFish.cta,
  title: "Nicht träumen – auf zur Big-Game-Tour!",
  description:
    "Buchen Sie mit uns und erleben Sie spektakuläre Offshore-Action.",
  primary: "Angeltrip buchen",
  secondary: "Information anfordern",
};

const deBlogOverrides = {
  1: {
    title: "Yachtcharter Mallorca",
    excerpt:
      "Planen Sie Ihre Balearenreise mit Tipps zu Routen, Kulinarik und geheimen Ankerplätzen.",
    readTime: "3 Min. Lesezeit",
    views: "3 Aufrufe",
    category: "Luxus-Charter",
  },
  2: {
    title: "Privater Yachtcharter Mallorca",
    excerpt:
      "Warum ein Privat-Charter die ultimative Auszeit ist – individuelle Routen, aufmerksame Crew, maximale Privatsphäre.",
    readTime: "2 Min. Lesezeit",
    views: "7 Aufrufe",
    category: "Private Charter",
  },
  3: {
    title: "Mediterraner Luxus an Bord",
    excerpt:
      "Die besten Ankerplätze, Gourmet-Picknicks und Sunset-Rituale auf der EDENROC.",
    readTime: "2 Min. Lesezeit",
    views: "6 Aufrufe",
    category: "Luxuserlebnis",
  },
  4: {
    title: "Prominente an Bord der EDENROC",
    excerpt:
      "So verwandelten internationale Künstler die Yacht in ein schwimmendes Filmset.",
    date: "14. Jul 2023",
    readTime: "1 Min. Lesezeit",
    views: "208 Aufrufe",
    likes: "5 Likes",
    category: "Prominente",
  },
  5: {
    title: "Sehenswürdigkeiten in Palma de Mallorca",
    excerpt:
      "La Seu, der Königspalast und kulinarische Geheimtipps für Yachtreisende.",
    date: "26. Feb 2023",
    readTime: "2 Min. Lesezeit",
    views: "22 Aufrufe",
    likes: "5 Likes",
    category: "Reiseführer",
  },
  6: {
    title: "Mit dem Partner auf Yachtreise",
    excerpt:
      "Eine Liebesgeschichte voller Sonnenuntergänge, versteckter Buchten und perfektem Service.",
    date: "13. Feb 2023",
    readTime: "2 Min. Lesezeit",
    views: "23 Aufrufe",
    likes: "11 Likes",
    category: "Romantik-Auszeit",
  },
};
de.blog.hero = {
  title: "Blog – Insiderinformationen",
  subtitle:
    "Stories, Tipps und Expertenwissen für luxuriöse Yachtabenteuer im Mittelmeer.",
};
de.blog.posts = overrideBlogPosts(de.blog.posts, deBlogOverrides);

de.footer = {
  ...de.footer,
  brandDescription:
    "Für ein einzigartiges Mittelmeer-Erlebnis bietet CharterBalears luxuriöse Charterfahrten auf der EDENROC mit maßgeschneidertem Service.",
  quickLinksTitle: "Direkte Links",
  quickLinks: [
    { href: "/yacht", label: "Die Yacht EDENROC" },
    { href: "/routes", label: "Routen & Charter" },
    { href: "/services", label: "Leistungen" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ],
  destinationsTitle: "Ziele",
  destinations: [
    { href: "/routes/mallorca", label: "Mallorca" },
    { href: "/routes/ibiza", label: "Ibiza" },
    { href: "/routes/menorca", label: "Menorca" },
    { href: "/routes/formentera", label: "Formentera" },
  ],
  contactTitle: "Kontaktinformationen",
  contact: [
    { type: "phone", label: "+34 (697) 726-944", href: "tel:+34697726944" },
    {
      type: "email",
      label: "charterbalears@gmail.com",
      href: "mailto:charterbalears@gmail.com",
    },
    {
      type: "address",
      label: "MARINA PORT DE MALLORCA · Liegeplatz A44, Port de Mallorca",
    },
  ],
  company: "SWAE Group OÜ | NIF N0531322F Spanien | Yacht EDENROC",
  legal: {
    privacy: "Datenschutz",
    terms: "Allgemeine Bedingungen",
  },
  copyright: "© 2024 CharterBalears. Alle Rechte vorbehalten.",
};

de.notFound = {
  title: "Seite nicht gefunden",
  description:
    "Die gesuchte Seite scheint abgelegt zu haben. Vielleicht genießt sie gerade den Mittelmeer-Sonnenuntergang.",
  primaryCta: "Zur Startseite",
  secondaryCta: "Unsere Touren entdecken",
  contactPrompt: "Nicht fündig geworden?",
  phoneLabel: "+34 (697) 726-944",
  emailLabel: "charterbalears@gmail.com",
};

export const translations = { en, es, de };
