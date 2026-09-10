import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holistic Wellness Resources | Rattanawan James",
  description: "Access free wellness downloads, self-care guides, and holistic wellness education to support your healing journey.",
};

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            Free Toolkits & Guides
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text text-gradient">Wellness Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated library of holistic wellness resources, self-help resources, and free wellness downloads to support your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Resource Card 1 */}
          <div className="glass p-8 rounded-[32px] border-accent hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">Self-Care Guides</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Comprehensive <strong>wellness guides</strong> including a complete <strong>self-care guide</strong>, <strong>healthy lifestyle tips</strong>, and <strong>holistic living toolkits</strong>.
            </p>
            <button className="text-primary text-sm font-bold uppercase tracking-wider group-hover:underline">Download PDF</button>
          </div>

          {/* Resource Card 2 */}
          <div className="glass p-8 rounded-[32px] border-accent hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">Stress & Nervous System</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Access <strong>stress management resources</strong>, <strong>burnout recovery resources</strong>, and <strong>nervous system regulation tips</strong> to restore calm.
            </p>
            <button className="text-primary text-sm font-bold uppercase tracking-wider group-hover:underline">Download PDF</button>
          </div>

          {/* Resource Card 3 */}
          <div className="glass p-8 rounded-[32px] border-accent hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">Mind & Body Exercises</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Practical <strong>mind-body connection tools</strong>, <strong>relaxation techniques</strong>, <strong>mindfulness exercises</strong>, and <strong>sleep improvement tips</strong>.
            </p>
            <button className="text-primary text-sm font-bold uppercase tracking-wider group-hover:underline">Download Audio</button>
          </div>

        </div>

        <div className="max-w-4xl mx-auto mt-16 glass-heavy p-10 rounded-[32px] border-accent">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">More Healing Resources</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["Healing Resources", "Resilience Building Resources", "Mindset Resources", "Trauma Support Information", "Guided Journaling Worksheets", "Confidence Building Exercises", "Holistic Wellness Education"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-accent text-foreground/80 text-sm rounded-lg border border-secondary/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
