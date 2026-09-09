"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Empowering Professionals Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {/* Faux Logos for Business Feel */}
          <div className="font-heading font-bold text-xl text-slate-800 flex items-center gap-2 hover:text-primary transition-colors cursor-default">
            <div className="w-5 h-5 rounded-sm bg-primary" /> WELLNESS CO.
          </div>
          <div className="font-heading font-bold text-xl text-slate-800 flex items-center gap-2 hover:text-primary transition-colors cursor-default">
            <div className="w-5 h-5 rounded-full border-2 border-primary" /> GLOBAL HEALTH
          </div>
          <div className="font-heading font-bold text-xl text-slate-800 flex items-center gap-2 hover:text-primary transition-colors cursor-default">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 2L2 22h20L12 2z"/></svg>
            MIND INSTITUTE
          </div>
          <div className="font-heading font-bold text-xl text-slate-800 flex items-center gap-2 hover:text-primary transition-colors cursor-default">
            <div className="w-5 h-5 rotate-45 bg-secondary" /> SYNERGY CLINIC
          </div>
        </div>
      </div>
    </section>
  );
}
