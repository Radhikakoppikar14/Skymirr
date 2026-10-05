import React, { useState, useEffect, useRef } from 'react';
import { BannerFX } from "../components/fx/Bannerfx";
import { Linkedin, X, ChevronRight, Sparkles, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  bullets?: string[];
  text?: string;
  fullBio: string;
}


type Tone = 'blue' | 'indigo';

interface MemberCardProps {
  member: TeamMember;
  idx: number;
  visible: boolean;
  tone: Tone;
  onBio: (m: TeamMember) => void;
}

/** One profile card (shared by Management and Board sections). */
const MemberCard: React.FC<MemberCardProps> = ({ member, idx, visible, tone, onBio }) => {
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div
      data-index={idx}
      style={{ transitionDelay: visible ? `${(idx % 4) * 80}ms` : '0ms' }}
      className={`team-card-animate tm-wrap ${tone === 'indigo' ? 'tm-indigo' : ''} transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <article className="tm-card no-lift" onMouseMove={onMove}>
        <div className="tm-banner" aria-hidden="true">
          <span />
        </div>

        <div className="tm-body">
          <div className="tm-avatar">
            <div className="tm-ring" aria-hidden="true" />
            <img src={member.photo} alt={member.name} loading="lazy" />
          </div>

          <h3 className="tm-name">{member.name}</h3>
          <p className="tm-role">{member.role}</p>

          <ul className="tm-list">
            {member.bullets?.slice(0, 3).map((b, i) => (
              <li key={i}>{b}</li>
            ))}
            {!member.bullets && member.text && <li className="tm-list-long">{member.text}</li>}
          </ul>
        </div>

        <div className="tm-foot">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="tm-in"
            aria-label={`${member.name} on LinkedIn`}
          >
            <Linkedin className="w-4 h-4 fill-current" />
          </a>
          <button onClick={() => onBio(member)} className="tm-bio">
            <span>Full Bio</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </article>
    </div>
  );
};

export const TeamPage: React.FC = () => {
  const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null);
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

    const cards = document.querySelectorAll('.team-card-animate');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const managementTeam: TeamMember[] = [
    {
      name: 'ERIC (YOUNGMIN) JO, PH.D.',
      role: 'CEO & CO-FOUNDER',
      photo: '/images/team/eric-bio-new.png',
      linkedin: 'https://www.linkedin.com/in/youngmin-jo-phd/',
      bullets: [
        '25 yr experience in RF, AI, Wireless',
        'Global VP in Taoglas',
        'CTO/CEO in SkyCross',
        'Engineer in Samsung Electronics',
        'Adjunct professor, Korea University',
        'Over 35 patents',
        'Ph.D. in Electrical Engineering from Florida Tech',
      ],
      fullBio:
        'Dr. Youngmin Jo is the visionary Co-Founder and CEO of SkyMirr, Inc. With more than 25 years of pioneering leadership in RF engineering, electromagnetic positive coupling, and wireless systems, he previously served as Global VP of Taoglas and Chief Technology Officer / CEO at SkyCross. He began his distinguished career as a key research engineer at Samsung Electronics and holds over 35 fundamental patents in multi-band antenna design and beam-forming technologies.',
    },
    {
      name: 'CHRISTOPHER MORTON, PH.D.',
      role: 'BOARD CHAIRMAN & CO-FOUNDER',
      photo: '/images/team/christopher-bio.png',
      linkedin: 'https://www.linkedin.com/in/chris-morton-89b2b916/',
      bullets: [
        '30 yr experience in Wireless, IT, Display',
        'Partner in Orchid Black',
        'Co-founder in Nanophotonica',
        'Co-founder in MeshNetworks',
        'Ph.D. in Communication Systems from University of Pennsylvania',
      ],
      fullBio:
        'Dr. Christopher Morton brings three decades of executive leadership, deep tech venture scaling, and telecom governance to SkyMirr. A Partner at Orchid Black, he was the Co-Founder of MeshNetworks (pioneers of mobile ad-hoc networking, acquired by Motorola) and Co-Founder of Nanophotonica. He holds a Ph.D. in Communication Systems from the University of Pennsylvania.',
    },
    {
      name: 'KERRY GREER',
      role: 'CSO AND CO-FOUNDER',
      photo: '/images/team/kerry-new.png',
      linkedin: 'https://www.linkedin.com/in/the-kerry-greer/',
      bullets: [
        '30 yr experience in Wireless, RF',
        'VP Product Dev in Globalstar',
        'Director in L3Harris, VP in SkyCross',
        'VP in ACR Electronics',
        'Over 10 patents',
        'MBA and MSEE from University of Florida',
      ],
      fullBio:
        'Kerry Greer possesses 30 years of premier wireless hardware development experience. As Co-Founder and Chief Strategy Officer of SkyMirr, he previously spearheaded engineering as VP of Product Development at Globalstar, Director of Engineering at L3Harris, and VP of Engineering at SkyCross. He holds an MBA and MSEE from the University of Florida with more than 10 patents.',
    },
    {
      name: 'NATASHA TAMASKAR, PH.D.',
      role: 'CHIEF REVENUE OFFICER',
      photo: '/images/team/nathasha.png',
      linkedin: 'https://www.linkedin.com/in/natashatamaskar/',
      bullets: [
        '20+ years of experience in wireless, telecom, AI and security',
        'SVP & Head of Business Strategy and Global Marketing at Radisys, a Jio Platforms Company',
        'VP of Cloud Strategy & Marketing at GENBAND/Kandy.io',
        'Global Telecoms Business "50 Women to Watch" and Analytics Insights "10 Most Influential Women in Technology."',
        'Ph.D. in Computational Physics from Kent State University and MIT Certification in Applied Generative AI for Digital Transformation.',
      ],
      fullBio:
        'Dr. Natasha Tamaskar brings over 20 years of international telecom and enterprise growth leadership to SkyMirr as Chief Revenue Officer. She previously served as SVP and Head of Business Strategy & Global Marketing at Radisys (a Jio Platforms Company) and VP of Cloud Strategy & Marketing at GENBAND/Kandy.io. Recognized in Global Telecoms Business "50 Women to Watch," she earned her Ph.D. in Computational Physics from Kent State University.',
    },
  ];

  const boardAdvisors: TeamMember[] = [
    {
      name: 'ALEX WISSNER-GROSS, PH.D.',
      role: 'Advisory Board Member',
      photo: '/images/team/alex-bio.png',
      linkedin: 'https://www.linkedin.com/in/alexwg/',
      bullets: [
        'Investor & software developer, has advised and invested in 27 tech companies with a combined valuation of over $850 million.',
        'Contributing author of the New York Times Bestseller, "This Idea Must Die," and the Amazon #1 New Release, "What to Think About Machines That Think."',
        'Ph.D. in Physics from Harvard University and S.B. in ECE from MIT.',
      ],
      fullBio:
        'Dr. Alex Wissner-Gross is an award-winning computer scientist, entrepreneur, investor, and educator. He has founded and advised 27 high-growth technology companies valued at over $850M. A fellow at Harvard\'s Institute for Applied Computational Science, he completed his Ph.D. in Physics at Harvard University and dual S.B. degrees in Computer Science and Mathematics at MIT.',
    },
    {
      name: 'DONNA HAMLIN, PH.D.',
      role: 'INDEPENDENT BOARD DIRECTOR',
      photo: '/images/team/donna-bio.png',
      linkedin: 'https://www.linkedin.com/in/global-board-services/',
      bullets: [
        'Award-winning developer of CASCADE® and Board Bona Fide® software management tools.',
        'Founder of Boardwise, Inc.',
        'Adjunct professor, Rensselaer Polytechnic Institute',
        'Ph.D. and M.S. in Business from Rensselaer Polytechnic Institute',
      ],
      fullBio:
        'Dr. Donna Hamlin is an internationally recognized expert in board governance, strategy, and corporate development. The CEO and Founder of Boardwise, Inc., she has advised public, private, and governmental boards across 40 countries and taught corporate leadership at Rensselaer Polytechnic Institute.',
    },
    {
      name: 'YOSHIOKI CHIKA',
      role: 'Advisory Board Member',
      photo: '/images/team/yoshi-bio.png',
      linkedin: 'https://www.linkedin.com/in/yoshioki-chika/',
      bullets: [
        'Telecommunication/ Mobile Expert with World-wide recognition',
        'Board member in Metcom',
        'Biz Advisor in Sprint',
        'VP in Softbank',
        'VP in DDI Pocket',
        'Manager in KDDI',
        'BA in Physics from Ibaraki University.',
      ],
      fullBio:
        'Yoshioki Chika is an icon of the global wireless and cellular ecosystem. With foundational senior executive tenures as Vice President at SoftBank, VP at DDI Pocket, Executive Manager at KDDI, and Business Advisor at Sprint, he brings invaluable international carrier alignment to SkyMirr.',
    },
    {
      name: 'DAVID CARRIER',
      role: 'Advisory Board Member',
      photo: '/images/team/david-bio.png',
      linkedin: 'https://www.linkedin.com/in/david-p-carrier-650a2429/',
      bullets: [
        'Global leader of manufacturing, Biz Dev and CEO training',
        'Founder and President of Quantumflo, Inc. a leader in advanced packaged pump systems',
        'Advisory board chairman in GrowFL',
        'BS in Business Administration from U of South Florida.',
      ],
      fullBio:
        'David Carrier is a recognized industrial manufacturing authority, business developer, and leadership mentor. The Founder and President of QuantumFlo, Inc., he has built high-precision fluid and electromechanical engineering systems.',
    },
    {
      name: 'GREG KHACHATRIAN',
      role: 'Board Director',
      photo: '/images/team/Greg-Khachatrian.png',
      linkedin: 'https://www.linkedin.com/in/greg-khachatrian-13a4791/',
      text:
        'Greg has 18+ years of leadership, finance and accounting, strategic and operational experience in the gaming, leisure and hospitality industry. As a corporate executive he has completed transactions over $1B in aggregate value. He has taken companies through formal (Chapter 11) and informal turnaround efforts with 100% success rate that resulted in large returns for investors. Greg has extensive experience in raising capital and restructuring debt to better serve the strategic goal of the operation.',
      fullBio:
        'Greg Khachatrian has over 18 years of executive leadership, corporate finance, debt restructuring, and capital formation experience. Having successfully steered transactions totaling over $1 Billion in aggregate enterprise value, he provides vital fiduciary rigor and capital structure optimization for SkyMirr.',
    },
  ];

  let cardIndex = 0;

  return (
    <div ref={containerRef} className="pt-28 sm:pt-32 pb-24 bg-transparent text-slate-950 overflow-x-hidden relative">
      
      {/* Ambient Floating Glow Orbs */}
      <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Executive Dark Header Banner */}
      <div className="page-banner bg-executive-gradient text-white py-20 sm:py-28 text-left relative overflow-hidden">
        <BannerFX />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-200 font-bold backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Executive Leadership &amp; Board Governance
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight font-sans text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-text-shimmer">
            Team &amp; Advisors
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl font-medium animate-slide-up-fade">
            Industry veterans and global RF pioneers leading the wireless revolution.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-24 relative z-10">
        
        {/* ========================================================
            MANAGEMENT TEAM
            ======================================================== */}
        <section className="space-y-10">
          <div className="tm-head">
            <div>
              <span className="tm-eyebrow"><i aria-hidden="true" />Executive Roster</span>
              <h2 className="tm-h2">Management Team</h2>
            </div>
            <p className="tm-sub">
              Elite operational and technical leadership guiding SkyMirr’s global hardware expansion.
            </p>
          </div>

          <div className="tm-grid tm-grid-4">
            {managementTeam.map((member) => {
              const currentIdx = cardIndex++;
              return (
                <MemberCard
                  key={currentIdx}
                  member={member}
                  idx={currentIdx}
                  visible={!!visibleCards[currentIdx]}
                  tone="blue"
                  onBio={setSelectedBio}
                />
              );
            })}
          </div>
        </section>

        {/* ========================================================
            BOARD MEMBERS / ADVISORS
            ======================================================== */}
        <section className="space-y-10 pt-16 border-t border-slate-200/80">
          <div className="tm-head">
            <div>
              <span className="tm-eyebrow"><i aria-hidden="true" />Governance &amp; Oversight</span>
              <h2 className="tm-h2">Board Members / Advisors</h2>
            </div>
            <p className="tm-sub">
              Distinguished experts advising on global market strategy, IP scaling, and financial governance.
            </p>
          </div>

          <div className="tm-grid tm-grid-3">
            {boardAdvisors.map((member) => {
              const currentIdx = cardIndex++;
              return (
                <MemberCard
                  key={currentIdx}
                  member={member}
                  idx={currentIdx}
                  visible={!!visibleCards[currentIdx]}
                  tone="indigo"
                  onBio={setSelectedBio}
                />
              );
            })}
          </div>
        </section>

      </div>

      {/* ========================================================
          FULL BIO MODAL
          ======================================================== */}
      {selectedBio && (
        <div
          onClick={() => setSelectedBio(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-slate-200/80 animate-slide-up"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40">
              <div className="flex items-center gap-4">
                <img
                  src={selectedBio.photo}
                  alt={selectedBio.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md bg-blue-600"
                />
                <div>
                  <h3 className="text-sm sm:text-base font-black text-slate-950 font-sans">
                    {selectedBio.name}
                  </h3>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wide bg-blue-100/70 px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                    {selectedBio.role}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedBio(null)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {selectedBio.fullBio}
              </p>

              {selectedBio.bullets && (
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-3 tracking-wider">
                    Key Credentials &amp; Accomplishments
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {selectedBio.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span className="leading-relaxed font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="p-5 px-6 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between">
              <a
                href={selectedBio.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0077b5] hover:underline"
              >
                <Linkedin className="w-4 h-4 fill-current" />
                <span>View LinkedIn Profile</span>
              </a>

              <button
                onClick={() => setSelectedBio(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                Close Bio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};