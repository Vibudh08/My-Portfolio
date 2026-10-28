"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const marker = Math.min(window.innerHeight * 0.3, 200);
      const current = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
      });
      const atBottom = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActiveSection(atBottom ? "contact" : current?.id ?? "");
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled((previous) => (previous ? window.scrollY > 16 : window.scrollY > 48));
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <header ref={headerRef} className="site-header fixed z-50" data-scrolled={isScrolled}>
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-sm font-bold text-cyan-200">
            VR
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Vibudh Rathore</span>
        </a>
        <div className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} aria-current={activeSection === item.href.slice(1) ? "location" : undefined} className="nav-link relative text-sm text-slate-300 transition-colors hover:text-cyan-200 focus-visible:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
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
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-cyan-200 transition-colors hover:border-cyan-300/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-200 lg:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        onBlur={(event) => {
          if (!headerRef.current?.contains(event.relatedTarget as Node | null)) setIsMenuOpen(false);
        }}
        className="absolute inset-x-0 top-[calc(100%+12px)] max-h-[calc(100dvh-120px)] overflow-y-auto rounded-3xl border border-white/15 bg-ink/95 p-3 shadow-card backdrop-blur-xl lg:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
            className="nav-link relative block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-200 focus-visible:text-cyan-200"
          >
            {item.label}
          </a>
        ))}
        <div className="mt-2 flex items-center gap-3 border-t border-white/10 px-2 pt-3">
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="primary-action inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold">
            <Download className="h-4 w-4" /> Resume
          </a>
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200">
            <Github className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
