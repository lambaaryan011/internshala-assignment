# Internshala Clone — IS Search Page Assignment

A Next.js 14 replica of Internshala's internship search page, built for the SDE (Web) Internship assignment

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
├── app/                       
│   ├── layout.jsx              
│   ├── page.jsx                
│   └── page.module.css
│
├── components/                 
│   ├── Avatar/                 
│   │   ├── Avatar.jsx
│   │   └── Avatar.module.css
│   ├── Badge/                  
│   │   ├── Badge.jsx
│   │   └── Badge.module.css
│   ├── Tag/                    
│   │   ├── Tag.jsx
│   │   └── Tag.module.css
│   ├── Header/                 
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── SearchBar/             
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.module.css
│   ├── FilterSidebar/          
│   │   ├── FilterSidebar.jsx
│   │   └── FilterSidebar.module.css
│   ├── InternshipCard/         
│   │   ├── InternshipCard.jsx
│   │   └── InternshipCard.module.css
│   ├── InternshipList/        
│   │   ├── InternshipList.jsx
│   │   └── InternshipList.module.css
│   ├── DetailPanel/            
│   │   ├── DetailPanel.jsx
│   │   └── DetailPanel.module.css
│   └── EmptyState/            
│       ├── EmptyState.jsx
│       └── EmptyState.module.css
│
├── data/
│   └── internships.js         
│
├── hooks/
│   └── useInternshipFilters.js
│
├── constants/
│   └── filters.js              
│
└── styles/
    └── globals.css            
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


