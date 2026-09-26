import React from 'react';
import { ShieldCheck, Truck, Lock, RotateCcw } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#d4af37]" />,
      title: 'Authentic Products',
      subtitle: '100% genuine products'
    },
    {
      icon: <Truck className="w-7 h-7 text-[#d4af37]" />,
      title: 'Fast Delivery',
      subtitle: 'Nationwide delivery in Pakistan'
    },
    {
      icon: <Lock className="w-7 h-7 text-[#d4af37]" />,
      title: 'Secure Payments',
      subtitle: 'Safe & protected checkout'
    },
    {
      icon: <RotateCcw className="w-7 h-7 text-[#d4af37]" />,
      title: 'Easy Returns',
      subtitle: 'Simple 7-day return process'
    }
  ];

  return (
    <section className="bg-white border-b border-zinc-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-[#faf9f6] border border-zinc-200/60 hover:border-[#d4af37] transition-all group shadow-2xs hover:shadow-md"
            >
              <div className="p-3 rounded-xl bg-zinc-900 group-hover:bg-[#121212] transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-serif font-bold text-zinc-900 text-base">{item.title}</h3>
                <p className="text-xs text-zinc-500 font-medium mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
