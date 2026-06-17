# Content Audit

## Summary

| Status | Count | Pages |
|--------|-------|-------|
| Complete | 4 | `index.html`, `projects.html`, `project-sensory-room.html`, `project-deescalation.html` |
| Incomplete | 3 | `about.html`, `papers.html`, `project-standalone-sensory.html` |
| Stub | 3 | `hobby-helms-deep.html`, `hobby-hall-of-kings.html`, `hobby-varrock.html` |
| Placeholder/Unused | 1 | `project-1.html` |
| Missing images | 1 | `hobby.html` (listing page, all 3 cards) |

---

## Placeholder & Incomplete Content

### `project-1.html` — TEMPLATE, SHOULD BE REMOVED OR HIDDEN

This is an entirely placeholder project page that appears to be a development template:
- Title: "Project One"
- Subtitle: "A brief tagline describing what this project explores in VR"
- All body text is instructional ("This is where you'd write...")
- Gallery: 6 placeholder gradient divs labeled "Image 1" through "Image 6"
- Video section: empty placeholder ("Replace this with your iframe embed code")
- Links to non-existent `project-2.html`
- **Not linked from any navigation or listing page** but is publicly accessible

### `about.html` — PLACEHOLDER CONTACT INFO

- Email: `your.email@example.com` (line 86-89) — still default placeholder
- Google Scholar: URL contains `YOUR_ID` (line 94) — still default placeholder
- University inconsistency: hero card on home page says "University of Adelaide" but about page says "University of South Australia" — these are different universities

### `papers.html` — PLACEHOLDER LINKS

- Both "View Paper →" links point to `#` (lines 44, 58) — no actual URLs
- Google Scholar link in footer contains `YOUR_ID` placeholder (line 65)
- Only 2 papers listed — may be complete if these are the only publications, but looks thin

### `project-standalone-sensory.html` — INCOMPLETE GALLERY

- Gallery section has a single placeholder div: "Screenshots coming soon" (lines 53-59)
- Status section says "currently in development" — may be intentionally sparse
- No video or detailed technical content

### `hobby.html` — MISSING IMAGES

- All 3 project cards use inline gradient backgrounds with `placeholder-text` spans instead of actual images (lines 37-67)
- The inline `style` attributes with `color: rgba(255,255,255,0.5)` suggest these are temporary

### `hobby-helms-deep.html` — STUB

- Single placeholder gallery item with "Add images" text
- "About This Project" section: "Add details about the project here — what inspired it, how you built it, technical challenges, etc."
- Only 1 paragraph of actual intro content

### `hobby-hall-of-kings.html` — STUB

- Identical structure and placeholder text as Helm's Deep
- Single placeholder gallery item with "Add images" text
- "About This Project" section is boilerplate

### `hobby-varrock.html` — STUB

- Identical structure and placeholder text as the other two hobby pages
- Single placeholder gallery item with "Add images" text
- "About This Project" section is boilerplate

---

## Content Inconsistencies

| Issue | Location | Details |
|-------|----------|---------|
| **University name mismatch** | `index.html` vs `about.html` | Home says "University of Adelaide"; About says "University of South Australia" — these are different institutions |
| **Role title mismatch** | `index.html` vs `about.html` | Home says "PhD Researcher"; About says "PhD Candidate" |
| **Placeholder email** | `about.html:86` | `your.email@example.com` |
| **Placeholder Scholar ID** | `about.html:94`, `papers.html:65` | `YOUR_ID` in Google Scholar URL |
| **Dead paper links** | `papers.html:44,58` | Both "View Paper →" link to `#` |
| **Dead project link** | `project-1.html:118` | Links to non-existent `project-2.html` |
| **Orphan page** | `project-1.html` | Not referenced anywhere, entirely placeholder |
| **Missing hobby images** | `hobby.html` + all 3 detail pages | No real images anywhere in the hobby section |

---

## Thin Content Assessment

### Pages with substantive content
- **`project-sensory-room.html`**: Rich — 3 design iterations, 13 gallery images, feature lists, technical details, related publication link. This is the strongest page.
- **`project-deescalation.html`**: Adequate — clear description, 2 screenshots, feature list, technical explanation, publication link.
- **`index.html`**: Good — compelling hero, 3 featured work cards with descriptions.
- **`projects.html`**: Good — 3 projects with images and descriptions.

### Pages that need more content
- **`project-standalone-sensory.html`**: Has good text but no visuals. Adding screenshots would complete it.
- **`papers.html`**: Only 2 papers. Functional but sparse. The missing links make it feel unfinished.
- **`about.html`**: Good structure but the placeholder contact info undermines credibility.
- **All 3 hobby detail pages**: These are essentially blank shells. Each needs images, project descriptions, and technical details to be worth visiting.
- **`hobby.html`**: The listing works structurally but needs real thumbnail images.

---

## Recommendations (Priority Order)

1. **Remove or gitignore `project-1.html`** — it's a publicly accessible template with no real content
2. **Fix the university name** — decide whether it's University of Adelaide or University of South Australia
3. **Fix the role title** — decide whether it's "PhD Researcher" or "PhD Candidate"
4. **Replace placeholder contact info** in `about.html` with real email and Google Scholar ID
5. **Add real URLs** to the "View Paper →" links in `papers.html`
6. **Add images** to `hobby.html` listing cards and all 3 hobby detail pages
7. **Write real content** for the 3 hobby detail pages (even a short paragraph each)
8. **Add screenshots** to `project-standalone-sensory.html` when available
9. **Standardize cache-busting** — either add `?v=` to all CSS links or remove it from all
