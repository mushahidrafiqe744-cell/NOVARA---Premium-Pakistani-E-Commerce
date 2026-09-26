import React, { useRef } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Star, Heart, ShoppingBag, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface NewArrivalsProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const newProducts = PRODUCTS.filter(p => p.isNewArrival || p.badge === 'NEW' || p.badge === 'TRENDING');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="new-arrivals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header & Carousel Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Freshly Curated</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mt-2">
              "Just Landed"
            </h2>
            <p className="text-zinc-600 text-sm md:text-base mt-2">
              Be the first to discover what's new. Limited edition releases just arrived.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-zinc-100 hover:bg-[#121212] hover:text-white transition-colors border border-zinc-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-zinc-100 hover:bg-[#121212] hover:text-white transition-colors border border-zinc-200"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-[#faf9f6] border border-zinc-200/80 rounded-2xl overflow-hidden group hover:border-[#d4af37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between snap-start flex-shrink-0"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-[#d4af37] text-zinc-950 font-bold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    NEW ARRIVAL
                  </span>

                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-zinc-900 hover:bg-white hover:text-rose-600 transition-colors shadow-sm"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  <div className="absolute inset-x-0 bottom-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => onQuickView(product)}
                      className="bg-[#121212] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#d4af37] hover:text-zinc-950 transition-colors flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                      {product.brand}
                    </span>
                    <h3 className="font-serif font-bold text-zinc-900 text-base mt-1 line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span className="text-xs font-bold ml-1 text-zinc-800">{product.rating}</span>
                      </div>
                      <span className="text-xs text-zinc-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-200/60">
                    <div>
                      <span className="text-xs text-zinc-400 line-through block">
                        Rs. {product.oldPrice?.toLocaleString()}
                      </span>
                      <span className="font-serif font-bold text-lg text-zinc-900">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 px-4 py-2.5 rounded-full font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
