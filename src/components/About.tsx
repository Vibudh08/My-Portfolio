import { aboutCards, profile } from "@/data/portfolio";
import { MotionSection } from "@/components/MotionSection";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  return (
    <MotionSection id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="Full-stack execution with product context."
          description="I work across frontend, backend, database, and commerce workflows to ship practical software for SaaS, e-commerce, and internal product operations."
        />
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-panel/80 p-6 shadow-card md:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-teal-300/10 blur-3xl" />
            <p className="text-lg leading-8 text-slate-300">{profile.intro}</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              My work includes project management platforms, Shopify automation, event booking systems, feedback
              roadmaps, REST API development, RBAC flows, responsive UI development, Docker workflows, and scalable
              component architecture.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-teal-300/30 hover:bg-white/[0.07]"
                >
                  <Icon className="mb-4 h-6 w-6 text-teal-200" />
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
