# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

140gramos is an Italian restaurant landing page built with Next.js 15, featuring animated components using Motion and Shadcn UI. The site showcases the restaurant's menu (pasta dishes with various sauces), pricing, and brand identity.

**Package Manager**: This project uses **pnpm**. Always use `pnpm` commands, not npm or yarn.

## Key Commands

```bash
# Development
pnpm dev                # Start dev server with Turbopack on http://localhost:3000

# Build & Deploy
pnpm build              # Production build with Turbopack
pnpm start              # Start production server

# Code Quality
pnpm lint               # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router) with Turbopack
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Shadcn UI (New York style)
- **Animation**: Motion (framer-motion successor)
- **Icons**: Lucide React

### Design System

**Brand Colors** (mapped to "Burdeos & Marfil" theme):
- `--brand-blue: #6A1F2B` (burdeos/burgundy - primary brand color)
- `--brand-yellow: #C9A227` (dorado/gold - accent)
- `--brand-orange: #B9826E` (cobre/copper - secondary)
- `--brand-white: #F8F5F1` (marfil/ivory - background)
- `--brand-cream: #FBF8F4` (light cream)

**Fonts**:
- Display/Headings: Playfair Display (`--font-display`)
- Body/UI: Inter (`--font-sans`)

### Project Structure

```
app/
├── layout.tsx          # Root layout with fonts and metadata
├── page.tsx            # Home page (composition of components)
└── globals.css         # Design tokens, Tailwind config, typography system

components/
├── header.tsx          # Navigation
├── hero.tsx            # Hero section with CTAs
├── menu.tsx            # Main menu display (pasta types, sauces, pricing, images)
├── about.tsx           # About section
├── footer.tsx          # Footer
├── image-with-fallback.tsx  # Wrapper for Next.js Image with error handling
└── ui/                 # Shadcn UI components

lib/
└── utils.ts            # cn() utility for class merging
```

### Component Architecture

**Page Structure**: The home page ([app/page.tsx](app/page.tsx)) is a simple composition of section components rendered in sequence: Header → Hero → Menu → About → Footer.

**Animation Pattern**: All major components use Motion for animations:
- `initial`, `animate`, `whileInView` for scroll-based reveals
- `whileHover`, `whileTap` for interactive elements
- `viewport={{ once: true }}` to prevent re-animations on scroll
- Staggered delays (`delay: 0.X + index * 0.05`) for list items

**Styling Convention**:
- Use inline `style={{ color: "var(--brand-*)" }}` for brand colors (not Tailwind classes)
- Use Tailwind utilities for layout, spacing, and responsive design
- CSS custom properties are defined in [app/globals.css](app/globals.css)

**Image Handling**: Use `ImageWithFallback` component instead of Next.js Image directly. Images are unoptimized (`next.config.ts` sets `unoptimized: true`).

### Shadcn UI Configuration

Configuration in [components.json](components.json):
- Style: "new-york"
- Base color: neutral
- CSS variables: enabled
- Icons: lucide-react

**Adding new components**:
```bash
pnpm dlx shadcn@latest add <component-name>
```

### Important Implementation Details

1. **Next.js Config**: Images are unoptimized for faster builds ([next.config.ts:4-6](next.config.ts#L4-L6))

2. **Language**: Site is in Spanish (see metadata and content)

3. **Menu Data**: Hardcoded in [components/menu.tsx](components/menu.tsx):
   - 5 pasta types (including 1 gluten-free)
   - 6 sauce types (with "Premium" badge for truffle)
   - Dynamic menu: least popular items rotate monthly
   - Fixed pricing structure with highlighted combo deal

4. **Color System**: Brand colors map to a burgundy/ivory theme but maintain original `--brand-blue`, `--brand-yellow` naming in code for consistency with design handoff.

5. **Typography System**: Base typography styles in [app/globals.css:197-258](app/globals.css#L197-L258) only apply when no Tailwind text classes are present in ancestor chain.
