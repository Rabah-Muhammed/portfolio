"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, Check, Loader2, AlertCircle } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { socialIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function openMailClient() {
    const subject = encodeURIComponent(
      form.subject.trim() || `Portfolio enquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setFeedback("Thanks — your message has been sent. I'll be in touch soon.");
        setForm(initialForm);
        return;
      }

      if (response.status === 503) {
        openMailClient();
        setStatus("sent");
        setFeedback("Email service isn't configured — opening your mail app instead.");
        setForm(initialForm);
        return;
      }

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      setStatus("error");
      setFeedback(
        data.error || "Something went wrong. Please try again or email me directly.",
      );
    } catch {
      openMailClient();
      setStatus("sent");
      setFeedback("Couldn't reach the server — opening your mail app instead.");
      setForm(initialForm);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-line bg-surface/50">
          <div className="grid lg:grid-cols-2">
            <div className="relative border-b border-line p-8 sm:p-12 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute -left-16 top-0 size-64 rounded-full bg-accent/10 blur-[100px]" />
              <Reveal>
                <SectionHeading
                  eyebrow="Contact"
                  title="Let's Build Something Useful."
                  description="Have a Python backend project, an interesting engineering challenge, or an opportunity to work together? Feel free to get in touch."
                />

                <div className="mt-10 space-y-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-elevated/60 p-4 transition-colors hover:border-accent/40"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Mail className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-faint">Email</span>
                      <span className="block text-sm text-fg">
                        {profile.email}
                      </span>
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/muhammed-rabah-m/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-line bg-elevated/60 p-4 transition-colors hover:border-accent/40"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <LinkedinIcon className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-faint">LinkedIn</span>
                      <span className="block text-sm text-fg">
                        Muhammed Rabah
                      </span>
                    </span>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-elevated/60 p-4">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <MapPin className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-faint">Location</span>
                      <span className="block text-sm text-fg">
                        {profile.location}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {socials.map((social) => {
                    const Icon = socialIcon(social.icon);
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={
                          social.href.startsWith("http") ? "_blank" : undefined
                        }
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
              </Reveal>
            </div>

            <div className="p-8 sm:p-12">
              <Reveal delay={100}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field
                    id="name"
                    label="Name"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    placeholder="Your name"
                  />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder="you@example.com"
                  />
                  <Field
                    id="subject"
                    label="Subject"
                    optional
                    value={form.subject}
                    onChange={(v) => update("subject", v)}
                    placeholder="What's this about?"
                  />

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-fg"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell me about your project or role..."
                      className="w-full resize-none rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/25"
                    />
                  </div>

                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    className="hidden"
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        Send message
                      </>
                    )}
                  </button>

                  <p
                    aria-live="polite"
                    className={`flex items-center justify-center gap-2 text-sm transition-opacity ${
                      status === "sent" || status === "error"
                        ? "opacity-100"
                        : "opacity-0"
                    } ${status === "error" ? "text-red-400" : "text-emerald-400"}`}
                  >
                    {status === "error" ? (
                      <AlertCircle className="size-4" />
                    ) : (
                      <Check className="size-4" />
                    )}
                    {feedback}
                  </p>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  optional?: boolean;
};

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  optional = false,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
        {optional ? (
          <span className="ml-1 text-xs font-normal text-faint">(optional)</span>
        ) : null}
      </label>
      <input
        id={id}
        type={type}
        required={!optional}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/25"
      />
    </div>
  );
}
