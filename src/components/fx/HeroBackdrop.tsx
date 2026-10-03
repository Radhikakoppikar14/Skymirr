import React from "react";
import { ParticleNetwork } from "./ParticleNetwork";
import { SignalRings } from "./SignalRings";
import { ParallaxLayer } from "./FloatingObjects";

/** Animated layer that sits BEHIND the hero slider (decor only, no content). */
export const HeroBackdrop: React.FC = () => (
  <div aria-hidden="true" className="absolute inset-0 -z-[1] overflow-hidden pointer-events-none">
    {/* faint engineering grid */}
    <div className="fx-grid absolute inset-0 opacity-[0.5]" />
    {/* aurora: three slow, blurred colour fields */}
    <div className="fx-aurora fx-aurora-a" />
    <div className="fx-aurora fx-aurora-b" />
    <div className="fx-aurora fx-aurora-c" />
    {/* two light beams that sweep behind the slider */}
    <div className="fx-beam fx-beam-a" />
    <div className="fx-beam fx-beam-b" />
    <ParticleNetwork />
    <ParallaxLayer strength={-26} className="absolute inset-0">
      <SignalRings className="w-[760px] max-w-[90vw] -right-52 -top-60" waves={4} />
      <SignalRings
        className="w-[520px] max-w-[70vw] -left-44 bottom-[-250px]"
        waves={3}
        color="rgba(129,140,248,0.45)"
      />
    </ParallaxLayer>
    {/* vignette + bottom fade into the page */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_55%,rgba(6,12,28,0.55)_100%)]" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d1830] to-transparent" />
  </div>
);