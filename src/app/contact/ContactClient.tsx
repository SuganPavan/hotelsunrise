"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Send, Sparkles, Map } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

const DEFAULT_ROOMS = [
  { name: "Double Bedroom (Non-AC)" },
  { name: "Double Bedroom (AC)" },
  { name: "Family Room (AC)" }
];

export default function ContactClient() {
  const [rooms, setRooms] = useState(DEFAULT_ROOMS);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [roomType, setRoomType] = useState("Double Bedroom (AC)");
  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/rooms")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data === "object" && !data.error) {
          const list = Object.values(data) as any[];
          if (list.length > 0) {
            setRooms(list);
            setRoomType(list[0].name);
          }
        }
      })
      .catch((err) => console.error("Failed to load rooms in contact form:", err));
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = "919732470317";
    const waMessage = `Hello Hotel Sunrise Reservations!
I would like to make an enquiry:
• Name: ${guestName}
• Phone: ${phone}
• Check In: ${checkIn}
• Check Out: ${checkOut}
• Room: ${roomType}
• Guests: ${guests}
${message ? `• Special Notes: ${message}` : ""}
Please let me know availability and pricing.`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank");
  };

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
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80"
          alt="Hotel Sunrise customer service"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/90 via-[#081628]/70 to-[#f8f9fa] z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-8 space-y-4">
          <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent uppercase font-bold">
            Hotel Sunrise &bull; Reservations
          </span>
          <h1 className="font-serif text-3xl md:text-6xl text-pearl leading-[1.1] font-semibold tracking-wide">
            Plan Your Stay <br />
            <span className="text-accent italic font-medium">Bespoke Inquiry</span>
          </h1>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <main className="flex-grow py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
                Connect With Us
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#081628] font-semibold tracking-wide">
                Reach Our Concierge
              </h2>
              <p className="text-[#2b2b2b]/75 font-sans font-light text-xs md:text-sm leading-relaxed">
                Have questions about custom itineraries, ferry timings, or group booking packages? Reach out to our front desk directly or submit an inquiry using the secure reservations assistant.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <a
                href="tel:+919732470317"
                className="flex items-start gap-4 p-5 bg-white border border-[#081628]/5 rounded-[16px] shadow-sm hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#081628]/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-[#081628]/60 font-semibold mb-0.5">Phone Call</span>
                  <span className="font-sans text-sm font-semibold text-[#081628]">+91 97324 70317</span>
                </div>
              </a>

              <a
                href="mailto:hotelsunrisesrivijayapuram@gmail.com"
                onClick={() => {
                  try {
                    navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                    alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                  } catch (err) {}
                }}
                className="flex items-start gap-4 p-5 bg-white border border-[#081628]/5 rounded-[16px] shadow-sm hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#081628]/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-[#081628]/60 font-semibold mb-0.5">Send Email</span>
                  <span className="font-sans text-sm font-semibold text-[#081628] break-all">hotelsunrisesrivijayapuram@gmail.com</span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-white border border-[#081628]/5 rounded-[16px] shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#081628]/5 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-[#081628]/60 font-semibold mb-0.5">Location Address</span>
                  <p className="font-sans text-xs text-[#2b2b2b]/75 leading-relaxed">
                    Hotel Sunrise, Babu Lane, Aberdeen Bazaar, Sri Vijaya Puram (Port Blair), South Andaman, Andaman & Nicobar Islands - 744104
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="bg-white border border-[#081628]/5 rounded-[20px] p-4 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-sans font-bold text-[#081628]">
                <Map size={14} className="text-accent" /> Location Map
              </div>
              <div className="h-64 relative rounded-[12px] overflow-hidden border border-[#081628]/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.575294060875!2d92.73602517596825!3d11.668748388537637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30889508cd60be7f%3A0xe5a772c21966a2a0!2sAberdeen%20Bazaar%2C%20Port%20Blair%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1785500000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bespoke Inquiry Form */}
          <div className="lg:col-span-7 bg-[#081628]/95 backdrop-blur-md border border-accent/25 p-8 md:p-10 rounded-[20px] shadow-2xl space-y-6 text-pearl">
            <div className="border-b border-white/10 pb-4 text-left">
              <h3 className="font-serif text-2xl text-pearl font-medium flex items-center gap-2">
                <Sparkles className="text-accent" size={20} /> Secure Booking Inquiry
              </h3>
              <p className="text-xs text-pearl/60 font-sans tracking-wide mt-1">Specify your desired dates and room preferences below.</p>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-[9px] uppercase tracking-widest text-accent mb-1 font-semibold font-sans">Guest Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-primary border border-accent/20 px-4 py-3 text-pearl text-xs font-sans focus:outline-none focus:border-accent transition-colors rounded-[8px]"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-[9px] uppercase tracking-widest text-accent mb-1 font-semibold font-sans">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-primary border border-accent/20 px-4 py-3 text-pearl text-xs font-sans focus:outline-none focus:border-accent transition-colors rounded-[8px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-[9px] uppercase tracking-widest text-accent mb-1 font-semibold font-sans">Check In</label>
                  <input
                    type="text"
                    required
                    placeholder="Select Date"
                    value={checkIn}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-primary border border-accent/20 px-4 py-3 text-pearl text-xs font-sans focus:outline-none focus:border-accent transition-colors cursor-pointer rounded-[8px]"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-[9px] uppercase tracking-widest text-accent mb-1 font-semibold font-sans">Check Out</label>
                  <input
                    type="text"
                    required
                    placeholder="Select Date"
                    value={checkOut}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-primary border border-accent/20 px-4 py-3 text-pearl text-xs font-sans focus:outline-none focus:border-accent transition-colors cursor-pointer rounded-[8px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-[9px] uppercase tracking-widest text-accent mb-1 font-semibold font-sans">Room Category</label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full bg-primary border border-accent/20 px-4 py-3 text-pearl text-xs font-sans focus:outline-none focus:border-accent transition-colors cursor-pointer rounded-[8px]"
                  >
                    {rooms.map(room => (
                      <option key={room.name} value={room.name} className="bg-primary text-pearl">{room.name}</option>
                    ))}
                  </select>
                </div>
                <div className="text-left">
                  <label className="block text-[9px] uppercase tracking-widest text-accent mb-1 font-semibold font-sans">Guests Count</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-primary border border-accent/20 px-4 py-3 text-pearl text-xs font-sans focus:outline-none focus:border-accent transition-colors cursor-pointer rounded-[8px]"
                  >
                    <option value="1 Guest" className="bg-primary text-pearl">1 Guest</option>
                    <option value="2 Guests" className="bg-primary text-pearl">2 Guests</option>
                    <option value="3 Guests" className="bg-primary text-pearl">3 Guests</option>
                    <option value="4+ Guests" className="bg-primary text-pearl">4+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="text-left">
                <label className="block text-[9px] uppercase tracking-widest text-accent mb-1 font-semibold font-sans">Special Requirements / Notes</label>
                <textarea
                  placeholder="e.g. extra bedding, airport pickup time, vegetarian meals"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-primary border border-accent/20 px-4 py-3 text-pearl text-xs font-sans focus:outline-none focus:border-accent transition-colors rounded-[8px] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-center py-4 bg-accent hover:bg-accent-hover text-primary transition-all duration-300 font-sans tracking-widest text-xs uppercase font-bold shadow-lg rounded-[8px] flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Inquiry via WhatsApp <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </main>

      <WhatsAppConcierge />
      <Footer />
    </div>
  );
}
