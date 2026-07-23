"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Self-Love Awakening Hypnotherapist";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary-foreground font-medium text-sm mb-6 backdrop-blur-sm shadow-sm"
            >
              Heal & Transform Online (Worldwide)
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
              <span className="block text-3xl md:text-4xl text-muted-foreground font-normal mb-2">Welcome, I am</span>
              <span className="text-transparent bg-clip-text text-gradient">
                Rattanawan James
              </span>
            </h1>
            
            <div className="h-12 md:h-16 mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-1 h-8 md:h-10 ml-1 bg-primary align-middle"
                />
              </h2>
            </div>
            
            <p className="text-lg text-foreground/70 max-w-xl mb-10 leading-relaxed font-sans">
              Break Inner Patterns. Achieve self-acceptance and profound healing through tailored, gut-directed and mindset-shifting hypnotherapy sessions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="group relative px-8 py-4 bg-foreground text-background font-bold rounded-full overflow-hidden flex items-center gap-2 transition-transform hover:scale-105 shadow-xl shadow-foreground/10"
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 transition-colors duration-300">Book Discovery Call</span>
                <Calendar size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
              </Link>
              
              <Link
                href="#about"
                className="group px-8 py-4 bg-transparent border border-foreground/20 hover:border-foreground text-foreground font-medium rounded-full backdrop-blur-md flex items-center gap-2 transition-all hover:bg-foreground/5"
              >
                <span>Learn More</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[40px] opacity-40 blur-3xl animate-pulse" />
              
              <div className="relative w-full h-full rounded-[32px] glass-heavy p-3 overflow-hidden shadow-2xl">
                <div className="w-full h-full rounded-[24px] overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-16 -left-12 glass-heavy px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="font-semibold text-foreground text-sm tracking-wide">NLP Master</span>
              </motion.div>

              <motion.div 
                animate={{ y: [15, -15, 15] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-24 -right-8 glass-heavy px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <span className="font-semibold text-foreground text-sm tracking-wide">Gut-Directed</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
