import React, { useState } from "react";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  Radio,
  Wifi,
  Sparkles,
  X,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  ZoomIn
} from "lucide-react";

interface Sky5GDetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export const Sky5GDetailPage: React.FC<Sky5GDetailPageProps> = ({
  onBack,
  onContact,
}) => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
  });

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const bullets = [
    "42% farther reach to cell towers",
    "Up to 3.4 Gbps download speeds",
    "Twice the coverage area compared to standard solutions",
    "Reliable indoor penetration for homes and businesses",
    "Resilient performance at the network edge and rural sites",
    "Optimized for any environment—rural environments, highways, or bustling cities",
  ];

  const technicalHighlights = [
    "4x4 MIMO 5G architecture",
    "Full FR1 band support (600 MHz - 6 GHz)",
    "Wi-Fi 7 (4x4 MU-MIMO tri-band)",
    "Supports up to 512 simultaneous devices",
    "311 ft Wi-Fi coverage radius",
    "2.5 Gbps LAN / WAN ethernet ports",
    "VPN: IPSEC, SSL, WireGuard built-in",
    "TR-069 remote management protocol",
    "Dual firmware images & auto-recovery failsafe",
    "Optional external SMA antenna ports for high-gain arrays",
  ];

  const useCases = [
    {
      title: "Rural Areas",
      desc: "Small offices, farms, community centers, schools",
    },
    {
      title: "Professional Offices",
      desc: "Cloud apps, VoIP & video, multi-device networks",
    },
    {
      title: "Retail & Restaurants",
      desc: "POS uptime, guest/staff Wi-Fi, digital signage, security cameras",
    },
    {
      title: "Public Safety",
      desc: "Mobile command, emergency operations, disaster recovery, EOC backup",
    },
    {
      title: "Construction & Field Services",
      desc: "Portable broadband, trailer connectivity, project uploads, inspections",
    },
  ];

  return (
    <div className="pdx-page pt-[72px] pb-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 text-slate-950 animate-fade-in relative overflow-hidden">
      
      {/* Background Floating Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Breadcrumb Bar */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200/85 py-4 px-4 sm:px-8 relative z-20 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-blue-700 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>CPEs</span>
            <span>/</span>
            <span className="text-blue-700 font-bold bg-blue-100 px-3 py-0.5 rounded-full tracking-wider">
              TCPA 117 (Sky5G® Router)
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10 space-y-12 pdx-flow">
        
        {/* ========================================================
            HERO HEADER & QUICK ACTIONS
            ======================================================== */}
        <div className="pdx-hero">
          <div className="pdx-hero-head flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-700 font-bold backdrop-blur-md shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                Flagship Wireless Gateway
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-sans">
                Sky5G Wireless Router
              </h1>
              <p className="text-base sm:text-lg font-bold text-blue-700 font-sans">
                Unleashing Reliable Connectivity Anywhere
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://skymirr.com/wp-content/uploads/2025/12/SkyMirr-Data-Sheet-TCPA117.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>Datasheet</span>
                <Download className="w-4 h-4" />
              </a>
              <a
                href="https://www.bhphotovideo.com/c/search?q=skymirr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                <span>Shop at B&H</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider transition-all border border-slate-200 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Bulk Order</span>
              </button>
            </div>
          </div>

          {/* Hardware Highlight Banner */}
          <div 
            onClick={() => openLightbox("/images/tcpa117/TCPA-117-new.png", "Sky5G TCPA 117 Router")}
            className="pdx-hero-visual bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer group hover:border-blue-400 transition-all shadow-inner"
          >
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[10px] font-mono text-blue-700 uppercase font-bold bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                Hardware Model TCPA 117
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-sans group-hover:text-blue-700 transition-colors">
                5G Sub-6 / 4G LTE CPE Gateway
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
                Features internal MuLCAT™ antenna array, Wi-Fi 7 tri-band connectivity, and enterprise routing. Click to inspect high-resolution product preview.
              </p>
            </div>
            <div className="relative shrink-0">
              <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-900/10 text-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ZoomIn className="w-4 h-4" />
              </div>
              <img
                src="/images/tcpa117/TCPA-117-new.png"
                alt="Sky5G TCPA 117 Router"
                className="max-h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            CHALLENGE & SOLUTION BENTO GRID
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-slate-200/90 space-y-3 shadow-xl">
            <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
              The Challenge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              In rugged landscapes and dense urban environments, millions struggle with slow, unstable internet. Weak RF signals and limited fiber access create persistent connectivity gaps, restricting education, commerce, and everyday life.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 rounded-[32px] p-6 sm:p-8 text-white space-y-4 shadow-xl border border-blue-500/30">
            <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              The Solution: SkyMirr Sky5G
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
              Engineered for businesses, communities, and users who demand fast, resilient, and secure broadband. Certified on <strong className="text-white font-semibold">T-Mobile's 5G network and T-Priority</strong> for mission-critical reliability.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold font-mono border border-amber-400/40">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>CES 2026 Innovation Award Honoree</span>
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            SUPERIOR CONNECTIVITY & TOPOLOGY
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-sans">
              Superior Connectivity By Design
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-normal">
              Unlike traditional routers where antennas are an afterthought, SkyMirr's exclusive <strong className="text-slate-900 font-semibold">MuLCAT® antenna-first engineering</strong> puts signal strength and reliability front and center. Experience up to <strong className="text-slate-900 font-semibold">42% farther reach to cell towers</strong>, enhanced indoor coverage, and consistently high speeds.
            </p>
          </div>

          {/* Topology Image with Zoom */}
          <div
            onClick={() =>
              openLightbox(
                "/images/tcpa117/wireless-link.jpg",
                "Sky5G Wireless Link Architecture"
              )
            }
            className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-inner cursor-pointer group hover:border-blue-400 transition-all"
          >
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-800 mb-4">
              <span>Wireless Link Architecture: Device ↔ Sky5G ↔ Base Station</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                <ZoomIn className="w-4 h-4" />
                <span>Click to zoom</span>
              </span>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src="/images/tcpa117/wireless-link.jpg"
                alt="Wireless Link Diagram"
                className="max-h-72 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
              />
            </div>
          </div>

          {/* Key Bullets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bullets.map((b, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-xs sm:text-sm font-normal text-slate-800 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            TECH HIGHLIGHTS & MULCAT CARDS
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-slate-200/90 space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950 font-mono">
              <Radio className="w-4 h-4 text-blue-600" />
              <span>MuLCAT® Antenna System</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              AI-driven, real-time optimization ensures peak performance and extends connectivity to challenging areas without upgrading carrier plans.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-slate-200/90 space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950 font-mono">
              <Wifi className="w-4 h-4 text-blue-600" />
              <span>Wi-Fi 7 Tri-Band Integration</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Delivers seamless, high-speed connections for streaming, remote work, and online learning across up to 512 concurrent users.
            </p>
          </div>
        </div>

        {/* ========================================================
            CARRIER CERTIFICATIONS
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest font-mono">
            Sky5G Certified Network Ecosystem
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
              <div className="text-sm font-bold text-slate-950 font-sans flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                T-Mobile 5G
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivering fast speeds, broad coverage, and enterprise-grade reliability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
              <div className="text-sm font-bold text-slate-950 font-sans flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                T-Priority Public Safety
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elevated network access, priority queuing, and hardened reliability for first responders, police, fire, and EMS.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2">
              <div className="text-sm font-bold text-slate-950 font-sans flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                AT&amp;T Network
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivering reliable 5G connectivity on the AT&amp;T network for business and remote locations.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            TECHNICAL HIGHLIGHTS CHECKLIST
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest font-mono flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-600" />
            Technical Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {technicalHighlights.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            VERSATILE INDUSTRY USE CASES
            ======================================================== */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6">
          <h4 className="text-xs font-bold text-slate-950 uppercase tracking-widest font-mono">
            Versatile Industry Use Cases
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-2 shadow-2xs"
              >
                <span className="text-xs font-bold text-slate-950 font-sans uppercase tracking-wider block text-blue-700">
                  {uc.title}
                </span>
                <span className="text-xs text-slate-600 font-normal block leading-relaxed">
                  {uc.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Retail Partners Footer Bar inside Page */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-[24px] p-6 border border-slate-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Available Retailers:
            </span>
            <div className="flex items-center gap-3">
              <a href="https://www.amazon.com/s?k=skymirr" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/tcpa117/amazon-buy.png" alt="Amazon" className="h-5 object-contain" />
              </a>
              <a href="https://www.digikey.com/en/supplier-centers/skymirr" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/tcpa117/digikey-buy.png" alt="DigiKey" className="h-5 object-contain" />
              </a>
              <a href="https://www.walmart.com/search?q=skymirr" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/tcpa117/wallmart-buy.png" alt="Walmart" className="h-5 object-contain" />
              </a>
            </div>
          </div>
          <button
            onClick={onContact}
            className="text-xs font-bold font-mono uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
          >
            Need custom deployment assistance? Contact Support →
          </button>
        </div>

      </div>

      {/* ========================================================
          FULLSCREEN LIGHTBOX IMAGE ZOOM MODAL
          ======================================================== */}
      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/85 backdrop-blur-lg animate-fade-in cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-3xl rounded-[32px] overflow-hidden shadow-2xl max-w-4xl w-full p-8 sm:p-12 border border-slate-200 animate-slide-up flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between pb-6 border-b border-slate-100">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                {lightbox.title} — High Resolution Preview
              </span>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-10 flex items-center justify-center max-h-[70vh] w-full">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain drop-shadow-xl rounded-2xl bg-slate-50 p-3 border border-slate-200/60"
              />
            </div>

            <div className="w-full pt-4 border-t border-slate-100 text-center">
              <button
                onClick={closeLightbox}
                className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};