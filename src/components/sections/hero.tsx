"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#FCFDFD]">
      {/* Abstract Business/Corporate Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-semibold text-sm mb-8 shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Accepting New Executive Clients
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text text-gradient">Mindset & Performance</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-8 max-w-2xl">
              Rattanawan James — Executive Wellness & Holistic Hypnotherapist
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed font-sans">
              Break through limiting beliefs, conquer executive burnout, and achieve profound emotional balance. My strategic mind-body approach empowers high-performers and professionals to unlock their true potential and lead with clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-white font-bold rounded-xl overflow-hidden flex items-center justify-center gap-2 transition-all hover:shadow-[0_8px_30px_rgb(10,186,181,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Schedule Strategy Session</span>
                <Calendar size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
              </Link>
              
              <Link
                href="#services"
                className="group px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md"
              >
                <span>Explore Solutions</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-primary" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-primary" />
                Certified Practitioner
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-primary" />
                Proven Methodology
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5]">
              {/* Decorative Corporate Frame */}
              <div className="absolute top-8 -right-8 w-full h-full border-2 border-primary/20 rounded-[2rem] z-0" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-slate-100 rounded-full blur-3xl z-0" />
              
              <div className="relative z-10 w-full h-full rounded-[2rem] bg-white p-3 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative group">
                  {/* Using a more professional/business-appropriate wellness image */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Text/Badge */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-1">Worldwide Online</p>
                    <p className="text-xl font-heading font-bold">Transformative care from anywhere in the world.</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Statistic Badge */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-20 -left-12 bg-white px-6 py-4 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  10+
                </div>
                <div>
                  <p className="font-bold text-slate-800 leading-tight">Years</p>
                  <p className="text-xs text-slate-500 font-medium">Experience</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
