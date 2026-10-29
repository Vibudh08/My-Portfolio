"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Compass,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Mail,
  MessageCircle,
  Sparkles,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";

type PromptTone = "violet" | "cyan" | "blue" | "pink";

type AssistantPrompt = {
  eyebrow: string;
  label: string;
  detail: string;
  sectionId: string;
  icon: LucideIcon;
  tone?: PromptTone;
  featured?: boolean;
};

const prompts: AssistantPrompt[] = [
  {
    eyebrow: "Start here · 01",
    label: "Meet Vibudh",
    detail: "Product-minded full-stack builder",
    sectionId: "about",
    icon: UserRound,
    featured: true,
  },
  {
    eyebrow: "Stack radar",
    label: "Skills",
    detail: "Frontend to backend",
    sectionId: "skills",
    icon: Code2,
    tone: "violet",
  },
  {
    eyebrow: "Work journey",
    label: "Experience",
    detail: "Roles and impact",
    sectionId: "experience",
    icon: BriefcaseBusiness,
    tone: "cyan",
  },
  {
    eyebrow: "Build vault",
    label: "Projects",
    detail: "Selected product work",
    sectionId: "projects",
    icon: FolderKanban,
    tone: "blue",
  },
  {
    eyebrow: "Let’s connect",
    label: "Contact",
    detail: "Start a conversation",
    sectionId: "contact",
    icon: Mail,
    tone: "pink",
  },
];

const toneClasses: Record<PromptTone, { icon: string; glow: string }> = {
  violet: {
    icon: "border-violet-300/25 bg-violet-400/10 text-violet-200",
    glow: "bg-violet-400/15",
  },
  cyan: {
    icon: "border-cyan-300/25 bg-cyan-300/10 text-cyan-200",
    glow: "bg-cyan-300/15",
  },
  blue: {
    icon: "border-blue-300/25 bg-blue-400/10 text-blue-200",
    glow: "bg-blue-400/15",
  },
  pink: {
    icon: "border-fuchsia-300/25 bg-fuchsia-400/10 text-fuchsia-200",
    glow: "bg-fuchsia-400/15",
  },
};

export function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [navigatingTo, setNavigatingTo] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const assistantRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const desktopFirstRouteRef = useRef<HTMLButtonElement>(null);
  const mobileFirstRouteRef = useRef<HTMLButtonElement>(null);
  const navigationTimerRef = useRef<number | null>(null);

  const clearNavigationTimer = useCallback(() => {
    if (navigationTimerRef.current !== null) {
      window.clearTimeout(navigationTimerRef.current);
      navigationTimerRef.current = null;
    }
  }, []);

  const closeAssistant = useCallback((returnFocus = false) => {
    clearNavigationTimer();
    setNavigatingTo(null);
    setIsOpen(false);
    if (returnFocus) launcherRef.current?.focus();
  }, [clearNavigationTimer]);

  useEffect(() => () => clearNavigationTimer(), [clearNavigationTimer]);

  useEffect(() => {
    if (!isOpen) return;

    const frame = window.requestAnimationFrame(() => {
      const firstRoute = window.matchMedia("(min-width: 640px)").matches
        ? desktopFirstRouteRef.current
        : mobileFirstRouteRef.current;
      firstRoute?.focus();
    });

    const handlePointerDown = (event: PointerEvent) => {
      if (!assistantRef.current?.contains(event.target as Node)) closeAssistant();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAssistant(true);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeAssistant]);

  function toggleAssistant() {
    if (isOpen) {
      closeAssistant();
      return;
    }

    setNavigatingTo(null);
    setIsOpen(true);
  }

  function goToSection(prompt: AssistantPrompt) {
    if (navigatingTo) return;

    const section = document.getElementById(prompt.sectionId);
    if (!section) return;

    setNavigatingTo(prompt.sectionId);
    const delay = reduceMotion ? 0 : 180;

    navigationTimerRef.current = window.setTimeout(() => {
      section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      closeAssistant(true);
    }, delay);
  }

  const featuredPrompt = prompts.find((prompt) => prompt.featured);
  const quickRoutes = prompts.filter((prompt) => !prompt.featured);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            onPointerDown={(event) => {
              event.stopPropagation();
              closeAssistant(true);
            }}
            className="fixed inset-0 z-[60] bg-[#020617]/20"
          />
        )}
      </AnimatePresence>

      <div
        ref={assistantRef}
        className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-[70] flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3"
      >
      <AnimatePresence>
        {isOpen && featuredPrompt && (
          <motion.section
            id="portfolio-guide"
            role="dialog"
            aria-labelledby="portfolio-assistant-title"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 390, damping: 29 }}
            className="relative h-fit max-h-[calc(100dvh-1.5rem)] w-[min(21rem,calc(100vw-1.5rem))] max-w-[calc(100vw-1.5rem)] overflow-x-hidden overflow-y-auto overscroll-contain rounded-[1.25rem] border border-white/[0.13] bg-[#080d22]/95 p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.58),0_0_54px_rgba(99,102,241,0.22)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-h-none sm:w-[min(21rem,calc(100vw-2rem))] sm:max-w-[calc(100vw-2rem)] sm:overflow-hidden sm:rounded-[1.5rem] sm:p-3"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />

            <header className="relative flex h-[3.75rem] items-center gap-2.5 rounded-[1.1rem] border border-white/[0.08] bg-white/[0.035] px-3 py-2.5 sm:h-auto sm:items-start sm:gap-3 sm:rounded-[1.375rem] sm:p-3.5">
              <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-[0.85rem] border border-cyan-200/25 bg-gradient-to-br from-cyan-300/20 to-violet-400/20 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_0_24px_rgba(34,211,238,0.12)] sm:h-11 sm:w-11 sm:rounded-[1rem]">
                <Compass className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#111630] bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)] motion-safe:animate-pulse" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-200 sm:text-[10px] sm:tracking-[0.2em]">
                  Portfolio guide <span className="hidden text-slate-500 sm:inline">/ quick navigation</span>
                </p>
                <h2 id="portfolio-assistant-title" className="mt-0.5 text-[15px] font-semibold leading-5 text-white sm:mt-1 sm:text-[17px]">
                  <span className="sm:hidden">Where to next?</span>
                  <span className="hidden sm:inline">
                    Where would you like to <span className="bg-gradient-to-r from-violet-300 to-cyan-200 bg-clip-text text-transparent">go?</span>
                  </span>
                </h2>
                <p className="mt-1 hidden text-xs leading-5 text-slate-400 sm:block">Choose a section to jump straight to it.</p>
              </div>
              <button
                type="button"
                onClick={() => closeAssistant(true)}
                aria-label="Close portfolio guide"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-cyan-300/35 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 sm:h-8 sm:w-8"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </header>

            <div className="relative mt-3 sm:hidden">
              <p className="px-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">Quick links</p>
              <div className="mt-1.5 space-y-1.5">
                {prompts.map((prompt, index) => {
                  const Icon = prompt.icon;
                  const tone = toneClasses[prompt.tone ?? "violet"];
                  const isNavigating = navigatingTo === prompt.sectionId;
                  const isFeatured = Boolean(prompt.featured);

                  return (
                    <button
                      key={prompt.sectionId}
                      ref={index === 0 ? mobileFirstRouteRef : undefined}
                      type="button"
                      disabled={Boolean(navigatingTo)}
                      onClick={() => goToSection(prompt)}
                      className={`group relative flex h-12 w-full items-center gap-3 overflow-hidden rounded-2xl border px-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:cursor-wait disabled:opacity-75 ${
                        isFeatured
                          ? "border-cyan-300/30 bg-gradient-to-r from-violet-500/20 via-blue-500/10 to-cyan-300/10 hover:border-cyan-200/50"
                          : "border-white/[0.08] bg-white/[0.035] hover:border-violet-300/30 hover:bg-white/[0.075]"
                      }`}
                    >
                      <span aria-hidden="true" className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl border ${isFeatured ? "border-cyan-300/25 bg-cyan-300/10 text-cyan-100" : tone.icon}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[13px] font-semibold text-white">
                        {isNavigating ? "Opening…" : isFeatured ? "About me" : prompt.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-200" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-4 hidden sm:block">
              <div className="mb-2 flex items-center justify-between px-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Explore</p>
                <p aria-live="polite" className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  {navigatingTo ? "Opening…" : "One click away"}
                </p>
              </div>

              <button
                ref={desktopFirstRouteRef}
                type="button"
                disabled={Boolean(navigatingTo)}
                onClick={() => goToSection(featuredPrompt)}
                className="group relative w-full overflow-hidden rounded-[1.25rem] border border-violet-300/25 bg-gradient-to-r from-violet-500/25 via-blue-500/15 to-cyan-300/10 px-4 py-3.5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:shadow-[0_16px_34px_rgba(79,70,229,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:cursor-wait disabled:opacity-75"
              >
                <span aria-hidden="true" className="absolute -right-5 -top-7 h-24 w-24 rounded-full bg-cyan-300/15 blur-2xl transition duration-300 group-hover:scale-125" />
                <span className="relative flex items-start justify-between gap-3">
                  <span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-violet-200">{featuredPrompt.eyebrow}</span>
                    <span className="mt-1 block text-base font-semibold text-white">
                      {navigatingTo === featuredPrompt.sectionId ? "Opening profile…" : featuredPrompt.label}
                    </span>
                    <span className="mt-1 block text-xs text-slate-300">{featuredPrompt.detail}</span>
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-cyan-100 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </button>

              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                {quickRoutes.map((prompt) => {
                  const Icon = prompt.icon;
                  const tone = toneClasses[prompt.tone ?? "violet"];
                  const isNavigating = navigatingTo === prompt.sectionId;

                  return (
                    <button
                      key={prompt.sectionId}
                      type="button"
                      disabled={Boolean(navigatingTo)}
                      onClick={() => goToSection(prompt)}
                      className="group relative min-h-[7rem] overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-white/[0.035] p-3.5 text-left transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.075] hover:shadow-[0_16px_28px_rgba(0,0,0,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 disabled:cursor-wait disabled:opacity-75"
                    >
                      <span aria-hidden="true" className={`absolute -right-8 -top-8 h-20 w-20 rounded-full blur-2xl ${tone.glow}`} />
                      <span className="relative flex h-full flex-col">
                        <span className="flex items-start justify-between gap-2">
                          <span className={`grid h-8 w-8 place-items-center rounded-xl border ${tone.icon}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-200" />
                        </span>
                        <span className="mt-auto pt-2">
                          <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">{prompt.eyebrow}</span>
                          <span className="mt-0.5 block text-sm font-semibold text-white">
                            {isNavigating ? "Opening…" : prompt.label}
                          </span>
                          <span className="mt-0.5 block text-[11px] leading-4 text-slate-400">{prompt.detail}</span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-3 hidden items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] leading-4 text-slate-400 sm:flex">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
              <span>{navigatingTo ? "Taking you to the right section…" : "Pick a section to explore."}</span>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        ref={launcherRef}
        type="button"
        onClick={toggleAssistant}
        aria-label={isOpen ? "Close portfolio guide" : "Open portfolio guide"}
        aria-expanded={isOpen}
        aria-controls="portfolio-guide"
        className={`${isOpen ? "hidden" : "flex"} group relative h-12 w-12 items-center justify-end gap-2 text-left transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:flex sm:h-14 sm:w-auto`}
      >
        <span className="relative hidden h-9 w-40 items-center gap-2 rounded-full border border-white/[0.14] bg-[#070b1d]/90 px-3.5 text-[13px] font-semibold tracking-[-0.02em] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition duration-300 group-hover:border-cyan-200/30 group-hover:bg-[#0b1028]/95 group-hover:text-white sm:flex">
          <span aria-hidden="true" className="pointer-events-none absolute inset-px rounded-full bg-gradient-to-r from-violet-400/[0.07] via-transparent to-cyan-300/[0.06]" />
          <Sparkles aria-hidden="true" className="relative h-4 w-4 shrink-0 text-cyan-300 drop-shadow-[0_0_9px_rgba(34,211,238,0.8)]" />
          <span className="relative whitespace-nowrap">Explore portfolio</span>
        </span>

        <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-[1.1rem] border border-violet-200/50 bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 text-white shadow-[0_12px_22px_rgba(95,63,221,0.4),0_0_20px_rgba(112,66,255,0.26)] transition duration-300 group-hover:scale-[1.045] group-hover:shadow-[0_18px_32px_rgba(95,63,221,0.5),0_0_32px_rgba(112,66,255,0.36)] sm:h-14 sm:w-14 sm:rounded-[1.3rem]">
          <span aria-hidden="true" className="absolute inset-px rounded-[1rem] bg-gradient-to-br from-white/20 via-transparent to-transparent sm:rounded-[1.2rem]" />
          {isOpen ? <X className="relative h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="relative h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.1} />}
          {!isOpen && <Sparkles className="absolute -bottom-1 -left-1.5 h-3 w-3 text-cyan-200 drop-shadow-[0_0_9px_rgba(34,211,238,0.95)] sm:-bottom-1.5 sm:-left-2 sm:h-4 sm:w-4" />}
          <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#080d22] bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.95)] motion-safe:animate-pulse sm:-right-1.5 sm:-top-1.5 sm:h-4 sm:w-4 sm:border-[3px]" />
        </span>
      </button>
      </div>
    </>
  );
}
