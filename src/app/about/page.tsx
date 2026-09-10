import { Metadata } from "next";
import { CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me | Rattanawan James | Executive Wellness Coach",
  description: "Learn more about Rattanawan James, your dedicated executive wellness coach and holistic hypnotherapy expert guiding you to elevate your mindset.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Abstract Corporate Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest shadow-sm">
            <Sparkles size={16} />
            The Practitioner
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            Elevate Your <span className="text-transparent bg-clip-text text-gradient">Mind & Career</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            As an Executive Wellness Coach and Holistic Hypnotherapist, I provide strategic, compassionate support to help high-performers achieve profound clarity and unstoppable success.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Sidebar / Quick Facts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-heavy p-8 rounded-[2rem] border-accent relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-primary" size={24} />
                  My Roles
                </h3>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6]" /> Executive Wellness Coach</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6]" /> Holistic Hypnotherapist</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6]" /> NLP Master Practitioner</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6]" /> Mindset & Performance Coach</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#50C8C6]" /> Burnout Recovery Specialist</li>
                </ul>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border-accent">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="text-primary" size={24} />
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Stress Management", "Burnout Recovery", "Subconscious Reprogramming", "Goal Attainment", "Leadership Mindset", "Confidence Building"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-accent text-foreground/90 text-sm font-medium rounded-lg border border-accent/50 hover:border-primary transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Story */}
          <div className="lg:col-span-8 glass p-8 md:p-12 rounded-[2rem] border-accent shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                Welcome to a space of profound transformation. As a <strong>strategic mind-body practitioner</strong> and <strong>executive wellness coach</strong>, my mission is to guide high-performers, founders, and leaders through a deeply personalized wellness journey. I believe in a <strong>holistic approach</strong> to health, recognizing that true peak performance comes from the intricate mind-body connection.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mt-10 mb-4 border-b border-accent pb-2">A Client-Centered Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every individual is unique, which is why I offer <strong>personalized, one-on-one sessions</strong> tailored specifically to your corporate and personal needs. My practice is built on <strong>client-centered care</strong> and <strong>strategic support</strong>. When we work together, we co-create a <strong>safe healing space</strong> where you can explore and dismantle your inner roadblocks without judgment.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mt-10 mb-4 border-b border-accent pb-2">Transformational Healing & Coaching</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you are seeking a <strong>business mindset coach</strong>, an <strong>executive development coach</strong>, or a <strong>purpose mentor</strong>, my goal is to empower you. As a <strong>stress management specialist</strong> and <strong>burnout recovery expert</strong>, I integrate cutting-edge hypnotherapy with practical tools to bring you profound relief from daily corporate pressures.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you are looking for a <strong>personal growth mentor</strong> or an <strong>executive wellness guide</strong>, we will work on building your inner resilience. Through <strong>empowerment coaching</strong> and <strong>subconscious reprogramming</strong>, I serve as your strategic partner, equipping you with the tools to navigate both life and business challenges with supreme confidence.
              </p>

              <div className="mt-12 p-8 bg-primary/10 border border-primary/20 rounded-2xl text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <p className="text-xl md:text-2xl font-heading font-medium text-foreground relative z-10 italic">
                  "Ready to begin your transformational journey? Let's unlock your ultimate potential together."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
