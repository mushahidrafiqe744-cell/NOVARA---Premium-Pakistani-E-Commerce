import React from 'react';
import { CATEGORIES } from '../data';
import { ArrowRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Curated Collections</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mt-2">
            "Shop By Category"
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-3">
            Everything you love, all in one place. Handpicked items designed for modern living.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[240px]">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-md ${cat.span || 'md:col-span-1 md:row-span-1'}`}
            >
              {/* Image with zoom */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent group-hover:from-zinc-950/90 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-1">
                  {cat.productCount}
                </span>
                <h3 className="font-serif text-white text-xl md:text-2xl font-bold group-hover:text-[#d4af37] transition-colors">
                  {cat.name}
                </h3>
                
                <div className="flex items-center gap-2 text-white/90 text-xs font-semibold mt-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 text-[#d4af37]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
