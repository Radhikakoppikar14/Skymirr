import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100/90 backdrop-blur-xl text-slate-700 border-t border-slate-200/80 transition-colors">
      {/* Main Top Footer Section matching exact skymirr.com layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-10">
          {/* Left Block: Logo + Social Media */}
          <div className="space-y-4">
            <a href="#/" className="inline-block group">
              <img
                src="/images/about/SkyMirr-new-logo-footer.png"
                alt="SkyMirr BE AMAZED"
                className="h-12 sm:h-14 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/skymirr-logo-3d.png";
                }}
              />
            </a>

            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 font-sans">
                FIND US ON SOCIAL MEDIA
              </div>

              {/* Exact Dark-Blue Circular Social Icons from screenshot */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/skymirr_inc/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/company/skymirr/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@skymirr"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-800 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href="https://twitter.com/skymirr_inc"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-800 hover:bg-black text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-95"
                  aria-label="SkyMirr X"
                >
                  {/* Custom X Logo icon */}
                  <span className="font-bold text-xs font-sans">𝕏</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Big Telephone + Coral Email + Physical Address */}
          <div className="text-left md:text-right space-y-1.5 font-sans">
            <div>
              <a
                href="tel:321-393-1039"
                className="text-2xl sm:text-3xl font-extrabold text-emerald-900 hover:text-emerald-700 transition-colors tracking-tight font-sans inline-block hover:scale-[1.02] transform origin-right"
              >
                321-393-1039
              </a>
            </div>

            <div>
              <a
                href="mailto:sales@skymirr.com"
                className="text-sm sm:text-base font-semibold text-emerald-700 hover:text-emerald-900 transition-colors inline-block"
              >
                sales@skymirr.com
              </a>
            </div>

            <div className="text-xs text-slate-600 leading-snug pt-1 font-normal">
              <p>930 S. Harbor City Blvd</p>
              <p>Suite 403</p>
              <p>Melbourne, FL 32901</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grey Copyright Bar matching exact skymirr.com layout */}
      <div className="bg-emerald-50 text-slate-700 text-xs py-3.5 text-center border-t border-emerald-100 font-sans">
        <p className="font-medium tracking-wide">
          SkyMirr &copy; 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
