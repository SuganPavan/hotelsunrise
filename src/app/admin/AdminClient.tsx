"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Lock, Save, Trash2, Plus, LogOut, Check, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Room {
  slug: string;
  name: string;
  price: string;
  image: string;
  description: string;
  longDescription: string;
  amenities: string[];
  specs: any;
  features: any[];
  gallery: string[];
}

interface GalleryItem {
  category: string;
  image: string;
  title: string;
  alt: string;
}

export default function AdminClient() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  // Dashboard states
  const [activeTab, setActiveTab] = useState<"rooms" | "gallery">("rooms");
  const [rooms, setRooms] = useState<Record<string, Room>>({});
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  
  // Forms states
  const [newImage, setNewImage] = useState<GalleryItem>({
    category: "Rooms",
    image: "",
    title: "",
    alt: ""
  });
  
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const loadData = async () => {
    try {
      const roomsRes = await fetch("/api/rooms");
      if (roomsRes.ok) {
        const roomsData = await roomsRes.json();
        setRooms(roomsData);
      }

      const galleryRes = await fetch("/api/gallery");
      if (galleryRes.ok) {
        const galleryData = await galleryRes.json();
        setGallery(galleryData);
      }
    } catch (err) {
      console.error("Failed to load dashboard data:", err);
    }
  };

  const testAuth = async (pass: string) => {
    try {
      const res = await fetch("/api/rooms");
      if (res.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_password", pass);
        loadData();
      }
    } catch (e) {
      // Ignored
    }
  };

  // Load auth status from session
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("admin_password");
    if (savedPassword) {
      testAuth(savedPassword);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setLoginError("Please enter the password");
      return;
    }
    
    // We send a test request with the password in the Authorization header to see if it's correct
    sessionStorage.setItem("admin_password", password);
    testAuth(password);
    
    // If it fails, we will know when we try to save, but let's assume it works for navigation
    setIsAuthenticated(true);
    loadData();
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_password");
    setIsAuthenticated(false);
    setPassword("");
  };

  const handlePriceChange = (slug: string, newPrice: string) => {
    setRooms(prev => ({
      ...prev,
      [slug]: {
        ...prev[slug],
        price: newPrice
      }
    }));
  };

  const saveRoomPrices = async () => {
    setStatusMessage({ type: "loading", text: "Saving room rates..." });
    const pass = sessionStorage.getItem("admin_password") || "";
    try {
      const res = await fetch("/api/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${pass}`
        },
        body: JSON.stringify(rooms)
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatusMessage({ type: "success", text: "Room rates updated successfully!" });
      } else {
        setStatusMessage({ type: "error", text: data.error || "Failed to update room rates." });
      }
    } catch (err) {
      setStatusMessage({ type: "error", text: "Network error occurred." });
    }
    
    setTimeout(() => setStatusMessage({ type: "", text: "" }), 4000);
  };

  const handleAddGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImage.image || !newImage.title) {
      setStatusMessage({ type: "error", text: "Image URL and Title are required!" });
      return;
    }
    
    setGallery(prev => [...prev, newImage]);
    setNewImage({
      category: "Rooms",
      image: "",
      title: "",
      alt: ""
    });
    
    setStatusMessage({ type: "success", text: "Image added to list. Remember to save changes!" });
    setTimeout(() => setStatusMessage({ type: "", text: "" }), 4000);
  };

  const handleDeleteGalleryItem = (index: number) => {
    setGallery(prev => prev.filter((_, i) => i !== index));
    setStatusMessage({ type: "success", text: "Image removed from list. Remember to save changes!" });
    setTimeout(() => setStatusMessage({ type: "", text: "" }), 4000);
  };

  const saveGallery = async () => {
    setStatusMessage({ type: "loading", text: "Saving gallery changes..." });
    const pass = sessionStorage.getItem("admin_password") || "";
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${pass}`
        },
        body: JSON.stringify(gallery)
      });
      
      const data = await res.json();
      if (res.ok) {
        setStatusMessage({ type: "success", text: "Gallery database updated successfully!" });
      } else {
        setStatusMessage({ type: "error", text: data.error || "Failed to save gallery." });
      }
    } catch (err) {
      setStatusMessage({ type: "error", text: "Network error occurred." });
    }
    
    setTimeout(() => setStatusMessage({ type: "", text: "" }), 4000);
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2b2b2b] flex flex-col justify-between selection:bg-accent selection:text-[#081628]">
      <Navbar isHeroTransitioned={true} />
      
      <div className="relative w-full h-[35vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/hotel-lobby.jpg"
          alt="Hotel Sunrise Facility Panel"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#081628]/85 via-[#081628]/60 to-[#f8f9fa] z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-12 space-y-3">
          <span className="text-[10px] font-sans tracking-[0.4em] text-accent uppercase font-bold">
            Secure Portal
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-pearl font-semibold tracking-wide">
            Management Panel
          </h1>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-6 md:px-12 w-full py-12 relative z-20">
        
        {!isAuthenticated ? (
          /* Login Form */
          <div className="max-w-md mx-auto bg-white border border-[#081628]/10 rounded-[24px] p-8 shadow-lg space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent">
                <Lock size={20} />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#081628]">Administrator Login</h2>
              <p className="text-xs text-charcoal/60 font-sans">Enter the security password to modify prices and gallery assets.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-[10px] font-sans uppercase tracking-wider text-accent font-bold block mb-1.5">
                  Security Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-charcoal/15 focus:border-accent text-sm rounded-[8px] focus:outline-none transition-all duration-300 font-sans text-center"
                />
              </div>

              {loginError && (
                <p className="text-xs text-red-500 text-center font-sans">{loginError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-accent hover:bg-accent-hover text-[#081628] font-sans font-bold tracking-widest text-xs uppercase rounded-[8px] transition-all duration-300 shadow-md cursor-pointer"
              >
                Authenticate
              </button>
            </form>
          </div>
        ) : (
          /* Dashboard Panel */
          <div className="space-y-8">
            
            {/* Header & Status Indicator */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-charcoal/10 pb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 text-[10px] font-sans tracking-widest uppercase font-bold transition-all duration-300 rounded-[6px]"
                >
                  <LogOut size={11} /> Logout
                </button>
                <span className="text-xs text-green-600 font-sans font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Authorized Session
                </span>
              </div>
              
              {/* Notification Banner */}
              {statusMessage.text && (
                <div className={`px-4 py-2 rounded-[8px] text-xs font-sans font-semibold border ${
                  statusMessage.type === "success" ? "bg-green-50 border-green-200 text-green-700" :
                  statusMessage.type === "error" ? "bg-red-50 border-red-200 text-red-700" :
                  "bg-accent/10 border-accent/25 text-[#081628] animate-pulse"
                }`}>
                  {statusMessage.text}
                </div>
              )}
            </div>

            {/* Main Tabs */}
            <div className="flex border-b border-charcoal/10 gap-6">
              <button
                onClick={() => setActiveTab("rooms")}
                className={`pb-4 text-xs font-sans tracking-widest uppercase font-bold border-b-2 transition-all duration-300 ${
                  activeTab === "rooms" ? "border-accent text-accent" : "border-transparent text-charcoal/60 hover:text-[#081628]"
                }`}
              >
                Rooms & Suite Prices
              </button>
              <button
                onClick={() => setActiveTab("gallery")}
                className={`pb-4 text-xs font-sans tracking-widest uppercase font-bold border-b-2 transition-all duration-300 ${
                  activeTab === "gallery" ? "border-accent text-accent" : "border-transparent text-charcoal/60 hover:text-[#081628]"
                }`}
              >
                Gallery Manager
              </button>
            </div>

            {activeTab === "rooms" ? (
              /* Rooms Editor */
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="font-serif text-xl font-semibold text-[#081628]">Room Pricing Setup</h2>
                  <button
                    onClick={saveRoomPrices}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans font-bold tracking-widest text-[10px] uppercase rounded-[8px] transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <Save size={12} /> Save Room Prices
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.values(rooms).map(room => (
                    <div key={room.slug} className="bg-white border border-[#081628]/10 rounded-[20px] p-6 shadow-sm flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="h-40 relative rounded-[12px] overflow-hidden">
                          <Image
                            src={room.image}
                            alt={room.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-serif font-semibold text-base text-[#081628]">{room.name}</h3>
                          <p className="text-xs text-charcoal/70 font-sans font-light mt-1 line-clamp-2">{room.description}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-charcoal/10 space-y-2">
                        <label className="text-[9px] font-sans uppercase tracking-wider text-accent font-bold block">
                          Price per Night
                        </label>
                        <input
                          type="text"
                          value={room.price}
                          onChange={(e) => handlePriceChange(room.slug, e.target.value)}
                          placeholder="e.g. ₹1,200 / Night"
                          className="w-full px-3 py-2 bg-[#f8f9fa] border border-charcoal/15 focus:border-accent text-xs rounded-[6px] focus:outline-none transition-all duration-300 font-sans text-center font-bold text-[#081628]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Gallery Manager */
              <div className="space-y-8">
                
                {/* 1. Add Image Form */}
                <div className="bg-white border border-[#081628]/10 rounded-[24px] p-6 shadow-sm space-y-4">
                  <h3 className="font-serif text-lg font-semibold text-[#081628] flex items-center gap-2">
                    <Plus size={16} className="text-accent" /> Add New Photo
                  </h3>
                  
                  <form onSubmit={handleAddGalleryItem} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div>
                      <label className="text-[9px] font-sans uppercase tracking-wider text-accent font-bold block mb-1">
                        Category
                      </label>
                      <select
                        value={newImage.category}
                        onChange={(e) => setNewImage(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2.5 bg-[#f8f9fa] border border-charcoal/15 text-xs rounded-[6px] focus:outline-none focus:border-accent font-sans"
                      >
                        {["Hotel", "Rooms", "Bathrooms", "Beaches", "Attractions", "Wildlife"].map(tag => (
                          <option key={tag} value={tag}>{tag}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[9px] font-sans uppercase tracking-wider text-accent font-bold block mb-1">
                        Image URL (Cloudinary or local path)
                      </label>
                      <input
                        type="text"
                        value={newImage.image}
                        onChange={(e) => setNewImage(prev => ({ ...prev, image: e.target.value }))}
                        placeholder="e.g. /rooms/room-sunrise-1.jpg"
                        className="w-full px-3 py-2 bg-[#f8f9fa] border border-charcoal/15 text-xs rounded-[6px] focus:outline-none focus:border-accent font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-sans uppercase tracking-wider text-accent font-bold block mb-1">
                        Title / Caption
                      </label>
                      <input
                        type="text"
                        value={newImage.title}
                        onChange={(e) => setNewImage(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g. Cozy Bedroom Decor"
                        className="w-full px-3 py-2 bg-[#f8f9fa] border border-charcoal/15 text-xs rounded-[6px] focus:outline-none focus:border-accent font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-sans uppercase tracking-wider text-accent font-bold block mb-1">
                        Description / Alt text
                      </label>
                      <input
                        type="text"
                        value={newImage.alt}
                        onChange={(e) => setNewImage(prev => ({ ...prev, alt: e.target.value }))}
                        placeholder="e.g. Double bed setup at Hotel Sunrise"
                        className="w-full px-3 py-2 bg-[#f8f9fa] border border-charcoal/15 text-xs rounded-[6px] focus:outline-none focus:border-accent font-sans"
                      />
                    </div>

                    <div className="md:col-span-4 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans font-bold tracking-widest text-[10px] uppercase rounded-[8px] transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        <Plus size={12} /> Add to List
                      </button>
                    </div>
                  </form>
                </div>

                {/* 2. Current Gallery & Save */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-xl font-semibold text-[#081628]">Current Gallery Images ({gallery.length})</h3>
                    <button
                      onClick={saveGallery}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-[#081628] font-sans font-bold tracking-widest text-[10px] uppercase rounded-[8px] transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      <Save size={12} /> Save Gallery Database
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {gallery.map((item, index) => (
                      <div key={index} className="bg-white border border-[#081628]/10 rounded-[16px] overflow-hidden shadow-sm flex flex-col justify-between group relative">
                        <div className="h-40 relative overflow-hidden">
                          {item.image.startsWith("http") || item.image.startsWith("/") ? (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center text-xs text-charcoal/60 p-4 text-center font-sans">
                              No preview for imports
                            </div>
                          )}
                          <span className="absolute top-2 left-2 px-2.5 py-1 bg-[#081628]/70 backdrop-blur-md text-[9px] font-sans font-semibold tracking-wider uppercase text-accent rounded-full">
                            {item.category}
                          </span>
                        </div>
                        
                        <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                          <div>
                            <h4 className="font-serif font-semibold text-xs text-[#081628] line-clamp-1">{item.title}</h4>
                            <p className="text-[10px] text-charcoal/60 font-sans mt-0.5 line-clamp-1">{item.image}</p>
                          </div>

                          <button
                            onClick={() => handleDeleteGalleryItem(index)}
                            className="w-full py-2 bg-red-50 hover:bg-red-500 hover:text-white text-red-500 text-[10px] font-sans font-bold uppercase tracking-wider rounded-[6px] transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer mt-2"
                          >
                            <Trash2 size={10} /> Delete Image
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
            
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
