import { ArrowUp, Terminal } from "lucide-react";
import { navLinks, profile, socials } from "@/data/portfolio";
import { socialIcon } from "@/components/icons";

export async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="inline-flex items-center gap-2 font-mono text-sm font-medium"
            >
              <span className="flex size-8 items-center justify-center rounded-lg border border-line bg-elevated text-accent">
                <Terminal className="size-4" />
              </span>
              <span>{profile.handle}</span>
              <span className="text-accent">.dev</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.role} building reliable backends, REST APIs and full-stack
              applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                Navigate
              </h3>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
                Elsewhere
              </h3>
              <ul className="mt-4 space-y-3">
                {socials.map((social) => {
                  const Icon = socialIcon(social.icon);
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target={
                          social.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                      >
                        {Icon ? <Icon className="size-4" /> : null}
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {year} {profile.name}.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
