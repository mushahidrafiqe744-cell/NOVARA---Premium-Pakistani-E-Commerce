import React from 'react';
import { INSTAGRAM_PHOTOS } from '../data';
import { Instagram, Heart, Eye } from 'lucide-react';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 text-white text-xs font-bold tracking-wider uppercase mb-2">
            <Instagram className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>@NOVARA.PK</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-zinc-900">
            "Follow The NOVARA Life"
          </h2>
          <p className="text-zinc-600 text-sm md:text-base mt-3">
            Tag us in your moments of elegance to be featured in our global gallery.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md"
            >
              <img
                src={photo.url}
                alt="Instagram lifestyle"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2">
                <Instagram className="w-6 h-6 text-[#d4af37]" />
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> {photo.likes}</span>
                </div>
                <span className="text-[10px] text-zinc-300">View on IG</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
