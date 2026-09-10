"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Brain, Heart, Sparkles, Activity } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills = [
    "Executive Coaching", "NLP Master", "Mindset Shift",
    "Stress Management", "Burnout Recovery", "Subconscious Reprogramming",
    "Goal Attainment", "Holistic Wellness"
  ];

  return (
    <section id="about" className="py-24 relative bg-background" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-4 shadow-sm"
          >
            <Sparkles size={16} />
            <span className="text-sm font-semibold tracking-wider uppercase">The Practitioner</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Is your mindset secretly <span className="text-transparent bg-clip-text text-gradient">hijacking your success?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-card p-8 md:p-12 rounded-[2rem] border border-accent relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-700" />
            
            <h3 className="text-2xl font-heading font-bold text-foreground/90 mb-6 relative z-10">
              Heal the Mind, Elevate the Career.
            </h3>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 relative z-10 shrink-0 flex items-start justify-center">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-card p-2 border border-accent shadow-[0_4px_20px_rgb(0,0,0,0.05)]">
                  <img 
                    src="/images/img1.jpg" 
                    alt="Rattanawan James" 
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-1000 hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-4 text-muted-foreground relative z-10 leading-relaxed text-[1.05rem]">
                <p>
                  I am Rattanawan James, an Executive Wellness Coach and Holistic Hypnotherapist. I help high-performers, founders, and leaders break their inner patterns, releasing deep-seated anxiety and uncovering their true potential.
                </p>
                <p>
                  A calm nervous system leads to a clear, unstoppable mind. My methodology is safe, natural, and highly effective—allowing you to reprogram limiting beliefs at the subconscious level. Whether you are seeking world-class online sessions from the USA, UK, UAE, or AUS, I am here to guide you toward profound clarity.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 relative z-10">
              {skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 text-xs font-semibold bg-secondary border border-accent rounded-lg text-foreground/80 hover:bg-primary hover:text-[#020C1B] hover:border-primary transition-all cursor-default"
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
            className="lg:col-span-5 grid grid-cols-2 gap-6"
          >
            <StatCard icon={<Heart />} end={10} suffix="" label="Sessions to Pivot" delay={0.5} isInView={isInView} />
            <StatCard icon={<Brain />} end={100} suffix="%" label="Natural & Safe" delay={0.6} isInView={isInView} />
            <StatCard icon={<Activity />} end={500} suffix="+" label="Leaders Transformed" delay={0.7} isInView={isInView} />
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card p-6 rounded-2xl border border-accent flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(10,186,181,0.1)]"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-[#020C1B] transition-all duration-300">
        {icon}
      </div>
      <div className="text-4xl font-bold text-foreground/90 mb-2 font-heading">
        {count}{suffix}
      </div>
      <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
}
