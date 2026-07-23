"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderGit2, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const projects = [
  {
    title: "AI Business Automation Platform",
    description: "Custom AI platform integrating chatbots, automation workflows, document processing, and API services for enterprise clients.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "OpenAI", "Node.js", "Tailwind"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Flutter Meditation App",
    description: "Cross-platform Flutter application with Firebase backend, user authentication, and a modern, calming UI design.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Flutter", "Firebase", "Dart", "UX Design"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "WordPress Membership Website",
    description: "Custom plugin development, advanced Elementor customization, payment gateway integration, and user dashboard.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["WordPress", "PHP", "Elementor", "Stripe"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Custom CRM Dashboard",
    description: "Scalable admin dashboard with real-time analytics, comprehensive reports, and automated workflow triggers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Laravel", "MySQL", "Chart.js"],
    links: { demo: "#", github: "#" }
  }
];

export default function Projects() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-4"
          >
            <FolderGit2 size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Portfolio</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </motion.h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

function ProjectCard({ project, idx }: any) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const isEven = idx % 2 === 0;

  return (
    <div ref={cardRef} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
      
      {/* Project Image */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-3/5 relative group"
      >
        <div className="relative rounded-2xl overflow-hidden glass border-white/10 aspect-[4/3] sm:aspect-video md:aspect-[16/10]">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.image} 
            alt={project.title}
            className="object-cover w-full h-full grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      </motion.div>

      {/* Project Info */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-2/5 flex flex-col"
      >
        <div className="flex gap-2 text-primary font-medium mb-4 text-sm font-heading tracking-widest">
          Featured Project 0{idx + 1}
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
          {project.title}
        </h3>
        
        <div className="glass p-6 md:p-8 rounded-2xl border-white/5 mb-6 text-muted leading-relaxed shadow-xl relative z-20 md:-ml-12 lg:-ml-24 xl:-ml-32">
          {project.description}
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag: string, tIdx: number) => (
            <span key={tIdx} className="text-sm font-medium text-white/70">
              {tag} {tIdx < project.tags.length - 1 && <span className="mx-2 text-white/20">•</span>}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-6">
          <a href={project.links.github} className="text-muted hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <FiGithub size={20} />
            <span>Code</span>
          </a>
          <a href={project.links.demo} className="text-muted hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </motion.div>

    </div>
  );
}
