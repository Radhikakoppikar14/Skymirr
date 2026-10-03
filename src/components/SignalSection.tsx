import React, { useState } from 'react';
import { ArrowUpRight, Zap, ShieldCheck, Activity, Radio } from 'lucide-react';
import { SKYMIRR_TAGLINES } from '../data/skymirrData';

interface SignalSectionProps {
  onNavigateTechnology?: () => void;
}

export const SignalSection: React.FC<SignalSectionProps> = ({ onNavigateTechnology }) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const capabilities = [
    {
      icon: <Radio className="w-5 h-5" />,
      title: 'MuLCAT™ Positive Coupling',
      desc: 'Harnesses constructive mutual electromagnetic resonance across compact multi-band arrays.',
      stat: '+65% Gain',
      tile: 'bg-blue-50 text-blue-600',
      pill: 'bg-blue-50 text-blue-700',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Extreme 5G Tower Reach',
      desc: 'Maintains carrier-grade gigabit throughput up to 42% farther into rural and fringe cells.',
      stat: '+42% Range',
      tile: 'bg-amber-50 text-amber-600',
      pill: 'bg-amber-50 text-amber-700',
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: 'Full Bandwidth Coverage',
      desc: 'Continuous radiation efficiency >80% from 600 MHz to 6000 MHz without band gaps.',
      stat: '>80% Eff.',
      tile: 'bg-green-50 text-green-600',
      pill: 'bg-green-50 text-green-700',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Carrier Certified Rigor',
      desc: 'Certified on AT&T, T-Mobile, and T-Priority networks for public safety and enterprise.',
      stat: 'Tier-1 Ready',
      tile: 'bg-indigo-50 text-indigo-600',
      pill: 'bg-indigo-50 text-indigo-700',
    },
  ];

  // Headline 1: first word dark, the rest in gradient
  const signal = SKYMIRR_TAGLINES.signal as string;
  const sp = signal.indexOf(' ');
  const signalA = sp > -1 ? signal.slice(0, sp) : signal;
  const signalB = sp > -1 ? signal.slice(sp + 1) : '';

  // Headline 2: text up to the comma dark, the rest in gradient
  const connect = SKYMIRR_TAGLINES.whenItHasToConnect as string;
  const cp = connect.indexOf(',');
  const connectA = cp > -1 ? connect.slice(0, cp + 1) : connect;
  const connectB = cp > -1 ? connect.slice(cp + 1).trim() : '';

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* PART 1: SIGNAL WITHOUT LIMITS */}
        <div className="space-y-10">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/70 text-[11px] font-semibold uppercase text-blue-700" style={{ letterSpacing: '0.2em' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              RF Connectivity Without Compromise
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05]">
              {signalA} <span className="text-gradient-blue">{signalB}</span>
            </h2>

            <p className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              {SKYMIRR_TAGLINES.signalSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {capabilities.map((cap, idx) => {
              const isSelected = activeFeature === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(isSelected ? null : idx)}
                  className={`group/cap relative flex flex-col h-full overflow-hidden p-5 lg:p-6 rounded-2xl border bg-white cursor-pointer select-none transition-all duration-500 hover:-translate-y-1.5 ${
                    isSelected
                      ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-[0_24px_50px_-20px_rgba(37, 99, 235,0.45)]'
                      : 'border-slate-200 hover:border-blue-300 hover:shadow-[0_24px_50px_-22px_rgba(16, 28, 53,0.25)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover/cap:scale-110 group-hover/cap:-rotate-6 ${cap.tile}`}>
                      {cap.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${cap.pill}`}>{cap.stat}</span>
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 mb-2 lg:min-h-[3rem]">{cap.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>

                  <span className="absolute left-0 bottom-0 h-[3px] w-full origin-left scale-x-0 group-hover/cap:scale-x-100 bg-gradient-to-r from-blue-500 to-indigo-500 transition-transform duration-500" />
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                if (onNavigateTechnology) {
                  onNavigateTechnology();
                } else {
                  window.location.hash = '#/technology';
                }
              }}
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_12px_28px_-10px_rgba(37, 99, 235,0.6)] cursor-pointer"
            >
              <span>How do we do that?</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PART 2: WHEN IT HAS TO CONNECT */}
        <div className="max-w-4xl mx-auto text-center space-y-4 pt-16 border-t border-slate-200/70">
          <p className="text-sm font-medium text-blue-600">Mission-Critical Reliability</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl uppercase leading-[1.1]">
            {connectA} {connectB && <span className="text-gradient-blue">{connectB}</span>}
          </h2>
          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {SKYMIRR_TAGLINES.missionDetail}
          </p>
        </div>
      </div>
    </section>
  );
};