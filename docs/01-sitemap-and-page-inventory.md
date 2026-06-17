# Sitemap & Page Inventory

## Site Structure

```
index.html (Home)
├── projects.html (Research Projects listing)
│   ├── project-sensory-room.html (Co-designing VR Sensory Room)
│   ├── project-standalone-sensory.html (Standalone VR Sensory Room)
│   ├── project-deescalation.html (VR De-escalation Training)
│   └── project-1.html (Template/placeholder project)
├── hobby.html (Hobby Projects listing)
│   ├── hobby-helms-deep.html (Helm's Deep VR recreation)
│   ├── hobby-hall-of-kings.html (Hall of Kings VR recreation)
│   └── hobby-varrock.html (Varrock VR recreation)
├── papers.html (Publications)
└── about.html (About Me)
```

## Page Inventory

| File | Route | Title | Purpose | Status |
|------|-------|-------|---------|--------|
| `index.html` | `/` | Connor McCabe \| VR Researcher | Landing page with hero section (photo, role, intro) and 3 featured work cards | **Complete** |
| `projects.html` | `/projects` | Projects \| Connor McCabe | Lists all 3 research projects as large horizontal cards | **Complete** |
| `project-sensory-room.html` | `/project-sensory-room` | VR Sensory Room Co-design \| Connor McCabe | Detailed case study: co-designed VR sensory room with autistic adults, 3 version iterations, 13-image gallery | **Complete** |
| `project-standalone-sensory.html` | `/project-standalone-sensory` | Standalone VR Sensory Room \| Connor McCabe | Meta Quest 3 port of the sensory room prototype | **Incomplete** — gallery has only a placeholder image ("Screenshots coming soon") |
| `project-deescalation.html` | `/project-deescalation` | VR De-escalation Training \| Connor McCabe | VR-based de-escalation training simulator for care professionals | **Complete** (minimal — only 2 images) |
| `project-1.html` | `/project-1` | Project One \| Connor McCabe | Generic project template with placeholder content throughout | **Template/Unused** — entirely placeholder, not linked from nav or projects page |
| `hobby.html` | `/hobby` | Hobby Projects \| Connor McCabe | Lists 3 hobby VR environment projects | **Incomplete** — all 3 cards use gradient placeholder backgrounds instead of images |
| `hobby-helms-deep.html` | `/hobby-helms-deep` | Helm's Deep \| Connor McCabe | LOTR fortress VR recreation detail page | **Stub** — placeholder gallery and placeholder "About" text |
| `hobby-hall-of-kings.html` | `/hobby-hall-of-kings` | Hall of Kings \| Connor McCabe | LOTR hall VR recreation detail page | **Stub** — placeholder gallery and placeholder "About" text |
| `hobby-varrock.html` | `/hobby-varrock` | Varrock \| Connor McCabe | RuneScape Varrock VR recreation detail page | **Stub** — placeholder gallery and placeholder "About" text |
| `papers.html` | `/papers` | Papers \| Connor McCabe | Lists 2 publications with year, authors, journal, citation count | **Complete** (but has placeholder links) |
| `about.html` | `/about` | About \| Connor McCabe | Bio, skills grid (3 categories), contact info | **Incomplete** — placeholder email and Google Scholar URL |

## Navigation Links

All pages use the same sidebar navigation with 5 links:
- Home → `index.html`
- Projects → `projects.html`
- Hobby Projects → `hobby.html`
- Papers → `papers.html`
- About → `about.html`

Footer link: YouTube → `https://youtube.com/@CMVR`

## Navigation Inconsistencies

| Issue | Pages Affected |
|-------|----------------|
| **Missing "Hobby Projects" nav link** | `project-1.html` has only 4 nav items (no "Hobby Projects" link) — all other pages have 5 |
| **Broken next-project link** | `project-1.html` links to `project-2.html` which does not exist |
| **Orphan page** | `project-1.html` is not linked from any other page — it's a leftover template |
| **Home page featured work links to papers anchor** | `index.html` links the 3rd card to `papers.html#sensory-preferences` — this works but goes to a different page type (paper, not project) |

## External Links

| Destination | Used On |
|-------------|---------|
| YouTube (@CMVR) | Every page (sidebar footer) |
| Google Scholar (`YOUR_ID` placeholder) | `about.html`, `papers.html` |
| Email (`your.email@example.com` placeholder) | `about.html` |
| Paper "View Paper" links (`#` placeholder) | `papers.html` (both papers) |
