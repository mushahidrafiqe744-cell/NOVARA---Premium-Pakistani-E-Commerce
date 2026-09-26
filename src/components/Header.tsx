import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X, Phone, ShieldCheck, MapPin, ChevronDown, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  onOpenAuth: () => void;
  onOpenTrackOrder: () => void;
  onOpenHelp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  onOpenWishlist,
  onOpenAuth,
  onOpenTrackOrder,
  onOpenHelp
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#121212] text-[#fbf9f5] text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10 font-medium tracking-wide">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
          <span>FREE DELIVERY ON ORDERS ABOVE Rs. 3,000</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={onOpenTrackOrder} 
            className="hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            Track Order
          </button>
          <button 
            onClick={onOpenHelp} 
            className="hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            Help Center
          </button>
          <button 
            onClick={onOpenAuth} 
            className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <User className="w-3.5 h-3.5" /> Login / Register
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-[#faf9f6]/95 backdrop-blur-md transition-all duration-300 border-b border-zinc-200/80 ${isScrolled ? 'py-3 shadow-sm' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Mobile Menu Trigger & Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-900 hover:text-[#d4af37] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <a href="#" className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-widest text-zinc-900">
                NOVARA
              </span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-semibold -mt-1 hidden sm:block">
                Luxury eCommerce
              </span>
            </a>
          </div>

          {/* Center Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 hover:border-zinc-400 transition-all group cursor-pointer shadow-inner"
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                <span className="text-sm font-normal">Search products, brands & categories...</span>
              </div>
              <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-full text-xs text-zinc-600 shadow-xs border border-zinc-200">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>Quick Search</span>
              </div>
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-5">
            <button
              onClick={onOpenSearch}
              className="lg:hidden p-2 rounded-full hover:bg-zinc-200/60 text-zinc-800 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-full hover:bg-zinc-200/60 text-zinc-800 transition-all group"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 group-hover:text-rose-600 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-rose-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenAuth}
              className="hidden sm:flex items-center gap-2 p-2.5 rounded-full hover:bg-zinc-200/60 text-zinc-800 transition-all group"
              aria-label="Account"
            >
              <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#121212] hover:bg-zinc-800 text-white px-4 py-2.5 rounded-full transition-all shadow-sm group"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold tracking-wider">
                Cart <span className="bg-[#d4af37] text-zinc-900 px-1.5 py-0.5 rounded-full ml-1 font-bold">{cartCount}</span>
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block bg-[#faf9f6] border-b border-zinc-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-8 py-3 text-sm font-medium text-zinc-800 tracking-wide">
          <a href="#" className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            Home
          </a>
          <a href="#shop" className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            Shop
          </a>
          <a href="#categories" className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            Categories
          </a>
          <a href="#new-arrivals" className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            New Arrivals
          </a>
          <a href="#best-sellers" className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            Best Sellers
          </a>
          <a href="#flash-deals" className="hover:text-[#d4af37] transition-colors relative py-1 flex items-center gap-1.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            Deals
            <span className="bg-rose-600 text-white text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-tighter font-extrabold animate-pulse">SALE</span>
          </a>
          <a href="#brands" className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            Brands
          </a>
          <a href="#footer" className="hover:text-[#d4af37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all">
            About NOVARA
          </a>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#faf9f6] border-b border-zinc-200 shadow-xl py-6 px-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top duration-300 z-50">
          <div className="flex justify-between items-center pb-4 border-b border-zinc-200">
            <span className="font-serif font-bold text-lg text-zinc-900">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-1">
              <X className="w-5 h-5 text-zinc-600" />
            </button>
          </div>
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800 font-medium py-2 border-b border-zinc-100">Home</a>
          <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800 font-medium py-2 border-b border-zinc-100">Shop</a>
          <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800 font-medium py-2 border-b border-zinc-100">Categories</a>
          <a href="#new-arrivals" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800 font-medium py-2 border-b border-zinc-100">New Arrivals</a>
          <a href="#best-sellers" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800 font-medium py-2 border-b border-zinc-100">Best Sellers</a>
          <a href="#flash-deals" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800 font-medium py-2 border-b border-zinc-100 flex items-center justify-between">
            <span>Deals</span>
            <span className="bg-rose-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">SALE</span>
          </a>
          <a href="#brands" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800 font-medium py-2 border-b border-zinc-100">Brands</a>
          <div className="flex flex-col gap-2 pt-2">
            <button onClick={() => { setMobileMenuOpen(false); onOpenTrackOrder(); }} className="text-left text-sm text-zinc-600 py-1.5">Track Order</button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenHelp(); }} className="text-left text-sm text-zinc-600 py-1.5">Help Center</button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }} className="text-left text-sm text-zinc-600 py-1.5 font-semibold text-[#121212]">Login / Register</button>
          </div>
        </div>
      )}
    </header>
  );
};
