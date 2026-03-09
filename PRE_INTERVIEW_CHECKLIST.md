# Pre-Test Checklist – UI Coding Round

Use this to verify you’re ready and to prepare your explanations.

---

## 1.1 Software Setup

| Item | Status | Notes |
|------|--------|--------|
| IDE (VS Code, etc.) | ✅ | You’re set. |
| **Node.js ≥ 22.x** | ✅ | You have v22.22.0. |
| NPM / Yarn | ✅ | npm 10.9.4. |
| Git + account | ✅ | git 2.39.5, repo exists. |

**Before interview:** Run `node -v` and `git status` once to confirm.

---

## 1.2 Framework Familiarity (you’re covered)

| Area | Your stack |
|------|------------|
| **UI Framework** | React.js (with TypeScript, Vite) |
| **UI Library** | Material UI (MUI) |
| **Visualisation** | Chart.js (via react-chartjs-2) |
| **Testing** | Not in this repo; be ready to say you’re aware of Jest, React Testing Library, Cypress. |

---

## 1.3 Environment Preparation

| Task | Action |
|------|--------|
| Run frontend locally | `npm install` then `npm run dev` — confirm it works. |
| Linting | `npm run lint` — fix any errors before the interview. |
| **Scaffold from scratch** | They may ask you to create a new project to validate setup. **Practice:** `npm create vite@latest test-app -- --template react-ts` then `cd test-app && npm i && npm run dev`. Do this 1–2 times so you’re comfortable. |
| Browser | Use Chrome/Firefox/Brave; if they give an API, test a sample request in browser or Postman. |
| Performance | Restart laptop before the interview; close other apps. |

**Note:** Your project uses **Vite** (not Create React App). If they say “create-react-app,” you can say: “I use Vite for this project for faster dev/build; I can scaffold with `npm create vite` or CRA depending on what you prefer.”

---

## 1.4 Problem Understanding – What to Explain

Be ready to explain in 1–2 minutes each:

### Component hierarchy and reusability

- **App** → `BrowserRouter`, global **Navbar**, and **Routes** (Landing + Details).
- **Landing:** `LandingPage` → `MapContainer` (map + markers + tooltips) + overlay with city **cards**. Each card uses **MetricLineChart** (reusable for any metric).
- **Details:** `DetailsPage` → **Sidebar** (stack list, expand/collapse) + main content: header, **LineChart**, and **Table**. Data comes from URL `id` and selected stack.
- **Reusability:** `MetricLineChart` and `LineChart` take data + config; `CityMarker` and chart configs are structured so they can be reused for new cities/metrics.

### State management strategy

- **No Redux/Context** in this app — local state and URL are enough.
- **URL as source of truth for “which city”:** `useParams()` for `/city/:id`; read `id` and use it to pick mock data.
- **Local state:** `useState` in `DetailsPage` for `selectedStack` and `sidebarExpanded`; in `LineChart` for which series are toggled (consumption, AI, final, etc.).
- **Navigation:** `useNavigate()` for going to city details or back.
- **No global state** — if they ask “why not Context/Redux?”: “The assignment had two main views and URL + component state were sufficient; I’d add Context or Redux if we had shared user preferences or many screens sharing the same data.”

### Styling and responsiveness

- **MUI:** `sx` prop and `Box`, `Typography`, `Table`, etc. for layout and theme (colors, spacing).
- **Responsiveness:** Layout uses flexbox and overflow (e.g. horizontal scroll for city cards on small screens). Map and sidebar use relative/fixed and viewport units where needed.
- **Consistency:** Centralised palette (e.g. teal/dark for dashboard, green/red for trends) and reuse of MUI components.
- **Charts:** Chart.js options for grid/legend/colors; minimal custom CSS (e.g. Leaflet tooltip in `MapContainer`).

### Clean code and best practices

- **Modular:** One main responsibility per file (e.g. `MapContainer`, `MetricLineChart`, `LineChart`).
- **Typed:** TypeScript interfaces for City, Metrics, StackChartData, etc., and props typed for components.
- **Readable:** Descriptive names, small functions, and comments where logic is non-obvious (e.g. map animation, chart data mapping).
- **Linting:** ESLint (and optionally Prettier) for consistency; run `npm run lint` before submitting or sharing screen.

---

## Quick “Scaffold from scratch” rehearsal (≈5 min)

In a folder outside your main project:

```bash
npm create vite@latest my-demo-app -- --template react-ts
cd my-demo-app
npm install
npm run dev
```

Confirm the app runs. Optionally add one component and one route so you’re comfortable with the flow.

---

## Day-of checklist

- [ ] Node ≥ 22, Git, IDE ready.
- [ ] `npm run dev` and `npm run lint` both pass in city-dashboard.
- [ ] Practiced creating a new Vite (or CRA) project at least once.
- [ ] Laptop restarted; other apps closed.
- [ ] BCG-X-Frontend assignment doc read; you can summarise problem, data, and expected solution.
- [ ] You can explain: component hierarchy, state management, styling/responsiveness, and why the code is modular and readable.

Good luck.
