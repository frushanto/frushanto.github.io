# AGENTS.md

Comprehensive guidance for AI agents working on this project.

## Project Overview

**Ivan Kozlov - Portfolio Website**  
A modern, minimalist portfolio site showcasing embedded systems engineering expertise. Built with cutting-edge technologies for optimal performance and maintainability.

- **Status**: Production-ready
- **Phase**: Core architecture complete and stable
- **Deployment**: GitHub Pages (https://frushanto.com)
- **Built for**: Embedded systems engineers and technical professionals

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Astro | 5.12.3 |
| **Styling** | Tailwind CSS with Vite Plugin | 4.1.11 |
| **Language** | TypeScript | - |
| **Internationalization** | Astro i18n | EN, DE |
| **Sitemap** | @astrojs/sitemap | 3.6.0 |
| **SEO** | astro-robots-txt | 1.0.0 |
| **Fonts** | IBM Plex Mono (Google Fonts) | - |

## Project Architecture

### Directory Structure

```
src/
├── components/          # Page-level components
│   ├── base/           # Reusable base components
│   │   ├── Section.astro
│   │   ├── SectionHeader.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   └── NavLink.astro
│   ├── About.astro
│   ├── Education.astro
│   ├── Experience.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Hobbies.astro
│   ├── Languages.astro
│   └── Projects.astro
├── config/             # Configuration files
│   ├── locales.ts
│   └── shared.ts
├── content/            # Content collection configs
│   ├── config.ts
│   ├── utils.ts
│   └── site/
│       ├── en.json
│       └── de.json
├── design/             # Design system (tokens)
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   ├── tokens.ts
│   └── index.ts
├── i18n/              # Internationalization
│   ├── en.json
│   ├── de.json
│   └── utils.ts
├── layouts/           # Layout components
│   └── BaseLayout.astro
├── pages/             # Route pages
│   ├── index.astro    # EN home
│   ├── imprint.astro
│   ├── privacy.astro
│   ├── 404.astro
│   └── de/            # German routes
│       ├── index.astro
│       ├── impressum.astro
│       └── datenschutz.astro
├── styles/            # Global styles
│   └── global.css
└── utils/             # Utility functions

public/                # Static assets
```

### Design System

**Color Palette** (Light-only theme):
- Primary background surfaces (3 levels)
- Text hierarchy (primary, secondary, tertiary)
- Accent color with hover state and light variant
- Semantic colors (success, warning, error)
- Border color

**Typography**:
- Font family: IBM Plex Mono (monospace, loaded from Google Fonts)
- Responsive font sizes
- Font weights: Regular (400), Medium (500), Bold (700)
- Line heights: Compact (1.2), Normal (1.5), Relaxed (1.75)

**Spacing**:
- Responsive spacing scale (CSS variables)
- Section padding (responsive: mobile/tablet/desktop)
- Consistent rhythm throughout the application

**Configuration**: 
- All design tokens defined in `src/design/tokens.ts`
- Integrated with Tailwind via `tailwind.config.ts`
- CSS variables injected into `src/styles/global.css`

### Component Architecture

#### Base Components (Reusable)
- **Section.astro**: Container with responsive padding
- **SectionHeader.astro**: Section title with accent line
- **Card.astro**: Reusable card component with hover state
- **Badge.astro**: Skill/tag badges with variants
- **NavLink.astro**: Navigation link styling

#### Page Components (Built from Base)
All major sections use base components for consistency:
- **Header.astro**: Navigation with language selector
- **Hero.astro**: Introduction with animated gradient
- **About.astro**: About section
- **Experience.astro**: Work experience (Card-based)
- **Education.astro**: Education section (Card-based)
- **Projects.astro**: Portfolio projects (Card-based)
- **Languages.astro**: Programming languages (Badge-based)
- **Hobbies.astro**: Interests and hobbies
- **Footer.astro**: Footer with links

### Internationalization (i18n)

**Supported Languages**: English (EN), German (DE)

**Structure**:
- Language files: `src/i18n/en.json`, `src/i18n/de.json`
- Content data: `src/content/site/en.json`, `src/content/site/de.json`
- Utils: `src/i18n/utils.ts` - Helper functions for translations

**Usage**:
```typescript
import { t } from '../i18n/utils';
const label = t(lang, 'nav.about');
```

**Routing**:
- EN: Default locale (no prefix) → `/about`, `/projects`, etc.
- DE: Prefixed locale → `/de/about`, `/de/projects`, etc.
- Configured in `astro.config.mjs` with custom routing

## Development Workflow

### Setup
```bash
npm install
npm run dev       # Start dev server (http://localhost:4321)
```

### Build & Preview
```bash
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run preview:host  # Preview with host flag
```

### Development Commands
```bash
npm run astro [command]  # Direct Astro CLI access
```

## Key Implementation Details

### Styling Approach
- **Framework**: Tailwind CSS v4 with Vite plugin integration
- **Design Tokens**: TypeScript-based, converted to CSS variables
- **Mobile-First**: All components designed mobile-first
- **No Dark Mode**: Light-only design for simplicity
- **CSS Methodology**: Utility-first (no CSS modules or CSS-in-JS)

### Performance Characteristics
- **Rendering**: Fully static (zero JavaScript required for basic functionality)
- **Build Time**: ~1 second
- **Output**: Static HTML files (EN + DE routes)
- **Font Loading**: Web-optimized IBM Plex Mono from Google Fonts
- **JavaScript Enhancements**: 
  - Header scroll behavior
  - Smooth scrolling
  - Language selector

### SEO & Analytics
- Sitemap generation: `@astrojs/sitemap`
- Robots.txt: `astro-robots-txt`
- Semantic HTML throughout
- Open Graph and Meta tags support
- Language hreflang tags for i18n

## Working Guidelines for Agents

### When Adding Features
1. **Use existing base components** from `src/components/base/`
2. **Follow established patterns** - don't create one-off styles
3. **Maintain responsive design** - test at 375px, 768px, 1024px
4. **Use Tailwind utilities** - avoid hardcoded styles
5. **Reference design tokens** - colors from Tailwind config

### When Modifying Components
1. Extract reusable logic to base components if applicable
2. Use design system colors: `surface-*`, `text-*`, `accent-*`
3. Maintain spacing consistency with Tailwind scale
4. Test across supported browsers
5. Ensure translations exist for new strings

### Naming Conventions
- **Components**: PascalCase (Header.astro, Hero.astro)
- **Base Components**: Specific purpose in `src/components/base/`
- **Utilities**: camelCase (utils.ts, helpers.ts)
- **Config Files**: camelCase or lowercase
- **Design Tokens**: camelCase with semantic naming

### Code Quality Standards
- **TypeScript**: Strict mode, no `any` types
- **Accessibility**: Semantic HTML, ARIA labels where needed
- **Responsive**: Mobile-first approach mandatory
- **Performance**: Minimize JavaScript, prefer static rendering
- **Maintainability**: DRY principle, component reuse

## Building for Production

```bash
npm run build
```

**Output**:
- `dist/` directory with production-ready static site
- Separate routes for EN and DE locales
- Optimized assets and CSS
- Ready for GitHub Pages deployment

**Deployment**:
- Target: GitHub Pages
- Base URL: https://frushanto.com
- No server-side rendering required
- Each language version generates separate HTML files

## Important Notes for Agents

### Architecture Principles
✅ **What we do**:
- Component-based, reusable architecture
- Design system with consistent tokens
- Static site generation (no server needed)
- Mobile-first responsive design
- Multi-language support (EN/DE)

❌ **What we avoid**:
- Dark mode (light-only for simplicity)
- Unnecessary JavaScript
- Hardcoded styles (Tailwind only)
- Complex state management
- CSS-in-JS or CSS modules

### Critical Files
- `src/components/base/` - Reference for component patterns
- `src/design/tokens.ts` - Design system source of truth
- `tailwind.config.ts` - Tailwind configuration with tokens
- `astro.config.mjs` - Framework and i18n configuration
- `src/i18n/` - Translations and i18n utilities

### Testing Considerations
- Test responsive breakpoints (mobile, tablet, desktop)
- Test all language variants (EN, DE)
- Verify accessibility with semantic HTML
- Check build output for optimizations
- Preview production build before deployment

## Resources

- **Astro Documentation**: https://docs.astro.build
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **TypeScript Documentation**: https://www.typescriptlang.org/docs
- **IBM Plex Font**: https://fonts.google.com/specimen/IBM+Plex+Mono
- **GitHub Pages Deployment**: https://pages.github.com

## Version History

- **v1.0.0**: Initial production release
  - Complete design system implementation
  - All 9 page components refactored
  - Full i18n support (EN/DE)
  - Light-only theme
  - Static site generation
  - SEO optimization
