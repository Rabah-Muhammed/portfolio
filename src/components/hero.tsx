import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { socialIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-32 -left-24 -z-10 size-[28rem] rounded-full bg-accent/20 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 size-[24rem] rounded-full bg-accent-2/15 blur-[120px] animate-float-slow" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-3 py-1.5 font-mono text-xs font-medium tracking-wide text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {profile.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="mb-3 block text-base font-medium text-muted sm:text-lg">
                Hi, I&apos;m {profile.name}
              </span>
              <span className="text-gradient">Building reliable backends.</span>
              <br />
              Connecting systems. Solving real problems.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {profile.heroTech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-elevated/60 px-3 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 glow"
              >
                View my work
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Mail className="size-4" />
                Contact me
              </a>
              <a
                href={profile.resumeUrl}
                download
                aria-label="Download Résumé"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <Download className="size-4" />
                Download Résumé
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = socialIcon(social.icon);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-full border border-line bg-elevated text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    >
                      {Icon ? (
                        <Icon className="size-4" />
                      ) : (
                        <Mail className="size-4" />
                      )}
                    </a>
                  );
                })}
              </div>
              <p className="inline-flex items-center gap-2 text-sm text-faint">
                <MapPin className="size-4" />
                {profile.location}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="hidden lg:block">
          <TerminalCard />
        </Reveal>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="relative rounded-2xl border border-line bg-elevated/70 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-amber-400/80" />
        <span className="size-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-faint">backend.py</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-faint"># backend developer</span>
          {"\n"}
          <span className="text-accent">class</span>{" "}
          <span className="text-accent-2">Developer</span>:{"\n"}
          {"    "}
          <span className="text-faint">name</span> ={" "}
          <span className="text-emerald-300">&quot;{profile.name}&quot;</span>
          {"\n"}
          {"    "}
          <span className="text-faint">role</span> ={" "}
          <span className="text-emerald-300">
            &quot;{profile.role}&quot;
          </span>
          {"\n\n"}
          {"    "}
          <span className="text-faint">stack</span> = [
          <span className="text-emerald-300">&quot;Python&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;Django&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;DRF&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;FastAPI&quot;</span>]
          {"\n"}
          {"    "}
          <span className="text-faint">data</span> = [
          <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;Redis&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;Celery&quot;</span>]
          {"\n\n"}
          {"    "}
          <span className="text-accent">def</span>{" "}
          <span className="text-accent-2">build_api</span>(self, requirements):
          {"\n"}
          {"        "}
          <span className="text-faint">
            # design → implement → test → debug
          </span>
          {"\n"}
          {"        "}
          <span className="text-accent">return</span>{" "}
          <span className="text-emerald-300">
            &quot;maintainable and reliable&quot;
          </span>
        </code>
      </pre>
    </div>
  );
}
