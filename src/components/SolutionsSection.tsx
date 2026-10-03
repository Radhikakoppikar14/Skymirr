import React, { useState } from "react";
import { ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";

interface SolutionsSectionProps {
  onSelectApplication?: (title: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectApplication,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const applications = [
    {
      id: "residential",
      title: "RESIDENTIAL",
      subtitle: "High-speed Fixed Wireless Access for suburban & rural homes",
      image: "/images/Residential1.jpg",
      stat: "311 ft Radius",
    },
    {
      id: "logistics",
      title: "LOGISTICS",
      subtitle: "Real-time intermodal tracking, temperature & shock monitoring",
      image: "/images/logistics1-1.jpg",
      stat: "Multi-Sensor IoT",
    },
    {
      id: "educational",
      title: "EDUCATIONAL",
      subtitle: "Campus-wide Wi-Fi 7 density and distance-learning continuity",
      image: "/images/Educational1.jpg",
      stat: "512 Clients/Node",
    },
    {
      id: "industrial",
      title: "INDUSTRIAL",
      subtitle: "Heavy machinery, robotics, SCADA & warehouse automation",
      image: "/images/Industrial1.jpg",
      stat: "IP69K Ruggedized",
    },
  ];

  const handleNext = () => setStartIndex((prev) => (prev + 1) % applications.length);
  const handlePrev = () =>
    setStartIndex((prev) => (prev - 1 + applications.length) % applications.length);

  // 3 visible cards at a time
  const visibleApps = [0, 1, 2].map(
    (o) => applications[(startIndex + o) % applications.length],
  );

  const arrowBtn =
    "w-10 h-10 rounded-full border border-slate-200 hover:border-blue-500 bg-white text-slate-600 hover:text-blue-600 hover:shadow-md flex items-center justify-center transition-all cursor-pointer";

  return (
    <section
      id="applications"
      className="py-20 sm:py-28 bg-canvas border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered, widely spaced heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="font-mono text-[11px] font-medium text-blue-600 mb-4">
            Field Implementations
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase"
            style={{ letterSpacing: "0.38em", color: "#172f73", paddingLeft: "0.38em" }}
          >
            Applications
          </h2>
          <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed">
            Turnkey connectivity deployed across residential, supply chain,
            educational, and industrial infrastructures
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 mb-6">
          <button onClick={handlePrev} className={arrowBtn} aria-label="Previous application">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={handleNext} className={arrowBtn} aria-label="Next application">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {visibleApps.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => onSelectApplication && onSelectApplication(item.title)}
              className="group animate-fade-in bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_10px_30px_-18px_rgba(16, 28, 53,0.25)] cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden bg-slate-900 aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
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
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  {item.subtitle}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="px-2.5 py-1 rounded-md bg-blue-50 font-mono text-[11px] text-blue-700">
                    {item.stat}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    View Sector
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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