import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { PARTNERS_DATA } from "../data/skymirrData";

interface PartnersSectionProps {
  onExploreProducts?: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({
  onExploreProducts,
}) => {
  const onlineTripled = [
    ...PARTNERS_DATA.online,
    ...PARTNERS_DATA.online,
    ...PARTNERS_DATA.online,
    ...PARTNERS_DATA.online,
  ];
  const distTripled = [
    ...PARTNERS_DATA.distributors,
    ...PARTNERS_DATA.distributors,
    ...PARTNERS_DATA.distributors,
    ...PARTNERS_DATA.distributors,
  ];

  const onlineScrollRef = useRef<HTMLDivElement>(null);
  const distScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeftOnline = () => {
    if (onlineScrollRef.current) {
      onlineScrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRightOnline = () => {
    if (onlineScrollRef.current) {
      onlineScrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  const scrollLeftDist = () => {
    if (distScrollRef.current) {
      distScrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRightDist = () => {
    if (distScrollRef.current) {
      distScrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  const smallArrow =
    "w-8 h-8 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer border border-slate-200/80 bg-white shadow-2xs";

  const logoCard =
    "w-48 sm:w-52 shrink-0 flex flex-col items-center justify-center p-4 h-28 bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group/card select-none";

  return (
    <div className="space-y-16">
      {/* OUR PARTNERS */}
      <section className="py-24 sm:py-32 bg-white border-t border-slate-200/70 relative">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-[11px] font-mono uppercase tracking-[0.2em] text-blue-700 font-bold backdrop-blur-md shadow-2xs">
              Global Distribution Network
            </div>
            <h2 className="text-3xl sm:text-5xl uppercase font-black tracking-tight font-sans text-slate-950">
              Our Partners
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Global distribution networks and online retail partners
            </p>
          </div>

          <div className="space-y-6">
            {/* ROW 1: ONLINE PARTNERS */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-5 overflow-hidden group/online shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase text-slate-800 font-mono tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Online Partners
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 mr-2 hidden sm:inline-block font-mono">
                    Hover to pause
                  </span>
                  <button
                    onClick={scrollLeftOnline}
                    className={smallArrow}
                    aria-label="Scroll left online partners"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollRightOnline}
                    className={smallArrow}
                    aria-label="Scroll right online partners"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div
                ref={onlineScrollRef}
                className="overflow-x-hidden relative py-2 cursor-grab active:cursor-grabbing"
              >
                <div className="animate-marquee-parallel group-hover/online:[animation-play-state:paused] flex gap-4">
                  {onlineTripled.map((item, idx) => (
                    <div key={`online-${item.name}-${idx}`} className={logoCard}>
                      <div className="h-12 w-full flex items-center justify-center p-1">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="max-h-11 max-w-[130px] object-contain filter-none opacity-100 group-hover/card:scale-105 transition-all duration-300"
                        />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-2 font-bold">
                        {item.region}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 2: PARTNERS & DISTRIBUTORS */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 space-y-5 overflow-hidden group/dist shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-2.5 text-xs font-bold uppercase text-slate-800 font-mono tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  Partners &amp; Distributors
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 mr-2 hidden sm:inline-block font-mono">
                    Hover to pause
                  </span>
                  <button
                    onClick={scrollLeftDist}
                    className={smallArrow}
                    aria-label="Scroll left distributors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollRightDist}
                    className={smallArrow}
                    aria-label="Scroll right distributors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div
                ref={distScrollRef}
                className="overflow-x-hidden relative py-2 cursor-grab active:cursor-grabbing"
              >
                <div className="animate-marquee-parallel group-hover/dist:[animation-play-state:paused] flex gap-4">
                  {distTripled.map((item, idx) => (
                    <div key={`dist-${item.name}-${idx}`} className={logoCard}>
                      <div className="h-12 w-full flex items-center justify-center p-1">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="max-h-11 max-w-[130px] object-contain filter-none opacity-100 group-hover/card:scale-105 transition-all duration-300"
                        />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-2 font-bold">
                        {item.region}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE A CLOSER LOOK & LAB DEMO VIDEO SECTION (Light Blue Tech Gradient + Grid) */}
      <section
        id="demo-video"
        className="relative isolate overflow-hidden py-28 sm:py-36 border-t border-blue-200 bg-gradient-to-br from-slate-50 via-sky-50/60 to-blue-100/40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.06) 1px, transparent 1px), linear-gradient(to bottom right, #f8fafc, #eff6ff, #dbeafe)",
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Technical Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-900 text-white border border-slate-800 text-[11px] font-mono uppercase tracking-[0.2em] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Discover SkyMirr
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 font-sans leading-tight">
              TAKE A CLOSER LOOK….
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              <p>
                For decades, wireless engineers fought antenna coupling as a destructive parasite that causes return loss, detuning, and signal cancellation. SkyMirr inverted the paradigm.
              </p>
              <p>
                <strong className="text-slate-950 font-bold">MuLCAT® uses positive electromagnetic coupling</strong> through proprietary multi-layer dielectric resonator geometries. Rather than isolating elements with bulky chokes or lossy shielding, MuLCAT® constructively aligns the phase of adjacent fields to amplify radiation efficiency and multiply usable bandwidth.
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-slate-600 font-semibold">
                Songdo 3D Anechoic Facility
              </span>
            </div>
          </div>

          {/* Right Column: Professional Laboratory Video Player with Floating Badges */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden border-2 border-slate-900 shadow-[0_25px_60px_rgba(15,23,42,0.25)] bg-slate-950 group">
              
              <video
                controls
                poster="/images/disocver-skymirr.jpg"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://skymirr.com/wp-content/uploads/2026/01/Discover_SkyMirr.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </section>

      {/* TAKE A CLOSER LOOK — Product Lineup Grid CTA */}
      <section className="py-24 sm:py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-widest bg-blue-100 text-blue-800 border border-blue-200 shadow-2xs">
              Engineering Lineup
            </div>

            <h2 className="text-3xl sm:text-5xl uppercase font-black tracking-tight leading-[1.05] text-slate-950 font-sans">
              Explore Our Portfolio
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md font-medium">
              Explore our complete portfolio of ultra-wideband external connectorized antennas, carrier-certified 5G FWA gateways, and real-time asset telemetry trackers.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2 h-13 px-8 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_10px_25px_rgba(37,99,235,0.3)] cursor-pointer hover:-translate-y-0.5 transition-all"
              >
                <span>See our available products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full flex justify-center py-6">
              <div className="absolute inset-0 m-auto w-[85%] aspect-square max-h-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.1),rgba(255,255,255,0)_72%)] blur-2xl pointer-events-none" />
              <img
                src="/images/our-products.png"
                alt="SkyMirr Full Product Lineup"
                className="relative max-h-80 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};