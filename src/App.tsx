import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CategoryGrid } from './components/CategoryGrid';
import { FlashDeals } from './components/FlashDeals';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PromoBanner } from './components/PromoBanner';
import { NewArrivals } from './components/NewArrivals';
import { BestSellers } from './components/BestSellers';
import { BrandShowcase } from './components/BrandShowcase';
import { TrendingSection } from './components/TrendingSection';
import { CustomerReviews } from './components/CustomerReviews';
import { SocialSection } from './components/SocialSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { QuickViewModal } from './components/QuickViewModal';
import { MobileNavigation } from './components/MobileNavigation';
import { WishlistModal, TrackOrderModal, AuthModal, HelpModal, CheckoutModal } from './components/Modals';
import { PRODUCTS } from './data';
import { Product, CartItem } from './types';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['prod-2', 'prod-4']);

  // Modals state
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [trackOrderOpen, setTrackOrderOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedColor: color, selectedSize: size }];
    });
    showToast(`Added "${product.name}" to cart`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    showToast("Removed item from cart");
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistIds(prev => {
      if (prev.includes(product.id)) {
        showToast(`Removed "${product.name}" from wishlist`);
        return prev.filter(id => id !== product.id);
      } else {
        showToast(`Added "${product.name}" to wishlist ❤️`);
        return [...prev, product.id];
      }
    });
  };

  const wishlistProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const scrollToShop = () => {
    const el = document.getElementById('shop');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] selection:bg-[#121212] selection:text-[#faf9f6]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-[#121212] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-top duration-300">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
        onOpenTrackOrder={() => setTrackOrderOpen(true)}
        onOpenHelp={() => setHelpOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onShopNow={scrollToShop}
          onExplore={() => {
            const el = document.getElementById('categories');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <TrustStrip />

        <CategoryGrid
          onSelectCategory={(cat) => {
            showToast(`Filtering by category: ${cat}`);
            scrollToShop();
          }}
        />

        <FlashDeals
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          onQuickView={(p) => setQuickViewProduct(p)}
          onViewAllDeals={scrollToShop}
        />

        <FeaturedProducts
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        <PromoBanner
          onDiscover={scrollToShop}
        />

        <NewArrivals
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        <BestSellers
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        <BrandShowcase
          onSelectBrand={(brand) => {
            showToast(`Viewing brand: ${brand}`);
            scrollToShop();
          }}
        />

        <TrendingSection
          onSelectCategory={(cat) => {
            showToast(`Viewing collection: ${cat}`);
            scrollToShop();
          }}
        />

        <CustomerReviews />

        <SocialSection />

        <Newsletter />
      </main>

      {/* Footer */}
      <Footer
        onOpenTrackOrder={() => setTrackOrderOpen(true)}
        onOpenHelp={() => setHelpOpen(true)}
        onOpenAuth={() => setAuthOpen(true)}
      />

      {/* Mobile Bottom Navigation & WhatsApp Button */}
      <MobileNavigation
        cartCount={cartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
      />

      {/* Drawers and Modals */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        onSelectCategory={(cat) => {
          showToast(`Selected category: ${cat}`);
          scrollToShop();
        }}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, qty, color, size) => handleAddToCart(p, qty, color, size)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />

      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={handleToggleWishlist}
      />

      <TrackOrderModal
        isOpen={trackOrderOpen}
        onClose={() => setTrackOrderOpen(false)}
      />

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
      />

      <HelpModal
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        subtotal={subtotal}
        onOrderComplete={() => setCartItems([])}
      />

    </div>
  );
}
