import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Holistic Healing Blog | Rattanawan James",
  description: "Read the latest wellness inspiration, stress relief tips, and mind-body healing articles on our holistic healing blog.",
};

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            Insights & Articles
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text text-gradient">Wellness Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your source for a <strong>holistic healing blog</strong> and <strong>wellness blog</strong> filled with <strong>wellness inspiration</strong> and <strong>wellness education blog content</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Post 1 */}
          <Link href="#" className="glass p-6 rounded-[32px] border-accent hover:border-primary/50 transition-all hover:-translate-y-2 group block">
            <div className="aspect-[16/10] rounded-2xl bg-accent mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000')] bg-cover bg-center grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Mind & Body</div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              The Ultimate Guide to Burnout Recovery Advice
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Explore vital <strong>stress relief tips</strong>, <strong>work-life balance strategies</strong>, and <strong>executive wellness tips</strong> in our latest <strong>mind-body healing articles</strong>.
            </p>
          </Link>

          {/* Post 2 */}
          <Link href="#" className="glass p-6 rounded-[32px] border-accent hover:border-primary/50 transition-all hover:-translate-y-2 group block">
            <div className="aspect-[16/10] rounded-2xl bg-accent mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000')] bg-cover bg-center grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Therapies</div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              Understanding the Subconscious Mind
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dive into our <strong>hypnotherapy blog</strong> and <strong>spinal synergy blog</strong> for deep insights. Includes <strong>sleep improvement tips</strong> and <strong>mindfulness and meditation tips</strong>.
            </p>
          </Link>

          {/* Post 3 */}
          <Link href="#" className="glass p-6 rounded-[32px] border-accent hover:border-primary/50 transition-all hover:-translate-y-2 group block">
            <div className="aspect-[16/10] rounded-2xl bg-accent mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000')] bg-cover bg-center grayscale-[50%] group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Personal Growth</div>
            <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              Building Inner Resilience
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A staple of our <strong>personal growth blog</strong>. Read <strong>resilience building articles</strong>, <strong>confidence building articles</strong>, <strong>self-esteem advice</strong>, and <strong>life purpose articles</strong>.
            </p>
          </Link>

        </div>

        <div className="max-w-4xl mx-auto mt-16 glass-heavy p-8 rounded-[32px] border-accent text-center">
          <p className="text-muted-foreground text-sm">
            Also explore our <strong>positive mindset posts</strong>, <strong>trauma recovery support articles</strong>, and <strong>holistic lifestyle posts</strong>.
          </p>
        </div>

      </div>
    </div>
  );
}
