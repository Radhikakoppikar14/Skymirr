import React from 'react';
import { Hero } from '../components/Hero';
import { SignalSection } from '../components/SignalSection';
import { ProductsCatalog } from '../components/ProductsCatalog';
import { SolutionsSection } from '../components/SolutionsSection';
import { PartnersSection } from '../components/PartnersSection';
import { SectionDecor } from '../components/fx/SectionDecor';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 text-slate-950 overflow-x-hidden">
      {/* Hero Slider & Latest @ SkyMirr Ticker */}
      <Hero
        onExploreProducts={() => onNavigate('products')}
        onExploreTechnology={() => onNavigate('technology')}
        onNavigateDetail={(detail) => onNavigate(detail)}
      />

      {/* SIGNAL WITHOUT LIMITS & WHEN IT HAS TO CONNECT */}
      <div id="signal-section">
        <SectionDecor side="right">
          <SignalSection onNavigateTechnology={() => onNavigate('technology')} />
        </SectionDecor>
      </div>

      {/* PRODUCTS: 3 Image Cards (Antennas, 5G Routers, Asset Trackers) */}
      <SectionDecor side="left">
        <ProductsCatalog
          onSelectCategory={(catId) => {
            if (catId === 'routers') {
              onNavigate('sky5g-router');
            } else if (catId === 'trackers') {
              onNavigate('tracker-detail');
            } else {
              onNavigate('products');
            }
          }}
        />
      </SectionDecor>

      {/* APPLICATIONS: 4 Sector Image Cards (Residential, Logistics, Educational, Industrial) */}
      <SolutionsSection onSelectApplication={() => onNavigate('services')} />

      {/* OUR PARTNERS: Online & Distributors with Parallel Auto-moving tracks (pauses on hover) */}
      <PartnersSection onExploreProducts={() => onNavigate('products')} />
    </div>
  );
};