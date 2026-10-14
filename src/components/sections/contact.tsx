"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, ChevronDown, Clock, ShieldCheck } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Discovery Call (Complimentary — 20 Mins)",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch("https://formsubmit.co/ajax/rattanawanhypnotherapy@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service_of_interest: formData.service,
          message: formData.message,
          _subject: `New Discovery Call Inquiry: ${formData.name} (${formData.service})`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true || (data.message && data.message.includes("Activation"))) {
        setSubmitStatus('success');
        setStatusMessage(`Thank you, ${formData.name}! Your message has been sent to Rattanawan at rattanawanhypnotherapy@gmail.com. She will get back to you shortly.`);
        setFormData({
          name: "",
          email: "",
          service: "Discovery Call (Complimentary — 20 Mins)",
          message: ""
        });
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      setStatusMessage("Unable to send automatically. You can reach out directly at rattanawanhypnotherapy@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Discovery Call (Complimentary — 20 Mins)",
    "3-Month Coaching (Deep Inner Path Healing)",
    "Self-Love Awakening Retreat (12-Day Intensive)",
    "Hypnotherapy & Mindset Transformation",
    "Spinal Neuro Energy Flow (SNEF)",
    "Trauma & Burnout Recovery Support",
    "Other General Inquiry"
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#020C1B]" ref={containerRef}>
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary mb-4 shadow-sm"
          >
            <Mail size={16} />
            <span className="text-sm font-semibold tracking-wider uppercase">Contact Me</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Book a Complimentary <span className="text-transparent bg-clip-text text-gradient">Discovery Call</span>
          </motion.h2>
          <p className="text-[#CCD6F6] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Take the first step towards breaking inner patterns, releasing deep-seated stress, and uncovering your authentic truth. Fill out the form below to connect directly with Rattanawan.
          </p>
        </div>

        {/* Contact Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-heavy p-8 sm:p-12 rounded-[2.5rem] border border-primary/30 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-medium text-white flex items-center justify-between">
                  <span>Full Name</span>
                  <span className="text-xs text-primary">* Required</span>
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#071328]/90 border border-primary/25 rounded-xl px-4 py-3.5 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm sm:text-base shadow-inner"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-medium text-white flex items-center justify-between">
                  <span>Email Address</span>
                  <span className="text-xs text-primary">* Required</span>
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#071328]/90 border border-primary/25 rounded-xl px-4 py-3.5 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm sm:text-base shadow-inner"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Service of Interest Dropdown with High Contrast Styling */}
            <div className="space-y-2">
              <label htmlFor="service_type" className="text-sm font-medium text-white">
                Service of Interest
              </label>
              <div className="relative">
                <select 
                  name="service" 
                  id="service_type"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#071328] border border-primary/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer pr-10 text-sm sm:text-base shadow-inner"
                  style={{ backgroundColor: '#071328', color: '#FFFFFF' }}
                >
                  {serviceOptions.map((option, idx) => (
                    <option 
                      key={idx} 
                      value={option}
                      className="bg-[#071328] text-white py-2.5 px-3"
                      style={{ backgroundColor: '#071328', color: '#FFFFFF' }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white flex items-center justify-between">
                <span>Message</span>
                <span className="text-xs text-primary">* Required</span>
              </label>
              <textarea 
                name="message" 
                id="message"
                value={formData.message}
                onChange={handleChange}
                required 
                rows={5}
                className="w-full bg-[#071328]/90 border border-primary/25 rounded-xl px-4 py-3.5 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-sm sm:text-base shadow-inner"
                placeholder="Tell me a little bit about what you are seeking help with, your current challenges, or goals..."
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="btn-shine w-full group relative px-8 py-4 bg-primary text-[#020C1B] font-bold rounded-xl overflow-hidden flex items-center justify-center gap-3 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 shadow-[0_0_30px_rgba(80,200,198,0.4)] cursor-pointer text-base sm:text-lg"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending to Rattanawan...' : 'Send Message'}
              </span>
              {!isSubmitting && <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 text-emerald-300 bg-emerald-950/60 p-5 rounded-2xl border border-emerald-600/40 text-sm sm:text-base leading-relaxed"
              >
                <CheckCircle2 size={22} className="shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-bold text-white mb-1">Inquiry Sent Successfully!</p>
                  <p className="text-emerald-200/90 text-sm">{statusMessage}</p>
                </div>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2 text-rose-300 bg-rose-950/60 p-5 rounded-2xl border border-rose-600/40 text-sm leading-relaxed"
              >
                <div className="flex items-center gap-2">
                  <AlertCircle size={20} className="shrink-0 text-rose-400" />
                  <span className="font-bold text-white">Notice</span>
                </div>
                <p className="text-rose-200/90">{statusMessage}</p>
                <a 
                  href={`mailto:rattanawanhypnotherapy@gmail.com?subject=Discovery%20Call%20Inquiry%20from%20${encodeURIComponent(formData.name || 'Client')}&body=${encodeURIComponent(formData.message || '')}`}
                  className="inline-flex items-center gap-1.5 text-primary hover:underline font-bold mt-1"
                >
                  <Mail size={14} />
                  Click here to email directly: rattanawanhypnotherapy@gmail.com
                </a>
              </motion.div>
            )}

            {/* Direct Email Link & Assurance Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#CCD6F6]/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Response time: Within 24–48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>Direct:</span>
                <a 
                  href="mailto:rattanawanhypnotherapy@gmail.com" 
                  className="text-primary hover:underline font-semibold"
                >
                  rattanawanhypnotherapy@gmail.com
                </a>
              </div>
            </div>

          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
