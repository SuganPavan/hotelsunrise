"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Camera, X, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

import FULL_GALLERY from "@/data/gallery.json";

export default function GalleryClient() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof FULL_GALLERY[0] | null>(null);

  const filteredItems = selectedTag === "All"
    ? FULL_GALLERY
    : FULL_GALLERY.filter(item => item.category === selectedTag);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between">
      <Navbar isHeroTransitioned={true} />

      {/* Cinematic Hero Banner */}
      <div className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image of Sea Coast */}
        <Image
          src="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&w=2000&q=90"
          alt="Scenic Andaman coast"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/85 via-[#081628]/60 to-[#f8f9fa] z-10" />
        
        {/* Banner Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-12 md:mt-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold">
              HOTEL SUNRISE &bull; SRI VIJAYA PURAM
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-6xl text-pearl leading-[1.1] font-semibold tracking-wide">
            Sanctuary Gallery <br />
            <span className="text-accent italic font-medium">Visual Stories</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/75 text-xs md:text-sm leading-relaxed font-light">
            Browse through a curated visual archive showcasing our premium city hotel accommodations, local cuisines, white sandy beaches, and unique island wildlife.
          </p>
        </div>
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[50vh] -left-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[80vh] -right-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="flex-grow pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Sub Header & Back Button */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-charcoal/10 pb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent-hover font-sans tracking-widest uppercase font-bold transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2">
            {["All", "Hotel", "Rooms", "Bathrooms", "Beaches", "Attractions", "Wildlife"].map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 text-xs font-sans tracking-widest uppercase rounded-[6px] border transition-all duration-300 ${
                  selectedTag === tag 
                    ? "bg-[#081628] border-[#081628] text-white font-semibold"
                    : "border-charcoal/15 text-charcoal/70 hover:border-charcoal/30 bg-white/20 backdrop-blur-sm"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                layout
                key={item.title + idx}
                onClick={() => setLightboxImage(item)}
                className="relative rounded-[20px] border border-accent/25 bg-white/40 backdrop-blur-sm overflow-hidden h-72 group shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer col-span-1"
              >
                <Image 
                  src={item.image} 
                  alt={item.alt} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-[20px]"
                />
                
                {/* Hover Camera Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center gap-3">
                  <span className="p-3.5 rounded-full border border-white/20 text-pearl bg-black/50 backdrop-blur-md">
                    <Camera size={18} />
                  </span>
                  <span className="text-xs font-sans text-pearl font-medium tracking-wide">{item.title}</span>
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-4 left-4 bg-[#081628]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[9px] tracking-widest uppercase font-sans text-accent font-semibold z-10 rounded-[6px]">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
                {/* Close Button */}
                <button 
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-charcoal border border-charcoal/15 p-2.5 rounded-full z-20 transition-all duration-300"
                >
                  <X size={18} />
                </button>

                {/* Lightbox Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-8 h-80 md:h-[500px] relative">
                    <Image 
                      src={lightboxImage.image} 
                      alt={lightboxImage.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-4 p-8 flex flex-col justify-between text-left h-auto md:h-[500px]">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <span className="bg-accent/15 border border-accent/20 px-3 py-1 rounded-[6px] text-[10px] tracking-widest uppercase font-sans text-accent font-semibold inline-block">
                          {lightboxImage.category}
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[#081628] font-medium leading-snug">
                          {lightboxImage.title}
                        </h2>
                      </div>
                      <p className="text-charcoal/70 font-sans font-light text-xs md:text-sm leading-relaxed">
                        A beautiful visual fragment capturing the essence of our island sanctuary. Relax in our comfortable market-center hotel and let our concierge arrange guided tours to experience these sights.
                      </p>
                    </div>

                    <a 
                      href={`https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Concierge%2C%20I%20saw%20the%20photo%20of%20${encodeURIComponent(lightboxImage.title)}%20in%20your%20gallery%20and%20would%20like%20to%20enquire%20about%20booking%20a%20similar%20trip.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-3.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-500 rounded-[8px] flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={14} /> Book Guided Tour
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </main>

      <WhatsAppConcierge />
      <Footer />
    </div>
  );
}
