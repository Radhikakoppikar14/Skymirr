import React, { useState, useEffect, useRef } from 'react';
import { BannerFX } from "../components/fx/Bannerfx";
import { Calendar, ArrowRight, X, Sparkles, Layers } from 'lucide-react';

interface PressItem {
  id: string;
  title: string;
  date: string;
  image: string;
  isLogoThumb?: boolean;
  excerpt: string;
  content: string;
}

interface PressReleasesPageProps {
  onNavigateBlog?: () => void;
}

export const PressReleasesPage: React.FC<PressReleasesPageProps> = ({ onNavigateBlog }) => {
  const [selectedItem, setSelectedItem] = useState<PressItem | null>(null);
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

    const cards = document.querySelectorAll('.press-card-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const items: PressItem[] = [
    {
      id: 'pr-ces2026',
      title: 'SkyMirr To Showcase Breakthrough Wireless Technologies At CES 2026',
      date: 'December 29, 2025',
      image: '/images/blogs/skymirr-post-thumb-new.jpg',
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL — December 29, 2025— SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas. Attendees will have the opportunity to see SkyMirr's...",
      content:
        "MELBOURNE, FL — December 29, 2025 — SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas.\n\nAttendees will have the opportunity to see SkyMirr's award-winning Sky5G Router, the SkyBlade™ antenna series, and live spherical anechoic chamber test demonstrations showing how MuLCAT® positive coupling control eliminates blind spots in commercial and industrial IoT deployments.",
    },
    {
      id: 'pr-tmobile',
      title: "SkyMirr's Sky5G Router Achieves Certification On T-Mobile's Network And T-Priority",
      date: 'December 11, 2025',
      image: '/images/blogs/skymirr-post-thumb-new.jpg',
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL — December 11,2025 SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network. This milestone reinforces SkyMirr's commitment to delivering high-performance wireless solutions..",
      content:
        "MELBOURNE, FL — December 11, 2025 SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network and T-Priority mission-critical public safety services.\n\nThis certification guarantees seamless compatibility, priority queuing, and verified low-latency performance for enterprise, rural, and first-responder deployments across North America.",
    },
    {
      id: 'pr-ces-honoree',
      title: "SkyMirr's Sky5G™ Wireless Router Named CES 2026 Innovation Awards® Honoree",
      date: 'November 6, 2025',
      image: '/images/blogs/skymirr-post-thumb-new.jpg',
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL November 6, 2025 SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026..",
      content:
        "MELBOURNE, FL — November 6, 2025 SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Innovation Awards Honoree.\n\nThe CTA jury commended SkyMirr's internal antenna array which delivers 42% farther reach to cell towers and 2x coverage area compared to typical competitive CPE gateways.",
    },
    {
      id: 'pr-mwc',
      title: 'SkyMirr Launches Sky5G Router At MWC — Setting A New Standard For 5G Connectivity',
      date: 'March 2025',
      image: '/images/blogs/skymirr-post-thumb-new.jpg',
      isLogoThumb: true,
      excerpt:
        'SkyMirr Launches Sky5G Router at MWC — Setting a New Standard for 5G Connectivity. Breakthrough MuLCAT® antenna technology powers longer reach, higher throughput, and unmatched reliability across rural, urban, and industrial IoT networks',
      content:
        'BARCELONA — Mobile World Congress — SkyMirr today launched its flagship Sky5G Router (TCPA 117), setting a new benchmark for 5G fixed wireless broadband and mobile gateway performance. Leveraging proprietary MuLCAT® electromagnetic positive coupling control, the router delivers unprecedented signal gain across 600 MHz to 6 GHz without bulky external antenna poles.',
    },
    {
      id: 'pr-skyblade',
      title: "SkyMirr Introduces SkyBlade, The World's First True Global 5G Ultra-Wideband Antenna",
      date: 'March 2025',
      image: '/images/blogs/skymirr-post-thumb-new.jpg',
      isLogoThumb: true,
      excerpt:
        "SkyMirr, a leading Florida-based provider of high-performance RF devices, proudly announces the SkyBlade, the world's best ultra-wideband external connectorized antenna designed to function seamlessly across all global 4G and 5G sub-6 frequency bands, including challenging new frequencies...",
      content:
        "MELBOURNE, FL — March 2025 — SkyMirr announced the commercial release of the SkyBlade™ antenna family, including the TAMP161, TAMP154, and TAMP141. Designed as a universal drop-in antenna for enterprise cellular gateways and connected vehicles, SkyBlade delivers an industry-first continuous radiation efficiency >80% across the entire 600 MHz to 6000 MHz spectrum.",
    },
    {
      id: 'pr-series-a',
      title: 'SkyMirr Secures $7.3M Series A Investment Led By Solyco Capital',
      date: 'January 2025',
      image: '/images/blogs/skymirr-post-thumb-new.jpg',
      isLogoThumb: true,
      excerpt:
        'This strategic investment will accelerate SkyMirr’s growth in the rapidly expanding IoT and wireless communications markets. Solyco Capital will provide not only financial backing but also critical business and operational guidance to propel SkyMirr’s innovative technologies into broader global adoption.',
      content:
        "MELBOURNE, FL — January 2025 — SkyMirr, Inc. announced the successful closing of a $7.3 Million Series A financing round led by Solyco Capital. The funding supports the expansion of SkyMirr's automated manufacturing facilities in Bac Ninh, Vietnam and Incheon, Korea, and accelerates commercial deployments of the Sky5G router and SkyTracker IoT platform with Tier-1 carriers and enterprise partners.",
    },
    {
      id: 'blog-ai-iot',
      title: 'Applying AI-Driven Wireless Technology In The Internet Of Things To Solve Problems In Energy, Biomedical, And Communications',
      date: 'November 2025',
      image: '/images/blogs/ai-driven1.jpg',
      isLogoThumb: false,
      excerpt:
        'Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices equipped with sensors as well as data integration and management software, communicating with each other, often wirelessly.',
      content:
        'Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices equipped with sensors as well as data integration and management software, communicating with each other, often wirelessly.\n\nHowever, real-world deployment challenges persist in hostile electromagnetic environments: utility sub-stations with massive metallic interference, deep indoor commercial basements, and mobile freight containers.\n\nSkyMirr applies positive coupling control principles and machine-learning tuning to dynamically adapt antenna impedance matching in real time. This ensures stable packet delivery, minimal battery drain, and continuous sensor reporting across smart grid metering, continuous patient biosensors, and cold-chain asset telemetry.',
    },
    {
      id: 'blog-mulcat',
      title: 'SkyMirr Introduces Its Patent-Pending Multi-Layer Coupling Controlled Antenna Technology',
      date: 'November 2025',
      image: '/images/blogs/Patent-Pending-Multi-Layer1.jpg',
      isLogoThumb: false,
      excerpt:
        'Existing RF technology lacks the capability to meet the IoT demands overall, including wireless healthcare, energy, communications, etc. These significant service application fields require a much better RF technology than existing ones, which often suffer from weak signal or interference.',
      content:
        "Traditional antenna engineering has long treated mutual coupling between tightly packed radiation elements as a detrimental parasitic effect to be minimized through physical separation or lossy decoupling networks. In compact 5G routers and mobile IoT devices, this physical separation is impossible.\n\nDr. Eric (Youngmin) Jo and the SkyMirr R&D team overturned this dogma by developing MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology). Instead of fighting mutual coupling, MuLCAT utilizes controlled multi-layer electromagnetic resonance to constructively couple radiating elements.\n\nThis delivers greater than 100% operational bandwidth, up to 92% increase in recognition distance, and more than 65% higher forward gain without increasing device form factor.",
    },
    {
      id: 'blog-biotech',
      title: 'SkyMirr Inc. Develops Advanced RF Technology For Bio-Tech Medical Breakthrough',
      date: 'April 2025',
      image: '/images/blogs/Clinical-services.jpg',
      isLogoThumb: false,
      excerpt:
        'SkyMirr\'s CEO, Eric (Youngmin) Jo notes: "A leading Asian Bio-Tech company contacted us with a challenge to provide a high-performing RF solution for its medical tracking unit. They explained other companies had difficulties to deliver the product at the desired performance and small size level they needed."',
      content:
        "Medical technology and in-body diagnostics require ultra-miniaturized transceivers that function reliably while surrounded by biological tissue, saline solutions, and operating room shielding.\n\nSkyMirr's CEO, Eric (Youngmin) Jo notes: 'A leading Asian Bio-Tech company contacted us with a challenge to provide a high-performing RF solution for its medical tracking unit. They explained other companies had difficulties to deliver the product at the desired performance and small size level they needed.'\n\nSkyMirr engineered the MAEP 103, an ultra-compact NFC coil and Sub-GHz antenna array engineered specifically to penetrate dense tissue and metallic surgical environments. The breakthrough enabled continuous patient telemetry with zero signal degradation.",
    },
  ];

  return (
    <div ref={containerRef} className="pt-28 sm:pt-32 pb-24 bg-transparent text-slate-950 overflow-x-hidden relative">
      
      {/* Background Floating Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Modern Executive Gradient Header */}
      <div className="page-banner bg-executive-gradient text-white py-20 sm:py-28 text-left relative overflow-hidden">
        <BannerFX />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-200 font-bold backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Press &amp; Media Center
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight font-sans text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-text-shimmer">
            Press Releases
          </h1>
          
          <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl font-medium animate-slide-up-fade">
            Explore SkyMirr's official announcements, product launches, and technological breakthroughs.
          </p>

          {onNavigateBlog && (
            <div className="pt-2">
              <button
                onClick={onNavigateBlog}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-200 hover:text-white underline cursor-pointer"
              >
                <span>View related blogs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-8 relative z-10">
        
        {/* Section title */}
        <div className="border-b border-slate-200/90 pb-3 flex items-center justify-between">
          <h2 className="text-xs font-bold tracking-widest text-slate-950 uppercase font-mono flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            OFFICIAL PUBLICATIONS ({items.length})
          </h2>
        </div>

        {/* Uniform 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const isVisible = visibleCards[idx];

            return (
              <div
                key={item.id}
                data-index={idx}
                className={`press-card-animate bg-white/90 backdrop-blur-2xl rounded-3xl border border-slate-200/80 shadow-xl hover:shadow-2xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div>
                  <div className="h-48 bg-white flex items-center justify-center p-6 border-b border-slate-100 relative overflow-hidden shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/skymirr-logo-3d.png';
                      }}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[9px] font-mono font-bold uppercase tracking-wider shadow-md">
                        Publication
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-lg font-black text-slate-950 group-hover:text-blue-700 transition-colors tracking-tight font-sans line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100/60 mt-2">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700 hover:underline cursor-pointer group-hover:translate-x-1 transition-all"
                  >
                    <span>Read Full Release</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Reading Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-slate-200 animate-slide-up"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold">
                SkyMirr Official Press Release
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>{selectedItem.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-sans tracking-tight leading-snug">
                {selectedItem.title}
              </h3>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line pt-3 border-t border-slate-100 font-normal">
                {selectedItem.content}
              </div>
            </div>

            <div className="p-5 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 text-[11px]">
                SkyMirr Media &amp; Publications
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                Close Release
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};