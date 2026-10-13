import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Brain, Heart, Compass, ShieldCheck, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "3-Month Coaching – Deep Inner Path Healing | Rattanawan James",
  description: "Experience the 3-Month Coaching Deep Inner Path Healing Program with Rattanawan James. Transformational one-on-one healing for burnout recovery, emotional balance, and purpose.",
};

export default function ThreeMonthsProgramPage() {
  const benefits = [
    "Burnout recovery support & Stress management",
    "Emotional well-being & Emotional balance",
    "Confidence building & Self-esteem support",
    "Discover your life purpose & Direction",
    "Inner peace & Resiliency building"
  ];

  const coreFocusAreas = [
    "One-on-One Healing Program",
    "Deep Relaxation & Trance Coaching",
    "Nervous System Support",
    "Subconscious Reprogramming",
    "Trauma & Limiting Belief Resolution",
    "Long-Term Sustainable Wellness"
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
            One-on-One Transformation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            3-Month Coaching – <span className="text-transparent bg-clip-text text-gradient">Deep Inner Path Healing</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium max-w-3xl mx-auto leading-relaxed">
            A deeply immersive, personalized healing program designed to restore energy, clear mental fog, and initiate profound subconscious transformation.
          </p>
        </div>

        {/* Content Section: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16 items-start">
          
          {/* Main Transformation Column */}
          <div className="lg:col-span-7 glass-heavy p-8 md:p-12 rounded-[2rem] border border-primary/25 relative shadow-2xl space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider">
              Signature Container
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Your Transformation Program
            </h2>
            
            <div className="space-y-5 text-base sm:text-lg text-[#CCD6F6] leading-relaxed font-light">
              <p>
                During this one-on-one healing program, you will be guided into deep states of relaxation and reflection. In this space, your higher self will operate to help you visualize and process specific memories, traumas, and limiting beliefs that you need to overcome and heal.
              </p>
              <p>
                You will be coached while in this trance state, so that you can rewire past pain and no longer relive it. This process allows your higher consciousness to operate and clear obstacles while your mind is at ease and open to change. This is a <strong>holistic &amp; personalized healing program</strong> that addresses the root causes of imbalance and restores the belief that your body can heal itself.
              </p>
              <p className="pt-2 text-sm text-[#A8B2D1] border-t border-white/10">
                Throughout your <strong>healing journey</strong> and <strong>wellness journey</strong>, you receive customized <strong>relaxation therapy</strong> and <strong>guided relaxation</strong> designed for complete <strong>nervous system support</strong>, sustainable energy restoration, and <strong>holistic personal development</strong>.
              </p>
            </div>
          </div>

          {/* Benefits & Program Highlights Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Program Benefits Box */}
            <div className="glass-heavy p-8 rounded-[2rem] border border-primary/30 shadow-xl">
              <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="text-primary w-6 h-6 shrink-0" />
                Program Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#E6F1FF] font-medium leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Focus Badges */}
            <div className="glass p-8 rounded-[2rem] border border-primary/20 shadow-xl">
              <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                <Compass className="text-primary w-6 h-6 shrink-0" />
                Coaching Modalities
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreFocusAreas.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-3.5 py-1.5 bg-[#071328]/90 text-[#CCD6F6] text-xs font-medium rounded-xl border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
          
        </div>

        {/* Bottom Callout Box */}
        <div className="max-w-4xl mx-auto glass-heavy p-10 sm:p-14 rounded-[2.5rem] text-center border-2 border-primary/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              Embrace Whole Person Wellness
            </h2>
            <p className="text-base sm:text-lg text-[#CCD6F6] leading-relaxed mb-8 max-w-2xl mx-auto font-light">
              This <strong>mind body healing program</strong> integrates natural healing, nervous system regulation, and conscious living. With weekly one-on-one sessions, we anchor a <strong>personalized wellness plan</strong> that restores long-term vitality, emotional harmony, and self-belief.
            </p>
            <Link 
              href="/#contact" 
              className="btn-shine inline-flex items-center gap-3 px-9 py-4 bg-primary text-[#020C1B] font-bold text-base sm:text-lg rounded-full transition-transform hover:scale-105 shadow-[0_0_30px_rgba(80,200,198,0.4)]"
            >
              Start Your 3-Months Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
