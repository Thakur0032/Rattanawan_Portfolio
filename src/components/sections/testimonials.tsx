"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquareQuote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova Solutions",
    content: "Mukul is an absolute genius when it comes to Full Stack development. He completely transformed our outdated system into a lightning-fast React application. His attention to detail and UI design is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Chen",
    role: "Founder, GrowthAI",
    content: "Working with Mukul on our AI integration was the best decision we made. He seamlessly integrated OpenAI APIs into our platform and built a custom dashboard that increased our productivity by 300%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom E-commerce",
    content: "Mukul built a custom WordPress plugin and WooCommerce store for us that not only looks premium but loads instantly. Our conversion rates doubled within the first month of launch.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Williams",
    role: "Product Manager, FitLife App",
    content: "The Flutter app Mukul developed for us is phenomenal. The animations are smooth, the Firebase backend is robust, and the whole experience feels incredibly premium.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 right-0 w-full h-[500px] bg-secondary/5 rounded-[100%] blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-4"
          >
            <MessageSquareQuote size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Testimonials</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stories</span>
          </motion.h2>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap gap-6 py-4 px-3">
          {/* Double the array for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] flex-shrink-0 glass p-8 rounded-3xl border-white/5 whitespace-normal flex flex-col hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={testimonial.image} alt={testimonial.name} className="object-cover w-full h-full" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
