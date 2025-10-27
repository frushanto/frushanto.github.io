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
├── config/              # Content configuration
│   ├── en.ts            # English content & metadata
│   ├── de.ts            # German content & metadata
│   ├── shared.ts        # Shared config (social links, etc.)
│   └── index.ts         # Config exports
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
```

Development server runs at `http://localhost:4321`

## 📝 Updating Content

All content is managed through TypeScript config files in `src/config/`:

### English Content (`src/config/en.ts`)
```typescript
export const siteConfigEN = {
  name: "Your Name",
  title: "Your Title",
  description: "Site description",
  // ... skills, projects, experience, education, hobbies
}
```

### German Content (`src/config/de.ts`)
```typescript
export const siteConfigDE = {
  name: "Your Name",
  title: "Your Title (German)",
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

Simply add to the respective arrays in `en.ts` and `de.ts`. Changes reflect immediately.

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
