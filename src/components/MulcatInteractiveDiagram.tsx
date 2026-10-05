import React, { useState, useRef } from "react";
import {
  Sparkles,
  Zap,
  Radio,
  Play,
  Pause,
  RotateCcw,
  Info,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sliders,
  ChevronRight,
} from "lucide-react";

interface LayerData {
  id: string;
  name: string;
  category: string;
  spec: string;
  mechanism: string;
  advantage: string;
  conventionalIssue: string;
  yRange: [number, number];
  color: string;
}

const LAYERS: LayerData[] = [
  {
    id: "radiator",
    name: "Upper Parasitic Radiator Array",
    category: "Layer 4 · Radiation Interface",
    spec: "Gain: +5.8 dBi | Efficiency > 85%",
    mechanism: "Multi-element geometric patches coupled with positive constructive phase to expand far-field radiation volume.",
    advantage: "Broadens spatial aperture and multiplies radiation efficiency across sub-6 GHz and mmWave bands.",
    conventionalIssue: "In standard designs, closely packed radiators suffer severe mutual coupling and detune each other.",
    yRange: [120, 175],
    color: "#3b82f6",
  },
  {
    id: "aperture",
    name: "Proprietary Coupling Control Aperture Matrix",
    category: "Layer 3 · Patent-Pending Phase Inversion",
    spec: "Phase Match: Δφ ≈ 0° (In-Phase Superposition)",
    mechanism: "Micro-engineered coupling slots that invert negative parasitic coupling into constructive in-phase energy.",
    advantage: "Converts what used to be destructive interference into amplified radiated RF energy (>100% bandwidth boost).",
    conventionalIssue: "Conventional systems use bulky physical chokes or shield barriers, which add size, weight, and signal loss.",
    yRange: [185, 235],
    color: "#6366f1",
  },
  {
    id: "cavity",
    name: "Primary Dielectric Resonant Cavity",
    category: "Layer 2 · Resonator Substrate",
    spec: "Loss Tangent: tan δ < 0.0018 | High-Q Resonance",
    mechanism: "Low-loss dielectric cavity that stores and phase-aligns electromagnetic field energy before controlled release.",
    advantage: "Stabilizes multi-resonance impedance matching with VSWR < 1.4:1 across multi-carrier 5G frequencies.",
    conventionalIssue: "Standard substrates experience high dielectric absorption and reflection when coupled tightly.",
    yRange: [245, 295],
    color: "#0ea5e9",
  },
  {
    id: "feed",
    name: "Ground Plane & 50Ω Matched Excitation Feed",
    category: "Layer 1 · RF Transmission Base",
    spec: "Impedance: 50Ω | Return Loss: S11 < -22 dB",
    mechanism: "Precision microstrip launch providing transverse electromagnetic excitation while shielding host electronics.",
    advantage: "Shields internal radio modules from back-radiation while ensuring minimal reflection of input power.",
    conventionalIssue: "Poor ground coupling causes back-lobe radiation into battery/PCB and increases SAR levels.",
    yRange: [305, 360],
    color: "#1e293b",
  },
];

export const MulcatInteractiveDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [selectedLayerId, setSelectedLayerId] = useState<string>("aperture");
  const [mode, setMode] = useState<"mulcat" | "conventional">("mulcat");
  const [frequency, setFrequency] = useState<"sub6" | "midband" | "cbrs">("midband");
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    title: string;
    desc: string;
    metric: string;
  } | null>(null);

  const svgRef = useRef<SVGSVGElement>(null);

  const activeLayerData = LAYERS.find(
    (l) => l.id === (activeLayer || selectedLayerId),
  ) || LAYERS[1];

  const handleSvgMouseMove = (
    e: React.MouseEvent<SVGElement>,
    title: string,
    desc: string,
    metric: string,
    layerId: string,
  ) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTooltip({
      visible: true,
      x: Math.min(Math.max(x, 160), rect.width - 160),
      y: Math.max(y - 15, 20),
      title,
      desc,
      metric,
    });
    setActiveLayer(layerId);
  };

  const handleSvgMouseLeave = () => {
    setTooltip(null);
    setActiveLayer(null);
  };

  // Frequency wave multipliers
  const waveFreq = frequency === "sub6" ? 18 : frequency === "midband" ? 28 : 38;
  const waveSpeed = isPlaying ? (frequency === "sub6" ? "6s" : frequency === "midband" ? "4.5s" : "3s") : "0s";

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
      {/* Top Telemetry & Control Ribbon */}
      <div className="bg-[#0b1631] text-white px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white">
                MuLCAT™ Electromagnetic Coupling Engine
              </span>
              <span className="text-[10px] font-mono uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded-full font-semibold">
                Interactive SVG Simulator
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans mt-0.5">
              Multi-Layer Coupling Controlled Antenna Technology (Patents Pending)
            </p>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setMode("mulcat")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              mode === "mulcat"
                ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>MuLCAT™ (Positive Coupling)</span>
          </button>
          <button
            onClick={() => setMode("conventional")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              mode === "conventional"
                ? "bg-amber-600 text-white shadow-[0_0_12px_rgba(217,119,6,0.5)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Conventional (Parasitic Destructive)</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-slate-50/50">
        
        {/* Left Column: Interactive SVG Visualizer (Span 8) */}
        <div className="lg:col-span-8 p-4 sm:p-8 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-slate-200/80">
          
          {/* Simulation Header Indicators */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Frequency Band:
              </span>
              <div className="inline-flex rounded-lg bg-white p-0.5 border border-slate-200 shadow-2xs">
                {(["sub6", "midband", "cbrs"] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setFrequency(b)}
                    className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md transition-colors cursor-pointer ${
                      frequency === b
                        ? "bg-blue-600 text-white shadow-2xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {b === "sub6" ? "Sub-6GHz (3.5 GHz)" : b === "midband" ? "Mid-Band (4.8 GHz)" : "CBRS Wideband"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs font-mono font-semibold shadow-2xs transition-colors cursor-pointer"
                title={isPlaying ? "Pause EM wave simulation" : "Play EM wave simulation"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-blue-600" /> : <Play className="w-3.5 h-3.5 text-blue-600" />}
                <span>{isPlaying ? "Pause Waves" : "Play Waves"}</span>
              </button>
              <button
                onClick={() => {
                  setSelectedLayerId("aperture");
                  setActiveLayer(null);
                  setMode("mulcat");
                }}
                className="p-1.5 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                title="Reset simulation parameters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* SVG Diagram Container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-radial from-slate-900 via-[#0b1631] to-[#070d1e] rounded-2xl p-2 sm:p-4 border border-slate-800 shadow-inner overflow-hidden select-none">
            
            {/* Coordinate Grid Lines in SVG Background */}
            <svg
              ref={svgRef}
              viewBox="0 0 800 480"
              className="w-full h-full"
              onMouseLeave={handleSvgMouseLeave}
            >
              <defs>
                {/* Linear Gradients for Layers */}
                <linearGradient id="radGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="50%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                <linearGradient id="apertureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>

                <linearGradient id="cavityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>

                <linearGradient id="groundGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>

                {/* EM Radiation Field Glow */}
                <radialGradient id="fieldGlow" cx="50%" cy="30%" r="60%">
                  <stop offset="0%" stopColor={mode === "mulcat" ? "#38bdf8" : "#f59e0b"} stopOpacity={mode === "mulcat" ? "0.45" : "0.25"} />
                  <stop offset="60%" stopColor={mode === "mulcat" ? "#2563eb" : "#d97706"} stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                {/* Filter for glowing wavefronts */}
                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Architectural Grid */}
              <g opacity="0.12" stroke="#60a5fa" strokeWidth="0.5">
                {[...Array(9)].map((_, i) => (
                  <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="480" strokeDasharray="3,3" />
                ))}
                {[...Array(6)].map((_, i) => (
                  <line key={`h-${i}`} x1="0" y1={i * 80} x2="800" y2={i * 80} strokeDasharray="3,3" />
                ))}
              </g>

              {/* Center Axis Line */}
              <line x1="400" y1="20" x2="400" y2="460" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4,4" opacity="0.3" />

              {/* ========================================================
                  FAR-FIELD EM WAVEFRONTS (Top Section)
                  ======================================================== */}
              <g className="cursor-pointer">
                {/* Field Background Aura */}
                <ellipse cx="400" cy="110" rx="340" ry="100" fill="url(#fieldGlow)" />

                {/* Concentric Radiating Wavefront Arcs */}
                {mode === "mulcat" ? (
                  // MuLCAT: Constructive, In-phase, smooth amplified wavefront arcs
                  <g filter="url(#glowEffect)">
                    {[1, 2, 3, 4, 5].map((arcIndex) => (
                      <path
                        key={`arc-${arcIndex}`}
                        d={`M ${400 - arcIndex * 60} ${110 - arcIndex * 16} Q 400 ${30 - arcIndex * 10} ${400 + arcIndex * 60} ${110 - arcIndex * 16}`}
                        fill="none"
                        stroke={arcIndex % 2 === 0 ? "#38bdf8" : "#818cf8"}
                        strokeWidth={arcIndex === 3 ? "3.5" : "2"}
                        strokeLinecap="round"
                        opacity={0.85 - arcIndex * 0.12}
                        className={isPlaying ? "animate-pulse" : ""}
                        style={{
                          animationDuration: `${1.2 + arcIndex * 0.3}s`,
                        }}
                        onMouseEnter={(e) =>
                          handleSvgMouseMove(
                            e,
                            "Constructive Far-Field Wavefront",
                            "In-phase superimposed electromagnetic energy radiating with minimal return loss (Gain: +65%, Usable Bandwidth: >100%).",
                            "Phase Coherence: Δφ = 0° | Radiation Efficiency: >88%",
                            "radiator",
                          )
                        }
                      />
                    ))}

                    {/* Field Propagation Direction Vectors */}
                    <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2,3" opacity="0.7">
                      <line x1="320" y1="90" x2="260" y2="35" markerEnd="url(#arrow)" />
                      <line x1="400" y1="80" x2="400" y2="20" markerEnd="url(#arrow)" />
                      <line x1="480" y1="90" x2="540" y2="35" markerEnd="url(#arrow)" />
                    </g>
                    <text x="400" y="28" textAnchor="middle" fill="#7dd3fc" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold" letterSpacing="0.1em">
                      CONSTRUCTIVE EM WAVEFRONT (SUPERPOSITION)
                    </text>
                  </g>
                ) : (
                  // Conventional: Destructive phase interference, distorted, reflected standing waves
                  <g filter="url(#glowEffect)">
                    {[1, 2, 3].map((arcIndex) => (
                      <path
                        key={`dest-arc-${arcIndex}`}
                        d={`M ${400 - arcIndex * 50} ${110 - arcIndex * 12} Q 360 ${65 - arcIndex * 10} 400 ${75} Q 440 ${85} ${400 + arcIndex * 50} ${110 - arcIndex * 12}`}
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        strokeDasharray="4,4"
                        strokeLinecap="round"
                        opacity={0.65 - arcIndex * 0.1}
                        onMouseEnter={(e) =>
                          handleSvgMouseMove(
                            e,
                            "Destructive Phase Cancellation",
                            "Uncontrolled mutual coupling creates out-of-phase reflections (Phase Clash: Δφ ≈ 180°), causing severe signal detuning and high return loss.",
                            "VSWR: >3.2:1 | Reflected Power: ~42%",
                            "aperture",
                          )
                        }
                      />
                    ))}
                    <text x="400" y="32" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold" letterSpacing="0.1em">
                      ⚠ DESTRUCTIVE INTERFERENCE & REFLECTED LOSS (PHASE CLASH)
                    </text>
                  </g>
                )}
              </g>

              {/* ========================================================
                  ANTENNA HARDWARE MULTI-LAYER STACK
                  ======================================================== */}
              
              {/* LAYER 4: UPPER PARASITIC RADIATOR ARRAY */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setSelectedLayerId("radiator")}
                onMouseEnter={(e) =>
                  handleSvgMouseMove(
                    e,
                    "Layer 4: Upper Parasitic Radiator Array",
                    "Synchronized parasitic patches that radiate in-phase energy outward into free space, significantly broadening radiation volume.",
                    "Peak Gain: +5.8 dBi | Efficiency: >85%",
                    "radiator",
                  )
                }
              >
                <rect
                  x="180"
                  y="130"
                  width="440"
                  height="40"
                  rx="8"
                  fill="url(#radGrad)"
                  stroke={activeLayer === "radiator" || selectedLayerId === "radiator" ? "#93c5fd" : "#1d4ed8"}
                  strokeWidth={activeLayer === "radiator" || selectedLayerId === "radiator" ? "3" : "1.5"}
                  opacity={activeLayer && activeLayer !== "radiator" ? "0.45" : "0.95"}
                  className="transition-all duration-300"
                />
                {/* Radiator Patch Cutouts */}
                <rect x="210" y="138" width="60" height="24" rx="4" fill="#0b1631" opacity="0.6" />
                <rect x="310" y="138" width="60" height="24" rx="4" fill="#0b1631" opacity="0.6" />
                <rect x="430" y="138" width="60" height="24" rx="4" fill="#0b1631" opacity="0.6" />
                <rect x="530" y="138" width="60" height="24" rx="4" fill="#0b1631" opacity="0.6" />

                <text x="400" y="155" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="Sora" fontWeight="bold" letterSpacing="0.05em">
                  LAYER 4: UPPER PARASITIC RADIATOR ELEMENTS
                </text>
                <text x="640" y="155" textAnchor="start" fill="#93c5fd" fontSize="10" fontFamily="JetBrains Mono">
                  [+65% Gain]
                </text>
              </g>

              {/* INTER-LAYER COUPLING ARROWS (Between Radiator and Aperture) */}
              <g opacity="0.8">
                {mode === "mulcat" ? (
                  // Constructive up-arrows (Blue/Cyan)
                  [240, 340, 400, 460, 560].map((x, i) => (
                    <g key={`arrow-up-${i}`}>
                      <line x1={x} y1="182" x2={x} y2="172" stroke="#38bdf8" strokeWidth="2" strokeDasharray={isPlaying ? "2,2" : ""} />
                      <polygon points={`${x-3},174 ${x+3},174 ${x},168`} fill="#38bdf8" />
                    </g>
                  ))
                ) : (
                  // Destructive conflicting arrows (Amber/Red)
                  [240, 340, 460, 560].map((x, i) => (
                    <g key={`arrow-clash-${i}`}>
                      <line x1={x} y1="172" x2={x} y2="182" stroke="#f59e0b" strokeWidth="2" strokeDasharray="2,2" />
                      <polygon points={`${x-3},180 ${x+3},180 ${x},186`} fill="#f59e0b" />
                    </g>
                  ))
                )}
              </g>

              {/* LAYER 3: PROPRIETARY COUPLING CONTROL APERTURE MATRIX */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setSelectedLayerId("aperture")}
                onMouseEnter={(e) =>
                  handleSvgMouseMove(
                    e,
                    "Layer 3: Coupling Control Apertures (MuLCAT Core)",
                    "Proprietary multi-layer aperture slots that constructively align coupling phases (Δφ = 0°), eliminating destructive cancellation.",
                    "Coupling Inversion: Positive Superposition | BW: >100%",
                    "aperture",
                  )
                }
              >
                <rect
                  x="150"
                  y="190"
                  width="500"
                  height="45"
                  rx="8"
                  fill="url(#apertureGrad)"
                  stroke={activeLayer === "aperture" || selectedLayerId === "aperture" ? "#c7d2fe" : "#3730a3"}
                  strokeWidth={activeLayer === "aperture" || selectedLayerId === "aperture" ? "3" : "1.5"}
                  opacity={activeLayer && activeLayer !== "aperture" ? "0.45" : "0.95"}
                  className="transition-all duration-300"
                />

                {/* Precision Aperture Slits */}
                {[200, 260, 320, 380, 440, 500, 560].map((slitX, idx) => (
                  <rect
                    key={`slit-${idx}`}
                    x={slitX}
                    y="200"
                    width="24"
                    height="25"
                    rx="3"
                    fill="#0b1631"
                    stroke={mode === "mulcat" ? "#818cf8" : "#f59e0b"}
                    strokeWidth="1.5"
                  />
                ))}

                <text x="400" y="217" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="Sora" fontWeight="bold" letterSpacing="0.05em">
                  LAYER 3: COUPLING CONTROL APERTURE MATRIX (PATENT PENDING)
                </text>
                <text x="670" y="217" textAnchor="start" fill="#a5b4fc" fontSize="10" fontFamily="JetBrains Mono">
                  [Δφ = 0°]
                </text>
              </g>

              {/* LAYER 2: PRIMARY DIELECTRIC RESONANT CAVITY */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setSelectedLayerId("cavity")}
                onMouseEnter={(e) =>
                  handleSvgMouseMove(
                    e,
                    "Layer 2: Dielectric Resonant Cavity",
                    "High-Q ceramic/composite dielectric cavity that concentrates and phase-aligns electromagnetic resonance before transmission.",
                    "Dielectric Constant: εr = 9.8 | tan δ < 0.0018",
                    "cavity",
                  )
                }
              >
                <rect
                  x="130"
                  y="250"
                  width="540"
                  height="48"
                  rx="8"
                  fill="url(#cavityGrad)"
                  stroke={activeLayer === "cavity" || selectedLayerId === "cavity" ? "#bae6fd" : "#0369a1"}
                  strokeWidth={activeLayer === "cavity" || selectedLayerId === "cavity" ? "3" : "1.5"}
                  opacity={activeLayer && activeLayer !== "cavity" ? "0.45" : "0.95"}
                  className="transition-all duration-300"
                />

                {/* Cavity Internal Resonator Markers */}
                {[220, 310, 400, 490, 580].map((cx, idx) => (
                  <circle
                    key={`res-${idx}`}
                    cx={cx}
                    cy="274"
                    r="8"
                    fill="#075985"
                    stroke="#7dd3fc"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                ))}

                <text x="400" y="278" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="Sora" fontWeight="bold" letterSpacing="0.05em">
                  LAYER 2: HIGH-Q DIELECTRIC RESONANT CAVITY
                </text>
                <text x="690" y="278" textAnchor="start" fill="#7dd3fc" fontSize="10" fontFamily="JetBrains Mono">
                  [VSWR &lt; 1.4]
                </text>
              </g>

              {/* LAYER 1: GROUND PLANE & 50-OHM MATCHED EXCITATION FEED */}
              <g
                className="cursor-pointer transition-opacity"
                onClick={() => setSelectedLayerId("feed")}
                onMouseEnter={(e) =>
                  handleSvgMouseMove(
                    e,
                    "Layer 1: Ground Plane & 50Ω Matched Feed",
                    "Copper ground shielding host electronics from back-lobe radiation, paired with ultra-low loss coaxial RF feed input.",
                    "Impedance: 50Ω | Isolation: S12 < -25 dB",
                    "feed",
                  )
                }
              >
                <rect
                  x="100"
                  y="312"
                  width="600"
                  height="45"
                  rx="8"
                  fill="url(#groundGrad)"
                  stroke={activeLayer === "feed" || selectedLayerId === "feed" ? "#e2e8f0" : "#475569"}
                  strokeWidth={activeLayer === "feed" || selectedLayerId === "feed" ? "3" : "1.5"}
                  opacity={activeLayer && activeLayer !== "feed" ? "0.45" : "0.95"}
                  className="transition-all duration-300"
                />

                {/* RF Feed Port Connectors */}
                <rect x="375" y="357" width="50" height="28" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5" />
                <line x1="400" y1="357" x2="400" y2="395" stroke="#38bdf8" strokeWidth="3" />
                <circle cx="400" cy="398" r="5" fill="#38bdf8" />

                <text x="400" y="338" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="Sora" fontWeight="bold" letterSpacing="0.05em">
                  LAYER 1: SOLID GROUND PLANE &amp; 50Ω EXCITATION PORT
                </text>
                <text x="400" y="420" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="JetBrains Mono">
                  RF INPUT (50Ω TX/RX PORT)
                </text>
              </g>

              {/* Live Signal Pulse Flow Along Input Feed */}
              {isPlaying && (
                <circle
                  cx="400"
                  cy="357"
                  r="4"
                  fill="#60a5fa"
                  className="animate-ping"
                  style={{ animationDuration: "1.5s" }}
                />
              )}

              {/* Layer Bracket Annotations on Left */}
              <g stroke="#64748b" strokeWidth="1" opacity="0.6">
                <line x1="80" y1="130" x2="80" y2="357" />
                <line x1="80" y1="130" x2="95" y2="130" />
                <line x1="80" y1="357" x2="95" y2="357" />
                <text x="70" y="248" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="JetBrains Mono" transform="rotate(-90 70 248)">
                  4-LAYER MULTI-CAVITY STACK
                </text>
              </g>
            </svg>

            {/* Precision Floating Tooltip on Hover */}
            {tooltip && tooltip.visible && (
              <div
                className="absolute z-30 pointer-events-none transition-all duration-150 transform -translate-x-1/2 -translate-y-full"
                style={{
                  left: `${tooltip.x}px`,
                  top: `${tooltip.y}px`,
                }}
              >
                <div className="bg-slate-900/95 text-white backdrop-blur-md px-4 py-3 rounded-xl border border-blue-400/40 shadow-[0_12px_28px_rgba(0,0,0,0.5)] max-w-xs space-y-1.5 animate-in fade-in zoom-in-95">
                  <div className="flex items-center gap-1.5 text-blue-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                    <Info className="w-3.5 h-3.5" />
                    <span>{tooltip.title}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans">
                    {tooltip.desc}
                  </p>
                  <div className="pt-1 border-t border-white/10 text-[10px] font-mono text-emerald-400 font-semibold">
                    {tooltip.metric}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Layer Quick Selectors (Buttons) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            {LAYERS.map((layer) => {
              const isSelected = selectedLayerId === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-white border-blue-600 shadow-md ring-2 ring-blue-500/20"
                      : "bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: layer.color }}
                    />
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      {layer.id === "radiator" ? "L4" : layer.id === "aperture" ? "L3" : layer.id === "cavity" ? "L2" : "L1"}
                    </span>
                  </div>
                  <div className="font-display font-bold text-xs text-slate-900 mt-1 line-clamp-1">
                    {layer.name}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Right Column: Layer Inspector & Engineering Benchmarks (Span 4) */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-md">
                {activeLayerData.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Click layer to inspect
              </span>
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-snug">
              {activeLayerData.name}
            </h3>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Engineering Specification
              </span>
              <p className="font-mono text-xs font-bold text-blue-800 tabular-nums">
                {activeLayerData.spec}
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              <p>
                <strong className="text-slate-900 font-semibold">Operational Mechanism: </strong>
                {activeLayerData.mechanism}
              </p>
              <p className="pt-1 text-slate-700">
                <strong className="text-blue-900 font-semibold">MuLCAT™ Breakthrough: </strong>
                {activeLayerData.advantage}
              </p>
            </div>

            {/* Comparison Box */}
            <div className={`p-4 rounded-2xl border transition-all ${
              mode === "mulcat"
                ? "bg-blue-50/70 border-blue-200 text-blue-950"
                : "bg-amber-50/70 border-amber-200 text-amber-950"
            }`}>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-wider">
                {mode === "mulcat" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span>MuLCAT™ Positive Mode Active</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Conventional Antenna Flaw</span>
                  </>
                )}
              </div>
              <p className="text-xs leading-relaxed font-sans">
                {mode === "mulcat" ? activeLayerData.advantage : activeLayerData.conventionalIssue}
              </p>
            </div>
          </div>

          {/* Key Quantitative Metrics Dashboard */}
          <div className="pt-4 border-t border-slate-200/80 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-500">
              Live Coupling Benchmarks
            </span>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 text-white text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Bandwidth Expansion
                </div>
                <div className="font-mono text-xl font-bold text-sky-400 mt-0.5 tabular-nums">
                  {mode === "mulcat" ? ">100%" : "<14%"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-center">
                <div className="text-[10px] font-mono text-blue-100 uppercase tracking-wider">
                  Coupling Alignment
                </div>
                <div className="font-mono text-xl font-bold text-white mt-0.5 tabular-nums">
                  {mode === "mulcat" ? "In-Phase (0°)" : "Clash (180°)"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 text-white text-center">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Impedance Match (VSWR)
                </div>
                <div className="font-mono text-xl font-bold text-emerald-400 mt-0.5 tabular-nums">
                  {mode === "mulcat" ? "< 1.4:1" : "> 3.2:1"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-center">
                <div className="text-[10px] font-mono text-blue-100 uppercase tracking-wider">
                  Radiation Gain
                </div>
                <div className="font-mono text-xl font-bold text-white mt-0.5 tabular-nums">
                  {mode === "mulcat" ? "+65% Boost" : "Baseline"}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
