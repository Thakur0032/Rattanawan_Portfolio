import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CustomCursor from "@/components/ui/custom-cursor";
import AnimatedBackground from "@/components/ui/animated-background";
import LoadingScreen from "@/components/ui/loading-screen";

export const metadata: Metadata = {
  title: "Rattanawan James | Self-Love Awakening Hypnotherapist",
  description: "Break Inner Patterns, Heal & Transform Online. Gut-Directed Hypnotherapy, NLP Master & Self-mastery Hypnosis Specialist.",
  keywords: ["Hypnotherapy", "Self-Love", "Gut-Directed Hypnotherapy", "Rattanawan James", "Anxiety Relief", "Mental Wellness"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary">
        <div className="noise-overlay" />
        <LenisProvider>
          <LoadingScreen />
          <AnimatedBackground />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
