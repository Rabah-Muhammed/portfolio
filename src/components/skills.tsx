import {
  Code2,
  Server,
  Database,
  LayoutTemplate,
  Cloud,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  server: Server,
  database: Database,
  layout: LayoutTemplate,
  cloud: Cloud,
  plug: Plug,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="The languages, frameworks and tools I use to design APIs, model data and ship full-stack applications."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] ?? Code2;
            return (
              <Reveal key={group.title} delay={index * 50}>
                <div className="group h-full rounded-2xl border border-line bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-line bg-elevated text-accent transition-colors group-hover:border-accent/40">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-medium tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-xs text-faint">{group.blurb}</p>
                    </div>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-line bg-elevated px-2.5 py-1 font-mono text-xs text-muted transition-colors group-hover:text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
