import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Rattanawan James | Holistic Practitioner",
  description: "Learn more about Rattanawan James, your dedicated holistic practitioner, wellness coach, and hypnotherapy expert guiding you on your healing journey.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Your Guide on the <span className="text-transparent bg-clip-text text-gradient">Healing Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            As a dedicated holistic practitioner and wellness coach, I provide compassionate support in a safe healing space, helping you achieve whole-person wellness.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Sidebar / Quick Facts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-heavy p-8 rounded-[32px] border-slate-100 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">My Roles</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Holistic Practitioner</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Hypnotherapy Practitioner</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Wellness Coach</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Life & Mindset Coach</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Transformational Coach</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Natural Wellness Expert</li>
                </ul>
              </div>
            </div>

            <div className="glass p-8 rounded-[32px] border-slate-100">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {["Stress Management", "Relaxation", "Confidence Building", "Empowerment", "Personal Growth", "Self-Discovery"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-100 text-foreground/80 text-sm rounded-lg border border-secondary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Story */}
          <div className="lg:col-span-8 glass p-8 md:p-12 rounded-[32px] border-slate-100 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Welcome to a space of profound transformation. As a <strong>mind-body practitioner</strong> and <strong>healing facilitator</strong>, my mission is to guide you through a deeply personalized wellness journey. I believe in a <strong>holistic approach</strong> to health, recognizing that true vitality comes from the intricate mind-body connection wellness.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">A Client-Centered Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every individual is unique, which is why I offer <strong>personalized sessions</strong> and <strong>one-on-one sessions</strong> tailored specifically to your needs. My practice is built on <strong>client-centered care</strong> and <strong>compassionate support</strong>. When we work together, we co-create a <strong>safe healing space</strong> and a <strong>supportive environment</strong> where you can explore your inner landscape without judgment.
              </p>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">Transformational Healing & Coaching</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you are seeking a <strong>personal development coach</strong>, a <strong>business mindset coach</strong>, or a <strong>purpose mentor</strong>, my goal is to empower you. As a <strong>stress management specialist</strong> and <strong>relaxation specialist</strong>, I integrate tools as a <strong>mindfulness practitioner</strong> and <strong>guided meditation practitioner</strong> to bring you profound relief from daily pressures.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you are looking for a <strong>personal growth mentor</strong> or a <strong>wellness mentor</strong> to act as your <strong>self-discovery guide</strong>, we will work on building your inner strength. Through <strong>empowerment coaching</strong> and <strong>confidence building</strong>, I serve as your <strong>resilience coach</strong>, equipping you with the tools to navigate life's challenges.
              </p>

              <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-2xl text-center">
                <p className="text-xl font-heading text-foreground italic">
                  "Ready to begin your transformational healing journey? Let's unlock your potential together."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
