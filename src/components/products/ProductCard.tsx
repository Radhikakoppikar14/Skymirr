import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  onView: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  subtitle,
  image,
  badge,
  onView,
}) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 flex flex-col justify-between hover:border-sky-500 hover:shadow-[0_30px_60px_-24px_rgba(14,151,214,0.35)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0a1220] to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      {badge && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-[#0a1220] to-[#16294a] text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest z-10 shadow-sm">
          {badge}
        </span>
      )}
      <div>
        <div className="h-40 bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-slate-100 relative group-hover:border-sky-200 transition-colors">
          {failed ? (
            <span className="text-2xl font-black tracking-tight text-slate-300">
              {name}
            </span>
          ) : (
            <img
              src={image}
              alt={name}
              className="max-h-32 max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
              onError={() => setFailed(true)}
            />
          )}
        </div>
        <h3 className="font-black text-slate-900 text-lg tracking-tight group-hover:text-sky-700 transition-colors">
          {name}
        </h3>
        <p className="text-xs text-slate-600 mt-2 line-clamp-3 font-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
      <div className="pt-4 mt-5 border-t border-slate-100">
        <button
          onClick={onView}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#0a1220] to-[#16294a] group-hover:from-sky-600 group-hover:to-sky-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer active:scale-95"
        >
          <span>View Products</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
