import React, { useState, useEffect, useRef } from "react";
import { BannerFX } from "../components/fx/Bannerfx";
import { Sparkles, Zap, ShieldCheck, Activity, Cpu, Radio, Award } from "lucide-react";

export const TechnologyPage: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = document.querySelectorAll(".tech-bento-animate");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-28 sm:pt-32 pb-24 bg-transparent text-slate-950 overflow-x-hidden relative"
    >
      {/* Ambient Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Executive Dark Header Banner */}
      <div className="page-banner bg-executive-gradient text-white py-20 sm:py-28 text-left relative overflow-hidden">
        <BannerFX />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-200 font-bold backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            RF Core Innovation
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight font-sans text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-text-shimmer">
            Technology
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl font-medium animate-slide-up-fade">
            MuLCAT™: Multi-Layer Coupling Controlled Antenna Technology (Patents Pending)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24 relative z-10">
        
        {/* ========================================================
            SECTION 1: MuLCAT™ CORE ARCHITECTURE & DIAGRAM
            ======================================================== */}
        <div className="space-y-12">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-3">
              Core Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-sans tracking-tight">
              MuLCAT™ Technology
            </h2>
            <p className="mt-3 text-base sm:text-lg font-semibold text-slate-700 leading-relaxed">
              SkyMirr's Unique MuLCAT™ (Multi-Layer Coupling Controlled Antenna Technology) Is The Advanced RF Technology That Can Improve Wireless Connectivity Significantly
            </p>
          </div>

          <div
            data-index={0}
            className={`tech-bento-animate grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-700 ease-out ${
              visibleCards[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Left Column: Why Now, What is MuLCAT & Bullets (Span 7) */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl group hover:border-blue-400 transition-all">
                  <h3 className="font-bold text-slate-950 uppercase tracking-wider font-mono text-xs flex items-center gap-2 mb-3 text-blue-700">
                    <Zap className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    WHY NOW?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Recent 5G ramp-up in Terrestrial Communication, Satellite communication service launch, and new Wireless healthcare, are all requiring high performing trustworthy RF technology than the existing solutions.
                  </p>
                </div>

                <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl group hover:border-blue-400 transition-all">
                  <h3 className="font-bold text-slate-950 uppercase tracking-wider font-mono text-xs flex items-center gap-2 mb-3 text-blue-700">
                    <ShieldCheck className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" />
                    WHAT IS MuLCAT™
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    MuLCAT™ (Multi-Layer Coupling Controlled Antenna Technology) is unique RF technology that can improve the performance of the RF device significantly by controlling the mutual couplings between each RF element.
                  </p>
                </div>
              </div>

              {/* Bullet Points Bento Box */}
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-4">
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">
                    Antennas radiate EM energy therefore each components affect each other. We call it "coupling" effect. Most of couplings in antenna systems act negatively.
                  </span>
                </div>
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">
                    MuLCAT™ is designed to use positive couplings to maximize the antenna performance.
                  </span>
                </div>
                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium">
                    SkyMirr products with MuLCAT™ are already winning in several global customers who desired to replace untrustworthy products or failed to find a suitable working solution.
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: MULCAT TECHNOLOGY Diagram (Span 5) */}
            <div
              data-index={1}
              className={`tech-bento-animate lg:col-span-5 transition-all duration-700 ease-out ${
                visibleCards[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col items-center justify-between h-full shadow-xl group">
                <div className="text-center mb-6">
                  <h3 className="text-sm sm:text-base font-black text-slate-950 uppercase tracking-wider font-mono">
                    MULCAT TECHNOLOGY
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-blue-700 bg-blue-100 px-3.5 py-1 rounded-full mt-2 inline-block border border-blue-200">
                    (PATENT &amp; TRADEMARK PENDING)
                  </span>
                </div>

                <div className="w-full my-auto rounded-2xl overflow-hidden border border-slate-200/80 p-4 bg-white shadow-inner group-hover:scale-102 transition-transform duration-700">
                  <img
                    src="/images/mulcat.jpg"
                    alt="MuLCAT Technology Patent & Trademark Pending Diagram"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            SECTION 2: MuLCAT™ ADVANTAGES & PERFORMANCE MATRIX
            ======================================================== */}
        <div className="space-y-12 pt-16 border-t border-slate-200/80">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-3">
              Performance Matrix
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 font-sans tracking-tight">
              MuLCAT™ Advantages
            </h2>
            <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600">
              MuLCAT™ Is Winning / Unique Technology
            </p>
          </div>

          <div
            data-index={2}
            className={`tech-bento-animate grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-700 ease-out ${
              visibleCards[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Left Column: Visual Diagram (Span 5) */}
            <div className="lg:col-span-5 bg-white/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex items-center justify-center shadow-xl group">
              <img
                src="/images/technology2.jpg"
                alt="MuLCAT Compact Ant for Wireless Health & Terrestrial Comm"
                className="w-full h-auto object-contain rounded-2xl group-hover:scale-103 transition-transform duration-700"
              />
            </div>

            {/* Right Column: Experience, Stat Badges, and Action Blocks (Span 7) */}
            <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
              
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl">
                <h3 className="font-bold text-slate-950 text-xs sm:text-sm uppercase tracking-wider mb-2 font-mono flex items-center gap-2 text-blue-700">
                  <Activity className="w-4 h-4 text-blue-600" />
                  AFTER DECADES OF ANTENNA DEV EXPERIENCE
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The world's best Engineers at SkyMirr have developed hundreds of antenna/RF products in the last few decades and shipped over hundred-millions products to global top-tier customers. The team found out the best technology, MuLCAT, to maximize system performance by controlling coupling between antenna components.
                </p>
              </div>

              {/* Stat Badges Grid */}
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-6">
                <h3 className="font-bold text-slate-950 text-xs sm:text-sm uppercase tracking-wider font-mono">
                  MuLCAT™ CAN IMPROVE THE PERFORMANCE
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {/* Stat 1 */}
                  <div className="aspect-square rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center p-3 text-center shadow-lg hover:scale-105 transition-all">
                    <span className="text-xl sm:text-3xl font-black font-mono leading-none text-sky-400">
                      &gt;100%
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold mt-2 leading-tight tracking-wider uppercase text-slate-300">
                      Bandwidth
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex flex-col items-center justify-center p-3 text-center shadow-lg hover:scale-105 transition-all">
                    <span className="text-xl sm:text-3xl font-black font-mono leading-none text-white">
                      &gt;92%
                    </span>
                    <span className="text-[9px] sm:text-[11px] font-bold mt-2 leading-tight tracking-wider uppercase text-blue-100">
                      Recognition Distance
                    </span>
                  </div>

                  {/* Stat 3 */}
                  <div className="aspect-square rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center p-3 text-center shadow-lg hover:scale-105 transition-all">
                    <span className="text-xl sm:text-3xl font-black font-mono leading-none text-sky-300">
                      &gt;65%
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold mt-2 leading-tight tracking-wider uppercase text-slate-300">
                      Higher Gain
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 font-mono italic">
                  * Benchmarked in terrestrial wireless systems and wireless healthcare devices
                </p>
              </div>

              {/* WITH MuLCAT Gradient Action Boxes */}
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-4">
                <h3 className="font-bold text-slate-950 text-xs sm:text-sm uppercase tracking-wider font-mono">
                  WITH MuLCAT™
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-4 text-xs font-semibold text-center shadow-md flex items-center justify-center">
                    Terrestrial wireless connectivity can be significantly improved.
                  </div>
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-4 text-xs font-semibold text-center shadow-md flex items-center justify-center">
                    Wireless healthcare devices can improve data transmission distance significantly.
                  </div>
                  <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-2xl p-4 text-xs font-semibold text-center shadow-md flex items-center justify-center">
                    AI can be adopted to maximize total system performance.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Quote Footer Banner */}
          <div className="pt-6 text-center">
            <p className="text-xs sm:text-sm font-semibold text-slate-700 italic glass-panel-light py-5 px-8 rounded-3xl border border-slate-200/80 max-w-2xl mx-auto shadow-md">
              "Whether It Be Radio, LAN, Or Otherwise, An Antenna Is Extremely Important." —{" "}
              <a
                href="https://www.pimfg.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 not-italic hover:underline font-bold"
              >
                PIMFG.com
              </a>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};