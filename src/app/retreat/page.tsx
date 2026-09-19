"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, CalendarDays, Brain, Shield, HeartHandshake, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function RetreatPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-24 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-20 lg:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Luxury Retreat</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Self-Love Awakening <span className="text-primary">Retreat</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              A retreat to become disillusioned from everything that's been holding you back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#application" 
                className="group relative flex items-center justify-center gap-3 bg-primary text-[#020C1B] px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgb(80,200,198,0.4)] transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-heavy rounded-[2.5rem] p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/banner2.jpg" 
                alt="Self-Love Awakening Retreat" 
                className="w-full h-auto rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept & Experience Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The <span className="text-primary">Experience</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            After you attend this 12-day luxury retreat, you will find the root cause of the undesirable emotions and limiting beliefs that have shaped your reality. This isn't just relaxation—it is deep neurobehavioral reprogramming designed for permanent change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              title: "Luxury Environment",
              desc: "Premium accommodation, gourmet food, airport transport, and spa access."
            },
            {
              icon: CalendarDays,
              title: "12-Day Container",
              desc: "Arrival day, 10 deep transformative working days, and a mindful departure."
            },
            {
              icon: Shield,
              title: "Intimate Group",
              desc: "Highly exclusive and private to ensure profound 1-on-1 attention."
            },
            {
              icon: HeartHandshake,
              title: "Ongoing Support",
              desc: "3 months of continued integration support following the retreat."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modalities Section */}
      <section className="relative w-full bg-card/50 py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">The <span className="text-primary">Method</span></h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Spinal Neuro Synergy Therapy (SNST)",
                    desc: "3 times daily with a specialized team member. Releases stored trauma, bad memories, and stuck energetic patterns from the physical body."
                  },
                  {
                    title: "1-1 Hypnotherapy",
                    desc: "Daily 1-hour private sessions focused on unconscious mind reprogramming to dismantle limiting beliefs and reactive habits."
                  },
                  {
                    title: "Group Integration",
                    desc: "Understanding inherited traumas and latent impressions. Discover emotional independence and real confidence without fear."
                  }
                ].map((modality, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold mb-2">{modality.title}</h4>
                      <p className="text-muted-foreground">{modality.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <img 
                src="/images/banner1.png" 
                alt="Retreat Modalities" 
                className="w-full rounded-3xl object-cover shadow-2xl glass p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="relative w-full max-w-4xl mx-auto px-6 py-24 z-10">
        <div className="glass-heavy rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retreat <span className="text-primary">Application</span></h2>
            <p className="text-muted-foreground">Please fill out this form to apply. We will review your application and contact you for a private discovery call.</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input type="email" className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="you@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">What made you interested in this retreat?</label>
                <textarea rows={3} className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">What is something that is holding you back?</label>
                <textarea rows={3} className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">What are you hoping to get out of this retreat? Name one goal or vision.</label>
                <textarea rows={3} className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Have you ever tried coaching, hypnotherapy, SNST, or past-life regression?</label>
                <textarea rows={2} className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="flex items-start gap-4 p-4 glass rounded-xl">
                <input type="checkbox" id="medical" className="mt-1 w-5 h-5 accent-primary" />
                <label htmlFor="medical" className="text-sm text-muted-foreground">
                  I understand that if I am struggling with any mental health disorders, I must get approval from my doctor to join this retreat. I also understand that individuals with current spinal or cranial injuries may not be able to participate.
                </label>
              </div>
              
              <div className="flex items-start gap-4 p-4 glass rounded-xl">
                <input type="checkbox" id="travel" className="mt-1 w-5 h-5 accent-primary" />
                <label htmlFor="travel" className="text-sm text-muted-foreground">
                  I am available to travel for 2 weeks if I am approved for this retreat.
                </label>
              </div>
            </div>

            <button 
              type="button" 
              className="w-full bg-primary text-[#020C1B] font-bold text-lg py-5 rounded-xl hover:shadow-[0_0_30px_rgb(80,200,198,0.4)] transition-all duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
