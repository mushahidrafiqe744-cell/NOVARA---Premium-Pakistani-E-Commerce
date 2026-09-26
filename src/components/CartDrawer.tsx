import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const freeShippingThreshold = 3000;
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf9f6] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 bg-[#121212] text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
              <h3 className="font-serif font-bold text-lg">Shopping Bag ({cartItems.reduce((a, c) => a + c.quantity, 0)})</h3>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-zinc-900 text-white p-4 border-b border-zinc-800">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                {amountNeeded === 0 ? (
                  <strong className="text-emerald-400">Congratulations! You unlocked FREE DELIVERY.</strong>
                ) : (
                  <span>You're <strong className="text-[#d4af37]">Rs. {amountNeeded.toLocaleString()}</strong> away from FREE DELIVERY.</span>
                )}
              </span>
              <span className="text-zinc-400">{progressPercent}%</span>
            </div>
            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#d4af37] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-zinc-800">Your bag is empty</h4>
                <p className="text-xs text-zinc-500 max-w-xs">Explore our luxury collections and add your favorite items to begin.</p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#121212] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#d4af37] hover:text-zinc-950 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-2xs items-center">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0 bg-zinc-100"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-zinc-900 text-sm line-clamp-1">{item.product.name}</h4>
                    <p className="text-xs text-[#d4af37] font-semibold mt-0.5">Rs. {item.product.price.toLocaleString()}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-zinc-300 rounded-lg overflow-hidden bg-zinc-50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2.5 py-1 text-xs hover:bg-zinc-200 transition-colors font-bold text-zinc-700"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs font-bold text-zinc-900">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2.5 py-1 text-xs hover:bg-zinc-200 transition-colors font-bold text-zinc-700"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-zinc-400 hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-zinc-200 shadow-xl flex flex-col gap-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-600">Subtotal</span>
                <span className="font-serif font-bold text-xl text-zinc-900">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <p className="text-[11px] text-zinc-500">Shipping, taxes, and discounts calculated at checkout.</p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={onClose}
                  className="border border-zinc-300 hover:border-zinc-900 text-zinc-800 font-semibold py-3 rounded-full text-xs transition-colors"
                >
                  VIEW CART
                </button>
                <button
                  onClick={onCheckout}
                  className="bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 font-bold py-3 rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>CHECKOUT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Secure SSL Encrypted Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
