import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mindset & Life Purpose Coaching | Rattanawan James",
  description: "Transform your mindset, build confidence, and discover your life purpose with specialized one-on-one coaching for personal and professional growth.",
};

export default function MindsetAndPurposePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            Personal & Professional Growth
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text text-gradient">Mindset & Purpose</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Unlock your potential, overcome self-doubt, and step into a purposeful, meaningful life with transformational coaching.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          
          <div className="glass p-8 md:p-12 rounded-[32px] border-slate-100 relative shadow-2xl">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Confidence & Mindset Transformation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              True <strong>personal empowerment</strong> begins with <strong>confidence building</strong>. I offer specialized <strong>mindset coaching</strong> to help you develop <strong>self-confidence</strong>, <strong>self-esteem</strong>, <strong>self-worth</strong>, and deep <strong>self-belief</strong>. We will work together to <strong>overcome self-doubt</strong> and cultivate an unshakeable <strong>inner confidence</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Through <strong>transformational coaching</strong>, we foster a <strong>positive mindset</strong>, <strong>growth mindset</strong>, and <strong>success mindset</strong>. Whether you seek <strong>mental clarity</strong>, <strong>clear thinking</strong>, or <strong>positive thinking</strong>, this <strong>mindset transformation</strong> builds profound <strong>mental resilience</strong>, <strong>emotional resilience</strong>, and <strong>inner strength</strong>.
            </p>
            <h3 className="text-xl font-heading font-bold text-foreground mt-8 mb-4">Discover Your Life Purpose</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you are seeking a <strong>meaningful life</strong>, my <strong>life purpose coaching</strong> helps you <strong>discover your life purpose</strong> and <strong>find your purpose</strong>. We focus on <strong>purposeful living</strong>, <strong>values alignment</strong>, and <strong>mindful living</strong>. Through <strong>clarity coaching</strong>, <strong>guided reflection</strong>, and <strong>journaling for self-discovery</strong>, you will gain <strong>vision and direction</strong> (<strong>vision setting</strong>) in our <strong>one-on-one purpose sessions</strong>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-heavy p-8 rounded-[32px] border-slate-100">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Professional & Executive Excellence</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                Beyond <strong>personal growth</strong> and <strong>self-development</strong>, I provide high-level <strong>success coaching</strong> and <strong>motivation coaching</strong> designed for leaders.
              </p>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Confidence for Professionals & Entrepreneurs</strong></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Leadership Mindset & Executive Mindset</strong></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Business Mindset & Entrepreneur Mindset</strong></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>High Performance Mindset</strong></li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> <strong>Goal Setting Support & Personal Achievement</strong></li>
              </ul>
            </div>

            <div className="glass p-8 rounded-[32px] border-slate-100">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Coaching Pathways</h3>
              <div className="flex flex-wrap gap-2">
                {["One on One Mindset Coaching", "Life Coaching", "Wellness Coaching", "Empowerment Coaching", "Holistic Mentoring", "Self-Awareness", "Self-Discovery", "Discover Your Potential", "Unlock Your Potential", "Purpose-Driven Living"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-100 text-foreground/80 text-sm rounded-lg border border-secondary/20">
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
