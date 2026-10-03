import React, { useState, useEffect, useRef } from "react";
import { BannerFX } from "../components/fx/Bannerfx";
import { Send, CheckCircle2, Sparkles, Cpu, Settings } from "lucide-react";

export const ServicesPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

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

    const cards = document.querySelectorAll(".service-card-animate");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      ref={containerRef}
      className="pt-28 sm:pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/60 text-slate-950 overflow-x-hidden relative"
    >
      {/* Ambient Floating Glow Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Page Header Banner */}
      <div className="page-banner bg-executive-gradient text-white py-20 sm:py-28 text-center relative overflow-hidden shadow-xl">
        <BannerFX />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/30 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-200 font-bold backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Custom RF Engineering
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight font-sans text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-text-shimmer">
            Design Services
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto font-medium animate-slide-up-fade">
            From concept to chamber-tested prototype, SkyMirr delivers rapid custom antenna design and system-level RF consulting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Service Descriptions */}
          <div
            data-index={0}
            className={`service-card-animate lg:col-span-7 space-y-6 transition-all duration-700 ease-out ${visibleCards[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-slate-200/80 space-y-4 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Cpu className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-sans tracking-tight">
                  Custom Antenna Design Services
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                SkyMirr delivers rapid, high-performance custom antenna design services that help device makers, OEMs, and system integrators solve complex connectivity challenges fast. Whether you're developing a next-gen IoT solution, enhancing a wireless medical device, or optimizing signal performance in rugged environments, our expert engineering team tailors RF solutions to your exact specifications. From concept to prototype, SkyMirr turns ideas into tested, ready-to-integrate antenna solutions with speed, precision, and unmatched technical support.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-slate-200/80 space-y-4 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-sans tracking-tight">
                  System-Level RF Consulting
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                In addition to antenna design, SkyMirr offers specialized consulting on system-level design to ensure seamless integration and peak performance across your wireless device architecture. We work with your team to optimize RF pathways, reduce interference, improve energy efficiency, and align antenna placement with mechanical and thermal constraints. Whether you're refining an existing product or launching a new platform, our engineers bring deep experience in embedded systems, wireless standards, and certification requirements to accelerate development and reduce costly redesigns.
              </p>
            </div>
          </div>

          {/* Right Column: Light Beige & Native Blue Gradient Highlighted Form Container */}
          <div
            data-index={1}
            className={`service-card-animate lg:col-span-5 transition-all duration-700 ease-out ${visibleCards[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-400 p-[3px] shadow-[0_24px_60px_-16px_rgba(37,99,235,0.35)]">
              <div className="rounded-[30px] bg-gradient-to-br from-white via-[#fcfbfa] to-[#f0f6fc] p-8 sm:p-9 space-y-4 shadow-inner border border-blue-100">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-blue-700 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-200 inline-block mb-3">
                    Engineering Desk
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                    Request an RF Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                    We'd love to hear from you! Please fill out the form and our Melbourne engineering desk will respond within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fade-in my-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                    <h4 className="text-base font-bold text-slate-950">
                      Consultation Request Received
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto font-normal">
                      Thank you! An RF application engineer has been assigned to your request.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-blue-700 hover:underline pt-2 cursor-pointer block mx-auto"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold block">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full h-11 px-4 bg-white border border-blue-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-slate-950 transition-all font-normal shadow-2xs placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold block">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full h-11 px-4 bg-white border border-blue-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-slate-950 transition-all font-normal shadow-2xs placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold block">
                        Work Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="corporate@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full h-11 px-4 bg-white border border-blue-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-slate-950 transition-all font-normal shadow-2xs placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-bold block">
                        Message / Technical Requirements
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Frequency ranges, PCB constraints, enclosure details, or target certifications..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full p-3.5 bg-white border border-blue-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 text-slate-950 transition-all resize-none font-normal shadow-2xs placeholder:text-slate-400"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.45)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Request</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};