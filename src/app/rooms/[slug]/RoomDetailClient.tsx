"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  MapPin, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Compass,
  Mail
} from "lucide-react";
import { RoomData } from "@/data/rooms";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  room: RoomData;
}

export default function RoomDetailClient({ room }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === 0 ? room.gallery.length - 1 : (prev !== null ? prev - 1 : 0)
    );
  };

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === room.gallery.length - 1 ? 0 : (prev !== null ? prev + 1 : 0)
    );
  };

  const whatsappUrl = `https://wa.me/919732470317?text=Hello%20Reservations%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(room.name)}%20at%20Hotel%20Sunrise.`;

  return (
    <div className="bg-pearl min-h-screen font-sans selection:bg-accent selection:text-primary relative">
      <Navbar isHeroTransitioned={true} />

      {/* Glassmorphic Floating Back to Rooms button */}
      <Link 
        href="/rooms" 
        className="absolute top-28 left-6 md:left-12 z-30 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-[10px] text-pearl font-sans tracking-widest uppercase font-bold hover:bg-white/10 transition-colors duration-300 rounded-[8px]"
      >
        <ArrowLeft size={12} /> Back to Rooms
      </Link>

      {/* 1. Cinematic Hero */}
      <section className="relative min-h-screen lg:h-screen w-full bg-primary overflow-hidden flex items-center pt-32 pb-20 lg:py-0">
        <div className="absolute inset-0 z-0">
          <Image 
            src={room.image} 
            alt={room.name} 
            fill 
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081628] via-[#081628]/45 to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/25 backdrop-blur-md rounded-sm text-[11px] font-sans tracking-widest text-accent uppercase font-bold block w-fit">
              <Sparkles size={10} /> Sanctuary Living
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-pearl font-medium tracking-wide leading-tight">
              {room.name}
            </h1>
            <div className="text-accent font-serif text-lg font-semibold">{room.price}</div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Room Specifications */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Overview details */}
          <div className="lg:col-span-8 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
                The Villa Narrative
              </span>
              <h2 className="font-serif text-3xl text-primary font-medium tracking-wide">
                Exquisite Sanctuary Design
              </h2>
            </div>
            
            <p className="text-charcoal/80 font-sans font-light text-base md:text-lg leading-relaxed">
              {room.longDescription}
            </p>
            <p className="text-charcoal/60 font-sans font-light text-sm mt-4">
              Looking to bundle your stay with island excursions? Check out our curated <Link href="/packages" className="text-accent underline font-normal hover:text-accent-hover transition-colors">Andaman Travel Packages</Link> or <Link href="/contact" className="text-accent underline font-normal hover:text-accent-hover transition-colors">send a reservations enquiry</Link> directly to our front desk.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {room.amenities.map(amenity => (
                <div key={amenity} className="flex items-center gap-3 text-xs text-charcoal/80 font-sans font-light">
                  <Check size={14} className="text-accent shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical specifications */}
          <div className="lg:col-span-4 text-left">
            <div className="bg-[#081628]/95 border border-accent/15 rounded-[16px] p-8 text-pearl shadow-xl space-y-6 font-sans">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[9px] text-accent uppercase tracking-widest font-semibold block">Room Specs</span>
                <h3 className="font-serif text-lg text-pearl font-semibold mt-1">Dimensions & Views</h3>
              </div>

              <div className="space-y-4 text-xs font-light text-pearl/80">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-accent font-semibold block mb-0.5">Villa Size</span>
                  <span>{room.specs.size}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-accent font-semibold block mb-0.5">Occupancy</span>
                  <span>{room.specs.occupancy}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-accent font-semibold block mb-0.5">Views</span>
                  <span>{room.specs.view}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-accent font-semibold block mb-0.5">Bedding</span>
                  <span>{room.specs.bedding}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 bg-accent hover:bg-accent-hover text-[#081628] transition-all duration-300 font-sans tracking-widest text-[10px] uppercase font-bold flex items-center justify-center gap-2 rounded-[8px]"
                >
                  <MessageSquare size={12} /> Book via WhatsApp
                </a>
                 <a 
                  href={`mailto:hotelsunrisesrivijayapuram@gmail.com?subject=Booking%20Enquiry%20for%20${encodeURIComponent(room.name)}&body=Hello%20Reservations%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(room.name)}%20at%20Hotel%20Sunrise.`}
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                      alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                    } catch (err) {}
                  }}
                  className="w-full text-center py-3.5 border border-white/20 hover:border-accent hover:bg-accent hover:text-[#081628] text-pearl transition-all duration-300 font-sans tracking-widest text-[10px] uppercase font-bold flex items-center justify-center gap-2 rounded-[8px]"
                >
                  <Mail size={12} /> Book via Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Room Highlights */}
      <section className="py-20 bg-[#081628] text-pearl text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">Sanctuary Comforts</span>
            <h2 className="font-serif text-3xl md:text-5xl text-pearl font-medium tracking-wide">Signature Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {room.features.map(feat => (
              <div 
                key={feat.title}
                className="bg-primary/45 border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group shadow-lg hover:border-accent/30 transition-all duration-500"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={feat.image} 
                    alt={feat.title} 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-2">
                  <h3 className="font-serif text-lg text-pearl font-semibold group-hover:text-accent transition-colors duration-300">{feat.title}</h3>
                  <p className="text-pearl/70 font-sans font-light text-xs leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Room Gallery */}
      <section className="py-20 bg-sand/35">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">Visuals</span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-medium tracking-wide">Interior Showcase</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {room.gallery.map((image, idx) => (
              <div 
                key={image + idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative rounded-sm overflow-hidden h-64 group shadow-md cursor-pointer"
              >
                <Image 
                  src={image} 
                  alt={`${room.name} gallery image ${idx + 1}`} 
                  fill 
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#081628]/95 flex items-center justify-center px-4"
          >
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-pearl/70 hover:text-pearl bg-white/5 p-3 rounded-full backdrop-blur-sm z-50 transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
            <button 
              onClick={handlePrevImage}
              className="absolute left-6 text-pearl/70 hover:text-pearl bg-white/5 p-3 rounded-full backdrop-blur-sm z-50 transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextImage}
              className="absolute right-6 text-pearl/70 hover:text-pearl bg-white/5 p-3 rounded-full backdrop-blur-sm z-50 transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
            <div className="relative max-w-5xl w-full h-[70vh]">
              <Image 
                src={room.gallery[lightboxIndex]}
                alt={`${room.name} large view ${lightboxIndex + 1}`}
                fill 
                unoptimized
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Luxury Booking CTA */}
      <section className="py-24 bg-primary text-pearl text-center relative overflow-hidden border-t border-accent/20">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src={room.image} 
            alt="Backdrop" 
            fill 
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">
          <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">Reservations</span>
          <h2 className="font-serif text-3xl md:text-5xl text-pearl font-medium leading-tight">Secure Your Sanctuary Stay</h2>
          <p className="text-pearl/70 text-sm md:text-base font-light max-w-xl mx-auto">Connect directly with our reservation managers to confirm availability or request customized transfer plans.</p>
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-primary font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
