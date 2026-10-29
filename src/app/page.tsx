import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PortfolioAssistant } from "@/components/PortfolioAssistant";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { TechStrip } from "@/components/TechStrip";

export default function Home() {
  return (
    <main className="portfolio-background min-h-screen overflow-hidden text-white">
      <Navbar />
      <Hero />
      <TechStrip />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <PortfolioAssistant />
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Vibudh Rathore. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
