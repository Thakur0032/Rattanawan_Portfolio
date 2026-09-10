import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trauma Support & Stress Relief | Rattanawan James",
  description: "Supporting emotional well-being and resilience during difficult times. Holistic trauma support, burnout recovery, and stress management for inner peace.",
};

export default function TraumaAndStressPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            Emotional Well-Being
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text text-gradient">Support & Restoration</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Supporting emotional well-being and resilience during difficult times through compassionate, trauma-informed care.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          
          <div className="glass p-8 md:p-12 rounded-[32px] border-accent relative shadow-2xl">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Healing & Resilience</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When navigating difficult times, finding a path to <strong>emotional healing</strong> and <strong>emotional restoration</strong> is vital. I offer <strong>trauma support</strong>, <strong>trauma recovery support</strong>, and <strong>holistic trauma support</strong> through a <strong>trauma-informed support</strong> framework. My goal is to facilitate <strong>mind-body healing</strong>, helping you with <strong>healing after trauma</strong>, <strong>healing from emotional pain</strong>, and <strong>healing after adversity</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Life brings many changes. I provide <strong>holistic support for life transitions</strong>, <strong>coping with life challenges</strong>, <strong>life transition support</strong>, <strong>grief support</strong>, and <strong>bereavement support</strong> (including <strong>healing after loss</strong>). Whether it is <strong>emotional support during illness</strong>, <strong>cancer journey emotional support</strong>, or <strong>caregiver stress support</strong>, you will find <strong>compassionate one on one support</strong>.
            </p>
            <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">Burnout & Overwhelm</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are facing <strong>emotional overwhelm support</strong>, I specialize in <strong>stress management</strong>, <strong>stress relief</strong>, <strong>stress reduction</strong>, and <strong>chronic stress support</strong>. We focus on <strong>burnout recovery support</strong>, <strong>burnout prevention</strong>, and <strong>recovery from overwork</strong>. This is crucial for <strong>professional stress support</strong>, <strong>executive stress support</strong>, <strong>entrepreneur stress relief</strong>, and <strong>workplace stress relief</strong>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-heavy p-8 rounded-[32px] border-accent">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Finding Inner Peace</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Nervous System:</strong> Nervous system regulation & relaxation</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Relaxation:</strong> Deep relaxation, guided relaxation, calming the mind</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Balance:</strong> Emotional balance, work-life balance, balance and restoration</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Mindfulness:</strong> Mindfulness practices & self-care routines</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Sleep:</strong> Sleep support, better sleep, anxiety support</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-[32px] border-accent">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Outcomes</h3>
              <div className="flex flex-wrap gap-2">
                {["Inner Peace", "Inner Calm", "Inner Strength", "Emotional Resilience", "Resilience Building", "Stress Coping Strategies", "Holistic Emotional Wellness", "Personalized Healing Sessions", "Gentle One-on-One Sessions", "Wellbeing Support"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
