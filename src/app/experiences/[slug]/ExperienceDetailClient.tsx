"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Calendar, 
  MapPin, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  X, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Compass,
  Award,
  Mail
} from "lucide-react";
import { AttractionData, ATTRACTIONS } from "@/data/experiences";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  attraction: AttractionData;
}

export default function ExperienceDetailClient({ attraction }: Props) {
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // FAQ accordion active state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Scroll visibility for sticky bar
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === 0 ? attraction.gallery.length - 1 : (prev !== null ? prev - 1 : 0)
    );
  };

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => 
      prev === attraction.gallery.length - 1 ? 0 : (prev !== null ? prev + 1 : 0)
    );
  };

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  // Concierge Whatsapp Inquiry Message
  const whatsappUrl = `https://wa.me/919732470317?text=Hello%20Concierge%20at%20Hotel%20Sunrise%2C%20I%20am%20interested%20in%20planning%20the%20${encodeURIComponent(attraction.name)}%20experience.`;

  return (
    <div className="bg-pearl min-h-screen font-sans selection:bg-accent selection:text-primary relative">
      <Navbar isHeroTransitioned={true} />

      {/* Glassmorphic Floating Back to Experiences button */}
      <Link 
        href="/experiences" 
        className="absolute top-28 left-6 md:left-12 z-30 inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-[10px] text-pearl font-sans tracking-widest uppercase font-bold hover:bg-white/10 transition-colors duration-300 rounded-[8px]"
      >
        <ArrowLeft size={12} /> Back to Experiences
      </Link>

      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-screen lg:h-screen w-full bg-[#081628] overflow-hidden flex items-center pt-44 pb-20 lg:py-0">
        {/* Ambient Blur Background (Prevents pixelation of low-res images like Cellular Jail) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src={attraction.image} 
            alt="Backdrop blur" 
            fill 
            priority
            unoptimized
            className="object-cover blur-[50px] scale-110 opacity-35 brightness-[0.35]"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#081628] via-[#081628]/60 to-[#081628]/80 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/25 backdrop-blur-md rounded-sm text-[11px] font-sans tracking-widest text-accent uppercase font-bold">
                  <MapPin size={10} /> Sri Vijaya Puram
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 backdrop-blur-md rounded-sm text-[11px] font-sans tracking-widest text-pearl uppercase font-semibold">
                  {attraction.category}
                </span>
              </div>

              {/* Page Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-pearl font-medium tracking-wide leading-tight"
              >
                {attraction.name}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-pearl/80 text-base md:text-lg font-light leading-relaxed max-w-xl"
              >
                {attraction.description}
              </motion.p>
            </div>

            {/* Right Column: Premium Image Showcase Frame (Keeps low-res image sharp) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 p-2.5 rounded-lg shadow-2xl w-full max-w-[480px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden"
              >
                <div className="relative w-full h-full rounded-md overflow-hidden bg-primary/20">
                  <Image 
                    src={attraction.image} 
                    alt={attraction.name} 
                    fill 
                    priority
                    unoptimized
                    className="object-cover hover:scale-103 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-pearl/40 z-20">
          <span className="text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* 2. OVERVIEW & QUICK INFO CONTAINER */}
      <section className="py-20 md:py-28 relative z-10 bg-pearl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Overview Details */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
                The Sanctuary Guide
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-medium tracking-wide">
                Destination Overview
              </h2>
            </div>
            
            <div className="prose prose-slate max-w-none text-charcoal/80 font-sans font-light leading-relaxed space-y-6 text-sm md:text-base">
              <p className="font-sans font-normal text-primary text-lg leading-relaxed">
                {attraction.overview.detailed}
              </p>
              
              <div className="p-6 border-l-2 border-accent bg-sand/35 space-y-3 rounded-r-md">
                <h4 className="font-serif text-primary text-base font-semibold">Historical Significance</h4>
                <p className="text-xs md:text-sm text-charcoal/80">{attraction.overview.significance}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <h4 className="font-serif text-primary text-base font-semibold">Why Visit?</h4>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">{attraction.overview.whyVisit}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-primary text-base font-semibold">What Makes It Unique?</h4>
                  <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed">{attraction.overview.uniqueFactor}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Info Cards */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-[#081628]/95 backdrop-blur-md border border-accent/15 rounded-[16px] p-8 text-pearl shadow-xl space-y-8">
              <div className="border-b border-white/10 pb-4">
                <h3 className="font-serif text-xl text-pearl font-semibold">Quick Information</h3>
                <p className="text-[10px] text-accent uppercase tracking-widest font-semibold mt-1">Details & Logistics</p>
              </div>

              {/* Grid List */}
              <div className="space-y-5 text-xs font-sans font-light text-pearl/80">
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-0.5">Location</span>
                    <span className="leading-relaxed">{attraction.quickInfo.location}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-4">
                    <Clock size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-0.5">Suggested Stay</span>
                      <span>{attraction.quickInfo.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-0.5">Best Season</span>
                      <span>{attraction.quickInfo.bestSeason}</span>
                    </div>
                  </div>
                </div>

                {attraction.quickInfo.travelFromHotel && (
                  <div className="flex items-start gap-4 border-t border-white/10 pt-4">
                    <Compass size={16} className="text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-0.5">Travel from Hotel</span>
                      <span className="leading-relaxed text-[11px] block">{attraction.quickInfo.travelFromHotel}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-1">Hours</span>
                    <span className="leading-relaxed text-[11px] block">{attraction.quickInfo.hours}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-1">Entry Fee</span>
                    <span className="leading-relaxed text-[11px] block">{attraction.quickInfo.fee}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-0.5">Time of Day</span>
                    <span>{attraction.quickInfo.bestTimeOfDay}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold mb-0.5">Difficulty</span>
                    <span>{attraction.quickInfo.difficulty}</span>
                  </div>
                </div>

                {/* Suitable For */}
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold">Suitable For</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-[11px] text-pearl/95">
                    {attraction.quickInfo.suitableFor.map((item) => (
                      <span key={item} className="flex items-center gap-1.5">
                        <Check size={12} className="text-accent shrink-0" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inner Cab Booking CTA */}
              <div className="pt-2 space-y-3">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-accent hover:bg-accent-hover text-[#081628] transition-all duration-300 font-sans tracking-widest text-[10px] uppercase font-bold flex items-center justify-center gap-2 rounded-[8px]"
                >
                  <MessageSquare size={12} /> Plan via WhatsApp
                </a>
                <a 
                  href={`mailto:hotelsunrisesrivijayapuram@gmail.com?subject=Enquiry%20for%20${encodeURIComponent(attraction.name)}%20Experience&body=Hello%20Concierge%20at%20Hotel%20Sunrise%2C%20I%20am%20interested%20in%20planning%20the%20${encodeURIComponent(attraction.name)}%20experience.`}
                  onClick={() => {
                    try {
                      navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                      alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                    } catch (err) {}
                  }}
                  className="w-full text-center py-3 border border-white/20 hover:border-accent hover:bg-accent hover:text-[#081628] text-pearl transition-all duration-300 font-sans tracking-widest text-[10px] uppercase font-bold flex items-center justify-center gap-2 rounded-[8px]"
                >
                  <Mail size={12} /> Plan via Email
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HIGHLIGHTS CARDS */}
      {attraction.highlights && attraction.highlights.length > 0 && (
        <section className="py-20 md:py-28 bg-[#081628] text-pearl relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            
            {/* Header */}
            <div className="max-w-3xl mb-16 space-y-4 text-left">
              <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
                Immersive Details
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-pearl font-medium tracking-wide">
                Experience Highlights
              </h2>
            </div>

            {/* Highlight items list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {attraction.highlights.map((highlight, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  key={highlight.title}
                  className="bg-primary/45 border border-white/10 rounded-sm overflow-hidden flex flex-col justify-between group shadow-lg hover:border-accent/30 transition-all duration-500"
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image 
                      src={highlight.image} 
                      alt={highlight.title} 
                      fill 
                      loading="lazy"
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-6 text-left space-y-2">
                    <h3 className="font-serif text-lg text-pearl font-semibold group-hover:text-accent transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-pearl/70 font-sans font-light text-xs leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 4. PREMIUM GALLERY */}
      {attraction.gallery && attraction.gallery.length > 0 && (
        <section className="py-20 md:py-28 bg-sand/35">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            
            {/* Header */}
            <div className="max-w-3xl mb-16 space-y-4 text-left">
              <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
                Visual Stories
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-medium tracking-wide">
                Sanctuary Gallery
              </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {attraction.gallery.map((image, idx) => (
                <div 
                  key={image + idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="relative rounded-sm overflow-hidden h-64 group shadow-md cursor-pointer"
                >
                  <Image 
                    src={image} 
                    alt={`${attraction.name} gallery image ${idx + 1}`} 
                    fill 
                    loading="lazy"
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="p-3 rounded-full border border-white/40 text-white bg-primary/20 backdrop-blur-sm">
                      <Compass size={20} className="animate-spin-slow" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 5. LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#081628]/95 flex items-center justify-center px-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-pearl/70 hover:text-pearl bg-white/5 p-3 rounded-full backdrop-blur-sm z-50 transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Left Button */}
            <button 
              onClick={handlePrevImage}
              className="absolute left-6 text-pearl/70 hover:text-pearl bg-white/5 p-3 rounded-full backdrop-blur-sm z-50 transition-colors"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Button */}
            <button 
              onClick={handleNextImage}
              className="absolute right-6 text-pearl/70 hover:text-pearl bg-white/5 p-3 rounded-full backdrop-blur-sm z-50 transition-colors"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image display */}
            <div className="relative max-w-5xl w-full h-[70vh]">
              <Image 
                src={attraction.gallery[lightboxIndex]}
                alt={`${attraction.name} large view ${lightboxIndex + 1}`}
                fill 
                unoptimized
                className="object-contain"
              />
            </div>
            
            {/* Counter */}
            <div className="absolute bottom-6 text-xs tracking-widest text-pearl/60 font-sans font-light">
              {lightboxIndex + 1} / {attraction.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. WHAT'S INCLUDED WITH SAMUDRA COVE */}
      <section className="py-20 md:py-28 bg-pearl border-t border-accent/15 text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
                Exclusive Services
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-medium tracking-wide">
                Experience Hospitality with Hotel Sunrise
              </h2>
              <p className="font-sans text-charcoal/70 text-base leading-relaxed font-light">
                When you arrange your Sri Vijaya Puram excursions through the Hotel Sunrise reservations office, we provide complete, seamless VIP logistics. Leave the scheduling, licensing, transfers, and refreshments to our local hosts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-sand/35 p-6 border border-accent/10 rounded-sm space-y-3">
                <Check size={16} className="text-accent" />
                <h3 className="font-serif text-primary text-base font-semibold">Private VIP Transfers</h3>
                <p className="text-xs text-charcoal/70 font-sans font-light leading-relaxed">Air-conditioned luxury SUVs or yacht connections between Aberdeen jetty and the biological reserve.</p>
              </div>

              <div className="bg-sand/35 p-6 border border-accent/10 rounded-sm space-y-3">
                <Check size={16} className="text-accent" />
                <h3 className="font-serif text-primary text-base font-semibold">Concierge Guide</h3>
                <p className="text-xs text-charcoal/70 font-sans font-light leading-relaxed">PADI divers, historians, or local naturalists depending on the focus of your itinerary.</p>
              </div>

              <div className="bg-sand/35 p-6 border border-accent/10 rounded-sm space-y-3">
                <Check size={16} className="text-accent" />
                <h3 className="font-serif text-primary text-base font-semibold">Priority Fast-Pass Permits</h3>
                <p className="text-xs text-charcoal/70 font-sans font-light leading-relaxed">Skip forest licensing queues and ticket office lines. All bookings are cleared in advance.</p>
              </div>

              <div className="bg-sand/35 p-6 border border-accent/10 rounded-sm space-y-3">
                <Check size={16} className="text-accent" />
                <h3 className="font-serif text-primary text-base font-semibold">Villa Snack Platter</h3>
                <p className="text-xs text-charcoal/70 font-sans font-light leading-relaxed">Complimentary fresh tropical fruit baskets, refreshments, and picnic basket lunches prepared in-house.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. NEARBY EXPERIENCES */}
      <section className="py-20 bg-sand/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
              Related Excursions
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-medium tracking-wide">
              Nearby Experiences
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attraction.nearby.map((nearbySlug) => {
              const nearbyItem = ATTRACTIONS[nearbySlug];
              if (!nearbyItem) return null;
              return (
                <div 
                  key={nearbyItem.slug}
                  className="bg-pearl border border-accent/15 rounded-[12px] overflow-hidden flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] hover:border-accent/30 transition-all duration-500 relative text-left"
                >
                  <Link href={`/experiences/${nearbyItem.slug}`} className="absolute inset-0 z-30" />
                  <div>
                    <div className="h-48 relative overflow-hidden">
                      <Image 
                        src={nearbyItem.image} 
                        alt={nearbyItem.name} 
                        fill 
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 bg-primary/75 backdrop-blur-md px-2.5 py-1 rounded-sm text-[9px] font-sans tracking-widest text-accent uppercase font-bold">
                        {nearbyItem.category}
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="font-serif text-base text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                        {nearbyItem.name}
                      </h3>
                      <p className="text-charcoal/70 font-sans font-light text-xs leading-relaxed line-clamp-2">
                        {nearbyItem.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 pb-6 relative z-20">
                    <Link 
                      href={`/experiences/${nearbyItem.slug}`}
                      className="inline-flex items-center gap-1.5 text-[10px] text-accent hover:text-accent-hover font-sans tracking-widest uppercase font-bold transition-all duration-300 hover:gap-2.5"
                    >
                      Explore More <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 bg-pearl border-t border-accent/15 text-left">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
              Logistics & Information
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-medium tracking-wide">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 font-sans">
            {attraction.faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border-b border-accent/20 pb-4 transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-primary hover:text-accent text-sm md:text-base font-medium py-3 text-left focus:outline-none transition-colors"
                >
                  <span>{faq.question}</span>
                  {activeFaq === idx ? (
                    <ChevronUp size={16} className="text-accent" />
                  ) : (
                    <ChevronDown size={16} className="text-accent" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs md:text-sm text-charcoal/70 leading-relaxed pt-2 font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CALL TO ACTION - LUXURY BOOKING */}
      <section className="py-24 bg-primary text-pearl relative overflow-hidden border-t border-accent/20">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src={attraction.image} 
            alt="CTA backdrop" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-accent" /> Plan This Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-pearl leading-tight font-medium">
            Stay at Hotel Sunrise &bull; Experience Sri Vijaya Puram
          </h2>
          <p className="font-sans text-pearl/70 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto">
            Allow our dedicated concierge hosts to arrange private yacht cruises, timing approvals, fast-track permits, and premium transfers for your visit to {attraction.name} with our custom <Link href="/packages" className="text-accent underline font-normal hover:text-accent-hover transition-colors">Andaman Travel Packages</Link>.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-pearl font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-[#25D366] shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
            >
              <MessageSquare size={16} /> Enquire via WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-sm"
            >
              Book Your Stay <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
