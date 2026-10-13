import { Check } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Backend-focused, full-stack capable"
            description="A Python developer who works across the stack — from API design and data modelling to the interfaces that consume them."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            {profile.bio.map((paragraph, index) => (
              <Reveal key={index} delay={index * 60}>
                <p className="text-pretty text-base leading-relaxed text-muted sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <div className="mt-8">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                  What I work on
                </h3>
                <ul className="mt-4 space-y-3">
                  {profile.focus.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="size-3" />
                      </span>
                      <span className="text-base text-fg/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-accent/40"
                >
                  <div className="text-gradient text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
