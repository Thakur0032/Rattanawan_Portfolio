"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Leaf, Sun, Wind, Sparkles, Shield, HeartHandshake, Smile, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "3-Months Transformation",
    description: "What if 10 sessions could completely shift the way you think, work, and live? Experience a new mindset and a new life.",
    icon: <RefreshCw size={24} />,
    color: "group-hover:text-primary group-hover:border-primary/50"
  },
  {
    title: "Gut-Directed Hypnotherapy",
    description: "Alleviate anxiety and physical symptoms by calming the gut-brain connection.",
    icon: <Leaf size={24} />,
    color: "group-hover:text-primary group-hover:border-secondary/50"
  },
  {
    title: "Self-Love Awakening",
    description: "Cultivate deep self-acceptance and break through limiting beliefs holding you back.",
    icon: <HeartHandshake size={24} />,
    color: "group-hover:text-accent group-hover:border-accent/50"
  },
  {
    title: "Inner Pattern Breaking",
    description: "Identify and release subconscious patterns that sabotage your success and happiness.",
    icon: <Wind size={24} />,
    color: "group-hover:text-primary group-hover:border-primary/50"
  },
  {
    title: "Safe & Natural Relaxation",
    description: "Experience deep, natural relaxation in a secure and supportive environment.",
    icon: <Shield size={24} />,
    color: "group-hover:text-primary group-hover:border-secondary/50"
  },
  {
    title: "Worldwide Online Sessions",
    description: "Receive world-class therapy from the comfort of your home, available in USA, UK, UAE, AUS.",
    icon: <Sun size={24} />,
    color: "group-hover:text-accent group-hover:border-accent/50"
  },
  {
    title: "Anxiety Relief",
    description: "Rewire your mind for calmness and serenity, finding relief from chronic stress.",
    icon: <Smile size={24} />,
    color: "group-hover:text-primary group-hover:border-primary/50"
  },
  {
    title: "NLP Mastery",
    description: "Utilizing Neuro-Linguistic Programming techniques to accelerate your healing journey.",
    icon: <Sparkles size={24} />,
    color: "group-hover:text-primary group-hover:border-secondary/50"
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-secondary rounded-[100%] blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-secondary/20 text-primary mb-4 shadow-sm"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Therapies</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            How I Can <span className="text-transparent bg-clip-text text-gradient">Help You</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative h-full"
            >
              <div className="glass-heavy p-8 rounded-3xl h-full flex flex-col relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(144,201,181,0.4)] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
                
                <div className={cn(
                  "w-14 h-14 rounded-2xl bg-primary/5 border border-secondary/20 shadow-sm flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:scale-110 relative z-10",
                  service.color
                )}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 relative z-10 group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow relative z-10">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-[#020C1B] transition-colors cursor-pointer relative z-10">
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: hoveredIndex === idx ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="ml-2 text-primary">→</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
