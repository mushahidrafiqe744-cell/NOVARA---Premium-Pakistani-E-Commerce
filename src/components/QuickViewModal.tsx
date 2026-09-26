import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, Check } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, color?: string, size?: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);
  const [addedToast, setAddedToast] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedColor, selectedSize);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#faf9f6] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-zinc-800 hover:bg-zinc-900 hover:text-white transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Image Gallery */}
        <div className="md:w-1/2 bg-zinc-100 relative aspect-square md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#121212] text-white font-bold text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Right Details */}
        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
          <div>
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                  {product.brand} • {product.category}
                </span>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-zinc-900 mt-1">
                  {product.name}
                </h2>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500' : 'text-zinc-300'}`} />
                ))}
                <span className="text-xs font-bold ml-1.5 text-zinc-900">{product.rating}</span>
              </div>
              <span className="text-xs text-zinc-500">({product.reviewsCount} customer reviews)</span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 mt-4 pt-4 border-t border-zinc-200">
              <span className="font-serif font-bold text-3xl text-zinc-900">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-zinc-400 line-through">
                  Rs. {product.oldPrice.toLocaleString()}
                </span>
              )}
              {product.discount && (
                <span className="bg-rose-100 text-rose-700 font-bold text-xs px-2.5 py-1 rounded-full">
                  Save {product.discount}%
                </span>
              )}
            </div>

            <p className="text-zinc-600 text-sm mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-6">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-2">
                  Select Color: <span className="text-[#d4af37]">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        selectedColor === color
                          ? 'bg-[#121212] text-white shadow-md'
                          : 'bg-white border border-zinc-300 text-zinc-800 hover:border-zinc-900'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-6">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-2">
                  Select Size: <span className="text-[#d4af37]">{selectedSize}</span>
                </label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        selectedSize === size
                          ? 'bg-[#121212] text-white shadow-md'
                          : 'bg-white border border-zinc-300 text-zinc-800 hover:border-zinc-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock status */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl w-max border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>In Stock ({product.stockCount} items available in Pakistan)</span>
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border border-zinc-300 rounded-full overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 text-sm font-bold text-zinc-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-sm font-bold text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded-full border transition-all flex items-center justify-center ${
                  isWishlisted ? 'bg-rose-50 border-rose-300 text-rose-600' : 'bg-white border-zinc-300 text-zinc-700 hover:border-zinc-900'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 font-bold py-3.5 px-6 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-zinc-200 text-[11px] text-zinc-500 text-center font-medium">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>100% Authentic</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#d4af37]" />
                <span>Fast Nationwide</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-[#d4af37]" />
                <span>Easy Returns</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
