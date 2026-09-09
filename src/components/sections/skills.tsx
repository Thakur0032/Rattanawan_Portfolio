"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Node.js", "Express", "MySQL", "Firebase", "REST APIs"],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Firebase", "Android", "iOS"],
    color: "from-purple-500 to-fuchsia-400"
  },
  {
    title: "CMS & E-commerce",
    skills: ["WordPress", "Elementor", "WooCommerce", "Rank Math", "Custom Plugins"],
    color: "from-orange-500 to-amber-400"
  },
  {
    title: "AI & Automation",
    skills: ["OpenAI", "Gemini", "ChatGPT", "Prompt Engineering", "Vector Databases", "API Integration"],
    color: "from-primary to-accent"
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Android Studio", "Cursor AI"],
    color: "from-slate-400 to-slate-200"
  }
];

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-4"
          >
            <Layers size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Tech Stack</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass p-8 rounded-3xl border-slate-100 relative group hover:border-slate-200 transition-colors"
            >
              <div className={cn("absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity", category.color)} />
              
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className={cn("w-2 h-2 rounded-full bg-gradient-to-r", category.color)} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-50 border border-slate-100 rounded-lg text-muted-foreground group-hover:text-slate-900/90 hover:bg-slate-100 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
