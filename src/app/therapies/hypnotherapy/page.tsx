import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hypnotherapy Services | Rattanawan James",
  description: "Experience holistic and clinical hypnotherapy. Guided hypnosis for stress relief, anxiety support, sleep improvement, and mindset transformation.",
};

export default function HypnotherapyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            Subconscious Mind Work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Transformational <span className="text-transparent bg-clip-text text-gradient">Hypnotherapy</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Harness the power of your subconscious mind through clinical and holistic hypnotherapy to create lasting positive change.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          
          <div className="glass p-8 md:p-12 rounded-[32px] border-accent relative shadow-2xl">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">What is Holistic Hypnotherapy?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Hypnotherapy</strong> bridges the gap between your conscious desires and your <strong>subconscious mind</strong>. Through <strong>clinical hypnotherapy</strong> and <strong>therapeutic hypnosis</strong>, I guide you into a state of <strong>deep relaxation</strong> and heightened focus.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Using <strong>guided hypnosis</strong>, <strong>relaxation hypnosis</strong>, and <strong>guided visualization</strong>, we bypass limiting beliefs. This <strong>personalized hypnotherapy</strong> provides profound <strong>stress management</strong>, <strong>anxiety support</strong>, and <strong>emotional well-being</strong>.
            </p>
            <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">Mindset & Performance</h3>
            <p className="text-muted-foreground leading-relaxed">
              We focus heavily on <strong>mindset transformation</strong> and <strong>positive mindset</strong>. Whether you need <strong>motivation</strong>, <strong>goal achievement</strong>, or <strong>performance mindset</strong> coaching, hypnotherapy provides rapid <strong>confidence building</strong>—including <strong>public speaking confidence</strong>, <strong>exam confidence</strong>, and <strong>interview confidence</strong>. For professionals, we cultivate an unstoppable <strong>business mindset</strong>, <strong>entrepreneur mindset</strong>, and <strong>executive confidence</strong>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-heavy p-8 rounded-[32px] border-accent">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Areas of Support</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Stress Relief</strong> & Emotional Balance</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Confidence:</strong> Self-confidence, Self-esteem, Self-belief</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Sleep Support:</strong> Better sleep & Insomnia support</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Habit Change:</strong> Smoking cessation & Weight management mindset</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Mental Clarity:</strong> Focus improvement & Concentration support</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-[32px] border-accent">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Wellness Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Relaxation Techniques", "Mindfulness", "Wellness Support", "Resilience Building", "Emotional Resilience", "Personal Growth", "One-on-One Hypnotherapy"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary text-[#020C1B] font-bold rounded-full transition-transform hover:scale-105">
            Book a Hypnotherapy Session
          </a>
        </div>

      </div>
    </div>
  );
}
