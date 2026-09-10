import Hero from "@/components/sections/hero";
import TrustedBy from "@/components/sections/trusted-by";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}
