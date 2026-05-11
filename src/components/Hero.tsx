import { ArrowDownRight, BriefcaseBusiness, Download, Mail, Sparkles, Workflow } from "lucide-react";
import { highlights, profile } from "@/data/portfolio";

const workflowCards = ["Backlog", "In Progress", "Review"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-grid bg-[length:42px_42px] opacity-45" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />
      <div className="absolute left-1/3 top-20 -z-10 h-96 w-96 rounded-full bg-teal-400/16 blur-3xl" />
      <div className="absolute right-0 top-44 -z-10 h-96 w-96 rounded-full bg-sky-500/14 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-lg border border-teal-300/20 bg-teal-300/10 px-3 py-2 text-sm text-teal-100">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>Available for full-stack roles and product builds</span>
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
            {profile.name}
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[5.35rem]">
            <span className="block">{profile.role}</span>
            <span className="mt-3 block bg-gradient-to-r from-teal-200 via-sky-200 to-violet-200 bg-clip-text text-3xl leading-tight text-transparent sm:text-4xl lg:text-5xl">
              for SaaS, commerce, and workflow apps.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">{profile.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-teal-300/40 hover:text-teal-100"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3 shadow-card backdrop-blur">
          <div className="grid gap-3 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-xl border border-white/10 bg-slate-950/85 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-teal-300" />
                <span className="ml-auto rounded-md bg-white/5 px-2 py-1 text-xs text-slate-500">portfolio.ts</span>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <p className="text-slate-500">const developer = &#123;</p>
                <p className="pl-4 text-slate-300">
                  name: <span className="text-teal-200">&quot;{profile.name}&quot;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  role: <span className="text-sky-200">&quot;{profile.role}&quot;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  builds: <span className="text-violet-200">[&quot;SaaS&quot;, &quot;APIs&quot;, &quot;Commerce&quot;]</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  stack: <span className="text-teal-200">&quot;Next.js + Node.js&quot;</span>
                </p>
                <p className="text-slate-500">&#125;</p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-xl border border-teal-300/20 bg-teal-300/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-teal-100">
                  <BriefcaseBusiness className="h-4 w-4" />
                  Suntek.ai
                </div>
                <p className="mt-2 text-xs leading-5 text-teal-50/75">
                  Kanban SaaS, RBAC workflows, Shopify discount automation.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Next.js", "Node.js", "PostgreSQL"].map((item) => (
                    <span key={item} className="rounded-md bg-slate-950/35 px-2 py-1 text-[11px] text-teal-50/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Workflow className="h-4 w-4 text-teal-200" />
                  BTJ Alpha
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Admirer, Non Brokerage, and company website frontend work.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React", "Tailwind", "MongoDB"].map((item) => (
                    <span key={item} className="rounded-md bg-slate-950/45 px-2 py-1 text-[11px] text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-teal-300/30"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-950/55 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Workflow Snapshot</p>
                <span className="rounded-md bg-teal-300/10 px-2 py-1 text-xs text-teal-100">RBAC</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {workflowCards.map((card, index) => (
                  <div key={card} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                    <p className="text-xs font-medium text-slate-400">{card}</p>
                    <div className="mt-3 space-y-2">
                      <span className="block h-2 rounded-full bg-teal-300/50" style={{ width: `${80 - index * 12}%` }} />
                      <span className="block h-2 rounded-full bg-white/15" />
                      <span className="block h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
