import { Download } from "lucide-react";
import { education, profile, resumeHighlights } from "@/data/portfolio";
import { MotionSection } from "@/components/MotionSection";

export function Resume() {
  return (
    <MotionSection id="resume" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.14),rgba(15,23,42,0.92)_42%,rgba(59,130,246,0.14))] p-6 shadow-card md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -right-2 -top-4 hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-semibold text-teal-100 backdrop-blur md:block">
              PDF ready at /resume.pdf
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Resume</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">A compact snapshot of full-stack delivery.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Download my resume for professional experience, project work, education, and technical skills across
              SaaS, e-commerce, APIs, RBAC, and responsive web products.
            </p>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-950/55 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Resume Preview</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Vibudh Rathore</h3>
                </div>
                <span className="rounded-lg bg-teal-300/10 px-3 py-2 text-xs font-semibold text-teal-100">MCA</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Full Stack", "SaaS", "Shopify"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-3 text-center text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {resumeHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-teal-200" />
                  <p className="text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              );
            })}
            <div className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Education</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{education.degree}</h3>
              <p className="mt-1 text-sm text-slate-300">
                {education.institution} · {education.duration} · {education.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
