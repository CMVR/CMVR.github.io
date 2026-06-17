# Component Map

## Shared Components (appear on every page)

### Sidebar Navigation
- **Structure**: `nav.sidebar` > `.sidebar-header` (logo) + `ul.nav-links` (5 items) + `.sidebar-footer` (YouTube link)
- **Active state**: The current page's nav link gets `class="active"`
- **Responsive**: Becomes a fixed bottom bar at ≤768px, hiding the footer
- **Used on**: All 12 pages
- **Inconsistency**: `project-1.html` has only 4 nav links (missing "Hobby Projects")

### Main Content Wrapper
- **Structure**: `main.content` — all page content lives inside this
- **Used on**: All 12 pages

## Page-Level Patterns

### Page Header (`header.page-header`)
- **Structure**: `h1` + `p.page-intro`
- **Used on**: `projects.html`, `hobby.html`, `papers.html`
- **Not used on**: `index.html` (uses hero instead), `about.html` (uses about-hero), project detail pages (use project-header)

### Hero Section (`section.hero`)
- **Structure**: `.hero-card` (photo + role + affiliation) + `.hero-text` (greeting + h1 + tagline + intro-text)
- **Used on**: `index.html` only
- **Note**: Unique to home page

### About Hero (`section.about-hero`)
- **Structure**: `.about-image` (img) + `.about-intro` (h1 + role + affiliation)
- **Used on**: `about.html` only
- **Note**: Similar to hero but different layout and class names — not shared

## Reusable Components

### Project Card (Small) — `.project-card`
- **Structure**: `a.project-card` > `.project-image` (img) + `.project-info` (h3 + p)
- **Layout**: Vertical card in auto-fit grid
- **Used on**: `index.html` (featured projects grid, 3 cards)
- **Hover**: Lifts up 4px + shadow + image scales

### Project Card (Large) — `.project-card-large`
- **Structure**: `a.project-card-large` > `.project-image` (img) + `.project-info` (h2 + `.project-meta-tag` + p)
- **Layout**: Horizontal card (300px image | text), stacks at ≤900px
- **Used on**: `projects.html` (3 cards), `hobby.html` (3 cards)
- **Hover**: Lifts up 2px + shadow + image scales
- **nth-child coloring**: Cards 1/2/3 get tinted backgrounds (`#eef5fa`, `#f0f4e8`, `#f3eef7`)
- **Note**: On `hobby.html`, all 3 cards have inline gradient backgrounds and `.placeholder-text` instead of images

### Project Detail Page — `.project-page`
- **Structure**: `article.project-page` containing:
  1. `header.project-header` — back-link + h1 + subtitle + meta tags
  2. `section.project-intro` — introductory paragraphs
  3. `section.project-gallery` (one or more) — h2/h3 + `.gallery-grid`
  4. `section.project-details` (one or more) — h2 + paragraphs + optional `.feature-list`
  5. `nav.project-nav` — prev/next navigation
- **Used on**: All 6 detail pages (`project-sensory-room`, `project-standalone-sensory`, `project-deescalation`, `hobby-helms-deep`, `hobby-hall-of-kings`, `hobby-varrock`, plus `project-1`)

### Gallery Grid — `.gallery-grid`
- **Structure**: `.gallery-grid` > `.gallery-item[data-index]` > `img.gallery-image` or `div.gallery-image`
- **Layout**: Auto-fill grid, min 250px columns
- **Used on**: All project/hobby detail pages
- **Interaction**: Click opens lightbox (via `lightbox.js`)
- **Note**: Some items use `<img>` (real content), others use `<div>` with inline gradient background (placeholders)

### Feature List — `.feature-list`
- **Structure**: `ul.feature-list` > `li` with `<strong>` label + em-dash + description
- **Decoration**: Green dot bullet via `::before` pseudo-element
- **Used on**: `project-sensory-room.html` (3 lists), `project-standalone-sensory.html` (1 list), `project-deescalation.html` (1 list)

### Project Navigation — `nav.project-nav`
- **Structure**: `.nav-prev` + `.nav-next`, each with `.nav-label` and optional `.nav-title`
- **Layout**: Flexbox space-between, stacks at ≤768px
- **Used on**: All 7 project/hobby detail pages

### Lightbox — `.lightbox#lightbox`
- **Structure**: Close/prev/next buttons + `.lightbox-content` > `.lightbox-image-container` + `.lightbox-counter`
- **Behavior**: JS-driven via `lightbox.js` — opens on gallery click, keyboard nav (Esc/Left/Right), touch swipe
- **Used on**: All 7 project/hobby detail pages (included in HTML + script tag)
- **Not used on**: `index.html`, `projects.html`, `hobby.html`, `papers.html`, `about.html`

### Paper Item — `.paper-item`
- **Structure**: `.paper-year` + `.paper-content` (h2 + `.paper-authors` + `.paper-journal` + `.paper-links`)
- **Used on**: `papers.html` only (2 items)
- **Unique elements**: `.paper-citations` badge, `.paper-link`

### Skills Grid — `.skills-grid`
- **Structure**: `.skills-grid` > `.skill-category` (h3 + ul)
- **Used on**: `about.html` only

### Contact Links — `.contact-links`
- **Structure**: `.contact-links` > `a.contact-item` (`.contact-label` + `.contact-value`)
- **Used on**: `about.html` only

## Component Relationships

```
Home Page:          [Sidebar] + [Hero] + [Project Card (small) x3]
Projects Page:      [Sidebar] + [Page Header] + [Project Card (large) x3]
Hobby Page:         [Sidebar] + [Page Header] + [Project Card (large) x3]
Project Detail:     [Sidebar] + [Project Header] + [Project Intro] + [Gallery] + [Feature List] + [Details] + [Project Nav] + [Lightbox]
Papers Page:        [Sidebar] + [Page Header] + [Paper Item x2]
About Page:         [Sidebar] + [About Hero] + [Skills Grid] + [Contact Links]
```

## Pattern Duplication / Opportunities

1. **Small vs Large project cards** share `.project-image` and `.project-info` but have separate styling rules and different heading levels (h3 vs h2). Could be unified.
2. **nth-child card coloring** is duplicated identically for both `.project-card` and `.project-card-large`.
3. **Placeholder patterns** are inconsistent — some use `div.gallery-image` with inline gradients, others use `div.placeholder-image`, and hobby listing cards use inline styles on `.project-image` with `span.placeholder-text`.
4. **Video section** exists only in `project-1.html` (the template) — no real project page uses it yet.
