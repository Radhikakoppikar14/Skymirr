import React from "react";
import { ArrowRight } from "lucide-react";

interface ProductsCatalogProps {
  onSelectCategory?: (category: string) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({
  onSelectCategory,
}) => {
  const products = [
    {
      id: "antennas",
      title: "ANTENNAS",
      subtitle: "SkyBlade™ Sub-6 Ultra-Broadband & MIMO Elements",
      image: "/images/antennas-new.jpg",
      count: "8 Models Available",
    },
    {
      id: "routers",
      title: "5G ROUTERS",
      subtitle: "Sky5G® TCPA 117 — CES 2026 Honoree & Wi-Fi 7",
      image: "/images/5g-routers.jpg",
      count: "T-Mobile & AT&T Certified",
    },
    {
      id: "trackers",
      title: "ASSET TRACKERS",
      subtitle: "LIPA122 Real-Time Multi-Sensor Telemetry",
      image: "/images/asset-trackers-2.jpg",
      count: "GPS + Cellular IoT",
    },
  ];

  return (
    <section
      id="products"
      className="py-20 sm:py-28 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered, widely spaced heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-mono text-[11px] font-medium text-blue-600 mb-4">
            Hardware Engineering
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase"
            style={{ letterSpacing: "0.38em", color: "#172f73", paddingLeft: "0.38em" }}
          >
            Products
          </h2>
          <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed">
            Proprietary antenna-first engineering across three dedicated
            hardware divisions
          </p>
        </div>

        {/* Three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory && onSelectCategory(item.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_10px_30px_-18px_rgba(16, 28, 53,0.25)] cursor-pointer flex flex-col"
            >
              <div data-no-motion className="relative overflow-hidden bg-slate-900 aspect-[16/10]">
                {/* the photos carry their own title along the top edge; the taller, bottom-anchored
                    image keeps that strip out of view so only the live title below is shown */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute left-0 bottom-0 w-full h-[146%] max-w-none object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3
                    className="font-display text-xl sm:text-2xl text-white text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
                    style={{ letterSpacing: "0.14em" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 font-mono text-[11px] text-slate-500">
                    {item.count}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm font-medium text-blue-600">
                  <span>Explore Lineup</span>
                  <span className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};