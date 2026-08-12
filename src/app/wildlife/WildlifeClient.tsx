"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, ShieldAlert, Award, Compass, Sparkles, Trees } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConcierge from "@/components/WhatsAppConcierge";

// Wildlife animals data list
const WILDLIFE_GALLERY = [
  {
    title: "Andaman Day Gecko",
    scientificName: "Phelsuma andamanense",
    desc: "A highly active, diurnal gecko featuring a striking bright emerald-green body with crimson dots along its back.",
    habitat: "Coconut palms, banana plantations, and forest margins.",
    spotting: "Commonly seen in the gardens around Aberdeen Bazaar and Mount Harriet National Park.",
    status: "Endemic to Andaman",
    image: "/images/wildlife/gecko.jpg"
  },
  {
    title: "Loggerhead Sea Turtle",
    scientificName: "Caretta caretta",
    desc: "A majestic ocean voyager characterized by its massive head and strong jaws. They return to native sandy shores to nest.",
    habitat: "Coral reefs, seagrass meadows, and deep coastal waters.",
    spotting: "Protected nesting grounds around Jolly Buoy and coastal Ross Island shores.",
    status: "Endangered / Protected",
    image: "/images/wildlife/turtle.jpg"
  },
  {
    title: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    desc: "The largest living reptile on Earth. These apex predators are incredibly adapted to coastal estuarine environments.",
    habitat: "Mangrove creeks, tidal swamps, and river mouth estuaries.",
    spotting: "Observed in protected sanctuaries like Lohabarrack Saltwater Crocodile Sanctuary.",
    status: "Protected Species",
    image: "/images/wildlife/crocodile.png"
  },
  {
    title: "Andaman Pit Viper",
    scientificName: "Trimeresurus andamanensis",
    desc: "An endemic pit viper with a highly variable coloration (green, brown, or yellow), perfectly camouflaged in the rainforest canopy.",
    habitat: "Lowland tropical wet evergreen rainforests.",
    spotting: "Spotted by guides along forest trails at Chidiya Tapu Sunset Point and Mount Harriet.",
    status: "Endemic / Vulnerable",
    image: "/images/wildlife/viper.jpg"
  },
  {
    title: "Checkered Keelback",
    scientificName: "Fowlea piscator",
    desc: "A native, highly alert non-venomous freshwater snake featuring beautiful checkered scales on its olive-brown body.",
    habitat: "Streams, marshy wetlands, and agricultural ponds.",
    spotting: "Seen active during the day near stream banks in Wandoor and Sippighat wetlands.",
    status: "Native Species",
    image: "/images/wildlife/keelback.png"
  },
  {
    title: "Andaman Wood Pigeon",
    scientificName: "Columba palumboides",
    desc: "The State Bird of Andaman & Nicobar. A large, beautiful forest pigeon featuring a pale silver head and dark iridescent body.",
    habitat: "Dense evergreen and semi-evergreen canopy forests.",
    spotting: "Heard calling from high branches in Chidiya Tapu reserves and Havelock rainforests.",
    status: "Endemic / Near Threatened",
    image: "/images/wildlife/wood-pigeon.jpg"
  },
  {
    title: "Dugong (Sea Cow)",
    scientificName: "Dugong dugon",
    desc: "The State Animal of Andaman & Nicobar. A gentle, herbivorous marine mammal that feeds entirely on underwater seagrass meadows.",
    habitat: "Shallow, warm coastal waters sheltered by islands.",
    spotting: "Protected seagrass zones in Ritchie's Archipelago and Little Andaman.",
    status: "Vulnerable / State Animal",
    image: "/images/wildlife/dugong.jpg"
  },
  {
    title: "Coconut Crab",
    scientificName: "Birgus latro",
    desc: "The largest land-living arthropod in the world. Equipped with immense claws capable of opening coconuts to feed.",
    habitat: "Coastal forest floors and sandy beach margins.",
    spotting: "Protected populations on South Sentinel Island and Wandoor Marine National Park.",
    status: "Vulnerable / Heavily Protected",
    image: "/images/wildlife/coconut-crab.jpg"
  },
  {
    title: "Andaman Wild Boar",
    scientificName: "Sus scrofa andamanensis",
    desc: "A smaller, highly agile subspecies of the Eurasian wild boar. A crucial element of the island's terrestrial ecosystem.",
    habitat: "Dense canopy rainforests and coastal scrublands.",
    spotting: "Frequently spotted during guided forest treks in Chidiya Tapu reserves.",
    status: "Endemic Subspecies",
    image: "/images/wildlife/wild-boar.jpg"
  },
  {
    title: "Andaman Crake",
    scientificName: "Rallina canningi",
    desc: "A rare, brightly colored ground-dwelling waterbird with rich chestnut brown plumage and bold white stripes.",
    habitat: "Damp forested areas, swampy wetlands, and marshes.",
    spotting: "Mt. Harriet forest wetlands and marsh borders near Sippighat.",
    status: "Endemic / Vulnerable",
    image: "/images/wildlife/andaman-crake.jpg"
  },
  {
    title: "Andaman Serpent Eagle",
    scientificName: "Spilornis elgini",
    desc: "A medium-sized dark brown bird of prey with striking yellow eyes, specialized in hunting reptiles on the forest floor.",
    habitat: "Dense interior tropical wet evergreen canopy forests.",
    spotting: "Mount Harriet National Park and inside deep woods at Wandoor.",
    status: "Endemic Species",
    image: "/images/wildlife/serpent-eagle.jpg"
  },
  {
    title: "Andaman Horseshoe Bat",
    scientificName: "Rhinolophus cognatus",
    desc: "A small, insectivorous bat with a leaf-shaped nose. Extremely important for natural forest pest control.",
    habitat: "Coastal limestone caves and dark forest rocky crevices.",
    spotting: "Baratang Island cave trails and sea caves around Mahatma Gandhi Marine Park.",
    status: "Endemic / Endangered",
    image: "/images/wildlife/horseshoe-bat.jpg"
  },
  {
    title: "Andaman Masked Palm Civet",
    scientificName: "Paguma larvata tytlerii",
    desc: "A nocturnal, tree-dwelling mammalian carnivore characterized by a mask-like facial stripe pattern.",
    habitat: "Dense tropical canopy and wild fruit orchards.",
    spotting: "Mount Harriet peak trails during specialized evening safaris.",
    status: "Endemic Subspecies",
    image: "/images/wildlife/palm-civet.jpg"
  }
];

export default function WildlifeClient() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] relative overflow-hidden flex flex-col justify-between">
      <Navbar isHeroTransitioned={true} />

      {/* Cinematic Hero Banner */}
      <div className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image of Rainforest */}
        <Image
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=90"
          alt="Andaman rainforest canopy"
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
              HOTEL SUNRISE &bull; ABERDEEN BAZAAR
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-6xl text-pearl leading-[1.1] font-semibold tracking-wide">
            Tropical Wildlife <br />
            <span className="text-accent italic font-medium">Sanctuary Guide</span>
          </h1>
          <p className="max-w-2xl mx-auto font-sans text-pearl/75 text-xs md:text-sm leading-relaxed font-light">
            Discover the endemic fauna, marine reptiles, and exotic avifunas that make the Andaman Archipelago one of the world's most unique ecological habitats.
          </p>
        </div>
      </div>

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[50vh] -left-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[80vh] -right-60 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* Main Section container */}
      <main className="flex-grow pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Navigation Back Link */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 pb-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent-hover font-sans tracking-widest uppercase font-bold transition-colors duration-300"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
          <p className="text-[11px] font-sans text-charcoal/60 tracking-wider font-semibold">
            *All guided treks depart daily from Hotel Sunrise, Babu Lane, Aberdeen Bazaar, Sri Vijayapuram.
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WILDLIFE_GALLERY.map((animal, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              key={animal.title}
              className="bg-white border border-[#081628]/10 group overflow-hidden rounded-[20px] flex flex-col justify-between shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 text-[#2b2b2b]"
            >
              <div>
                {/* Animal Photo Frame */}
                <div className="h-60 relative overflow-hidden">
                  <Image 
                    src={animal.image} 
                    alt={animal.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081628]/90 via-transparent to-transparent" />
                  
                  {/* Status Tag */}
                  <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md text-[#050e18] px-3 py-1 rounded-[6px] text-[9px] font-sans tracking-widest uppercase font-bold">
                    {animal.status}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4 text-left">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl text-[#081628] group-hover:text-accent transition-colors duration-300">
                      {animal.title}
                    </h3>
                    <p className="font-sans text-[11px] text-accent-hover italic font-semibold tracking-wide">
                      {animal.scientificName}
                    </p>
                  </div>
                  
                  <p className="text-[#2b2b2b]/75 font-sans font-light text-[12px] leading-relaxed">
                    {animal.desc}
                  </p>

                  {/* Habitat Details */}
                  <div className="pt-4 border-t border-[#081628]/5 space-y-2.5 text-[11px] font-sans text-[#2b2b2b]/80 font-light">
                    <div className="flex items-start gap-2">
                      <Trees size={12} className="text-accent-hover shrink-0 mt-0.5" />
                      <span><strong>Habitat:</strong> {animal.habitat}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={12} className="text-accent-hover shrink-0 mt-0.5" />
                      <span><strong>Best Spotting:</strong> {animal.spotting}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concierge booking link */}
              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/919732470317?text=Hello%20Hotel%20Sunrise%20Concierge%2C%20I%20am%20interested%20in%20booking%20a%20guided%20wildlife%20excursion%20to%20spot%20the%20${encodeURIComponent(animal.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 border border-accent/35 hover:border-accent bg-transparent hover:bg-accent text-[#081628] hover:text-white transition-all duration-500 font-sans tracking-widest text-[10px] uppercase font-semibold flex items-center justify-center gap-2 rounded-[8px]"
                >
                  <Compass size={12} /> Book Guided Trek
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conservation Section */}
        <div className="mt-20 p-8 md:p-12 bg-white border border-[#081628]/10 rounded-[24px] grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-left shadow-sm text-[#2b2b2b]">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-accent-hover">
              <ShieldAlert size={20} />
              <span className="text-xs font-sans tracking-widest uppercase font-bold">Conservation Pledge</span>
            </div>
            <h3 className="font-serif text-2xl text-[#081628] font-semibold">Protecting Andaman's Natural Heritage</h3>
            <p className="font-sans text-charcoal/70 text-xs md:text-sm leading-relaxed font-light">
              At Hotel Sunrise, we are deeply committed to sustainable eco-tourism. We collaborate closely with local wildlife authorities and certified naturalists to arrange low-impact, educational trekking programs. Our guidelines require guests to maintain safe distances, avoid littering, and protect nesting sites.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-[#f8f9fa] border border-[#081628]/10 rounded-[16px] flex items-center gap-3 shadow-sm text-[#2b2b2b]">
              <Award className="text-accent-hover shrink-0" size={24} />
              <div>
                <h4 className="font-serif text-sm text-[#081628] font-medium">100% Eco-Certified</h4>
                <p className="text-[10px] text-charcoal/50 font-sans">Naturalist-led excursions</p>
              </div>
            </div>
            <div className="p-4 bg-[#f8f9fa] border border-[#081628]/10 rounded-[16px] flex items-center gap-3 shadow-sm text-[#2b2b2b]">
              <Sparkles className="text-accent-hover shrink-0" size={24} />
              <div>
                <h4 className="font-serif text-sm text-[#081628] font-medium">Zero Environmental Footprint</h4>
                <p className="text-[10px] text-charcoal/50 font-sans">Strict leave-no-trace protocols</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <WhatsAppConcierge />
      <Footer />
    </div>
  );
}
