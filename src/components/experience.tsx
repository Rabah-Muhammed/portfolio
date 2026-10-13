import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience"
            description="Building and maintaining Python backend applications, integrations and dashboards for US-based clients."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-line to-transparent sm:left-[9px]"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.period}`} delay={index * 70}>
                <li className="relative pl-10 sm:pl-14">
                  <span className="absolute left-0 top-1.5 flex size-4 items-center justify-center sm:size-5">
                    <span className="absolute inline-flex size-full rounded-full bg-accent/20" />
                    <span className="relative size-2.5 rounded-full bg-accent ring-4 ring-bg" />
                  </span>

                  <div className="rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-accent/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-medium tracking-tight">
                        {item.role}{" "}
                        <span className="text-accent">@ {item.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-faint">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-faint">{item.location}</p>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {item.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-fg/85"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-line bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
