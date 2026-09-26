import React from 'react';
import { BRANDS } from '../data';
import { ArrowRight } from 'lucide-react';

interface BrandShowcaseProps {
  onSelectBrand: (brandName: string) => void;
}

export const BrandShowcase: React.FC<BrandShowcaseProps> = ({ onSelectBrand }) => {
  return (
    <section id="brands" className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Partners in Excellence</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mt-2">
            "Brands You Can Trust"
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-3">
            Collaborating with premier international and national designers to bring you uncompromising authenticity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand(brand.name)}
              className="group relative rounded-2xl bg-[#faf9f6] border border-zinc-200 p-8 flex flex-col items-center justify-center text-center hover:border-[#d4af37] hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-zinc-900 transition-opacity"></div>
              
              <span className="font-serif font-extrabold text-2xl md:text-3xl tracking-widest text-zinc-800 group-hover:text-[#d4af37] group-hover:scale-105 transition-all">
                {brand.logoText}
              </span>
              <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider mt-2">
                {brand.tagline}
              </span>

              <div className="flex items-center gap-1 text-xs font-bold text-[#121212] mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <span>Shop Brand</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
