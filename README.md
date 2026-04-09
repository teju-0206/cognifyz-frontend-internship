# TaskSphere — Progressive Productivity Dashboard

A frontend development project built during my virtual internship at **Cognifyz Technologies**.

TaskSphere is a productivity dashboard I developed from scratch across 8 tasks and 4 levels. What made this project different is that it never stayed the same — every task added something new to it. What started as a plain HTML page grew into a fully interactive, multi-section dashboard with live API data, form validation, Bootstrap components and Sass architecture.

**Live Demo:** https://teju-0206.github.io/cognifyz-frontend-internship/
---

## Project Structure

```
cognifyz-frontend-internship/
├── Level-1/
│   ├── Task-1/        ← Basic HTML page
│   └── Task-2/        ← Inline CSS styling
├── Level-2/
│   ├── Task-3/        ← Responsive design with media queries
│   └── Task-4/        ← Interactive JS dashboard
├── Level-3/
│   ├── Task-5/        ← API integration (ZenQuotes)
│   └── Task-6/        ← Form styling & validation
├── Level-4/
│   ├── Task-7/        ← Bootstrap 5 component system
│   └── Task-8/        ← Sass preprocessing (final version)
└── README.md
```

---

## Levels & Tasks

### Level 1 — Beginner
**Task 1 — Basic HTML Page**
Built the foundational HTML structure for TaskSphere using semantic elements — headings, paragraphs, an image and a footer.

**Task 2 — Inline CSS Styling**
Applied inline CSS across elements to give the page its first visual identity. Experimented with font colors, sizes and background colors.

---

### Level 2 — Intermediate
**Task 3 — Responsive Design**
Moved styles into a separate CSS file and implemented media queries for tablet and mobile breakpoints. The layout adapts cleanly across all screen sizes.

**Task 4 — JavaScript Interactivity**
Added full JavaScript-powered interactivity — dark mode toggle, background color cycling, and sidebar navigation switching between sections. Each section (Tasks, Goals, Stats, Settings) has real, working content:
- Tasks: add/complete flow with priority indicators
- Goals: progress bars and rotating tip of the day
- Stats: weekly activity bar chart and focus hours grid
- Settings: color swatches, font size control and profile fields

---

### Level 3 — Advanced
**Task 5 — API Integration**
Connected TaskSphere to the ZenQuotes API to power a live Motivation Feed. Uses `fetch()` to pull real quotes, parse JSON and render them dynamically. Features include category filtering, card/list display toggle, a spotlight quote section and a raw JSON preview panel. Includes 20 offline fallback quotes for when the API is unavailable.

**Task 6 — Form Styling & Validation**
Built a full task creation form with live client-side validation. Every field validates in real time — green border when correct, red with a specific error message when not. Includes a live preview card that updates as you type, a form checklist and a Bootstrap toast notification on successful submission.

---

### Level 4 — Expert
**Task 7 — Bootstrap 5 Component System**
Refactored the entire dashboard to use Bootstrap 5. Custom flexbox layout replaced with Bootstrap's responsive grid (row/col). Components used: cards, badges, list-groups, progress bars, form controls, form switches, Bootstrap JS Toast API and Bootstrap Icons.

**Task 8 — Sass Preprocessing (Final Version)**
Restructured the entire stylesheet into 5 modular Sass partials compiled through a single entry file:

```
scss/
├── styles.scss        ← Main entry point
├── _variables.scss    ← Design tokens: colors, fonts, spacing, shadows
├── _mixins.scss       ← Reusable mixins: flex, card, btn, input, breakpoints
├── _base.scss         ← Reset and global defaults
├── _layout.scss       ← Sidebar, wrapper, main content, responsive
└── _components.scss   ← Cards, buttons, inputs, tasks, stats, API, form
```

Compile with:
```bash
sass scss/styles.scss style.css
```

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic page structure |
| CSS3 | Styling, Flexbox, Media Queries |
| JavaScript (Vanilla) | DOM manipulation, API fetch, form validation |
| Bootstrap 5 | Grid system, UI components |
| Sass (SCSS) | CSS preprocessing, variables, mixins, partials |
| Git & GitHub | Version control and deployment |

---

## Features

- Multi-section sidebar dashboard (Tasks, Goals, Motivation, Add Task, Stats, Settings)
- Dark mode toggle
- Fully responsive across desktop, tablet and mobile
- Live API integration with ZenQuotes
- Offline fallback quotes
- Real-time form validation with live preview
- Bootstrap 5 component system
- Modular Sass architecture
  
---

## Internship Details

- **Organisation:** Cognifyz Technologies
- **Role:** Frontend Development Intern
- **Project:** TaskSphere — Progressive Productivity Dashboard
- **Tasks Completed:** 8/8
- **Levels:** Beginner → Intermediate → Advanced → Expert

---

*Built by Tejeswini Balachander | 2nd Year CSE Student*
