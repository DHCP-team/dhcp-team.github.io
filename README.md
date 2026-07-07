# DHCP — Diponegoro Hacking Core of Pwning

Official website of **DHCP**, the cybersecurity community of Diponegoro University.

Built with **Next.js 15** (App Router, static export), **TypeScript**, and **Tailwind CSS v4**. Deployed to GitHub Pages via GitHub Actions.

## Tech stack

- [Next.js 15](https://nextjs.org/) — App Router, `output: 'export'` static site
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — CSS-first config (`@import "tailwindcss"`)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Orbitron (display) + JetBrains Mono (mono)

## Project structure

```
app/
  globals.css      # Tailwind import + theme tokens (dark/light)
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Landing page assembling all sections
components/
  Header.tsx       # Sticky header: logo, nav, GitHub, theme toggle
  Hero.tsx         # Hero section with construction badge
  About.tsx        # Community intro + stats
  Tracks.tsx       # CTF tracks grid (Web/Pwn/Reversing/Crypto/Misc)
  Writeups.tsx     # Write-up cards (placeholder)
  Achievements.tsx # Achievements table (placeholder)
  Members.tsx      # Member roster grid (placeholder)
  Contact.tsx      # Contact / CTA section
  Footer.tsx       # Footer
  ThemeToggle.tsx  # Dark/light toggle (client component)
lib/
  data.ts          # Typed placeholder data: writeups, achievements, members, tracks
public/
  logo.png         # Team logo (from GitHub org avatar)
  favicon.png      # Favicon
.github/
  workflows/
    deploy.yml     # GitHub Actions: build + deploy to Pages
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Produces a static site in `dist/`. The `next.config.ts` is configured with `output: 'export'`, `distDir: 'dist'`, and `images: { unoptimized: true }`.

## Lint

```bash
npm run lint
```

## Deployment

Deployment is automatic via GitHub Actions (`.github/workflows/deploy.yml`):

- On every push to `main`, the workflow runs `npm ci` + `npm run build`, uploads the `dist/` folder as a Pages artifact, and deploys it to the GitHub Pages org site at `https://dhcp-team.github.io`.
- No `basePath` is needed (org Pages site serves from root).

To deploy manually, build locally and push to `main`, or run the workflow from the Actions tab.

## Content

All content (members, write-ups, achievements, tracks) lives in [`lib/data.ts`](./lib/data.ts) as typed arrays. Replace the placeholders with real data when ready — no component edits required.

## License

Content and brand belong to DHCP team. Source code is MIT.