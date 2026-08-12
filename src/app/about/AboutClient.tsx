"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

export default function AboutClient() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between selection:bg-accent selection:text-primary">
      <Navbar isHeroTransitioned={true} />

      {/* Back to Home Button */}
      <div className="absolute top-28 left-6 md:left-12 z-30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] md:text-xs text-pearl/80 hover:text-accent font-sans tracking-widest uppercase font-bold transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-[8px] border border-white/10"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>

      {/* Cinematic Header Banner */}
      <section className="relative w-full min-h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden bg-primary pt-44 pb-16 md:py-0">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80"
          alt="Hotel Sunrise lounge"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/90 via-[#081628]/70 to-[#f8f9fa] z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-8 space-y-4">
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold">
            Hotel Sunrise &bull; Sri Vijaya Puram
          </span>
          <h1 className="font-serif text-3xl md:text-6xl text-pearl leading-[1.1] font-semibold tracking-wide">
            Our Story <br />
            <span className="text-accent italic font-medium">The Hotel Sanctuary</span>
          </h1>
        </div>
      </section>

      {/* Main Narrative Section */}
      <main className="flex-grow py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Welcome Story Inside Light Card */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-left bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="space-y-2 mb-6">
                <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
                  Your Gateway to Andaman
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#081628] leading-tight font-semibold">
                  Welcome to Hotel Sunrise
                </h2>
              </div>
              
              <div className="space-y-6 text-[#2b2b2b]/80 font-sans text-sm md:text-base leading-relaxed font-light">
                <p>
                  Located at Hotel Sunrise, Babu Lane, Aberdeen Bazaar, Sri Vijayapuram, Hotel Sunrise offers a comfortable and convenient base for discovering the Andaman Islands.
                </p>
                <p>
                  Whether you're visiting for a family vacation, honeymoon, business trip, or island adventure, our central location places you within minutes of the city's major attractions, ferry terminals, shopping areas, restaurants, and government offices.
                </p>
                <p>
                  Relax in well-appointed rooms, enjoy warm hospitality, and begin every day with easy access to the best experiences Andaman has to offer.
                </p>
                <p>
                  From the historic Cellular Jail and beautiful Corbyn's Cove Beach to ferry connections for Ross Island, North Bay, Swaraj Dweep (Havelock), and Shaheed Dweep (Neil), everything is within easy reach.
                </p>
                <p>
                  Our commitment is simple: clean accommodations, friendly service, excellent value, and a memorable stay in the Andaman Islands.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Benefits Checklist Inside Light Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#081628]/5 rounded-[24px] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-8 text-left">
            <div>
              <div className="space-y-2 mb-6">
                <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
                  Choose Comfort
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#081628] leading-tight font-semibold">
                  Why Stay with Us?
                </h3>
                <p className="text-xs text-charcoal/60 font-sans font-light">
                  A premium city experience inside Sri Vijaya Puram's main market
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4 pt-6 border-t border-charcoal/5">
                {[
                  "Prime location in Aberdeen Bazaar near Babu Lane",
                  "Walking distance to shopping and restaurants",
                  "Easy access to ferry terminals",
                  "Close to major tourist attractions",
                  "Comfortable, clean, air-conditioned rooms",
                  "Daily housekeeping service",
                  "Friendly local hospitality",
                  "Ideal for families, couples, and business travelers"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-4 text-xs md:text-sm text-charcoal/80 font-sans font-light group">
                    <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Check size={14} className="text-accent-hover group-hover:text-[#081628]" />
                    </div>
                    <span className="leading-normal">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-charcoal/5 flex flex-col space-y-4">
              <Link
                href="/contact"
                className="w-full text-center py-3.5 bg-accent hover:bg-accent-hover text-primary transition-all duration-300 font-sans tracking-widest text-xs uppercase font-bold shadow-sm rounded-[8px]"
              >
                Inquire & Book Now
              </Link>
            </div>
          </div>

        </div>
      </main>

      <WhatsAppConcierge />
      <Footer />
    </div>
  );
}
