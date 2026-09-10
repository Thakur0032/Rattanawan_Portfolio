import { Metadata } from "next";

export const metadata: Metadata = {
  title: "10-Day Healing Program | Rattanawan James",
  description: "Join the intensive 10-day healing program. A personalized wellness program focusing on emotional healing, stress relief, and holistic personal development.",
};

export default function TenDayHealingPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            Intensive Wellness Program
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            The <span className="text-transparent bg-clip-text text-gradient">10-Day Healing Program</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A deeply immersive, personalized healing program designed to restore energy, clear mental fog, and initiate profound mindset transformation.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          
          <div className="glass p-8 md:p-12 rounded-[32px] border-accent relative shadow-2xl">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Your Transformation Program</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Welcome to a <strong>transformational healing program</strong> unlike any other. This <strong>one-on-one healing program</strong> offers <strong>private healing sessions</strong> dedicated to your unique emotional and physical needs. As a <strong>customized wellness program</strong>, we focus on deep <strong>emotional healing</strong> and <strong>stress relief</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Throughout your <strong>healing journey</strong> and <strong>wellness journey</strong>, you will experience <strong>relaxation therapy</strong>, <strong>deep relaxation</strong>, and <strong>guided relaxation</strong> designed for complete <strong>nervous system support</strong> and to <strong>restore energy</strong>. This is a <strong>holistic healing program</strong> that addresses the root causes of imbalance.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-heavy p-8 rounded-[32px] border-accent">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Program Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Burnout recovery support & Stress management</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Emotional well-being & Emotional balance</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Confidence building & Self-esteem support</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Discover your life purpose & Direction</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Inner peace & Resiliency building</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-[32px] border-accent">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Coaching Elements</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">Wellness Coaching</span>
                <span className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">Life Coaching</span>
                <span className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">Mindset Coaching</span>
                <span className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">Transformational Coaching</span>
                <span className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">Personal Growth</span>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Callout */}
        <div className="max-w-4xl mx-auto glass-heavy p-10 rounded-[32px] text-center border-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Embrace Whole Person Wellness</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              This <strong>mind body healing program</strong> integrates <strong>natural healing</strong>, <strong>balanced living</strong>, and <strong>healthy lifestyle</strong> practices. With my <strong>one-on-one support</strong>, we will create a <strong>personalized wellness plan</strong> for your <strong>long-term well-being</strong>, <strong>sustainable wellness</strong>, and <strong>holistic personal development</strong>.
            </p>
            <a href="/#contact" className="inline-block px-8 py-4 bg-primary text-[#020C1B] font-bold rounded-full transition-transform hover:scale-105">
              Start Your 10-Day Journey
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
