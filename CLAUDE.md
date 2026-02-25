# CLAUDE.md

## Project Overview

This is **my-bento-portfolio** — a personal portfolio website for Ishan Lakhwani built with Next.js 14, React 18, and TypeScript. It uses a bento-grid layout to showcase projects across mobile development, blockchain/Web3, and open-source contributions. The site is dark-mode only, themed after GitHub's dark color palette, and deployed as a static site to GitHub Pages at `bluntbrain.com`.

## Tech Stack

- **Framework**: Next.js 14.2.15 (App Router)
- **Language**: TypeScript (strict mode)
- **UI**: React 18, Tailwind CSS 3.4
- **Animations**: Framer Motion, tsparticles
- **Icons**: FontAwesome 7, Lucide React
- **UI Primitives**: Radix UI (Dialog)
- **Backend/Caching**: Firebase Firestore (GitHub issues cache)
- **API**: GitHub REST API v3
- **Fonts**: Geist Sans + Geist Mono (local variable fonts)

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build (outputs to ./out for static export)
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals + next/typescript)
```

There is no test suite configured. The project uses `yarn.lock` and `package-lock.json` — either npm or yarn works.

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (fonts, metadata)
│   ├── page.tsx                  # Home page — main bento grid
│   ├── globals.css               # Tailwind directives + CSS custom properties
│   ├── fonts/                    # Geist variable fonts (.woff)
│   ├── solana/page.tsx           # Solana projects detail page
│   ├── frontend/page.tsx         # Frontend projects detail page
│   ├── mobile/page.tsx           # Mobile apps detail page
│   ├── ethereum/page.tsx         # EVM/Solidity projects detail page
│   ├── seeker/page.tsx           # Seeker app showcase page
│   ├── seeker/onesol/            # Legal pages (privacy, copyright, license)
│   └── opensource/               # GitHub issues browser
│       ├── page.tsx              # Server page with Suspense
│       └── issues-client.tsx     # Client component for issue browsing
├── components/
│   ├── sections/                 # Page-level section components
│   │   ├── header.tsx            # Hero section with skill radials
│   │   ├── contact-section.tsx   # Social links and email CTA
│   │   ├── footer.tsx            # Footer with attribution
│   │   ├── featured-projects.tsx # Project cards (largest component, ~563 lines)
│   │   ├── achievements.tsx      # Hackathon wins with lightbox
│   │   ├── work-experience-section.tsx  # Career timeline
│   │   ├── nearme-showcase.tsx   # NearMe viral app showcase
│   │   ├── seeker-showcase.tsx   # Seeker fintech app showcase
│   │   ├── opensource-contribution.tsx  # Open source section
│   │   ├── rust-projects.tsx     # Rust projects section
│   │   ├── foundry-projects.tsx  # Foundry/Solidity projects
│   │   ├── certifications.tsx    # Certifications section
│   │   └── tech-details/         # Detailed tech breakdown components
│   │       ├── solana-details.tsx
│   │       ├── frontend-details.tsx
│   │       ├── mobile-details.tsx
│   │       ├── seeker-details.tsx
│   │       └── solidity-evm-details.tsx
│   └── ui/                       # Reusable UI primitives
│       ├── card.tsx              # Card with variant-based background images
│       ├── badge.tsx             # Tag/badge component
│       ├── skill-radial.tsx      # SVG radial progress skill visualization
│       ├── skill-progress.tsx    # Linear progress bar
│       ├── skill-set.tsx         # Skill grouping wrapper
│       ├── particles-background.tsx  # Animated particle background
│       ├── social-icon.tsx       # Social media icon link
│       ├── copy-email-button.tsx # Copy-to-clipboard email button
│       ├── view-all-button.tsx   # CTA button for opening dialogs
│       ├── view-all-dialog.tsx   # Radix Dialog for full project lists
│       └── work-experience.tsx   # Work experience card
├── assets/
│   ├── images/newdp.png          # Profile picture
│   └── tech-bg/                  # Background images for card variants
│       ├── solana-bg.jpg
│       ├── ethereum-bg.jpg
│       ├── rust-bg.jpg
│       ├── go-bg.jpg
│       └── frontend-bg.jpg
└── lib/                          # Utilities and data
    ├── data.ts                   # Static data arrays (projects, certifications)
    ├── github.ts                 # GitHub API client with rate-limit handling
    ├── firebase.ts               # Firestore init, caching, and pagination
    ├── solana-companies.ts       # Solana ecosystem organization list
    └── utils.ts                  # cn() utility (clsx + tailwind-merge)
```

## Architecture and Key Patterns

### Routing
Next.js App Router with file-based routing. Routes: `/`, `/solana`, `/frontend`, `/mobile`, `/ethereum`, `/seeker`, `/seeker/onesol/*`, `/opensource`.

### Client vs Server Components
- Most interactive components use `"use client"` directive (including the home page)
- Server components are used for initial page shells and data fetching
- `Suspense` wraps async content with loading skeletons

### Styling
- **Tailwind CSS** with utility classes — no CSS modules or styled-components
- **CSS custom properties** defined in `globals.css` for the GitHub dark theme palette
- **Color system**: Primary `#58a6ff` (blue), Secondary `#3fb950` (green), Accent `#f78166` (orange), Purple `#a371f7`
- **Gray scale**: `gh-950` through `gh-100` mapped to GitHub dark theme grays
- **Dark mode only** — background is `#000000`, no light theme
- Use the `cn()` utility from `@/lib/utils` to merge Tailwind classes conditionally

### Card Variant System
The `Card` component (`src/components/ui/card.tsx`) accepts a `variant` prop (solana, solidity, rust, go, frontend, default) that applies background images with gradient overlays from `src/assets/tech-bg/`.

### State Management
- Local React state only (`useState`) — no external state libraries
- Dialog open/close states are managed in parent components
- Lightbox image index state for media galleries

### Data Flow
1. **Static data**: Exported arrays in `src/lib/data.ts` (projects, certifications)
2. **GitHub API** (`src/lib/github.ts`): Fetches repos and issues for Solana ecosystem orgs
3. **Firebase Firestore** (`src/lib/firebase.ts`): Caches GitHub issues to avoid rate limiting. Collection: `github_issues`
4. **Fallback strategy**: GitHub API -> Firestore cache on 403 rate-limit errors

### Imports
Always use the `@/` path alias for imports from `src/`:
```typescript
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { solanaProjects } from "@/lib/data";
```

## Environment Variables

Required for the `/opensource` GitHub issues feature (Firebase caching):
```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

Optional (higher GitHub API rate limits):
```
NEXT_PUBLIC_GITHUB_TOKEN
```

See `.env.example` for the template. Never commit `.env` files.

## External Image Domains

Configured in `next.config.mjs` — remote images are allowed from:
- `avatars.githubusercontent.com` (GitHub avatars)
- `pbs.twimg.com` (Twitter/X profile images)

Add new domains to `next.config.mjs` `images.remotePatterns` when needed.

## Deployment

- **Target**: GitHub Pages (static export to `./out`)
- **CI/CD**: `.github/workflows/nextjs.yml` — triggers on push to `main` or manual dispatch
- **Node version**: 20 (in CI)
- **Custom domain**: `bluntbrain.com` (via `CNAME` file)

## Conventions for AI Assistants

1. **File naming**: Components use kebab-case filenames (`featured-projects.tsx`). Exports use PascalCase for components, camelCase for functions.
2. **Component placement**: Page sections go in `src/components/sections/`, reusable UI primitives in `src/components/ui/`, tech detail breakdowns in `src/components/sections/tech-details/`.
3. **Adding new projects**: Add entries to the arrays in `src/lib/data.ts`.
4. **Adding new pages**: Create a directory under `src/app/` with a `page.tsx` file.
5. **Styling**: Use Tailwind utility classes. Reference the color tokens (`primary`, `secondary`, `accent`, `gh-*`). Use `cn()` for conditional class merging.
6. **No test framework**: There are no tests to run. Validate changes with `npm run lint` and `npm run build`.
7. **TypeScript**: Strict mode is enabled. Define interfaces for component props. Use proper types for GitHub API responses and Firebase documents.
8. **Animations**: Use Framer Motion for component animations. The particle background uses tsparticles.
9. **Keep it simple**: This is a personal portfolio — avoid over-engineering. Static data in `data.ts` is preferred over databases for portfolio content.
