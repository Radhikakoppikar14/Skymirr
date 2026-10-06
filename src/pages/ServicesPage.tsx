import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Sparkles,
  Cpu,
  Settings,
  ShieldCheck,
  Activity,
  Radio,
  Clock,
  MapPin,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { LiveWaveCanvas } from "../components/fx/LiveWaveCanvas";

export const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"antenna" | "consulting" | "chamber" | "carrier">("antenna");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    serviceType: "Custom Antenna Design",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    {
      id: "antenna",
      title: "Custom Antenna Design Services",
      shortTitle: "Antenna Design",
      icon: <Cpu className="w-5 h-5 text-[#0a68a8]" />,
      tagline: "Tailored Sub-6, IoT, and Wearable Antenna Systems",
      description:
        "SkyMirr delivers rapid, high-performance custom antenna design services that help device makers, OEMs, and system integrators solve complex connectivity challenges fast. Whether you're developing a next-gen IoT solution, enhancing a wireless medical device, or optimizing signal performance in rugged environments, our expert engineering team tailors RF solutions to your exact specifications. From concept to prototype, SkyMirr turns ideas into tested, ready-to-integrate antenna solutions with speed, precision, and unmatched technical support.",
      deliverables: [
        "Full 3D electromagnetic CAD simulation & tuning",
        "Prototypes with verified S11, VSWR, and radiation efficiency",
        "Enclosure & ground plane optimization for embedded layouts",
        "Custom cable, connector, and PCB transition integration",
      ],
      turnaround: "Rapid Prototype in 2-3 Weeks",
    },
    {
      id: "consulting",
      title: "System-Level RF Consulting",
      shortTitle: "RF Consulting",
      icon: <Settings className="w-5 h-5 text-[#0a68a8]" />,
      tagline: "Holistic Device Architecture & Interference Elimination",
      description:
        "In addition to antenna design, SkyMirr offers specialized consulting on system-level design to ensure seamless integration and peak performance across your wireless device architecture. We work with your team to optimize RF pathways, reduce interference, improve energy efficiency, and align antenna placement with mechanical and thermal constraints. Whether you're refining an existing product or launching a new platform, our engineers bring deep experience in embedded systems, wireless standards, and certification requirements to accelerate development and reduce costly redesigns.",
      deliverables: [
        "Noise floor mitigation & co-existence analysis",
        "Thermal & mechanical constraint co-design",
        "Antenna placement & decoupling strategy",
        "Power amplifier matching & receiver sensitivity audit",
      ],
      turnaround: "Direct Engineering Access",
    },
    {
      id: "chamber",
      title: "3D Spherical Anechoic Chamber Testing",
      shortTitle: "Chamber Testing",
      icon: <Radio className="w-5 h-5 text-[#0a68a8]" />,
      tagline: "Over-the-Air (OTA) Radiated Performance Verification",
      description:
        "Our Incheon R&D center houses full 3D spherical anechoic chambers capable of precision Total Radiated Power (TRP) and Total Isotropic Sensitivity (TIS) characterization across 600 MHz to 6000 MHz. Gain full visibility into directional radiation patterns before submitting devices to official carrier testing.",
      deliverables: [
        "Full 360° spherical 2D and 3D radiation gain plots",
        "TRP / TIS carrier pre-test qualification",
        "Passive S-parameter port-to-port isolation reports",
        "Fine-tuning recommendations from senior RF fellows",
      ],
      turnaround: "Test Reports Within 48 Hours",
    },
    {
      id: "carrier",
      title: "Carrier & Pre-Certification Compliance",
      shortTitle: "Pre-Certification",
      icon: <ShieldCheck className="w-5 h-5 text-[#0a68a8]" />,
      tagline: "PTCRB, FCC, AT&T, and T-Mobile First-Time Pass Assurance",
      description:
        "Avoid multi-month delays and expensive redesigns. SkyMirr guides your product through strict PTCRB, FCC, CE, AT&T, and T-Mobile certification requirements with pre-compliance diagnostics and tuning.",
      deliverables: [
        "Carrier OTA qualification gap analysis",
        "FCC Part 15 / SAR compliance consultation",
        "Carrier priority queuing verification (e.g. T-Priority)",
        "Documentation & lab submission management",
      ],
      turnaround: "First-Pass Certification Rate >95%",
    },
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="pt-20 sm:pt-24 pb-24 bg-[#f7fbff] text-[#0b1f3a] overflow-x-hidden relative">
      
      {/* ============================================================== */}
      {/* 1. EXECUTIVE HERO COMMAND DECK (ZERO BACKGROUND IMAGE)          */}
      {/* ============================================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#030d20] via-[#09264a] to-[#030d20] text-white py-16 sm:py-24">
        
        {/* Live Electromagnetic Sinusoidal Wave Canvas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <LiveWaveCanvas
            frequency={0.016}
            amplitude={28}
            speed={0.02}
            colorScheme="cyan"
            interactive={true}
            showParticles={true}
          />
          <div className="absolute inset-0 bg-[radial-gradient(#18a6be_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b2f58] border border-[#0ea5e0]/40 text-xs font-mono font-bold tracking-widest uppercase text-[#8fd3ec]">
            <Sparkles className="w-3.5 h-3.5 text-[#8fd3ec] animate-pulse" />
            <span>Custom RF Engineering &amp; Consulting</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Design &amp; Consulting Services
            </h1>
            <p className="text-base sm:text-lg text-[#d4e8f7] leading-relaxed font-normal">
              From concept to chamber-tested prototype, SkyMirr delivers rapid custom antenna design and system-level RF consulting to help innovators build smarter, connected products faster.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-[#d4e8f7]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8fd3ec]" />
              <span>Response Within 24 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8fd3ec]" />
              <span>Full 3D Spherical Chamber In-House</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. INTERACTIVE SERVICE WORKBENCH                                */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* Service Category Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-2.5 rounded-3xl border border-[#dce8f2] shadow-xl">
          {services.map((svc) => {
            const isActive = svc.id === activeTab;
            return (
              <button
                key={svc.id}
                onClick={() => setActiveTab(svc.id as any)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? "bg-[#0a68a8] text-white shadow-md shadow-[#0a68a8]/30 -translate-y-0.5"
                    : "hover:bg-[#eaf4fc] text-[#55708a] hover:text-[#0b1f3a]"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#0a68a8]"}>
                  {svc.icon}
                </span>
                <span className="text-xs font-bold font-sans tracking-wide">
                  {svc.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Stage */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#dce8f2] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Description & Deliverables (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0a68a8]">
                {currentService.turnaround}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0b1f3a] font-sans">
                {currentService.title}
              </h2>
              <p className="text-xs font-mono text-[#0ea5e0] font-bold">
                {currentService.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#55708a] leading-relaxed">
              {currentService.description}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-[#0b1f3a] uppercase tracking-wider block">
                Scope &amp; Deliverables Included:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f7fbff] border border-[#dce8f2]">
                    <CheckCircle2 className="w-4 h-4 text-[#0a68a8] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#0b1f3a] font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Engineering Intake Form (Span 5) */}
          <div className="lg:col-span-5 bg-[#f7fbff] rounded-2xl p-6 sm:p-8 border border-[#dce8f2] shadow-inner space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#0a68a8] bg-[#eaf4fc] px-3 py-1 rounded-full border border-[#8fd3ec]/40 inline-block mb-2">
                Engineering Desk
              </span>
              <h3 className="text-xl font-black text-[#0b1f3a]">
                Request an RF Consultation
              </h3>
              <p className="text-xs text-[#55708a] mt-1">
                Melbourne, FL engineering desk responds within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-200">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-[#0b1f3a]">
                  Inquiry Received
                </h4>
                <p className="text-xs text-[#55708a]">
                  An application engineer will review your specifications and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#0a68a8] hover:underline block mx-auto cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-[#0b1f3a] font-bold block">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-10 px-3 bg-white border border-[#dce8f2] rounded-xl outline-none focus:border-[#0a68a8] text-[#0b1f3a]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-[#0b1f3a] font-bold block">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-10 px-3 bg-white border border-[#dce8f2] rounded-xl outline-none focus:border-[#0a68a8] text-[#0b1f3a]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#0b1f3a] font-bold block">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="corporate@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-10 px-3 bg-white border border-[#dce8f2] rounded-xl outline-none focus:border-[#0a68a8] text-[#0b1f3a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-[#0b1f3a] font-bold block">Requirements / Frequencies</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Target bands (e.g. 600-6000MHz), PCB constraints, enclosure details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-white border border-[#dce8f2] rounded-xl outline-none focus:border-[#0a68a8] text-[#0b1f3a] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0a68a8] to-[#0ea5e0] hover:from-[#0a5a92] hover:to-[#0a68a8] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer hover:-translate-y-0.5"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>

        </div>

      </section>

    </div>
  );
};
