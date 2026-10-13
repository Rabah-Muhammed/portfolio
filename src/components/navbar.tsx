"use client";

import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="flex size-8 items-center justify-center rounded-lg border border-line bg-elevated text-accent transition-colors group-hover:border-accent/50">
            <Terminal className="size-4" />
          </span>
          <span>{profile.handle}</span>
          <span className="text-accent">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            aria-label="Download Résumé"
            className="rounded-full border border-line bg-elevated px-5 py-2 text-sm font-medium text-fg transition-all hover:border-accent/50 hover:text-accent"
          >
            Résumé
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-line bg-elevated text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-line/60 bg-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base text-muted transition-colors hover:bg-elevated hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={profile.resumeUrl}
              onClick={() => setOpen(false)}
              className="block rounded-lg border border-line bg-elevated px-4 py-3 text-center text-base font-medium text-fg"
            >
              Résumé
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
