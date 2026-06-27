# theequalresearch

Revamped website for **The Equal Research** — a SEBI Registered Investment Adviser (RIA No. INA000004377).

Modern, research-driven redesign that repositions the firm as a financial-intelligence and investor-education platform.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + React + TypeScript
- Tailwind CSS v4 (CSS-based theme)
- Framer Motion (scroll-reveal motion)
- Resend (contact form email delivery)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Contact form email (optional)

Copy `.env.example` to `.env.local` and set:

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=team@theequaleresearch.com
CONTACT_FROM_EMAIL=Equal Research <noreply@theequaleresearch.com>
```

Without these, the contact form runs in a safe dev-fallback mode (submissions are logged server-side and the form still confirms success).

## Project structure

- `src/content/site.ts` — all site copy (single source of truth)
- `src/components/sections/` — homepage sections
- `src/components/` — shared UI (Header, Footer, primitives)
- `src/app/api/contact/route.ts` — contact form handler

## Build

```bash
npm run build
```
