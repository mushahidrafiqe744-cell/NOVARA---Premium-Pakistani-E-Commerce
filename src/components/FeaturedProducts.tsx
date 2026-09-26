import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Star, Heart, ShoppingBag, Eye, Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onQuickView: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onQuickView
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Fashion' | 'Beauty' | 'Electronics' | 'Home & Living'>('All');

  const filteredProducts = activeTab === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section id="shop" className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header & Category Tabs */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Handcrafted Selection</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mt-2">
            "Curated For You"
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-3">
            Handpicked products worth discovering. Crafted for uncompromised elegance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Fashion', 'Beauty', 'Electronics', 'Home & Living'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#121212] text-white shadow-md'
                  : 'bg-white text-zinc-700 hover:bg-zinc-200/60 border border-zinc-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden group hover:border-[#d4af37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Hover Swap */}
                <div className="relative aspect-square overflow-hidden bg-zinc-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src={product.secondaryImage || product.image}
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#121212] text-white font-bold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={() => onToggleWishlist(product)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-zinc-900 hover:bg-white hover:text-rose-600 transition-colors shadow-sm"
                    aria-label="Wishlist"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>

                  {/* Quick View Button on Hover */}
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
                <div className="p-4 md:p-5 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                      {product.category}
                    </span>
                    <h3 className="font-serif font-bold text-zinc-900 text-sm md:text-base mt-1 line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating Stars & Reviews */}
                    <div className="flex items-center gap-1 mt-1.5">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        <span className="text-xs font-bold ml-1 text-zinc-800">{product.rating}</span>
                      </div>
                      <span className="text-[11px] text-zinc-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                    <div>
                      {product.oldPrice && (
                        <span className="text-[11px] text-zinc-400 line-through block">
                          Rs. {product.oldPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="font-serif font-bold text-base md:text-lg text-zinc-900">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 p-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
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
