import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PromoBannerProps {
  onDiscover: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onDiscover }) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1600&auto=format&fit=crop"
            alt="Style Meets Technology"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl py-20 px-8 md:px-16 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#d4af37] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Editorial Banner</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            "Style Meets Technology."
          </h2>

          <p className="text-zinc-300 text-base md:text-lg font-normal leading-relaxed">
            Discover the latest products designed for modern living. Engineered for performance, crafted for luxury.
          </p>

          <button
            onClick={onDiscover}
            className="bg-[#d4af37] hover:bg-[#c29e2f] text-zinc-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl flex items-center gap-2 group cursor-pointer"
          >
            <span>DISCOVER NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
