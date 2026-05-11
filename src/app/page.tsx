import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { TechStrip } from "@/components/TechStrip";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <Navbar />
      <Hero />
      <TechStrip />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Vibudh Rathore. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
