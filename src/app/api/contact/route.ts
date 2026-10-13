import { Resend } from "resend";
import { profile } from "@/data/portfolio";

const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
};

function asString(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = asString(payload.name, LIMITS.name);
  const email = asString(payload.email, LIMITS.email);
  const subject = asString(payload.subject, LIMITS.subject);
  const message = asString(payload.message, LIMITS.message);
  const honeypot = asString(payload.company, LIMITS.name);

  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured.", fallback: true },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || profile.email;
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Portfolio Contact <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subject || `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 4px">New portfolio message</h2>
          <p style="margin:0 0 16px;color:#555">${escapeHtml(subject) || "No subject"}</p>
          <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0"><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Could not send email. Please try again later." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { error: "Could not send email. Please try again later." },
      { status: 500 },
    );
  }
}
