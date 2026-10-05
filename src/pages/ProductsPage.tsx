import React, { useState } from "react";
import {
  Sparkles,
  Radio,
  Layers,
  Cpu,
  Globe,
  Zap,
  ChevronRight,
} from "lucide-react";
import { CATALOG_ITEMS } from "../data/catalog";
import { ProductCard } from "../components/products/ProductCard";

interface ProductsPageProps {
  onOpenProductDetail?: (productId: string) => void;
  onContactSales?: () => void;
  onNavigateDetail?: (detail: string) => void;
}

const categories = [
  {
    id: "cellular",
    label: "Cellular 3G/4G/5G Antennas",
    icon: <Radio className="w-4 h-4" />,
  },
  { id: "wifi", label: "Wi-Fi Antennas", icon: <Layers className="w-4 h-4" /> },
  { id: "fpcb", label: "FPCB Antennas", icon: <Cpu className="w-4 h-4" /> },
  {
    id: "embedded",
    label: "Embedded Monitoring",
    icon: <Zap className="w-4 h-4" />,
  },
  { id: "gnss", label: "GNSS Antennas", icon: <Globe className="w-4 h-4" /> },
  {
    id: "customized",
    label: "Customized Antenna",
    icon: <Sparkles className="w-4 h-4" />,
  },
  { id: "chip", label: "Chip Antenna", icon: <Cpu className="w-4 h-4" /> },
];

export function ProductsPage({
  onOpenProductDetail,
  onNavigateDetail,
}: ProductsPageProps) {
  const urlParams = new URLSearchParams(window.location.search);
  const fromUrl = urlParams.get("cat");

  const [activeCategory, setActiveCategory] = useState<string>(
    fromUrl && CATALOG_ITEMS[fromUrl] ? fromUrl : "cellular",
  );

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    window.history.replaceState({}, "", `/products?cat=${id}`);
  };

  const currentItems = CATALOG_ITEMS[activeCategory] || [];
  const currentCategoryObj = categories.find((c) => c.id === activeCategory);

  const handleViewProduct = (item: { id: string; detailRoute?: string }) => {
    if (item.detailRoute && onNavigateDetail)
      return onNavigateDetail(item.detailRoute);
    if (onOpenProductDetail) return onOpenProductDetail(item.id);
    window.location.hash = `#/product-detail/${encodeURIComponent(item.id)}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-28 bg-transparent text-slate-900 min-h-screen relative overflow-hidden font-sans">
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-sky-200/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 pm-pagehead">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono uppercase tracking-[0.25em] text-sky-800 font-bold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-sky-600" />
              Antenna Catalog
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
              Antenna Modules &amp; Arrays
            </h1>
          </div>
          <p className="text-slate-600 text-sm max-w-md font-medium leading-relaxed">
            Select a hardware category from the control panel to explore
            certified specifications and high-performance modules.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-gradient-to-b from-[#0a1220] to-[#12233d] rounded-3xl border border-white/10 p-4 shadow-[0_30px_60px_-24px_rgba(10,18,32,0.5)] sticky top-28 space-y-2">
            <div className="px-4 py-2 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">
              Hardware Divisions
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-sky-600 to-sky-500 text-white shadow-lg shadow-sky-600/30 scale-[1.02]"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3 font-sans">
                    <span className={isActive ? "text-white" : "text-sky-400"}>
                      {cat.icon}
                    </span>
                    {cat.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono ${isActive ? "bg-white/20 text-white" : "bg-white/10 text-slate-300"}`}
                    >
                      {(CATALOG_ITEMS[cat.id] ?? []).length}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isActive ? "translate-x-0.5 text-white" : "opacity-40"}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sky-600">
                  Active Division
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                  {currentCategoryObj?.label}
                </h2>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-mono text-xs font-bold">
                {currentItems.length} Models Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  subtitle={item.subtitle}
                  image={item.image}
                  badge={item.badge}
                  onView={() => handleViewProduct(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;