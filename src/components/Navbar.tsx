import { Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-teal-300/30 bg-teal-300/10 text-sm font-bold text-teal-200">
            VR
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Vibudh Rathore</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15 md:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-teal-300/40 hover:text-teal-200"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-teal-300/40 hover:text-teal-200"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </nav>
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 sm:px-6 lg:hidden lg:px-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
