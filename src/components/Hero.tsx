import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { LATEST_NEWS } from "../data/skymirrData";
import { usePrefersReducedMotion } from "./fx/useReducedMotion";

interface HeroProps {
  onExploreProducts: () => void;
  onExploreTechnology: () => void;
  onNavigateDetail?: (detail: string) => void;
}

const SLIDES = [
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

/* Live background: signal rings radiating from an antenna point + a drifting network. */
const SignalField: React.FC<{ reduced: boolean }> = ({ reduced }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    let w = 0, h = 0, raf = 0, visible = true, last = performance.now(), sinceRing = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rings: number[] = [0.15];
    const pts = Array.from({ length: 48 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00002, vy: (Math.random() - 0.5) * 0.00002,
      r: 0.8 + Math.random() * 1.6,
    }));

    const resize = () => {
      w = host.clientWidth; h = host.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const ox = w * 0.5, oy = h * 0.6, max = Math.max(w, h) * 0.75;
      for (const p of rings) {
        ctx.beginPath();
        ctx.arc(ox, oy, p * max, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(143,211,236,${0.26 * (1 - p)})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      const link = Math.min(150, w * 0.18);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i], ax = a.x * w, ay = a.y * h;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(ax - b.x * w, ay - b.y * h);
          if (d < link) {
            ctx.strokeStyle = `rgba(56,182,224,${0.18 * (1 - d / link)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(b.x * w, b.y * h); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(182,214,240,0.55)";
        ctx.beginPath(); ctx.arc(ax, ay, a.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64); last = now;
      if (visible && !document.hidden) {
        sinceRing += dt;
        if (sinceRing > 2400) { rings.push(0); sinceRing = 0; }
        for (let i = rings.length - 1; i >= 0; i--) {
          rings[i] += dt / 9000;
          if (rings[i] >= 1) rings.splice(i, 1);
        }
        for (const p of pts) {
          p.x += p.vx * dt * 60; p.y += p.vy * dt * 60;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        }
        draw();
      }
      raf = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(host);
    resize();
    if (!reduced) raf = requestAnimationFrame(tick);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [reduced]);

  return <canvas ref={ref} className="hy-canvas" />;
};

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onNavigateDetail }) => {
  const [slide, setSlide] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const prevSlide = useRef(0);
  const [news, setNews] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const touchX = useRef<number | null>(null);

  const total = SLIDES.length;
  const go = (d: number) => setSlide((p) => (p + d + total) % total);
  const goNews = (d: number) => setNews((p) => (p + d + LATEST_NEWS.length) % LATEST_NEWS.length);

  // Keep the outgoing slide visible underneath while the new one wipes in.
  useEffect(() => {
    if (prevSlide.current === slide) return;
    setLeaving(prevSlide.current);
    prevSlide.current = slide;
    const t = setTimeout(() => setLeaving(null), 1300);
    return () => clearTimeout(t);
  }, [slide]);

  // With motion the active segment's progress bar drives timing; with reduced motion use a timer.
  useEffect(() => {
    if (!reduced || paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, paused]);

  useEffect(() => {
    const t = setInterval(() => goNews(1), 4500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const open = (target: string) => {
    if (target === "sky5g-router" && onNavigateDetail) onNavigateDetail("sky5g-router");
    else onExploreProducts();
  };

  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
  };

  // Subtle 3D tilt + moving light that follows the cursor over the stage.
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - y) * 3.2).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 4.2).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const item = LATEST_NEWS[news] ?? LATEST_NEWS[0];

  return (
    <section className="hy no-reveal" data-no-motion>
      <div aria-hidden="true" className="hy-bg">
        <div className="hy-aurora" />
        <div className="sm-hero-grid" />
        <SignalField reduced={reduced} />
      </div>

      <div className="hy-wrap">
        {/* News line */}
        <div className="hy-strip sm-rise">
          <span className="hy-label">
            <i aria-hidden="true" />
            Latest @ SkyMirr
          </span>

          <a key={news} href={item?.link || "#"} target="_blank" rel="noreferrer" className="hy-link fx-ticker-swap">
            <span>{item?.title}</span>
            <ArrowUpRight />
          </a>

          <div className="hy-news-nav">
            <button onClick={() => goNews(-1)} className="hy-btn hy-btn-sm" aria-label="Previous news">
              <ChevronLeft />
            </button>
            <button onClick={() => goNews(1)} className="hy-btn hy-btn-sm" aria-label="Next news">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Stage + control bar */}
        <div
          className="hy-stage sm-rise no-lift"
          style={{ ["--d" as string]: "120ms" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hy-tilt" onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="hy-frame" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              {SLIDES.map((s, i) => {
                const pos = i === slide ? "active" : i === leaving ? "leaving" : "idle";
                return (
                  <div
                    key={s.id}
                    data-pos={pos}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${total}`}
                    aria-hidden={pos !== "active"}
                    onClick={() => open(s.target)}
                    className="hy-slide"
                  >
                    <img src={s.image} alt="" aria-hidden="true" className="hy-slide-bg" />
                    <img src={s.image} alt={s.title} className="hy-slide-img" />
                  </div>
                );
              })}
              <span className="hy-glare" aria-hidden="true" />
            </div>
          </div>

          <div className="hy-bar">
            <div className="hy-bar-id" aria-hidden="true">
              <span key={slide} className="hy-big">{String(slide + 1).padStart(2, "0")}</span>
              <span className="hy-of">/ {String(total).padStart(2, "0")}</span>
            </div>

            <div key={`t-${slide}`} className="hy-bar-title" aria-live="polite">
              {SLIDES[slide].title}
            </div>

            <div className="hy-bar-nav">
              <div className="hy-segs" role="tablist" aria-label="Slides">
                {SLIDES.map((s, i) => {
                  const active = slide === i;
                  return (
                    <button
                      key={s.id}
                      role="tab"
                      aria-selected={active}
                      aria-label={`Go to slide ${i + 1}: ${s.title}`}
                      onClick={() => setSlide(i)}
                      className={`hy-seg ${active ? "is-active" : ""}`}
                    >
                      {active && (
                        <span
                          key={slide}
                          className="hy-seg-fill"
                          style={{ animationPlayState: paused ? "paused" : "running" }}
                          onAnimationEnd={() => go(1)}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="hy-ctrl">
                <button onClick={() => go(-1)} className="hy-btn" aria-label="Previous Slide">
                  <ChevronLeft />
                </button>
                <button onClick={() => go(1)} className="hy-btn" aria-label="Next Slide">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};