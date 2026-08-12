"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function WhatsAppConcierge() {
  const phoneNumber = "919732470317"; // Replace with real hotel WhatsApp contact number
  const message = "Hello Hotel Sunrise, I am interested in enquiring about a comfortable stay in Sri Vijaya Puram.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Label Tooltip */}
      <span className="hidden md:inline-block px-4 py-2 bg-primary text-pearl text-xs font-sans tracking-widest uppercase font-semibold border border-accent/20 rounded shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp Concierge
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-pearl flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 relative group/btn overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        {/* Animated Glow Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-pearl/20 animate-ping pointer-events-none scale-105" />
        
        {/* Icon */}
        <MessageSquare size={24} className="group-hover/btn:scale-110 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}
