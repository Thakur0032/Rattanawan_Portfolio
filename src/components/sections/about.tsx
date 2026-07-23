"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Brain, Heart, Sparkles, Activity } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills = [
    "Gut-Directed Hypnotherapy", "NLP Master", "Self-mastery Hypnosis",
    "Anxiety Relief", "Inner Child Healing", "Mindset Shift",
    "Trauma Release", "Subconscious Reprogramming"
  ];

  return (
    <section id="about" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-secondary/20 text-secondary mb-4 shadow-sm"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">About Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Is your gut health secretly <span className="text-transparent bg-clip-text text-gradient">hijacking your success?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 glass p-8 md:p-10 rounded-3xl border-secondary/20 relative overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-700" />
            
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 relative z-10">
              Heal the Mind, Heal the Body.
            </h3>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative z-10 shrink-0 flex items-start justify-center">
                <div className="w-full max-w-sm rounded-3xl overflow-hidden glass-heavy p-3 shadow-xl">
                  <img 
                    src="/images/img1.jpg" 
                    alt="Rattanawan James" 
                    className="w-full h-auto object-contain rounded-2xl transition-transform duration-1000 hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-4 text-muted-foreground relative z-10 leading-relaxed text-lg">
                <p>
                  I am Rattanawan James, a dedicated Self-Love Awakening Hypnotherapist, NLP Master, and Self-Mastery Hypnosis Specialist. I help individuals across the globe break their inner patterns, releasing anxiety and uncovering their true potential.
                </p>
                <p>
                  A calm gut leads to a calm mind. Is hypnotherapy risky? Absolutely not. It is a safe, natural, and deep state of relaxation that allows you to reprogram limiting beliefs at the subconscious level. Whether you are seeking world-class online sessions from the USA, UK, UAE, or AUS, I am here to guide you toward profound healing.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 relative z-10">
              {skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 text-xs font-medium bg-primary/5 border border-secondary/30 rounded-full text-foreground/90 hover:bg-secondary/20 hover:text-secondary-foreground hover:border-secondary/50 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <StatCard icon={<Heart />} end={10} suffix="" label="Sessions to New Life" delay={0.5} isInView={isInView} />
            <StatCard icon={<Brain />} end={100} suffix="%" label="Natural & Safe" delay={0.6} isInView={isInView} />
            <StatCard icon={<Activity />} end={500} suffix="+" label="Lives Transformed" delay={0.7} isInView={isInView} />
            <StatCard icon={<Sparkles />} end={4} suffix="" label="Continents Served" delay={0.8} isInView={isInView} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, end, suffix, label, delay, isInView }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay }}
      className="glass bg-primary/5 p-6 rounded-2xl border-secondary/20 flex flex-col items-center justify-center text-center group hover:bg-primary/10 hover:border-secondary/50 transition-all duration-300 shadow-sm"
    >
      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-foreground mb-1 font-heading">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
