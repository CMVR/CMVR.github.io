# Style Guide

## CSS Architecture

The site uses 4 CSS files loaded selectively per page, plus one JS file:

| File | Size | Purpose | Used By |
|------|------|---------|---------|
| `styles.css` | Main | Base reset, variables, sidebar, hero, page headers, project cards, responsive | All pages |
| `project.css` | Page-specific | Project detail layout, gallery, lightbox, feature lists, project nav | All project/hobby detail pages |
| `about.css` | Page-specific | About hero, skills grid, contact links | `about.html` only |
| `papers.css` | Page-specific | Paper list items, year badges, citation badges, scholar link | `papers.html` only |
| `lightbox.js` | JS | Gallery lightbox with keyboard/touch navigation | All project/hobby detail pages |

## CSS Variables (`:root` in `styles.css`)

### Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-bg` | `#fafcfc` | Body background |
| `--color-bg-warm` | `#f8faf9` | Warm background variant (video containers, project images) |
| `--color-sidebar` | `#ffffff` | Sidebar bg, card bg, contact items |
| `--color-text` | `#2d3436` | Primary text |
| `--color-text-light` | `#636e72` | Secondary text (paragraphs, descriptions) |
| `--color-text-muted` | `#a0a8ab` | Tertiary text (labels, meta info) |
| `--color-accent` | `#4a9e8f` | Teal accent (links, active nav, tags) |
| `--color-accent-soft` | `#e8f4f2` | Light teal (hover backgrounds, citation badges) |
| `--color-border` | `#e8eced` | Borders throughout |
| `--color-shadow` | `rgba(45, 52, 54, 0.06)` | Box shadow color |

### Hardcoded Colors (not using variables)

These colors appear inline or in CSS without using the variable system:

| Color | Where | What |
|-------|-------|------|
| `#eef5fa` | `styles.css` | 1st project card background (`.project-card:nth-child(1)`, `.project-card-large:nth-child(1)`) |
| `#f0f4e8` | `styles.css` | 2nd project card background |
| `#f3eef7` | `styles.css` | 3rd project card background |
| `rgba(255, 255, 255, 0.95)` | `styles.css` | Mobile nav background |
| `rgba(0, 0, 0, 0.95)` | `project.css` | Lightbox overlay |
| `white` | `project.css` | Lightbox buttons/text |
| `rgba(255, 255, 255, 0.5)` | Inline HTML | Placeholder text on hobby cards |
| `rgba(255, 255, 255, 0.6)` | `project.css` | Lightbox counter |
| Various gradient hex values | Inline HTML (`project-1.html`) | Placeholder gallery gradients |
| Dark gradient values (`#3d4a52`, `#2a363d`, etc.) | Inline HTML (`hobby.html`, hobby pages) | Hobby placeholder gradients |
| `#2a2a2a`, `#1a1a1a` | `project.css` | Lightbox placeholder gradient |

### Typography

| Variable | Value |
|----------|-------|
| `--font-display` | `'Fraunces', Georgia, serif` |
| `--font-body` | `'DM Sans', -apple-system, sans-serif` |

Both fonts are loaded from Google Fonts with these weights:
- **DM Sans**: 300, 400, 500 (normal + italic for 300, 400)
- **Fraunces**: 300, 400, 500, 600 (normal + italic for 300)

### Font Sizes Used

| Size | Context |
|------|---------|
| `clamp(3rem, 6vw, 4.5rem)` | Home hero h1 |
| `clamp(2.5rem, 5vw, 3.5rem)` | Page headers, project detail h1 |
| `clamp(2rem, 4vw, 2.75rem)` | About page h1 |
| `1.75rem` | Logo |
| `1.5rem` | Featured projects h2 |
| `1.35rem` | Project/about section h2 |
| `1.25rem` | Tagline |
| `1.2rem` | Project card h3 |
| `1.15rem` | Project subtitle, paper h2 |
| `1.1rem` | Page intro, about role, paper year, project gallery h3 |
| `1.05rem` | Project intro paragraphs |
| `1rem` | Body text, about section paragraphs, skill category h3, nav title |
| `0.95rem` | Nav links, about affiliation, project description, feature list, contact value, scholar link, view-all |
| `0.9rem` | Project info p, meta items, back-link, paper authors/journal, paper-link, skills list, lightbox counter |
| `0.85rem` | Social link, hero affiliation, intro text, placeholder text, contact label |
| `0.8rem` | Meta tag, nav label, paper citations |

### Spacing

| Variable | Value |
|----------|-------|
| `--spacing-xs` | `0.5rem` (8px) |
| `--spacing-sm` | `1rem` (16px) |
| `--spacing-md` | `2rem` (32px) |
| `--spacing-lg` | `4rem` (64px) |
| `--spacing-xl` | `6rem` (96px) |
| `--sidebar-width` | `240px` (200px at ≤900px) |
| `--content-max-width` | `1100px` |

### Transitions

| Variable | Value |
|----------|-------|
| `--transition-fast` | `0.2s ease` |
| `--transition-smooth` | `0.4s cubic-bezier(0.4, 0, 0.2, 1)` |

Inconsistency: lightbox uses hardcoded `0.3s ease` instead of either variable.

## Breakpoints

| Breakpoint | Changes |
|------------|---------|
| `≤ 900px` | Sidebar narrows to 200px; content padding reduces; project-card-large goes single-column; project image switches to 16:9 |
| `≤ 768px` | Sidebar becomes bottom nav bar; content gets bottom padding for nav; hero stacks vertically; gallery goes 2-column; project nav stacks vertically; lightbox prev/next shrink |
| `≤ 600px` | About hero stacks vertically; skills grid goes single-column; paper items stack vertically |

## Cache Busting

Inconsistent use of cache-busting query strings:
- `styles.css?v=2` on `index.html`, `projects.html`, `project-sensory-room.html`
- `styles.css` (no version) on `about.html`, `papers.html`, `project-1.html`, `project-deescalation.html`, `project-standalone-sensory.html`, all hobby pages
- `project.css?v=2` only on `project-sensory-room.html`
- `project.css` (no version) on all other project/hobby pages

## Border Radius Values

| Value | Usage |
|-------|-------|
| `50%` | Hero photo (circle) |
| `16px` | Hero card |
| `12px` | Project cards, about image, video container |
| `10px` | Gallery items |
| `8px` | Nav links, contact items, nav prev/next, gallery-image, lightbox placeholder, placeholder-image |
| `4px` | Lightbox image, citation badge |
