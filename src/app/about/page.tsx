import { Metadata } from "next";
import { ShieldCheck, TrendingUp, Sparkles, Quote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me | Rattanawan James | Holistic Hypnotherapist & Wellness Coach",
  description: "Learn more about Rattanawan James, certified holistic hypnotherapist, neurobehavioral wellness consultant, and practitioner dedicated to deep inner path healing.",
};

export default function AboutPage() {
  const specialties = [
    "Unconscious limiting beliefs and deeply rooted thought patterns",
    "Emotional and behavioural patterns developed through life experiences",
    "Trauma awareness and emotional healing",
    "Hypnotherapy and deep relaxation",
    "Unconscious-mind exploration and reprogramming",
    "Self-awareness and personal transformation",
    "Inherited and family patterns",
    "Emotional independence and confidence",
    "Helping people connect with and express their own truth",
    "Breaking repetitive patterns of fear, anger, self-doubt, and reactivity"
  ];

  return (
    <main className="min-h-screen bg-[#020C1B] text-[#E6F1FF] flex flex-col pt-28 pb-24 overflow-hidden relative">
      {/* Background Ambience / Matching Glowing Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest shadow-sm">
            <Sparkles size={16} />
            The Practitioner
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text text-gradient">Rattanawan James</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium max-w-3xl mx-auto leading-relaxed">
            Neurobehavioral Wellness Consultant & Holistic Hypnotherapist
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* Sidebar: Credentials & Specialties Overview */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Roles Card */}
            <div className="glass-heavy p-8 rounded-[2rem] border border-primary/25 relative overflow-hidden group shadow-xl">
              <div className="relative z-10">
                <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-primary" size={24} />
                  Areas of Focus
                </h3>
                <ul className="space-y-4 text-[#CCD6F6] text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6] shrink-0" />
                    Self-Love Awakening Hypnotherapy
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6] shrink-0" />
                    Neurobehavioral Consulting
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6] shrink-0" />
                    Self Mastery Technology (SMT)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6] shrink-0" />
                    Subconscious Reprogramming
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6] shrink-0" />
                    Spinal Synergy & Trauma Release
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Specialties Tags */}
            <div className="glass p-8 rounded-[2rem] border border-primary/20 shadow-xl">
              <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="text-primary" size={24} />
                Key Themes
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Childhood Trauma",
                  "Limiting Beliefs",
                  "Inner Peace",
                  "Emotional Freedom",
                  "Self-Sabotage Relief",
                  "Stress Management",
                  "Past-Life Regression",
                  "Family Patterns"
                ].map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1.5 bg-[#071328]/90 text-[#CCD6F6] text-xs font-medium rounded-lg border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Banner preview */}
            <div className="glass p-3 rounded-[2rem] border border-primary/25 overflow-hidden">
              <img 
                src="/images/banner1.png" 
                alt="Self-Love Awakening Hypnotherapy" 
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

          </div>

          {/* Main Content: Story & Credentials */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Credentials & Approach */}
            <div className="glass p-8 md:p-12 rounded-[2rem] border border-primary/25 shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
                My Credentials & Areas of Specialty
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-[#CCD6F6] leading-relaxed font-light">
                <p>
                  My work is shaped by many years of personal experience, study, training, and exploration into the human mind, emotional patterns, trauma, limiting beliefs, and unconscious programming.
                </p>
                <p>
                  My journey began from a deeply personal place, and it was happening in Thailand. After experiencing depression, anger, fear, and emotional patterns that I did not initially understand, I spent many years searching for answers. I explored a wide range of personal development and transformational approaches, including Self Mastery Technology (SMT), hypnotherapy, counselling, mindset work, and teachings from leading personal-development educators.
                </p>
                <p>
                  Rather than following one approach alone, I began bringing together the knowledge and insights I gained from these different areas. Through my own experience, I became particularly interested in understanding what sits beneath the conscious mind—the beliefs, emotional responses, memories, and patterns that can influence how we experience ourselves and the world around us.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  My Work Focuses Particularly On:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#CCD6F6]">
                  {specialties.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-base text-[#CCD6F6] leading-relaxed border-t border-white/10 pt-6">
                That is why my work is centred on going deeper—not simply changing the way someone thinks on the surface, but exploring where a pattern may have started, what belief is underneath it, what emotional experience may be connected to it, and how a person can begin to understand themselves differently.
              </p>
            </div>

            {/* My Story */}
            <div className="glass p-8 md:p-12 rounded-[2rem] border border-primary/25 shadow-2xl relative overflow-hidden">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <Quote className="text-primary w-7 h-7 shrink-0" />
                My Story
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#CCD6F6] leading-relaxed font-light">
                <p>
                  I was born in Thailand to a farm family. My mom worked tirelessly to put food on the table while my dad struggled with alcoholism. The house was often filled with arguments and fear, and as a child, I thought that was normal because that&apos;s all I knew. I carried those emotional patterns into adulthood without realising it. I thought I was just the way I was.
                </p>
                <p>
                  It wasn&apos;t until my late husband gently said, <em>&ldquo;Darling, it&apos;s not normal to stay angry for seven or ten days.&rdquo;</em> And I thought, <em>&ldquo;What are you talking about? I&apos;m fine.&rdquo;</em> Later, when my ex said almost the exact same thing, hearing it from two people who loved me made me pause. It pushed me to wonder: why are they saying the same thing? What am I not seeing?
                </p>
                <p>
                  That&apos;s when I started searching for answers. I eventually realised I&apos;d been living with depression for years without knowing it. My ex sent me a video about Bob Proctor, and something in that message sparked a curiosity in me. I wanted to understand why I thought and felt the way I did.
                </p>
                <p>
                  I went to seminars, read countless books, and learned from teachers like Tony Robbins, Dr Joe Dispenza, and others. I studied mindset, human behaviour, hypnotherapy, and unconscious programming because I wanted to understand why I wasn&apos;t able to heal completely.
                </p>
                <p>
                  Many methods taught me something valuable, but I still felt like something was missing. Over time, I began to develop my own approach, one that aims to go deeper into trauma, deeper into limiting beliefs and help people find their own truth. So today, my story continues as someone still healing, still learning, but also sharing tools that have helped a handful of people already.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white">Ready for Deep Transformation?</h4>
                  <p className="text-sm text-muted-foreground">Explore private sessions or the 12-day retreat.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Link
                    href="/retreat"
                    className="btn-shine px-6 py-3 rounded-full bg-primary text-[#020C1B] font-bold text-sm text-center hover:shadow-[0_0_20px_rgba(80,200,198,0.4)] transition-all"
                  >
                    View Retreat
                  </Link>
                  <Link
                    href="/#contact"
                    className="px-6 py-3 rounded-full bg-card border border-primary/30 text-white font-medium text-sm text-center hover:border-primary transition-all"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </main>
  );
}
