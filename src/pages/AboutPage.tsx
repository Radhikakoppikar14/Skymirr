import React, { useState, useEffect, useRef } from 'react';
import { BannerFX } from "../components/fx/Bannerfx";
import { Maximize2, X, Sparkles, Cpu, Factory, ShieldCheck } from 'lucide-react';

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export const AboutPage: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: '',
    title: '',
  });

  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.about-bento-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const trustedLogos = [
    { name: 'Walmart', img: '/images/about/wallmart.jpg' },
    { name: 'DigiKey', img: '/images/about/digikey.jpg' },
    { name: 'Amazon', img: '/images/about/amazon.jpg' },
    { name: 'ePlus', img: '/images/about/eplus.jpg' },
    { name: 'T-Mobile', img: '/images/about/tmobile.jpg' },
    { name: 'Verizon', img: '/images/about/verizon.jpg' },
  ];

  return (
    <div ref={containerRef} className="pt-28 sm:pt-32 pb-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 text-slate-950 overflow-x-hidden relative">
      
      {/* Background Floating Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Executive Header Banner */}
      <div className="page-banner bg-executive-gradient text-white py-20 sm:py-28 text-center relative overflow-hidden shadow-xl">
        <BannerFX />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4 animate-fade-in">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-200 font-bold backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Company Overview
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight font-sans text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-text-shimmer">
            About Us
          </h1>
          
          <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto font-medium animate-slide-up-fade">
            Unlocking powerful wireless performance through custom antenna solutions and system-level RF engineering.
          </p>

        </div>
      </div>

      {/* Asymmetric Bento Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-10 relative z-10">
        
        {/* ========================================================
            ROW 1: ABOUT SKYMIRR (MAGAZINE HERO BENTO)
            ======================================================== */}
        <div
          data-index={0}
          className={`about-bento-animate grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-700 ease-out ${
            visibleCards[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main Story Box (Span 7) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
                Our Vision
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-sans tracking-tight">
                About SkyMirr
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p>
                  At SkyMirr, we specialize in unlocking powerful wireless performance through custom antenna solutions and system-level RF consulting. Our mission is simple: <strong className="text-slate-950 font-semibold">help innovators build smarter, more connected products—faster.</strong>
                </p>
                <p>
                  From embedded 5G and asset tracker modules to rugged IoT, surveillance, and industrial applications, we design antennas and RF devices that meet real-world demands. Our engineering team moves fast, solving signal challenges with precision while reducing time-to-market and improving product performance. Whether you need a fully custom design or tuning and integration support, we deliver tested, ready-to-use solutions that work in the field, not just on paper.
                </p>
                <p>
                  Our deep antenna expertise powers our high-performing devices like 5G routers, asset trackers, and more—where reliable connectivity isn't optional. We understand that performance depends on more than just the antenna itself, which is why we engineer solutions with system architecture in mind. From board layout and enclosure design to signal isolation and power efficiency, we bring a holistic system-level view that helps us make industry-leading devices and help our customers create wireless products that are both robust and market-ready.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm font-bold shadow-md border border-slate-800 text-center">
              "At SkyMirr, we don't just make antennas—we connect the world."
            </div>
          </div>

          {/* Side Showcase Box (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div
              onClick={() => openLightbox('/images/about/aboutus.jpg', 'SkyMirr Team at Showcase Booth')}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-4 border border-slate-200/80 shadow-xl cursor-pointer group flex-1 flex flex-col justify-between overflow-hidden"
            >
              <div className="rounded-2xl overflow-hidden relative border border-slate-100 flex-1 min-h-[380px] bg-slate-900/5 flex items-center justify-center">
                <img
                  src="/images/about/aboutus.jpg"
                  alt="SkyMirr Team at Booth"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="p-3 rounded-2xl bg-white/90 backdrop-blur-md text-slate-950 shadow-xl transform -translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>
              <div className="p-3 text-center">
                <span className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-wider">
                  SkyMirr Engineering &amp; Operations Team
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 2: ENGINEERING AND OPERATIONS HEADER
            ======================================================== */}
        <div data-index={1} className={`about-bento-animate rounded-3xl bg-executive-gradient text-white p-8 text-center shadow-xl transition-all duration-700 ${visibleCards[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/25 text-[11px] font-mono uppercase tracking-[0.2em] text-blue-300 font-bold mb-2">
            <Factory className="w-3.5 h-3.5 text-blue-400" />
            Global Facilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-[0.2em] uppercase font-sans">
            ENGINEERING AND OPERATIONS
          </h2>
        </div>

        {/* ========================================================
            ROW 3: R&D CAPABILITY IN PLACE (SPLIT BENTO)
            ======================================================== */}
        <div
          data-index={2}
          className={`about-bento-animate grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-700 ease-out ${
            visibleCards[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Details (Span 6) */}
          <div className="lg:col-span-6 bg-white/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider">
                Research &amp; Prototyping
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                R&amp;D Capability In Place
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Initial R&amp;D and product development capability is ready.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <Cpu className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-950 font-semibold">Location:</strong> Incheon, Korea
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <strong className="text-slate-950 font-semibold">Equipment:</strong>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1">
                    <li>Full 3D anechoic test chamber</li>
                    <li>Network analyzers</li>
                    <li>Spectrum analyzers</li>
                    <li>Multi-meters and others</li>
                    <li>Work benches for prototyping</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Image Chamber (Span 6) */}
          <div className="lg:col-span-6 flex">
            <div
              onClick={() => openLightbox('/images/about/Picture3.jpg', 'Full 3D Anechoic Test Chamber — Incheon, Korea')}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-4 border border-slate-200/80 shadow-xl cursor-pointer group flex-1 flex flex-col justify-between overflow-hidden"
            >
              <div className="rounded-2xl overflow-hidden relative border border-slate-100 flex-1 min-h-[300px]">
                <img
                  src="/images/about/Picture3.jpg"
                  alt="Full 3D Anechoic Test Chamber"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 right-4 px-3.5 py-2 rounded-xl bg-slate-900/85 backdrop-blur-md text-white text-xs font-mono flex items-center gap-2 shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                  <span>Incheon Chamber</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 4: MASS PRODUCTION - LOCKED AND LOADED
            ======================================================== */}
        <div
          data-index={3}
          className={`about-bento-animate grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-700 ease-out ${
            visibleCards[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Stacked Images (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div
              onClick={() => openLightbox('/images/about/Picture4.jpg', 'Mass Production Assembly Line — Bac Ninh, Vietnam')}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-3 border border-slate-200/80 shadow-xl cursor-pointer group overflow-hidden flex-1"
            >
              <div className="rounded-2xl overflow-hidden relative border border-slate-100 h-48 sm:h-56">
                <img
                  src="/images/about/Picture4.jpg"
                  alt="Mass Production Assembly Line"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Bac Ninh Assembly</span>
                </div>
              </div>
            </div>

            <div
              onClick={() => openLightbox('/images/about/Picture5.png', 'Anechoic Absorber Array & RF Test Fixtures')}
              className="bg-white/90 backdrop-blur-2xl rounded-3xl p-3 border border-slate-200/80 shadow-xl cursor-pointer group overflow-hidden flex-1"
            >
              <div className="rounded-2xl overflow-hidden relative border border-slate-100 h-48 sm:h-56">
                <img
                  src="/images/about/Picture5.png"
                  alt="RF Test Fixture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono flex items-center gap-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>RF Test Fixtures</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Box (Span 6) */}
          <div className="lg:col-span-6 bg-white/90 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-xs font-mono font-bold text-blue-800 uppercase tracking-wider mb-2">
                Manufacturing Supply Chain
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                Mass Production-Locked And Loaded
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div><strong className="text-slate-950 font-semibold">Contract Mfgrs IN PLACE</strong> in Vietnam and Korea</div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div><strong className="text-slate-950 font-semibold">Location:</strong> Bac Ninh, Vietnam / Incheon, Korea</div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-slate-950 font-semibold">Entire SCM is ready including:</strong>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 pl-1 mt-1">
                    <li>Plastic molding/tooling</li>
                    <li>Metal stamping</li>
                    <li>PCB</li>
                    <li>Cable/connectors</li>
                    <li>Final assembly and test</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div><strong className="text-slate-950 font-semibold">Guaranteed low cost</strong> – efficient, well-trained line workers plus effective local supply chains</div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div><strong className="text-slate-950 font-semibold">High Quality</strong> – 100% inspection for all products that will be shipped</div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <div><strong className="text-slate-950 font-semibold">RMA system</strong> to react to any potential quality issue in customers ASAP</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            ROW 5: TRUSTED BY LOGOS
            ======================================================== */}
        <div data-index={4} className={`about-bento-animate space-y-6 pt-6 transition-all duration-700 ${visibleCards[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="rounded-2xl bg-executive-gradient text-white p-5 text-center shadow-lg border border-blue-500/20">
            <h2 className="text-sm sm:text-base font-black tracking-[0.3em] uppercase font-sans text-blue-200 drop-shadow-[0_2px_10px_rgba(37,99,235,0.5)]">
              TRUSTED BY GLOBAL LEADERS
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustedLogos.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center h-24 group"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-12 max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-slate-200 animate-slide-up"
          >
            <div className="flex items-center justify-between p-5 px-6 border-b border-slate-100 bg-slate-50">
              <h3 className="text-sm sm:text-base font-bold text-slate-950 font-sans">
                {lightbox.title}
              </h3>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-slate-50/40 flex items-center justify-center max-h-[70vh] overflow-auto">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="max-h-[60vh] max-w-full object-contain rounded-2xl shadow-sm bg-white p-2 border border-slate-200/60"
              />
            </div>

            <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-mono text-[11px]">SkyMirr Operations &amp; Facilities</span>
              <button
                onClick={closeLightbox}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all cursor-pointer shadow-sm"
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