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
    <div className="bg-white rounded-3xl border border-[#dce8f2] p-5 flex flex-col justify-between hover:border-[#0ea5e0] hover:shadow-[0_24px_50px_-20px_rgba(10,104,168,0.25)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden shadow-sm">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0a68a8] to-[#0ea5e0] opacity-0 group-hover:opacity-100 transition-opacity" />
      {badge && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-[#0a2a52] to-[#084b7d] text-[#d4e8f7] text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest z-10 shadow-sm border border-[#0ea5e0]/20">
          {badge}
        </span>
      )}
      <div>
        <div className="h-40 bg-gradient-to-br from-[#f7fbff] to-[#eaf4fc] rounded-2xl flex items-center justify-center p-4 mb-4 overflow-hidden border border-[#dce8f2] relative group-hover:border-[#8fd3ec] transition-colors">
          {failed ? (
            <span className="text-2xl font-black tracking-tight text-[#8aa0b5]">
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
        <h3 className="font-black text-[#0b1f3a] text-lg tracking-tight group-hover:text-[#0a68a8] transition-colors">
          {name}
        </h3>
        <p className="text-xs text-[#55708a] mt-2 line-clamp-3 font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
      <div className="pt-4 mt-5 border-t border-[#dce8f2]">
        <button
          onClick={onView}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#0a2a52] to-[#084b7d] group-hover:from-[#0a68a8] group-hover:to-[#0ea5e0] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer active:scale-95"
        >
          <span>View Products</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
