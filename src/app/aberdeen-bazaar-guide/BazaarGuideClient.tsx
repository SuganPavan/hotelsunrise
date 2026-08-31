"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Utensils, Info, MapPin, ExternalLink, Calendar, Heart, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

export default function BazaarGuideClient() {
  // Custom schema markup for search engines
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": "Aberdeen Bazaar Port Blair Guide",
    "description": "Comprehensive visitor guide to Aberdeen Bazaar in Sri Vijaya Puram (Port Blair), Andaman. Covers shopping, dining, Annapurna cafeteria, and local tips.",
    "url": "https://www.hotelsunriseandaman.com/aberdeen-bazaar-guide",
    "image": "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1200&q=80",
    "audience": {
      "@type": "Audience",
      "audienceType": "Tourists, Budget Travelers, Couples, Families"
    },
    "about": [
      {
        "@type": "LocalBusiness",
        "name": "Hotel Sunrise",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Babu Lane, Aberdeen Bazaar",
          "addressLocality": "Sri Vijaya Puram",
          "addressRegion": "Andaman & Nicobar Islands",
          "postalCode": "744104",
          "addressCountry": "IN"
        },
        "telephone": "+919732470317"
      },
      {
        "@type": "TouristAttraction",
        "name": "Aberdeen Bazaar",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Port Blair",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between selection:bg-accent selection:text-primary">
      {/* Injecting Schema Markup JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar isHeroTransitioned={true} />

      {/* Floating Back Button */}
      <div className="absolute top-22 left-6 md:top-28 md:left-12 z-30">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-2 text-[10px] md:text-xs text-pearl/80 hover:text-accent font-sans tracking-widest uppercase font-bold transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-[8px] border border-white/10"
        >
          <ArrowLeft size={14} /> Back to Experiences
        </Link>
      </div>

      {/* Cinematic Header Banner */}
      <section className="relative w-full h-auto min-h-[35vh] md:min-h-[40vh] flex items-center justify-center overflow-hidden bg-primary pt-32 pb-12 md:pt-24 md:pb-12">
        <Image
          src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=2000&q=80"
          alt="Shopping and spice bazaars in India"
          fill
          priority
          className="object-cover opacity-50 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/95 via-[#081628]/75 to-[#f8f9fa] z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-8 space-y-4">
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold">
            LOCAL NEIGHBORHOOD GUIDE
          </span>
          <h1 className="font-serif text-3xl md:text-6xl text-pearl leading-[1.1] font-semibold tracking-wide">
            Aberdeen Bazaar <br />
            <span className="text-accent italic font-medium">Port Blair's Vibrant Hub</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/75 text-xs md:text-sm leading-relaxed font-light">
            Discover local souvenir shopping, traditional dining, and transport coordinates inside the island's bustling commercial center.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <main className="flex-grow py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Extensive Guide Information */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Intro Section */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-semibold leading-tight">
                The Cultural Heartbeat of Sri Vijaya Puram
              </h2>
              <p className="font-sans text-charcoal/80 text-sm md:text-base leading-relaxed font-light">
                Aberdeen Bazaar is the central marketplace of Port Blair (newly renamed Sri Vijaya Puram). Known for its chaotic energy, narrow lanes, and colorful storefronts, it is the place where travelers and locals meet. 
              </p>
              <p className="font-sans text-charcoal/80 text-sm md:text-base leading-relaxed font-light">
                From historical monuments to modern commercial storefronts, the bazaar houses everything from hand-carved wooden artifacts and pearl jewelry to traditional vegetarian eateries and organic spice markets. 
              </p>
            </section>

            {/* Shopping Section */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-charcoal/10 pb-4">
                <ShoppingBag className="text-accent" size={24} />
                <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                  Handicrafts & Souvenir Shopping
                </h3>
              </div>
              <p className="font-sans text-charcoal/80 text-sm leading-relaxed font-light">
                If you are looking for genuine Andamanese souvenirs, Aberdeen Bazaar offers the best selection of authentic local items:
              </p>
              
              <ul className="space-y-6 mt-4">
                <li className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-primary uppercase tracking-wide">
                    1. Sagarika Government Emporium
                  </h4>
                  <p className="font-sans text-charcoal/80 text-xs md:text-sm leading-relaxed font-light">
                    Run by the local administration, Sagarika is the safest place to purchase legal, certified sea-shell ornaments, mother-of-pearl jewelry, coconut-shell lamps, and padauk wood carvings.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-primary uppercase tracking-wide">
                    2. Local Organic Spice Stalls
                  </h4>
                  <p className="font-sans text-charcoal/80 text-xs md:text-sm leading-relaxed font-light">
                    Andaman boasts excellent local plantations. Stalls in the bazaar sell freshly harvested black pepper, cardamom, cloves, cinnamon, and nutmeg sourced directly from South Andaman farms.
                  </p>
                </li>
                <li className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-primary uppercase tracking-wide">
                    3. Shell Jewelry & Handicrafts
                  </h4>
                  <p className="font-sans text-charcoal/80 text-xs md:text-sm leading-relaxed font-light">
                    Stalls along Babu Lane display beautifully crafted shell accessories, wall hangings, and customized keychains. *Tip: Remember to keep government receipts for shell items, as airport customs may verify them.*
                  </p>
                </li>
              </ul>
            </section>

            {/* Dining Section */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-charcoal/10 pb-4">
                <Utensils className="text-accent" size={24} />
                <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                  Where to Eat: Traditional Dining
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-primary font-medium">
                    Annapurna Cafeteria (South Indian Specialty)
                  </h4>
                  <p className="font-sans text-charcoal/80 text-sm leading-relaxed font-light">
                    Located in the heart of Aberdeen Bazaar, Annapurna Cafeteria is the most famous pure-vegetarian restaurant in Port Blair. Known for its clean environment and authentic taste, it is a must-visit for delicious masala dosas, idlis, variety rice meals, and hot filter coffee.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-primary font-medium">
                    Annapurna Hotel Sweets & Chat Corners
                  </h4>
                  <p className="font-sans text-charcoal/80 text-sm leading-relaxed font-light">
                    Near the bazaar crossroads, local sweet shops offer traditional Indian sweets, hot samosas, and chat items, making it the perfect spot for an evening snack after a long day of sightseeing.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg text-primary font-medium">
                    Lighthouse Galley & Seafood Dining
                  </h4>
                  <p className="font-sans text-charcoal/80 text-sm leading-relaxed font-light">
                    For non-vegetarian travelers, restaurants within a 5-10 minute walk serve freshly caught local seafood, including butter prawns, crab curries, and tandoori fish.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips Section */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-charcoal/10 pb-4">
                <Info className="text-accent" size={24} />
                <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                  Practical Visitor Tips
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-1">
                  <h5 className="font-sans font-bold text-[#081628] flex items-center gap-2">
                    <Clock size={16} className="text-accent-hover" /> Timings & Holidays
                  </h5>
                  <p className="font-sans text-charcoal/80 text-xs leading-relaxed font-light">
                    Shops open from 10:00 AM to 1:00 PM, and 3:30 PM to 9:00 PM. **Sunday is the weekly holiday** when many major shops are closed.
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="font-sans font-bold text-[#081628] flex items-center gap-2">
                    <MapPin size={16} className="text-accent-hover" /> Local Transit
                  </h5>
                  <p className="font-sans text-charcoal/80 text-xs leading-relaxed font-light">
                    Auto-rickshaws are available directly outside Babu Lane. Taxis can also be hired for airport transfers or trips to attractions like Cellular Jail.
                  </p>
                </div>
              </div>
            </section>

            {/* Conversion CTA Block */}
            <section className="bg-[#081628] text-pearl border border-accent/20 rounded-[24px] p-8 md:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center justify-center gap-2">
                <span className="text-[10px] tracking-[0.3em] text-accent uppercase font-bold">
                  STAY IN THE CENTER OF PORT BLAIR
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-pearl font-medium leading-tight max-w-xl mx-auto">
                Stay at Hotel Sunrise in Babu Lane
              </h3>
              <p className="max-w-2xl mx-auto font-sans text-pearl/70 text-xs md:text-sm leading-relaxed font-light">
                Why travel back and forth when you can stay right in the center of the action? Hotel Sunrise is located at Babu Lane in Aberdeen Bazaar, placing shopping, traditional vegetarian dining (Annapurna Cafeteria), and local transit links right at your doorstep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
                <Link
                  href="/rooms"
                  className="bg-accent hover:bg-accent-hover text-primary font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-[8px] transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Explore Rooms
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-accent text-pearl hover:text-accent font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-[8px] transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Book Stay via WhatsApp
                </Link>
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Quick Stats Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
            <div className="bg-white border border-[#081628]/5 rounded-[24px] p-6 shadow-sm space-y-6 text-left">
              <h4 className="font-serif text-lg text-primary font-semibold border-b border-charcoal/10 pb-3">
                At a Glance
              </h4>
              
              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent flex-shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-[#081628] block">Location</span>
                    <span className="text-charcoal/80">Babu Lane, Aberdeen Bazaar, Port Blair</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShoppingBag className="text-accent flex-shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-[#081628] block">Famous For</span>
                    <span className="text-charcoal/80">Shell crafts, spices, traditional food</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-accent flex-shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-[#081628] block">Best Time to Visit</span>
                    <span className="text-charcoal/80">4:00 PM – 9:00 PM (for evening markets)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="text-accent flex-shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-[#081628] block">Proximity to Hotel Sunrise</span>
                    <span className="text-accent-hover font-bold">0-minute walk (Located in Babu Lane)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Desk Helper Widget */}
            <div className="bg-primary text-pearl rounded-[24px] p-6 shadow-md text-left space-y-4">
              <h5 className="font-serif text-base text-accent font-semibold">
                Free Port Blair Travel Support
              </h5>
              <p className="font-sans text-xs text-pearl/70 leading-relaxed font-light">
                Need help booking local ferries, arranging auto transits to Annapurna cafeteria, or planning a trip to Cellular Jail? Our concierge desk is here to help!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs text-accent font-bold font-sans hover:text-accent-hover transition-colors uppercase tracking-wider"
              >
                Connect to Concierge <ExternalLink size={12} />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppConcierge />
    </div>
  );
}
