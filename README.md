# Ivan Kozlov - Portfolio Website

A modern, minimalist portfolio website showcasing embedded systems engineering expertise, projects, and experience.

> 🔀 **Fork Notice:** This project is a fork of [Ryan Fitzgerald's](https://github.com/RyanFitzgerald) original portfolio template. Original template created by Ryan Fitzgerald and shared under the MIT License.

**Live Site:** [frushanto.com](https://frushanto.com)

## 🚀 Tech Stack

- **[Astro 5.12.3](https://astro.build/)** - Static site generator
- **[Tailwind CSS 4.1.11](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe configuration
- **i18n:** English & German language support
- **Integrations:**
  - `@astrojs/sitemap` - Automatic sitemap generation
  - `astro-robots-txt` - Automatic robots.txt generation

## ✨ Features

- ✅ **Production-ready** - Fully optimized for performance and SEO
- ✅ **Multi-language** - English & German support (easy to extend)
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Component-based** - Modular, reusable component architecture
- ✅ **SEO Optimized:**
  - Open Graph tags for social sharing
  - Twitter Card support
  - JSON-LD structured data (Person schema)
  - Automatic sitemap & robots.txt
  - Canonical URLs & hreflang links
- ✅ **Light-only Theme** - Clean, fast, no dark mode overhead
- ✅ **Static Rendering** - No JavaScript bloat, fast loading

## 📁 Project Structure

```
src/
├── components/           # Page components (About, Projects, etc.)
│   ├── base/            # Reusable base components
│   └── *.astro
├── config/              # Global configuration helpers
│   ├── locales.ts       # Locale definitions (codes, slugs, canonical paths)
│   └── shared.ts        # Shared config (base URL, localized URL builders)
├── layouts/
│   └── BaseLayout.astro # Main layout with SEO
├── pages/               # Route pages
│   ├── index.astro      # English home
│   └── de/
│       └── index.astro  # German home
├── i18n/                # Internationalization
│   ├── en.json
│   ├── de.json
│   └── utils.ts
└── styles/
    └── global.css       # Global styles & Tailwind import

public/
├── favicon.svg
└── og.png               # Social media preview image (1200x630px)
```

## 🎯 Key Pages

- **`/`** - English portfolio (EN)
- **`/de/`** - German portfolio (DE)
- **`/robots.txt`** - SEO robots file (auto-generated)
- **`/sitemap-index.xml`** - Sitemap index (auto-generated)

## 🔧 Development

### Prerequisites
- Node.js 18+ with npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Preview production build with network access (e.g., for mobile testing)
npm run preview:host
```

Development server runs at `http://localhost:4321`

To validate the production output locally, first build the project (`npm run build`), then start the preview server bound to your network interface with `npm run preview:host`. The command is equivalent to `npm run preview -- --host` and makes the site available at `http://0.0.0.0:4321`, allowing access from other devices on the same network.

## 🌐 Deployment

### GitHub Pages Domain Configuration

1. Set the canonical domain in `src/config/shared.ts` via `sharedConfig.baseUrl`. Use the full URL without a trailing slash (for example, `https://your-name.github.io` or `https://example.com`). Leaving this value empty makes the build fall back to `PUBLIC_BASE_URL`, then `import.meta.env.SITE`, and finally relative URLs.
2. Ensure the build environment exposes the same domain through the `PUBLIC_BASE_URL` variable so that `astro.config.mjs` and the runtime stay in sync. In GitHub Actions you can add:

   ```yaml
   env:
     PUBLIC_BASE_URL: https://your-name.github.io
   ```

   For project pages, include the repository segment (e.g., `https://your-name.github.io/portfolio`).
3. When using a custom domain on GitHub Pages, configure the domain in the repository settings (and the optional `CNAME` file) to match the `baseUrl` value so that canonical, Open Graph, and hreflang links stay correct.

## 📝 Updating Content

All localized content lives in JSON data files inside `src/content/site/`:

### English Content (`src/content/site/en.json`)
```jsonc
{
  "name": "Your Name",
  "title": "Your Title",
  "description": "Site description",
  "skills": ["C", "Embedded", "Rust"],
  // ... projects, experience, education, hobbies
}
```

### German Content (`src/content/site/de.json`)
```jsonc
{
  "name": "Ihr Name",
  "title": "Ihre Berufsbezeichnung",
  // ... same structure, German translations
}
```

### Shared Config (`src/config/shared.ts`)
Centralized location for data that doesn't change across languages:
- `name` - Full name
- `social.email` - Email address
- `social.linkedin` - LinkedIn profile URL
- `social.github` - GitHub profile URL
- `accentColor` - Brand color (used throughout the site)

**Update shared data once, it applies everywhere!** 🎯

## 🎨 Customization

### Change Brand Color

Edit `src/config/shared.ts`:
```typescript
export const sharedConfig = {
  // ... other config
  accentColor: "#1d4ed8",  // Change this to your brand color
};
```

### Add/Remove Sections

Sections are conditionally rendered — if you remove data from config, the section disappears:
- Remove `skills` array → Skills section hidden
- Remove `projects` array → Projects section hidden
- Remove `experience` array → Experience section hidden
- Remove `education` array → Education section hidden

### Add New Skills/Projects

Simply add to the respective arrays in `src/content/site/en.json` and `src/content/site/de.json`. Changes reflect immediately.

### Add a New Locale

Follow these steps to introduce another language variation:

1. Duplicate an existing content file in `src/content/site/` (for example, copy `en.json`) and translate the values for the new language code.
2. Create a matching translation file in `src/i18n/` (for example, `fr.json`) so that UI strings resolve through the `t()` helper.
3. Register the locale in `src/config/locales.ts` by providing its language `code`, URL `slug`, human-readable `name`, and SEO metadata (`hrefLang`, `ogLocale`). The module derives the canonical root URL automatically, so navigation and SEO helpers stay consistent.
4. Add a page entry under `src/pages/` that points to the new locale (for example, `src/pages/fr/index.astro`) and pass the language code to `BaseLayout`.
5. Update the Astro configuration (`astro.config.mjs`) to include the new locale inside the `i18n.locales` array (and adjust `defaultLocale` if it changes).

Once the locale is registered, the header language switcher, canonical URLs, and `<link rel="alternate">` tags are generated automatically from the locale configuration—no additional manual tweaks are required for SEO metadata.

## 🚢 Deployment

The site is static HTML/CSS/JS — deploy to any static host:

- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Connect GitHub repo, auto-deploys on push
- **GitHub Pages** - Works out of the box
- **Any static host** (AWS S3, Cloudflare Pages, etc.)

## 📊 SEO Features

- ✅ Automatic sitemap generation (`sitemap-index.xml`, `sitemap-0.xml`)
- ✅ Automatic robots.txt with Sitemap reference
- ✅ Open Graph meta tags for social sharing
- ✅ Twitter Card support (`summary_large_image`)
- ✅ JSON-LD Person schema structured data
- ✅ Canonical URLs for both language versions
- ✅ Hreflang links for language alternates

## 📄 License

MIT License - See [LICENSE.md](LICENSE.md) for details.

## 🤝 Contributing

This is a personal portfolio site. For improvements or bug fixes, feel free to fork or submit issues.

---

**Built with ❤️ using Astro & Tailwind CSS**
