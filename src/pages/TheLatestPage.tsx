import React, { useState } from "react";
import { BannerFX } from "../components/fx/Bannerfx";
import { Calendar, ArrowRight, X, Sparkles, Search } from "lucide-react";

interface LatestItem {
  id: string;
  title: string;
  date: string;
  image: string;
  isLogoThumb?: boolean;
  excerpt: string;
  content: string;
}

export const TheLatestPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<LatestItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "press" | "insights"
  >("all");
  const [articleQuery, setArticleQuery] = useState("");

  const items: LatestItem[] = [
    {
      id: "pr-ces2026",
      title:
        "SkyMirr To Showcase Breakthrough Wireless Technologies At CES 2026",
      date: "December 29, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL — December 29, 2025— SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas. Attendees will have the opportunity to see SkyMirr's...",
      content:
        "MELBOURNE, FL — December 29, 2025 — SkyMirr, a leading innovator in antenna-first wireless and IoT connectivity solutions, announced today that it will showcase its latest lineup of high-performance technologies at CES 2026 in Las Vegas.\n\nAttendees will have the opportunity to see SkyMirr's award-winning Sky5G Router, the SkyBlade™ antenna series, and live spherical anechoic chamber test demonstrations showing how MuLCAT® positive coupling control eliminates blind spots in commercial and industrial IoT deployments.",
    },
    {
      id: "pr-tmobile",
      title:
        "SkyMirr's Sky5G Router Achieves Certification On T-Mobile's Network And T-Priority",
      date: "December 11, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL — December 11,2025 SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network. This milestone reinforces SkyMirr's commitment to delivering high-performance wireless solutions..",
      content:
        "MELBOURNE, FL — December 11, 2025 SkyMirr, a leader in IOT/wireless innovation, today announced that its advanced 5G wireless router, Sky5G™, has officially achieved certification for use on T-Mobile's network and T-Priority mission-critical public safety services.\n\nThis certification guarantees seamless compatibility, priority queuing, and verified low-latency performance for enterprise, rural, and first-responder deployments across North America.",
    },
    {
      id: "pr-ces-honoree",
      title:
        "SkyMirr's Sky5G™ Wireless Router Named CES 2026 Innovation Awards® Honoree",
      date: "November 6, 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "MELBOURNE, FL November 6, 2025 SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026..",
      content:
        "MELBOURNE, FL — November 6, 2025 SkyMirr, an antenna-first technology company redefining wireless performance through its breakthrough MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), is honored to announce that its Sky5G™ Wireless Router has been named a CES® 2026 Innovation Awards Honoree.\n\nThe CTA jury commended SkyMirr's internal antenna array which delivers 42% farther reach to cell towers and 2x coverage area compared to typical competitive CPE gateways.",
    },
    {
      id: "pr-mwc",
      title:
        "SkyMirr Launches Sky5G Router At MWC — Setting A New Standard For 5G Connectivity",
      date: "March 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "SkyMirr Launches Sky5G Router at MWC — Setting a New Standard for 5G Connectivity. Breakthrough MuLCAT® antenna technology powers longer reach, higher throughput, and unmatched reliability across rural, urban, and industrial IoT networks",
      content:
        "BARCELONA — Mobile World Congress — SkyMirr today launched its flagship Sky5G Router (TCPA 117), setting a new benchmark for 5G fixed wireless broadband and mobile gateway performance. Leveraging proprietary MuLCAT® electromagnetic positive coupling control, the router delivers unprecedented signal gain across 600 MHz to 6 GHz without bulky external antenna poles.",
    },
    {
      id: "pr-skyblade",
      title:
        "SkyMirr Introduces SkyBlade, The World's First True Global 5G Ultra-Wideband Antenna",
      date: "March 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "SkyMirr, a leading Florida-based provider of high-performance RF devices, proudly announces the SkyBlade, the world's best ultra-wideband external connectorized antenna designed to function seamlessly across all global 4G and 5G sub-6 frequency bands, including challenging new frequencies...",
      content:
        "MELBOURNE, FL — March 2025 — SkyMirr announced the commercial release of the SkyBlade™ antenna family, including the TAMP161, TAMP154, and TAMP141. Designed as a universal drop-in antenna for enterprise cellular gateways and connected vehicles, SkyBlade delivers an industry-first continuous radiation efficiency >80% across the entire 600 MHz to 6000 MHz spectrum.",
    },
    {
      id: "pr-series-a",
      title: "SkyMirr Secures $7.3M Series A Investment Led By Solyco Capital",
      date: "January 2025",
      image: "/images/blogs/skymirr-post-thumb-new.jpg",
      isLogoThumb: true,
      excerpt:
        "This strategic investment will accelerate SkyMirr’s growth in the rapidly expanding IoT and wireless communications markets. Solyco Capital will provide not only financial backing but also critical business and operational guidance to propel SkyMirr’s innovative technologies into broader global adoption.",
      content:
        "MELBOURNE, FL — January 2025 — SkyMirr, Inc. announced the successful closing of a $7.3 Million Series A financing round led by Solyco Capital. The funding supports the expansion of SkyMirr's automated manufacturing facilities in Bac Ninh, Vietnam and Incheon, Korea, and accelerates commercial deployments of the Sky5G router and SkyTracker IoT platform with Tier-1 carriers and enterprise partners.",
    },
    {
      id: "blog-ai-iot",
      title:
        "Applying AI-Driven Wireless Technology In The Internet Of Things To Solve Problems In Energy, Biomedical, And Communications",
      date: "November 2025",
      image: "/images/blogs/ai-driven1.jpg",
      isLogoThumb: false,
      excerpt:
        "Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices equipped with sensors as well as data integration and management software, communicating with each other, often wirelessly.",
      content:
        "Over the past decade or so, the concept of the Internet of Things (IoT) has gained significant popularity worldwide for many applications, referring to a network of various devices equipped with sensors as well as data integration and management software, communicating with each other, often wirelessly.\n\nHowever, real-world deployment challenges persist in hostile electromagnetic environments: utility sub-stations with massive metallic interference, deep indoor commercial basements, and mobile freight containers.\n\nSkyMirr applies positive coupling control principles and machine-learning tuning to dynamically adapt antenna impedance matching in real time. This ensures stable packet delivery, minimal battery drain, and continuous sensor reporting across smart grid metering, continuous patient biosensors, and cold-chain asset telemetry.",
    },
    {
      id: "blog-mulcat",
      title:
        "SkyMirr Introduces Its Patent-Pending Multi-Layer Coupling Controlled Antenna Technology",
      date: "November 2025",
      image: "/images/blogs/Patent-Pending-Multi-Layer1.jpg",
      isLogoThumb: false,
      excerpt:
        "Existing RF technology lacks the capability to meet the IoT demands overall, including wireless healthcare, energy, communications, etc. These significant service application fields require a much better RF technology than existing ones, which often suffer from weak signal or interference.",
      content:
        "Traditional antenna engineering has long treated mutual coupling between tightly packed radiation elements as a detrimental parasitic effect to be minimized through physical separation or lossy decoupling networks. In compact 5G routers and mobile IoT devices, this physical separation is impossible.\n\nDr. Eric (Youngmin) Jo and the SkyMirr R&D team overturned this dogma by developing MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology). Instead of fighting mutual coupling, MuLCAT utilizes controlled multi-layer electromagnetic resonance to constructively couple radiating elements.\n\nThis delivers greater than 100% operational bandwidth, up to 92% increase in recognition distance, and more than 65% higher forward gain without increasing device form factor.",
    },
    {
      id: "blog-biotech",
      title:
        "SkyMirr Inc. Develops Advanced RF Technology For Bio-Tech Medical Breakthrough",
      date: "April 2025",
      image: "/images/blogs/Clinical-services.jpg",
      isLogoThumb: false,
      excerpt:
        'SkyMirr\'s CEO, Eric (Youngmin) Jo notes: "A leading Asian Bio-Tech company contacted us with a challenge to provide a high-performing RF solution for its medical tracking unit. They explained other companies had difficulties to deliver the product at the desired performance and small size level they needed."',
      content:
        "Medical technology and in-body diagnostics require ultra-miniaturized transceivers that function reliably while surrounded by biological tissue, saline solutions, and operating room shielding.\n\nSkyMirr's CEO, Eric (Youngmin) Jo notes: 'A leading Asian Bio-Tech company contacted us with a challenge to provide a high-performing RF solution for its medical tracking unit. They explained other companies had difficulties to deliver the product at the desired performance and small size level they needed.'\n\nSkyMirr engineered the MAEP 103, an ultra-compact NFC coil and Sub-GHz antenna array engineered specifically to penetrate dense tissue and metallic surgical environments. The breakthrough enabled continuous patient telemetry with zero signal degradation.",
    },
  ];

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "press" && item.id.startsWith("pr-")) ||
      (activeFilter === "insights" && !item.id.startsWith("pr-"));
    const query = articleQuery.trim().toLowerCase();
    const matchesQuery =
      !query ||
      [item.title, item.date, item.excerpt, item.content]
        .join(" ")
        .toLowerCase()
        .includes(query);
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-transparent pb-20 pt-[72px] text-slate-950">
      <header className="page-banner bg-executive-gradient relative overflow-hidden px-4 py-14 text-white sm:py-16">
        <BannerFX />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative mx-auto max-w-7xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/95">
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            News &amp; Media Center
          </div>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
            The latest from SkyMirr
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            All the latest corporate news, technology milestones, and
            engineering blogs from SkyMirr.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-7 px-4 pt-10 sm:px-6 lg:px-8">
        <section className="space-y-5" aria-labelledby="latest-list-heading">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2
                id="latest-list-heading"
                className="text-sm font-bold uppercase tracking-wide text-slate-900"
              >
                PRESS RELEASES &amp; INSIGHTS
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {filteredItems.length} Articles Available
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-1 rounded-lg border border-slate-200 bg-white p-1">
                {(
                  [
                    ["all", "All articles"],
                    ["press", "Press releases"],
                    ["insights", "Insights"],
                  ] as const
                ).map(([filter, label]) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                    className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors ${
                      activeFilter === filter
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <label className="flex h-10 min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 sm:w-64">
                <Search className="h-4 w-4 shrink-0 text-slate-500" />
                <input
                  type="search"
                  value={articleQuery}
                  onChange={(event) => setArticleQuery(event.target.value)}
                  placeholder="Search articles"
                  aria-label="Search articles"
                  className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
                />
              </label>
            </div>
          </div>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredItems.map((item, index) => (
                <article
                  key={item.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl flex flex-col justify-between"
                  style={{ animationDelay: `${Math.min(index, 5) * 60}ms` }}
                >
                  {/* Fully Visible & Properly Fitted Image Container */}
                  <div className="relative overflow-hidden bg-white flex items-center justify-center p-6 border-b border-slate-100 h-56 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-44 max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(event) => {
                        (event.target as HTMLImageElement).src =
                          "/images/skymirr-logo-3d.png";
                      }}
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded-full bg-blue-600/90 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wide text-white shadow-md">
                        {item.id.startsWith("pr-")
                          ? "Press Release"
                          : "Insight"}
                      </span>
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col items-start p-6 sm:p-7 flex-1 justify-between">
                    <div className="space-y-3 w-full">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500 font-semibold">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="font-black leading-snug text-slate-950 transition-colors group-hover:text-blue-700 font-sans text-lg">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-3">
                        {item.excerpt}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedItem(item)}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-blue-600 transition-colors hover:text-blue-700 hover:translate-x-1"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-slate-200 bg-white px-5 py-12 text-center text-sm text-slate-600">
              No articles match your search.
            </p>
          )}
        </section>
      </main>

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
                SkyMirr Official Publication
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
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};