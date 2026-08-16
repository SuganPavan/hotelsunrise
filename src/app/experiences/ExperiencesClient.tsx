"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass, Clock, Calendar, MapPin, Search, Sparkles, MessageSquare, ArrowRight, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";
import { ATTRACTIONS } from "@/data/experiences";

export default function ExperiencesClient() {
  const attractions = Object.values(ATTRACTIONS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getCleanTravelTime = (slug: string) => {
    switch (slug) {
      case "cellular-jail": return "5 mins drive from hotel";
      case "ross-island": return "3 mins drive to jetty";
      case "north-bay-island": return "3 mins drive to jetty";
      case "chidiya-tapu": return "45 mins drive from hotel";
      case "mahatma-gandhi-marine-national-park": return "50 mins drive from hotel";
      case "mount-harriet": return "1 hour travel from hotel";
      case "corbyns-cove-beach": return "15 mins drive from hotel";
      case "chatham-saw-mill": return "10 mins drive from hotel";
      case "wandoor-beach": return "50 mins drive from hotel";
      case "samudrika-museum": return "8 mins drive from hotel";
      default: return "";
    }
  };

  const categories = ["All", ...Array.from(new Set(attractions.map((attr) => attr.category)))];

  const filteredAttractions = attractions.filter((attr) => {
    const query = searchQuery.toLowerCase();
    
    // Check if the search query matches any FAQ questions or answers
    const matchesFaq = attr.faqs && attr.faqs.some(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );

    const matchesSearch = attr.name.toLowerCase().includes(query) || 
                          attr.description.toLowerCase().includes(query) ||
                          matchesFaq;
                          
    const matchesCategory = selectedCategory === "All" || attr.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

      {/* Hero Section */}
      <section className="relative w-full h-auto min-h-[30vh] md:min-h-[35vh] pt-32 pb-20 md:pt-24 md:pb-24 flex items-center justify-center overflow-hidden">
        {/* Background Image: Scenic view */}
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=90"
          alt="Andaman shoreline landscape"
          fill
          priority
          className="object-cover"
        />
        {/* Navy blue gradient overlay for high contrast text area */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/95 via-[#081628]/80 to-transparent z-10" />
        {/* Bottom smooth blend overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#f8f9fa] to-transparent z-15 opacity-90" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-8 space-y-6">

          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              Hotel Sunrise &bull; Excursions Guide
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl text-pearl leading-[1.1] font-semibold tracking-wide max-w-4xl mx-auto">
            Andaman Excursions <br />
            <span className="text-accent italic font-normal">& Local Experiences</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl font-normal text-xs md:text-base leading-relaxed drop-shadow-sm">
            Stay centrally at Hotel Sunrise in Sri Vijaya Puram and let our hosts guide you through historical landmarks, marine reserves, pristine beaches, and forest hiking trails.
          </p>
        </div>

        {/* Modern Loop Line Scroll Down Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-[7px] md:text-[8px] font-sans tracking-[0.3em] text-pearl/40 uppercase font-light">
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden rounded-full">
            <div 
              className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-[#8a6835] to-[#f8f9fa] rounded-full"
              style={{
                animation: "scrollDownLine 2.2s cubic-bezier(0.15, 0.85, 0.45, 1) infinite"
              }}
            />
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scrollDownLine {
              0% { transform: translateY(-100%); opacity: 0; }
              30% { opacity: 1; }
              60% { opacity: 1; }
              100% { transform: translateY(300%); opacity: 0; }
            }
          `}} />
        </div>
      </section>

      {/* Main Listing Section */}
      <main className="flex-grow py-20 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Navigation & Controls */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-end border-b border-charcoal/10 pb-8">
          
          {/* Search and Category Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/45" size={16} />
              <input
                type="text"
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-charcoal/15 rounded-[8px] text-xs font-sans text-[#2b2b2b] placeholder-charcoal/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Category Selector */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/45" size={14} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-white border border-charcoal/15 rounded-[8px] text-xs font-sans text-[#2b2b2b] appearance-none focus:outline-none focus:border-accent transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Attractions Listing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((attr, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={attr.slug}
              className="bg-white border border-[#081628]/5 rounded-[20px] overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-500 relative"
            >
              {/* Clickable Card link */}
              <Link href={`/experiences/${attr.slug}`} className="absolute inset-0 z-30" aria-label={`Explore ${attr.name}`} />

              <div>
                {/* Image */}
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src={attr.image} 
                    alt={attr.name} 
                    fill 
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-[#081628]/80 backdrop-blur-md px-3 py-1.5 rounded-[6px] text-[9px] font-sans tracking-widest text-accent uppercase font-bold border border-white/10">
                    {attr.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 text-left">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg text-[#081628] group-hover:text-accent font-semibold transition-colors duration-300 line-clamp-2">
                      {attr.name}
                    </h3>
                    <p className="text-charcoal/70 font-sans font-light text-xs leading-relaxed line-clamp-3">
                      {attr.description}
                    </p>
                  </div>

                  {/* Metadata Row */}
                  <div className="pt-4 border-t border-charcoal/5 flex flex-wrap gap-4 text-[10px] text-charcoal/60 font-sans font-light">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-accent-hover shrink-0" />
                      <span>{getCleanTravelTime(attr.slug)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-accent-hover" />
                      <span>Best: {attr.bestTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 pb-6 text-left relative z-20">
                <span className="inline-flex items-center gap-1.5 text-xs text-accent-hover font-sans tracking-widest uppercase font-bold transition-all duration-300 group-hover:gap-2.5">
                  Explore Experience Details <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAttractions.length === 0 && (
          <div className="text-center py-20 bg-white border border-[#081628]/5 rounded-[20px] max-w-2xl mx-auto shadow-sm">
            <Compass className="mx-auto text-accent-hover/30 mb-4 animate-spin" size={48} />
            <h3 className="font-serif text-lg text-primary font-semibold">No Excursions Found</h3>
            <p className="text-charcoal/60 font-sans text-xs mt-2">Try adjusting your search query or category filters.</p>
          </div>
        )}
      </main>

      {/* Booking CTA Section */}
      <section className="bg-primary text-pearl py-20 relative overflow-hidden border-t border-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.08),transparent)] z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block">
            Plan Your Andaman Holiday
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-pearl font-medium tracking-wide leading-tight">
            Stay Centrally. Discover Sri Vijaya Puram.
          </h2>
          <p className="max-w-xl mx-auto font-sans text-pearl/70 text-xs md:text-base leading-relaxed font-light">
            Need help with roll-on roll-off vehicle ferries, restricted area permits, custom hiking guides, or timing schedules? Our 24/7 concierge desk is here to coordinate.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919732470317?text=Hello%20Concierge%20at%20Hotel%20Sunrise%2C%20I%20am%20interested%20in%20planning%20local%20excursions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-pearl font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-[8px] flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> Enquire on WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-primary font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-[8px] flex items-center justify-center gap-2"
            >
              Book Room Stays <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppConcierge />
    </div>
  );
}
