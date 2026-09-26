import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-[#121212] text-[#fbf9f5] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/25 text-[#d4af37] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIP Privileges</span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
          "Stay Ahead of the Curve."
        </h2>

        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto mb-8 font-normal">
          Get exclusive offers, new arrivals and private deals directly in your inbox. No spam, ever.
        </p>

        {subscribed ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 p-4 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-sm font-semibold">Thank you! You are now subscribed to NOVARA VIP.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="w-full bg-zinc-900 border border-white/20 rounded-full pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#d4af37] hover:bg-[#c29e2f] text-zinc-950 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg cursor-pointer flex-shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        <p className="text-[11px] text-zinc-500 mt-4">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};
