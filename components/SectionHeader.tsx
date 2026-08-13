type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-14 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-accent text-xs tracking-widest">
          {index}
        </span>
        <span className="h-px w-8 bg-accent/50" />
        <span className="text-muted text-xs tracking-[0.22em] uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
