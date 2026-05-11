import { experiences } from "@/data/portfolio";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  return (
    <MotionSection id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title="Recent product engineering work."
          description="Professional experience rewritten from the resume with practical impact and clear ownership."
        />
        <div className="relative space-y-6 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-white/10 md:before:left-6">
          {experiences.map((experience) => (
            <article key={experience.company} className="relative pl-12 md:pl-16">
              <span className="absolute left-0 top-2 h-8 w-8 rounded-lg border border-teal-300/30 bg-teal-300/10 md:left-2" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.06]">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-1 text-lg text-teal-200">{experience.company}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm font-medium text-slate-300">{experience.duration}</p>
                    <p className="mt-1 text-sm text-slate-500">{experience.location}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
