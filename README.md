# Internshala Clone — IS Search Page Assignment

A Next.js 14 replica of Internshala's internship search page, built for the SDE (Web) Internship assignment.

## Live Demo
> Add your Vercel URL here after deployment

## GitHub
> Add your GitHub repo link here

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## Folder Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.jsx              # Root HTML layout
│   ├── page.jsx                # Main search page (entry point)
│   └── page.module.css
│
├── components/                 # One folder per component
│   ├── Avatar/                 # Company initials avatar
│   │   ├── Avatar.jsx
│   │   └── Avatar.module.css
│   ├── Badge/                  # Coloured label pill (Remote, International)
│   │   ├── Badge.jsx
│   │   └── Badge.module.css
│   ├── Tag/                    # Metadata chip (location, duration, stipend)
│   │   ├── Tag.jsx
│   │   └── Tag.module.css
│   ├── Header/                 # Top navigation bar
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── SearchBar/              # Text search input
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.module.css
│   ├── FilterSidebar/          # All 4 filter controls
│   │   ├── FilterSidebar.jsx
│   │   └── FilterSidebar.module.css
│   ├── InternshipCard/         # Single internship list item
│   │   ├── InternshipCard.jsx
│   │   └── InternshipCard.module.css
│   ├── InternshipList/         # Scrollable list of cards
│   │   ├── InternshipList.jsx
│   │   └── InternshipList.module.css
│   ├── DetailPanel/            # Right-hand detail view
│   │   ├── DetailPanel.jsx
│   │   └── DetailPanel.module.css
│   └── EmptyState/             # Shown when no results match
│       ├── EmptyState.jsx
│       └── EmptyState.module.css
│
├── data/
│   └── internships.js          # Static dataset from Internshala API
│
├── hooks/
│   └── useInternshipFilters.js # All filter state + logic (custom hook)
│
├── constants/
│   └── filters.js              # Stipend ranges and filter key names
│
└── styles/
    └── globals.css             # Reset, layout helpers, base typography
```

---

## Features

| Feature | Details |
|---------|---------|
| **Profile filter** | Multi-select checkboxes |
| **Location filter** | Multi-select checkboxes |
| **Duration filter** | Multi-select checkboxes |
| **Stipend filter** | Radio button ranges |
| **Work from home** | Toggle switch |
| **Text search** | Searches title, company, profile |
| **Detail panel** | Click any card to see full details |
| **Empty state** | Friendly message when no results |
| **Frontend-only** | All filtering done in `useMemo` — no extra API calls |

---

## Design Decisions

- **CSS Modules** — scoped styles per component, no global class collisions
- **Custom hook** (`useInternshipFilters`) — all filter state and `useMemo` logic extracted out of the page component so components stay clean
- **Controlled components** — every filter is a controlled input driven by state
- **Accessible** — `aria-pressed`, `aria-expanded`, `role="switch"`, `aria-label` on interactive elements

---

## Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js and deploys in ~60 seconds.
