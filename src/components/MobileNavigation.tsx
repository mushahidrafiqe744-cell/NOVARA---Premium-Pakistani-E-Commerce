import React from 'react';
import { Home, Grid, Search, Heart, ShoppingBag, MessageCircle } from 'lucide-react';

interface MobileNavigationProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  activeTab?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist
}) => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/924231110000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute right-full mr-3 bg-zinc-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat With Us (Need help?)
        </span>
      </a>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-t border-zinc-200 px-4 py-2 flex justify-around items-center shadow-2xl">
        <a href="#" className="flex flex-col items-center gap-1 text-zinc-800 hover:text-[#d4af37]">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Home</span>
        </a>

        <a href="#categories" className="flex flex-col items-center gap-1 text-zinc-600 hover:text-[#d4af37]">
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Categories</span>
        </a>

        <button onClick={onOpenSearch} className="flex flex-col items-center gap-1 text-zinc-600 hover:text-[#d4af37]">
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Search</span>
        </button>

        <button onClick={onOpenWishlist} className="relative flex flex-col items-center gap-1 text-zinc-600 hover:text-[#d4af37]">
          <Heart className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Wishlist</span>
          {wishlistCount > 0 && (
            <span className="absolute -top-1 right-2 bg-rose-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {wishlistCount}
            </span>
          )}
        </button>

        <button onClick={onOpenCart} className="relative flex flex-col items-center gap-1 text-zinc-600 hover:text-[#d4af37]">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-2 bg-[#d4af37] text-zinc-950 text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
