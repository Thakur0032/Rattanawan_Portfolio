"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { History, Calendar } from "lucide-react";

const experiences = [
  {
    title: "CEO",
    company: "Rattanawan-hypnotherapy",
    period: "Jan 2024 - Present",
    description: "Leading a global online hypnotherapy practice specializing in self-love awakening, inner child healing, and gut-directed hypnotherapy. Empowering clients worldwide to break limiting patterns.",
    tags: ["Hypnotherapy", "Business Leadership", "Online Therapy", "Self-mastery"]
  },
  {
    title: "Director",
    company: "AA&ME",
    period: "Previous - Present",
    description: "Overseeing operations and strategic direction, ensuring the highest level of service and care. Guiding organizational growth and managing core business development.",
    tags: ["Director", "Management", "Strategy"]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-4 shadow-sm"
          >
            <History size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Journey</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            My Professional <span className="text-transparent bg-clip-text text-gradient">Experience</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          <div className="lg:col-span-8 max-w-4xl mx-auto relative w-full">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-muted -translate-x-1/2" />
            
            <div className="space-y-12">
              {experiences.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-secondary -translate-x-1/2 shadow-[0_0_15px_rgba(144,201,181,0.8)] border-4 border-background z-10 top-6" />
                    
                    {/* Content Container */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="glass bg-primary/5 p-6 rounded-2xl border-secondary/20 hover:border-secondary/60 transition-all duration-300 group shadow-md hover:shadow-lg">
                        <div className={`flex items-center gap-2 text-secondary font-medium mb-2 text-sm ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        
                        <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                          {exp.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className="px-2.5 py-1 text-xs font-medium bg-primary/5 border border-primary/20 rounded-md text-foreground/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex lg:col-span-4 flex-col gap-8 relative items-center"
          >
            <div className="w-full max-w-sm rounded-3xl glass-heavy p-3 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src="/images/img0.jpg" alt="Gallery 1" className="w-full h-auto object-contain rounded-2xl" />
            </div>
            
            <div className="w-4/5 max-w-xs self-end rounded-3xl glass-heavy p-3 shadow-xl -mt-16 transform -rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10">
               <img src="/images/img2.jpg" alt="Gallery 2" className="w-full h-auto object-contain rounded-2xl" />
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}
