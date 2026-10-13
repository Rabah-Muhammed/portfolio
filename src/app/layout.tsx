import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const linkedinUrl = "https://www.linkedin.com/in/muhammed-rabah-m/";
const githubUrl = "https://github.com/Rabah-Muhammed";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammed Rabah M | Python Full-Stack Developer",
    template: `%s | ${profile.name}`,
  },
  description:
    "Portfolio of Muhammed Rabah M, a Python developer building production-grade backend systems with Django, Django REST Framework and FastAPI — REST APIs, third-party integrations, background jobs and databases.",
  keywords: [
    "Muhammed Rabah M",
    "Python Developer",
    "Python Backend Developer",
    "Python Full-Stack Developer",
    "Backend Developer",
    "Django",
    "Django Developer",
    "Django REST Framework",
    "FastAPI",
    "REST API Development",
    "Third-Party API Integrations",
    "Webhooks",
    "Celery",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "React.js",
  ],
  authors: [{ name: profile.name, url: linkedinUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Muhammed Rabah M | Python Full-Stack Developer",
    description:
      "Python developer building production-grade backend systems with Django, Django REST Framework and FastAPI — REST APIs, third-party integrations, background jobs and databases.",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Rabah M | Python Full-Stack Developer",
    description:
      "Python developer building production-grade backend systems with Django, Django REST Framework and FastAPI — REST APIs, third-party integrations, background jobs and databases.",
  },
  other: {
    "profile:linkedin": linkedinUrl,
    "profile:github": githubUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
