"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Camera, X, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

import FULL_GALLERY from "@/data/gallery.json";

const BATHROOM_GALLERY = FULL_GALLERY
  .filter(item => item.category === "Bathrooms")
  .map(item => ({
    image: item.image,
    title: item.title,
    desc: item.alt
  }));

export default function BathroomsClient() {
  const [lightboxImage, setLightboxImage] = useState<typeof BATHROOM_GALLERY[0] | null>(null);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between">
      <Navbar isHeroTransitioned={true} />

      {/* Cinematic Hero Banner */}
      <div className="relative w-full h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hotel-lobby.jpg"
          alt="Hotel Sunrise facilities"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/85 via-[#081628]/60 to-[#f8f9fa] z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-12 md:mt-16 space-y-4">
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold">
            HOTEL SUNRISE &bull; SRI VIJAYA PURAM
          </span>
          <h1 className="font-serif text-3xl md:text-6xl text-pearl leading-[1.1] font-semibold tracking-wide">
            Bathroom Facilities <br />
            <span className="text-accent italic font-medium">Clean & Modern</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/75 text-xs md:text-sm leading-relaxed font-light">
            View our well-maintained, private ensuite bathroom setups. All rooms are equipped with modern sanitation, wall mirrors, and continuous hot water geysers.
          </p>
        </div>
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[30vh] -left-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[60vh] -right-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="flex-grow pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Back Link */}
        <div className="mb-12 border-b border-charcoal/10 pb-6 text-left">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent-hover font-sans tracking-widest uppercase font-bold transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
        </div>

        {/* Bathrooms Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {BATHROOM_GALLERY.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#081628]/10 rounded-[24px] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 text-[#2b2b2b]"
            >
              <div 
                onClick={() => setLightboxImage(item)}
                className="h-96 relative cursor-pointer overflow-hidden group"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="p-3.5 rounded-full border border-white/20 text-pearl bg-black/60 backdrop-blur-md">
                    <Camera size={18} />
                  </span>
                </div>
              </div>
              <div className="p-6 text-left space-y-2 border-t border-[#081628]/5 bg-white flex-grow flex flex-col justify-between">
                <h3 className="font-serif text-lg font-bold text-[#081628]">{item.title}</h3>
                <p className="text-xs text-charcoal/75 font-sans font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conveniences List */}
        <div className="max-w-3xl mx-auto bg-white border border-[#081628]/10 rounded-[24px] p-8 md:p-10 space-y-6 text-left shadow-sm text-[#2b2b2b]">
          <h3 className="font-serif text-xl md:text-2xl text-[#081628] font-medium tracking-wide">
            Bathroom Services & Utilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "In-room individual water geysers",
              "24-Hour running water supply",
              "Complimentary toiletries upon check-in",
              "Clean mirrors and towel racks",
              "Daily housekeeping sanitation checks",
              "Trained maintenance staff on-call"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-xs md:text-sm text-[#2b2b2b]/80 font-sans font-light">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-accent-hover" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border border-accent/25 rounded-[24px] max-w-4xl w-full overflow-hidden shadow-2xl relative text-[#2b2b2b]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-charcoal border border-charcoal/15 p-2.5 rounded-full z-20 transition-all duration-300"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-8 h-96 md:h-[550px] relative">
                  <Image 
                    src={lightboxImage.image} 
                    alt={lightboxImage.title}
                    fill
                    className="object-contain bg-black"
                  />
                </div>
                <div className="md:col-span-4 p-8 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <span className="bg-accent/15 border border-accent/20 px-3 py-1 rounded-[6px] text-[10px] tracking-widest uppercase font-sans text-accent font-semibold inline-block">
                      Bathrooms
                    </span>
                    <h2 className="font-serif text-2xl text-[#081628] font-medium leading-snug">
                      {lightboxImage.title}
                    </h2>
                    <p className="text-charcoal/70 font-sans font-light text-xs md:text-sm leading-relaxed">
                      {lightboxImage.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#081628]/5">
                    <p className="text-[10px] text-charcoal/40 uppercase tracking-wider font-sans">
                      Hotel Sunrise Port Blair
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppConcierge />
    </div>
  );
}
