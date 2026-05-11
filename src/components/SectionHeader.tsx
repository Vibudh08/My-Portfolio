type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <div className="mb-4 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-teal-300/70" />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">{eyebrow}</p>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal-300/70" />
      </div>
      <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
