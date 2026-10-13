type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
