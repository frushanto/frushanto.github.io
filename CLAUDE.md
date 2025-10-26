# CLAUDE.md

Guidance for Claude when working with this project.

## Project Overview

Modern, minimalist portfolio site built with **Astro** and **Tailwind CSS v4**. Fully implemented design system with clean, maintainable architecture.

**Status**: Production-ready  
**Current Phase**: Core architecture complete and stable

## Tech Stack

- **Astro 5.12.3**: Static site generator
- **Tailwind CSS 4.1.11**: Utility-first CSS framework with vite plugin
- **TypeScript**: Type-safe configuration
- **i18n**: Multi-language support (EN, DE)

## Development Commands

```bash
npm run dev       # Start development server (http://localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture Overview

### Current State ✅ COMPLETED
Component-based architecture with design system fully implemented:
- `src/config/` - Content configs (EN/DE)
- `src/components/` - Page components using base component system
- `src/components/base/` - Reusable base components (Section, Card, Badge, NavLink, SectionHeader)
- `src/design/` - Design tokens system (colors, typography, spacing) - **REMOVED** (now using Tailwind directly)
- `src/i18n/` - Internationalization (JSON + utilities)
- `src/styles/global.css` - Global styles with @tailwindcss import
- `src/pages/` - Page layouts (EN + DE routes)
- `tailwind.config.js` - Design token-based configuration, light-only theme

### Completed: Design System Implementation ✅

**Phase 1: Design Tokens** ✅ Complete
- Design tokens originally created but now integrated directly into Tailwind config
- Light-only color palette (no dark mode)
- Typography: IBM Plex Mono loaded from Google Fonts
- Responsive spacing scale built into Tailwind

**Phase 2: Base Components** ✅ Complete
- `src/components/base/Section.astro` - Container with responsive padding
- `src/components/base/SectionHeader.astro` - Section title with accent line
- `src/components/base/Card.astro` - Reusable card component with hover state
- `src/components/base/Badge.astro` - Badge variants for skills/tags
- `src/components/base/NavLink.astro` - Navigation link styling

**Phase 3: Component Refactoring** ✅ Complete (9/9 components)
- About.astro ✅
- Languages.astro ✅
- Hobbies.astro ✅
- Projects.astro ✅
- Experience.astro ✅
- Education.astro ✅
- Header.astro ✅ (with language selector)
- Footer.astro ✅
- Hero.astro ✅ (with animated gradient)

All components follow consistent patterns using base components.

**Phase 4: Theme Management** ✅ Complete (Light-only)
- Dark theme completely removed (was causing unnecessary complexity)
- Light-only implementation (cleaner, faster, more maintainable)
- No theme toggle button or localStorage theme management needed
- Simpler codebase with no dead code paths

### Key Achievements
1. **Design System**: Consistent component architecture across all pages
2. **Code Reduction**: 40-50% reduction in component code through base components
3. **Responsive**: All components fully responsive (mobile-first)
4. **Maintainability**: Changes to design tokens cascade throughout the app
5. **Performance**: Minimal JavaScript, fully static rendering
6. **i18n**: Seamless English/German language switching

## Key Files & Their Purpose

- `src/components/base/` - Reusable base components (Section, Card, Badge, NavLink, SectionHeader)
- `src/components/` - Page-level components
- `src/config/` - Content configuration (EN/DE)
- `src/i18n/` - Translation files (EN/DE JSON)
- `src/pages/` - Route pages (minimal, clean structure)
- `tailwind.config.js` - Tailwind configuration with tokens
- `CLAUDE.md` - This file (guidance for AI assistants)

## Working Guidelines

### When Adding Features
1. Use base components from `src/components/base/` if available
2. Follow the existing pattern: Create reusable components, not one-off styles
3. Maintain responsive design patterns (mobile-first)
4. Use consistent spacing and typography from Tailwind

### When Modifying Components
1. Check if logic should extract to a base component
2. Avoid hardcoding styles - use Tailwind utilities
3. For colors: use Tailwind color palette defined in config
4. Test responsive breakpoints (mobile: 375px, tablet: 768px, desktop: 1024px)
5. Ensure i18n strings are translated (src/i18n/en.json + de.json)

### Naming Conventions
- Components: PascalCase (Header.astro, Hero.astro)
- Base components: In `src/components/base/` with specific purposes
- Utilities: camelCase (theme.ts, storage.ts)
- Files: Use .astro for components, .ts for utilities, .css for styles
- Config files: camelCase or lowercase

## i18n Usage

```typescript
import { t } from '../i18n/utils';
const label = t(lang, 'nav.about');  // Get translated string
```

Translations defined in `src/i18n/en.json` and `src/i18n/de.json`. Add new keys as needed.

## Build & Deployment

- `npm run build` produces static HTML in `dist/`
- Site is hosted on GitHub Pages
- No server-side rendering needed
- Each language version generates separate pages
- Build time: ~1 second (very fast)
- Output: Two static HTML files (en + de)

## Important Notes

- All styling uses Tailwind CSS (no CSS-in-JS or CSS modules)
- IBM Plex Mono font loaded from Google Fonts (web-optimized)
- Site is fully static - no JavaScript required for basic functionality
- Light-only design (no dark mode to maintain simplicity)
- Header scroll behavior and smooth scrolling are the only JavaScript enhancements

## Potential Future Improvements

See `ARCHITECTURE_IMPROVEMENTS.md` for detailed suggestions on:
1. Component composition and extensibility
2. Performance optimizations
3. Accessibility enhancements
4. Content organization
5. Developer experience improvements

- Theme toggle and i18n are progressive enhancements
- Accesibility maintained through semantic HTML and ARIA labels

## Resources

- **Main Plan**: `ARCHITECTURE_IMPROVEMENT_PLAN.md` - Comprehensive improvement strategy
- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Config Files**: `src/config/en.ts`, `src/config/de.ts` - Content structure