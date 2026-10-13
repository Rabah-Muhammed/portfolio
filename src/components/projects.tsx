import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured projects"
            description="Two full-stack projects that show how I approach backend design, APIs and the interfaces built on top of them."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
                <div className="relative flex h-28 items-end overflow-hidden border-b border-line bg-gradient-to-br from-accent/10 via-elevated to-accent-2/10 px-6 pb-4">
                  <span className="pointer-events-none absolute -right-2 -top-6 font-mono text-7xl font-semibold text-fg/[0.07] transition-transform duration-500 group-hover:scale-110">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="relative rounded-full border border-line bg-bg/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                      Key features
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-fg/85"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-wrap content-start gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-line bg-elevated px-2.5 py-1 font-mono text-xs text-faint"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        <GithubIcon className="size-4" />
                        View on GitHub
                      </a>
                    ) : null}
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                      >
                        Live demo
                        <ArrowUpRight className="size-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-8 text-sm text-faint">
            Additional professional work — CRM integrations, analytics dashboards
            and AI-powered backend features — is described in the experience
            section.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
