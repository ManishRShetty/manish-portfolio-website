# Manish R. Shetty — Portfolio & Private Routes

This repository hosts Manish R. Shetty's personal portfolio website and tailored private job application landing pages, built with Next.js App Router, React 19, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tailored Route: `/outboxlabs`

A private landing page created specifically for the **Software Development Engineer Intern** application at **Outbox Labs** (ReachInbox.ai, Zapmail.ai, Mailverify.ai, ReferralStack.ai).

### Key Features
1. **Zero Indexing / Private SEO:** Configured with `robots: { index: false, follow: false }` metadata.
2. **Dedicated Shell:** Custom sticky header with a *"Prepared for Outbox Labs"* badge and isolated footer without site-wide navigation clutter.
3. **Decoupled Architecture:** Content is 100% separated from UI components.
4. **Live API Playground:** Interactive developer console calling the internal rate-limited endpoint `/api/outbox-demo` directly from the browser.
5. **High Performance:** Prerendered statically with below-fold sections lazy-loaded via `next/dynamic`.

---

## How to Update Content

All content, links, metrics, and case studies can be modified without altering layout code:

1. **Text Copy & JD Alignment:**
   - File: [`data/outbox-content.ts`](file:///d:/Programs/Manish/manish-portfolio-website/data/outbox-content.ts)
   - Edit hero headlines, JD match proofs, engineering principles, the Outbox design note, and closing contacts.

2. **Project Case Studies:**
   - File: [`data/outbox-projects.json`](file:///d:/Programs/Manish/manish-portfolio-website/data/outbox-projects.json)
   - Contains the 3 featured backend case studies (**SentinelPAM**, **CandleCrush**, **AtLast**).
   - Fill in any remaining metrics or repository URLs marked `TODO`.

---

## Local Development & Deployment

### Run Locally
```bash
npm install
npm run dev
```
Visit `http://localhost:3000/outboxlabs` to test the page and verify the API playground.

### Build & Verify Production Output
```bash
npm run build
```
Verify that `/outboxlabs` compiles as a static route (`○`) and `/api/outbox-demo` builds as a server-rendered endpoint (`ƒ`).

### Deploy to Vercel
Push to the `main` branch or trigger a preview deployment:
```bash
git add .
git commit -m "feat: add tailored /outboxlabs application route"
git push origin main
```
The page will be live at `https://your-domain.dev/outboxlabs`.
