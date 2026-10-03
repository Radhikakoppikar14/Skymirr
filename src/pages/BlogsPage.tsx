import React, { useState } from "react";
import { BannerFX } from "../components/fx/Bannerfx";
import { ArrowRight, Calendar, Clock, X, Sparkles } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const BlogsPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: "blog-1",
      title:
        "SkyMirr Expands Its Antenna Portfolio With New High-Performance 4G/5G And Wi-Fi Solutions",
      image: "/images/blogs/skymirr-next-gen-antennas.jpg",
      date: "September 2026",
      readTime: "4 min read",
      excerpt:
        "As wireless connectivity continues to evolve, antenna performance remains a critical foundation for delivering reliable coverage, higher throughput, and consistent network performance. From 5G broadband and Fixed Wireless...",
      content:
        "As wireless connectivity continues to evolve, antenna performance remains a critical foundation for delivering reliable coverage, higher throughput, and consistent network performance. From 5G broadband and Fixed Wireless Access (FWA) to high-density Wi-Fi 7 environments, next-generation connected devices require sophisticated RF antenna design.\n\nSkyMirr’s newly expanded antenna portfolio introduces high-efficiency, multi-band solutions that address today’s most demanding deployment environments. Powered by proprietary MuLCAT® (Multi-Layer Coupling Controlled Antenna Technology), these antennas overcome common RF challenges such as port-to-port interference, radiation degradation in compact form factors, and signal fading at cell boundaries.\n\nKey additions include the flagship TAMP161 4G/5G MIMO Broadband Omnidirectional Module, the high-gain TAMP154 Directional Panel for rural fixed wireless access, and the versatile TAMP159 Wi-Fi 6E/7 external antenna offering wideband coverage across 2.4 GHz, 5 GHz, and 6 GHz spectrums.",
    },
    {
      id: "blog-2",
      title:
        "Antenna-First Design: Why Real-World 5G Performance Starts At The RF Layer",
      image: "/images/blogs/blog-antenna1.jpg",
      date: "January 2026",
      readTime: "6 min read",
      excerpt:
        "SkyMirr's Sky5G CPE platform was developed with a simple engineering premise: In real-world wireless deployments, performance is often limited not by the modem or software stack, but by the antenna subsystem.",
      content:
        "In modern wireless engineering, device manufacturers often spend millions integrating the fastest baseband silicon and newest modem chipsets, only to package them with compromised off-the-shelf antenna elements tucked into tight enclosures.\n\nAt SkyMirr, we believe in 'Antenna-First Design.' The fundamental laws of electromagnetics govern signal propagation: no software algorithm or modem optimization can recover signal energy lost at the antenna interface.\n\nBy designing the antenna geometry and coupling mechanisms simultaneously with the enclosure, circuit trace routing, and thermal dissipators, SkyMirr achieves unmatched isolation (>25 dB) and efficiency (>85%) across 600 MHz to 6000 MHz. The result is the Sky5G router reaching cell towers up to 42% farther than conventional CPEs.",
    },
  ];

  return (
    <div className="pt-[72px] pb-24 bg-gradient-to-br from-[#fdfbf7] via-amber-50/30 to-blue-50/20 text-slate-900 relative overflow-hidden">
      {/* Background Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-amber-200/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-300/20 blur-[130px] rounded-full pointer-events-none" />

      {/* Page Header Banner */}
      <div className="page-banner bg-executive-gradient text-white py-20 sm:py-28 text-center relative overflow-hidden shadow-xl">
        <BannerFX />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/25 border border-blue-400/40 text-[11px] font-mono uppercase tracking-[0.25em] text-blue-200 font-bold backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Insights &amp; Innovation
          </div>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight font-sans text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-text-shimmer">
            Blogs
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto font-medium animate-slide-up-fade">
            Technical papers, antenna-first engineering insights, and RF
            industry breakthroughs from the SkyMirr team.
          </p>
        </div>
      </div>

      {/* 2x2 Square Grid Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group aspect-square"
          >
            {/* Post Thumbnail Frame */}
            <div className="w-full h-40 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/85 relative shadow-inner">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Post Content */}
            <div className="flex-1 flex flex-col justify-between pt-4 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight font-sans leading-snug line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="px-5 py-2 rounded-xl bg-slate-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 text-white text-xs font-bold transition-all duration-300 cursor-pointer shadow-md hover:shadow-blue-500/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Article Modal Dialog */}
      {selectedPost && (
        <div
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full border border-slate-200/80 animate-slide-up"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/40">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-100/70 px-3 py-1 rounded-full">
                SkyMirr Engineering Blog
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 max-h-72 shadow-md">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span className="font-bold text-blue-700">
                    {selectedPost.date}
                  </span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-sans tracking-tight leading-snug">
                  {selectedPost.title}
                </h3>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 whitespace-pre-line pt-4 border-t border-slate-100 font-normal">
                {selectedPost.content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 px-6 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-mono text-slate-500 text-[11px]">
                Published by SkyMirr RF R&amp;D Division
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all cursor-pointer shadow-sm hover:-translate-y-0.5"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;