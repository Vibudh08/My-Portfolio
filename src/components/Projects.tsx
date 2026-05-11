import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";

export function Projects() {
  return (
    <MotionSection id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Real-world builds with end-to-end workflows."
          description="Selected portfolio projects focused on jobs, e-commerce, booking, feedback operations, payments, authentication, admin workflows, and product visibility."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-teal-300/30 md:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-7 flex h-56 items-end overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.25),transparent_32%),radial-gradient(circle_at_80%_35%,rgba(125,211,252,0.22),transparent_30%),linear-gradient(135deg,#0f172a,#020617)] p-5">
                <div className="absolute right-8 top-8 hidden w-52 rounded-xl border border-white/10 bg-slate-950/65 p-3 backdrop-blur md:block">
                  <div className="mb-3 h-2 w-20 rounded-full bg-teal-300/50" />
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/15" />
                    <div className="h-2 w-4/5 rounded-full bg-white/10" />
                    <div className="h-2 w-2/3 rounded-full bg-white/10" />
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-200">Featured Project</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              <p className="text-lg leading-7 text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">{project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-teal-300/40 hover:text-teal-100"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
