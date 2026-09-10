"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Note: Replace with actual Service ID, Template ID, and Public Key from EmailJS
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      if (submitStatus !== 'error') {
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-4 shadow-sm"
          >
            <Mail size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Contact Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Book a Complimentary <span className="text-transparent bg-clip-text text-gradient">Discovery Call</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Take the first step towards breaking inner patterns. Fill out the form below to connect and schedule your session.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto glass bg-primary/5 p-8 md:p-12 rounded-3xl border-secondary/20 relative overflow-hidden shadow-lg"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-medium text-foreground/80">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  id="user_name"
                  required 
                  className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/10 transition-colors shadow-inner"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-medium text-foreground/80">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  id="user_email"
                  required 
                  className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/10 transition-colors shadow-inner"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service_type" className="text-sm font-medium text-foreground/80">Service of Interest</label>
              <select 
                name="service_type" 
                id="service_type"
                className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/10 transition-colors appearance-none shadow-inner"
              >
                <option value="Discovery Call">Discovery Call (Complimentary)</option>
                <option value="10-Session Transformation">10-Session Transformation</option>
                <option value="Gut-Directed Hypnotherapy">Gut-Directed Hypnotherapy</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
              <textarea 
                name="message" 
                id="message"
                required 
                rows={5}
                className="w-full bg-background border border-secondary/30 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 focus:bg-primary/10 transition-colors resize-none shadow-inner"
                placeholder="Tell me a little bit about what you are seeking help with..."
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative px-8 py-4 bg-primary text-[#020C1B] font-bold rounded-xl overflow-hidden flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 shadow-md"
            >
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 transition-colors duration-300">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              {!isSubmitting && <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 justify-center mt-4 bg-green-950/50 py-3 rounded-xl border border-green-800"
              >
                <CheckCircle2 size={18} />
                <span>Message sent successfully! I will be in touch shortly.</span>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 justify-center mt-4 bg-red-950/50 py-3 rounded-xl border border-red-800"
              >
                <AlertCircle size={18} />
                <span>Something went wrong. Please try again later.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
