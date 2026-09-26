import React from 'react';
import { TRENDING_CARDS } from '../data';
import { ArrowRight } from 'lucide-react';

interface TrendingSectionProps {
  onSelectCategory: (category: string) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Editorial Spotlights</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mt-2">
            "Trending Now"
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-3">
            Explore our curated editorial spotlights shaping the season's aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRENDING_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectCategory(card.category)}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg h-[420px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
                <span className="text-[#d4af37] text-xs font-semibold tracking-widest uppercase mb-1">
                  {card.category}
                </span>
                <h3 className="font-serif text-white text-2xl font-bold">
                  {card.title}
                </h3>
                <p className="text-zinc-300 text-sm mt-1 mb-4">
                  {card.subtitle}
                </p>

                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs font-bold w-max group-hover:bg-[#d4af37] group-hover:text-zinc-950 transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
