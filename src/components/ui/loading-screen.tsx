"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative w-64 h-1 bg-slate-100 rounded-full overflow-hidden mb-8">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.2 }}
            />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-heading text-4xl font-bold tracking-tighter text-slate-900">
              MD<span className="text-primary">.</span>
            </span>
            <div className="w-px h-8 bg-white/20" />
            <motion.span 
              className="font-mono text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Math.min(progress, 100)}%
            </motion.span>
          </div>
          
          <motion.div 
            className="absolute bottom-12 text-sm font-medium tracking-widest uppercase text-muted-foreground/50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Initializing Experience
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
