"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageSquare, Maximize, Users, Compass, Bed, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";
import { ROOMS_DATA } from "@/data/rooms";

export default function RoomsClient() {
  const [rooms, setRooms] = useState(Object.values(ROOMS_DATA));
  const [expandedRooms, setExpandedRooms] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch("/api/rooms")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error: " + res.status);
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Response was not JSON");
        }
        return res.json();
      })
      .then((data) => {
        if (data && typeof data === "object" && !data.error) {
          setRooms(Object.values(data));
        }
      })
      .catch((err) => console.error("Failed to load rooms dynamically:", err));
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between">
      <Navbar isHeroTransitioned={true} />

      {/* Floating Back Button */}
      <div className="absolute top-22 left-6 md:top-28 md:left-12 z-30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] md:text-xs text-pearl/80 hover:text-accent font-sans tracking-widest uppercase font-bold transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-[8px] border border-white/10"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>

      {/* Cinematic Hero Banner */}
      <section className="relative w-full h-auto min-h-[30vh] md:min-h-[35vh] flex items-center justify-center overflow-hidden bg-primary pt-32 pb-12 md:pt-24 md:pb-12">
        {/* Background Image of Sea Coast */}
        <Image
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=90"
          alt="Scenic guest room accommodation"
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
            Featured Rooms & Suites <br />
            <span className="text-accent italic font-medium">Comfortable Stays</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/75 text-xs md:text-sm leading-relaxed font-light">
            Browse through our premium air-conditioned hotel accommodations, thoughtfully equipped with modern comforts, convenient amenities, and clean ensuite utilities in Aberdeen Bazar.
          </p>
        </div>
      </section>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[50vh] -left-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[80vh] -right-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="flex-grow pb-24 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Sub Header */}
        <div className="mb-16 flex items-center justify-center md:justify-end border-b border-charcoal/10 pb-6 w-full text-center md:text-right">
          <span className="text-xs font-sans text-charcoal/60 tracking-wider font-semibold">
            {rooms.length} Accommodations Available
          </span>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              key={room.slug}
              className="bg-white border border-[#081628]/10 group overflow-hidden rounded-[24px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 text-[#2b2b2b]"
            >
              {/* Card Image Area */}
              <div className="h-64 relative overflow-hidden block">
                <Image 
                  src={room.image} 
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-[24px]" 
                />
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-[#081628]/90 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-[8px]">
                  <span className="text-accent text-xs font-semibold tracking-wider font-sans">
                    {room.price.split(" ")[0]} 
                    <span className="text-[10px] text-pearl/60 font-light"> / Night</span>
                  </span>
                </div>
              </div>

              {/* Info & Specs Area */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4 text-left">
                  <h3 className="font-serif text-xl md:text-2xl text-[#081628] font-semibold group-hover:text-accent transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="text-[#2b2b2b]/75 font-sans font-light text-xs leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Key Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] text-[#2b2b2b]/85 font-sans font-light">
                    <div className="flex items-center gap-2">
                      <Maximize size={12} className="text-accent-hover" />
                      <span>{room.specs.size.split(" / ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={12} className="text-accent-hover" />
                      <span>{room.specs.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <Compass size={12} className="text-accent-hover" />
                      <span className="truncate">{room.specs.view}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed size={12} className="text-accent-hover" />
                      <span className="truncate">{room.specs.bedding}</span>
                    </div>
                  </div>
                </div>

                {/* Amenities checklist */}
                <div className="space-y-2 border-t border-[#081628]/5 pt-4 text-left">
                  <span className="text-[10px] text-accent-hover uppercase tracking-widest font-semibold font-sans">
                    Included Amenities:
                  </span>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-[#2b2b2b]/80 font-sans font-light">
                    {(expandedRooms[room.slug] ? room.amenities : room.amenities.slice(0, 5)).map(amenity => (
                      <span key={amenity} className="flex items-center gap-1.5">
                        <Check size={10} className="text-accent" /> {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 5 && (
                      <button
                        onClick={() => setExpandedRooms(prev => ({ ...prev, [room.slug]: !prev[room.slug] }))}
                        className="text-accent-hover text-[10px] font-semibold hover:underline hover:text-accent transition-colors duration-300 cursor-pointer"
                      >
                        {expandedRooms[room.slug] ? "Show Less" : `+${room.amenities.length - 5} More`}
                      </button>
                    )}
                  </div>
                </div>

                {/* CTA Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={`https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(room.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 border border-accent/35 hover:border-accent bg-transparent hover:bg-accent text-[#081628] hover:text-white transition-all duration-500 font-sans tracking-widest text-[10px] uppercase font-semibold flex items-center justify-center gap-1.5 rounded-[8px]"
                  >
                    <MessageSquare size={12} /> WhatsApp
                  </a>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="flex-1 text-center py-3 bg-accent hover:bg-accent-hover text-[#081628] transition-all duration-300 font-sans tracking-widest text-[10px] uppercase font-bold flex items-center justify-center gap-1.5 rounded-[8px]"
                  >
                    Details <Sparkles size={11} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <WhatsAppConcierge />
      <Footer />
    </div>
  );
}
