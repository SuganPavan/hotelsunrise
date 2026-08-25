import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#081628] text-pearl relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <a href="#" className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-accent/25">
              <Image 
                src="/logo.jpg" 
                alt="Hotel Sunrise Logo"
                fill
                className="object-cover scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.1em] text-pearl font-medium uppercase">
                Hotel Sunrise
              </span>
              <span className="text-[9px] tracking-[0.25em] text-accent uppercase font-sans font-medium mt-1">
                Sri Vijaya Puram
              </span>
            </div>
          </a>
          <p className="text-pearl/70 text-sm leading-relaxed font-sans font-normal">
            A comfortable and convenient base located in the vibrant heart of Aberdeen Bazar, Sri Vijaya Puram, perfect for family vacations, honeymoons, and business trips.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-pearl/80 hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-pearl/80 hover:text-accent hover:border-accent transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-accent">
            The Experience
          </h4>
          <ul className="space-y-3">
            {[
              { name: "About", href: "/about" },
              { name: "Rooms & Suites", href: "/rooms" },
              { name: "Andaman Experiences", href: "/experiences" },
              { name: "Wildlife Attractions", href: "/wildlife" },
              { name: "Curated Packages", href: "/packages" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-pearl/70 hover:text-accent transition-colors duration-300 text-sm font-sans font-normal"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <h4 className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-accent">
            Reservations
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-pearl/70 text-sm font-sans font-normal">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span>Hotel Sunrise, Babu Lane, Aberdeen Bazaar, Sri Vijayapuram, South Andaman, Andaman & Nicobar Islands - 744104</span>
            </li>
            <li className="flex items-center space-x-3 text-pearl/70 text-sm font-sans font-normal">
              <Phone size={18} className="text-accent shrink-0" />
              <a href="tel:+919732470317" className="hover:text-accent transition-colors duration-300">
                +91 97324 70317
              </a>
            </li>
            <li className="flex items-center space-x-3 text-pearl/70 text-sm font-sans font-normal">
              <Mail size={18} className="text-accent shrink-0" />
              <a 
                href="mailto:hotelsunrisesrivijayapuram@gmail.com" 
                onClick={(e) => {
                  try {
                    navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                    alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                  } catch (err) {
                    // Fallback
                  }
                }}
                className="hover:text-accent transition-colors duration-300"
              >
                hotelsunrisesrivijayapuram@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Guest Promise */}
        <div className="space-y-6">
          <h4 className="text-sm font-sans font-semibold tracking-[0.2em] uppercase text-accent">
            Our Guest Promise
          </h4>
          <p className="text-pearl/70 text-xs leading-relaxed font-sans font-normal">
            We are dedicated to providing clean, well-appointed accommodations, warm local hospitality, and assistance in arranging ferry tickets and sightseeing tours to make your Andaman exploration memorable and hassle-free.
          </p>
          <div className="border border-accent/20 bg-accent/5 p-4 rounded text-center">
            <span className="text-[10px] uppercase font-sans tracking-widest text-accent font-semibold block">
              Premium City Accommodations
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-pearl/10 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-pearl/55 text-xs font-sans font-normal space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Hotel Sunrise Sri Vijaya Puram. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-accent transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
