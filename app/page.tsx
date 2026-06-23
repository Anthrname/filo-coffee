"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  tag?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"coffee" | "signature" | "manual" | "non-coffee">("coffee");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Address text to copy
  const addressText = "Jl. Anyar, Depan SMK Bakti Kencana, Majasetra, Majalaya, Kabupaten Bandung, Jawa Barat 40382";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const menuItems: Record<"coffee" | "signature" | "manual" | "non-coffee", MenuItem[]> = {
    coffee: [
      { name: "Espresso", price: "Rp 13.000", desc: "Rich and concentrated shot of espresso brewed from local beans." },
      { name: "Americano", price: "Rp 15.000", desc: "Double shot espresso with hot or iced water for a clean cup." },
      { name: "Cappuccino", price: "Rp 15.000", desc: "Balanced mix of espresso, steamed milk, and rich microfoam." },
      { name: "Latte", price: "Rp 15.000", desc: "Espresso with silky smooth steamed milk and a thin layer of foam." },
      { name: "Taro Coffee", price: "Rp 17.000", desc: "Unique sweet blend of earthy taro flavor and bold espresso." },
      { name: "Matcha Coffee", price: "Rp 17.000", desc: "Fusing premium matcha green tea with a shot of espresso." },
      { name: "Caramel Coffee", price: "Rp 17.000", desc: "Sweet caramel syrup blended with fresh espresso and milk." },
      { name: "Red Velvet Coffee", price: "Rp 17.000", desc: "Decadent red velvet flavor combined with espresso and milk." },
    ],
    signature: [
      { name: "Filo Coffee 2.0", price: "Rp 15.000", desc: "Our signature sweet and creamy iced coffee recipe.", tag: "Classic" },
      { name: "Filo Coffee 3.0", price: "Rp 17.000", desc: "Next-level signature blend with richer coffee notes and sweetness.", tag: "Best Seller" },
      { name: "Blissberry Coffee", price: "Rp 15.000", desc: "Refreshing espresso mixed with sweet and tangy berry infusion.", tag: "Special" },
      { name: "Lemon Coffee", price: "Rp 15.000", desc: "Bold espresso combined with refreshing citrus lemon notes." },
      { name: "Lemon Party", price: "Rp 10.000", desc: "A fun, refreshing lemon-infused coffee mocktail drink." },
      { name: "Kopi Susu Pandan", price: "Rp 17.000", desc: "Creamy iced coffee infused with sweet and fragrant pandan syrup.", tag: "Seasonal" },
      { name: "Kopi Susu Banana", price: "Rp 17.000", desc: "Creamy iced coffee infused with sweet banana syrup.", tag: "Seasonal" },
      { name: "Kopi Susu Peanut", price: "Rp 17.000", desc: "Creamy iced coffee with a nutty, savory peanut syrup.", tag: "Seasonal" },
      { name: "Kopi Susu Pistachio", price: "Rp 17.000", desc: "Creamy iced coffee with premium, nutty pistachio notes.", tag: "Seasonal" },
    ],
    manual: [
      { name: "V60", price: "Rp 15.000", desc: "Filter coffee using hand-selected single-origin beans, clean and floral notes.", tag: "Specialty" },
      { name: "Tubruk", price: "Rp 13.000", desc: "Traditional Indonesian steep brew, bold, heavy body, and intense aroma." },
      { name: "Japanese", price: "Rp 15.000", desc: "Drip coffee brewed directly over ice cubes for a bright, fruity profile." },
      { name: "Vietnam Drip", price: "Rp 13.000", desc: "Traditional slow-dripped coffee over sweet condensed milk." },
    ],
    "non-coffee": [
      { name: "Taro", price: "Rp 13.000", desc: "Sweet, creamy drink flavored with earthy taro root." },
      { name: "Leci", price: "Rp 13.000", desc: "Refreshing sweet tea or creamy milk drink infused with sweet lychee flavor." },
      { name: "Milo", price: "Rp 13.000", desc: "Classic chocolate malt drink served hot or iced." },
      { name: "Matcha", price: "Rp 15.000", desc: "Rich Japanese stone-ground matcha green tea whisked with creamy milk.", tag: "Must Try" },
      { name: "Red Velvet", price: "Rp 13.000", desc: "Decadent red velvet cocoa infusion with velvet-smooth hot or iced milk." },
      { name: "Soda Susu", price: "Rp 13.000", desc: "Fizzy carbonated soda mixed with sweet condensed milk." },
      { name: "Choco Hazelnut", price: "Rp 13.000", desc: "Rich premium cocoa blend paired with sweet, nutty hazelnut syrup." },
      { name: "Lemon Bir", price: "Rp 10.000", desc: "Refreshing non-alcoholic carbonated lemon drink." },
      { name: "Lemon Natural", price: "Rp 10.000", desc: "Pure, refreshing freshly squeezed lemon juice." },
    ],
  };

  const reviews = [
    {
      name: "Fahmi R.",
      role: "Local Guide",
      rating: 5,
      comment: "Tempatnya nyaman banget buat nongkrong sambil mabar PS. Kopinya mantap, manual brew-nya juara!",
      time: "2 weeks ago"
    },
    {
      name: "Rian H.",
      role: "Gamer Community",
      rating: 5,
      comment: "Vibe-nya dapet banget pas malem. Ada turnamen FIFA juga, jadi makin seru. Es kopi susu filo andalan.",
      time: "1 month ago"
    },
    {
      name: "Amelia S.",
      role: "Student",
      rating: 5,
      comment: "Pelayanan ramah, kopi berkualitas dengan harga terjangkau. Cocok buat nugas atau santai bareng temen.",
      time: "3 days ago"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#060608] text-zinc-100 overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-amber-600/10 blur-[120px] pointer-events-none animate-pulse-slow" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glassmorphism">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 shadow-lg shadow-black/20 group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-white">
              <Image
                src="/images/logo.png"
                alt="Filo Coffee Logo"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors leading-none">FILO COFFEE</span>
              <span className="text-[9px] text-zinc-500 tracking-widest uppercase mt-0.5">Kesederhanaan Dalam Rasa</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#vibe" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">The Vibe</a>
            <a href="#menu" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">Menu</a>
            <a href="#gaming" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">Gaming Arena</a>
            <a href="#reviews" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">Reviews</a>
            <a href="#location" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 font-medium">Location</a>
          </div>

          <div className="hidden md:block">
            <a
              href="/order.html"
              className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0"
            >
              Pesan Online
            </a>
          </div>

          {/* Mobile Menu Btn */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden glassmorphism border-t-0 border-x-0 border-b border-white/5 py-6 px-6 animate-fadeIn">
            <div className="flex flex-col gap-5">
              <a
                href="#vibe"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-zinc-300 hover:text-amber-400 transition-colors"
              >
                The Vibe
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-zinc-300 hover:text-amber-400 transition-colors"
              >
                Menu
              </a>
              <a
                href="#gaming"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-zinc-300 hover:text-amber-400 transition-colors"
              >
                Gaming Arena
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-zinc-300 hover:text-amber-400 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-zinc-300 hover:text-amber-400 transition-colors"
              >
                Location
              </a>
              <a
                href="/order.html"
                className="w-full text-center py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-base font-bold rounded-xl"
              >
                Pesan Online
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
            Open Daily • 13:00 - 22:30
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] text-glow-coffee">
            Filo Coffee
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-xl mx-auto lg:mx-0">
            &quot;Kesederhanaan Dalam Rasa&quot;
          </p>
          
          <p className="text-base text-zinc-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Menghidangkan kopi manual brew pilihan terbaik, berpadu dengan ruang komunal ramah gaming untuk berkumpul, bersantai, dan mabar PlayStation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="/order.html"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-100 transition-all text-center"
            >
              Pesan Kopi Online
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-xl hover:bg-zinc-850 hover:border-zinc-700 transition-all text-center"
            >
              Lihat Menu & Lokasi
            </a>
          </div>

          {/* Social and Rating Stats */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 border-t border-zinc-900/80">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white">5.0 / 5.0 Rating</p>
                <p className="text-xs text-zinc-500">Based on Google Maps reviews</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/filocoffee1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span className="text-sm font-medium">@filocoffee1</span>
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-lg lg:max-w-none aspect-square">
          {/* Subtle decoration frame */}
          <div className="absolute inset-0 border border-white/5 rounded-3xl translate-x-4 translate-y-4 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-50 rounded-3xl pointer-events-none"></div>
          
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-black/80 relative">
            <Image
              src="/images/hero-coffee.jpg"
              alt="Manual Pour Over Coffee Brewing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover transform hover:scale-[1.03] transition-transform duration-700"
            />
          </div>
          
          {/* Neon Floating Card */}
          <div className="absolute bottom-6 left-6 right-6 p-4 glassmorphism rounded-2xl flex items-center gap-4 shadow-xl border border-white/10">
            <span className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-2xl text-violet-400 shadow-inner">
              🎮
            </span>
            <div>
              <p className="text-sm font-bold text-white">Panstation_ Hub</p>
              <p className="text-xs text-zinc-400">PlayStation console gaming corner & tournaments</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vibe Section */}
      <section id="vibe" className="py-24 border-t border-zinc-900 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-amber-500 tracking-widest uppercase">The Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Lebih Dari Sekedar Kopi</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base">
            Kami menggabungkan seni menyeduh kopi manual dengan area santai komunal yang dirancang untuk mempertemukan komunitas gamer dan penikmat kopi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-amber-500/20 hover:bg-zinc-900/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 font-semibold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              ☕
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Specialty Manual Brew</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Dari V60 hingga Japanese iced drip. Kami memilih biji kopi lokal terbaik secara langsung, disajikan dengan tingkat ketelitian tinggi demi menghadirkan rasa yang otentik.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-violet-500/20 hover:bg-zinc-900/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-semibold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🎮
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Gaming & Tournament</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Berkolaborasi dengan Panstation_ menyediakan konsol PlayStation terbaik. Mainkan game seru seperti FIFA atau NBA 2K bersama kawan secara kasual maupun kompetitif.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-blue-500/20 hover:bg-zinc-900/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-semibold text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              🛋️
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cozy Space & Community</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Lengkap dengan colokan listrik melimpah dan internet stabil. Menjadikannya spot sempurna untuk berkumpul santai, belajar bareng, nugas, atau sekedar mengisi waktu luang.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-zinc-950/40 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-semibold text-amber-500 tracking-widest uppercase">The Menu</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Menu Pilihan Kami</h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-base">
              Setiap menu diracik dengan bahan berkualitas untuk menghadirkan rasa yang konsisten dan menyegarkan hari Anda.
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 pt-6">
              {(["coffee", "signature", "manual", "non-coffee"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                    activeTab === tab
                      ? "bg-amber-600 text-black border-amber-600 shadow-md shadow-amber-500/10"
                      : "bg-zinc-900/50 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {tab === "coffee" && "Coffee Classics"}
                  {tab === "signature" && "Signatures"}
                  {tab === "manual" && "Manual Brew"}
                  {tab === "non-coffee" && "Non-Coffee"}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {menuItems[activeTab].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/25 border border-zinc-900/50 hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-300 flex items-start justify-between gap-6 group animate-fadeIn"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{item.name}</h3>
                    {item.tag && (
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-base font-bold text-amber-400 whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-12 space-y-6">
            <p className="text-sm text-zinc-600 italic">Harga dapat berubah sewaktu-waktu. Hubungi barista untuk ketersediaan biji kopi single origin hari ini.</p>
            <div className="pt-4">
              <a
                href="/order.html"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-100 transition-all text-center"
              >
                <span>🛒</span> Pesan Online via Keranjang Belanja
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Hub Interactive Promo */}
      <section id="gaming" className="py-24 border-t border-zinc-900 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-violet-950/20 to-zinc-950/30 border border-violet-900/20 rounded-3xl p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
          {/* Subtle neon glowing orb in promo card */}
          <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-violet-600/15 blur-[80px] pointer-events-none"></div>
          
          {/* Decorative floating PlayStation symbol icons using clean SVGs */}
          <div className="absolute top-12 left-1/3 text-violet-500/10 pointer-events-none animate-bounce" style={{ animationDuration: "6s" }}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {/* Triangle */}
              <polygon points="12,4 20,18 4,18" />
            </svg>
          </div>
          <div className="absolute bottom-12 left-10 text-violet-500/10 pointer-events-none animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {/* Circle */}
              <circle cx="12" cy="12" r="8" />
            </svg>
          </div>
          <div className="absolute top-20 right-1/4 text-violet-500/10 pointer-events-none animate-bounce" style={{ animationDuration: "8s", animationDelay: "2s" }}>
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {/* Square */}
              <rect x="5" y="5" width="14" height="14" rx="2" />
            </svg>
          </div>
          
          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-xs font-semibold uppercase tracking-wider">
              🎮 Partnership with @Panstation_
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight text-glow-purple">
              Temukan Serunya Turnamen PS & Hangout Mabar!
            </h2>
            
            <p className="text-zinc-400 leading-relaxed text-base">
              Filo Coffee bekerja sama dengan Panstation_ menyediakan rental PlayStation console serta menggelar Liga Turnamen FIFA & NBA 2K mingguan. Nongkrong tidak pernah seseru ini! Dapatkan kopi favoritmu, pesan slot bermain, dan buktikan skill-mu di papan klasemen komunitas kami.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center text-xs text-violet-400">✓</span>
                Rental PS Konsol Premium & TV Layar Lebar
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center text-xs text-violet-400">✓</span>
                Liga Turnamen FIFA / NBA 2K Rutin dengan Hadiah Menarik
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center text-xs text-violet-400">✓</span>
                Paket Menu Khusus Gaming (Kopi + Snack + Durasi Main)
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="https://wa.me/6282319692292?text=Halo%20Filo%20Coffee!%20Saya%20ingin%20tanya%20jadwal%20turnamen%20dan%20booking%20slot%20PS."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl shadow-lg shadow-violet-500/15 hover:shadow-violet-500/30 hover:translate-y-[-2px] active:translate-y-0 transition-all duration-300"
              >
                <span>Daftar Turnamen & Booking</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-none aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl shadow-black/60 z-10 border border-white/5">
            <Image
              src="/images/gaming-lounge.jpg"
              alt="Console Gaming Corner and Coffee Cup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transform hover:scale-[1.03] transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section id="reviews" className="py-24 bg-zinc-950/40 border-t border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs font-semibold text-amber-500 tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Apa Kata Pelanggan Kami</h2>
            <p className="text-zinc-500 max-w-xl mx-auto text-base">
              Kami berkomitmen menyajikan rasa terbaik serta kenyamanan berinteraksi. Berikut adalah ulasan dari ulasan Google Maps kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 italic text-sm leading-relaxed">&quot;{rev.comment}&quot;</p>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-900/60 pt-6 mt-8">
                  <div>
                    <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                    <p className="text-xs text-zinc-500">{rev.role}</p>
                  </div>
                  <span className="text-[10px] text-zinc-650">{rev.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-16">
            <a
              href="https://maps.app.goo.gl/6tJyZ6ZoTWBh5Pux6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:text-amber-400 group"
            >
              <span>Lihat Semua Ulasan di Google Maps</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Location and Contacts Section */}
      <section id="location" className="py-24 border-t border-zinc-900 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-amber-500 tracking-widest uppercase">Find Us</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Lokasi & Jam Buka</h2>
              <p className="text-zinc-500 leading-relaxed">
                Kunjungi kami di Majalaya. Kami berada tepat di depan SMK Bakti Kencana, memudahkan Anda berkunjung sehabis sekolah, pulang kerja, atau di akhir pekan.
              </p>
            </div>

            {/* Information List */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/20 border border-zinc-900/60 items-start">
                <span className="text-2xl text-amber-400 mt-0.5">📍</span>
                <div className="space-y-2 flex-1">
                  <h4 className="text-sm font-bold text-white">Alamat Kami</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{addressText}</p>
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 hover:text-amber-400 mt-1 cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <span className="text-emerald-400">✓</span>
                        <span className="text-emerald-400">Tersalin ke papan klip!</span>
                      </>
                    ) : (
                      <>
                        <span>📋</span>
                        <span>Salin Alamat Lengkap</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/20 border border-zinc-900/60 items-start">
                <span className="text-2xl text-amber-400 mt-0.5">🕒</span>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white mb-3">Jam Operasional</h4>
                  <div className="grid grid-cols-2 gap-y-1.5 text-sm text-zinc-400">
                    <span>Senin</span>
                    <span className="text-right font-medium text-white">13:00 - 22:30</span>
                    <span>Selasa - Kamis</span>
                    <span className="text-right font-medium text-white">13:00 - 22:30</span>
                    <span className="text-amber-500">Jumat</span>
                    <span className="text-right font-medium text-amber-500">TUTUP</span>
                    <span>Sabtu - Minggu</span>
                    <span className="text-right font-medium text-white">13:00 - 22:30</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/20 border border-zinc-900/60 items-start">
                <span className="text-2xl text-amber-400 mt-0.5">📞</span>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-bold text-white">Hubungi Kami</h4>
                  <p className="text-sm text-zinc-400">WhatsApp: 0823-1969-2292</p>
                  <p className="text-xs text-zinc-500">Silakan chat untuk reservasi tempat, mabar grup besar, atau turnamen lokal.</p>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/6tJyZ6ZoTWBh5Pux6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-sm font-bold rounded-xl shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Buka di Google Maps</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/filocoffee1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white text-sm font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <span>Follow Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe */}
          <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-zinc-900/60 shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.39414594611!2d107.7454439!3d-7.0273149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c15f4992ad9b%3A0x1e5019f1a3b014c4!2sFilo%20coffee!5e0!3m2!1sen!2sid!4v1782190000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(10%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Filo Coffee Google Maps Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black/60 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-md overflow-hidden border border-white/5 bg-white flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Filo Coffee Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-wider">FILO COFFEE</span>
            </div>
            <p className="text-xs text-zinc-500">© 2026 Filo Coffee. Kesederhanaan Dalam Rasa. All Rights Reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-500 font-medium">
            <a href="#vibe" className="hover:text-white transition-colors">The Vibe</a>
            <a href="#menu" className="hover:text-white transition-colors">Menu</a>
            <a href="/order.html" className="hover:text-white transition-colors text-amber-500">Pesan Online</a>
            <a href="#gaming" className="hover:text-white transition-colors">Gaming Arena</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
