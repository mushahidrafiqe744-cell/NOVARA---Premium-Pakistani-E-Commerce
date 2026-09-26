import React from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Star, ShoppingBag, Heart, Trophy, Eye } from 'lucide-react';

interface BestSellersProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView
}) => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller || p.soldCount && p.soldCount > 180).slice(0, 3);

  return (
    <section id="best-sellers" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Customer Favorites</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900">
            "What Everyone's Buying"
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-3">
            Our most sought-after masterpieces, ranked by popularity and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const rank = String(index + 1).padStart(2, '0');

            return (
              <div
                key={product.id}
                className="relative bg-white border border-zinc-200 rounded-3xl overflow-hidden group hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between p-6"
              >
                {/* Ranking Indicator */}
                <div className="absolute top-6 left-6 z-10 w-12 h-12 rounded-2xl bg-[#121212] text-[#d4af37] font-serif font-bold text-xl flex items-center justify-center shadow-lg">
                  {rank}
                </div>

                {/* Badge */}
                <div className="absolute top-6 right-6 z-10 bg-[#d4af37] text-zinc-950 font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  #1 BEST SELLER
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 mt-12 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <button
                      onClick={() => onToggleWishlist(product)}
                      className="p-2.5 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 hover:text-rose-600 transition-colors shadow-md"
                      aria-label="Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                    <button
                      onClick={() => onQuickView(product)}
                      className="p-2.5 rounded-full bg-white/90 backdrop-blur-md text-zinc-900 hover:text-[#d4af37] transition-colors shadow-md"
                      aria-label="Quick view"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                      {product.brand} • {product.category}
                    </span>
                    <h3 className="font-serif font-bold text-zinc-900 text-xl mt-1 group-hover:text-[#d4af37] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-600 text-xs mt-2 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-amber-500" />
                        <span className="text-sm font-bold ml-1 text-zinc-900">{product.rating}</span>
                      </div>
                      <span className="text-xs text-zinc-400">({product.reviewsCount} verified reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                    <div>
                      <span className="text-xs text-zinc-400 line-through block">
                        Rs. {product.oldPrice?.toLocaleString()}
                      </span>
                      <span className="font-serif font-bold text-xl text-zinc-900">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 px-6 py-3 rounded-full font-bold text-xs transition-colors flex items-center gap-2 shadow-md cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
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
