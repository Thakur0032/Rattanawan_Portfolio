"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Programs", 
    children: [
      { name: "10-Day Healing", href: "/programs/10-day-healing" }
    ]
  },
  {
    name: "Therapies",
    children: [
      { name: "Hypnotherapy", href: "/therapies/hypnotherapy" },
      { name: "Spinal Synergy", href: "/therapies/spinal-synergy" }
    ]
  },
  {
    name: "Support & Coaching",
    children: [
      { name: "Trauma & Stress Relief", href: "/support/trauma-and-stress" },
      { name: "Mindset & Life Purpose", href: "/coaching/mindset-and-purpose" }
    ]
  },
  {
    name: "Resources",
    children: [
      { name: "Free Guides", href: "/resources" },
      { name: "Blog", href: "/blog" }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-secondary/20 shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          <Link href="/" className="relative z-10 flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-background font-bold text-xl shadow-[0_0_15px_rgba(80,200,198,0.3)] group-hover:scale-105 transition-transform">
              RJ
            </div>
            <span className="font-heading font-bold text-xl hidden lg:block text-foreground group-hover:text-primary transition-colors">
              Rattanawan James
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div className="flex items-center gap-1 cursor-pointer text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
                    {item.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-56">
                      <div className="bg-background/95 backdrop-blur-xl border border-secondary/20 rounded-xl shadow-xl overflow-hidden p-2 flex flex-col gap-1">
                        {item.children.map(child => (
                          <Link 
                            key={child.name} 
                            href={child.href}
                            className={cn(
                              "px-4 py-2 rounded-lg text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                              pathname === child.href ? "bg-primary/5 text-primary" : "text-foreground/80"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href!}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative group py-2 flex",
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                    <span className={cn("absolute bottom-1 left-0 h-0.5 bg-primary transition-all", pathname === item.href ? "w-full" : "w-0 group-hover:w-full")} />
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              href="/#contact"
              className="px-5 py-2.5 rounded-full bg-slate-50 border border-secondary/30 text-foreground font-medium hover:bg-slate-100 hover:border-secondary transition-all shadow-sm whitespace-nowrap"
            >
              Let's Talk
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-10 p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-b border-secondary/20 shadow-lg py-6 px-4 flex flex-col gap-2 lg:hidden"
          >
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.children ? (
                  <>
                    <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mt-4 mb-2 px-2">
                      {item.name}
                    </div>
                    {item.children.map(child => (
                      <Link 
                        key={child.name} 
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary p-2 pl-4 border-l-2 border-primary/20"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link 
                    href={item.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary p-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 w-full px-5 py-3 rounded-xl bg-primary text-background font-medium text-center"
            >
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
