import { skills } from "@/data/portfolio";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  return (
    <MotionSection id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A balanced stack for modern web products."
          description="Grouped around the way real products are built: interface, API, database, deployment, and commerce automation."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => {
            const Icon = category.icon;
            return (
              <article key={category.title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.065]">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-teal-300/10 p-3 text-teal-200 transition group-hover:bg-teal-300/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-sm text-slate-300 transition hover:border-teal-300/30 hover:text-teal-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
