import React from 'react';
import { ShieldCheck, Truck, CreditCard, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onExplore }) => {
  return (
    <section className="relative overflow-hidden bg-[#121212] text-[#fbf9f5] py-16 md:py-24">
      {/* Subtle Background Glow & Texture */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#d4af37]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-zinc-700/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#d4af37] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Collection 2026</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              "Upgrade Your <span className="italic text-[#d4af37]">Everyday.</span>"
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Premium products. Curated for the way you live. Discover an exquisite blend of fashion, cutting-edge electronics, beauty and lifestyle essentials tailored for Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onShopNow}
                className="bg-[#faf9f6] text-zinc-900 hover:bg-[#d4af37] hover:text-zinc-950 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplore}
                className="border border-white/30 hover:border-[#d4af37] text-white hover:text-[#d4af37] font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                EXPLORE COLLECTION
              </button>
            </div>

            {/* Trust line */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#d4af37] font-bold">✓</span> Authentic Products
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#d4af37] font-bold">✓</span> Secure Payments
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#d4af37] font-bold">✓</span> Nationwide Delivery
              </div>
            </div>
          </div>

          {/* Right Editorial Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Editorial Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop"
                  alt="NOVARA Luxury Editorial"
                  className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[#d4af37] text-[10px] tracking-widest uppercase font-bold">Featured Masterpiece</span>
                      <h3 className="font-serif text-white text-lg font-bold">Chronos Automatic Sapphire</h3>
                    </div>
                    <span className="bg-[#d4af37] text-zinc-950 font-bold px-3 py-1.5 rounded-full text-xs">
                      Rs. 18,499
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-[#faf9f6] text-zinc-900 p-4 rounded-2xl shadow-xl border border-zinc-200 hidden sm:flex items-center gap-3 animate-bounce duration-1000">
                <div className="w-10 h-10 rounded-full bg-[#121212] text-[#d4af37] flex items-center justify-center font-bold text-lg">
                  ★
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase">Rated 5.0 / 5.0</p>
                  <p className="text-sm font-bold text-zinc-900">Over 10,000+ Happy Clients</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
