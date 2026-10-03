import React, { useState, useEffect, useRef } from 'react';
import { BannerFX } from "../components/fx/Bannerfx";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    product: 'Antenna',
    region: 'North America',
  });
  const [submitted, setSubmitted] = useState(false);
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

    const cards = document.querySelectorAll('.contact-card-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={containerRef} className="pt-28 sm:pt-32 pb-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 text-slate-950 overflow-x-hidden relative">
      
      {/* Background Floating Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Modern Executive Gradient Header */}
      <div className="page-banner bg-executive-gradient text-white py-20 sm:py-28 text-center relative overflow-hidden shadow-xl">
        <BannerFX />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-200 font-bold backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Get In Touch
          </div>
          
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight font-sans text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-text-shimmer">
            Contact Us
          </h1>
          
          <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto font-medium animate-slide-up-fade">
            Connect with our RF engineering specialists, sales team, and executive management.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN: Contact Info + Handshake Photo
              ======================================================== */}
          <div data-index={0} className={`contact-card-animate lg:col-span-5 space-y-6 flex flex-col justify-between transition-all duration-700 ease-out ${visibleCards[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 border border-slate-200/80 shadow-xl space-y-6">
              <h2 className="text-2xl font-black text-slate-950 font-sans tracking-tight">
                Contact Info
              </h2>

              <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-100 text-blue-700 shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="mailto:sales@skymirr.com"
                      className="font-semibold text-blue-700 hover:underline block font-mono text-sm"
                    >
                      sales@skymirr.com
                    </a>
                    <a
                      href="mailto:support@skymirr.com"
                      className="font-semibold text-slate-600 hover:text-blue-700 hover:underline block font-mono text-sm"
                    >
                      support@skymirr.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-100 text-blue-700 shrink-0 shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a
                    href="tel:321-393-1039"
                    className="font-mono font-bold text-slate-950 text-sm hover:text-blue-700"
                  >
                    321-393-1039
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-100 text-blue-700 shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm">
                    930 S. Harbor City Blvd, Suite 403, Melbourne, FL 32901
                  </span>
                </div>
              </div>
            </div>

            {/* Handshake Image */}
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
              <img
                src="/images/contact/walk-in-interview.jpg"
                alt="SkyMirr Client Consultation"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: Get In Touch Form (Dual-Gradient Frame)
              ======================================================== */}
          <div data-index={1} className={`contact-card-animate lg:col-span-7 transition-all duration-700 ease-out ${visibleCards[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-[3px] shadow-2xl h-full">
              <div className="bg-white/95 backdrop-blur-3xl rounded-[30px] p-8 sm:p-10 space-y-6 h-full flex flex-col justify-between">
                
                <div className="border-b border-slate-100 pb-5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200 inline-block mb-3">
                    Priority Desk
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-sans tracking-tight">
                    Get In Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                    Fill in your details below and a SkyMirr RF technical consultant will respond within 24 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-slide-up my-auto">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-7 h-7 animate-bounce" />
                    </div>
                    <h3 className="text-lg font-bold text-emerald-950 font-sans">
                      Thank You for Contacting SkyMirr!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-sm mx-auto font-normal">
                      Your inquiry regarding {formData.product} for {formData.region} has been received. Our engineering and sales team will follow up promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer shadow-2xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-slate-700 font-bold block">
                          First Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="First Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all text-xs font-normal shadow-2xs text-slate-950"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-slate-700 font-bold block">
                          Last Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Last Name"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all text-xs font-normal shadow-2xs text-slate-950"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-slate-700 font-bold block">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Organization"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all text-xs font-normal shadow-2xs text-slate-950"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-slate-700 font-bold block">
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all text-xs font-normal shadow-2xs text-slate-950"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-mono text-slate-700 font-bold block">
                          Product of Interest
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all text-xs font-medium cursor-pointer shadow-2xs text-slate-950"
                        >
                          <option value="Antenna">Antenna (TAMP161, TAMP159, SkyBlade™)</option>
                          <option value="CPE">CPE (Sky5G TCPA 117 Router)</option>
                          <option value="Tracker">Tracker (LIPA122 SkyTracker)</option>
                          <option value="Custom Engineering">Custom RF Design &amp; Consulting</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono text-slate-700 font-bold block">
                          Region <span className="text-red-600">*</span>
                        </label>
                        <select
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all text-xs font-medium cursor-pointer shadow-2xs text-slate-950"
                        >
                          <option value="North America">North America (US &amp; Canada)</option>
                          <option value="Europe">Europe</option>
                          <option value="Asia Pacific">Asia Pacific (Korea, Japan, APAC)</option>
                          <option value="Latin America">Latin America</option>
                          <option value="Middle East & Africa">Middle East &amp; Africa</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.45)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                      >
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
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