"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Check, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  Clock,
  Compass,
  Mail,
  ArrowLeft
} from "lucide-react";
import { PackageData } from "@/data/packages";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  pkg: PackageData;
}

export default function PackageDetailClient({ pkg }: Props) {
  const whatsappBookingUrl = `https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.title)}.`;
  const whatsappContactUrl = `https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20have%20questions%20about%20your%20${encodeURIComponent(pkg.title)}.`;
  const emailBookingUrl = `mailto:hotelsunrisesrivijayapuram@gmail.com?subject=Booking%20Enquiry%20for%20${encodeURIComponent(pkg.title)}&body=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.title)}.`;

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between">
      <Navbar isHeroTransitioned={true} />

      {/* Hero Section */}
      <section className="relative w-full h-auto min-h-[40vh] lg:min-h-[50vh] pt-24 pb-28 lg:pt-28 lg:pb-32 flex items-center justify-center overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/85 via-[#081628]/60 to-[#f8f9fa] z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-4 space-y-6">
          {/* Desktop Floating Back Button */}
          <div className="absolute top-28 left-6 md:left-12 z-30 hidden md:block">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-[10px] text-pearl/80 hover:text-accent font-sans tracking-widest uppercase font-bold transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-[8px] border border-white/10"
            >
              <ArrowLeft size={14} /> Back to Packages
            </Link>
          </div>

          {/* Mobile Back Link */}
          <Link
            href="/packages"
            className="inline-flex md:hidden items-center gap-2 text-[10px] text-pearl/80 hover:text-accent font-sans tracking-widest uppercase font-bold transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-[8px] border border-white/10 mb-4"
          >
            <ArrowLeft size={14} /> Back to Packages
          </Link>

          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Hotel Sunrise &bull; {pkg.category}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl text-pearl leading-[1.1] font-semibold tracking-wide max-w-4xl mx-auto">
            {pkg.title} <br />
            <span className="text-accent italic font-normal text-2xl md:text-5xl block mt-2">{pkg.duration}</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/90 text-xs md:text-base leading-relaxed font-light">
            {pkg.longDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans font-bold tracking-widest text-xs uppercase rounded-[8px] transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              Book via WhatsApp
            </a>
            <a
              href={emailBookingUrl}
              onClick={() => {
                try {
                  navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                  alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                } catch (err) {}
              }}
              className="px-8 py-3.5 bg-[#081628]/85 hover:bg-[#081628] text-pearl border border-white/20 hover:border-white/45 font-sans font-bold tracking-widest text-xs uppercase rounded-[8px] transition-all duration-300 backdrop-blur-sm"
            >
              Book via Email
            </a>
          </div>
          </div>
          
        </section>

      {/* Package Header Details Card */}
      <section className="relative z-20 mt-6 md:-mt-16 max-w-4xl mx-auto w-full px-4 md:px-6">
        <div className="bg-white border border-[#081628]/10 rounded-[16px] md:rounded-[20px] p-4 md:p-8 shadow-md grid grid-cols-3 gap-2 md:gap-6 text-center md:text-left">
          <div className="space-y-0.5 border-r border-[#081628]/10 pr-2 md:pr-6">
            <span className="text-[8px] md:text-[10px] text-[#8a6835] uppercase tracking-widest font-semibold font-sans">
              Package Type
            </span>
            <h4 className="font-serif text-[11px] md:text-base font-bold text-[#081628] leading-tight">
              {pkg.category}
            </h4>
          </div>
          <div className="space-y-0.5 border-r border-[#081628]/10 px-2 md:px-6">
            <span className="text-[8px] md:text-[10px] text-[#8a6835] uppercase tracking-widest font-semibold font-sans">
              Duration
            </span>
            <h4 className="font-serif text-[11px] md:text-base font-bold text-[#081628] leading-tight">
              {pkg.duration}
            </h4>
          </div>
          <div className="space-y-0.5 pl-2 md:pl-6">
            <span className="text-[8px] md:text-[10px] text-[#8a6835] uppercase tracking-widest font-semibold font-sans">
              Price Plan
            </span>
            <h4 className="font-serif text-[11px] md:text-base font-bold text-[#081628] leading-tight">
              {pkg.price}
            </h4>
          </div>
        </div>
      </section>

      {/* Overview & Includes */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Description & Inclusions */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-xs font-sans tracking-[0.3em] text-[#8a6835] uppercase font-bold block">
              Curated Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#081628] font-semibold tracking-wide">
              Your Guided Island Itinerary
            </h2>
            <p className="text-[#2b2b2b]/75 font-sans font-light text-xs md:text-sm leading-relaxed">
              Stay centrally at Hotel Sunrise in Babu Lane, Aberdeen Bazaar, providing clean, comfortable <Link href="/rooms" className="text-[#8a6835] underline font-medium hover:text-accent-hover transition-colors">lodging accommodations</Link> for recovery. We handle all ferry bookings, airport pick-drops, and adventure activity scheduling so you can explore the Andaman Islands with maximum peace of mind.
            </p>
          </div>

          <div className="bg-[#081628]/5 border border-[#081628]/10 rounded-[16px] p-8 space-y-6">
            <h3 className="font-serif text-lg text-[#081628] font-bold">
              Package Inclusions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.included.map((include, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#2b2b2b]/80 font-sans font-light">
                  <Check size={14} className="text-[#8a6835] shrink-0 mt-0.5" />
                  <span>{include}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Quick Action Booking Card */}
        <div className="lg:col-span-5 text-left">
          <div className="bg-[#081628] border border-[#081628]/15 rounded-[20px] p-8 text-pearl shadow-xl space-y-6 sticky top-24">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] text-accent uppercase tracking-widest font-semibold block">Rate Enquiry Required</span>
              <div className="text-3xl text-pearl font-serif font-bold mt-1">{pkg.price}</div>
            </div>

            <div className="space-y-4 text-xs font-sans font-light text-pearl/80">
              <span className="block text-[9px] uppercase tracking-wider text-accent font-semibold">Included Perks & Features</span>
              <ul className="space-y-3">
                {pkg.features.map(feat => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check size={12} className="text-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a 
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-pearl transition-all duration-300 font-sans tracking-widest text-[10px] uppercase font-bold flex items-center justify-center gap-2 rounded-[8px] shadow-sm"
              >
                <MessageSquare size={13} /> Book via WhatsApp
              </a>
              <a 
                href={emailBookingUrl}
                onClick={() => {
                  try {
                    navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                    alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                  } catch (err) {}
                }}
                className="w-full text-center py-3.5 bg-white/10 hover:bg-white/25 text-pearl border border-white/20 hover:border-white/45 transition-all duration-300 font-sans tracking-widest text-[10px] uppercase font-bold flex items-center justify-center gap-2 rounded-[8px]"
              >
                <Mail size={13} /> Book via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Storytelling Itinerary Section */}
      <section className="bg-white relative z-10">
        {pkg.itinerary.map((day, index) => {
          const isOdd = index % 2 === 0;
          return (
            <section 
              key={day.dayNum} 
              className="relative w-full min-h-0 md:min-h-[90vh] flex items-center justify-center py-8 md:py-24 bg-white border-b border-[#081628]/5 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative w-full h-[45vh] md:h-[70vh] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg group ${
                    isOdd ? "order-1" : "order-1 md:order-2"
                  }`}
                >
                  <Image
                    src={day.image}
                    alt={day.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className={`relative space-y-6 ${
                    isOdd ? "order-2 md:pl-8" : "order-2 md:order-1 md:pr-8"
                  }`}
                >
                  {/* Background Large Day Number */}
                  <div className="absolute -top-10 md:-top-20 -left-6 text-8xl md:text-[13rem] font-sans font-extralight text-[#081628] opacity-[0.15] select-none pointer-events-none tracking-tighter">
                    {day.dayNum}
                  </div>

                  <div className="relative z-10 space-y-4">
                    <span 
                      className="text-xs font-sans tracking-[0.3em] text-[#8a6835] uppercase font-bold block"
                      dangerouslySetInnerHTML={{ __html: day.daySubtitle }}
                    />
                    <h2 className="font-serif text-3xl md:text-5xl text-[#081628] font-bold leading-tight tracking-wide">
                      {day.title}
                    </h2>
                    <p 
                      className="text-[#2b2b2b]/75 font-sans font-light text-xs md:text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: day.desc }}
                    />
                    
                    {/* Chips tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {day.chips.map((chip, cIdx) => (
                        <span 
                          key={cIdx} 
                          className="px-3 py-1.5 bg-[#081628]/5 border border-[#081628]/10 rounded-full text-[10px] md:text-xs font-sans font-medium text-[#081628]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
