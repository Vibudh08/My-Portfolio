import { skills } from "@/data/portfolio";

const featuredTech = Array.from(new Set(skills.flatMap((category) => category.items))).slice(0, 22);

export function TechStrip() {
  return (
    <section aria-label="Technology stack" className="border-y border-white/10 bg-white/[0.025] py-5">
      <div className="mx-auto grid max-w-7xl gap-4 overflow-hidden px-4 md:grid-cols-[132px_1fr] md:items-center sm:px-6 lg:px-8">
        <p className="relative z-10 rounded-lg border border-white/10 bg-ink px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Core Stack
        </p>
        <div className="relative min-w-0 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#090d16] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#090d16] to-transparent" />
          <div className="ticker flex w-max gap-3">
            {[...featuredTech, ...featuredTech].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="shrink-0 rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2 text-sm font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
