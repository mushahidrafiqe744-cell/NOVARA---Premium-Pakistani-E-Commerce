import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenTrackOrder: () => void;
  onOpenHelp: () => void;
  onOpenAuth: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTrackOrder, onOpenHelp, onOpenAuth }) => {
  return (
    <footer id="footer" className="bg-[#0c0c0c] text-zinc-400 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <span className="font-serif text-3xl font-extrabold tracking-widest text-white">
                NOVARA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mt-1">
                Premium Products. Exceptional Experience.
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Pakistan’s premier multi-category luxury e-commerce destination. Offering meticulously curated fashion, beauty, electronics, and lifestyle goods.
            </p>

            <div className="flex items-center gap-4 text-white">
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-zinc-950 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-zinc-950 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-zinc-950 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-zinc-950 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-5 tracking-wide">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#shop" className="hover:text-[#d4af37] transition-colors">All Products</a></li>
              <li><a href="#new-arrivals" className="hover:text-[#d4af37] transition-colors">New Arrivals</a></li>
              <li><a href="#best-sellers" className="hover:text-[#d4af37] transition-colors">Best Sellers</a></li>
              <li><a href="#flash-deals" className="hover:text-[#d4af37] transition-colors">Flash Deals</a></li>
              <li><a href="#categories" className="hover:text-[#d4af37] transition-colors">Categories</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-5 tracking-wide">Customer Care</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><button onClick={onOpenHelp} className="hover:text-[#d4af37] transition-colors text-left">Contact Us</button></li>
              <li><button onClick={onOpenHelp} className="hover:text-[#d4af37] transition-colors text-left">Shipping & Delivery</button></li>
              <li><button onClick={onOpenHelp} className="hover:text-[#d4af37] transition-colors text-left">Returns & Exchanges</button></li>
              <li><button onClick={onOpenTrackOrder} className="hover:text-[#d4af37] transition-colors text-left">Track Order</button></li>
              <li><button onClick={onOpenHelp} className="hover:text-[#d4af37] transition-colors text-left">FAQs</button></li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-5 tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>+92 42 3111 NOVARA</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>support@novara.pk</span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <button onClick={onOpenAuth} className="text-xs font-semibold text-[#d4af37] hover:underline">
                Manage Account & Orders →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Methods */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <p>© 2026 NOVARA. All Rights Reserved.</p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-zinc-500 font-semibold">Secure Payment Methods:</span>
            <span className="bg-zinc-900 border border-white/10 px-3 py-1 rounded text-white font-bold">Visa</span>
            <span className="bg-zinc-900 border border-white/10 px-3 py-1 rounded text-white font-bold">Mastercard</span>
            <span className="bg-zinc-900 border border-white/10 px-3 py-1 rounded text-white font-bold">Cash on Delivery</span>
            <span className="bg-zinc-900 border border-white/10 px-3 py-1 rounded text-emerald-400 font-bold">JazzCash</span>
            <span className="bg-zinc-900 border border-white/10 px-3 py-1 rounded text-cyan-400 font-bold">Easypaisa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
