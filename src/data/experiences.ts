export interface AttractionHighlight {
  title: string;
  desc: string;
  image: string;
}

export interface AttractionFAQ {
  question: string;
  answer: string;
}

export interface AttractionData {
  slug: string;
  name: string;
  category: string;
  image: string;
  duration: string;
  bestTime: string;
  description: string;
  overview: {
    detailed: string;
    significance: string;
    whyVisit: string;
    uniqueFactor: string;
  };
  quickInfo: {
    location: string;
    duration: string;
    hours: string;
    fee: string;
    bestSeason: string;
    bestTimeOfDay: string;
    difficulty: string;
    suitableFor: string[];
    travelFromHotel?: string;
  };
  highlights: AttractionHighlight[];
  gallery: string[];
  faqs: AttractionFAQ[];
  seo: {
    title: string;
    description: string;
  };
  nearby: string[]; // slugs
}

export const ATTRACTIONS: Record<string, AttractionData> = {
  "cellular-jail": {
    slug: "cellular-jail",
    name: "Cellular Jail National Memorial",
    category: "History & Heritage",
    image: "/images/experiences/cellular-jail-courtyard.jpg",
    duration: "2-3 Hours",
    bestTime: "Late Afternoon (4 PM - 7 PM)",
    description: "Explore India's history at the National Memorial. Pay respects to freedom fighters and witness the evocative Sound & Light show.",
    overview: {
      detailed: "Completed in 1906, the Cellular Jail, also known as Kāla Pānī, stands as a solemn monument to India's struggle for independence. The massive structure was designed with seven wings radiating from a central watchtower, containing hundreds of solitary confinement cells specifically built to isolate political prisoners.",
      significance: "This heritage site housed notable freedom fighters including Veer Savarkar and Batukeshwar Dutt. It remains the most powerful symbol of the sacrifices made during the freedom movement.",
      whyVisit: "To experience the evocative Sound and Light show narrated from the perspective of an ancient Peepal tree, detailing the prisoners' daily struggles and triumphs.",
      uniqueFactor: "The unique panopticon architecture ensures that a single guard in the central tower could monitor all seven cell wings without being seen."
    },
    quickInfo: {
      location: "Atlanta Point, Port Blair, Andaman Islands - 744101",
      duration: "2 - 3 Hours",
      hours: "9:00 AM - 12:30 PM, 1:30 PM - 4:45 PM (Closed Mondays)",
      fee: "₹30 per person (Extra for camera & Light Show)",
      bestSeason: "October to May",
      bestTimeOfDay: "3:30 PM onwards to catch the Light Show",
      difficulty: "Very Easy",
      suitableFor: ["Families", "Couples", "Children", "History Buffs"],
      travelFromHotel: "1.5 km (5 mins drive / 15 mins walk)"
    },
    highlights: [
      {
        title: "The Jail Courtyard",
        desc: "The main garden area where prisoners were put to hard labor, surrounded by the brick cellular wings.",
        image: "/images/experiences/cellular-jail-courtyard.jpg"
      },
      {
        title: "Condemned Cells",
        desc: "Special solitary cells for prisoners sentenced to execution, featuring heavy iron grates and arched brick doors.",
        image: "/images/experiences/cellular-jail-cells.jpg"
      },
      {
        title: "Sound & Light Show",
        desc: "An emotional storytelling experience projecting history with state-of-the-art red and golden lights on the facades.",
        image: "/images/experiences/cellular-jail-night.jpg"
      }
    ],
    gallery: [
      "/images/experiences/cellular-jail-courtyard.jpg",
      "/images/experiences/cellular-jail-cells.jpg",
      "/images/experiences/cellular-jail-night.jpg",
      "/images/experiences/cellular-jail-gallows.jpg",
      "/images/experiences/cellular-jail-oilmill.jpg",
      "/images/experiences/cellular-jail-flogging.jpg",
      "/images/experiences/cellular-jail.jpg"
    ],
    faqs: [
      {
        question: "What are the timings and entry fees for Cellular Jail?",
        answer: "The jail is open from 9:00 AM to 12:30 PM, and 1:30 PM to 4:45 PM. The entry fee is ₹30 per adult. It is closed on Mondays and national holidays."
      },
      {
        question: "How can I book tickets for the Sound and Light Show?",
        answer: "Tickets must be booked online in advance via the official Andaman Tourism portal. Shows are held in the evening (Hindi & English). You can also request the Hotel Sunrise concierge to arrange bookings for you."
      },
      {
        question: "Is photography and videography permitted inside Cellular Jail?",
        answer: "Yes, photography is allowed. The ticket fee is ₹200 for still cameras and ₹1,000 for video cameras. Commercial shooting requires separate government clearances."
      },
      {
        question: "Is there a dress code or what should I pack for the visit?",
        answer: "There is no formal dress code, but respectful casual wear is recommended. Pack comfortable walking shoes as exploring the three wings and watchtower requires moderate walking."
      }
    ],
    seo: {
      title: "Cellular Jail National Memorial | Hotel Sunrise Port Blair",
      description: "Plan your visit to the historic Cellular Jail in Port Blair. Discover hours, ticket details, and luxury guides curated by Hotel Sunrise."
    },
    nearby: ["ross-island", "north-bay-island"]
  },
  "ross-island": {
    slug: "ross-island",
    name: "Ross Island (Netaji Subhash Chandra Bose Island)",
    category: "Colonial Heritage",
    image: "/ross-island-ruins-roots.jpg",
    duration: "3-4 Hours",
    bestTime: "Morning (8:30 AM - 12 PM)",
    description: "Walk among majestic British-era colonial ruins slowly reclaimed by giant peepal roots and friendly deer roaming freely.",
    overview: {
      detailed: "Ross Island was the administrative headquarters for the British in the Andaman Islands until an earthquake in 1941 forced its evacuation. Today, the island stands as a fascinating ruin where nature has aggressively reclaimed church walls, printing presses, swimming pools, and officers' bungalows.",
      significance: "Once referred to as the 'Paris of the East' for its vibrant social life, it remains a poignant reminder of British colonial presence and subsequent Japanese occupation during WWII.",
      whyVisit: "To wander through tree-root-draped structures, feed the wild deer and peacocks that roam freely, and explore the small museum containing archival photographs.",
      uniqueFactor: "The visual contrast of century-old brick walls being literally held upright by the giant root networks of Ficus and Peepal trees."
    },
    quickInfo: {
      location: "East of Port Blair, accessible via a 15-minute boat ride from Water Sports Complex",
      duration: "3 - 4 Hours",
      hours: "8:30 AM - 4:00 PM (Closed Wednesdays)",
      fee: "₹50 island entry + boat transfers (~₹300 - ₹400)",
      bestSeason: "October to May",
      bestTimeOfDay: "Early morning to avoid midday heat",
      difficulty: "Easy Walking",
      suitableFor: ["Families", "Couples", "Photographers", "Wildlife Lovers"],
      travelFromHotel: "Ferry from Aberdeen Jetty / Water Sports Complex (1 km, 3 mins drive from hotel)"
    },
    highlights: [
      {
        title: "Presbyterian Church",
        desc: "A beautiful Gothic stone church draped in heavy ficus roots.",
        image: "/ross-island-church.jpg"
      },
      {
        title: "Roaming Spotted Deer",
        desc: "Dozens of friendly, semi-wild deer that approach visitors for food and photos.",
        image: "/ross-island-deer.jpg"
      },
      {
        title: "Overgrown Ruins",
        desc: "Ruins of colonial estates with brick arches covered in root systems.",
        image: "/ross-island-ruins-roots.jpg"
      }
    ],
    gallery: [
      "/ross-island-ruins-roots.jpg",
      "/ross-island-jetty.jpg",
      "/ross-island-church.jpg",
      "/ross-island-deer.jpg",
      "/ross-island-path.jpg"
    ],
    faqs: [
      {
        question: "How do I reach Ross Island from Hotel Sunrise?",
        answer: "You can take a 10-minute cab ride from Hotel Sunrise to the Rajiv Gandhi Water Sports Complex (Aberdeen Jetty), and then board a 15-minute speed boat ferry to Ross Island."
      },
      {
        question: "What are the ferry timings and ticket costs for Ross Island?",
        answer: "Ferries run from 8:30 AM to 3:00 PM daily, except Wednesdays when the island is closed. The return ferry ticket costs around ₹350 to ₹400 per person."
      },
      {
        question: "Can we find food and drinking water on Ross Island?",
        answer: "There are only small stalls selling snacks, coconut water, and packaged water. There are no full restaurants, so we recommend dining at Hotel Sunrise before departing."
      },
      {
        question: "How much time is needed to explore Ross Island?",
        answer: "Plan for 2 to 3 hours. This allows you to walk through the British ruins (church, bakery, printing press), visit the museum, and see the roaming spotted deer."
      }
    ],
    seo: {
      title: "Ross Island Heritage Ruins Tour | Hotel Sunrise Port Blair",
      description: "Explore the root-draped ruins of Ross Island in Port Blair. Plan your boat transfer and guided walk with recommendations from Hotel Sunrise."
    },
    nearby: ["cellular-jail", "north-bay-island"]
  },
  "north-bay-island": {
    slug: "north-bay-island",
    name: "North Bay Island",
    category: "Water Adventures",
    image: "/images/experiences/north-bay.jpg",
    duration: "4-5 Hours",
    bestTime: "Morning (9:00 AM - 2 PM)",
    description: "Delve into pristine marine ecosystems with customized scuba diving, sea walking, and glass-bottom boat excursions.",
    overview: {
      detailed: "North Bay Island is the premier destination for water sports in Port Blair. The island features vibrant coral gardens surrounding a sandy cove, making it the perfect hub for both beginners and certified divers to experience the rich marine biodiversity of the Andaman Sea.",
      significance: "The island's lighthouse is famous across India—it is the very lighthouse depicted on the back of the old ₹20 Indian rupee note.",
      whyVisit: "To participate in underwater Sea Walking, a unique activity where you wear a helmet connected to an air line and walk on the ocean bed among coral reefs.",
      uniqueFactor: "Vast fields of brain corals and staghorn corals housing millions of colorful reef fish just meters from the shoreline."
    },
    quickInfo: {
      location: "North of Port Blair, accessible by boat from Water Sports Complex jetty",
      duration: "4 - 5 Hours",
      hours: "9:00 AM - 3:00 PM",
      fee: "Ferries range between ₹350 - ₹500 + activities (Scuba ~₹3500, Sea Walk ~₹4500)",
      bestSeason: "October to May",
      bestTimeOfDay: "Morning, when water clarity is highest",
      difficulty: "Moderate (requires swimming or activity participation)",
      suitableFor: ["Adventure Travelers", "Couples", "Youth"],
      travelFromHotel: "Ferry from Aberdeen Jetty / Water Sports Complex (1 km, 3 mins drive from hotel)"
    },
    highlights: [],
    gallery: [
      "/images/experiences/north-bay.jpg",
      "/images/experiences/north-bay-gallery-1.jpg",
      "/images/experiences/north-bay-gallery-2.jpg",
      "/images/experiences/north-bay-gallery-3.jpg"
    ],
    faqs: [
      {
        question: "What water sports activities are available at North Bay Island?",
        answer: "North Bay is a hub for scuba diving, snorkeling, sea walking, jet-skiing, and speed boat tours. Pre-booking via the Hotel Sunrise concierge is highly recommended."
      },
      {
        question: "Is swimming mandatory for water sports at North Bay?",
        answer: "No! Activities like Sea Walking and helmet diving are fully guided. You wear a specialized breathing helmet and walk on the seabed with certified instructors."
      },
      {
        question: "How do I reach North Bay and what is the cost?",
        answer: "Ferry boats depart from Rajiv Gandhi Water Sports Complex. A combined ferry trip covering Ross and North Bay Islands costs approximately ₹700 to ₹900 per person."
      },
      {
        question: "Are changing rooms and locker facilities available at North Bay?",
        answer: "Yes, there are basic changing rooms and lockers where you can store dry clothes and valuables for a small fee (~₹50) before going underwater."
      }
    ],
    seo: {
      title: "North Bay Island Coral Reef Diving | Hotel Sunrise Port Blair",
      description: "Plan your sea walk, scuba, and lighthouse hike at North Bay Island. Luxury activity packages available via Hotel Sunrise concierge."
    },
    nearby: ["ross-island", "mahatma-gandhi-marine-national-park"]
  },
  "chidiya-tapu": {
    slug: "chidiya-tapu",
    name: "Chidiya Tapu Forest & Sunset Point",
    category: "Nature & Sunsets",
    image: "/chidiya-tapu-sunset-bay.jpg",
    duration: "3-4 Hours",
    bestTime: "Afternoon (3:00 PM - 6:30 PM)",
    description: "Traverse lush forest trails ending at panoramic cliffs to view the most spectacular and dramatic golden sunsets in Andaman.",
    overview: {
      detailed: "Chidiya Tapu, which translates to 'Bird Island', is the southernmost tip of Port Blair. Covered in dense tropical rainforest and mangroves, the area is famous for its rich birdlife and a pristine beach that faces the sunset horizon.",
      significance: "It is an ecological haven containing a mini zoo and a hiking trail that leads to the top of Munda Pahad (Black Cliff), offering sweeping ocean vistas.",
      whyVisit: "To witness the sky turn brilliant shades of crimson and gold behind floating logs on the beach and massive fallen rainforest trees.",
      uniqueFactor: "The call of dozens of endemic bird species echoing through the jungle canopy as the sun dips below the horizon."
    },
    quickInfo: {
      location: "Southern end of South Andaman Island, 25 km from Port Blair city (45 mins drive)",
      duration: "3 - 4 Hours",
      hours: "6:00 AM - 6:00 PM (Sunset beach access is open)",
      fee: "Free access to beach; ₹20 entry for the Biological Park / Zoo",
      bestSeason: "Year-round; winter months are best for birdwatching",
      bestTimeOfDay: "3:30 PM onwards to catch the Munda Pahad trek and sunset",
      difficulty: "Easy (beach) to Moderate (cliff hike)",
      suitableFor: ["Families", "Couples", "Nature Lovers", "Hikers"],
      travelFromHotel: "25 km (45 mins drive from hotel via scenic forest roads)"
    },
    highlights: [
      {
        title: "Munda Pahad Trek",
        desc: "A 1.5 km hike through dense forest tunnels leading to vertical ocean cliffs.",
        image: "/chidiya-tapu-munda-pahad.jpg"
      },
      {
        title: "Fallen Tree Beach",
        desc: "An artistic beach littered with massive driftwood logs, perfect for photography.",
        image: "/chidiya-tapu-driftwood.jpg"
      },
      {
        title: "Biological Park",
        desc: "A sprawling reserve housing endemic animals like the saltwater crocodile and local deer.",
        image: "/chidiya-tapu-bio-park.jpg"
      }
    ],
    gallery: [
      "/chidiya-tapu-sunset-bay.jpg",
      "/chidiya-tapu-bio-park.jpg",
      "/chidiya-tapu-munda-pahad.jpg",
      "/chidiya-tapu-driftwood.jpg"
    ],
    faqs: [
      {
        question: "What is the best time to visit Chidiya Tapu for sunsets?",
        answer: "Plan to arrive between 4:30 PM and 5:00 PM. The drive from Hotel Sunrise takes about 50 minutes (25 km), so we recommend departing the hotel around 3:30 PM."
      },
      {
        question: "Is swimming allowed or safe at Chidiya Tapu Beach?",
        answer: "No, swimming is strictly prohibited at Chidiya Tapu due to strong undercurrents and warnings of saltwater crocodiles in the nearby mangrove creeks."
      },
      {
        question: "How can I hike to the Munda Pahad (Black Cliff) viewpoint?",
        answer: "There is a marked 1.5 km nature trail starting near the beach that leads to the top of the cliff. The hike takes about 45 mins and offers panoramic ocean views."
      },
      {
        question: "Is public transport available to return to Port Blair after sunset?",
        answer: "Public transport and app-cabs are very rare after dark. It is highly recommended to book a return private taxi through the Hotel Sunrise travel desk."
      }
    ],
    seo: {
      title: "Chidiya Tapu Birding & Sunset View Point | Hotel Sunrise Port Blair",
      description: "Plan a romantic sunset trip to Chidiya Tapu. Discover trekking routes, zoo timings, and luxury transfers from Hotel Sunrise."
    },
    nearby: ["mahatma-gandhi-marine-national-park", "cellular-jail"]
  },
  "mahatma-gandhi-marine-national-park": {
    slug: "mahatma-gandhi-marine-national-park",
    name: "Mahatma Gandhi Marine National Park",
    category: "Marine Conservation",
    image: "/mg-marine-island-boat.jpg",
    duration: "5-6 Hours",
    bestTime: "Morning (8:30 AM - 2 PM)",
    description: "Embark on private boat charters through a protected cluster of 15 islands showcasing pristine untouched reefs and mangroves.",
    overview: {
      detailed: "Spread across 281 square kilometers, this Marine National Park comprises 15 uninhabited islands, mangrove creeks, and tropical rainforests. The park was established in 1983 to protect the fragile marine life and coral reefs of the area from commercial exploitation.",
      significance: "It is one of the most successful marine conservation areas in India, sheltering endangered sea turtles (including leatherback and green turtles) and rare dugongs (sea cows).",
      whyVisit: "To board glass-bottom boats to Jolly Buoy or Red Skin Island (open alternately to allow reef recovery) for spectacular coral views in crystal-clear water.",
      uniqueFactor: "The absolute isolation—only a limited number of tourists are permitted daily, ensuring the reefs remain untouched."
    },
    quickInfo: {
      location: "Wandoor, 29 km west of Port Blair (50 minutes drive)",
      duration: "5 - 6 Hours",
      hours: "8:30 AM - 10:30 AM boat departures (Closed Mondays)",
      fee: "₹50 entry permit + boat transfers (~₹850 - ₹1000 per person)",
      bestSeason: "November to April (closes during heavy monsoons)",
      bestTimeOfDay: "Morning departures are mandatory",
      difficulty: "Easy",
      suitableFor: ["Families", "Couples", "Nature Conservationists"],
      travelFromHotel: "29 km (50 mins drive from hotel via Wandoor road)"
    },
    highlights: [
      {
        title: "Jolly Buoy Island",
        desc: "Pristine white sand beach and coral gardens accessible only via plastic-free boats.",
        image: "/mg-marine-island-boat.jpg"
      },
      {
        title: "Coral Snorkeling",
        desc: "Swim along shallow reefs showcasing clownfish, blue corals, and sea anemones.",
        image: "/mg-marine-snorkeling.jpg"
      },
      {
        title: "Marine Wildlife",
        desc: "Protecting green sea turtles, leatherback turtles, and the rare Dugong sea cows.",
        image: "/mg-marine-turtles.jpg"
      }
    ],
    gallery: [
      "/mg-marine-island-boat.jpg",
      "/mg-marine-snorkeling.jpg",
      "/mg-marine-turtles.jpg",
      "/mg-marine-hut.jpg",
      "/mg-marine-dugong.jpg"
    ],
    faqs: [
      {
        question: "How do I visit Jolly Buoy or Red Skin Island?",
        answer: "You must drive to Wandoor Jetty (29 km from the hotel) and take a forest department-approved ferry. The islands are open in alternating 6-month cycles to protect corals."
      },
      {
        question: "Do I need permits to enter the Marine National Park?",
        answer: "Yes, plastic-free permits are mandatory. These must be booked in advance at the Tourism Office in Port Blair. Our concierge can secure these permits for you."
      },
      {
        question: "Is plastic allowed inside the Marine National Park?",
        answer: "No, the park is a strict no-plastic zone. You cannot bring plastic bags or single-use bottles. You must rent standard eco-friendly flasks at Wandoor Jetty."
      },
      {
        question: "What water activities are permitted inside the national park?",
        answer: "Snorkeling and glass-bottom boat rides are permitted in designated coral zones. Scuba diving is not allowed here to protect the fragile reef ecosystems."
      }
    ],
    seo: {
      title: "Mahatma Gandhi Marine National Park Wandoor | Hotel Sunrise",
      description: "Visit Jolly Buoy and Red Skin Island. Reserve Wandoor forest permits and private yacht tours through Hotel Sunrise."
    },
    nearby: ["chidiya-tapu", "north-bay-island"]
  },
  "mount-harriet": {
    slug: "mount-harriet",
    name: "Mount Harriet National Park",
    category: "Nature & Hiking",
    image: "/mount-harriet-hut.jpg",
    duration: "4-5 Hours",
    bestTime: "Morning (7:00 AM - 11 AM)",
    description: "Hike through lush evergreen forest trails to the third-highest peak of Andaman, offering sweeping ocean panoramas and rich birdlife.",
    overview: {
      detailed: "Mount Harriet, now officially renamed Mount Manipur, is the third-highest peak in the Andaman and Nicobar archipelago, standing at 383 meters. The national park is covered in dense evergreen forests that shelter a wide array of endemic flora and fauna, making it a hotspot for nature photography, hiking, and bird watching.",
      significance: "The picture on the back of the old ₹20 Indian rupee note showing a scenic bay was shot from Mount Harriet. It also played a historical role as the summer headquarters of the Chief Commissioner during the British Raj.",
      whyVisit: "To trek the scenic 16 km nature trail to Madhuban, see the traditional Nicobari huts, and enjoy viewpoints showcasing the distant light house of North Bay Island.",
      uniqueFactor: "Rich botanical diversity with rare orchids and over 90 species of exotic birds, including the Andaman wood pigeon and Andaman scops owl."
    },
    quickInfo: {
      location: "Hope Town, Ferrargunj, South Andaman (accessible via vehicle ferry from Chatham Jetty, Port Blair)",
      duration: "4 - 5 Hours",
      hours: "7:00 AM - 5:00 PM daily",
      fee: "₹25 entry fee for Indians, ₹250 for foreigners (Extra for vehicle entry)",
      bestSeason: "November to May",
      bestTimeOfDay: "Early morning for pleasant hiking weather and bird calls",
      difficulty: "Easy to Moderate",
      suitableFor: ["Nature Lovers", "Trekking Enthusiasts", "Photographers", "Bird Watchers"],
      travelFromHotel: "19 km (1 hour travel time: 4 km drive to Chatham Jetty, vehicle ferry, and 15 km hill drive)"
    },
    highlights: [
      {
        title: "The Nicobari Hut",
        desc: "Traditional thatched tribal shelters set up at viewpoints overlooking the bay.",
        image: "/mount-harriet-hut.jpg"
      },
      {
        title: "Tropical Forest Road",
        desc: "Winding paved paths surrounded by giant tropical rainforest hardwood trees.",
        image: "/mount-harriet-jeep.jpg"
      },
      {
        title: "Madhuban Trekking Trail",
        desc: "A beautiful hiking route through wild woods filled with endemic butterflies.",
        image: "/mount-harriet-hike.jpg"
      }
    ],
    gallery: [
      "/mount-harriet-hut.jpg",
      "/mount-harriet-jeep.jpg",
      "/mount-harriet-hike.jpg",
      "/mount-harriet-garden.jpg"
    ],
    faqs: [
      {
        question: "How do we travel to Mount Harriet from Port Blair?",
        answer: "You drive to Chatham Jetty, board the vehicle roll-on ferry to Bamboo Flat (15 mins), and then drive 15 km up the scenic hill road to the park gate."
      },
      {
        question: "What is the entry fee and timings for Mount Harriet?",
        answer: "The park is open from 7:00 AM to 5:00 PM daily. The entry fee is ₹80 for Indian nationals, ₹250 for foreigners, and ₹25 for vehicles."
      },
      {
        question: "Can we hike from Mount Harriet to Madhuban?",
        answer: "Yes, there is a famous 16 km forest trekking route to Madhuban. It is ideal for birdwatching and photography, but you should hire a local guide for safety."
      },
      {
        question: "Is the viewpoint from the ₹20 note located here?",
        answer: "Yes, the viewpoint overlooking North Bay Lighthouse (which was printed on the back of the old ₹20 Indian currency note) is located at the peak garden viewpoint."
      }
    ],
    seo: {
      title: "Mount Harriet National Park Manipur Tour | Hotel Sunrise",
      description: "Explore Mount Harriet in Port Blair. Get route maps, ferry schedules, entry permit details, and luxury transfers from Hotel Sunrise."
    },
    nearby: ["north-bay-island", "ross-island"]
  },
  "corbyns-cove-beach": {
    slug: "corbyns-cove-beach",
    name: "Corbyn's Cove Beach",
    category: "Beaches & Leisure",
    image: "/images/experiences/corbyns-cove-beach.jpg",
    duration: "2-3 Hours",
    bestTime: "Afternoon & Sunset (3:00 PM - 6:00 PM)",
    description: "The nearest beach to Port Blair, popular for sunsets and water sports.",
    overview: {
      detailed: "Corbyn's Cove is a scenic, coconut-palm fringed beach situated just 8 km from the center of Port Blair. Its crescent shape and calm waters make it a favorite spot for swimming, sunbathing, and active marine sports. The drive to Corbyn's Cove is exceptionally picturesque, running directly alongside the turquoise coast.",
      significance: "It is the closest recreational beach to the city center, offering a quick escape for beach walks, local dining, and ocean sports without requiring ferry travel.",
      whyVisit: "To ride high-speed jet skis, lounge under thatched palm parasols, and enjoy local street food snacks with ocean views.",
      uniqueFactor: "The scenic coastal road lined with Japanese bunkers left from World War II that runs directly to the beach."
    },
    quickInfo: {
      location: "8 km South-East of Port Blair city center",
      duration: "2 - 3 Hours",
      hours: "5:00 AM - 9:00 PM",
      fee: "Free Entry (Water sports charged separately: Jet Ski ~₹600, Speedboat ~₹400)",
      bestSeason: "October to May",
      bestTimeOfDay: "Late afternoon for sunsets and cooling sea breezes",
      difficulty: "Very Easy (fully accessible beachfront)",
      suitableFor: ["Families", "Couples", "Solo Travelers"],
      travelFromHotel: "8 km (15 mins drive from hotel via sea-facing coastal road)"
    },
    highlights: [
      {
        title: "Jet Ski Adventures",
        desc: "Ride across the waves on powerful jet-skis with experienced local instructors.",
        image: "/corbyns-cove-jet-ski.jpg"
      },
      {
        title: "Coconut Grove Lounges",
        desc: "Relax under rustic palm-thatched umbrellas with fresh coconut water.",
        image: "/images/experiences/corbyns-cove-beach.jpg"
      }
    ],
    gallery: [
      "/images/experiences/corbyns-cove-beach.jpg",
      "/corbyns-cove-jet-ski.jpg"
    ],
    faqs: [
      {
        question: "How far is Corbyn's Cove Beach from Hotel Sunrise?",
        answer: "It is only 8 km away. The drive takes about 15 minutes via a scenic, sea-facing coastal road. Auto-rickshaws and cabs are easily available."
      },
      {
        question: "What water sports can I do at Corbyn's Cove?",
        answer: "You can enjoy high-speed jet skiing, speed boat rides, and parasailing. Corbyn's Cove is highly active in the mornings and afternoons."
      },
      {
        question: "Are there restaurants, lockers, and changing facilities?",
        answer: "Yes, there are government-run changing rooms and shower stalls, along with popular local cafes and seafood shacks right on the beachfront."
      },
      {
        question: "Is Corbyn's Cove Beach safe for children to swim?",
        answer: "Yes, the water in the bay is generally calm, making it one of the safest beaches for swimming and family beach games. Lifeguards are on duty."
      }
    ],
    seo: {
      title: "Corbyn's Cove Beach Port Blair Guide | Hotel Sunrise",
      description: "Plan your trip to Corbyn's Cove Beach. Get water sports pricing, jet ski booking details, and driving directions from Hotel Sunrise."
    },
    nearby: ["cellular-jail", "samudrika-museum"]
  },
  "chatham-saw-mill": {
    slug: "chatham-saw-mill",
    name: "Chatham Saw Mill",
    category: "History & Heritage",
    image: "/images/experiences/chatham-saw-mill.jpg",
    duration: "1-2 Hours",
    bestTime: "Morning (9:00 AM - 12:00 PM)",
    description: "One of Asia's oldest and largest sawmills, a unique historical attraction.",
    overview: {
      detailed: "Established by the British in 1883, Chatham Saw Mill is a historic industrial hub built on Chatham Island, connected to Port Blair by a short bridge. The mill processes high-value Andaman timber varieties such as Padauk and Gurjan. A dedicated forest museum on-site showcases rare woodwork, carvings, and local flora/fauna displays.",
      significance: "It played a major role in the colonial timber trade and rebuilding efforts post-WWII after suffering heavy bombings during the Japanese occupation.",
      whyVisit: "To witness massive historic machinery cutting huge timber logs and explore the rich history of local forestry at the museum.",
      uniqueFactor: "Operating machinery dating back to the late 19th century still active today on a historic bridge-linked island."
    },
    quickInfo: {
      location: "Chatham Island, Port Blair (bridge-connected)",
      duration: "1 - 2 Hours",
      hours: "9:00 AM - 2:00 PM (Closed on Sundays and Public Holidays)",
      fee: "₹20 Entry Fee (Guided tours available for small fees)",
      bestSeason: "Year-round",
      bestTimeOfDay: "Morning, when the mill machinery is fully operational",
      difficulty: "Easy (standard walking paths)",
      suitableFor: ["History Buffs", "Families", "Students"],
      travelFromHotel: "4 km (10 mins drive from hotel via Chatham Bridge)"
    },
    highlights: [
      {
        title: "Timber Log Processing",
        desc: "See massive Gurjan and Padauk timber logs being cut on large historic machinery.",
        image: "/images/experiences/chatham-saw-mill.jpg"
      },
      {
        title: "British Era Mill Structures",
        desc: "Walk through the historic wooden structures built in the late 19th century.",
        image: "/images/experiences/chatham-gallery-1.jpg"
      }
    ],
    gallery: [
      "/images/experiences/chatham-saw-mill.jpg",
      "/images/experiences/chatham-gallery-1.jpg"
    ],
    faqs: [
      {
        question: "What are the opening hours and weekly holidays for Chatham Saw Mill?",
        answer: "The sawmill and the forest museum are open from 9:00 AM to 2:00 PM. They are closed on Sundays and all national public holidays."
      },
      {
        question: "Is Chatham Saw Mill suitable for families and kids?",
        answer: "Yes! Children find the massive historic log-cutting machinery and the forest museum's life-sized wooden models highly educational and fascinating."
      },
      {
        question: "How do I reach Chatham Island from the hotel?",
        answer: "Chatham Island is connected to Port Blair by a short bridge. It is a 4 km (10-minute) drive from Hotel Sunrise via Haddo and Chatham Bridge."
      },
      {
        question: "Do we need an authorized guide to tour the mill?",
        answer: "While you can explore independently, hiring a local guide at the entrance (~₹50) is recommended to understand the British-era industrial heritage."
      }
    ],
    seo: {
      title: "Chatham Saw Mill Port Blair History & Entry Fee | Hotel Sunrise",
      description: "Discover Chatham Saw Mill in Port Blair, one of Asia's oldest sawmills. Get ticket prices, history, and location details near Hotel Sunrise."
    },
    nearby: ["cellular-jail", "samudrika-museum"]
  },
  "wandoor-beach": {
    slug: "wandoor-beach",
    name: "Wandoor Beach",
    category: "Beaches & Leisure",
    image: "/images/experiences/wandoor-beach.jpg",
    duration: "3-4 Hours",
    bestTime: "Morning & Afternoon (9:00 AM - 4:00 PM)",
    description: "Gateway to Mahatma Gandhi Marine National Park and Jolly Buoy trips.",
    overview: {
      detailed: "Wandoor Beach is a beautiful, peaceful coastline located 29 km southwest of Port Blair. Famous for its sprawling sandy shores and massive fallen uprooted forest trees lying along the beach edge, it serves as the official departure jetty for ferry boats bound for Jolly Buoy and Red Skin islands.",
      significance: "It is the primary gateway to the rich coral reef sanctuaries of Mahatma Gandhi Marine National Park.",
      whyVisit: "To catch snorkeling cruises, photograph iconic coastal driftwood, and enjoy a quiet, uncrowded beach experience.",
      uniqueFactor: "The dramatic, giant uprooted trees that rest along the shoreline, creating natural rustic seats and visual landmarks."
    },
    quickInfo: {
      location: "Wandoor Village, 29 km South-West of Port Blair",
      duration: "3 - 4 Hours",
      hours: "Sunrise to Sunset Jetty departures (Permits needed for Marine Park islands)",
      fee: "Free Beach Entry (Marine Park ferry tickets and permits cost ₹850 - ₹1000)",
      bestSeason: "October to May",
      bestTimeOfDay: "Morning (especially if catching the 9 AM Jolly Buoy ferry)",
      difficulty: "Easy",
      suitableFor: ["Nature Lovers", "Photographers", "Families"],
      travelFromHotel: "29 km (50 mins drive from hotel via Wandoor road)"
    },
    highlights: [
      {
        title: "Coastal Driftwood Logs",
        desc: "Walk among the massive uprooted forest trees framing Wandoor's white sand coast.",
        image: "/images/experiences/wandoor-gallery-2.jpg"
      },
      {
        title: "Sea Caves & Rocky Outcrops",
        desc: "Discover beautiful natural marine erosion pools and rocky caves near the cliffs.",
        image: "/images/experiences/wandoor-gallery-1.jpg"
      },
      {
        title: "Sprawling White Sands",
        desc: "Lounge on wide, clean sandy shorelines shaded by tall tropical trees.",
        image: "/images/experiences/wandoor-gallery-3.jpg"
      }
    ],
    gallery: [
      "/images/experiences/wandoor-beach.jpg",
      "/images/experiences/wandoor-gallery-1.jpg",
      "/images/experiences/wandoor-gallery-2.jpg",
      "/images/experiences/wandoor-gallery-3.jpg"
    ],
    faqs: [
      {
        question: "How do I reach Wandoor Beach and how far is it?",
        answer: "Wandoor is 29 km southwest of Port Blair. The drive takes about 50 minutes. We recommend hiring a private cab via the Hotel Sunrise concierge."
      },
      {
        question: "Is Wandoor Beach safe for swimming?",
        answer: "Swimming is restricted to designated safe zones marked with flags and monitored by lifeguards, as some areas have strong currents and marine life risks."
      },
      {
        question: "Can I catch ferries to Jolly Buoy Island from Wandoor?",
        answer: "Yes, Wandoor Jetty is the departure point. Note that you must secure your island permits in Port Blair *before* arriving at Wandoor."
      },
      {
        question: "Are there restaurants or food options at Wandoor Beach?",
        answer: "There are local tea stalls and small eateries serving fresh fish curry and snacks, but no luxury dining. We suggest carrying light snacks."
      }
    ],
    seo: {
      title: "Wandoor Beach Port Blair Guide | Hotel Sunrise",
      description: "Visit Wandoor Beach in Andaman, the gateway to Jolly Buoy Island. Get permit costs, travel times, and directions from Hotel Sunrise."
    },
    nearby: ["mahatma-gandhi-marine-national-park", "chidiya-tapu"]
  },
  "samudrika-museum": {
    slug: "samudrika-museum",
    name: "Samudrika Naval Marine Museum",
    category: "History & Heritage",
    image: "/images/experiences/samudrika-museum.jpg",
    duration: "1-2 Hours",
    bestTime: "Morning & Afternoon (9:00 AM - 4:00 PM)",
    description: "Managed by the Indian Navy, this museum houses shell collections, coral exhibits, and marine life history.",
    overview: {
      detailed: "Situated at Delanipur in Port Blair, the Samudrika Naval Marine Museum is run by the Indian Navy to create awareness about the steps needed to conserve the marine ecosystems of the Andaman and Nicobar Islands. The museum features five dedicated galleries covering history, geographical facts, marine life, local tribes, and shell collections.",
      significance: "It serves as the main educational repository for Andaman's rich under-sea life, coral reef ecosystems, and local indigenous tribal history.",
      whyVisit: "To see the massive Blue Whale skeleton displayed outside and explore rare seashells and live corals in indoor aquarium tanks.",
      uniqueFactor: "A complete baby Blue Whale skeleton specimen salvaged from Andaman waters, greeting visitors at the entrance gates."
    },
    quickInfo: {
      location: "Delanipur, Port Blair city center",
      duration: "1 - 2 Hours",
      hours: "9:00 AM - 5:00 PM (Closed on Mondays)",
      fee: "₹50 for Adults, ₹25 for Children (Camera fee: ₹50)",
      bestSeason: "Year-round",
      bestTimeOfDay: "Afternoon, as a relaxing indoor retreat between beach visits",
      difficulty: "Very Easy (fully paved flat walkways)",
      suitableFor: ["Families", "Children", "Nature Buffs"],
      travelFromHotel: "3.5 km (8 mins drive from hotel via Haddo road)"
    },
    highlights: [
      {
        title: "Tribal Lifestyle Exhibits",
        desc: "See actual wood carvings, models, and displays showcasing the culture of Andaman tribes.",
        image: "/images/experiences/samudrika-gallery-1.jpg"
      },
      {
        title: "Giant Clam Shell Specimens",
        desc: "Explore massive fossilized clam shell displays in the indoor geological galleries.",
        image: "/images/experiences/samudrika-gallery-2.jpg"
      },
      {
        title: "Navy Defenses Outdoors",
        desc: "View historic heavy anti-aircraft defense guns standing on the museum's lawn parks.",
        image: "/images/experiences/samudrika-gallery-3.jpg"
      }
    ],
    gallery: [
      "/images/experiences/samudrika-museum.jpg",
      "/images/experiences/samudrika-gallery-1.jpg",
      "/images/experiences/samudrika-gallery-2.jpg",
      "/images/experiences/samudrika-gallery-3.jpg"
    ],
    faqs: [
      {
        question: "What is the entrance ticket price for Samudrika Museum?",
        answer: "Tickets are ₹50 for adults, ₹25 for children, and there is a camera ticket fee of ₹50. Tickets can be purchased at the entry counter."
      },
      {
        question: "What are the timings and weekly holidays for the museum?",
        answer: "The museum is open from 9:00 AM to 5:00 PM. It is closed on Mondays and national holidays."
      },
      {
        question: "What are the main attractions inside the museum?",
        answer: "The main highlight is the baby Blue Whale skeleton at the entrance, followed by galleries on Andaman tribes, local corals, and rare shells."
      },
      {
        question: "How far is the Samudrika Museum from the hotel?",
        answer: "It is located at Delanipur, just 3.5 km (an 8-minute drive) from Hotel Sunrise. Cabs and auto-rickshaws are readily available."
      }
    ],
    seo: {
      title: "Samudrika Naval Marine Museum Port Blair | Hotel Sunrise",
      description: "Visit the Navy's Samudrika Museum in Port Blair. Get entry ticket prices, hours, whale skeleton highlights, and concierge support from Hotel Sunrise."
    },
    nearby: ["cellular-jail", "chatham-saw-mill"]
  }
};
