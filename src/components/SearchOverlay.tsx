import React, { useState } from 'react';
import { PRODUCTS, POPULAR_SEARCHES, CATEGORIES } from '../data';
import { Product } from '../types';
import { Search, X, Sparkles, ArrowRight, Star } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categoryName: string) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchResults = query.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="min-h-screen px-4 py-12 flex flex-col items-center">
        
        {/* Close Button */}
        <div className="w-full max-w-3xl flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-zinc-950 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search Modal Content */}
        <div className="w-full max-w-3xl bg-[#faf9f6] rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Smart Discovery</span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-zinc-900 mt-1">
              "What are you looking for?"
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative mb-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, brands & categories..."
              autoFocus
              className="w-full bg-white border-2 border-zinc-200 rounded-full pl-14 pr-6 py-4 text-base text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#d4af37] transition-colors shadow-inner font-medium"
            />
          </div>

          {/* Initial State: Popular Searches & Categories */}
          {query.trim() === '' ? (
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Popular Searches</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 hover:border-[#d4af37] hover:text-[#121212] transition-all shadow-2xs cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                  Quick Category Navigation
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {CATEGORIES.slice(0, 4).map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.name);
                        onClose();
                      }}
                      className="group relative rounded-2xl overflow-hidden aspect-[2/1] cursor-pointer shadow-xs"
                    >
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-2 text-center">
                        <span className="font-serif font-bold text-white text-xs">{cat.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4">
                Search Results ({searchResults.length})
              </h3>

              {searchResults.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-zinc-500 text-sm">No products found matching "{query}". Try another term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="flex gap-4 p-3 rounded-2xl bg-white border border-zinc-200 hover:border-[#d4af37] cursor-pointer transition-all shadow-2xs items-center group"
                    >
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-xl bg-zinc-100 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#d4af37] uppercase">{product.category}</span>
                        <h4 className="font-serif font-bold text-zinc-900 text-sm line-clamp-1 group-hover:text-[#d4af37] transition-colors">{product.name}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-serif font-bold text-sm text-zinc-900">Rs. {product.price.toLocaleString()}</span>
                          <span className="text-xs text-zinc-400 flex items-center gap-1">★ {product.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
