"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-secondary/20 bg-background/50 pt-16 pb-8 overflow-hidden mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-primary/40 bg-card shadow-[0_0_15px_rgba(80,200,198,0.2)] group-hover:scale-105 transition-transform shrink-0">
                <img src="/images/logo.png" alt="Rattanawan James Logo" className="w-full h-full object-contain p-1" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                Rattanawan James<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Self-Love Awakening Hypnotherapist & Holistic Wellness Coach. Break Inner Patterns, Heal & Transform Online (Worldwide).
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.linkedin.com/in/rattanawan-james-203658340/" icon={<FiLinkedin size={20} />} />
              <SocialLink href="#" icon={<FiInstagram size={20} />} />
              <SocialLink href="#" icon={<FiFacebook size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Me</FooterLink>
              <FooterLink href="/programs/3-months-program">3-Months Program</FooterLink>
              <FooterLink href="/retreat">Self-Love Awakening Retreat</FooterLink>
              <FooterLink href="/#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-primary">Therapies & Support</h3>
            <ul className="space-y-3">
              <FooterLink href="/therapies/hypnotherapy">Hypnotherapy</FooterLink>
              <FooterLink href="/therapies/spinal-synergy">Spinal Synergy</FooterLink>
              <FooterLink href="/support/trauma-and-stress">Trauma & Stress Relief</FooterLink>
              <FooterLink href="/coaching/mindset-and-purpose">Mindset & Purpose</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4 text-primary">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="/resources">Free Guides</FooterLink>
              <FooterLink href="/blog">Wellness Blog</FooterLink>
              <FooterLink href="/resources#mindfulness">Mindfulness Exercises</FooterLink>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-secondary/20">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Rattanawan James. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform text-primary" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-secondary/5 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-secondary/10 hover:border-primary/30"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
        {children}
      </Link>
    </li>
  );
}
