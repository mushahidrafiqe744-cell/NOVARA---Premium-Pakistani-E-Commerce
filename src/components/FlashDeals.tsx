import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Star, Heart, ShoppingBag, ArrowRight, Eye, Flame } from 'lucide-react';

interface FlashDealsProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
  onViewAllDeals: () => void;
}

export const FlashDeals: React.FC<FlashDealsProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView,
  onViewAllDeals
}) => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 24,
    seconds: 36,
    milliseconds: 12
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.milliseconds > 0) {
          return { ...prev, milliseconds: prev.milliseconds - 1 };
        } else if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1, milliseconds: 99 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59, milliseconds: 99 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59, milliseconds: 99 };
        }
        return { hours: 8, minutes: 24, seconds: 36, milliseconds: 12 };
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const flashProducts = PRODUCTS.filter(p => p.isFlashDeal || p.discount);

  return (
    <section id="flash-deals" className="py-20 bg-[#121212] text-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header & Countdown */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-widest mb-2">
              <Flame className="w-4 h-4 fill-rose-500" />
              <span>Limited Time Offer</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
              Flash Deals
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2">
              Limited-time prices. Don't miss out on these exclusive daily steals.
            </p>
          </div>

          {/* Countdown timer */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-zinc-400 font-semibold block uppercase">Ending In</span>
              <span className="text-xs text-[#d4af37]">Secure Yours Now</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-xl text-center min-w-[50px]">
                <span className="font-serif font-bold text-lg text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase text-zinc-400 block">Hours</span>
              </div>
              <span className="text-zinc-600 font-bold">:</span>
              <div className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-xl text-center min-w-[50px]">
                <span className="font-serif font-bold text-lg text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase text-zinc-400 block">Mins</span>
              </div>
              <span className="text-zinc-600 font-bold">:</span>
              <div className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-xl text-center min-w-[50px]">
                <span className="font-serif font-bold text-lg text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase text-zinc-400 block">Secs</span>
              </div>
              <span className="text-zinc-600 font-bold">:</span>
              <div className="bg-zinc-900 border border-white/10 px-3 py-2 rounded-xl text-center min-w-[50px]">
                <span className="font-serif font-bold text-lg text-[#d4af37]">{String(timeLeft.milliseconds).padStart(2, '0')}</span>
                <span className="text-[9px] uppercase text-zinc-400 block">Ms</span>
              </div>
            </div>

            <button
              onClick={onViewAllDeals}
              className="hidden md:flex items-center gap-2 text-xs font-bold text-[#d4af37] hover:text-white transition-colors ml-4 uppercase tracking-wider"
            >
              <span>View All Deals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.slice(0, 4).map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const soldPercentage = Math.min(100, Math.round(((product.soldCount || 50) / ((product.soldCount || 50) + product.stockCount)) * 100));

            return (
              <div
                key={product.id}
                className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden group hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Image & Badges */}
                <div className="relative aspect-square overflow-hidden bg-zinc-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {product.discount && (
                    <span className="absolute top-3 left-3 bg-rose-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {product.discount}% OFF
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white hover:text-zinc-900 transition-colors shadow-md"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Quick View Button */}
                  <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => onQuickView(product)}
                      className="bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#d4af37] hover:text-zinc-950 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#d4af37]">
                      {product.category}
                    </span>
                    <h3 className="font-serif font-bold text-white text-base mt-1 line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="text-xs font-bold ml-1 text-white">{product.rating}</span>
                      </div>
                      <span className="text-xs text-zinc-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <div>
                    {/* Stock Progress */}
                    <div className="mb-3">
                      <div className="flex justify-between text-[11px] text-zinc-400 mb-1 font-medium">
                        <span>Available: <strong className="text-white">{product.stockCount} left</strong></span>
                        <span>{soldPercentage}% Sold</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#d4af37] h-full rounded-full transition-all duration-500"
                          style={{ width: `${soldPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Price & Add to Cart */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div>
                        <span className="text-xs text-zinc-400 line-through block">
                          Rs. {product.oldPrice?.toLocaleString()}
                        </span>
                        <span className="font-serif font-bold text-lg text-white">
                          Rs. {product.price.toLocaleString()}
                        </span>
                      </div>

                      <button
                        onClick={() => onAddToCart(product)}
                        className="bg-[#d4af37] hover:bg-[#c29e2f] text-zinc-950 px-4 py-2.5 rounded-full font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Deals */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={onViewAllDeals}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#d4af37] border border-[#d4af37]/40 px-6 py-3 rounded-full hover:bg-[#d4af37] hover:text-zinc-950 transition-all"
          >
            <span>View All Flash Deals</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
