import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
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
              <div className="mb-7 overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    priority={project.title === "Eventora"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-sm uppercase tracking-[0.22em] text-teal-200">Featured Project</p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">{project.title}</h3>
                  </div>
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
                  target="_blank"
                  rel="noreferrer"
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
