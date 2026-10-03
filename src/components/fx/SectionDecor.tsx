import React from "react";
import { FloatChip } from "./FloatingObjects";

interface Props {
  children: React.ReactNode;
  /** which side the large blob sits on */
  side?: "left" | "right";
  className?: string;
}

/**
 * Wraps a LIGHT section and floats soft blue/indigo glows and a few outlined
 * shapes over it. Children are untouched; decor is aria-hidden and click-through.
 */
export const SectionDecor: React.FC<Props> = ({ children, side = "right", className = "" }) => (
  <div className={`relative isolate overflow-hidden ${className}`}>
    {children}
    <div aria-hidden="true" className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      <div className="fx-dots absolute inset-0" />
      <div className="fx-streak" />
      <span
        data-scroll-speed="0.05"
        className={`fx-blob absolute w-[420px] h-[420px] rounded-full ${side === "right" ? "-right-40 top-10" : "-left-40 top-10"}`}
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.14), transparent 65%)" }}
      />
      <span
        data-scroll-speed="-0.04"
        className={`fx-blob-b absolute w-[360px] h-[360px] rounded-full ${side === "right" ? "-left-32 bottom-10" : "-right-32 bottom-10"}`}
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 65%)" }}
      />
      <div className="hidden md:block">
        <FloatChip shape="ring" size={22} className={`absolute top-24 ${side === "right" ? "right-[6%]" : "left-[6%]"} !border-blue-300/70`} />
        <FloatChip shape="hex" size={26} delay={1.6} className={`absolute bottom-32 ${side === "right" ? "left-[5%]" : "right-[5%]"} opacity-70 [&_polygon]:!stroke-indigo-300`} />
        <FloatChip shape="square" size={14} delay={2.8} className="absolute top-1/2 right-[3%] !border-blue-300/70 !bg-blue-200/30" />
      </div>
    </div>
  </div>
);