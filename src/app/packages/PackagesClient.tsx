"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageSquare, Compass, ShieldCheck, MapPin, Plane, HelpCircle, ArrowRight, UserCheck, HeartHandshake, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";
import { PACKAGES_DATA } from "@/data/packages";

export default function PackagesClient() {
  const packages = Object.values(PACKAGES_DATA);

  // Scroller helper
  const scrollToPackages = () => {
    const el = document.getElementById("packages-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between">
      <Navbar isHeroTransitioned={true} />

      {/* Hero Section */}
      <section className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image: Andaman scenic view */}
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90"
          alt="Andaman shoreline landscape"
          fill
          priority
          className="object-cover"
        />
        {/* Navy blue gradient overlay to keep branding colors & text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/85 via-[#081628]/60 to-[#f8f9fa] z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              Hotel Sunrise &bull; Sri Vijaya Puram
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl text-pearl leading-[1.1] font-semibold tracking-wide max-w-4xl mx-auto">
            Stay Comfortably. <br />
            <span className="text-accent italic font-normal">Explore Andaman.</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/85 text-xs md:text-base leading-relaxed font-light">
            Hotel Sunrise is centrally located in Sri Vijaya Puram, making it the perfect place to stay before exploring the beautiful Andaman Islands.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={scrollToPackages}
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans font-bold tracking-widest text-xs uppercase rounded-[8px] transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              View Packages
            </button>
            <a
              href="https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20would%20like%20to%20book%20a%20stay%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/15 hover:bg-white/25 text-pearl border border-white/20 hover:border-white/45 font-sans font-bold tracking-widest text-xs uppercase rounded-[8px] transition-all duration-300 backdrop-blur-sm"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </section>

      {/* Main Packages Section */}
      <main id="packages-section" className="flex-grow py-20 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Back Button & Intro */}
        <div className="mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-charcoal/10 pb-6 gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs text-accent-hover hover:text-accent font-sans tracking-widest uppercase font-bold transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
          <span className="text-xs font-sans text-[#081628]/60 tracking-wider font-semibold">
            {packages.length} Custom Trip Bundles Available
          </span>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            // Extract Duration from slug or price parameter string
            const duration = pkg.price.split(" / ")[1] || "3 Nights";

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={pkg.slug}
                className="bg-white border border-[#081628]/10 group overflow-hidden rounded-[20px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300"
              >
                {/* Image & Duration Badge */}
                <div className="h-56 relative overflow-hidden block">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-500 rounded-t-[20px]" 
                  />
                  {/* Duration Tag */}
                  <div className="absolute top-4 left-4 bg-[#081628]/85 backdrop-blur-sm border border-white/10 px-3.5 py-1 rounded-[6px]">
                    <span className="text-pearl text-[10px] font-semibold tracking-wider font-sans uppercase">
                      {duration}
                    </span>
                  </div>
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-accent backdrop-blur-sm border border-accent/20 px-3.5 py-1 rounded-[6px]">
                    <span className="text-[#081628] text-[11px] font-bold tracking-wider font-sans">
                      {pkg.price.split(" / ")[0]}
                    </span>
                  </div>
                </div>

                {/* Content & Inclusions */}
                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-4 text-left">
                    <h3 className="font-serif text-xl text-[#081628] font-semibold group-hover:text-accent-hover transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <p className="text-[#2b2b2b]/75 font-sans font-light text-xs leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Services Included */}
                    <div className="space-y-2.5 border-t border-[#081628]/5 pt-4">
                      <span className="text-[10px] text-accent-hover uppercase tracking-widest font-bold font-sans">
                        What's Included:
                      </span>
                      <ul className="grid grid-cols-1 gap-2 text-xs text-[#2b2b2b]/80 font-sans font-light">
                        {pkg.features.map(feat => (
                          <li key={feat} className="flex items-start gap-2.5">
                            <Check size={12} className="text-accent shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-[#081628]/5">
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="flex-1 text-center py-2.5 border border-[#081628]/15 hover:bg-[#081628]/5 text-[#081628] transition-all duration-300 font-sans tracking-widest text-[9px] uppercase font-bold rounded-[6px]"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 bg-[#081628] hover:bg-[#081628]/95 text-white transition-all duration-300 font-sans tracking-widest text-[9px] uppercase font-bold rounded-[6px]"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* Guest Journey Map */}
      <section className="bg-white py-20 border-t border-[#081628]/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
          <span className="text-[10px] font-sans tracking-[0.3em] text-accent uppercase font-bold">
            Travel Process
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-[#081628] font-semibold mt-2 mb-16 tracking-wide">
            Your Island Guest Journey
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative max-w-5xl mx-auto">
            {/* Horizontal connection line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[1.5px] bg-[#081628]/10 -translate-y-12 z-0 pointer-events-none" />

            {[
              { step: "01", title: "Airport Arrival", desc: "Land at Port Blair, SUV pick up to hotel", icon: Plane },
              { step: "02", title: "Hotel Sunrise Check-in", desc: "Tidy room check-in in the market center", icon: UserCheck },
              { step: "03", title: "Relax", desc: "Unpack and rest in air-conditioned comfort", icon: HeartHandshake },
              { step: "04", title: "Explore Andaman", desc: "Easily visit Cellular Jail, ferries, beaches", icon: Compass },
              { step: "05", title: "Return with Memories", desc: "Airport drop with sweet local souvenirs", icon: ShieldCheck }
            ].map((stepObj, idx) => {
              const Icon = stepObj.icon;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center max-w-[200px] relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#f8f9fa] border border-[#081628]/10 shadow-sm flex items-center justify-center text-[#081628] group hover:border-accent hover:bg-accent/5 transition-all duration-300">
                    <Icon size={24} className="text-[#081628] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-sans text-accent font-extrabold tracking-widest">{stepObj.step}</span>
                    <h4 className="font-serif text-sm font-bold text-[#081628]">{stepObj.title}</h4>
                    <p className="text-[11px] text-[#2b2b2b]/60 leading-normal font-sans font-light">{stepObj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Stay at Hotel Sunrise Section */}
      <section className="bg-[#f8f9fa] py-20 border-t border-[#081628]/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center">
          <span className="text-[10px] font-sans tracking-[0.3em] text-accent uppercase font-bold">
            Convenient Lodging
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-[#081628] font-semibold mt-2 mb-16 tracking-wide">
            Why Stay at Hotel Sunrise?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              { title: "Babu Lane Location", desc: "Easy access to Aberdeen Bazaar shops, ATM counters, and street food diners.", icon: MapPin },
              { title: "Easy Airport Access", desc: "Only 10-15 minutes driving distance from Veer Savarkar International Airport.", icon: Plane },
              { title: "Close to Ferry Terminal", desc: "Close to Phoenix Bay Jetty for boarding Havelock & Neil Island ferry cruises.", icon: Compass },
              { title: "Comfortable Rooms", desc: "Tidy double bedrooms and family layouts equipped with split AC or ceiling fans.", icon: ShieldCheck },
              { title: "Family Friendly", desc: "Multiple-bed options and secure layout designed for families traveling with kids.", icon: UserCheck },
              { title: "Nearby Restaurants", desc: "A few steps away from delicious local vegetarian and seafood restaurants.", icon: HeartHandshake },
              { title: "Local Shopping", desc: "Perfect neighborhood for buying wooden crafts, spices, pearls, and souvenirs.", icon: Compass },
              { title: "Friendly Staff", desc: "Always welcoming and ready with island ferry information and tour guidance.", icon: HeartHandshake },
              { title: "Affordable Stay", desc: "Comfortable market-center accommodation that fits your budget perfectly.", icon: ShieldCheck }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white border border-[#081628]/5 p-6 rounded-[16px] shadow-sm flex items-start gap-4 hover:border-accent/40 transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-[#081628]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-bold text-[#081628]">{benefit.title}</h4>
                  <p className="text-xs text-[#2b2b2b]/70 font-sans font-light leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-white py-20 relative">
        <div className="max-w-5xl mx-auto px-6 md:px-12 w-full text-center">
          <div className="bg-[#081628] text-pearl rounded-[24px] p-8 md:p-16 space-y-6 relative overflow-hidden shadow-md">
            {/* Background highlights */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <span className="text-[10px] font-sans tracking-[0.3em] text-accent uppercase font-bold block relative z-10">
              Trip Planning Assistance
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-pearl font-semibold tracking-wide relative z-10">
              Planning Your Andaman Trip?
            </h2>
            <p className="max-w-2xl mx-auto font-sans text-pearl/80 text-xs md:text-sm leading-relaxed font-light relative z-10">
              Stay at Hotel Sunrise and enjoy a comfortable stay with easy access to Andaman's top attractions. Our staff will help arrange airport transfers and local sightseeing ferry bookings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
              <a
                href="https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20would%20like%20to%20book%20a%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans font-bold tracking-widest text-xs uppercase rounded-[8px] transition-all duration-300"
              >
                Book via WhatsApp
              </a>
              <a
                href="mailto:hotelsunrisesrivijayapuram@gmail.com?subject=Package%20Booking%20Enquiry&body=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20Andaman%20packages."
                onClick={() => {
                  try {
                    navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                    alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                  } catch (err) {}
                }}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-pearl border border-white/25 hover:border-white/45 font-sans font-bold tracking-widest text-xs uppercase rounded-[8px] transition-all duration-300"
              >
                Book via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppConcierge />
      <Footer />
    </div>
  );
}
