import React from 'react';
import { REVIEWS } from '../data';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Client Testimonials</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900 mt-2">
            "Loved By Thousands"
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-3">
            Read authentic reviews from discerning shoppers across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#faf9f6] border border-zinc-200 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:border-[#d4af37] transition-all relative"
            >
              <div className="absolute top-6 right-6 text-zinc-300">
                <Quote className="w-8 h-8 opacity-40" />
              </div>

              <div>
                <div className="flex items-center text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                <p className="text-zinc-800 text-sm italic font-normal leading-relaxed">
                  "{review.comment}"
                </p>

                <div className="mt-4 pt-3 border-t border-zinc-200/60">
                  <span className="text-[11px] font-semibold text-[#d4af37] block">
                    {review.productName}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-zinc-900 text-sm">
                    {review.customerName}
                  </h4>
                  <p className="text-xs text-zinc-500">{review.location}</p>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
