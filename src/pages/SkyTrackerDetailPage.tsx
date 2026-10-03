import React, { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  X,
  Sparkles,
  Cpu,
  ZoomIn,
  Shield,
  Activity,
  Radio,
  Layers,
  Zap,
} from "lucide-react";

interface SkyTrackerDetailPageProps {
  onBack: () => void;
  onContact: () => void;
}

interface LightboxState {
  isOpen: boolean;
  src: string;
  title: string;
}

export const SkyTrackerDetailPage: React.FC<SkyTrackerDetailPageProps> = ({
  onBack,
  onContact,
}) => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: "",
    title: "",
  });

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

    const cards = document.querySelectorAll(".tracker-card-animate");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (src: string, title: string) => {
    setLightbox({ isOpen: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const breakthroughPoints = [
    "All-in-one unit with multiple integrated sensors for 24/7 monitoring and instant exception alerts.",
    'Superior signal penetration and up to double the trailer coverage of typical trackers, thanks to advanced antennas and efficient "report-on-demand" design.',
    "Optimized for 600/700 MHz bands—delivering unmatched connectivity in tough environments.",
    "Persistent Wi-Fi mesh maintains real-time cargo monitoring, even inside trailers.",
    "Vertical Height (Z-axis) tracking using barometric sensing pinpoints not just the row, but the exact shelf your cargo occupies.",
  ];

  const keyBenefits = [
    "Receive updates exactly when you need them—real time, on demand.",
    "Instant alerts the moment any threshold is breached.",
    "Know immediately if your cargo is lost, moved, removed, impacted, or exposed to unsafe temperature or humidity.",
    "Respond to critical events in real time—within approximately two minutes.",
    "Cargo Recovery Mode provides immediate notification if boxes separate from pallets or pallets are removed from trailers.",
  ];

  const sensorSpecs = [
    {
      label: "Temperature",
      value: "-20°C to +50°C",
      color: "from-amber-500/20 to-orange-500/20 text-amber-700",
    },
    {
      label: "Humidity",
      value: "0% to 100% RH",
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-700",
    },
    {
      label: "Impact / G-forces",
      value: "0.1g to +10g",
      color: "from-purple-500/20 to-indigo-500/20 text-purple-700",
    },
    {
      label: "Weight",
      value: "0 to 2,000 kg (with remote sensor)",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-700",
    },
    {
      label: "Gyroscope / Orientation",
      value: "X / Y / Z axes",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-700",
    },
    {
      label: "Barometric Altitude",
      value: "Accurate within ~3 feet (Z-axis)",
      color: "from-rose-500/20 to-pink-500/20 text-rose-700",
    },
    {
      label: "GNSS Positioning",
      value: "Accurate within ~10 feet",
      color: "from-sky-500/20 to-blue-500/20 text-sky-700",
    },
    {
      label: "Real-time Event Response",
      value: "Within ~2 minutes",
      color: "from-violet-500/20 to-purple-500/20 text-violet-700",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="pt-[72px] pb-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 text-slate-950 overflow-x-hidden relative"
    >
      {/* Vibrant Ambient Glow Orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-400/15 blur-[160px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-blue-600/15 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-indigo-500/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Top Banner Breadcrumb */}
      <div className="bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-4 px-4 sm:px-8 relative z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 hover:text-blue-700 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </button>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
            <span>Asset Trackers</span>
            <span>/</span>
            <span className="text-blue-700 font-bold bg-blue-100/80 px-3 py-0.5 rounded-full tracking-wider border border-blue-200">
              SkyTracker (LIPA122)
            </span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16 relative z-10">
        {/* ========================================================
            HERO HEADER BANNER WITH QUICK ACTION
            ======================================================== */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 rounded-2xl sm:rounded-[36px] p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-400/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[120px] pointer-events-none" />

          <div className="space-y-6 relative z-10 max-w-3xl">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-[11px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.25em] text-cyan-300 font-bold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              Real-Time IoT Asset Tracking Module
            </div>

            <h1 className="text-3xl sm:text-6xl font-black tracking-tight font-sans leading-tight !text-white">
              <span className="block sm:inline">SkyTracker</span>{" "}
              <span className="block sm:inline text-white">(LIPA122)</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100 font-sans leading-relaxed font-normal">
              Unmatched Real-Time IoT Asset Tracking, barometric shelf-level
              positioning, and active tamper alerts for mission-critical supply
              chains.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://skymirr.com/wp-content/uploads/2026/02/SkyTracker-Data-Sheet-final.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_10px_25px_rgba(6,182,212,0.4)] cursor-pointer hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Download Datasheet</span>
              </a>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer backdrop-blur-md"
              >
                <span>Request Enterprise Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================
            INTRO + NETWORK ARCHITECTURE
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div
            data-index={0}
            className={`tracker-card-animate lg:col-span-7 space-y-6 transition-all duration-700 ease-out ${visibleCards[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="space-y-4 bg-white/90 backdrop-blur-3xl rounded-[32px] p-8 border border-slate-200/90 shadow-xl bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 border border-cyan-200">
                  <Radio className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-sans tracking-tight">
                  The Next Generation in Real-Time Cargo Visibility
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                <strong className="text-slate-950 font-semibold">
                  Introducing SkyMirr SkyTracker:
                </strong>{" "}
                the ultimate real-time IoT asset tracker engineered for critical
                cargo visibility and control—leapfrogging conventional RFID and
                GPS solutions. With SkyTracker, you don't just know where your
                assets have been—you know exactly what's happening now, even
                inside challenging RF environments like trailers and warehouses.
              </p>
            </div>
          </div>

          {/* Network Architecture Preview Card (Clickable Zoom) */}
          <div
            data-index={1}
            className={`tracker-card-animate lg:col-span-5 flex justify-center transition-all duration-700 ease-out ${visibleCards[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div
              onClick={() =>
                openLightbox(
                  "/images/asset_trackers/at1.jpg",
                  "SkyTracker Network Architecture: GPS + Wi-Fi Mesh + 4G LTE",
                )
              }
              className="bg-white/90 backdrop-blur-3xl rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl hover:border-cyan-400 transition-all duration-300 cursor-pointer group w-full bg-gradient-to-br from-white to-indigo-50/40"
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-900 mb-4">
                <span className="text-blue-700 uppercase tracking-wider">
                  Topology Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-cyan-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to zoom</span>
                </span>
              </div>
              <div className="bg-slate-50/90 rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-slate-200/80 shadow-inner">
                <img
                  src="/images/asset_trackers/at1.jpg"
                  alt="SkyTracker Network Diagram"
                  className="max-h-64 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CHALLENGE & SOLUTION BENTO
            ======================================================== */}
        <div
          data-index={2}
          className={`tracker-card-animate grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-out ${visibleCards[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-slate-200/90 space-y-3 shadow-xl bg-gradient-to-br from-white via-rose-50/20 to-orange-50/10">
            <h3 className="text-xs font-bold text-rose-600 uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
              The Challenge: Evolving Risks
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Traditional RFID and GPS tracking are no longer enough for
              high-value shipments. They report past locations but leave you
              blind to immediate risks. Cargo theft and in-transit loss are
              surging to record highs—over 3,600 incidents in the U.S. and
              Canada in 2024 alone—fueled by sophisticated deception-based
              methods.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-[32px] p-6 sm:p-8 text-white space-y-3 shadow-xl border border-blue-500/30">
            <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wider font-mono flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              The Solution: Zero Compromise, Full Control
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
              SkyMirr SkyTracker delivers true real-time asset intelligence
              throughout your cargo's journey. Get instant updates on demand,
              define your safety thresholds once, and let SkyTracker
              automatically alert you the moment conditions cross your limits.
            </p>
          </div>
        </div>

        {/* ========================================================
            HARDWARE PREVIEW (LIPA122)
            ======================================================== */}
        <div
          className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-slate-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8 hover:shadow-2xl hover:border-cyan-400 transition-all cursor-pointer group bg-gradient-to-r from-white via-cyan-50/30 to-blue-50/20"
          onClick={() =>
            openLightbox(
              "/images/asset_trackers/at2.jpg",
              "SkyTracker LIPA122 Hardware Unit",
            )
          }
        >
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-cyan-700 uppercase font-bold bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200">
              Hardware Specification LIPA122
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans group-hover:text-cyan-600 transition-colors">
              SkyTracker LIPA122 Industrial Unit
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
              Robust all-in-one industrial asset tracker with multi-sensor
              integration, barometric Z-axis altitude tracking, and persistent
              Wi-Fi mesh connectivity. Click to inspect high-res preview.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-cyan-50/60 rounded-2xl p-6 border border-slate-200/80 flex items-center justify-center shrink-0 relative shadow-inner">
            <div className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/10 text-slate-700 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              <ZoomIn className="w-4 h-4" />
            </div>
            <img
              src="/images/asset_trackers/at2.jpg"
              alt="SkyTracker Hardware"
              className="max-h-52 w-auto object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* ========================================================
            DUAL-MODE OPERATION FOR TOTAL PROTECTION
            ======================================================== */}
        <div
          data-index={3}
          className={`tracker-card-animate space-y-8 pt-6 border-t border-slate-200/90 transition-all duration-700 ease-out ${visibleCards[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 text-[11px] font-mono font-bold text-cyan-800 uppercase tracking-wider border border-cyan-200">
              Telemetry Switching
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-sans">
              Dual-Mode Operation for Total Protection
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Intelligent multi-tier telemetry switching from standard logistics
              tracking to high-rate recovery beaconing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Normal Logistics Mode */}
            <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-4 bg-gradient-to-br from-white to-blue-50/30 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-blue-700 font-mono uppercase tracking-wider inline-block bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200">
                  ● Normal Logistics Mode
                </span>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Achieve seamless, continuous visibility of both location and
                  cargo condition. Minimize spoilage, damage, and uncertainty
                  for every high-value shipment.
                </p>
              </div>

              <div
                onClick={() =>
                  openLightbox(
                    "/images/asset_trackers/normal-mode.jpg",
                    "Normal Logistics Mode: Continuous Multi-Node Tracking",
                  )
                }
                className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center cursor-pointer group border border-slate-200/80 overflow-hidden shadow-inner mt-4"
              >
                <img
                  src="/images/asset_trackers/normal-mode.jpg"
                  alt="Normal Logistics Mode"
                  className="max-h-56 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>
            </div>

            {/* Recovery Mode */}
            <div className="bg-white/90 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-4 bg-gradient-to-br from-white to-rose-50/30 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-bold text-rose-700 font-mono uppercase tracking-wider inline-block bg-rose-100 px-3.5 py-1 rounded-full border border-rose-200">
                  ● Recovery Mode
                </span>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  Activate rapid response during critical events. If boxes
                  detach from pallets or pallets leave the trailer, SkyTracker
                  instantly issues warnings, putting you in control when every
                  second counts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div
                  onClick={() =>
                    openLightbox(
                      "/images/asset_trackers/recovery-mode1.jpg",
                      "Recovery Mode Alert Notification & Logistics Depot",
                    )
                  }
                  className="bg-slate-50 rounded-2xl p-3 flex items-center justify-center cursor-pointer group border border-slate-200/80 overflow-hidden shadow-inner"
                >
                  <img
                    src="/images/asset_trackers/recovery-mode1.jpg"
                    alt="Recovery Mode Trailer Alert"
                    className="max-h-48 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                </div>

                <div
                  onClick={() =>
                    openLightbox(
                      "/images/asset_trackers/recovery-mode2.jpg",
                      "Real-time Predictive Theft & Geofence Route Monitoring",
                    )
                  }
                  className="bg-slate-50 rounded-2xl p-3 flex items-center justify-center cursor-pointer group border border-slate-200/80 overflow-hidden shadow-inner"
                >
                  <img
                    src="/images/asset_trackers/recovery-mode2.jpg"
                    alt="Predictive Route Monitoring"
                    className="max-h-48 max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breakthrough Technology Checklist */}
        <div
          data-index={4}
          className={`tracker-card-animate space-y-6 pt-6 border-t border-slate-200/90 transition-all duration-700 ease-out ${visibleCards[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h3 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight font-sans">
            Breakthrough Technology, Redefined Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {breakthroughPoints.map((pt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 text-xs sm:text-sm text-slate-700 shadow-sm hover:border-cyan-400 transition-colors bg-gradient-to-br from-white to-blue-50/20"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-normal leading-relaxed">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div
          data-index={5}
          className={`tracker-card-animate space-y-6 pt-6 border-t border-slate-200/90 transition-all duration-700 ease-out ${visibleCards[5] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h3 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight font-sans">
            Key Benefits That Power Your Advantage
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyBenefits.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/90 backdrop-blur-2xl border border-slate-200/90 shadow-sm flex items-start gap-3 text-xs sm:text-sm text-slate-700 hover:border-cyan-400 transition-all bg-gradient-to-br from-white to-indigo-50/20"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-600 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                <span className="font-normal leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PROFESSIONAL ENTERPRISE SENSOR SPECIFICATIONS TABLE
            ======================================================== */}
        <div
          data-index={6}
          className={`tracker-card-animate space-y-6 pt-6 border-t border-slate-200/90 transition-all duration-700 ease-out ${visibleCards[6] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="flex items-center justify-between border-b border-slate-200/90 pb-3">
            <h3 className="text-xs font-bold tracking-widest text-slate-950 uppercase font-mono flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-600" />
              Comprehensive Sensor Coverage &amp; Parameters
            </h3>
            <span className="text-[11px] font-mono text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200 shadow-2xs font-bold">
              Integrated Suite
            </span>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200/90 bg-white shadow-xl backdrop-blur-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white font-mono text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-bold w-1/3">
                      Sensor / Metric
                    </th>
                    <th className="py-4 px-6 font-bold w-2/3">
                      Operational Range / Accuracy
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-sans">
                  {sensorSpecs.map((s, idx) => (
                    <tr
                      key={s.label}
                      className={`transition-colors hover:bg-cyan-50/50 ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                      }`}
                    >
                      <td className="py-4 px-6 font-semibold text-slate-700 font-mono flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-600 shrink-0" />
                        {s.label}
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-slate-950">
                        <span
                          className={`px-3 py-1 rounded-lg bg-gradient-to-r ${s.color} inline-block border border-slate-200/60`}
                        >
                          {s.value}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50/80 border-t border-slate-200/60">
                    <td className="py-4 px-6 font-semibold text-slate-700 font-mono flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                      Compact Dimensions
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-slate-950">
                      4.8 x 3.2 x 0.75 in (122 x 82 x 19 mm)
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-6 font-semibold text-slate-700 font-mono flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" />
                      Battery &amp; Mounting
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-slate-950">
                      Internal rechargeable lithium with optional magnetic
                      mounting
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

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
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-700">
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
