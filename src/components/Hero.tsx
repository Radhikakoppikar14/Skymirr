import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LATEST_NEWS } from "../data/skymirrData";
import { HeroBackdrop } from "./fx/HeroBackdrop";
import { usePrefersReducedMotion } from "./fx/useReducedMotion";

interface HeroProps {
  onExploreProducts: () => void;
  onExploreTechnology: () => void;
  onNavigateDetail?: (detail: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onExploreTechnology,
  onNavigateDetail,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const reduced = usePrefersReducedMotion();

  const slides = [
    {
      id: "slider-1",
      title: "SkyMirr's Next-Generation Antennas",
      image: "/images/slider2.jpg",
      target: "products",
    },
    {
      id: "slider-2",
      title: "Sky5G is now AT&T certified",
      image: "/images/slider1.jpg",
      target: "sky5g-router",
    },
  ];

  // Auto-advance: the progress bar of the active dot drives the timing (animationend),
  // so the bar and the slide change are always in sync and hover pauses both.
  // With reduced motion there is no bar, so a plain timer is used instead.
  useEffect(() => {
    if (!reduced || isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reduced, slides.length, isHovered]);

  // Auto-advance ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % LATEST_NEWS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (target: string) => {
    if (target === "sky5g-router") {
      if (onNavigateDetail) onNavigateDetail("sky5g-router");
      else onExploreProducts();
    } else {
      onExploreProducts();
    }
  };

  return (
    <section className="no-reveal relative pt-[72px] lg:pt-[72px] pb-0 overflow-hidden bg-[#0d1830]">
      <HeroBackdrop />

      {/* HERO SLIDER */}
      <div className="fx-hero-media relative mt-6 mx-4 sm:mx-6 lg:mx-auto lg:max-w-7xl">
        {/* soft light under the frame */}
        <div aria-hidden="true" className="fx-slider-glow" />

        {/* gradient hairline frame */}
        <div className="rounded-[26px] p-[1.5px] bg-gradient-to-br from-white/35 via-blue-400/25 to-indigo-400/35 shadow-[0_40px_90px_-35px_rgba(37,99,235,0.55)]">
          <div
            className="fx-slider group no-lift relative overflow-hidden rounded-3xl bg-[#0b2350]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[1920/688]">
              {slides.map((slide, index) => {
                const state =
                  index === currentSlide ? "active" : index < currentSlide ? "prev" : "next";
                return (
                  <div
                    key={slide.id}
                    data-state={state}
                    onClick={() => handleSlideClick(slide.target)}
                    aria-hidden={state !== "active"}
                    className="fx-slide cursor-pointer"
                  >
                    {/* blurred copy fills any spare space, so the real image is never cropped */}
                    <img
                      src={slide.image}
                      alt=""
                      aria-hidden="true"
                      className="fx-slide-bg"
                    />
                    <img src={slide.image} alt={slide.title} className="fx-slide-img" />
                  </div>
                );
              })}
              {/* glass sheen on top of the artwork */}
              <div aria-hidden="true" className="fx-slider-sheen" />
            </div>
          </div>
        </div>

        {/* Controls sit BELOW the image so they never cover the artwork */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={prevSlide}
            className="fx-slider-btn"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => {
              const active = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`fx-dot ${active ? "is-active" : ""}`}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={active}
                >
                  {active && (
                    <span
                      key={currentSlide}
                      className="fx-dot-fill"
                      style={{ animationPlayState: isHovered ? "paused" : "running" }}
                      onAnimationEnd={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="fx-slider-btn"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* News Ticker - Bolder & Larger Text */}
      <div className="fx-hero-ticker mt-6 border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 sm:flex sm:justify-between sm:gap-4">
          <div className="contents sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:gap-4">
            <span className="col-start-1 row-start-1 inline-flex items-center gap-2 text-xs sm:text-lg font-bold text-sky-400 shrink-0">
              <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
              Latest @ SkyMirr
            </span>
            <a
              key={tickerIndex}
              href={LATEST_NEWS[tickerIndex]?.link || "#"}
              target="_blank"
              rel="noreferrer"
              className="fx-ticker-swap col-span-2 row-start-2 min-w-0 break-words text-sm leading-snug font-bold text-white hover:text-sky-300 transition-colors cursor-pointer sm:col-span-1 sm:row-auto sm:flex-1 sm:truncate sm:whitespace-nowrap sm:text-lg"
            >
              {LATEST_NEWS[tickerIndex]?.title || LATEST_NEWS[0].title}
            </a>
          </div>

          <div className="col-start-2 row-start-1 flex items-center gap-1 shrink-0 sm:col-auto sm:row-auto">
            <button
              onClick={() =>
                setTickerIndex(
                  (prev) =>
                    (prev - 1 + LATEST_NEWS.length) % LATEST_NEWS.length,
                )
              }
              className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous news"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setTickerIndex((prev) => (prev + 1) % LATEST_NEWS.length)
              }
              className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next news"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};