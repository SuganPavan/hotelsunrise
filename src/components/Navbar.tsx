"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Rooms", href: "/rooms" },
  { name: "Explore Andaman", href: "/experiences" },
  { name: "Packages", href: "/packages" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  isHeroTransitioned?: boolean;
}

export default function Navbar({ isHeroTransitioned = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-[600ms] ease-out ${
          isScrolled || isHeroTransitioned
            ? "bg-[#081628]/60 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_8px_32px_0_rgba(8,22,40,0.37)]"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 overflow-hidden rounded-full border border-accent/25">
              <Image 
                src="/logo.jpg" 
                alt="Hotel Sunrise Logo"
                fill
                className="object-cover scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl tracking-[0.2em] text-pearl font-medium uppercase">
                Hotel Sunrise
              </span>
              <span className="text-[7px] md:text-[8px] tracking-[0.3em] text-accent uppercase font-sans font-medium mt-0.5">
                Sri Vijaya Puram
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans tracking-widest text-pearl/80 hover:text-accent transition-colors duration-300 uppercase font-medium relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-accent/50 text-accent hover:bg-accent hover:text-primary transition-all duration-500 text-xs font-sans tracking-widest uppercase font-medium animate-pulse"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-pearl hover:text-accent transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary z-40 lg:hidden flex flex-col justify-start overflow-y-auto max-h-screen px-8 md:px-16 pb-12 pt-24"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-pearl hover:text-accent transition-colors duration-300 tracking-wider block cursor-pointer"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="block"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 pt-8 border-t border-pearl/10 flex flex-col space-y-6"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-accent hover:bg-accent-hover text-primary font-sans tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Your Stay <ArrowRight size={16} />
              </Link>
              <div className="text-center text-pearl/60 text-xs font-sans font-normal tracking-wider">
                Reservations: +91 97324 70317 | Sri Vijaya Puram, Andaman
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
