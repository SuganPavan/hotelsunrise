export interface PackageData {
  slug: string;
  title: string;
  price: string;
  image: string;
  description: string;
  longDescription: string;
  category: string;
  duration: string;
  features: string[];
  itinerary: {
    dayNum: string;
    daySubtitle: string;
    title: string;
    desc: string;
    image: string;
    chips: string[];
  }[];
  included: string[];
  gallery: string[];
}

export const PACKAGES_DATA: Record<string, PackageData> = {
  "honeymoon-package": {
    slug: "honeymoon-package",
    title: "Romantic Andaman Honeymoon Escape",
    price: "Rate on Enquiry / 4 Nights",
    image: "/honeymoon-decor.jpg",
    description: "Perfect for couples visiting Andaman.",
    longDescription: "Stay comfortably at Hotel Sunrise and discover the most romantic destinations across the Andaman Islands. This package is ideal for newly married couples looking for a clean, welcoming, and affordable base to explore Port Blair, Havelock, and beyond.",
    category: "Romantic Escape",
    duration: "5 Days / 4 Nights",
    features: [
      "Comfortable Stay at Hotel Sunrise",
      "Airport Pickup & Drop",
      "Daily Breakfast",
      "Ferry Booking Assistance",
      "Private Sightseeing Assistance",
      "Local Travel Guidance",
      "Complimentary Welcome Drink",
      "Romantic Room Decoration (Optional)",
      "Candlelight Dinner Arrangement (Optional)"
    ],
    itinerary: [
      {
        dayNum: "01",
        daySubtitle: "DAY 01 &bull; Welcome to Paradise",
        title: "A Journey Begins Together",
        desc: "Your romantic escape begins the moment you arrive in the Andaman Islands. After a warm welcome and comfortable hotel check-in, discover the fascinating history of the Cellular Jail before spending the evening hand in hand along the peaceful shores of Corbyn's Cove Beach. As night falls, experience the unforgettable Sound & Light Show that beautifully brings history to life.",
        image: "/couples-sunset.jpg",
        chips: ["✈️ Airport Transfer", "🏛 Cellular Jail", "🏖 Corbyn's Cove", "❤️ Sunset Walk", "🎭 Sound & Light Show"]
      },
      {
        dayNum: "02",
        daySubtitle: "DAY 02 &bull; Timeless Island Romance",
        title: "Timeless Island Romance",
        desc: "Take a scenic ferry to Netaji Subhas Chandra Bose Island (Ross Island), where historic colonial ruins blend with lush tropical landscapes. Wander together beneath ancient trees, discover charming heritage buildings, observe deer and peacocks roaming freely, and later enjoy breathtaking panoramic views from Mount Harriet as the sun sets over the islands.",
        image: "/ross-island-ruins-roots.jpg",
        chips: ["🚢 Ferry Ride", "🏝 Ross Island", "🏛 Colonial Heritage", "⛰ Mount Harriet", "📸 Couple Photography"]
      },
      {
        dayNum: "03",
        daySubtitle: "DAY 03 &bull; Love Meets the Ocean",
        title: "Love Meets the Ocean",
        desc: "Travel to the breathtaking Havelock Island (Swaraj Dweep), home to the world-famous Radhanagar Beach. Relax on powder-soft white sands, swim in crystal-clear turquoise waters, capture beautiful couple photographs, and enjoy peaceful moments together surrounded by the beauty of the Andaman Sea.",
        image: "/elephant-beach.jpg",
        chips: ["🏝 Havelock Island", "🏖 Radhanagar Beach", "🏖 White Sand Beach", "🌊 Ocean Views", "📸 Couple Photography"]
      },
      {
        dayNum: "04",
        daySubtitle: "DAY 04 &bull; Paradise Beneath the Sea",
        title: "Paradise Beneath the Sea",
        desc: "Discover the vibrant marine world of Jolly Buoy Island (subject to government permissions and weather conditions). Experience colorful coral reefs through snorkeling or a glass-bottom boat ride before ending the day at Chidiya Tapu, where one of Andaman's most spectacular sunsets creates the perfect romantic finale.",
        image: "/images/experiences/chidiya-tapu.jpg",
        chips: ["🏝 Jolly Buoy Island", "🪸 Coral Reefs", "🤿 Snorkeling", "🚢 Glass Bottom Boat", "🌅 Chidiya Tapu Sunset"]
      },
      {
        dayNum: "05",
        daySubtitle: "DAY 05 &bull; Until We Meet Again",
        title: "Until We Meet Again",
        desc: "Enjoy a leisurely breakfast before exploring Aberdeen Bazaar for handcrafted souvenirs, pearls, spices, and local treasures. Your private airport transfer marks the end of a beautiful honeymoon, leaving you with unforgettable memories of love, adventure, and the timeless beauty of the Andaman Islands.",
        image: "/bazaar.jpg",
        chips: ["☕ Breakfast", "🛍 Shopping", "🛍 Aberdeen Bazaar", "✈️ Airport Transfer", "✨ Beautiful Memories"]
      }
    ],
    included: [
      "Airport Pickup & Drop",
      "Private Air-Conditioned Vehicle",
      "Romantic Hotel Accommodation",
      "Daily Breakfast",
      "Ferry Tickets (As per itinerary)",
      "Sightseeing Assistance",
      "Professional Driver",
      "24×7 Travel Support"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "family-package": {
    slug: "family-package",
    title: "Family Package",
    price: "Rate on Enquiry / 4 Nights",
    image: "/rooms/family-room-family.jpg",
    description: "Comfortable accommodation for families.",
    longDescription: "Enjoy an unforgettable family holiday in the Andaman Islands with beautiful beaches, historic landmarks, tropical islands, nature parks, and memorable experiences designed for travelers of all ages.",
    category: "Family Fun & Heritage",
    duration: "5 Days / 4 Nights",
    features: [
      "Airport Pickup & Drop",
      "Private Air-Conditioned Transportation",
      "Comfortable Hotel Accommodation",
      "Daily Breakfast",
      "Ferry Tickets (As per itinerary)",
      "Sightseeing Assistance",
      "Experienced Driver",
      "Family Travel Assistance",
      "24×7 Customer Support"
    ],
    itinerary: [
      {
        dayNum: "01",
        daySubtitle: "DAY 01 &bull; Welcome to Paradise",
        title: "Welcome to the Andaman Islands",
        desc: "Begin your family holiday with a warm welcome at Veer Savarkar International Airport. After a comfortable hotel check-in, explore the historic Cellular Jail National Memorial and discover the stories of India's freedom struggle. End the day with a peaceful stroll along Corbyn's Cove Beach before enjoying the spectacular Sound & Light Show together.",
        image: "/cellular-jail-day.jpg",
        chips: ["✈️ Airport Transfer", "🏛 Cellular Jail", "🏄 Corbyn's Cove", "🎭 Sound & Light Show", "👨‍👩‍👧‍👦 Family Time"]
      },
      {
        dayNum: "02",
        daySubtitle: "DAY 02 &bull; Discover a Historic Island",
        title: "Discover a Historic Island",
        desc: "Enjoy a scenic ferry ride to Netaji Subhas Chandra Bose Island (Ross Island), where colonial ruins blend beautifully with lush tropical landscapes. Observe friendly deer and peacocks roaming freely while exploring the island's fascinating history. Capture memorable family photographs before returning to Port Blair for a relaxing evening.",
        image: "/ross-island-deer.jpg",
        chips: ["🚢 Ferry Ride", "🏝 Ross Island", "🦌 Wildlife", "🏛 Colonial Ruins", "📸 Family Photography"]
      },
      {
        dayNum: "03",
        daySubtitle: "DAY 03 &bull; Nature, Wildlife & Beautiful Sunsets",
        title: "Nature, Wildlife & Beautiful Sunsets",
        desc: "Spend the day surrounded by nature at Chidiya Tapu. Explore peaceful walking trails, discover local birdlife, and enjoy breathtaking coastal scenery. As the sun sets, relax with your family while admiring one of Andaman's most beautiful panoramic sunset views before visiting Marina Park for a leisurely evening.",
        image: "/chidiya-tapu-sunset-bay.jpg",
        chips: ["🌿 Nature Walk", "🐦 Bird Watching", "🌅 Chidiya Tapu", "🌊 Marina Park", "🌅 Sunset"]
      },
      {
        dayNum: "04",
        daySubtitle: "DAY 04 &bull; Beach Escape & Marine Beauty",
        title: "Beach Escape & Marine Beauty",
        desc: "Visit the tranquil shores of Wandoor Beach, the gateway to Mahatma Gandhi Marine National Park. Enjoy a relaxing beach day where children can play in open spaces while adults soak in the peaceful surroundings. Capture memorable family moments against turquoise waters and enjoy fresh local refreshments before returning to the hotel.",
        image: "/wandoor-beach.jpg",
        chips: ["🌊 Wandoor Beach", "🐠 Marine National Park", "👨‍👩‍👧‍👦 Family Fun", "📸 Photography", "🏖 Beach Walk"]
      },
      {
        dayNum: "05",
        daySubtitle: "DAY 05 &bull; Memories to Take Home",
        title: "Memories to Take Home",
        desc: "Enjoy a leisurely breakfast before exploring Aberdeen Bazaar for handcrafted souvenirs, pearls, spices, shell crafts, and locally made treasures. After hotel check-out, your private transfer will take you to the airport, bringing your unforgettable Andaman family vacation to a memorable close.",
        image: "/bazaar.jpg",
        chips: ["☕ Breakfast", "🛍 Aberdeen Bazaar", "🐚 Souvenir Shopping", "✈️ Airport Transfer", "✨ Happy Memories"]
      }
    ],
    included: [
      "Airport Pickup & Drop",
      "Private Air-Conditioned Transportation",
      "Comfortable Hotel Accommodation",
      "Daily Breakfast",
      "Ferry Tickets (As per itinerary)",
      "Sightseeing Assistance",
      "Experienced Driver",
      "Family Travel Assistance",
      "24×7 Customer Support"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      "/rooms/family-room-family.jpg"
    ]
  },
  "explore-andaman": {
    slug: "explore-andaman",
    title: "Explore Andaman Package",
    price: "Rate on Enquiry / 4 Nights",
    image: "/explore-andaman-bg.jpg",
    description: "Perfect for first-time visitors.",
    longDescription: "Stay comfortably at Hotel Sunrise and discover breathtaking beaches, historic landmarks, wildlife, and unforgettable island experiences. This package is perfect for families, couples, friends, solo travellers, and first-time visitors.",
    category: "Sightseeing & Leisure",
    duration: "5 Days / 4 Nights",
    features: [
      "Comfortable Stay at Hotel Sunrise",
      "Airport Pickup & Drop",
      "Daily Breakfast",
      "Ferry Booking Assistance",
      "Local Sightseeing Assistance",
      "Travel Planning Support",
      "Complimentary Welcome Drink",
      "Local Travel Tips"
    ],
    itinerary: [
      {
        dayNum: "01",
        daySubtitle: "DAY 01 &bull; Welcome to Paradise",
        title: "Where Your Island Journey Begins",
        desc: "Arrive in Port Blair and begin your Andaman adventure with a warm welcome and comfortable hotel check-in. Discover the fascinating history of the iconic Cellular Jail National Memorial before enjoying a peaceful evening at Corbyn's Cove Beach. End the day with the captivating Sound & Light Show that beautifully narrates India's freedom struggle.",
        image: "/cellular-jail-day.jpg",
        chips: ["✈️ Airport Transfer", "🏛 Cellular Jail", "🏄 Corbyn's Cove", "🌅 Sunset", "🎭 Sound & Light Show"]
      },
      {
        dayNum: "02",
        daySubtitle: "DAY 02 &bull; Discover Islands Rich in History",
        title: "Discover Islands Rich in History",
        desc: "Take a scenic ferry ride to Netaji Subhas Chandra Bose Island (Ross Island), once the administrative headquarters of the British. Wander through fascinating colonial ruins surrounded by lush tropical forests while observing friendly deer and peacocks roaming freely. Continue exploring the island's breathtaking coastal scenery before returning to Port Blair.",
        image: "/ross-island-ruins-roots.jpg",
        chips: ["🚢 Ferry Ride", "🏝 Ross Island", "🏛 Colonial Heritage", "🦌 Wildlife", "📸 Photography"]
      },
      {
        dayNum: "03",
        daySubtitle: "DAY 03 &bull; Nature's Finest Sunset",
        title: "Nature's Finest Sunset",
        desc: "Escape into the tranquil beauty of Chidiya Tapu, famous for its coastal forests, birdlife, and spectacular panoramic viewpoints. Wander along peaceful nature trails before witnessing one of the most breathtaking sunsets in the Andaman Islands as the sky transforms into shades of gold and crimson.",
        image: "/chidiya-tapu-sunset-bay.jpg",
        chips: ["🌅 Chidiya Tapu", "🌿 Nature Trails", "🐦 Bird Watching", "🌅 Sunset", "🌊 Coastal Views"]
      },
      {
        dayNum: "04",
        daySubtitle: "DAY 04 &bull; Beaches & Marine Wonders",
        title: "Beaches & Marine Wonders",
        desc: "Spend a relaxing day at the serene Wandoor Beach, the gateway to Mahatma Gandhi Marine National Park. Enjoy the turquoise waters, soft sandy shoreline, and lush coastal landscapes. Optional boat excursions are available (subject to weather and government permissions) for travelers wishing to experience the marine ecosystem.",
        image: "/wandoor-beach.jpg",
        chips: ["🌊 Wandoor Beach", "🐠 Marine National Park", "🏖 Beach Walk", "📸 Photography", "🌊 Ocean Views"]
      },
      {
        dayNum: "05",
        daySubtitle: "DAY 05 &bull; Memories That Travel Home",
        title: "Memories That Travel Home",
        desc: "Enjoy a leisurely breakfast before exploring Aberdeen Bazaar, where you can browse handcrafted souvenirs, pearls, spices, shell crafts, and local treasures. After your private airport transfer, depart with unforgettable memories of the Andaman Islands and a desire to return again.",
        image: "/bazaar.jpg",
        chips: ["☕ Breakfast", "🛍 Aberdeen Bazaar", "🐚 Souvenir Shopping", "✈️ Airport Transfer", "✨ Island Memories"]
      }
    ],
    included: [
      "Accommodation in Double Bedroom (AC)",
      "Daily Complimentary Breakfast",
      "Veer Savarkar Airport Pick & Drop",
      "Attraction entry fees and ferry support"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "adventure-package": {
    slug: "adventure-package",
    title: "Adventure Explorer Package",
    price: "Rate on Enquiry / 4 Nights",
    image: "/corbyns-cove-jet-ski.jpg",
    description: "Includes Scuba Diving, Snorkeling, Sea Walk, and Jet Ski.",
    longDescription: "Experience the thrill of the Andaman Islands with world-class scuba diving, exciting water sports, island adventures, mangrove kayaking, and breathtaking coastal landscapes.",
    category: "Adventure & Water Sports",
    duration: "5 Days / 4 Nights",
    features: [
      "Airport Pickup & Drop",
      "Private Air-Conditioned Transportation",
      "Hotel Accommodation",
      "Daily Breakfast",
      "Ferry Tickets (As per itinerary)",
      "Guided Sightseeing",
      "Professional Driver",
      "Adventure Tour Assistance",
      "24×7 Travel Support"
    ],
    itinerary: [
      {
        dayNum: "01",
        daySubtitle: "DAY 01 &bull; Welcome to Paradise",
        title: "Welcome to Paradise",
        desc: "Your adventure begins as you arrive at Veer Savarkar International Airport in Port Blair. After a warm welcome and hotel check-in, step into history with a guided visit to the iconic Cellular Jail National Memorial. As the sun begins to set, experience the thrill of Jet Skiing at Corbyn's Cove Beach before ending the evening with the captivating Sound & Light Show.",
        image: "/cellular-jail-day.jpg",
        chips: ["✈️ Airport Transfer", "🏛 Cellular Jail", "🏄 Jet Ski", "🏖 Corbyn's Cove", "🎭 Sound & Light Show"]
      },
      {
        dayNum: "02",
        daySubtitle: "DAY 02 &bull; Dive into an Underwater World",
        title: "Dive into an Underwater World",
        desc: "Travel by ferry to North Bay Island, where crystal-clear waters reveal one of Andaman's most vibrant marine ecosystems. Discover colorful coral reefs through scuba diving, enjoy an unforgettable Sea Walk experience, or snorkel among tropical fish for a day filled with underwater adventure.",
        image: "/coral-reef.jpg",
        chips: ["🚢 Ferry Ride", "🤿 Scuba Diving", "🚶 Sea Walk", "🐠 Snorkeling", "🪸 Coral Reefs"]
      },
      {
        dayNum: "03",
        daySubtitle: "DAY 03 &bull; Island Escape & Ocean Thrills",
        title: "Island Escape & Ocean Thrills",
        desc: "Cruise to the breathtaking Havelock Island (Swaraj Dweep). Relax on the award-winning Radhanagar Beach before heading to Elephant Beach for thrilling adventures including Jet Skiing, Banana Boat Rides, Speed Boating, and optional snorkeling. Return to Port Blair in the evening (subject to ferry schedules).",
        image: "/elephant-beach.jpg",
        chips: ["🏝 Havelock Island", "🏖 Radhanagar Beach", "🌊 Elephant Beach", "🍌 Banana Boat", "🏄 Jet Ski", "🚤 Speed Boat"]
      },
      {
        dayNum: "04",
        daySubtitle: "DAY 04 &bull; Beyond the Shore",
        title: "Beyond the Shore",
        desc: "Explore the tranquil mangrove forests through a guided kayaking experience (subject to availability), then venture to Chidiya Tapu for a scenic trek to Munda Pahad. End the day watching one of the most spectacular sunsets over the Bay of Bengal.",
        image: "/images/experiences/chidiya-tapu.jpg",
        chips: ["🛶 Mangrove Kayaking", "🥾 Nature Trails", "🌿 Chidiya Tapu", "🏔 Munda Pahad", "🌅 Sunset Viewpoint"]
      },
      {
        dayNum: "05",
        daySubtitle: "DAY 05 &bull; Until the Next Adventure",
        title: "Until the Next Adventure",
        desc: "Enjoy a relaxed breakfast before visiting Aberdeen Bazaar to shop for local spices, pearls, shell crafts, and handcrafted souvenirs. Your private airport transfer concludes an unforgettable Andaman adventure filled with excitement, discovery, and lasting memories.",
        image: "/bazaar.jpg",
        chips: ["☕ Breakfast", "🛍 Aberdeen Bazaar", "🐚 Souvenir Shopping", "✈️ Airport Transfer"]
      }
    ],
    included: [
      "Airport Pickup & Drop",
      "Private Air-Conditioned Transportation",
      "Hotel Accommodation",
      "Daily Breakfast",
      "Ferry Tickets (As per itinerary)",
      "Guided Sightseeing",
      "Professional Driver",
      "Adventure Tour Assistance",
      "24×7 Travel Support"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "/elephant-beach.jpg"
    ]
  },
  "budget-traveller-package": {
    slug: "budget-traveller-package",
    title: "Budget Traveller Package",
    price: "Rate on Enquiry / 3 Nights",
    image: "/images/experiences/chidiya-tapu.jpg",
    description: "Ideal for solo travellers and backpackers.",
    longDescription: "Our highly affordable budget traveller package is designed for backpackers and solo travellers. Enjoy a clean, secure Non-AC room in the market center, breakfast, and full local transit guidance.",
    category: "Budget & Solo Travel",
    duration: "4 Days / 3 Nights",
    features: [
      "Comfortable Room (Double Non-AC)",
      "Daily Local Breakfasts",
      "Airport Pickup SUV Service",
      "Local Transit Assistance & Maps"
    ],
    itinerary: [
      {
        dayNum: "01",
        daySubtitle: "DAY 01 &bull; Welcome to Paradise",
        title: "Your Island Adventure Begins",
        desc: "Arrive at Veer Savarkar International Airport in Port Blair and receive a warm welcome before transferring to your comfortable budget accommodation. After check-in, meet our local travel experts for a short orientation and helpful tips on exploring the Andaman Islands efficiently while making the most of your budget.",
        image: "/hotel-exterior.jpg",
        chips: ["🎒 Budget Travel", "🏨 Budget Stay", "🗺️ Local Orientation", "💡 Travel Tips", "✨ Free Time"]
      },
      {
        dayNum: "02",
        daySubtitle: "DAY 02 &bull; History & Culture",
        title: "History, Culture & Local Flavours",
        desc: "Discover the fascinating history of the Cellular Jail National Memorial through a guided visit to its museum and preserved prison cells. Later, stroll through the lively streets of Aberdeen Bazaar, sample delicious local snacks, browse handmade souvenirs, and conclude the evening with the captivating Sound & Light Show.",
        image: "/cellular-jail-day.jpg",
        chips: ["🏛 Cellular Jail", "🏛 Museum", "🛍 Aberdeen Bazaar", "🍜 Local Food", "🎭 Sound & Light Show"]
      },
      {
        dayNum: "03",
        daySubtitle: "DAY 03 &bull; Heritage & Sunsets",
        title: "Island Heritage & Coastal Escape",
        desc: "Take a shared ferry to Netaji Subhas Chandra Bose Island (Ross Island), where fascinating colonial ruins meet lush tropical landscapes. Spend time exploring the island before heading to Corbyn's Cove Beach for a relaxing sunset walk along the shoreline.",
        image: "/ross-island-ruins-roots.jpg",
        chips: ["⛴ Shared Ferry", "🏝 Ross Island", "🏛 Colonial Ruins", "🏖 Corbyn's Cove", "🌅 Sunset Walk"]
      },
      {
        dayNum: "04",
        daySubtitle: "DAY 04 &bull; Nature Trails & Farewell",
        title: "Nature & Farewell",
        desc: "Begin your final day with a visit to Chidiya Tapu, one of Andaman's most peaceful natural attractions. Enjoy scenic walking trails, birdwatching opportunities, and panoramic coastal views before your comfortable airport transfer for your journey home.",
        image: "/images/experiences/chidiya-tapu.jpg",
        chips: ["🌿 Nature Trail", "🚶 Nature Walk", "🐦 Bird Watching", "🌅 Scenic Views", "✈️ Airport Transfer"]
      }
    ],
    included: [
      "Accommodation in Double Bedroom (Non-AC)",
      "Daily Local Breakfasts",
      "Airport pick up drop assistance",
      "Local town street maps and ferry guides"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
    ]
  }
};
