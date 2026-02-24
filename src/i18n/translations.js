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
      day_charter: "Day charter",
      yacht: "The Yacht",
      blog: "Blog",
      faq: "FAQ",
    },
    actions: { cta: "Charter Now" },
    language: { ariaLabel: "Select language" },
    navigationToggle: "Toggle navigation",
    promotion: "SPECIAL OFFER! Get 15% discount on all tours this week!",
    promotionLinkText: "Book Now",
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
        capacity: "Up to 11 guests",
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
        capacity: "Up to 11 guests",
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
  day_tour: {
    hero: {
      title: "Day Tour Experience",
      subtitle: "8-Hour & 4-Hour Luxury Yacht Tours",
    },
    intro: {
      title: "You can organize any holiday on EDENROC yacht to fit any taste:",
      activities: {
        party: {
          title: "A Party",
          description:
            "Hire the boat with a group of friends with your favorite drinks and food, hot dancing and an endless fun.",
        },
        family: {
          title: "Family Bonding",
          description:
            "Children will be delighted to swim in the open sea while love birds enjoy the time spent in private.",
        },
        fishing: {
          title: "Leisure for a Real Man",
          description:
            "Professional gear, a huge catch, and your best friends with whom you can share a storm of emotions!",
        },
      },
      note: "We always meet our customers' needs and try to embrace all your wishes. Therefore, each order is nearly always individual.",
    },
    pricing: {
      title: "Pricing Information",
      subtitle: "In general, our prices are as follows:",
      charter: {
        title: "Charter Pricing",
        table: {
          headers: ["Period", "Full Day (8 hours)", "Half Day (4 hours)"],
          rows: [
            ["July, August", "2 200€", "1 500€"],
            ["June, September", "2 000€", "1 400€"],
            ["May, October", "1 800€", "1 100€"],
            ["November - April", "1 500€", "1 000€"],
          ],
        },
      },
      fishing: {
        title: "Fishing Pricing",
        table: {
          headers: ["Duration", "Price"],
          rows: [
            ["Full Day (8 hours)", "1 500€"],
            ["Half Day (4 hours)", "1 000€"],
          ],
        },
      },
    },
    gallery: {
      title: "Day Tour Experience",
      images: [
        {
          alt: "Yacht party experience",
          src: "/photo/family-charter.jpeg",
        },
        {
          alt: "Family day on yacht",
          src: "/photo/birthday-sea.jpeg",
        },
        {
          alt: "Fishing adventure",
          src: "/photo/WhatsApp Image 2025-11-14 at 15.42.18.jpeg",
        },
      ],
    },
    cta: {
      title: "Book Your Day Tour",
      description:
        "Ready to create unforgettable memories? Contact us to book your perfect day tour on EDENROC yacht.",
      buttons: {
        contact: "Contact Us",
        copyEmail: "Copy Email",
      },
      emailCopied: "Email copied!",
    },
  },
  about: {
    hero: {
      title: "Motor Yacht EDENROC - Azimut 50",
      subtitle:
        "16-metre luxury flybridge yacht for premium experiences in the Balearic Islands",
    },
    contentBlocks: [
      {
        type: "text-first",
        title: "Elegant Design and Excellence",
        description:
          "Azimut 50 EDENROC embodies Italian style and engineering mastery. With a length of 15.54 metres and a beam of 4.55 metres, this yacht delivers the perfect blend of comfort and performance.",
        image: "/new 05/charter mallorca.jpg",
        imageAlt: "Side view of the Azimut 50 EDENROC yacht",
      },
      {
        type: "image-first",
        title: "Spacious Deck for Leisure",
        description:
          "The generous cockpit with plush sofas and a dining area is perfect for hosting guests. The integrated galley module and bar make unforgettable celebrations on the water effortless.",
        image: "/gallery/3.jpg",
        imageAlt: "Spacious deck of the Azimut 50 yacht",
      },
      {
        type: "text-first",
        title: "Power and Speed",
        description:
          "Twin 715 hp engines deliver a cruising speed of 26 knots and a top speed of up to 32 knots. The 2,200-litre fuel tank supports extended voyages.",
        image: "/gallery/2.jpg",
        imageAlt: "Engines of the Azimut 50 yacht",
      },
      {
        type: "image-first",
        title: "Luxurious Interior",
        description:
          "The interior is decorated in a modern style using premium materials. The three comfortable cabins can accommodate up to 11 guests for an unforgettable stay. There are two toilets on board for your convenience.",
        image: "/gallery/10.jpg",
        imageAlt: "Luxurious interior of the Azimut 50 yacht",
      },
      {
        type: "text-first",
        title: "Innovative Technologies",
        description:
          "A state-of-the-art navigation suite, climate control in every space and a stabilisation system ensure maximum comfort and safety while cruising.",
        image: "/gallery/spisok1.jpg",
        imageAlt: "Technological equipment aboard the yacht",
      },
      {
        type: "image-first",
        title: "Water Entertainment",
        description:
          "The yacht is fully equipped for water activities: a bathing platform, a ramp for launching into the water and a spacious toy storage are ready for use. You will also have a swimming board at your disposal.",
        image: "/sea scooter/sea scooter infinity (1).jpg",
        imageAlt: "Water entertainment from the yacht",
      },
    ],
    specs: {
      title: "Technical Specifications",
      items: [
        { label: "Model", value: "Azimut 50 Flybridge" },
        { label: "Length", value: "15.54 m" },
        { label: "Beam", value: "4.55 m" },
        { label: "Engines", value: "2 × 705 hp" },
        { label: "Convenience", value: "2 toilets" },
        { label: "Maximum speed", value: "32 knots" },
        { label: "Fuel capacity", value: "2200 L" },
        { label: "Fresh water capacity", value: "500 L" },
        { label: "Passenger capacity", value: "12 guests" },
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
        capacity: "11 guests",
        capacityLabel: "Up to 11 guests",
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
              "Dragon-shaped Natural Park delivers a striking finale with its towering cliffs that rise sharply from the ocean, resembling the spine of a slumbering beast. The island’s unique landscape is home to resilient wildlife, including cliff-nesting puffins with vibrant beaks, feral goats known as 'Dragon Goats' with amber eyes, and color-shifting geckos hiding among the rocks. The harsh, windswept terrain supports hardy vegetation such as the legendary 'Dragon’s Tears' flowers—red poppies blooming from volcanic cracks—along with dense cushions of moss and creeping juniper that cling to the cliffs, creating a dramatic and untouched natural masterpiece.",
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
        capacity: "11 guests",
        capacityLabel: "Up to 11 guests",
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
        maxCapacityLabel: "Maximum 11 guests",
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
              "The Cabrera Archipelago National Park is a pristine refuge for Mediterranean wildlife. Its waters host dense meadows of Posidonia oceanica, a seagrass endemic to the Mediterranean that is crucial for oxygen production and carbon capture. The rocky coastline is home to colonies of the endemic Balearic lizard (Podarcis lilfordi), which is found nowhere else in the world and has evolved unique subspecies on different islets. The skies above the archipelago are patrolled by the majestic Eleonora's falcon (Falco eleonorae), which nests on the cliffs, alongside Audouin's gulls and cormorants. The terrestrial flora is adapted to harsh, windy conditions, featuring wild olive trees (Olea europaea var. sylvestris), mastic shrubs (Pistacia lentiscus), and abundant wild fennel, which carpets the main island with its fragrant yellow blooms in late summer.",
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
      {
        id: 4,
        slug: "sunset-cruise",
        image: "/sunset/bellver1.jpg",
        imageAlt: "Sunset cruise yacht tour Mallorca",
        title: "Sunset Cruise to Cala Major",
        shortDescription:
          "Romantic evening cruise along Palma coastline with sunset views and illuminated Bellver Castle",
        type: "standard",
        typeLabel: "Standard charter",
        season: "year-round",
        seasonLabel: "Year-round",
        duration: "2.5 hours",
        durationLabel: "2.5 hours",
        price: "€750",
        pricePerPerson: "€75",
        capacity: "12 guests",
        capacityLabel: "Up to 12 guests",
        minCapacityLabel: "Minimum 6 guests",
        maxCapacityLabel: "Maximum 12 guests",
        available: true,
        highlights: [
          "Panoramic sunset views",
          "Castell de Bellver from sea",
          "Champagne & tapas",
          "Relaxing evening atmosphere",
        ],
        departure: "Real Club Náutico de Palma",
        fuelSurcharge: "€15-30 per person",
        included: [
          "Spanish tapas (jamón, cheese, olives)",
          "Cava (Spanish sparkling wine)",
          "Soft drinks & water",
          "Light blankets",
        ],
        extraServices: [
          { name: "Bottle of premium cava", price: "€40" },
          { name: "Romantic photo package", price: "€30" },
        ],
        coves: [
          {
            id: "bellver",
            name: "Castell de Bellver (Sea View)",
            description:
              "Unique 14th-century Gothic circular fortress overlooking Palma. From the sea you get an unusual and most photogenic angle of this city symbol. Evening lighting illuminates the castle walls, creating a magical silhouette against the darkening sky. The castle's history connected to the Kings of Majorca adds atmosphere to the moment.",
            highlights: [
              "Gothic castle",
              "Historic symbol",
              "Night illumination",
            ],
            visitType: "Scenic pass by & photo stop",
            images: ["/sunset/bellver1.jpg", "/sunset/bellver2.jpg"],
          },
          {
            id: "calaMajor",
            name: "Cala Major & Illetes Coast",
            description:
              "Upscale area of Palma with luxury hotels and villas. The coastline here features a series of small sandy coves (caletas) and headlands. The cruise passes close to shore, allowing you to admire the elegant architecture and enjoy the calm atmosphere of the exclusive coastline at sunset. The water takes on golden and pink hues.",
            highlights: [
              "Upscale neighborhood",
              "Sandy coves",
              "Golden hour on water",
            ],
            visitType: "Cruising along coast",
            images: ["/sunset/calamajor1.png"],
          },
          {
            id: "sunsetPoint",
            name: "Western Headland & Sunset Spot",
            description:
              "The most spectacular part of the tour. The captain selects the perfect spot in open water west of Palma with unobstructed horizon views. Guests enjoy breathtaking spectacle as the sun slowly dips into Mediterranean waters, painting the sky orange, pink and purple. Cava and snacks are served. After sunset, watch city lights and Bellver Castle begin to twinkle in the dusk.",
            highlights: [
              "Panoramic sunset",
              "Photo session",
              "Romantic atmosphere",
            ],
            visitType: "Sunset stop - 40 minutes",
            images: ["/sunset/sunset1.jpg", "/sunset/sunset2.jpg"],
          },
        ],
      },
      {
        id: 5,
        slug: "edenroc-private-charter",
        image: "/Southeast/4CalaPi/444.jpg",
        imageAlt: "Luxury private yacht charter EDENROC",
        title: "EDENROC Private Day Experience",
        shortDescription:
          "Private luxury yacht charter: create your perfect day on the water with complete freedom of choice",
        type: "premium",
        typeLabel: "Premium charter",
        season: "year-round",
        seasonLabel: "Year-round",
        duration: "4 or 8 hours",
        durationLabel: "4 or 8 hours",
        price: "€1000 - €2200",
        pricePerPerson: "Custom",
        capacity: "10 people",
        capacityLabel: "Up to 10 guests",
        minCapacityLabel: "Minimum 1 guest",
        maxCapacityLabel: "Maximum 10 guests",
        available: true,
        highlights: [
          "Private charter for your group only",
          "Fully customizable itinerary",
          "Professional fishing gear available",
          "Perfect for parties or family bonding",
        ],
        departure: "Real Club Náutico de Palma / Port de Palma",
        fuelSurcharge: "Included in price",
        included: [
          "Private captain & host",
          "Snorkeling equipment",
          "Stand Up Paddle (SUP)",
          "Onboard fridge for your drinks",
          "Bluetooth speaker",
        ],
        extraServices: [
          { name: "Full catering (lunch)", price: "From €30/person" },
          { name: "Premium bar package", price: "Upon request" },
          { name: "Professional fishing gear", price: "€100" },
          { name: "Seascooter rental", price: "€50" },
        ],
        coves: [
          {
            id: "yourChoice",
            name: "Your Choice of Destination",
            description:
              "This tour is designed for those who want to spend time on the water exactly as they dream. Head southwest to the island of Dragonera, explore the pristine coves of Cabrera National Park, or throw an unforgettable party with friends stopping at the first scenic bay you find. Everything depends only on your wishes!",
            highlights: [
              "Complete freedom of choice",
              "Private space",
              "Personalized approach",
            ],
            visitType: "Custom: anchor, swim, party or fish",
            images: ["/edenroc/custom1.jpg", "/edenroc/custom2.jpg"],
          },
        ],
      },
      {
        id: 6,
        slug: "cabrera-fishing-expedition",
        image: "/kabrera/111.png",
        imageAlt: "Fishing expedition to Cabrera National Park",
        title: "Cabrera Fishing Expedition: Journey to Protected Waters",
        shortDescription:
          "Exclusive sport fishing tour combining adventure fishing en route to Cabrera with stunning views of the National Park",
        type: "premium",
        typeLabel: "Premium fishing charter",
        season: "April-October",
        seasonLabel: "April–October",
        duration: "8 hours",
        durationLabel: "8 hours",
        price: "€1400",
        pricePerPerson: "Custom",
        capacity: "8 people",
        capacityLabel: "Up to 8 guests",
        minCapacityLabel: "Minimum 4 guests",
        maxCapacityLabel: "Maximum 8 guests",
        available: true,
        highlights: [
          "Trolling for tuna & bonito",
          "Sightseeing at Cabrera Archipelago",
          "Deep sea jigging",
          "Dolphin & whale watching",
        ],
        departure: "Port de Palma",
        fuelSurcharge: "Included in price",
        included: [
          "Professional captain & fishing guide",
          "Premium fishing gear (rods, reels, lures)",
          "Live bait",
          "Fishing licenses",
          "Soft drinks & water",
          "Light snacks",
          "Cooler for your catch",
        ],
        extraServices: [
          { name: "Full catering (lunch)", price: "From €35/person" },
          { name: "Premium bar package", price: "Upon request" },
          { name: "Professional photos", price: "€80" },
          { name: "Fish cleaning & vacuum packing", price: "€30" },
        ],
        coves: [
          {
            id: "morning-fishing",
            name: "Morning Fishing off Southeast Coast",
            description:
              "We depart early morning and spend the first 2-3 hours fishing en route to Cabrera, near the Mallorcan coast. Target species: bonito, albacore, Atlantic bonito, leerfish. Trolling is the main technique as we search for active pelagic predators near Cap de ses Salines and the Conejera islets.",
            highlights: [
              "Prime morning fishing",
              "Trolling for pelagic fish",
              "Early bird advantage",
            ],
            visitType: "Fishing session - 2-3 hours",
            images: ["/kabrera/11.png"],
          },
          {
            id: "park-approach",
            name: "Approach to Cabrera National Park",
            description:
              "As we approach the National Park boundaries (approx. 1 nautical mile out), we reel in the lines and begin the navigation phase. Your captain will point out the park boundaries. You can observe dolphins, sea turtles, and even whales (in season) as we slowly circle the main island at a respectful distance, admiring Cabrera Castle, rocky coves, and incredible water colors.",
            highlights: [
              "Respectful park observation",
              "Wildlife spotting",
              "Photo opportunities",
            ],
            visitType: "Scenic navigation & wildlife watching - 1 hour",
            images: ["/kabrera/111.png"],
          },
          {
            id: "buffer-zone",
            name: "Fishing in the 'Buffer Zone' on Return",
            description:
              "After exploring the archipelago and exiting the restricted zone, we head to promising spots north or east of Cabrera. Here depths reach 70-100 meters. Tactics: deep jigging for large groupers, scorpionfish, and rockfish; or live bait fishing if we have small fish from the morning session. These waters are less pressured than coastal areas.",
            highlights: [
              "Deep water jigging",
              "Unpressured waters",
              "Potential for unique catch",
            ],
            visitType: "Deep sea fishing - 1.5-2 hours",
            images: ["/kabrera/1.png"],
          },
          {
            id: "evening-fishing",
            name: "Evening Fishing along Mallorca Coast",
            description:
              "On our way back to Palma, we approach the scenic southeast coastline. Fishing spots: rocky areas near Cap de Cala Figuera, Punta de na Blanca. Technique: spinning or jigging with pilkers near the cliffs. As predators often come closer to shore at day's end, this is a relaxing yet active finale with beautiful views of coves like Cala Pi from the sea.",
            highlights: ["Coastal jigging", "Sunset fishing", "Scenic finale"],
            visitType: "Coastal fishing - 1.5 hours",
            images: ["/kabrera/1111.png"],
          },
        ],
      },
      {
        id: 7,
        slug: "southwest-trolling",
        image: "/fishing/southwest-1.jpg",
        imageAlt: "Sport fishing trolling off Southwest Mallorca",
        title: "Southwest Trolling Tour: From Headlands to Open Sea",
        shortDescription:
          "Active trolling tour along the dramatic southwest coastline, targeting large pelagic fish at deep drop-offs and open water",
        type: "premium",
        typeLabel: "Premium fishing charter",
        season: "April-October",
        seasonLabel: "April–October",
        duration: "6 hours",
        durationLabel: "6 hours",
        price: "€1200",
        pricePerPerson: "Custom",
        capacity: "8 people",
        capacityLabel: "Up to 8 guests",
        minCapacityLabel: "Minimum 4 guests",
        maxCapacityLabel: "Maximum 8 guests",
        available: true,
        highlights: [
          "Trolling for tuna & bonito",
          "Deep drop-off fishing",
          "Jigging near cliffs",
          "Dramatic coastal scenery",
        ],
        departure: "Real Club Náutico de Palma",
        fuelSurcharge: "Included in price",
        included: [
          "Professional captain & fishing guide",
          "Premium fishing gear (rods, reels, lures)",
          "Live bait",
          "Fishing licenses",
          "Soft drinks & water",
          "Light snacks",
        ],
        extraServices: [
          { name: "Full catering (lunch)", price: "From €35/person" },
          { name: "Premium bar package", price: "Upon request" },
          { name: "Professional photos", price: "€80" },
        ],
        coves: [
          {
            id: "warmup",
            name: "Warm-up: Fishing off Sa Porrassa & Cala Viñas",
            description:
              "We depart early morning and begin fishing at the deep drop-offs between Palma Nova and Cala Viñas headland. Tactics: slow trolling at medium distance from the cliffs, using shallow-diving lures and feathers. The depth increases sharply here, attracting predators. Good chance for horse mackerel or small tuna to use later as live bait.",
            highlights: [
              "Morning warm-up",
              "First strikes",
              "Potential live bait",
            ],
            visitType: "Trolling session - 1 hour",
            images: ["/fishing/southwest-warmup.jpg"],
          },
          {
            id: "main-event",
            name: "Main Event: Deep Waters off Cap de Cala Figuera",
            description:
              "We sail past beautiful Cala Portals Vells without entering. Our target is open sea and deep waters at the headland south of it - a key point. Tactics: active trolling with 2-4 rods, changing lures by depth (deep-diving lures, devons, feathers). We use fishfinder to locate depth changes and fish schools. This is the 'highway' for pelagic fish moving along the coast.",
            highlights: [
              "Prime trolling grounds",
              "Depth change hunting",
              "Best trophy chances",
            ],
            visitType: "Intensive trolling - 1.5 hours",
            images: ["/fishing/southwest-main.jpg"],
          },
          {
            id: "reserve-edge",
            name: "Fishing at Marine Reserve Edge (Malgrats Islands)",
            description:
              "Fishing is strictly prohibited in the Malgrats marine reserve. We navigate around its outer boundary at a respectful distance, fishing just outside the marker buoys. Fish often gather at reserve edges, attracted by abundant food. Your captain knows exactly where the legal boundary lies.",
            highlights: [
              "Legal boundary fishing",
              "Reserve edge hotspot",
              "Responsible angling",
            ],
            visitType: "Reserve edge trolling - 1 hour",
            images: ["/6.png"],
          },
          {
            id: "open-water",
            name: "Open Sea & Return along Cala Fornells Coast",
            description:
              "We head further offshore into deeper waters, make a wide loop. On return, we approach the coast near Cala Fornells for a change of tactics. Deep water: trolling or vertical jigging at a discovered bank. Near Fornells coast: switch to jigging or live bait fishing near rocky sections targeting groupers. This combination increases catch diversity.",
            highlights: [
              "Offshore exploration",
              "Tactic switching",
              "Grouper fishing",
            ],
            visitType: "Mixed technique fishing - 1.5 hours",
            images: ["/fishing/southwest-offshore.jpg"],
          },
          {
            id: "final-cast",
            name: "Final Cast along the Cliffs",
            description:
              "Moving back to Palma, but closer to shore along the cliff line between Fornells and Portals Vells. Tactics: short stops at protruding headlands for spin casting. Quick casts, active search for predators near the rocks. A relaxing finale after long trolling sessions, with chance for a 'dessert' catch of a few groupers.",
            highlights: [
              "Cliffside casting",
              "Relaxed finale",
              "Coastal scenery",
            ],
            visitType: "Coastal casting - 1 hour",
            images: ["/fishing/southwest-final.jpg"],
          },
        ],
      },
      {
        id: 8,
        slug: "southeast-legends",
        image: "/fishing/southeast-1.jpg",
        imageAlt: "Sport fishing along Southeast Mallorca coastline",
        title: "Southeast Legends: Fishing Tour",
        shortDescription:
          "A fishing adventure along Mallorca's most beautiful southeast coast, targeting diverse species from deep cliffs to coastal waters",
        type: "standard",
        typeLabel: "Standard fishing charter",
        season: "year-round",
        seasonLabel: "Year-round",
        duration: "6 hours",
        durationLabel: "6 hours",
        price: "€1100",
        pricePerPerson: "Custom",
        capacity: "8 people",
        capacityLabel: "Up to 8 guests",
        minCapacityLabel: "Minimum 4 guests",
        maxCapacityLabel: "Maximum 8 guests",
        available: true,
        highlights: [
          "Fishing at La Seu Cathedral",
          "Cliffside jigging",
          "Cala Pi fishing",
          "Diverse coastal species",
        ],
        departure: "Port de Palma",
        fuelSurcharge: "Included in price",
        included: [
          "Professional captain & fishing guide",
          "Premium fishing gear (rods, reels, lures)",
          "Live bait",
          "Fishing licenses",
          "Soft drinks & water",
          "Light snacks",
        ],
        extraServices: [
          { name: "Full catering (lunch)", price: "From €35/person" },
          { name: "Premium bar package", price: "Upon request" },
          { name: "Professional photos", price: "€80" },
        ],
        coves: [
          {
            id: "cathedral",
            name: "Start: Fishing at La Seu Cathedral Walls",
            description:
              "We depart from port and make our first stop at a respectful distance from the cathedral. The depths and rocky seabed around its foundations, extending into the water, are favorite spots for groupers and other predators. Tactics: bottom fishing or spinning (pilkers, soft lures). The view of the majestic cathedral from the sea adds incredible atmosphere.",
            highlights: ["Iconic start", "Cathedral view", "Urban fishing"],
            visitType: "Fishing stop - 45 minutes",
            images: ["/Southeast/1LaSeu/22.png"],
          },
          {
            id: "cala-blava",
            name: "Fishing at Cala Blava Approaches",
            description:
              "We sail past picturesque Cala Blava. Instead of entering the cove, we fish the rocky headlands and the cove entrance. Tactics: cliffs and underwater grottos are ideal fish shelters. Use spinning tackle for fishing in crevices or try bottom live bait fishing. High concentration of active predatory fish due to complex terrain and clear water.",
            highlights: [
              "Rocky headlands",
              "Underwater grottos",
              "Predator territory",
            ],
            visitType: "Fishing stop - 45 minutes",
            images: ["/fishing/southeast-blava.jpg"],
          },
          {
            id: "cala-vella",
            name: "Fishing Approaches to Cala Vella & Cala D'Or",
            description:
              "We cruise along the Cala d'Or coastline. While Cala Vella's sandy beach isn't productive, the rocky sections between coves are excellent spots. Tactics: several short stops at protruding sea cliffs and reefs. Light bottom tackle or vertical jigging works well here as we fish natural 'feeding tables' where fish search for food.",
            highlights: [
              "Reef fishing",
              "Multiple stop locations",
              "Active searching",
            ],
            visitType: "Multiple fishing stops - 1 hour",
            images: ["/fishing/southeast-vella.jpg"],
          },
          {
            id: "cala-pi",
            name: "Main Event: Fishing at Cala Pi",
            description:
              "The tour's climax. The narrow, fjord-like Cala Pi is a natural fish concentrator. We fish at the cove entrance and along its towering rocky walls. At the entrance: depth and currents attract schooling fish - ideal for pilkers or fly tackle. Along the cliffs: quietly move along the precipices, fishing shaded areas and ledges - high chance for large groupers. The most scenic and promising spot on the route.",
            highlights: [
              "Fjord-like scenery",
              "Cliffside fishing",
              "Best grouper chances",
            ],
            visitType: "Intensive fishing - 1.5 hours",
            images: ["/fishing/southeast-cala-pi.jpg"],
          },
          {
            id: "return",
            name: "Finish: Open Water on Return",
            description:
              "On the way back to Palma, if the group wishes, we can make a stop away from shore at a depth drop-off. Tactics: medium-speed trolling or deep jigging. Target: larger pelagic species. A final adrenaline-filled attempt to catch something serious and end the tour on a high note.",
            highlights: [
              "Open water fishing",
              "Trolling finale",
              "Last chance for trophy",
            ],
            visitType: "Open water fishing - 1 hour",
            images: ["/fishing/southeast-1.jpg"],
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
          "The charter price includes the rental of a yacht with full equipment, crew services, insurance and port fees. Fuel is included in the price for short routes, and fuel is charged separately for daytime charters. A water board is also included in the price. Refreshing drinks (water, cola, beer), snacks, chips and kuroketas are also provided for your comfort on board.",
      },
      {
        question: "If I have a motorboat licence, can I steer the yacht?",
        answer:
          "Yes, licensed guests may take the helm under the captain's supervision when conditions allow. Please send your certification in advance and our skipper will brief you, remaining ready to reassume control whenever necessary.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Cancellations 30+ days before departure receive a full refund. 15–29 days: 50% refund. Less than 15 days: no refund, though rescheduling is possible subject to availability. Weather cancellations are fully refundable.",
      },
      {
        question: "How many guests can join the charter?",
        answer:
          "Our yacht is certified for 12 people including crew, so we can host up to 11 guests at once.",
      },
      {
        question: "What is the minimum group size for 3–4 hour tours?",
        answer:
          "Group tours lasting 3-4 hours are sent with a minimum number of participants (7-8 guests). The cost of the tour is calculated per person when this minimum is reached. For booking a private charter or if your group is less than the minimum, a fixed tour price applies. In this case, you do not pay for each guest, but for the full charter price, which is indicated for each route. Thus, we can guarantee the shipment both for group recruitment and for small companies. Group shipments can be rescheduled if the minimum number of participants is not reached.",
      },
      {
        question: "What should I bring for the fishing tour?",
        answer:
          "We provide all guests with basic fishing gear and all necessary safety equipment that meets the standards. For experienced fishermen who prefer to fish with their usual gear, we will be happy to help with the use of your personal gear.",
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
          "We accept bank transfers, Bizum or cash (EUR). To guarantee the booking, you must make an advance payment of 30% of the amount that must be paid 14 days before the booking. Full payment may be required for last-minute bookings.  At the beginning of the trip, we will also ask you to make a refundable deposit of €200 in cash or by card transfer. This amount will be fully refunded to you at the end of the tour, subject to the safety of all provided yacht equipment and property.",
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
      {
        id: 7,
        title: "Best Time to Visit Mallorca by Yacht",
        excerpt:
          "Discover the perfect seasons for yacht charters in Mallorca - from spring blossoms to golden autumn days.",
        author: "Marina Lopez",
        date: "April 15",
        readTime: "4 min read",
        views: "12 views",
        likes: "2 likes",
        category: "Travel Tips",
        image: "/photo/seasonal-guide.jpeg",
        imageAlt: "Yacht sailing during golden hour in Mallorca",
      },
      {
        id: 8,
        title: "Top 5 Hidden Coves Only Accessible by Boat",
        excerpt:
          "Explore secret swimming spots and untouched beaches that remain Mallorca's best-kept secrets.",
        author: "Carlos Mendez",
        date: "April 10",
        readTime: "5 min read",
        views: "18 views",
        likes: "5 likes",
        category: "Discovery",
        image: "/photo/hidden-coves.jpeg",
        imageAlt:
          "Secluded cove with crystal clear water accessible only by yacht",
      },
      {
        id: 9,
        title: "Gourmet Dining Onboard: Mediterranean Cuisine",
        excerpt:
          "How we craft exceptional culinary experiences with local ingredients and professional chefs.",
        author: "Sophie Laurent",
        date: "April 5",
        readTime: "3 min read",
        views: "15 views",
        likes: "3 likes",
        category: "Gastronomy",
        image: "/photo/onboard-dining.jpeg",
        imageAlt:
          "Elegant table setting with Mediterranean cuisine on yacht deck",
      },
      {
        id: 10,
        title: "Family Yacht Charter: Creating Memories",
        excerpt:
          "Why a luxury yacht is the perfect setting for unforgettable family vacations in the Balearics.",
        author: "Anna Schmidt",
        date: "March 28",
        readTime: "4 min read",
        views: "22 views",
        likes: "7 likes",
        category: "Family",
        image: "/photo/family-charter.jpeg",
        imageAlt: "Happy family enjoying water activities from yacht",
      },
      {
        id: 11,
        title: "Sunset Cruises: Magic Hours in Mediterranean",
        excerpt:
          "Experience the most breathtaking sunsets from the water - a photographer's dream come true.",
        author: "Luca Bianchi",
        date: "March 22",
        readTime: "3 min read",
        views: "25 views",
        likes: "8 likes",
        category: "Experiences",
        image: "/photo/sunset-cruise.jpeg",
        imageAlt: "Stunning Mediterranean sunset viewed from yacht flybridge",
      },
      {
        id: 12,
        title: "Corporate Events on Yacht EDENROC",
        excerpt:
          "Transform business meetings into extraordinary experiences with our premium corporate charters.",
        author: "Thomas Weber",
        date: "March 18",
        readTime: "4 min read",
        views: "14 views",
        likes: "2 likes",
        category: "Business",
        image: "/photo/corporate-event.jpeg",
        imageAlt: "Professional business meeting setup on yacht deck",
      },
      {
        id: 13,
        title: "Underwater Photography from Your Charter",
        excerpt:
          "Capture stunning marine life and crystal waters with our photography tips and equipment.",
        author: "Elena Rodriguez",
        date: "March 12",
        readTime: "5 min read",
        views: "19 views",
        likes: "6 likes",
        category: "Photography",
        image: "/photo/underwater-photo.jpeg",
        imageAlt: "Vibrant underwater photography of Mediterranean marine life",
      },
      {
        id: 14,
        title: "Weekend Getaway: 48 Hours of Luxury",
        excerpt:
          "How to make the most of a short but spectacular yacht charter weekend in Mallorca.",
        author: "Isabelle Moreau",
        date: "March 8",
        readTime: "3 min read",
        views: "16 views",
        likes: "4 likes",
        category: "Weekend",
        image: "/photo/weekend-getaway.jpeg",
        imageAlt: "Relaxing weekend scene on yacht with cocktails",
      },
      {
        id: 15,
        title: "Sustainable Yachting: Our Eco-Friendly Approach",
        excerpt:
          "Learn about our commitment to preserving Mediterranean marine ecosystems while delivering luxury.",
        author: "David Green",
        date: "March 3",
        readTime: "4 min read",
        views: "21 views",
        likes: "9 likes",
        category: "Sustainability",
        image: "/photo/eco-yachting.jpeg",
        imageAlt: "Yacht using eco-friendly practices in clean blue waters",
      },
      {
        id: 16,
        title: "Birthday Celebrations at Sea",
        excerpt:
          "Why a yacht charter creates the most memorable birthday parties with stunning backdrops.",
        author: "Maria Santos",
        date: "February 26",
        readTime: "3 min read",
        views: "17 views",
        likes: "5 likes",
        category: "Celebrations",
        image: "/photo/birthday-sea.jpeg",
        imageAlt: "Birthday celebration with cake and decorations on yacht",
      },
      {
        id: 17,
        title: "Navigating Mallorca's Marine Reserves",
        excerpt:
          "A guide to protected areas and how to enjoy them responsibly during your charter.",
        author: "Captain Marco",
        date: "February 20",
        readTime: "4 min read",
        views: "13 views",
        likes: "3 likes",
        category: "Navigation",
        image: "/photo/marine-reserve.jpeg",
        imageAlt: "Yacht approaching beautiful marine protected area",
      },
      {
        id: 18,
        title: "Luxury Amenities: What Makes EDENROC Special",
        excerpt:
          "From premium sound systems to climate control - discover the features that define luxury.",
        author: "Oliver James",
        date: "February 15",
        readTime: "4 min read",
        views: "20 views",
        likes: "6 likes",
        category: "Luxury",
        image: "/photo/luxury-amenities.jpeg",
        imageAlt: "Premium amenities and interior features of EDENROC yacht",
      },
      {
        id: 19,
        title: "Fishing in Balearic Waters: Complete Guide",
        excerpt:
          "Everything you need to know about sport fishing opportunities during your Mallorca charter.",
        author: "Fisherman Pete",
        date: "February 10",
        readTime: "5 min read",
        views: "24 views",
        likes: "7 likes",
        category: "Fishing",
        image: "/photo/sport-fishing.jpeg",
        imageAlt: "Sport fishing action with catch on yacht",
      },
      {
        id: 20,
        title: "Honeymoon on Water: Romantic Charter Ideas",
        excerpt:
          "Create the perfect romantic escape with our honeymoon and anniversary charter packages.",
        author: "Claire Bennett",
        date: "February 5",
        readTime: "4 min read",
        views: "28 views",
        likes: "12 likes",
        category: "Romantic",
        image: "/photo/honeymoon.jpeg",
        imageAlt: "Romantic setup for honeymoon couple on yacht at sunset",
      },
      {
        id: 21,
        title: "Water Sports Equipment: Our Complete Fleet",
        excerpt:
          "From Sea Scooters to paddle boards - all the equipment available for your aquatic adventures.",
        author: "Water Sports Pro",
        date: "January 30",
        readTime: "3 min read",
        views: "15 views",
        likes: "4 likes",
        category: "Activities",
        image: "/photo/watersports-equipment.jpeg",
        imageAlt: "Collection of water sports equipment on yacht platform",
      },
      {
        id: 22,
        title: "Day Trip to Cabrera: What to Expect",
        excerpt:
          "Your complete guide to visiting the stunning Cabrera National Park from Mallorca.",
        author: "Nature Guide",
        date: "January 25",
        readTime: "5 min read",
        views: "19 views",
        likes: "5 likes",
        category: "Destinations",
        image: "/photo/cabrera-guide.jpeg",
        imageAlt: "Beautiful landscape of Cabrera National Park from sea",
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
    day_charter: "Chárter diario",
    yacht: "El Yate",
    blog: "Blog",
    faq: "FAQ",
  },
  actions: { cta: "Reservar ahora" },
  language: { ariaLabel: "Seleccionar idioma" },
  navigationToggle: "Abrir o cerrar navegación",
  promotion:
    "¡OFERTA ESPECIAL! Obtén 15% de descuento en todas las excursiones esta semana!",
  promotionLinkText: "Reservar Ahora",
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

es.day_tour = {
  ...es.day_tour,
  hero: {
    title: "Experiencia de Tour Diario",
    subtitle: "Tours de yate de lujo de 8 y 4 horas",
  },
  intro: {
    title:
      "Puedes organizar cualquier tipo de celebración en el yate EDENROC para satisfacer todos los gustos:",
    activities: {
      party: {
        title: "Una Fiesta",
        description:
          "Alquila el barco con un grupo de amigos con tus bebidas y comida favoritas, baile y diversión sin fin.",
      },
      family: {
        title: "En Familia",
        description:
          "Los niños estarán encantados de nadar en mar abierto mientras las parejas disfrutan de tiempo privado.",
      },
      fishing: {
        title: "Ocio para Hombres",
        description:
          "Equipo profesional, una gran captura y tus mejores amigos con quienes compartir una tormenta de emociones.",
      },
    },
    note: "Siempre atendemos las necesidades de nuestros clientes e intentamos abrazar todos sus deseos. Por lo tanto, cada pedido es casi siempre individual.",
  },
  pricing: {
    title: "Información de Precios",
    subtitle: "En general, nuestros precios son los siguientes:",
    charter: {
      title: "Precios de Charter",
      table: {
        headers: ["Periodo", "Día completo (8 horas)", "Medio día (4 horas)"],
        rows: [
          ["Julio, Agosto", "2 200€", "1 500€"],
          ["Junio, Septiembre", "2 000€", "1 400€"],
          ["Mayo, Octubre", "1 800€", "1 100€"],
          ["Noviembre - Abril", "1 500€", "1 000€"],
        ],
      },
    },
    fishing: {
      title: "Precios de Pesca",
      table: {
        headers: ["Duración", "Precio"],
        rows: [
          ["Día completo (8 horas)", "1 500€"],
          ["Medio día (4 horas)", "1 000€"],
        ],
      },
    },
  },
  gallery: {
    title: "Experiencia de Tour Diario",
    images: [
      {
        alt: "Experiencia de fiesta en yate",
        src: "/photo/family-charter.jpeg",
      },
      {
        alt: "Día familiar en yate",
        src: "/photo/birthday-sea.jpeg",
      },
      {
        alt: "Aventura de pesca",
        src: "/photo/WhatsApp Image 2025-11-14 at 15.42.18.jpeg",
      },
    ],
  },
  cta: {
    title: "Reserva tu Tour Diario",
    description:
      "¿Listo para crear recuerdos inolvidables? Contáctanos para reservar tu tour diario perfecto en el yate EDENROC.",
    buttons: {
      contact: "Contáctanos",
      copyEmail: "Copiar Email",
    },
    emailCopied: "¡Email copiado!",
  },
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

es.about.contentBlocks = [
  {
    type: "text-first",
    title: "Diseño elegante y excelencia",
    description:
      "Azimut 50 EDENROC encarna el estilo italiano y la maestría en ingeniería. Con 15,54 metros de eslora y 4,55 metros de manga, ofrece el equilibrio perfecto entre confort y rendimiento.",
    image: "/new 05/charter mallorca.jpg",
    imageAlt: "Vista lateral del yate Azimut 50 EDENROC",
  },
  {
    type: "image-first",
    title: "Cubierta espaciosa para el relax",
    description:
      "El generoso cockpit con sofás acolchados y zona de comedor es perfecto para recibir invitados. El módulo de cocina integrado y el bar facilitan celebraciones inolvidables sobre el agua.",
    image: "/gallery/3.jpg",
    imageAlt: "Cubierta espaciosa del yate Azimut 50",
  },
  {
    type: "text-first",
    title: "Potencia y velocidad",
    description:
      "Dos motores de 715 CV proporcionan una velocidad de crucero de 26 nudos y una máxima de hasta 32 nudos. El depósito de 2.200 litros permite travesías prolongadas.",
    image: "/gallery/2.jpg",
    imageAlt: "Motores del yate Azimut 50",
  },
  {
    type: "image-first",
    title: "Interior de lujo",
    description:
      "El interior está decorado en un estilo moderno con materiales de primera calidad. Las tres cómodas cabañas pueden acomodar hasta 11 personas para una estancia inolvidable. Hay dos aseos a bordo para su comodidad.",
    image: "/gallery/10.jpg",
    imageAlt: "Interior de lujo del yate Azimut 50",
  },
  {
    type: "text-first",
    title: "Tecnología innovadora",
    description:
      "La suite de navegación de última generación, el control de clima en todos los espacios y la estabilización garantizan el máximo confort y seguridad durante la travesía.",
    image: "/gallery/spisok1.jpg",
    imageAlt: "Equipamiento tecnológico del yate",
  },
  {
    type: "image-first",
    title: "Diversión en el agua",
    description:
      "El yate está totalmente equipado para practicar deportes acuáticos: una zona de baño, una escalera de descenso y un gran almacén de juguetes están listos para usar. También hay una tabla de natación a su disposición.",
    image: "/sea scooter/sea scooter infinity (1).jpg",
    imageAlt: "Actividades acuáticas desde el yate",
  },
];

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
  "sunset-cruise": {
    title: "Crucero al Atardecer a Cala Major",
    shortDescription:
      "Crucero romántico nocturno por la costa de Palma con vistas al atardecer y el Castillo de Bellver iluminado",
    typeLabel: "Charter estándar",
    seasonLabel: "Todo el año",
    durationLabel: "2.5 horas",
    price: "750 €",
    pricePerPerson: "75 €",
    capacityLabel: "Hasta 12 invitados",
    minCapacityLabel: "Mínimo 6 invitados",
    maxCapacityLabel: "Máximo 12 invitados",
    highlights: [
      "Vistas panorámicas del atardecer",
      "Castell de Bellver desde el mar",
      "Cava y tapas",
      "Ambiente relajado nocturno",
    ],
    fuelSurcharge: "15-30 € por persona",
    included: [
      "Tapas españolas (jamón, queso, aceitunas)",
      "Cava (vino espumoso español)",
      "Refrescos y agua",
      "Mantas ligeras",
    ],
    extraServices: [
      { name: "Botella de cava premium", price: "40 €" },
      { name: "Paquete de fotos romántico", price: "30 €" },
    ],
  },

  "mysterious-caves": {
    title: "Las Calas y Cuevas Misteriosas de Cala d'Or",
    shortDescription:
      "Exploración de calas escondidas, cuevas marinas y grutas en zona Cala d'Or con paradas para nadar y hacer snorkel",
    typeLabel: "Aventura activa",
    seasonLabel: "Mayo–Septiembre",
    durationLabel: "5 horas",
    price: "1.100 €",
    pricePerPerson: "110 €",
    capacityLabel: "Hasta 8 invitados",
    minCapacityLabel: "Mínimo 6 invitados",
    maxCapacityLabel: "Máximo 10 invitados",
    highlights: [
      "Exploración de cuevas marinas",
      "Calas escondidas",
      "Mejores puntos de snorkel",
      "Natación aventurera",
    ],
    fuelSurcharge: "25-45 € por persona",
    included: [
      "Picnic almuerzo",
      "Vino local y refrescos",
      "Frutas",
      "Máscaras y aletas de snorkel",
      "Linternas impermeables",
    ],
    extraServices: [
      { name: "Scooter marino", price: "55 €" },
      { name: "Alquiler cámara subacuática", price: "45 €" },
      { name: "Guía privado de cuevas", price: "A consultar" },
    ],
  },

  "tramuntana-safari": {
    title: "Safari en Jeep por las Montañas de Tramuntana",
    shortDescription:
      "Emocionante safari en jeep por la Sierra de Tramuntana, Patrimonio Mundial de la UNESCO",
    typeLabel: "Aventura activa",
    seasonLabel: "Todo el año",
    durationLabel: "6-7 horas",
    price: "950 €",
    pricePerPerson: "95 €",
    capacityLabel: "Hasta 6 invitados",
    minCapacityLabel: "Mínimo 4 invitados",
    maxCapacityLabel: "Máximo 8 invitados",
    highlights: [
      "Carreteras de montaña UNESCO",
      "Pueblos tradicionales",
      "Almuerzo de montaña",
      "Miradores espectaculares",
    ],
    fuelSurcharge: "Incluido",
    included: [
      "Conductor-guía profesional",
      "Transporte en Jeep 4x4",
      "Almuerzo mallorquín tradicional en pueblo de montaña",
      "Agua",
      "Seguro",
    ],
    extraServices: [
      { name: "Cata de vinos en viñedo", price: "25 € por persona" },
      { name: "Grupo privado (hasta 6)", price: "600 € (total)" },
    ],
  },
  "edenroc-private-charter": {
    title: "Experiencia Privada EDENROC",
    shortDescription:
      "Charter privado de lujo: crea tu día perfecto en el agua con total libertad de elección",
    typeLabel: "Charter premium",
    seasonLabel: "Todo el año",
    durationLabel: "4 u 8 horas",
    price: "1.000 € - 2.200 €",
    pricePerPerson: "Personalizado",
    capacityLabel: "Hasta 10 invitados",
    minCapacityLabel: "Mínimo 1 invitado",
    maxCapacityLabel: "Máximo 10 invitados",
    highlights: [
      "Charter privado solo para tu grupo",
      "Itinerario totalmente personalizable",
      "Equipo de pesca profesional disponible",
      "Perfecto para fiestas o reuniones familiares",
    ],
    fuelSurcharge: "Incluido en el precio",
    included: [
      "Capitán y anfitrión privados",
      "Equipo de snorkel",
      "Paddle Surf (SUP)",
      "Nevera a bordo para tus bebidas",
      "Altavoz Bluetooth",
    ],
    extraServices: [
      { name: "Catering completo (almuerzo)", price: "Desde 30 €/persona" },
      { name: "Paquete de barra premium", price: "A consultar" },
      { name: "Equipo de pesca profesional", price: "100 €" },
      { name: "Alquiler de seabob", price: "50 €" },
    ],
  },
  "cabrera-fishing-expedition": {
    title: "Expedición de Pesca a Cabrera: Viaje a Aguas Protegidas",
    shortDescription:
      "Tour de pesca deportiva exclusivo que combina aventura de pesca en ruta a Cabrera con impresionantes vistas del Parque Nacional",
    typeLabel: "Charter de pesca premium",
    seasonLabel: "Abril–Octubre",
    durationLabel: "8 horas",
    price: "1.400 €",
    pricePerPerson: "Personalizado",
    capacityLabel: "Hasta 8 invitados",
    minCapacityLabel: "Mínimo 4 invitados",
    maxCapacityLabel: "Máximo 8 invitados",
    highlights: [
      "Pesca de atún y bonito",
      "Visita al Archipiélago de Cabrera",
      "Pesca de fondo en aguas profundas",
      "Avistamiento de delfines y ballenas",
    ],
    fuelSurcharge: "Incluido en el precio",
    included: [
      "Capitán profesional y guía de pesca",
      "Equipo de pesca premium (cañas, carretes, señuelos)",
      "Cebo vivo",
      "Licencias de pesca",
      "Refrescos y agua",
      "Aperitivos ligeros",
      "Nevera para tu captura",
    ],
    extraServices: [
      { name: "Catering completo (almuerzo)", price: "Desde 35 €/persona" },
      { name: "Paquete de barra premium", price: "A consultar" },
      { name: "Sesión fotográfica profesional", price: "80 €" },
      { name: "Limpieza y envasado al vacío del pescado", price: "30 €" },
    ],
  },
  "southwest-trolling": {
    title: "Tour de Pesca al Curricán Suroeste: De Cabos a Alta Mar",
    shortDescription:
      "Tour activo de pesca al curricán a lo largo de la dramática costa suroeste, buscando grandes peces pelágicos en profundidades y mar abierto",
    typeLabel: "Charter de pesca premium",
    seasonLabel: "Abril–Octubre",
    durationLabel: "6 horas",
    price: "1.200 €",
    pricePerPerson: "Personalizado",
    capacityLabel: "Hasta 8 invitados",
    minCapacityLabel: "Mínimo 4 invitados",
    maxCapacityLabel: "Máximo 8 invitados",
    highlights: [
      "Pesca al curricán de atún y bonito",
      "Pesca en desniveles profundos",
      "Jigging cerca de acantilados",
      "Paisajes costeros dramáticos",
    ],
    fuelSurcharge: "Incluido en el precio",
    included: [
      "Capitán profesional y guía de pesca",
      "Equipo de pesca premium (cañas, carretes, señuelos)",
      "Cebo vivo",
      "Licencias de pesca",
      "Refrescos y agua",
      "Aperitivos ligeros",
    ],
    extraServices: [
      { name: "Catering completo (almuerzo)", price: "Desde 35 €/persona" },
      { name: "Paquete de barra premium", price: "A consultar" },
      { name: "Sesión fotográfica profesional", price: "80 €" },
    ],
  },
  "southeast-legends": {
    title: "Tour de Pesca Leyendas del Sureste",
    shortDescription:
      "Aventura de pesca a lo largo de la hermosa costa sureste de Mallorca, buscando diversas especies desde acantilados profundos hasta aguas costeras",
    typeLabel: "Charter de pesca estándar",
    seasonLabel: "Todo el año",
    durationLabel: "6 horas",
    price: "1.100 €",
    pricePerPerson: "Personalizado",
    capacityLabel: "Hasta 8 invitados",
    minCapacityLabel: "Mínimo 4 invitados",
    maxCapacityLabel: "Máximo 8 invitados",
    highlights: [
      "Pesca junto a la Catedral La Seu",
      "Jigging en acantilados",
      "Pesca en Cala Pi",
      "Diversas especies costeras",
    ],
    fuelSurcharge: "Incluido en el precio",
    included: [
      "Capitán profesional y guía de pesca",
      "Equipo de pesca premium (cañas, carretes, señuelos)",
      "Cebo vivo",
      "Licencias de pesca",
      "Refrescos y agua",
      "Aperitivos ligeros",
    ],
    extraServices: [
      { name: "Catering completo (almuerzo)", price: "Desde 35 €/persona" },
      { name: "Paquete de barra premium", price: "A consultar" },
      { name: "Sesión fotográfica profesional", price: "80 €" },
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
      "El precio del Alquiler incluye el Alquiler de un yate completo, servicios de tripulación, seguros y tarifas portuarias. El combustible está incluido en el precio para vuelos cortos, y para los chárter de un día, el combustible se paga por separado. El precio también incluye una tabla de agua. Para su comodidad, a bordo también se proporcionan bebidas refrescantes (agua, cola, cerveza), aperitivos, papas fritas y pollos.",
  },
  {
    question:
      "Si tengo licencia para embarcaciones a motor, ¿puedo gobernar el yate?",
    answer:
      "Sí, los invitados con licencia válida pueden tomar el timón bajo la supervisión del capitán cuando las condiciones lo permiten. Envíanos la acreditación con antelación y nuestro patrón te explicará el procedimiento, manteniendo el control en todo momento.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Más de 30 días: reembolso completo. 15–29 días: 50% de reembolso. Menos de 15 días: no hay reembolso, pero podemos reprogramar según disponibilidad. Las cancelaciones por meteorología se reembolsan al 100%.",
  },
  {
    question: "¿Cuántos invitados pueden embarcar?",
    answer:
      "La embarcación está homologada para 12 personas incluyendo a la tripulación, por lo que podemos acoger hasta 11 invitados a la vez.",
  },
  {
    question: "¿Cuál es el tamaño mínimo de grupo para tours de 3–4 horas?",
    answer:
      "Los tours en grupo de 3-4 horas se envían con un número mínimo de participantes (7-8 invitados). El costo del Tour se calcula por persona cuando se alcanza este mínimo. Para reservar un chárter privado o si su grupo es menor que el mínimo, se aplica un costo fijo para el Tour. En este caso, no paga por cada huésped, sino por el precio total de la carta, que se muestra para cada itinerario. Por lo tanto, podemos garantizar el envío tanto en la contratación del grupo como para pequeñas empresas. Los envíos grupales se pueden reprogramar si no se ha reclutado un número mínimo de participantes.",
  },
  {
    question: "¿Qué debo llevar a la excursión de pesca?",
    answer:
      "Proporcionamos a todos los huéspedes con aparejos de Pesca básicos y todo el kit de seguridad necesario que cumple con los estándares. Para los pescadores experimentados que prefieren pescar con su equipo habitual, estaremos encantados de ayudarlo con el uso de sus aparejos personales.",
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
      "Aceptamos transferencias bancarias, Bizum o efectivo (EUR). Para garantizar la reserva, se debe abonar un anticipo del 30% del importe abonado 14 días antes de la reserva. Las reservas de Última hora pueden requerir el pago completo.  Al comienzo del viaje, también solicitaremos un depósito reembolsable de €200 en efectivo o transferencia a la tarjeta. Esta cantidad se le reembolsará en su totalidad al final del recorrido, siempre que se conserven todos los equipos y propiedades del yate proporcionados.",
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
  7: {
    title: "Mejor época para visitar Mallorca en yate",
    excerpt:
      "Descubre las temporadas perfectas para charters en Mallorca - desde la primavera florida hasta los dorados días de otoño.",
    readTime: "4 min de lectura",
    views: "12 lecturas",
    likes: "2 me gusta",
    category: "Consejos de viaje",
  },
  8: {
    title: "Top 5 calas escondidas solo accesibles en barco",
    excerpt:
      "Explora lugares secretos para nadar y playas vírgenes que siguen siendo los mejores secretos de Mallorca.",
    readTime: "5 min de lectura",
    views: "18 lecturas",
    likes: "5 me gusta",
    category: "Descubrimiento",
  },
  9: {
    title: "Gastronomía a bordo: Cocina mediterránea",
    excerpt:
      "Cómo creamos experiencias culinarias excepcionales con ingredientes locales y chefs profesionales.",
    readTime: "3 min de lectura",
    views: "15 lecturas",
    likes: "3 me gusta",
    category: "Gastronomía",
  },
  10: {
    title: "Charter familiar: Creando recuerdos",
    excerpt:
      "Por qué un yate de lujo es el escenario perfecto para vacaciones familiares inolvidables en Baleares.",
    readTime: "4 min de lectura",
    views: "22 lecturas",
    likes: "7 me gusta",
    category: "Familia",
  },
  11: {
    title: "Cruceros al atardecer: Horas mágicas en el Mediterráneo",
    excerpt:
      "Vive las puestas de sol más impresionantes desde el agua - el sueño de todo fotógrafo hecho realidad.",
    readTime: "3 min de lectura",
    views: "25 lecturas",
    likes: "8 me gusta",
    category: "Experiencias",
  },
  12: {
    title: "Eventos corporativos en el yate EDENROC",
    excerpt:
      "Transforma reuniones de negocios en experiencias extraordinarias con nuestros charters corporativos premium.",
    readTime: "4 min de lectura",
    views: "14 lecturas",
    likes: "2 me gusta",
    category: "Empresas",
  },
  13: {
    title: "Fotografía submarina desde tu charter",
    excerpt:
      "Captura la impresionante vida marina y aguas cristalinas con nuestros consejos y equipo de fotografía.",
    readTime: "5 min de lectura",
    views: "19 lecturas",
    likes: "6 me gusta",
    category: "Fotografía",
  },
  14: {
    title: "Escapada de fin de semana: 48 horas de lujo",
    excerpt:
      "Cómo aprovechar al máximo un fin de semana corto pero espectacular de charter en Mallorca.",
    readTime: "3 min de lectura",
    views: "16 lecturas",
    likes: "4 me gusta",
    category: "Fin de semana",
  },
  15: {
    title: "Navegación sostenible: Nuestro enfoque ecológico",
    excerpt:
      "Conoce nuestro compromiso con la preservación de los ecosistemas marinos mediterráneos mientras ofrecemos lujo.",
    readTime: "4 min de lectura",
    views: "21 lecturas",
    likes: "9 me gusta",
    category: "Sostenibilidad",
  },
  16: {
    title: "Celebraciones de cumpleaños en el mar",
    excerpt:
      "Por qué un charter en yate crea las fiestas de cumpleaños más memorables con fondos impresionantes.",
    readTime: "3 min de lectura",
    views: "17 lecturas",
    likes: "5 me gusta",
    category: "Celebraciones",
  },
  17: {
    title: "Navegando por las reservas marinas de Mallorca",
    excerpt:
      "Una guía de áreas protegidas y cómo disfrutarlas responsablemente durante tu charter.",
    readTime: "4 min de lectura",
    views: "13 lecturas",
    likes: "3 me gusta",
    category: "Navegación",
  },
  18: {
    title: "Amenidades de lujo: Lo que hace especial al EDENROC",
    excerpt:
      "Desde sistemas de sonido premium hasta control climático - descubre las características que definen el lujo.",
    readTime: "4 min de lectura",
    views: "20 lecturas",
    likes: "6 me gusta",
    category: "Lujo",
  },
  19: {
    title: "Pesca en aguas baleares: Guía completa",
    excerpt:
      "Todo lo que necesitas saber sobre oportunidades de pesca deportiva durante tu charter en Mallorca.",
    readTime: "5 min de lectura",
    views: "24 lecturas",
    likes: "7 me gusta",
    category: "Pesca",
  },
  20: {
    title: "Luna de miel en el agua: Ideas de charter romántico",
    excerpt:
      "Crea la escapada romántica perfecta con nuestros paquetes de charter para lunas de miel y aniversarios.",
    readTime: "4 min de lectura",
    views: "28 lecturas",
    likes: "12 me gusta",
    category: "Romántico",
  },
  21: {
    title: "Equipo de deportes acuáticos: Nuestra flota completa",
    excerpt:
      "Desde scooters marinos hasta tablas de paddle - todo el equipo disponible para tus aventuras acuáticas.",
    readTime: "3 min de lectura",
    views: "15 lecturas",
    likes: "4 me gusta",
    category: "Actividades",
  },
  22: {
    title: "Excursión a Cabrera: Qué esperar",
    excerpt:
      "Tu guía completa para visitar el impresionante Parque Nacional de Cabrera desde Mallorca.",
    readTime: "5 min de lectura",
    views: "19 lecturas",
    likes: "5 me gusta",
    category: "Destinos",
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
    day_charter: "Tagescharter",
    yacht: "Die Yacht",
    blog: "Blog",
    faq: "FAQ",
  },
  actions: { cta: "Jetzt chartern" },
  language: { ariaLabel: "Sprache auswählen" },
  navigationToggle: "Navigation ein- oder ausblenden",
  promotion:
    "SPEZIALANGEBOT! Erhalten Sie 15% Rabatt auf alle Touren diese Woche!",
  promotionLinkText: "Jetzt Buchen",
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

de.about.contentBlocks = [
  {
    type: "text-first",
    title: "Elegantes Design und Spitzenleistung",
    description:
      "Die Azimut 50 EDENROC verkörpert italienischen Stil und Ingenieurskunst. Mit 15,54 Metern Länge und 4,55 Metern Breite bietet sie die ideale Balance aus Komfort und Performance.",
    image: "/new 05/charter mallorca.jpg",
    imageAlt: "Seitenansicht der Yacht Azimut 50 EDENROC",
  },
  {
    type: "image-first",
    title: "Großzügiges Deck zum Entspannen",
    description:
      "Ein weitläufiges Cockpit mit bequemen Sofas und Essbereich ist ideal für Gäste. Die integrierte Pantry und Bar machen unvergessliche Feiern auf dem Wasser möglich.",
    image: "/gallery/3.jpg",
    imageAlt: "Geräumiges Deck der Yacht Azimut 50",
  },
  {
    type: "text-first",
    title: "Leistung und Geschwindigkeit",
    description:
      "Zwei 715-PS-Motoren liefern 26 Knoten Reisegeschwindigkeit und bis zu 32 Knoten Spitze. Der 2.200-Liter-Tank ermöglicht ausgedehnte Fahrten.",
    image: "/gallery/2.jpg",
    imageAlt: "Motoren der Yacht Azimut 50",
  },
  {
    type: "image-first",
    title: "Luxuriöses Interieur",
    description:
      "Das Interieur ist in einem modernen Stil mit hochwertigen Materialien eingerichtet. Die drei komfortablen Kabinen bieten Platz für bis zu 11 Gäste für einen unvergesslichen Urlaub. An Bord sind zwei Toiletten für Ihren Komfort verfügbar",
    image: "/gallery/10.jpg",
    imageAlt: "Luxuriöses Interieur der Yacht Azimut 50",
  },
  {
    type: "text-first",
    title: "Innovative Technologien",
    description:
      "Eine moderne Navigationssuite, Klimatisierung in allen Bereichen und ein Stabilisatorsystem gewährleisten maximalen Komfort und Sicherheit auf See.",
    image: "/gallery/spisok1.jpg",
    imageAlt: "Technische Ausstattung der Yacht",
  },
  {
    type: "image-first",
    title: "Wasserspaß an Bord",
    description:
      "Die Yacht ist komplett für Wasseraktivitäten ausgestattet: Eine Badeplattform, eine Abstiegsleiter und ein großer Spielzeugspeicher sind einsatzbereit. Ein Schwimmbrett steht Ihnen ebenfalls zur Verfügung.",
    image: "/sea scooter/sea scooter infinity (1).jpg",
    imageAlt: "Wasserspaß von der Yacht aus",
  },
];

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

de.day_tour = {
  ...de.day_tour,
  hero: {
    title: "Tagesausflug-Erlebnis",
    subtitle: "Luxus-Yacht-Touren für 8 und 4 Stunden",
  },
  intro: {
    title:
      "Sie können jeden Urlaub auf der Yacht EDENROC nach Ihrem Geschmack organisieren:",
    activities: {
      party: {
        title: "Eine Party",
        description:
          "Mieten Sie das Boot mit einer Gruppe von Freunden mit Ihren Lieblingsgetränken und Essen, heißem Tanz und endlosem Spaß.",
      },
      family: {
        title: "Familienzeit",
        description:
          "Kinder werden begeistert im offenen Meer schwimmen, während Verliebte die private Zeit genießen.",
      },
      fishing: {
        title: "Freizeit für echte Männer",
        description:
          "Professionelle Ausrüstung, ein großer Fang und Ihre besten Freunde, mit denen Sie einen Sturm der Emotionen teilen können!",
      },
    },
    note: "Wir erfüllen immer die Bedürfnisse unserer Kunden und versuchen, alle Ihre Wünsche zu erfüllen. Daher ist jede Bestellung fast immer individuell.",
  },
  pricing: {
    title: "Preisinformationen",
    subtitle: "Im Allgemeinen sind unsere Preise wie folgt:",
    charter: {
      title: "Charter-Preise",
      table: {
        headers: ["Zeitraum", "Ganztag (8 Stunden)", "Halbtag (4 Stunden)"],
        rows: [
          ["Juli, August", "2 200€", "1 500€"],
          ["Juni, September", "2 000€", "1 400€"],
          ["Mai, Oktober", "1 800€", "1 100€"],
          ["November - April", "1 500€", "1 000€"],
        ],
      },
    },
    fishing: {
      title: "Angel-Preise",
      table: {
        headers: ["Dauer", "Preis"],
        rows: [
          ["Ganztag (8 Stunden)", "1 500€"],
          ["Halbtag (4 Stunden)", "1 000€"],
        ],
      },
    },
  },
  gallery: {
    title: "Tagesausflug-Erlebnis",
    images: [
      {
        alt: "Yacht-Party-Erlebnis",
        src: "/photo/family-charter.jpeg",
      },
      {
        alt: "Familientag auf der Yacht",
        src: "/photo/birthday-sea.jpeg",
      },
      {
        alt: "Angelabenteuer",
        src: "/photo/WhatsApp Image 2025-11-14 at 15.42.18.jpeg",
      },
    ],
  },
  cta: {
    title: "Buchen Sie Ihren Tagesausflug",
    description:
      "Bereit, unvergessliche Erinnerungen zu schaffen? Kontaktieren Sie uns, um Ihren perfekten Tagesausflug auf der Yacht EDENROC zu buchen.",
    buttons: {
      contact: "Kontaktieren Sie uns",
      copyEmail: "E-Mail kopieren",
    },
    emailCopied: "E-Mail kopiert!",
  },
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
  "sunset-cruise": {
    title: "Sonnenuntergang-Kreuzfahrt nach Cala Major",
    shortDescription:
      "Romantische Abendkreuzfahrt entlang Palmas Küste mit Sonnenuntergangsblicken und beleuchteter Bellver-Festung",
    typeLabel: "Standard-Charter",
    seasonLabel: "Ganzjährig",
    durationLabel: "2.5 Stunden",
    price: "750 €",
    pricePerPerson: "75 €",
    capacityLabel: "Bis zu 12 Gäste",
    minCapacityLabel: "Mindestens 6 Gäste",
    maxCapacityLabel: "Maximal 12 Gäste",
    highlights: [
      "Panoramablick bei Sonnenuntergang",
      "Castell de Bellver vom Meer",
      "Champagner & Tapas",
      "Entspannende Abendatmosphäre",
    ],
    fuelSurcharge: "15–30 € pro Person",
    included: [
      "Spanische Tapas (Schinken, Käse, Oliven)",
      "Cava (spanischer Sekt)",
      "Softdrinks & Wasser",
      "Leichte Decken",
    ],
    extraServices: [
      { name: "Flasche Premium-Cava", price: "40 €" },
      { name: "Romantisches Fotopaket", price: "30 €" },
    ],
  },

  "mysterious-caves": {
    title: "Die Geheimnisvollen Buchten & Höhlen von Cala d'Or",
    shortDescription:
      "Erkundung versteckter Buchten, Meereshöhlen und Grotten in Cala d'Or mit Schwimm- und Schnorchelstopps",
    typeLabel: "Aktiv-Erlebnis",
    seasonLabel: "Mai–September",
    durationLabel: "5 Stunden",
    price: "1.100 €",
    pricePerPerson: "110 €",
    capacityLabel: "Bis zu 8 Gäste",
    minCapacityLabel: "Mindestens 6 Gäste",
    maxCapacityLabel: "Maximal 10 Gäste",
    highlights: [
      "Höhlenerkundung im Meer",
      "Versteckte Buchten",
      "Beste Schnorchelspots",
      "Abenteuerliches Schwimmen",
    ],
    fuelSurcharge: "25–45 € pro Person",
    included: [
      "Picknick-Mittagessen",
      "Lokaler Wein & Softdrinks",
      "Früchte",
      "Schnorchelausrüstung",
      "Wasserdichte Taschenlampen",
    ],
    extraServices: [
      { name: "Sea-Scooter", price: "55 €" },
      { name: "Unterwasserkamera-Verleih", price: "45 €" },
      { name: "Privater Höhlenführer", price: "Auf Anfrage" },
    ],
  },

  "tramuntana-safari": {
    title: "Tramuntana-Gebirge Jeep Safari",
    shortDescription:
      "Spannende Jeep-Safari durch das Serra de Tramuntana-Gebirge, UNESCO-Welterbe",
    typeLabel: "Aktiv-Erlebnis",
    seasonLabel: "Ganzjährig",
    durationLabel: "6-7 Stunden",
    price: "950 €",
    pricePerPerson: "95 €",
    capacityLabel: "Bis zu 6 Gäste",
    minCapacityLabel: "Mindestens 4 Gäste",
    maxCapacityLabel: "Maximal 8 Gäste",
    highlights: [
      "UNESCO-Gebirgsstraßen",
      "Traditionelle Dörfer",
      "Berg-Mittagessen",
      "Spektakuläre Aussichtspunkte",
    ],
    fuelSurcharge: "Inklusive",
    included: [
      "Professioneller Fahrer-Guide",
      "Transport im 4x4 Jeep",
      "Traditionelles mallorquinisches Mittagessen im Bergdorf",
      "Wasser",
      "Versicherung",
    ],
    extraServices: [
      { name: "Weinprobe im Weinberg", price: "25 € pro Person" },
      { name: "Private Gruppe (bis zu 6)", price: "600 € (gesamt)" },
    ],
  },
  "edenroc-private-charter": {
    title: "EDENROC Privater Tagesausflug",
    shortDescription:
      "Private Luxusyacht-Charter: Gestalten Sie Ihren perfekten Tag auf dem Wasser mit völliger Wahlfreiheit",
    typeLabel: "Premium-Charter",
    seasonLabel: "Ganzjährig",
    durationLabel: "4 oder 8 Stunden",
    price: "1.000 € - 2.200 €",
    pricePerPerson: "Individuell",
    capacityLabel: "Bis zu 10 Gäste",
    minCapacityLabel: "Mindestens 1 Gast",
    maxCapacityLabel: "Maximal 10 Gäste",
    highlights: [
      "Privater Charter nur für Ihre Gruppe",
      "Vollständig anpassbare Reiseroute",
      "Professionelles Angelgerät verfügbar",
      "Perfekt für Partys oder Familienzusammenhalt",
    ],
    fuelSurcharge: "Im Preis inbegriffen",
    included: [
      "Privater Kapitän & Gastgeber",
      "Schnorchelausrüstung",
      "Stand Up Paddle (SUP)",
      "Bordkühlschrank für Ihre Getränke",
      "Bluetooth-Lautsprecher",
    ],
    extraServices: [
      { name: "Komplettes Catering (Mittagessen)", price: "Ab 30 €/Person" },
      { name: "Premium-Bar-Paket", price: "Auf Anfrage" },
      { name: "Professionelles Angelgerät", price: "100 €" },
      { name: "Sea-Scooter-Verleih", price: "50 €" },
    ],
  },
  "cabrera-fishing-expedition": {
    title: "Cabrera Fischexpedition: Reise zu Geschützten Gewässern",
    shortDescription:
      "Exklusive Sportfischertour, die Abenteuerfischen auf dem Weg nach Cabrera mit atemberaubenden Blicken auf den Nationalpark verbindet",
    typeLabel: "Premium-Angelcharter",
    seasonLabel: "April–Oktober",
    durationLabel: "8 Stunden",
    price: "1.400 €",
    pricePerPerson: "Individuell",
    capacityLabel: "Bis zu 8 Gäste",
    minCapacityLabel: "Mindestens 4 Gäste",
    maxCapacityLabel: "Maximal 8 Gäste",
    highlights: [
      "Schleppangeln auf Thunfisch & Bonito",
      "Besichtigung des Cabrera-Archipels",
      "Tiefsee-Grundangeln",
      "Delfin- & Walbeobachtung",
    ],
    fuelSurcharge: "Im Preis inbegriffen",
    included: [
      "Professioneller Kapitän & Angelführer",
      "Premium-Angelausrüstung (Ruten, Rollen, Köder)",
      "Lebendköder",
      "Angellizenzen",
      "Softdrinks & Wasser",
      "Leichte Snacks",
      "Kühlbox für Ihren Fang",
    ],
    extraServices: [
      { name: "Komplettes Catering (Mittagessen)", price: "Ab 35 €/Person" },
      { name: "Premium-Bar-Paket", price: "Auf Anfrage" },
      { name: "Professionelle Fotos", price: "80 €" },
      { name: "Fischreinigung & Vakuumverpackung", price: "30 €" },
    ],
  },
  "southwest-trolling": {
    title: "Südwest-Trolling-Tour: Von Landzungen zum Offenen Meer",
    shortDescription:
      "Aktive Trolling-Tour entlang der dramatischen Südwestküste, die große pelagische Fische an tiefen Abbrüchen und im offenen Wasser sucht",
    typeLabel: "Premium-Angelcharter",
    seasonLabel: "April–Oktober",
    durationLabel: "6 Stunden",
    price: "1.200 €",
    pricePerPerson: "Individuell",
    capacityLabel: "Bis zu 8 Gäste",
    minCapacityLabel: "Mindestens 4 Gäste",
    maxCapacityLabel: "Maximal 8 Gäste",
    highlights: [
      "Schleppangeln auf Thunfisch & Bonito",
      "Angeln an Tiefenabbrüchen",
      "Jigging nahe Klippen",
      "Dramatische Küstenlandschaft",
    ],
    fuelSurcharge: "Im Preis inbegriffen",
    included: [
      "Professioneller Kapitän & Angelführer",
      "Premium-Angelausrüstung (Ruten, Rollen, Köder)",
      "Lebendköder",
      "Angellizenzen",
      "Softdrinks & Wasser",
      "Leichte Snacks",
    ],
    extraServices: [
      { name: "Komplettes Catering (Mittagessen)", price: "Ab 35 €/Person" },
      { name: "Premium-Bar-Paket", price: "Auf Anfrage" },
      { name: "Professionelle Fotos", price: "80 €" },
    ],
  },
  "southeast-legends": {
    title: "Südost-Legenden: Angeltour",
    shortDescription:
      "Ein Angelabenteuer entlang Mallorcas schönster Südostküste, das verschiedene Arten von tiefen Klippen bis zu Küstengewässern anvisiert",
    typeLabel: "Standard-Angelcharter",
    seasonLabel: "Ganzjährig",
    durationLabel: "6 Stunden",
    price: "1.100 €",
    pricePerPerson: "Individuell",
    capacityLabel: "Bis zu 8 Gäste",
    minCapacityLabel: "Mindestens 4 Gäste",
    maxCapacityLabel: "Maximal 8 Gäste",
    highlights: [
      "Angeln an der La Seu Kathedrale",
      "Jigging an Klippen",
      "Angeln in Cala Pi",
      "Verschiedene Küstenarten",
    ],
    fuelSurcharge: "Im Preis inbegriffen",
    included: [
      "Professioneller Kapitän & Angelführer",
      "Premium-Angelausrüstung (Ruten, Rollen, Köder)",
      "Lebendköder",
      "Angellizenzen",
      "Softdrinks & Wasser",
      "Leichte Snacks",
    ],
    extraServices: [
      { name: "Komplettes Catering (Mittagessen)", price: "Ab 35 €/Person" },
      { name: "Premium-Bar-Paket", price: "Auf Anfrage" },
      { name: "Professionelle Fotos", price: "80 €" },
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
      "Der Charterpreis beinhaltet die Vermietung einer voll ausgestatteten Yacht, Besatzungsdienste, Versicherung und Hafengebühren. Kraftstoff ist für Kurzflüge im Preis enthalten und für Tagescharter wird Kraftstoff separat berechnet. Ein Wasserbrett ist ebenfalls im Preis enthalten. Erfrischende Getränke (Wasser, Cola, Bier), Snacks, Chips und ein Abzug sind ebenfalls für Ihren Komfort an Bord erhältlich.",
  },
  {
    question:
      "Wenn ich einen Motorbootführerschein habe, darf ich das Boot steuern?",
    answer:
      "Ja, Gäste mit gültiger Lizenz dürfen das Steuer übernehmen, solange der Kapitän die Aufsicht behält und die Bedingungen passen. Senden Sie uns den Nachweis im Voraus; unser Skipper erläutert das Vorgehen und kann jederzeit wieder übernehmen.",
  },
  {
    question: "Wie lautet die Stornierungsregelung?",
    answer:
      "Mehr als 30 Tage vorher: volle Rückerstattung. 15–29 Tage: 50%. Weniger als 15 Tage: keine Rückerstattung, aber Verschiebung nach Verfügbarkeit möglich. Wetterbedingte Absagen werden vollständig erstattet.",
  },
  {
    question: "Wie viele Gäste können an Bord?",
    answer:
      "Die Yacht ist für 12 Personen einschließlich Crew zugelassen, daher nehmen wir maximal 11 Gäste gleichzeitig mit.",
  },
  {
    question:
      "Wie groß muss die Gruppe für 3–4-stündige Touren mindestens sein?",
    answer:
      "Gruppenreisen mit einer Dauer von 3-4 Stunden werden mit der Mindestteilnehmerzahl (7-8 Personen) durchgeführt. Die Kosten für die Tour werden pro Person berechnet, wenn dieses Minimum erreicht wird.Für die Buchung eines privaten Charters oder wenn Ihre Gruppe unter dem Mindestpreis liegt, gilt ein fester Reisepreis. In diesem Fall zahlen Sie nicht für jeden Gast, sondern den vollen Charterpreis, der für jede Route angegeben ist. Auf diese Weise können wir die Sendung sowohl bei der Rekrutierung von Gruppen als auch bei kleineren Unternehmen garantieren. Gruppensendungen können verschoben werden, wenn die Mindestteilnehmerzahl nicht erreicht wurde.",
  },
  {
    question: "Was sollte ich zur Angeltour mitbringen?",
    answer:
      "Wir versorgen alle Gäste mit grundlegenden Angelgeräten und allen notwendigen Sicherheitseinrichtungen, die den Standards entsprechen. Für erfahrene Fischer, die sich für ihre gewohnte Ausrüstung entscheiden, helfen wir Ihnen gerne bei der Verwendung Ihrer persönlichen Ausrüstung.",
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
      "Wir akzeptieren Banküberweisungen, Bizum oder Bargeld (EUR). Als Buchungsgarantie ist eine Anzahlung in Höhe von 30% des Betrags erforderlich, der 14 Tage vor der Buchung zu bezahlen ist. Bei einer Last-Minute-Buchung kann eine vollständige Zahlung erforderlich sein.  Zu Beginn der Reise werden wir auch um eine Rückerstattung in Höhe von €200 in bar oder per Überweisung auf eine Karte bitten. Dieser Betrag wird Ihnen am Ende der Tour vollständig zurückerstattet, sofern die gesamte Ausrüstung und das Eigentum der Yacht erhalten bleiben.",
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
  7: {
    title: "Beste Reisezeit für Mallorca per Yacht",
    excerpt:
      "Entdecken Sie die perfekten Jahreszeiten für Yachtcharter auf Mallorca - von Frühlingsblüten bis zu goldenen Herbsttagen.",
    readTime: "4 Min. Lesezeit",
    views: "12 Aufrufe",
    likes: "2 Likes",
    category: "Reisetipps",
  },
  8: {
    title: "Top 5 versteckte Buchten nur per Boot erreichbar",
    excerpt:
      "Erkunden Sie geheime Schwimmplätze und unberührte Strände, die Mallorcas bestgehütete Geheimnisse bleiben.",
    readTime: "5 Min. Lesezeit",
    views: "18 Aufrufe",
    likes: "5 Likes",
    category: "Entdeckung",
  },
  9: {
    title: "Gourmet-Küche an Bord: Mittelmeerküche",
    excerpt:
      "Wie wir außergewöhnliche kulinarische Erlebnisse mit lokalen Zutaten und Profi-Köchen kreieren.",
    readTime: "3 Min. Lesezeit",
    views: "15 Aufrufe",
    likes: "3 Likes",
    category: "Gastronomie",
  },
  10: {
    title: "Familien-Yachtcharter: Erinnerungen schaffen",
    excerpt:
      "Warum eine Luxusyacht die perfekte Kulisse für unvergessliche Familienurlaube auf den Balearen ist.",
    readTime: "4 Min. Lesezeit",
    views: "22 Aufrufe",
    likes: "7 Likes",
    category: "Familie",
  },
  11: {
    title: "Sonnenuntergang-Kreuzfahrten: Magische Stunden im Mittelmeer",
    excerpt:
      "Erleben Sie atemberaubende Sonnenuntergänge vom Wasser aus - der Traum jedes Fotografen wird wahr.",
    readTime: "3 Min. Lesezeit",
    views: "25 Aufrufe",
    likes: "8 Likes",
    category: "Erlebnisse",
  },
  12: {
    title: "Firmenevents auf der Yacht EDENROC",
    excerpt:
      "Verwandeln Sie Geschäftstreffen in außergewöhnliche Erlebnisse mit unseren Premium-Firmencharter.",
    readTime: "4 Min. Lesezeit",
    views: "14 Aufrufe",
    likes: "2 Likes",
    category: "Business",
  },
  13: {
    title: "Unterwasserfotografie von Ihrem Charter",
    excerpt:
      "Fangen Sie atemberaubende Meereslebewesen und kristallklares Wasser mit unseren Fototipps und Equipment ein.",
    readTime: "5 Min. Lesezeit",
    views: "19 Aufrufe",
    likes: "6 Likes",
    category: "Fotografie",
  },
  14: {
    title: "Wochenendausflug: 48 Stunden Luxus",
    excerpt:
      "Wie Sie ein kurzes aber spektakuläres Yachtcharter-Wochenende auf Mallorca optimal nutzen.",
    readTime: "3 Min. Lesezeit",
    views: "16 Aufrufe",
    likes: "4 Likes",
    category: "Wochenende",
  },
  15: {
    title: "Nachhaltiges Yachten: Unser ökologischer Ansatz",
    excerpt:
      "Erfahren Sie mehr über unser Engagement zum Schutz mediterraner Meeresökosysteme bei gleichzeitiger Luxusvermittlung.",
    readTime: "4 Min. Lesezeit",
    views: "21 Aufrufe",
    likes: "9 Likes",
    category: "Nachhaltigkeit",
  },
  16: {
    title: "Geburtstagsfeiern auf See",
    excerpt:
      "Warum ein Yachtcharter die denkwürdigsten Geburtstagspartys mit atemberaubenden Kulissen schafft.",
    readTime: "3 Min. Lesezeit",
    views: "17 Aufrufe",
    likes: "5 Likes",
    category: "Feiern",
  },
  17: {
    title: "Durch Mallorcas Meeresschutzgebiete navigieren",
    excerpt:
      "Ein Leitfaden zu geschützten Gebieten und wie Sie sie während Ihres Charters verantwortungsvoll genießen.",
    readTime: "4 Min. Lesezeit",
    views: "13 Aufrufe",
    likes: "3 Likes",
    category: "Navigation",
  },
  18: {
    title: "Luxus-Ausstattung: Was die EDENROC besonders macht",
    excerpt:
      "Von Premium-Soundsystemen bis Klimaanlage - entdecken Sie die Features, die Luxus definieren.",
    readTime: "4 Min. Lesezeit",
    views: "20 Aufrufe",
    likes: "6 Likes",
    category: "Luxus",
  },
  19: {
    title: "Angeln in balearischen Gewässern: Kompletter Guide",
    excerpt:
      "Alles, was Sie über Sportangelmöglichkeiten während Ihres Mallorca-Charters wissen müssen.",
    readTime: "5 Min. Lesezeit",
    views: "24 Aufrufe",
    likes: "7 Likes",
    category: "Angeln",
  },
  20: {
    title: "Flitterwochen auf dem Wasser: Romantische Charter-Ideen",
    excerpt:
      "Kreieren Sie die perfekte romantische Auszeit mit unseren Flitterwochen- und Jubiläums-Charterpaketen.",
    readTime: "4 Min. Lesezeit",
    views: "28 Aufrufe",
    likes: "12 Likes",
    category: "Romantik",
  },
  21: {
    title: "Wassersport-Ausrüstung: Unsere komplette Flotte",
    excerpt:
      "Von Sea-Scootern bis Paddle-Boards - alle verfügbaren Geräte für Ihre Wassersportabenteuer.",
    readTime: "3 Min. Lesezeit",
    views: "15 Aufrufe",
    likes: "4 Likes",
    category: "Aktivitäten",
  },
  22: {
    title: "Tagesausflug nach Cabrera: Was Sie erwartet",
    excerpt:
      "Ihr kompletter Guide zum Besuch des atemberaubenden Cabrera-Nationalparks von Mallorca aus.",
    readTime: "5 Min. Lesezeit",
    views: "19 Aufrufe",
    likes: "5 Likes",
    category: "Reiseziele",
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
