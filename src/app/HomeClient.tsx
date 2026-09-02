"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Star, 
  Calendar, 
  Check, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Compass, 
  Trees, 
  Camera,
  MessageSquare,
  Sparkles,
  Award,
  Clock,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";
import { getOptimizedVideoUrl } from "@/utils/cloudinary";
import { ROOMS_DATA } from "@/data/rooms";
import FULL_GALLERY from "@/data/gallery.json";

// High-resolution premium images from Unsplash representing Port Blair and Luxury hospitality
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=90", // Luxury beach resort sunset
  reception: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", // Premium resort lobby
  roomIntro: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80", // Premium hotel suite
  restaurant: "https://images.unsplash.com/photo-1534080391025-24799f22237e?auto=format&fit=crop&w=800&q=80", // Coastal ocean dining
  exterior: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Pristine sandy shore
  staff: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", // Warm welcoming hosts
  
  // Rooms
  azureVilla: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  canopySuite: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
  samudraRes: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
  
  // Experiences
  cellularJail: "/images/experiences/cellular-jail-courtyard.jpg", // Heritage / Monument
  rossIsland: "/images/experiences/ross-island.jpg", // Overgrown forest ruins
  northBay: "/images/experiences/north-bay.jpg", // Coral / Diving
  chidiyaTapu: "/images/experiences/chidiya-tapu.jpg", // Rainforest cliffs
  wildlifeMg: "/images/experiences/mahatma-gandhi-marine-national-park.jpg", // Marine national park
  
  // Wildlife Page
  croc: "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?auto=format&fit=crop&w=800&q=80", // Saltwater crocodile / reptile
  marine: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Vibrant turquoise waters
  birds: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80", // Exotic birds
  nature: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80", // Rainforest
  
  // Packages
  honeymoon: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Honeymoon
  family: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80", // Family spa/resort
  adventure: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80", // Ocean kayaking/diving
};

const ROOMS = Object.values(ROOMS_DATA);

const EXPERIENCES = [
  {
    slug: "cellular-jail",
    name: "Cellular Jail National Memorial",
    description: "Explore India's history at the National Memorial. Pay respects to freedom fighters and witness the evocative Sound & Light show.",
    image: IMAGES.cellularJail,
    tag: "History & Heritage",
    travelTime: "5 mins drive from hotel",
    bestTime: "Late Afternoon"
  },
  {
    slug: "ross-island",
    name: "Ross Island (Netaji Subhash Chandra Bose Island)",
    description: "Walk among majestic British-era colonial ruins slowly reclaimed by giant peepal roots and friendly deer roaming freely.",
    image: IMAGES.rossIsland,
    tag: "Colonial Heritage",
    travelTime: "3 mins drive to jetty",
    bestTime: "Morning"
  },
  {
    slug: "north-bay-island",
    name: "North Bay Island",
    description: "Delve into pristine marine ecosystems with customized scuba diving, sea walking, and glass-bottom boat excursions.",
    image: IMAGES.northBay,
    tag: "Water Adventures",
    travelTime: "3 mins drive to jetty",
    bestTime: "Morning"
  },
  {
    slug: "chidiya-tapu",
    name: "Chidiya Tapu Forest & Sunset Point",
    description: "Traverse lush forest trails ending at panoramic cliffs to view the most spectacular and dramatic golden sunsets in Andaman.",
    image: IMAGES.chidiyaTapu,
    tag: "Nature & Sunsets",
    travelTime: "45 mins drive from hotel",
    bestTime: "Afternoon"
  },
  {
    slug: "mahatma-gandhi-marine-national-park",
    name: "Mahatma Gandhi Marine National Park",
    description: "Embark on private boat charters through a protected cluster of 15 islands showcasing pristine untouched reefs and mangroves.",
    image: IMAGES.wildlifeMg,
    tag: "Marine Conservation",
    travelTime: "50 mins drive from hotel",
    bestTime: "Morning"
  },
  {
    slug: "mount-harriet",
    name: "Mount Harriet National Park",
    description: "Hike through lush evergreen forest trails to the third-highest peak of Andaman, offering sweeping ocean panoramas and rich birdlife.",
    image: "/mount-harriet-hut.jpg",
    tag: "Nature & Hiking",
    travelTime: "1 hour travel from hotel",
    bestTime: "Morning"
  },
];

const WILDLIFE = [
  { title: "Andaman Wood Pigeon", desc: "Spot this rare, endemic bird foraging in the deep forest canopies of the islands.", image: "https://images.unsplash.com/photo-1445820200644-69f87d946277?auto=format&fit=crop&w=800&q=80", slug: "chidiya-tapu" },
  { title: "Andaman Day Gecko", desc: "Observe these bright green, day-active geckos climbing smooth forest tree trunks.", image: "/images/wildlife/gecko.jpg", slug: "chidiya-tapu" },
  { title: "Loggerhead Sea Turtle", desc: "Witness massive marine turtles nesting along pristine, protected tropical beaches.", image: "/images/wildlife/turtle.jpg", slug: "north-bay-island" },
  { title: "Saltwater Crocodile", desc: "Witness these ancient, massive reptilian predators in tidal estuaries and creeks.", image: "/images/wildlife/crocodile.png", slug: "chidiya-tapu" },
  { title: "Andaman Pit Viper", desc: "Spot this venomous endemic green snake coiled quietly in the branches of lowland rainforests.", image: "/images/wildlife/viper.jpg", slug: "chidiya-tapu" },
  { title: "Checkered Keelback", desc: "Discover this native non-venomous freshwater snake hunting in streams and ponds.", image: "/images/wildlife/keelback.png", slug: "mahatma-gandhi-marine-national-park" },
];

const PACKAGES = [
  {
    slug: "honeymoon-package",
    title: "Romantic Andaman Honeymoon Escape",
    price: "Rate on Enquiry / 4 Nights",
    image: "/honeymoon-decor.jpg",
    features: ["Comfortable Double AC Stay", "Complimentary Welcome Drink", "Ferry Booking Assistance", "SUV Airport Pickup & Drop"],
  },
  {
    slug: "family-package",
    title: "Family Fun Escape",
    price: "Rate on Enquiry / 4 Nights",
    image: "/rooms/family-room-family.jpg",
    features: ["Accommodation in spacious Family Room (AC)", "Daily Family Breakfasts", "Ferry Booking Assistance", "SUV Pick & Drop transfers"],
  },
  {
    slug: "budget-traveller-package",
    title: "Budget Traveller Package",
    price: "Rate on Enquiry / 3 Nights",
    image: "/images/experiences/chidiya-tapu.jpg",
    features: ["Comfortable Room (Double Non-AC)", "Daily Local Breakfasts", "Airport Pickup SUV Service", "Local Transit Assistance & Maps"],
  },
];

const DEFAULT_GALLERY = FULL_GALLERY;

const REVIEWS = [
  {
    name: "Vikram Malhotra",
    location: "New Delhi, India",
    rating: 5,
    comment: "A highly budget-friendly gem in the heart of town. We saved so much on accommodation while enjoying exceptionally cozy, clean rooms. Aberdeen Bazaar and the local ferry points are just a short walk away!",
    stay: "Stayed in Double Room (AC)"
  },
  {
    name: "Ananya Iyer",
    location: "Bengaluru, India",
    rating: 5,
    comment: "The hotel facilities are top-notch for the price. Fast Wi-Fi, crystal-clean bathrooms, delicious morning breakfast, and an incredibly supportive staff that helped us plan all our local sightseeing.",
    stay: "Stayed in Family Suite"
  },
  {
    name: "Rohan Deshmukh",
    location: "Pune, India",
    rating: 5,
    comment: "Perfect location for sightseeing. Cellular Jail is just minutes away, and the concierge arranged our shared ferry to Ross Island seamlessly. It's the ultimate base for comfortable island travel.",
    stay: "Stayed in Double Room (Non-AC)"
  }
];

export default function HomePage() {
  // Cinematic transition states
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [showFinalContent, setShowFinalContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  
  const [rooms, setRooms] = useState(ROOMS);
  const [gallery, setGallery] = useState(DEFAULT_GALLERY);

  // Find the lowest room price dynamically from rooms data
  const lowestPrice = rooms.reduce((min, room) => {
    const match = room.price.match(/\d+[\d,\s]*/);
    if (match) {
      const value = parseInt(match[0].replace(/[,\s]/g, ""), 10);
      return value < min ? value : min;
    }
    return min;
  }, Infinity);

  const formattedLowestPrice = lowestPrice !== Infinity ? `₹${lowestPrice}` : "₹900";

  useEffect(() => {
    fetch("/api/rooms", { cache: "no-store" })
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
      .catch((err) => {
        // Silently handle cancelled or transient aborted requests
        if (err.name === 'AbortError' || err.message?.includes('499')) {
          return;
        }
        console.warn("Failed to load rooms dynamically:", err.message);
      });

    fetch("/api/gallery", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error: " + res.status);
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Response was not JSON");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setGallery(data);
        }
      })
      .catch((err) => {
        // Silently handle cancelled or transient aborted requests
        if (err.name === 'AbortError' || err.message?.includes('499')) {
          return;
        }
        console.warn("Failed to load gallery dynamically:", err.message);
      });
  }, []);
  
  // Active highlighted card state (for Nearby Attractions / Location Cards)
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Start at index 0 (Cellular Jail - always visible on load)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const cardCycleTimer = setInterval(() => {
      setActiveCardIndex((prev) => {
        if (!isTransitioned) {
          // Visible cards on first load are Cards 1, 3, 5, 8 (indexes 0, 2, 4, 7)
          const visibleIndexes = [0, 2, 4, 7];
          const currentPos = visibleIndexes.indexOf(prev);
          const nextPos = (currentPos + 1) % visibleIndexes.length;
          return visibleIndexes[nextPos];
        } else {
          // All 8 cards are visible
          return (prev + 1) % 8;
        }
      });
    }, 4000); // Highlight cycles every 4 seconds

    return () => clearInterval(cardCycleTimer);
  }, [isTransitioned]);

  // Clip path definitions (0-1 scale)
  const mobileCardPath = "M 0.5,0.48 L 0.82,0.48 C 0.88,0.48 0.92,0.55 0.92,0.67 C 0.92,0.79 0.88,0.86 0.82,0.86 L 0.18,0.86 C 0.12,0.86 0.08,0.79 0.08,0.67 C 0.08,0.55 0.12,0.48 0.18,0.48 Z";
  const desktopCardPath = "M 0.50,0.15 L 0.88,0.15 C 0.93,0.15 0.96,0.25 0.96,0.5 C 0.96,0.75 0.93,0.80 0.88,0.80 L 0.50,0.80 C 0.45,0.80 0.42,0.70 0.42,0.5 C 0.42,0.30 0.45,0.15 0.50,0.15 Z";
  const fullPath = "M 0,0 L 1,0 C 1,0 1,0.25 1,0.5 C 1,0.75 1,1 1,1 L 0,1 C 0,1 0,0.75 0,0.5 C 0,0.25 0,0 0,0 Z";

  // Outline path definitions (0-100 scale)
  const mobileCardPath100 = "M 50,48 L 82,48 C 88,48 92,55 92,67 C 92,79 88,86 82,86 L 18,86 C 12,86 8,79 8,67 C 8,55 12,48 18,48 Z";
  const desktopCardPath100 = "M 50,15 L 88,15 C 93,15 96,25 96,50 C 96,75 93,80 88,80 L 50,80 C 45,80 42,70 42,50 C 42,30 45,15 50,15 Z";
  const fullPath100 = "M 0,0 L 100,0 C 100,0 100,25 100,50 C 100,75 100,100 100,100 L 0,100 C 0,100 0,75 0,50 C 0,25 0,0 0,0 Z";

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const transitionTimer = setTimeout(() => {
      setIsTransitioned(true);
    }, 16000); // Transitions to full screen at 16 seconds

    const contentTimer = setTimeout(() => {
      setShowFinalContent(true);
    }, 16000); // Shows Stage 2 content at 16 seconds

    const videoTimer = setTimeout(() => {
      setLoadVideo(true);
    }, 1000); // 1-second delay to allow critical initial LCP resources to load

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(transitionTimer);
      clearTimeout(contentTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  const activeCardPath = (isMobile ? mobileCardPath : desktopCardPath) || desktopCardPath;
  const activeCardPath100 = (isMobile ? mobileCardPath100 : desktopCardPath100) || desktopCardPath100;

  // Gallery Filter State

  // Gallery Filter State
  const [selectedGallery, setSelectedGallery] = useState("Hotel");

  // Reviews Slider State
  const [currentReview, setCurrentReview] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);



  // Parallax Hero Scroll Effect
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  // Featured Rooms Section Data & Animations
  const roomsGridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: roomsScrollProgress } = useScroll({
    target: roomsGridRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(roomsScrollProgress, [0.05, 0.45], ["100%", "0%"]);
  const leftRot = useTransform(roomsScrollProgress, [0.05, 0.45], [-5, 0]);
  const leftOpac = useTransform(roomsScrollProgress, [0.05, 0.45], [0.3, 1]);

  const middleScale = useTransform(roomsScrollProgress, [0.05, 0.45], [0.95, 1]);

  const rightX = useTransform(roomsScrollProgress, [0.05, 0.45], ["-100%", "0%"]);
  const rightRot = useTransform(roomsScrollProgress, [0.05, 0.45], [5, 0]);
  const rightOpac = useTransform(roomsScrollProgress, [0.05, 0.45], [0.3, 1]);



  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  };
  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  // Get the first hotel exterior, lobby, and room images from the dynamic gallery database
  const hotelFront = gallery.find(item => item.image.includes("exterior") || item.title.toLowerCase().includes("exterior")) || gallery[0];
  const reception = gallery.find(item => item.image.includes("lobby") || item.title.toLowerCase().includes("lobby") || item.title.toLowerCase().includes("reception")) || gallery[1];
  const room = gallery.find(item => item.category === "Rooms") || gallery[2];
  
  const homeGalleryImages = [hotelFront, reception, room].filter(Boolean);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-accent selection:text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Hotel Sunrise",
            "url": "https://www.hotelsunriseandaman.com/",
            "logo": "https://www.hotelsunriseandaman.com/logo.jpg",
            "image": "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=90",
            "description": "Experience a comfortable and convenient stay at Hotel Sunrise, located at Hotel Sunrise, Babu Lane, Aberdeen Bazaar, Sri Vijayapuram, South Andaman, Andaman & Nicobar Islands-744104. Close to ferry terminals and major tourist attractions.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hotel Sunrise, Babu Lane, Aberdeen Bazaar",
              "addressLocality": "Sri Vijayapuram, South Andaman",
              "addressRegion": "Andaman & Nicobar Islands",
              "postalCode": "744104",
              "addressCountry": "IN"
            },
            "telephone": "+91 97324 70317",
            "priceRange": "₹3,500 - ₹6,500"
          })
        }}
      />
      <Navbar isHeroTransitioned={isTransitioned} />


      <section ref={heroRef} className="relative h-[85vh] min-h-[520px] sm:min-h-[540px] md:min-h-0 md:h-[94vh] lg:h-[94vh] w-full bg-primary pt-20 md:pt-0 flex items-center overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
          .hero-video-initial {
            clip-path: none;
            -webkit-clip-path: none;
          }
          .hero-video-initial video {
            transform: scale(1) translate3d(0%, 0%, 0);
          }
          @media (min-width: 1024px) {
            .hero-video-initial {
              clip-path: url(#wave-clip-desktop-static);
              -webkit-clip-path: url(#wave-clip-desktop-static);
            }
            .hero-video-initial video {
              transform: scale(1.15) translate3d(17%, 2%, 0);
            }
          }
          @media (max-width: 1023px) {
            .rooms-mobile-override {
              transform: none !important;
              opacity: 1 !important;
            }
          }
        `}} />
        {/* Background Subtle Gradient Overlay */}
        <div 
          style={{ backgroundImage: 'linear-gradient(to right, rgba(8,22,40,0.6) 0%, rgba(8,22,40,0.2) 50%, rgba(8,22,40,0.6) 100%)' }}
          className="absolute inset-0 z-10 pointer-events-none" 
        />

        {/* Cinematic Background Video container (Transitions from card-masked to full-screen) */}
        <div 
          className={`absolute inset-0 w-full h-full z-10 overflow-hidden transition-all duration-1000 ${!isMounted ? 'hero-video-initial' : ''}`}
          style={isMounted ? {
            clipPath: isMobile ? 'none' : 'url(#wave-clip)',
            WebkitClipPath: isMobile ? 'none' : 'url(#wave-clip)'
          } : undefined}
        >
          {/* Subtle dark overlay inside the video container */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent z-10 pointer-events-none" />
          
          {/* Cinematic dot screen overlay to mask blockiness */}
          <div 
            className="absolute inset-0 z-15 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.25) 1px, transparent 0)",
              backgroundSize: "3px 3px"
            }}
          />

          {!isMobile && (
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-20 text-accent/35"
            >
              {isMounted ? (
                <motion.path 
                  d={isTransitioned ? fullPath100 : activeCardPath100}
                  initial={false}
                  animate={{ 
                    d: isTransitioned ? fullPath100 : activeCardPath100,
                    opacity: isTransitioned ? 0 : 1 
                  }}
                  transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.6" 
                />
              ) : (
                <path 
                  d={desktopCardPath100}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.6" 
                />
              )}
            </svg>
          )}
          
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
            onPlaying={() => setIsVideoPlaying(true)}
            className="w-full h-full object-cover brightness-125 lg:brightness-100"
            style={isMounted ? { 
              imageRendering: "auto",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              willChange: "transform",
              transform: (isTransitioned || isMobile) 
                ? "scale(1) translate3d(0, 0, 0)" 
                : "scale(1.15) translate3d(17%, 2%, 0)",
              transition: "transform 2500ms cubic-bezier(0.25, 1, 0.5, 1)"
            } : undefined}
          >
            {loadVideo && (
              <source 
                src={isMobile ? "/video/hero-mobile.mp4" : "/video/hero-web.mp4"} 
                type="video/mp4" 
              />
            )}
          </video>

          {/* Smooth Fading Poster Overlay */}
          <div 
            className={`absolute inset-0 z-12 transition-opacity duration-500 ease-out pointer-events-none ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
          >
            {/* Mobile Poster Image */}
            <Image
              src="/hero-poster-mobile.jpg"
              alt="Hotel Sunrise Resort Entrance Sunset view"
              fill
              priority
              className="object-cover lg:hidden brightness-125"
              sizes="100vw"
            />
            {/* Desktop Poster Image */}
            <Image
              src="/hero-poster-desktop.jpg"
              alt="Hotel Sunrise Resort Entrance Sunset view"
              fill
              priority
              className="object-cover hidden lg:block brightness-100"
              sizes="100vw"
            />
          </div>
        </div>
        
        {/* Content Wrapper (Positions content absolute on top of video container) */}
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full pt-12 pb-4 md:py-20 lg:py-28 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 pointer-events-none">
          
          {/* LEFT COLUMN: WEBSITE CONTENT (42% width split - fades away on morph transition) */}
          <div className={`w-full lg:w-[42%] text-left max-w-2xl lg:max-w-[550px] flex flex-col justify-center space-y-4 md:space-y-8 transition-all duration-[1500ms] ease-out pointer-events-auto ${isTransitioned ? 'opacity-0 translate-x-[-30px] -translate-y-10 pointer-events-none' : 'opacity-100 translate-x-0 -translate-y-10'}`}>
            {/* Hotel Brand Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-[10px] md:text-[11px] font-sans tracking-[0.4em] text-accent brightness-125 uppercase font-extrabold">
                HOTEL SUNRISE &bull; ABERDEEN BAZAR
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="font-serif text-[30px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-wide text-pearl max-w-2xl lg:max-w-[500px]"
            >
              Hotel Sunrise <span className="text-accent italic font-medium text-lg sm:text-xl md:text-[22px] block tracking-wide mt-2 font-serif normal-case">Hotel in Port Blair, Andaman</span>
            </motion.h1>

            {/* Starting Price Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.65 }}
              className="font-sans text-xs md:text-sm tracking-[0.2em] text-accent uppercase font-medium mt-1"
            >
              Rooms Starting from <span className="font-semibold text-pearl">{formattedLowestPrice}</span>/Night
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="font-sans text-sm md:text-[15px] text-pearl/80 font-normal leading-[1.6] max-w-2xl lg:max-w-[460px]"
            >
              Hotel Sunrise is a comfortable and affordable hotel in Sri Vijaya Puram (Port Blair), located near Aberdeen Bazaar. Our hotel offers convenient accommodation for families, couples and travellers exploring the Andaman Islands.
            </motion.p>

            {/* Booking CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <Link
                href="/contact"
                className="px-7 h-[58px] bg-accent/10 hover:bg-accent/20 backdrop-blur-md text-accent border border-accent/30 hover:border-accent font-sans text-xs tracking-widest uppercase font-bold transition-all duration-500 ease-out rounded-[8px] flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(197,168,128,0.15)] hover:shadow-[0_0_20px_rgba(197,168,128,0.35)] w-full sm:w-auto whitespace-nowrap"
              >
                Book Your Stay
              </Link>
              <a
                href="#experience"
                className="px-7 h-[58px] bg-white/5 hover:bg-white/15 backdrop-blur-md text-pearl border border-white/20 hover:border-white/50 font-sans text-xs tracking-widest uppercase font-bold transition-all duration-500 ease-out rounded-[8px] flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] w-full sm:w-auto whitespace-nowrap"
              >
                Explore Nearby
              </a>
            </motion.div>
          </div>

          {/* STAGE 2 LEFT COLUMN: WEBSITE CONTENT (Fades in when video transitions to full screen) */}
          <div className={`absolute left-6 top-24 md:top-auto right-6 lg:right-auto md:left-12 lg:left-16 w-auto lg:w-[42%] text-left max-w-2xl lg:max-w-[550px] flex flex-col justify-center space-y-4 md:space-y-8 transition-all duration-[1500ms] ease-out pointer-events-auto ${showFinalContent ? 'opacity-100 translate-x-0 -translate-y-10' : 'opacity-0 translate-x-[30px] -translate-y-10 pointer-events-none'}`}>
            {/* Hotel Brand Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] md:text-[11px] font-sans tracking-[0.35em] text-accent brightness-125 uppercase font-extrabold">
                HOTEL SUNRISE &bull; SRI VIJAYA PURAM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[30px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-[1.2] font-medium tracking-wide text-pearl max-w-2xl lg:max-w-[500px]">
              Stay Comfortably. <br />
              <span className="text-accent italic font-medium">Explore Andaman.</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-sm md:text-[15px] text-pearl/90 font-normal leading-[1.6] max-w-2xl lg:max-w-[460px]">
              A welcoming hotel in Sri Vijaya Puram offering comfort, convenience, and easy access to the islands.
            </p>

            {/* Booking CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/contact"
                className="px-7 h-[58px] bg-accent/10 hover:bg-accent/20 backdrop-blur-md text-accent border border-accent/30 hover:border-accent font-sans text-xs tracking-widest uppercase font-bold transition-all duration-500 ease-out rounded-[8px] flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(197,168,128,0.15)] hover:shadow-[0_0_20px_rgba(197,168,128,0.35)] w-full sm:w-auto whitespace-nowrap"
              >
                Book Your Stay
              </Link>
              <a
                href="#experience"
                className="px-7 h-[58px] bg-white/5 hover:bg-white/15 backdrop-blur-md text-pearl border border-white/20 hover:border-white/50 font-sans text-xs tracking-widest uppercase font-bold transition-all duration-500 ease-out rounded-[8px] flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] w-full sm:w-auto whitespace-nowrap"
              >
                Explore Nearby
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Renders 8 Floating Location Cards around the video card bounds */}
          <div className="hidden lg:flex w-full lg:w-[58%] pointer-events-none relative h-[290px] sm:h-[340px] md:h-[380px] lg:h-[600px] items-center justify-center">
            {/* Floating Location Card 1: Cellular Jail */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: activeCardIndex === 0 ? 1 : 0.7, 
                x: 0,
                scale: activeCardIndex === 0 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 5.0,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '0s',
                top: isTransitioned ? '10%' : (isMobile ? '28%' : '16%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '66%' : '72%'),
                pointerEvents: 'auto'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[130px] lg:w-[140px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 0 ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">🏛</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">Cellular Jail</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">10 min</div>
            </motion.div>

            {/* Floating Location Card 2: Ross Island Ferry */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isTransitioned ? (activeCardIndex === 1 ? 1 : 0.7) : 0, 
                x: 0,
                scale: isTransitioned && activeCardIndex === 1 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '1.1s',
                top: isTransitioned ? '21%' : (isMobile ? '22%' : '8%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '4%' : '6%'),
                pointerEvents: isTransitioned ? 'auto' : 'none'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[130px] lg:w-[140px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 1 && isTransitioned ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">🏝</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">Ross Island Ferry</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">15 min</div>
            </motion.div>

            {/* Floating Location Card 3: North Bay Ferry */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: activeCardIndex === 2 ? 1 : 0.7, 
                x: 0,
                scale: activeCardIndex === 2 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '2.2s',
                top: isTransitioned ? '32%' : (isMobile ? '52%' : '44%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '2%' : '-5%'),
                pointerEvents: 'auto'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[130px] lg:w-[140px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 2 ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">🌊</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">North Bay Ferry</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">20 min</div>
            </motion.div>

            {/* Floating Location Card 4: Phoenix Bay Jetty */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isTransitioned ? (activeCardIndex === 3 ? 1 : 0.7) : 0, 
                x: 0,
                scale: isTransitioned && activeCardIndex === 3 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '3.3s',
                top: isTransitioned ? '43%' : (isMobile ? '74%' : '72%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '66%' : '74%'),
                pointerEvents: isTransitioned ? 'auto' : 'none'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[135px] lg:w-[145px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 3 && isTransitioned ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">⛴</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">Phoenix Bay Jetty</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">10 min</div>
            </motion.div>

            {/* Floating Location Card 5: Rajiv Gandhi Water Sports */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: activeCardIndex === 4 ? 1 : 0.7, 
                x: 0,
                scale: activeCardIndex === 4 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 6.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '4.4s',
                top: isTransitioned ? '54%' : (isMobile ? '42%' : '32%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '66%' : '73%'),
                pointerEvents: 'auto'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[130px] lg:w-[140px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 4 ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">🚤</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">Water Sports Complex</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">10 min</div>
            </motion.div>

            {/* Floating Location Card 6: Corbyn's Cove */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isTransitioned ? (activeCardIndex === 5 ? 1 : 0.7) : 0, 
                x: 0,
                scale: isTransitioned && activeCardIndex === 5 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 7.0,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '5.5s',
                top: isTransitioned ? '65%' : (isMobile ? '76%' : '82%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '4%' : '4%'),
                pointerEvents: isTransitioned ? 'auto' : 'none'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[130px] lg:w-[140px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 5 && isTransitioned ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">🌅</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">Corbyn's Cove</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">15 min</div>
            </motion.div>

            {/* Floating Location Card 7: Chidiya Tapu */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isTransitioned ? (activeCardIndex === 6 ? 1 : 0.7) : 0, 
                x: 0,
                scale: isTransitioned && activeCardIndex === 6 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 7.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '6.6s',
                top: isTransitioned ? '76%' : (isMobile ? '60%' : '58%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '66%' : '74%'),
                pointerEvents: isTransitioned ? 'auto' : 'none'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[130px] lg:w-[140px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 6 && isTransitioned ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">🌄</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">Chidiya Tapu</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">35 min</div>
            </motion.div>

            {/* Floating Location Card 8: Veer Savarkar Airport */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: activeCardIndex === 7 ? 1 : 0.7, 
                x: 0,
                scale: activeCardIndex === 7 ? 1.06 : 1,
                y: [0, -5, 0]
              }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.12)", borderColor: "rgba(197, 168, 128, 0.45)", boxShadow: "0 0 20px rgba(197, 168, 128, 0.25)" }}
              transition={{ 
                y: {
                  duration: 7.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: { duration: 0.8, ease: "easeOut" }
              }}
              style={{ 
                animationDelay: '7.7s',
                top: isTransitioned ? '87%' : (isMobile ? '35%' : '26%'), 
                right: isTransitioned ? (isMobile ? '4%' : '6%') : (isMobile ? '2%' : '-6%'),
                pointerEvents: 'auto'
              }}
              className={`absolute z-30 bg-white/[0.04] border backdrop-blur-xl rounded-[16px] px-3.5 py-2.5 w-[130px] lg:w-[140px] text-left transition-all duration-[2000ms] ease-in-out pointer-events-auto ${activeCardIndex === 7 ? 'border-accent shadow-[0_0_20px_rgba(197,168,128,0.35)]' : 'border-white/[0.08] shadow-[0_8px_32px_0_rgba(255,255,255,0.03)]'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm filter grayscale brightness-125">✈️</span>
                <span className="font-sans text-[11px] tracking-wider text-pearl font-medium truncate">Sri Vijaya Puram Airport</span>
              </div>
              <div className="font-sans text-[10px] tracking-widest text-accent uppercase font-bold pl-6">10–15 min</div>
            </motion.div>
          </div>

        </div>

        {/* Responsive SVG ClipPath definition for the ocean wave video container */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
              {isMounted ? (
                <motion.path 
                  d={isTransitioned ? fullPath : activeCardPath}
                  initial={false}
                  animate={{ d: isTransitioned ? fullPath : activeCardPath }}
                  transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
                />
              ) : (
                <path d={desktopCardPath} />
              )}
            </clipPath>
            <clipPath id="wave-clip-mobile-static" clipPathUnits="objectBoundingBox">
              <path d="M 0.5,0.48 L 0.82,0.48 C 0.88,0.48 0.92,0.55 0.92,0.67 C 0.92,0.79 0.88,0.86 0.82,0.86 L 0.18,0.86 C 0.12,0.86 0.08,0.79 0.08,0.67 C 0.08,0.55 0.12,0.48 0.18,0.48 Z" />
            </clipPath>
            <clipPath id="wave-clip-desktop-static" clipPathUnits="objectBoundingBox">
              <path d="M 0.50,0.15 L 0.88,0.15 C 0.93,0.15 0.96,0.25 0.96,0.5 C 0.96,0.75 0.93,0.80 0.88,0.80 L 0.50,0.80 C 0.45,0.80 0.42,0.70 0.42,0.5 C 0.42,0.30 0.45,0.15 0.50,0.15 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Ocean Wave Divider (Static: No Animation) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent-tinted wave */}
            <path 
              className="fill-accent/15"
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Main dark color match wave */}
            <path 
              className="fill-[#fbfaf7]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 2: HOTEL INTRODUCTION TEASER */}
      <section id="intro" className="py-24 md:py-32 bg-[#fbfaf7] relative overflow-hidden text-charcoal">
        {/* Stunning Premium Tropical Shoreline Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Stunning tropical shoreline beach background"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
        {/* Smooth gradient blends to keep the section boundaries soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf7] via-transparent to-[#fbfaf7] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
              Your Gateway to Andaman
            </span>
            <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-[#081628] leading-[1.2] font-medium tracking-wide">
              Welcome to Hotel Sunrise Port Blair
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {/* Card 1: Affordability */}
            <div className="h-full bg-white/60 backdrop-blur-md border border-accent/20 rounded-[24px] p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-sans tracking-[0.2em] text-accent-hover uppercase font-bold block">
                  Budget Friendly
                </span>
                <h2 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-[#081628] font-medium leading-snug">
                  Affordable Accommodation in Port Blair
                </h2>
                <p className="text-[#2b2b2b]/85 font-sans text-sm md:text-[15px] font-normal leading-relaxed">
                  As a clean and welcoming budget hotel in Port Blair, Hotel Sunrise is dedicated to providing high value for travellers. We offer comfortable, budget-friendly accommodation in Sri Vijaya Puram without compromising on quality or hospitality, making it the perfect affordable stay in Port Blair.
                </p>
              </div>
            </div>

            {/* Card 2: Aberdeen Bazaar */}
            <div className="h-full bg-white/60 backdrop-blur-md border border-accent/20 rounded-[24px] p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-sans tracking-[0.2em] text-accent-hover uppercase font-bold block">
                  Prime Location
                </span>
                <h2 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-[#081628] font-medium leading-snug">
                  Hotel Near Aberdeen Bazaar, Port Blair
                </h2>
                <p className="text-[#2b2b2b]/85 font-sans text-sm md:text-[15px] font-normal leading-relaxed">
                  Our city hotel is located at Babu Lane, Aberdeen Bazaar in the heart of Sri Vijaya Puram (Port Blair). Staying here places you in the vibrant market center, close to shopping, dining, transport links, and key island ferry hubs. Read our <Link href="/aberdeen-bazaar-guide" className="text-accent-hover underline font-medium hover:text-accent transition-colors">Aberdeen Bazaar shopping guide</Link>.
                </p>
              </div>
            </div>

            {/* Card 3: Convenience */}
            <div className="h-full bg-white/60 backdrop-blur-md border border-accent/20 rounded-[24px] p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-sans tracking-[0.2em] text-accent-hover uppercase font-bold block">
                  Transit Friendly
                </span>
                <h2 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-[#081628] font-medium leading-snug">
                  Convenient Location in Port Blair
                </h2>
                <p className="text-[#2b2b2b]/85 font-sans text-sm md:text-[15px] font-normal leading-relaxed">
                  Enjoy a highly convenient location in Port Blair. We are situated near Phoenix Bay Jetty for easy island ferry boarding, historic Cellular Jail for sightseeing, and Veer Savarkar International Airport for smooth arrivals and departures. Read our <Link href="/airport-to-jetty-transit" className="text-accent-hover underline font-medium hover:text-accent transition-colors">Airport to Jetty transit guide</Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#081628] hover:bg-[#081628]/90 text-white font-sans text-xs tracking-widest uppercase font-bold transition-all duration-300 rounded-[8px] shadow-md hover:-translate-y-0.5"
            >
              Read Our Story
            </Link>
          </div>
        </div>

        {/* Layered Ocean Wave Divider at the bottom of Section 2 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent gold tinted wave */}
            <path 
              className="fill-accent/25"
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Deep shadow wave transitioning to Section 3 */}
            <path 
              className="fill-[#fcfbfc]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 3: FEATURED ROOMS */}
      <section id="rooms" className="py-24 bg-[#fcfbfc] text-charcoal relative overflow-hidden">
        {/* Stunning Premium Hotel Bedroom Suite Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury hotel bedroom suite background"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
        {/* Smooth gradient blends to keep the section boundaries soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcfbfc] via-transparent to-[#fcfbfc] z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="space-y-4 text-left">
              <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold">
                Comfortable Accommodations
              </span>
              <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-[#081628] leading-[1.2] font-medium tracking-wide">
                Hotel Rooms in Port Blair
              </h2>
              </div>
              <p className="max-w-md text-[#2b2b2b]/85 text-sm md:text-[15px] font-normal mt-4 md:mt-0 font-sans text-left leading-relaxed">
                Browse our selection of comfortable rooms. We offer family rooms, budget-friendly options, and air-conditioned hotel rooms in Port Blair designed with modern amenities for a relaxing retreat in Sri Vijaya Puram.
              </p>
            </div>

          {/* Cards Grid */}
          <div 
            ref={roomsGridRef}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {rooms.slice(0, 3).map((room, idx) => {
              const cardStyle = idx === 0 ? {
                x: leftX,
                rotate: leftRot,
                opacity: leftOpac,
                zIndex: 10,
              } : idx === 1 ? {
                scale: middleScale,
                zIndex: 20,
              } : {
                x: rightX,
                rotate: rightRot,
                opacity: rightOpac,
                zIndex: 10,
              };

              const CardComponent = (isMobile ? "div" : motion.div) as any;
              const displayPrice = room.price.includes(" ") ? room.price.split(" ")[0] : room.price;
              const priceMatch = room.price.match(/\d+[\d,\s]*/);
              const numericPrice = priceMatch ? parseInt(priceMatch[0].replace(/[,\s]/g, ""), 10) : 0;
              const isCheapest = numericPrice > 0 && numericPrice === lowestPrice;

              return (
                <CardComponent
                  key={room.name}
                  style={isMobile ? undefined : cardStyle}
                  className="bg-white/60 backdrop-blur-md border border-accent/20 group overflow-hidden rounded-[24px] flex flex-col justify-between shadow-lg hover:border-accent transition-all duration-500 w-full text-charcoal"
                >
                  {/* Image */}
                  <Link href={`/rooms/${room.slug}`} className="h-64 relative overflow-hidden block" aria-label={`View details for ${room.name}`}>
                    <Image 
                      src={room.image} 
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-[24px]" 
                    />
                    <div className="absolute top-4 right-4 bg-[#081628]/90 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-[8px]">
                      <span className="text-accent text-xs font-semibold tracking-wider font-sans">
                        {isCheapest ? "Starting from " : ""}{displayPrice} <span className="text-[10px] text-pearl/60 font-normal">/ Night</span>
                      </span>
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4 text-left">
                      <Link href={`/rooms/${room.slug}`}>
                        <h3 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-[#081628] font-medium group-hover:text-accent transition-colors duration-300">
                          {room.name}
                        </h3>
                      </Link>
                      <p className="text-[#2b2b2b]/75 font-sans font-normal text-[13px] md:text-[14px] leading-relaxed">
                        {room.description}
                      </p>
                    </div>

                    {/* Amenities */}
                    <div className="space-y-2 border-t border-accent/15 pt-4 text-left">
                      <span className="text-[10px] text-accent uppercase tracking-widest font-medium font-sans">Included Amenities:</span>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#2b2b2b]/75 font-sans font-normal">
                        {room.amenities.map(amenity => (
                          <span key={amenity} className="flex items-center gap-1">
                            <Check size={10} className="text-accent" /> {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Inquiry CTA Options */}
                    <div className="flex gap-3 w-full">
                      <a
                        href={`https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(room.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow text-center py-3 border border-accent/35 hover:border-accent bg-transparent hover:bg-accent text-[#081628] hover:text-white transition-all duration-500 font-sans tracking-widest text-[11px] md:text-xs uppercase font-medium flex items-center justify-center gap-1.5 rounded-[8px]"
                      >
                        <MessageSquare size={12} /> WhatsApp
                      </a>
                      <a
                        href={`mailto:hotelsunrisesrivijayapuram@gmail.com?subject=Enquiry%20for%20${encodeURIComponent(room.name)}&body=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20would%20like%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(room.name)}.`}
                        onClick={() => {
                          try {
                            navigator.clipboard.writeText("hotelsunrisesrivijayapuram@gmail.com");
                            alert("Email address copied to clipboard: hotelsunrisesrivijayapuram@gmail.com");
                          } catch (err) {}
                        }}
                        className="flex-grow text-center py-3 border border-[#081628]/25 hover:border-[#081628] bg-transparent hover:bg-[#081628] text-[#081628] hover:text-white transition-all duration-500 font-sans tracking-widest text-[11px] md:text-xs uppercase font-medium flex items-center justify-center gap-1.5 rounded-[8px]"
                      >
                        <Mail size={12} /> Email
                      </a>
                    </div>
                  </div>
                </CardComponent>
              );
            })}
          </div>

          {/* Bottom Explorer Button */}
          <div className="text-center mt-16">
            <Link 
              href="/rooms"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 rounded-sm"
            >
              Explore our hotel rooms in Port Blair <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Glowing Sea Wave Divider at the bottom of Section 3 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Glowing turquoise sea wave */}
            <path 
              className="fill-accent/35" 
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Main wave matching Section 4's light sand background */}
            <path 
              className="fill-[#f4f1ea]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 4: ANDAMAN EXPERIENCE PREVIEW */}
      <section id="experience" className="py-24 md:py-32 bg-[#f4f1ea] relative overflow-hidden text-charcoal">
        {/* Stunning Premium Underwater Marine ripples Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.22] pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80"
            alt="Tropical rippled sea water background"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        </div>
        {/* Smooth gradient blends to keep the section boundaries soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f1ea] via-transparent to-[#f4f1ea] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-6 text-left">
            <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
              The Gateway of Adventure
            </span>
            <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-[#081628] leading-[1.2] font-medium tracking-wide">
              Explore Port Blair & the Andaman Islands
            </h2>
            <p className="font-sans text-[#2b2b2b]/85 text-sm md:text-[15px] font-normal leading-relaxed">
              Most travellers know Havelock, but Sri Vijaya Puram offers incredible history, pristine islands, tropical forests, marine adventures, and unforgettable cultural experiences. Find things to do in Port Blair, explore local sightseeing, and discover must-visit attractions in the Andaman Islands from our centrally located city hotel.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-center">
            {EXPERIENCES.slice(0, 5).map((exp, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={exp.slug}
                className="bg-white/60 backdrop-blur-md border border-accent/20 rounded-[20px] overflow-hidden flex flex-col justify-between group shadow-sm hover:border-accent/30 hover:shadow-md transition-all duration-500 relative"
              >
                {/* Clickable Card Link Wrapper */}
                <Link href={`/experiences/${exp.slug}`} className="absolute inset-0 z-30" aria-label={`Explore ${exp.name}`} />

                {/* Image */}
                <div className="h-44 relative overflow-hidden shrink-0">
                  <Image 
                    src={exp.image} 
                    alt={exp.name} 
                    fill 
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-[#081628]/80 backdrop-blur-md px-2.5 py-1 rounded-[6px] text-[9px] font-sans tracking-widest text-accent uppercase font-medium">
                    {exp.tag}
                  </div>
                </div>

                {/* Info & CTA Wrapper */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-5 text-left">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-[#081628] group-hover:text-accent font-medium transition-colors duration-300 line-clamp-2 h-[48px] sm:h-[54px] lg:h-[60px]">
                        {exp.name}
                      </h3>
                      <p className="text-[#2b2b2b]/75 font-sans font-normal text-[13px] md:text-[14px] leading-relaxed line-clamp-3">
                        {exp.description}
                      </p>
                    </div>

                    {/* Metadata Row */}
                    <div className="pt-3 border-t border-charcoal/5 space-y-2 text-xs text-[#2b2b2b]/70 font-sans font-normal">
                      <div className="flex items-center gap-2">
                        <MapPin size={11} className="text-accent-hover shrink-0" />
                        <span>{exp.travelTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={11} className="text-accent-hover shrink-0" />
                        <span>Best visit: {exp.bestTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Explore More CTA */}
                  <div className="pt-2 relative z-20">
                    <span className="inline-flex items-center gap-1.5 text-[11px] md:text-xs text-accent-hover font-sans tracking-widest uppercase font-medium transition-all duration-300 group-hover:gap-2.5">
                      Explore More <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Explorer Button */}
          <div className="text-center mt-16">
            <Link 
              href="/experiences"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-pearl font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-500 rounded-[8px]"
            >
              Things to Do in Port Blair <Compass size={14} />
            </Link>
          </div>
        </div>

        {/* Transition wave from Section 4 to Section 5 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent gold wave */}
            <path 
              className="fill-accent/25" 
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Deep jungle background wave matching Section 5 */}
            <path 
              className="fill-[#fbfaf7]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 5: WILDLIFE PREVIEW */}
      <section id="wildlife" className="py-24 md:py-32 bg-[#fbfaf7] relative overflow-hidden text-charcoal">
        {/* Stunning Saltwater Crocodile Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Image
            src="/images/wildlife/crocodile.png"
            alt="Saltwater Crocodile background"
            fill
            className="object-cover"
          />
        </div>
        {/* Smooth gradient blends to keep the section boundaries soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf7] via-transparent to-[#fbfaf7] z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text description */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
                  Tropical Wilderness
                </span>
                <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-[#081628] leading-[1.2] font-medium tracking-wide">
                  Discover Andaman's Wild Side
                </h2>
              </div>
              <p className="font-sans text-[#2b2b2b]/85 text-sm md:text-[15px] font-normal leading-relaxed">
                The Andaman & Nicobar Islands harbor some of the earth's most unique ecological habitats. From pristine tropical rainforests housing exotic avifauna to protected saltwater estuaries and lush mangroves, the islands pulse with raw natural life.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-accent" />
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#2b2b2b]/80 font-sans font-normal">
                    Protected saltwater crocodile preservation program access.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-accent" />
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#2b2b2b]/80 font-sans font-normal">
                    Birdwatching treks through Chidiya Tapu bird sanctuaries.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-accent" />
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#2b2b2b]/80 font-sans font-normal">
                    Pristine marine biodiversity expeditions at Mahatma Gandhi Reserve.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Link 
                  href="/wildlife"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-pearl font-sans text-xs tracking-widest uppercase font-medium transition-all duration-500 rounded-[8px]"
                >
                  Explore Wildlife <Trees size={14} />
                </Link>
              </div>
            </div>

            {/* Visual cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WILDLIFE.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  key={item.title}
                  className={`relative h-60 rounded-[20px] overflow-hidden group shadow-lg cursor-pointer ${
                    idx % 2 === 1 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <Link href={`/experiences/${item.slug}`}>
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
                    <div className="absolute bottom-6 left-6 z-20 space-y-1 text-left">
                      <h3 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-pearl font-medium group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                      <p className="text-xs text-pearl/75 font-sans font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Transition wave from Section 5 to Section 6 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent gold wave */}
            <path 
              className="fill-accent/25" 
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Main wave matching Section 6's light sand background */}
            <path 
              className="fill-[#f4f1ea]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 6: PACKAGES PREVIEW */}
      <section id="packages" className="py-24 md:py-32 bg-[#f4f1ea] relative overflow-hidden text-charcoal">
        {/* Stunning Premium Tropical Sunset Background Image with drifting animation */}
        <motion.div 
          animate={{
            scale: [1.1, 1.15, 1.1],
            x: [0, 15, -15, 0],
            y: [0, -10, 10, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 z-0 opacity-[0.45] pointer-events-none overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Scenic tropical island sunset background"
            fill
            className="object-cover scale-110"
          />
        </motion.div>

        {/* Floating Background Blur Circles for deep aesthetic appeal */}
        <motion.div 
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none z-0"
        />
        <motion.div 
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 40, -50, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#081628]/10 blur-3xl pointer-events-none z-0"
        />
        {/* Smooth gradient blends to keep the section boundaries soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f1ea]/50 via-transparent to-[#f4f1ea]/50 z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Section title */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
              Curated Packages
            </span>
            <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-[#081628] leading-[1.2] font-medium tracking-wide">
              Andaman Tour Packages
            </h2>
            <p className="font-sans text-[#2b2b2b]/85 text-sm md:text-[15px] font-normal leading-relaxed">
              Choose from our curated Andaman tour packages offering comfortable stays, local sightseeing tours, and seamless ferry bookings to make your Andaman exploration holiday hassle-free.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                key={pkg.title}
                className="bg-white/60 backdrop-blur-md border border-accent/20 rounded-[24px] overflow-hidden flex flex-col justify-between group hover:border-accent/30 hover:shadow-md transition-all duration-500 shadow-sm"
              >
                <div>
                  {/* Image */}
                  <Link href={`/packages/${pkg.slug}`} className="h-56 relative overflow-hidden block" aria-label={`View details for ${pkg.title}`}>
                    <Image 
                      src={pkg.image} 
                      alt={pkg.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-t-[24px]"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </Link>
                  
                  {/* Info */}
                  <div className="p-8 space-y-6 text-left">
                    <div className="flex justify-between items-start">
                      <Link href={`/packages/${pkg.slug}`}>
                        <h3 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-[#081628] font-medium group-hover:text-accent transition-colors duration-300">{pkg.title}</h3>
                      </Link>
                    </div>
                    <div className="text-accent-hover text-sm font-semibold tracking-wider font-sans border-b border-charcoal/5 pb-4">
                      {pkg.price}
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 pt-2">
                      {pkg.features.map(feat => (
                        <li key={feat} className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[#2b2b2b]/85 font-sans font-normal">
                          <Check size={12} className="text-accent shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0 flex gap-3">
                  <a
                    href={`https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Reservations%2C%20I%20am%20interested%20in%20inquiring%20about%20the%20${encodeURIComponent(pkg.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 border border-primary hover:bg-primary hover:text-white text-primary transition-all duration-500 bg-transparent font-sans tracking-widest text-[11px] md:text-xs uppercase font-medium flex items-center justify-center gap-1.5 rounded-[8px]"
                  >
                    Enquire <MessageSquare size={10} />
                  </a>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="flex-1 text-center py-3 bg-primary hover:bg-primary/95 text-white transition-all duration-300 font-sans tracking-widest text-[11px] md:text-xs uppercase font-medium flex items-center justify-center gap-1.5 rounded-[8px]"
                  >
                    Details <ArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-500 rounded-[8px]"
            >
              Andaman Tour Packages <Award size={14} />
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent gold wave */}
            <path 
              className="fill-accent/25" 
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Main dark color match wave matching Section 7 */}
            <path 
              className="fill-white"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 7: GALLERY PREVIEW */}
      <section id="gallery" className="py-24 bg-white text-charcoal relative overflow-hidden">
        {/* Stunning Premium Coastal ocean beach Background Image */}
        <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&w=2000&q=80"
            alt="Scenic tropical beach and coast background"
            fill
            className="object-cover"
          />
        </div>
        {/* Smooth gradient blends to keep the section boundaries soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 text-left">
            <div className="space-y-4">
              <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold">
                Visual Stories
              </span>
              <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-[#081628] leading-[1.2] font-medium tracking-wide">
                Sanctuary Gallery
              </h2>
            </div>
          </div>

          {/* Masonry-style Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {homeGalleryImages.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  key={item.image + idx}
                  className="relative rounded-[24px] border border-accent/25 bg-white/40 backdrop-blur-sm overflow-hidden h-80 group shadow-lg cursor-pointer col-span-1"
                >
                  <Link href="/gallery">
                    <Image 
                      src={item.image} 
                      alt={item.alt} 
                      fill 
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-[24px]"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <span className="p-4 rounded-full border border-white/20 text-pearl bg-black/40 backdrop-blur-md">
                        <Camera size={20} />
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 bg-[#081628]/90 backdrop-blur-md border border-white/10 px-3 py-1 text-[10px] tracking-widest uppercase font-sans text-accent font-semibold z-10 rounded-[8px]">
                      {item.category}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Explorer Button */}
          <div className="text-center mt-16">
            <Link 
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-white font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-500 rounded-[8px]"
            >
              View All Photos <Camera size={14} />
            </Link>
          </div>
        </div>

        {/* Transition wave from Section 7 to Section 8 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent gold wave */}
            <path 
              className="fill-accent/25" 
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Main wave matching Section 8's light background */}
            <path 
              className="fill-[#fbfaf7]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 8: REVIEWS */}
      <section id="reviews" className="py-24 bg-pearl relative overflow-hidden">
        {/* Serene Rainforest Sanctuary background image with drifting animation */}
        <motion.div 
          animate={{
            scale: [1.1, 1.15, 1.1],
            x: [0, -15, 15, 0],
            y: [0, 10, -10, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=80"
            alt="Tropical forest sanctuary background"
            fill
            className="object-cover scale-110"
          />
        </motion.div>

        {/* Smooth gradient blends to keep the section boundaries soft */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfaf7]/60 via-transparent to-[#fbfaf7]/60 z-0 pointer-events-none" />

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold block mb-4">
            Guest Experiences
          </span>
          <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-primary leading-[1.2] font-medium tracking-wide mb-12">
            Voices from the Sanctuary
          </h2>

          {/* Slider content */}
          <div className="relative min-h-[260px] md:min-h-[200px] flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 max-w-3xl mx-auto flex flex-col items-center justify-center text-center"
              >
                {/* Rating stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(REVIEWS[currentReview].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#c5a880" className="text-accent" />
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-primary italic leading-relaxed font-normal px-4 md:px-8">
                  &ldquo;{REVIEWS[currentReview].comment}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <cite className="font-sans text-sm tracking-widest uppercase font-medium text-charcoal not-italic block">
                    {REVIEWS[currentReview].name}
                  </cite>
                  <span className="text-xs text-charcoal/50 font-sans tracking-wide">
                    {REVIEWS[currentReview].location} &bull; <span className="text-accent font-medium">{REVIEWS[currentReview].stay}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full border border-primary/20 hover:border-accent text-primary hover:text-accent flex items-center justify-center transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full border border-primary/20 hover:border-accent text-primary hover:text-accent flex items-center justify-center transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500 font-sans tracking-widest text-xs uppercase font-semibold inline-block rounded-sm"
            >
              Write Booking Inquiry
            </Link>
          </div>
        </div>

      {/* SECTION 8.5: FAQ */}
      <section className="py-24 bg-[#fbfaf7] text-charcoal relative overflow-hidden border-t border-[#081628]/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-xs font-sans tracking-[0.3em] text-accent-hover uppercase font-bold block">
              Guest Information
            </span>
            <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-[#081628] leading-[1.2] font-medium tracking-wide">
              Frequently Asked Questions About Hotel Sunrise
            </h2>
          </div>

          <div className="space-y-4 text-left max-w-3xl mx-auto">
            {[
              {
                q: "Is Hotel Sunrise located in Port Blair?",
                a: "Yes, Hotel Sunrise is located in Port Blair, Sri Vijaya Puram. We are situated right in the city center near the Phoenix Bay and Aberdeen Bazaar market areas."
              },
              {
                q: "Where is Hotel Sunrise located in Sri Vijaya Puram?",
                a: "Hotel Sunrise is located at Babu Lane, Aberdeen Bazaar in the city center of Sri Vijaya Puram. This central location provides easy access to local transport links, shopping centers, restaurants, and ferry jetties."
              },
              {
                q: "Is Hotel Sunrise near Aberdeen Bazaar?",
                a: "Yes, our hotel is located directly within the Aberdeen Bazaar area near Babu Lane, making it incredibly convenient for shopping, local dining, and quick travel across the city."
              },
              {
                q: "Is Hotel Sunrise a budget-friendly hotel in Port Blair?",
                a: "Yes, Hotel Sunrise is a clean, reliable, and budget-friendly hotel in Port Blair. We offer high-value accommodations suitable for families, couples, and budget-conscious travellers."
              },
              {
                q: "What attractions are near Hotel Sunrise?",
                a: "Our central location places us close to several top attractions: Cellular Jail, Phoenix Bay Jetty (for ferries to Havelock and Neil Island), Corbyn's Cove Beach, and Veer Savarkar International Airport are all easily accessible from the hotel."
              },
              {
                q: "Is Hotel Sunrise suitable for families?",
                a: "Yes, our hotel offers excellent family rooms in Port Blair. Our accommodations are designed to comfortably host families exploring the Andaman Islands."
              }
            ].map((faq, index) => (
              <div key={faq.q} className="border-b border-[#081628]/10 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full text-left font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-[#081628] font-medium py-4 hover:text-accent transition-colors duration-300 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-accent shrink-0 ml-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : 'rotate-0'}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginBottom: 16 },
                        collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[#2b2b2b]/85 text-sm md:text-[15px] font-normal leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Transition wave from Section 8 to Section 9 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent gold wave */}
            <path 
              className="fill-accent/25" 
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Main wave matching Section 9's dark background */}
            <path 
              className="fill-[#081628]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* SECTION 9: BOOKING CTA & RESERVATION FORM */}
      <section id="booking-cta" className="py-24 bg-[#081628] text-pearl relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image 
            src={IMAGES.hero} 
            alt="Sanctuary atmosphere backdrop" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story callout */}
          <div className="space-y-8">
            <span className="text-xs font-sans tracking-[0.3em] text-accent uppercase font-bold flex items-center gap-2">
              <Sparkles size={14} className="text-accent" /> Plan Your Perfect Andaman Stay
            </span>
            <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] text-pearl leading-[1.2] font-medium">
              Your luxury Andaman journey begins here.
            </h2>
            <p className="font-sans text-pearl/70 text-sm md:text-[15px] leading-relaxed font-normal">
              Sri Vijaya Puram is your elegant gateway. Connect with our dedicated reservation concierge to plan your bespoke villa arrangements, customized rainforest walks, marine safaris, and fine-dining preferences.
            </p>
            
            <div className="space-y-4 font-sans text-sm font-normal text-pearl/85">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center">
                  <Check size={12} className="text-accent" />
                </div>
                <span>No booking deposits required for inquiry validations.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center">
                  <Check size={12} className="text-accent" />
                </div>
                <span>Exclusive complimentary Airport Yacht transfers.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center">
                  <Check size={12} className="text-accent" />
                </div>
                <span>Custom travel planning for Havelock/Neil transfers.</span>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Concierge%2C%20I%20would%20like%20to%20plan%20a%20luxury%20stay."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-pearl font-sans text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 border border-[#25D366] shadow-[0_4px_15px_rgba(37,211,102,0.3)]"
              >
                <MessageSquare size={16} /> WhatsApp Reservations
              </a>
              <div className="flex flex-col justify-center text-xs font-sans text-pearl/50">
                <span>Immediate response rate</span>
                <span>Speak directly with a Villa Host</span>
              </div>
            </div>
          </div>

          {/* Direct Booking CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-dark/90 backdrop-blur-md border border-accent/25 p-8 md:p-10 rounded-sm shadow-2xl space-y-8 text-left text-pearl"
          >
            <div className="border-b border-accent/20 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <div>
                <h3 className="font-serif text-[18px] sm:text-[20px] lg:text-[22px] text-pearl font-medium">Instant Reservations</h3>
                <p className="text-xs text-pearl/50 font-sans tracking-wide mt-1">Ready to plan your stay in Port Blair?</p>
              </div>
              <span className="text-xs sm:text-sm font-sans tracking-wider text-accent font-semibold whitespace-nowrap">Rooms from {formattedLowestPrice}/night</span>
            </div>

            <div className="space-y-6">
              <p className="text-pearl/85 text-sm font-sans font-normal leading-relaxed">
                Use our dynamic online reservation assistant to select your room type, input custom travel dates, request special arrangements, and check local tour rates.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-pearl/70">
                  <Phone size={14} className="text-accent" />
                  <span>Call Bookings: <span className="font-semibold text-pearl">+91 97324 70317</span></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-pearl/70">
                  <Mail size={14} className="text-accent" />
                  <span>Email Reservations: <span className="font-semibold text-pearl">hotelsunrisesrivijayapuram@gmail.com</span></span>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full text-center py-4 bg-accent hover:bg-accent-hover text-primary transition-all duration-300 font-sans tracking-widest text-xs uppercase font-bold shadow-lg flex items-center justify-center gap-2 rounded-[8px]"
            >
              Book Now <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Transition wave from Section 9 to Footer */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[120%] h-[48px] md:h-[75px] text-pearl fill-current"
            style={{ minWidth: "1200px" }}
          >
            {/* Layer 1: Accent gold wave */}
            <path 
              className="fill-accent/25" 
              d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1200,50 1200,50 L1200,120 L0,120 Z" 
            />
            {/* Layer 2: Main dark wave matching Footer's background */}
            <path 
              className="fill-[#081628]"
              d="M0,60 C150,100 350,20 500,60 C650,100 850,20 1000,60 C1150,100 1200,60 1200,60 L1200,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      <Footer />
      <WhatsAppConcierge />
    </div>
  );
}
