# Muhammed Rabah — Portfolio

Personal portfolio for **Muhammed Rabah M**, a Python full-stack developer focused on
production-grade backend systems. Built with Next.js (App Router) and Tailwind CSS,
with a working contact form powered by [Resend](https://resend.com).

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack, Cache Components)
- **UI:** React 19, Tailwind CSS v4, lucide-react
- **Language:** TypeScript
- **Email:** Resend (via a server route at `POST /api/contact`)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` (git-ignored) and set:

| Variable               | Required | Description                                                                 |
| ---------------------- | -------- | --------------------------------------------------------------------------- |
| `RESEND_API_KEY`       | Yes      | Resend API key used to send contact-form emails.                            |
| `CONTACT_TO_EMAIL`     | Yes      | Inbox that submissions are delivered to.                                    |
| `CONTACT_FROM_EMAIL`   | No       | Verified "from" address. Blank falls back to `onboarding@resend.dev` (test mode). |
| `NEXT_PUBLIC_SITE_URL` | No       | Public site URL for metadata, sitemap and robots (falls back to localhost). |

> Without `RESEND_API_KEY`, the contact form gracefully falls back to opening the
> visitor's email client via `mailto:`.

## Scripts

```bash
npm run dev     # start the dev server
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/            # routes, layout, metadata, sitemap, robots, api/contact
  components/     # UI sections (hero, about, skills, projects, ...)
  data/           # portfolio content (single source of truth)
  lib/            # site config helpers
public/           # static assets (resume.pdf)
```

All copy and data live in `src/data/portfolio.ts`.

## Deploy

Deployed on [Vercel](https://vercel.com). Import the repository, add the environment
variables above in the project settings, and deploy.
