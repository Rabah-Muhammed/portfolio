import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Education & training"
            description="A commerce background followed by an intensive full-stack development bootcamp."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface/50 p-6 transition-colors hover:border-accent/40">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <GraduationCap className="size-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium tracking-tight">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {item.institution} · {item.location}
                    </p>
                    <p className="mt-1 font-mono text-xs text-faint">
                      {item.period}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                {item.details ? (
                  <ul className="mt-4 space-y-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-fg/85"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
