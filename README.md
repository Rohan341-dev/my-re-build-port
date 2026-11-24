# Rohan Yadav — Portfolio

A production-ready personal portfolio for **Rohan Yadav** (Rohan Codekage), a software engineer, full-stack developer, and technology entrepreneur based in Nepal.

The site is a complete rebuild of [rohan.codenestnep.com](https://rohan.codenestnep.com), designed as an editorial, dark-first executive portfolio. All content is based on verified information from the existing site and supplied certificates. Project stages are labelled honestly as **Launched**, **In Development**, **Prototype**, or **Research** — no invented metrics, clients, or awards.

## Stack

- **Next.js 16** (App Router, Turbopack, React Server Components)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Motion** for scroll reveals and micro-interactions
- **next-themes** for dark/light mode
- **React Hook Form + Zod** for the contact form
- **Lucide** icons
- Local fonts (Inter + Manrope) — no build-time Google Fonts dependency

## Requirements

- Node.js **20.9+**
- npm 10+

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript with no emit |

Generate the resume PDF after editing the resume script:

```bash
node scripts/generate-resume.mjs
```

The generated file is written to `public/resume.pdf`. Replace it with the official resume when available.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical URL used by metadata, sitemap, robots, and JSON-LD |
| `RESEND_API_KEY` | For email delivery | Resend API key used by `/api/contact` |
| `CONTACT_TO_EMAIL` | No | Destination inbox (defaults to the site email) |
| `CONTACT_FROM_EMAIL` | No | Verified Resend sender (defaults to `Portfolio <onboarding@resend.dev>`) |

### Contact form behavior

- Client and server share the same Zod schema.
- Includes a honeypot field and a minimum completion-time check.
- Simple in-memory rate limiting (5 submissions per IP per 10 minutes).
- Without `RESEND_API_KEY`, submissions return **503** with a direct email fallback. The UI displays a mailto link.
- With Resend configured, messages are delivered to `CONTACT_TO_EMAIL` and `reply_to` is set to the sender.

For production email, verify your sending domain in Resend and set `CONTACT_FROM_EMAIL` to an address on that domain.

## Content

All content lives in typed data files:

| File | Content |
| --- | --- |
| `src/data/profile.ts` | Bio, portrait, availability, focus areas |
| `src/data/site.ts` | Site metadata, URL, email, keywords |
| `src/data/navigation.ts` | Header/footer navigation and resume metadata |
| `src/data/socials.ts` | Social links and primary socials |
| `src/data/projects.ts` | Projects, case studies, stages, stacks |
| `src/data/ventures.ts` | Code Nest Nepal and SajiloCode |
| `src/data/achievements.ts` | Certificates, milestones, timeline |
| `src/data/technologies.ts` | Technology groups and proficiency |
| `src/data/research.ts` | Research areas and related projects |

Images and certificates live in `public/assets/`. The portrait and certificates are real assets from the existing site.

## Routes

```text
/                     Home
/about                Biography, timeline, philosophy, resume CTA
/projects             Searchable/filterable project directory
/projects/[slug]      Case-study pages (statically generated)
/ventures             Companies and initiatives
/research             Research areas
/achievements         Certificates, lightbox, milestones
/contact              Contact details and validated form
/api/contact          POST contact endpoint
/sitemap.xml          Generated sitemap
/robots.txt           Generated robots policy
/opengraph-image      Generated social image
/icon.svg             Site icon
/resume.pdf           Downloadable resume
```

## Project structure

```text
src/
  app/            Routes, metadata, API, sitemap, robots, OG image
  components/     Layout, home, projects, contact, achievements, motion, UI
  data/           Typed content
  fonts/          Local variable fonts
  lib/            SEO, structured data, schema, utilities
public/
  assets/         Portrait and certificates
  resume.pdf      Downloadable resume
scripts/
  generate-resume.mjs
```

## Deployment

### Vercel

1. Import the repository.
2. Set the environment variables above (at minimum `NEXT_PUBLIC_SITE_URL`).
3. Build command: `npm run build`.
4. Output: Next.js default.
5. Add the production domain and update `NEXT_PUBLIC_SITE_URL` if it changes.

### Any Node host

```bash
npm ci
npm run build
npm start
```

The site uses a Node.js runtime only for `/api/contact`. All pages are static or statically generated.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The current build generates 22 static pages plus the dynamic contact API route. Project detail pages are statically generated from `src/data/projects.ts`.

## Accessibility and performance notes

- Semantic landmarks, skip link, visible focus styles, and keyboard-navigable menus.
- Mobile navigation locks scroll and closes on Escape or route change.
- Certificate lightbox supports Escape, arrow keys, focus return, and scroll lock.
- Reveal animations respect `prefers-reduced-motion`; content is visible without JavaScript.
- Local fonts, optimized images, no client-side animation libraries beyond Motion.
- Metadata, Open Graph, Twitter cards, JSON-LD, sitemap, and robots are generated.

## Known follow-ups

- Replace `public/resume.pdf` with Rohan's official resume when supplied.
- Replace generated project cover visuals with real product screenshots when available.
- Add `RESEND_API_KEY` and a verified sender to enable contact email delivery.
- Review the `RESTRO` and `CodeNest Executive Suite` case-study details with Rohan before publishing major claims.
