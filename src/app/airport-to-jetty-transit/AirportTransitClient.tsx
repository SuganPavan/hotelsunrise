"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Plane, Ship, Clock, MapPin, Compass, Info, CheckCircle2, Phone, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

export default function AirportTransitClient() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": "Port Blair Airport to Jetty Transit Guide",
    "description": "Essential transit guide for traveling from Veer Savarkar International Airport to Phoenix Bay Jetty and Haddo Wharf in Port Blair. Covers distances, fares, ferry terminals, and transit hotel stays.",
    "url": "https://www.hotelsunriseandaman.com/airport-to-jetty-transit",
    "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    "audience": {
      "@type": "Audience",
      "audienceType": "Tourists, Island Hoppers, Couples, Families"
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
        "@type": "Airport",
        "name": "Veer Savarkar International Airport (IXZ)",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Port Blair",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "TouristAttraction",
        "name": "Phoenix Bay Jetty",
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
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80"
          alt="Port Blair airport and island transit"
          fill
          priority
          className="object-cover opacity-50 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/95 via-[#081628]/75 to-[#f8f9fa] z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-8 space-y-4">
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold">
            ANDAMAN TRANSIT & TRAVEL GUIDE
          </span>
          <h1 className="font-serif text-3xl md:text-6xl text-pearl leading-[1.1] font-semibold tracking-wide">
            Airport to Jetty Transit <br />
            <span className="text-accent italic font-medium">Veer Savarkar Airport to Phoenix Bay</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/75 text-xs md:text-sm leading-relaxed font-light">
            Distances, auto/cab fares, ferry terminal schedules, and how to coordinate your 1-night layover stay in Sri Vijaya Puram.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <main className="flex-grow py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Comprehensive Transit Guide */}
          <div className="lg:col-span-8 space-y-12 text-left">
            
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-[#081628]/5 rounded-[16px] p-5 shadow-sm text-center">
                <span className="block text-[11px] font-sans tracking-widest text-accent uppercase font-bold">Distance</span>
                <span className="font-serif text-xl md:text-2xl font-semibold text-primary mt-1 block">3.5 – 5 km</span>
                <span className="text-[11px] text-charcoal/60 font-sans">Airport to Jetty</span>
              </div>
              <div className="bg-white border border-[#081628]/5 rounded-[16px] p-5 shadow-sm text-center">
                <span className="block text-[11px] font-sans tracking-widest text-accent uppercase font-bold">Travel Time</span>
                <span className="font-serif text-xl md:text-2xl font-semibold text-primary mt-1 block">10 – 15 min</span>
                <span className="text-[11px] text-charcoal/60 font-sans">Normal city traffic</span>
              </div>
              <div className="bg-white border border-[#081628]/5 rounded-[16px] p-5 shadow-sm text-center">
                <span className="block text-[11px] font-sans tracking-widest text-accent uppercase font-bold">Auto Fare</span>
                <span className="font-serif text-xl md:text-2xl font-semibold text-primary mt-1 block">₹150 – ₹200</span>
                <span className="text-[11px] text-charcoal/60 font-sans">Standard 3-wheeler</span>
              </div>
              <div className="bg-white border border-[#081628]/5 rounded-[16px] p-5 shadow-sm text-center">
                <span className="block text-[11px] font-sans tracking-widest text-accent uppercase font-bold">Taxi Fare</span>
                <span className="font-serif text-xl md:text-2xl font-semibold text-primary mt-1 block">₹350 – ₹500</span>
                <span className="text-[11px] text-charcoal/60 font-sans">AC Cab / Van</span>
              </div>
            </div>

            {/* Intro Section */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-primary font-semibold leading-tight">
                Navigating the Port Blair Transit Corridor
              </h2>
              <p className="font-sans text-charcoal/80 text-sm md:text-base leading-relaxed font-light">
                When flying into <strong>Veer Savarkar International Airport (IXZ)</strong> in Sri Vijaya Puram (Port Blair), almost all travelers plan onward ferry connections to Havelock Island (Swaraj Dweep) or Neil Island (Shaheed Dweep).
              </p>
              <p className="font-sans text-charcoal/80 text-sm md:text-base leading-relaxed font-light">
                Understanding the quick 3.5 km corridor between the airport and the departure jetties ensures a stress-free transition, whether you are heading directly to a morning boat or settling into a comfortable 1-night layover stay in Aberdeen Bazaar.
              </p>
            </section>

            {/* Why 1-Night Layover Section */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-charcoal/10 pb-4">
                <Clock className="text-accent" size={24} />
                <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                  Why Most Travelers Book a 1-Night Transit Stay
                </h3>
              </div>
              <p className="font-sans text-charcoal/80 text-sm leading-relaxed font-light">
                While it might seem ideal to catch a ferry immediately after your flight lands, seasoned island travelers almost always plan a 1-night stay in Port Blair for three critical reasons:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="bg-[#f8f9fa] p-5 rounded-[16px] space-y-2 border border-black/5">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-accent-hover block">1. Flight Timing Buffers</span>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                    Flights landing after 11:30 AM cannot safely make same-day afternoon ferry check-ins (which close 60 mins before departure).
                  </p>
                </div>
                <div className="bg-[#f8f9fa] p-5 rounded-[16px] space-y-2 border border-black/5">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-accent-hover block">2. Cellular Jail & Markets</span>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                    A layover allows you to explore the historic Cellular Jail and shop for souvenirs in Aberdeen Bazaar on your arrival afternoon.
                  </p>
                </div>
                <div className="bg-[#f8f9fa] p-5 rounded-[16px] space-y-2 border border-black/5">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-accent-hover block">3. Weather Cushion</span>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                    Sudden tropical rain or maritime rescheduling is easily absorbed without ruining hotel bookings in Havelock or Neil.
                  </p>
                </div>
              </div>
            </section>

            {/* Terminals Breakdown: Phoenix Bay vs Haddo */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-charcoal/10 pb-4">
                <Ship className="text-accent" size={24} />
                <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                  Ferry Terminals: Phoenix Bay Jetty vs Haddo Wharf
                </h3>
              </div>
              <p className="font-sans text-charcoal/80 text-sm leading-relaxed font-light">
                Port Blair has two primary passenger ferry ports. Always check your ferry ticket for the exact boarding terminal:
              </p>

              <div className="space-y-4">
                <div className="border border-accent/20 bg-accent/5 p-5 rounded-[16px] space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-base font-semibold text-primary">
                      Phoenix Bay Jetty (Primary Island Hub)
                    </h4>
                    <span className="text-[10px] font-sans font-bold bg-accent/20 text-accent-hover px-2.5 py-1 rounded-full uppercase">
                      3.5 km from Airport
                    </span>
                  </div>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                    <strong>Used by:</strong> Makruzz, Nautika, Green Ocean private catamarans, and major government ferry services to Havelock (Swaraj Dweep) and Neil (Shaheed Dweep).
                  </p>
                  <p className="font-sans text-xs text-charcoal/70">
                    <em>Distance from Hotel Sunrise:</em> Only 1.5 km (5 mins by auto).
                  </p>
                </div>

                <div className="border border-charcoal/10 p-5 rounded-[16px] space-y-2 bg-[#f8f9fa]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-base font-semibold text-primary">
                      Haddo Wharf (Deep Sea & Inter-Island Port)
                    </h4>
                    <span className="text-[10px] font-sans font-bold bg-charcoal/10 text-charcoal px-2.5 py-1 rounded-full uppercase">
                      5.0 km from Airport
                    </span>
                  </div>
                  <p className="font-sans text-xs text-charcoal/80 leading-relaxed font-light">
                    <strong>Used by:</strong> Mainland passenger ships (Chennai, Kolkata, Vizag), select government vessels to Diglipur/Hutbay, and occasional private cruise sailings.
                  </p>
                  <p className="font-sans text-xs text-charcoal/70">
                    <em>Distance from Hotel Sunrise:</em> Approx. 3.2 km (10 mins by auto).
                  </p>
                </div>
              </div>
            </section>

            {/* Hotel Sunrise Transit Advantages */}
            <section className="bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-charcoal/10 pb-4">
                <Compass className="text-accent" size={24} />
                <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold">
                  Why Hotel Sunrise is the Ideal Transit Base
                </h3>
              </div>
              <p className="font-sans text-charcoal/80 text-sm leading-relaxed font-light">
                Positioned in Babu Lane, Aberdeen Bazaar, Hotel Sunrise sits exactly at the geographical center between Veer Savarkar Airport and Phoenix Bay Jetty:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Budget Rates from ₹900/night</strong> — No need to spend ₹5,000+ on luxury resorts just for an overnight layover.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>5 Minutes to Ferry Gate</strong> — Reach the morning 6:00 AM or 8:00 AM Havelock ferries without waking up at midnight.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Early Morning Auto Assistance</strong> — Our reception coordinates reliable early-morning autos directly to the jetty.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Walk to Top Dining</strong> — Walk 2 mins to Annapurna Cafeteria for hot South Indian breakfast and filter coffee.</span>
                </div>
              </div>
            </section>

            {/* Conversion CTA Block */}
            <section className="bg-[#081628] text-pearl border border-accent/20 rounded-[24px] p-8 md:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-flex items-center justify-center gap-2">
                <span className="text-[10px] tracking-[0.3em] text-accent uppercase font-bold">
                  SEAMLESS TRANSIT & FERRY ASSISTANCE
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-pearl font-medium leading-tight max-w-xl mx-auto">
                Book Your Port Blair Transit Room
              </h3>
              <p className="max-w-2xl mx-auto font-sans text-pearl/70 text-xs md:text-sm leading-relaxed font-light">
                Relax in a clean, air-conditioned room right in Aberdeen Bazaar, recharge with hot water and free Wi-Fi, and let our desk help coordinate your ferry boarding for Havelock or Neil Island.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
                <Link
                  href="/rooms"
                  className="bg-accent hover:bg-accent-hover text-primary font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-[8px] transition-all duration-300 w-full sm:w-auto text-center"
                >
                  View Transit Rooms
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-accent text-pearl hover:text-accent font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-[8px] transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Pre-Book Layover via WhatsApp
                </Link>
              </div>
            </section>

          </div>

          {/* Right Column: Sticky Quick Stats Info */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
            <div className="bg-white border border-[#081628]/5 rounded-[24px] p-6 shadow-sm space-y-6 text-left">
              <h4 className="font-serif text-lg text-primary font-semibold border-b border-charcoal/10 pb-3">
                Transit Distances
              </h4>
              
              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start gap-3">
                  <Plane className="text-accent flex-shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-[#081628] block">Airport to Hotel Sunrise</span>
                    <span className="text-charcoal/80">3.5 km (10-12 mins by auto)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ship className="text-accent flex-shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-[#081628] block">Hotel Sunrise to Phoenix Jetty</span>
                    <span className="text-charcoal/80">1.5 km (5 mins by auto)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-accent flex-shrink-0" size={16} />
                  <div>
                    <span className="font-bold text-[#081628] block">Location</span>
                    <span className="text-charcoal/80">Babu Lane, Aberdeen Bazaar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Desk Concierge Card */}
            <div className="bg-primary text-pearl rounded-[24px] p-6 shadow-md text-left space-y-4">
              <h5 className="font-serif text-base text-accent font-semibold">
                Ferry Booking & Cab Help
              </h5>
              <p className="font-sans text-xs text-pearl/70 leading-relaxed font-light">
                Need help reserving seats on Makruzz or Nautika, or arranging prompt airport pickup? Message our WhatsApp reservations desk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs text-accent font-bold font-sans hover:text-accent-hover transition-colors uppercase tracking-wider"
              >
                Contact Concierge <ExternalLink size={12} />
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
