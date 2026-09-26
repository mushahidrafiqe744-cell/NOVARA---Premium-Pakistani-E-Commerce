import React, { useState } from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Truck, CheckCircle2, User, HelpCircle, ShieldCheck, ArrowRight, Tag } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onAddToCart: (product: Product) => void;
  onRemoveWishlist: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onAddToCart,
  onRemoveWishlist
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#faf9f6] rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-6">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-serif font-bold text-xl text-zinc-900">My Wishlist ({wishlistProducts.length})</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-zinc-700" />
          </button>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-sm">Your wishlist is currently empty. Tap the heart icon on any product to save it here.</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-xl bg-zinc-100 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-[#d4af37] uppercase">{product.category}</span>
                  <h4 className="font-serif font-bold text-zinc-900 text-sm line-clamp-1">{product.name}</h4>
                  <span className="font-serif font-bold text-sm text-zinc-900">Rs. {product.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onRemoveWishlist(product);
                    }}
                    className="bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 px-4 py-2 rounded-full text-xs font-bold transition-colors"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => onRemoveWishlist(product)}
                    className="p-2 text-zinc-400 hover:text-rose-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface TrackOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackOrderModal: React.FC<TrackOrderModalProps> = ({ isOpen, onClose }) => {
  const [orderId, setOrderId] = useState('');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#faf9f6] rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-6">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-serif font-bold text-xl text-zinc-900">Track Your Order</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-zinc-700" />
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSearched(true); }} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Order ID / Tracking Number</label>
            <input
              type="text"
              required
              placeholder="e.g. NOV-84920"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <button type="submit" className="w-full bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 font-bold py-3.5 rounded-full text-xs transition-colors shadow-md">
            TRACK SHIPMENT
          </button>
        </form>

        {searched && (
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Order #{orderId || 'NOV-84920'} is Out for Delivery</span>
            </div>
            <p>Courier: TCS Express Pakistan • Estimated delivery today by 4:00 PM in Lahore.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-[#faf9f6] rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-serif font-bold text-xl text-zinc-900">{isLogin ? 'Sign In to NOVARA' : 'Create Account'}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-zinc-700" />
          </button>
        </div>

        {success ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-serif font-bold text-lg text-zinc-900">Welcome to NOVARA VIP!</h4>
            <p className="text-xs text-zinc-500">You are successfully authenticated.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSuccess(true); setTimeout(onClose, 1500); }} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Full Name</label>
                <input type="text" required placeholder="Ayesha Khan" className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
              </div>
            )}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Password</label>
              <input type="password" required placeholder="••••••••" className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
            </div>
            <button type="submit" className="w-full bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 font-bold py-3.5 rounded-full text-xs transition-colors shadow-md">
              {isLogin ? 'SIGN IN' : 'REGISTER'}
            </button>
            <div className="text-center pt-2">
              <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-xs text-zinc-600 hover:text-[#d4af37] font-semibold">
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-[#faf9f6] rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-serif font-bold text-xl text-zinc-900">Help Center & FAQs</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-zinc-700" />
          </button>
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 text-xs">
          <div className="p-4 bg-white rounded-2xl border border-zinc-200">
            <h4 className="font-bold text-zinc-900 text-sm mb-1">What are the delivery charges across Pakistan?</h4>
            <p className="text-zinc-600">We offer FREE nationwide delivery on all orders above Rs. 3,000. Orders below Rs. 3,000 carry a flat delivery fee of Rs. 250.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-zinc-200">
            <h4 className="font-bold text-zinc-900 text-sm mb-1">What payment methods do you accept?</h4>
            <p className="text-zinc-600">We accept Cash on Delivery (COD), Visa, Mastercard, JazzCash, and Easypaisa.</p>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-zinc-200">
            <h4 className="font-bold text-zinc-900 text-sm mb-1">How do returns work?</h4>
            <p className="text-zinc-600">You can initiate a return or exchange within 7 days of receiving your order through our helpline or WhatsApp support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  subtotal: number;
  onOrderComplete: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, subtotal, onOrderComplete }) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({ name: '', phone: '', city: 'Lahore', address: '', payment: 'COD' });

  if (!isOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onOrderComplete();
      onClose();
      setStep('details');
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-[#faf9f6] rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-serif font-bold text-xl text-zinc-900">Secure Checkout — NOVARA</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-zinc-700" />
          </button>
        </div>

        {step === 'success' ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="font-serif font-bold text-2xl text-zinc-900">Order Placed Successfully!</h3>
            <p className="text-xs text-zinc-600">Thank you for shopping with NOVARA. Your order #{Math.floor(10000 + Math.random() * 90000)} is being packed.</p>
          </div>
        ) : (
          <form onSubmit={handleCheckoutSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Full Name</label>
                <input type="text" required placeholder="Ayesha Khan" className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Phone Number</label>
                <input type="text" required placeholder="0300 1234567" className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Delivery City</label>
              <select className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]">
                <option>Lahore</option>
                <option>Karachi</option>
                <option>Islamabad</option>
                <option>Faisalabad</option>
                <option>Rawalpindi</option>
                <option>Multan</option>
                <option>Peshawar</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">Complete Street Address</label>
              <textarea required rows={2} placeholder="House 123, Street 4, Sector..." className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#d4af37]"></textarea>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-2">Payment Method</label>
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center gap-2 p-3 rounded-xl bg-white border border-zinc-300 cursor-pointer text-xs font-semibold">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Cash on Delivery</span>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl bg-white border border-zinc-300 cursor-pointer text-xs font-semibold">
                  <input type="radio" name="payment" />
                  <span>JazzCash / EasyPaisa</span>
                </label>
                <label className="flex items-center gap-2 p-3 rounded-xl bg-white border border-zinc-300 cursor-pointer text-xs font-semibold">
                  <input type="radio" name="payment" />
                  <span>Credit Card</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 flex justify-between items-center">
              <div>
                <span className="text-xs text-zinc-500 block">Total Amount:</span>
                <span className="font-serif font-bold text-xl text-zinc-900">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <button type="submit" className="bg-[#121212] hover:bg-[#d4af37] text-white hover:text-zinc-950 font-bold px-8 py-3.5 rounded-full text-xs transition-all shadow-lg">
                PLACE ORDER NOW
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
