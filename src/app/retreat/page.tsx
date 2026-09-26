"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CalendarDays, 
  Brain, 
  HeartHandshake, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  Clock, 
  Waves, 
  Quote, 
  Award, 
  Check, 
  Send,
  Compass,
  Sparkle
} from "lucide-react";
import Link from "next/link";

export default function RetreatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Read more states for equal card heights
  const [expandedHighlights, setExpandedHighlights] = useState<{ [key: string]: boolean }>({
    snst: false,
    hypno: false,
    group: false
  });

  const [expandedIntegration, setExpandedIntegration] = useState<{ [key: string]: boolean }>({
    program: false,
    daily: false
  });

  const [expandedAbout, setExpandedAbout] = useState<{ [key: string]: boolean }>({
    credentials: false,
    story: false
  });

  const toggleHighlight = (key: string) => {
    setExpandedHighlights(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleIntegration = (key: string) => {
    setExpandedIntegration(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAbout = (key: string) => {
    setExpandedAbout(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const clientStories = [
    { title: "Sleep Issues Reversed", desc: "Sleep issues for years that were immediately reversed." },
    { title: "Bladder Issues Resolved", desc: "Bladder issues, completely reversed." },
    { title: "Overcoming Dependencies", desc: "Stop drink & stop smoking naturally." },
    { title: "Financial Abundance", desc: "Receive money in 7 days." },
    { title: "Career Breakthrough", desc: "Get a job & aligned life purpose." }
  ];

  const whatIsIncluded = [
    "11-night stay in a private room at a luxury beachfront hotel in Thailand",
    "3 abundant, nutritious and delicious meals per day",
    "1 Deep Inner Path Healing Hypnotherapy & Self Mastery Technique",
    "3 Spinal Synergy sessions per day (depending on your tolerance)",
    "Choice of spa treatment each day (massage, facial, etc.)",
    "Group sessions exploring inherited trauma, family patterns, and latent emotional impressions",
    "Transportation from the airport to the hotel",
    "1-1 mindset coaching each week for 3 months after the retreat"
  ];

  const areasOfSpeciality = [
    "Unconscious limiting beliefs and deeply rooted thought patterns",
    "Emotional and behavioural patterns that may have developed through life experiences",
    "Trauma awareness and emotional healing",
    "Hypnotherapy and deep relaxation",
    "Unconscious-mind exploration and reprogramming",
    "Self-awareness and personal transformation",
    "Inherited and family patterns",
    "Emotional independence and confidence",
    "Helping people connect with and express their own truth",
    "Breaking repetitive patterns of fear, anger, self-doubt, and emotional reactivity"
  ];

  const faqs = [
    {
      q: "How many people will there be?",
      a: "We modelled six guests to ensure deep, intimate, and personalized attention. We are also open to beginning with intimate containers of one or two guests as long as the retreat remains a comprehensive 10-day intensive healing experience."
    },
    {
      q: "What can I expect to feel during the retreat?",
      a: "Through guided relaxation, you will be gently supported into a profound state of calm and inner awareness. Through gentle spinal neuro synergy therapy (SNST 3 times daily) and 1-on-1 hypnotherapy, stored physical and emotional tension releases. You will experience moving away from habitual fight, flight, or freeze into nervous system regulation, mental clarity, and reconnecting with your calm, knowing self."
    },
    {
      q: "What kinds of problems does this help with?",
      a: "This retreat is specifically designed for trauma (childhood, life journey, otherwise), deeply rooted limiting beliefs, undesirable lifestyle behaviours, self-sabotage, anger, fear, doubt, and guilt. It clears blocks so relationships and money can flow more easily, creating life-changing transformation."
    },
    {
      q: "What is the retreat format & daily rhythm?",
      a: "The retreat is structured across 12 days (11 nights): an arrival and welcome day, 8 full working days (with 2 to 3 healing sessions per day tailored safely to your tolerance), and a departure day without a healing session. Followed by 3 months of weekly one-on-one integration coaching with Rattanawan."
    },
    {
      q: "Where is the retreat located & what is included?",
      a: "Held at a Beachfront Luxury Hotel in Thailand. You will have a private room, space to relax and contemplate, and spa services available. It includes 3 abundant, nutritious meals daily, airport transportation, all private and group sessions, and 3 months of post-retreat support. Specific venue is disclosed depending on your attendance date."
    }
  ];

  return (
    <main className="min-h-screen bg-[#020C1B] text-[#E6F1FF] flex flex-col pt-24 overflow-hidden relative">
      {/* Background Ambience / Subtle Animated Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-primary/10 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />

      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary w-fit border border-primary/20 shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">12-Day Luxury Intensive Retreat</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.12] text-white">
              Self-Love Awakening <span className="text-transparent bg-clip-text text-gradient">Retreat</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary font-medium tracking-wide leading-snug">
              A retreat to become disillusioned with everything that's been holding you back.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[#CCD6F6] leading-relaxed font-light">
              <p>
                After you attend this 12-day luxury retreat, you will find the root cause of the undesirable emotions and lifestyle behaviours that are holding you back, such as self-sabotage; heal childhood trauma; and release fear, doubt, and guilt.
              </p>
              <p>
                My work will guide you to understand that every feeling has its purpose and to slowly dissolve the energetic patterns by expressing those feelings more deeply than you have before. My work involves a combination of spinal synergy, hypnotherapy, self-mastery techniques, and past-life regression. Through these methods, we will peel back the layers of the unconscious mind and create a new life unlike any you've known before.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#application" 
                className="btn-shine group relative flex items-center justify-center gap-3 bg-primary text-[#020C1B] px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_35px_rgba(80,200,198,0.55)] transition-all duration-300 hover:scale-[1.02]"
              >
                Apply for the Retreat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link 
                href="#highlights" 
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-card/70 text-foreground border border-primary/25 font-semibold hover:border-primary hover:bg-card transition-all duration-300"
              >
                Explore Key Highlights
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full rounded-[2.5rem] glass-heavy p-3 border border-primary/30 shadow-[0_15px_50px_rgba(0,0,0,0.7)] relative overflow-hidden group">
              <img 
                src="/images/banner1.png" 
                alt="Self-Love Awakening Retreat" 
                className="w-full h-auto rounded-3xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="mt-4 p-4 rounded-2xl bg-background/80 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 backdrop-blur-md">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Location</p>
                  <p className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0" /> Beachfront Luxury Hotel, Thailand
                  </p>
                </div>
                <div className="sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-white/5">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Duration</p>
                  <p className="text-sm font-bold text-primary flex items-center gap-1.5 mt-0.5 sm:justify-end">
                    <CalendarDays className="w-4 h-4 shrink-0" /> 12 Days (11 Nights)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3 Key Highlights Section with Equal Height & Read More Buttons */}
      <section id="highlights" className="relative w-full py-20 bg-[#071328]/80 border-t border-b border-primary/15 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
              Core Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
              3 Key <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg">
              A comprehensive multi-dimensional methodology combining nervous system regulation, subconscious reprogramming, and deep trauma resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Highlight 1: SNST */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-7 sm:p-9 rounded-3xl border border-primary/20 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 relative group min-h-[460px]"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Waves className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                  Spinal Neuro Synergy Therapy <span className="text-primary">(SNST)</span>
                </h3>
                
                {/* Always visible intro paragraph */}
                <p className="text-sm sm:text-base text-[#CCD6F6] leading-relaxed">
                  Work with a team member three times a day through Spinal Neuro Synergy Therapy (SNST), a practice designed to support the body’s natural ability to release tension, stress, and deeply held emotional patterns.
                </p>

                {/* Collapsible remaining content with smooth height animation */}
                <AnimatePresence initial={false}>
                  {expandedHighlights.snst && (
                    <motion.div
                      key="snst-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4 pt-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed border-t border-white/5 mt-4"
                    >
                      <p>
                        The approach is based on the idea that the body can retain the imprint of past experiences. Through gentle spinal and energetic work, SNST aims to help release stored emotional energy associated with childhood trauma experiences, foggy-headedness, and recurring patterns.
                      </p>
                      <p>
                        The practice also works with the body’s energetic system and chakras, with the intention of encouraging greater balance and flow through the spinal and astral column. By cultivating a greater sense of safety and regulation, the aim is to move away from habitual fight, flight, or freeze responses and create more space to consciously choose how to respond to life’s challenges. This can allow your body to heal itself and stop uncomfortable patterns from resurfacing.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Card Footer: Read More Button & Frequency Badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => toggleHighlight("snst")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer w-fit py-1"
                >
                  {expandedHighlights.snst ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  3x Daily Sessions
                </span>
              </div>
            </motion.div>

            {/* Highlight 2: Hypnotherapy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass p-7 sm:p-9 rounded-3xl border border-primary/20 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 relative group min-h-[460px]"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                  Daily 1-to-1 Hypnotherapy & <span className="text-primary">Self-Mastery</span>
                </h3>
                
                {/* Always visible intro paragraph */}
                <p className="text-sm sm:text-base text-[#CCD6F6] leading-relaxed">
                  Enjoy a private, one-hour hypnotherapy session each day, creating a deeply relaxing and safe space in which to quiet the conscious mind and connect with the deeper, unconscious mind and subconscious parts of yourself.
                </p>

                {/* Collapsible remaining content with smooth height animation */}
                <AnimatePresence initial={false}>
                  {expandedHighlights.hypno && (
                    <motion.div
                      key="hypno-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4 pt-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed border-t border-white/5 mt-4"
                    >
                      <p>
                        Through guided relaxation, you will be gently supported into a profound state of calm and inner awareness. From this deeply relaxed state, the session can explore the experiences, emotions, beliefs, and patterns that may be connected to a particular difficulty or challenge you are experiencing today.
                      </p>
                      <p>
                        You may be gently guided to explore an earlier memory, experience, or significant event that feels connected to the pattern you are experiencing. Rather than simply focusing on the symptoms or behaviour on the surface, the intention is to explore where the pattern may have begun and what beliefs or emotional responses may have developed around it.
                      </p>
                      <p>
                        With this unique method of Deep Inner Path Healing, Rattanawan will guide you so you can begin to recognise what is truly yours, what may have been learned through past experiences, and what beliefs no longer serve you. This process can create a deeper understanding of yourself and of the emotional patterns that influence the way you think, feel, and respond.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => toggleHighlight("hypno")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer w-fit py-1"
                >
                  {expandedHighlights.hypno ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  1-Hour Private Daily
                </span>
              </div>
            </motion.div>

            {/* Highlight 3: Group Sessions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-7 sm:p-9 rounded-3xl border border-primary/20 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 relative group min-h-[460px]"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                  Group Sessions: <span className="text-primary">Inherited Trauma</span>
                </h3>
                
                {/* Always visible intro paragraph */}
                <p className="text-sm sm:text-base text-[#CCD6F6] leading-relaxed">
                  Explore inherited trauma, family patterns, and latent emotional impressions through engaging group discussions.
                </p>

                {/* Collapsible remaining content with smooth height animation */}
                <AnimatePresence initial={false}>
                  {expandedHighlights.group && (
                    <motion.div
                      key="group-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4 pt-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed border-t border-white/5 mt-4"
                    >
                      <p>
                        By becoming more aware of patterns that may have been passed down through generations or absorbed through our experiences, we can begin to develop greater emotional independence from them.
                      </p>
                      <p>
                        In this supportive shared space, you will gain deep clarity on inherited familial tendencies, emotional baggage that was never yours to carry, and how to permanently release them to move through life with authentic confidence and peace.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => toggleHighlight("group")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer w-fit py-1"
                >
                  {expandedHighlights.group ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Interactive Circles
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Deep Inner Path Healing Method Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 z-10">
        <div className="glass-heavy p-8 md:p-14 rounded-[2.5rem] border border-primary/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest">
                Our Signature Approach
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                The Deep Inner Path <span className="text-primary">Healing Method</span>
              </h2>
              <p className="text-base md:text-lg text-[#CCD6F6] leading-relaxed font-light">
                My work involves a combination of spinal synergy, hypnotherapy, self-mastery techniques, and past-life regression. We do this because we need different techniques to target the conscious, subconscious, unconscious mind and the body itself. Most approaches only touch one. So the change feels good for a while, then the unhealed layers and limiting beliefs underneath pull you right back. By working all of them together, through these methods, we will peel back the layers of the unconscious mind and create a new life unlike any you've known before.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-card/90 border border-primary/20 text-center hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-primary font-heading">Conscious</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Reasoning Mind</p>
              </div>
              <div className="p-5 rounded-2xl bg-card/90 border border-primary/20 text-center hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-primary font-heading">Subconscious</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Emotional Memory</p>
              </div>
              <div className="p-5 rounded-2xl bg-card/90 border border-primary/20 text-center hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-primary font-heading">Unconscious</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Deep Root Beliefs</p>
              </div>
              <div className="p-5 rounded-2xl bg-card/90 border border-primary/20 text-center hover:border-primary transition-colors">
                <p className="text-2xl font-bold text-primary font-heading">Somatic Body</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">Nerve & Spine Imprints</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Your Transformation Program Section with Equal Cards & Read More */}
      <section className="relative w-full py-20 bg-[#071328]/60 border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
              Long-Term Success
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Integration: <span className="text-primary">3-Month Coaching</span>
            </h2>
            <p className="text-xl text-primary font-medium mt-2">Deep Inner Path Healing</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Card 1: Your Transformation Program */}
            <div className="glass p-7 sm:p-10 rounded-3xl border border-primary/20 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 min-h-[380px]">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-5 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  Your Transformation Program
                </h3>
                
                <div className="space-y-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed">
                  <p>
                    After your retreat, you will have 3 months of weekly one-on-one sessions with Rattanawan.
                  </p>
                  <p>
                    During these sessions, you will be guided into deep states of relaxation and reflection. In this space, your higher self will operate to help you visualise and process specific memories, traumas, and limiting beliefs that you need to overcome and heal.
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {expandedIntegration.program && (
                    <motion.div
                      key="integration-program-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4 pt-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed border-t border-white/5 mt-4"
                    >
                      <p>
                        You will be coached while in this trance state, so that you can rewire past pain and no longer relive it. This process allows your higher consciousness to operate and clear obstacles while your mind is at ease and open to change. This is a holistic & personalised healing program that addresses the root causes of imbalance and restores the belief that your body can heal itself.
                      </p>
                      <p>
                        When the old patterns and belief systems are addressed and worked through, the higher consciousness can lead in your future. This process completes the Deep Inner Path Healing program, so your reasoning mind can fully work for you, for a lifetime of making more aligned choices that allow you to live fully.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleIntegration("program")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer py-1"
                >
                  {expandedIntegration.program ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Weekly 1-on-1 Sessions
                </span>
              </div>
            </div>

            {/* Card 2: Weaving Retreat Openings */}
            <div className="glass p-7 sm:p-10 rounded-3xl border border-primary/20 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 min-h-[380px]">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-5 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary shrink-0" />
                  Weaving Openings Into Daily Life
                </h3>
                
                <div className="space-y-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed">
                  <p>
                    Your retreat is where it begins. What follows is three months of weekly one-on-one sessions with Rattanawan — time to take the openings you felt on retreat and weave them into the way you actually live.
                  </p>
                  <p>
                    Each session guides you into a deep state of relaxation and reflection, where the usual mental noise softens, and you can meet yourself honestly. From that settled, open place, you begin to notice the beliefs and patterns that have quietly run your life — the old stories about what's possible for you, what you deserve, what feels safe. With Rattanawan's guidance, you gently loosen their hold.
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {expandedIntegration.daily && (
                    <motion.div
                      key="integration-daily-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4 pt-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed border-t border-white/5 mt-4"
                    >
                      <p>
                        This is personal, unhurried work. Some sessions bring a long-held feeling to the surface; others simply let you see a familiar pattern from a new angle. Rattanawan holds that space and helps you make sense of what arises, so that instead of being pulled by old reactions, you can begin to respond from a clearer, wiser place within you.
                      </p>
                      <p>
                        Over three months, these shifts compound. Patterns that used to run in the background lose their charge. You reconnect with the steady, knowing part of yourself and let it lead — not just in our sessions, but in the everyday choices that shape your life. You leave not "fixed," but more at home in yourself: calmer, clearer, and able to choose in a way that truly aligns with who you're becoming.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleIntegration("daily")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer py-1"
                >
                  {expandedIntegration.daily ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Lifelong Integration
                </span>
              </div>
            </div>

          </div>

          {/* Client Stories / Concrete Results Grid */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-8">
              Client <span className="text-primary">Stories & Results</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientStories.map((story, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass border border-primary/20 hover:border-primary transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{story.title}</h4>
                    <p className="text-sm text-[#CCD6F6]">{story.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* What's Included & Details Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* What's Included */}
          <div className="lg:col-span-7 glass p-7 sm:p-11 rounded-[2.5rem] border border-primary/25 shadow-xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
              All-Inclusive Luxury
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              What's <span className="text-primary">Included</span>
            </h2>

            <ul className="space-y-4">
              {whatIsIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base md:text-lg text-[#E6F1FF] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Investment */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Location Box */}
            <div className="glass p-7 sm:p-8 rounded-[2rem] border border-primary/20 shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <MapPin className="text-primary w-6 h-6 shrink-0" />
                Location
              </h3>
              <p className="text-[#CCD6F6] leading-relaxed text-sm sm:text-base">
                This retreat will be held at a <strong>Beachfront Luxury Hotel in Thailand</strong>. You will have a private room, space to relax and contemplate, and spa services available to help you through this program. The specific venue will be disclosed depending on your attendance date.
              </p>
            </div>

            {/* Investment Box */}
            <div className="glass-heavy p-7 sm:p-8 rounded-[2rem] border-2 border-primary/40 relative overflow-hidden shadow-[0_0_35px_rgba(80,200,198,0.2)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <Award className="text-primary w-6 h-6 shrink-0" />
                Investment & Payment Plan
              </h3>
              <div className="space-y-3 text-[#CCD6F6] text-sm sm:text-base leading-relaxed">
                <p>
                  A deposit of <strong>14.5k pounds</strong> is required to reserve your retreat space.
                </p>
                <p>
                  An additional <strong>4k pounds</strong> will be due before the start of the retreat.
                </p>
                <p>
                  The remaining balance can be paid in full or on a <strong>3-part payment plan</strong> concluding 3 months after the retreat.
                </p>
                <div className="pt-2 text-xs font-semibold text-primary">
                  * A Wise transfer can be used to place your deposit securely.
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  href="#application" 
                  className="btn-shine w-full inline-flex items-center justify-center gap-2 bg-primary text-[#020C1B] py-3.5 px-6 rounded-full font-bold hover:shadow-[0_0_25px_rgba(80,200,198,0.45)] transition-all"
                >
                  Apply To Secure Your Spot
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* About Rattanawan: Credentials, Specialty & My Story with Equal Heights & Read More */}
      <section className="relative w-full py-20 bg-[#071328]/80 border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
              Your Guide & Practitioner
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              About <span className="text-primary">Rattanawan James</span>
            </h2>
            <p className="text-base sm:text-lg text-primary font-medium mt-2">
              Neurobehavioral Wellness Consultant & Holistic Hypnotherapist
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
            
            {/* Column 1: Credentials & Approach */}
            <div className="lg:col-span-6 glass p-7 sm:p-9 rounded-3xl border border-primary/20 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 min-h-[480px]">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4">
                  My Credentials & Areas of Specialty
                </h3>
                
                <div className="space-y-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed">
                  <p>
                    My work is shaped by many years of personal experience, study, training, and exploration into the human mind, emotional patterns, trauma, limiting beliefs, and unconscious programming.
                  </p>
                  <p>
                    My journey began from a deeply personal place, and it was happening in Thailand. After experiencing depression, anger, fear, and emotional patterns that I did not initially understand, I spent many years searching for answers. I explored a wide range of personal development and transformational approaches, including Self Mastery Technology (SMT), hypnotherapy, counselling, mindset work, and teachings from leading personal-development educators.
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {expandedAbout.credentials && (
                    <motion.div
                      key="about-credentials-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4 pt-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed border-t border-white/5 mt-4"
                    >
                      <p>
                        Rather than following one approach alone, I began bringing together the knowledge and insights I gained from these different areas. Through my own experience, I became particularly interested in understanding what sits beneath the conscious mind—the beliefs, emotional responses, memories, and patterns that can influence how we experience ourselves and the world around us.
                      </p>
                      
                      <div className="pt-2">
                        <h4 className="text-base font-bold text-white mb-3">Key Areas of Specialty:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                          {areasOfSpeciality.map((specialty, i) => (
                            <div key={i} className="flex items-start gap-2 text-[#CCD6F6]">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span>{specialty}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="pt-2">
                        That is why my work is centred on going deeper—not simply changing the way someone thinks on the surface, but exploring where a pattern may have started, what belief is underneath it, what emotional experience may be connected to it, and how a person can begin to understand themselves differently.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleAbout("credentials")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer py-1"
                >
                  {expandedAbout.credentials ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read Full Credentials & Specialties <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Credentials
                </span>
              </div>
            </div>

            {/* Column 2: My Story */}
            <div className="lg:col-span-6 glass p-7 sm:p-9 rounded-3xl border border-primary/20 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 min-h-[480px]">
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                  <Quote className="text-primary w-6 h-6 shrink-0" />
                  My Story
                </h3>
                
                <div className="space-y-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed font-light">
                  <p>
                    I was born in Thailand to a farm family. My mom worked tirelessly to put food on the table while my dad struggled with alcoholism. The house was often filled with arguments and fear, and as a child, I thought that was normal because that's all I knew. I carried those emotional patterns into adulthood without realising it. I thought I was just the way I was.
                  </p>
                  <p>
                    It wasn't until my late husband gently said, <em>"Darling, it's not normal to stay angry for seven or ten days."</em> And I thought, <em>"What are you talking about? I'm fine."</em> Later, when my ex said almost the exact same thing, hearing it from two people who loved me made me pause. It pushed me to wonder: why are they saying the same thing? What am I not seeing?
                  </p>
                </div>

                <AnimatePresence initial={false}>
                  {expandedAbout.story && (
                    <motion.div
                      key="about-story-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden space-y-4 pt-4 text-sm sm:text-base text-[#CCD6F6] leading-relaxed font-light border-t border-white/5 mt-4"
                    >
                      <p>
                        That's when I started searching for answers. I eventually realised I'd been living with depression for years without knowing it. My ex sent me a video about Bob Proctor, and something in that message sparked a curiosity in me. I wanted to understand why I thought and felt the way I did.
                      </p>
                      <p>
                        I went to seminars, read countless books, and learned from teachers like Tony Robbins, Dr Joe Dispenza, and others. I studied mindset, human behaviour, hypnotherapy, and unconscious programming because I wanted to understand why I wasn't able to heal completely.
                      </p>
                      <p>
                        Many methods taught me something valuable, but I still felt like something was missing. Over time, I began to develop my own approach, one that aims to go deeper into trauma, deeper into limiting beliefs and help people find their own truth. So today, my story continues as someone still healing, still learning, but also sharing tools that have helped a handful of people already.
                      </p>
                      <div className="pt-2">
                        <img 
                          src="/images/banner2.jpg" 
                          alt="Subconscious Mind Healing" 
                          className="w-full rounded-2xl object-cover shadow-lg border border-primary/20"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => toggleAbout("story")}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-white transition-colors cursor-pointer py-1"
                >
                  {expandedAbout.story ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Read Full Story <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Personal Journey
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
            Common Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass rounded-2xl border border-primary/20 overflow-hidden transition-all duration-300 hover:border-primary/40"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-white hover:text-primary transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} 
                  />
                </div>
              </button>

              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-[#CCD6F6] text-sm sm:text-base leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-20 z-10">
        <div className="glass-heavy rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-primary/40 shadow-2xl relative">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
              Private Application
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Retreat <span className="text-primary">Application</span>
            </h2>
            <p className="text-[#CCD6F6] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Due to the private, high-touch nature of this luxury container, spaces are strictly limited. Please complete the application below for attendance review and discovery call scheduling.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-primary/10 border border-primary/30 text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-primary mx-auto animate-bounce" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">Application Received</h3>
              <p className="text-[#CCD6F6] text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
                Thank you for applying for the Self-Love Awakening Retreat. Rattanawan and her team will review your responses and reach out shortly to coordinate your private discovery consultation.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Full Name *</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-white">Email Address *</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                    placeholder="you@example.com" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  What made you interested in this retreat? *
                </label>
                <textarea 
                  required 
                  rows={3} 
                  className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                  placeholder="Share what drew you to this experience..." 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  What is something that is holding you back? *
                </label>
                <textarea 
                  required 
                  rows={3} 
                  className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                  placeholder="Emotional patterns, self-doubt, chronic stress, relationships..." 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  What are you hoping to get out of this retreat? Name one goal or vision you have for yourself coming out of this retreat. *
                </label>
                <textarea 
                  required 
                  rows={3} 
                  className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                  placeholder="Your primary intention and transformation goal..." 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  What challenges in life, career, business, etc. do you think this retreat may help you with?
                </label>
                <textarea 
                  rows={2} 
                  className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                  placeholder="Describe your current challenges..." 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  What have you tried already to overcome this?
                </label>
                <textarea 
                  rows={2} 
                  className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                  placeholder="Therapy, books, retreats, other modalities..." 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Have you ever tried coaching, healing hypnotherapy, spinal neurosynergy therapy, or past-life regression?
                </label>
                <textarea 
                  rows={2} 
                  className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                  placeholder="Yes / No (detail your prior experiences)" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Do you have medical ailments? (Diabetes, high blood pressure, etc.)
                </label>
                <input 
                  type="text" 
                  className="w-full bg-[#071328]/90 border border-white/15 rounded-xl p-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm sm:text-base" 
                  placeholder="List any ongoing ailments or 'None'" 
                />
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 glass rounded-xl border border-white/10">
                  <input 
                    required 
                    type="checkbox" 
                    id="spinal" 
                    className="mt-1 w-5 h-5 accent-primary cursor-pointer shrink-0" 
                  />
                  <label htmlFor="spinal" className="text-xs sm:text-sm text-[#CCD6F6] cursor-pointer leading-relaxed">
                    I confirm that I am NOT currently experiencing any spinal or cranial injuries (as this may prevent participation in physical SNST sessions). *
                  </label>
                </div>

                <div className="flex items-start gap-4 p-4 glass rounded-xl border border-white/10">
                  <input 
                    required 
                    type="checkbox" 
                    id="medical" 
                    className="mt-1 w-5 h-5 accent-primary cursor-pointer shrink-0" 
                  />
                  <label htmlFor="medical" className="text-xs sm:text-sm text-[#CCD6F6] cursor-pointer leading-relaxed">
                    If I am struggling with any clinical mental health disorders, I confirm that I will obtain approval from my medical doctor prior to joining this retreat. *
                  </label>
                </div>
                
                <div className="flex items-start gap-4 p-4 glass rounded-xl border border-white/10">
                  <input 
                    required 
                    type="checkbox" 
                    id="travel" 
                    className="mt-1 w-5 h-5 accent-primary cursor-pointer shrink-0" 
                  />
                  <label htmlFor="travel" className="text-xs sm:text-sm text-[#CCD6F6] cursor-pointer leading-relaxed">
                    I confirm that I am available to travel for 2 weeks if I am approved for this retreat. *
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-shine w-full inline-flex items-center justify-center gap-3 bg-primary text-[#020C1B] font-bold text-base sm:text-lg py-5 rounded-2xl hover:shadow-[0_0_35px_rgba(80,200,198,0.55)] transition-all duration-300 mt-6 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                Submit Application For Consideration
              </button>
            </form>
          )}

        </div>
      </section>

    </main>
  );
}
