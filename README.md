# 🏋️ FitLog — Workout Library

FitLog is a responsive, dark-themed workout library and workout planning web application built with Next.js. It helps users explore exercises, view detailed workout information, add exercises to today's plan, save workouts for later, and track completed exercises.

The project is designed with a clean, bold gym-focused interface inspired by a modern Figma design.

---

## ✨ Features

### 1. 🏠 Workout Library
- Browse all available workouts from the exercise API.
- Responsive workout card grid.
- Workout cards include:
  - Workout image/illustration
  - Muscle/category tags
  - Workout name
  - Equipment
  - Duration
  - Calories
  - Rating
- Click any workout to view its detailed page.

### 2. 📋 Today's Workout Plan
- Add workouts to today's plan.
- Maximum of **5 workouts** can be added to today's plan.
- Plan counter updates automatically in the navbar.
- Track total:
  - Exercises
  - Minutes
  - Calories
- Remove workouts from the plan.
- Mark workouts as completed.
- View workout details directly from the plan.

### 3. 🔖 Saved Workouts
- Save workouts for later.
- Saved counter updates automatically.
- View all saved workouts from the **My Plan** page.
- Remove saved workouts when no longer needed.

### 4. 🔎 Search & Sort
- Search workouts by name or category/tag.
- Sort workouts by:
  - Duration
  - Calories
  - Rating
- Sort dropdown updates the current workout list dynamically.

### 5. 💾 Persistent Local Storage
- Today's Plan data is stored in `localStorage`.
- Saved workouts are stored in `localStorage`.
- Workout data remains available after refreshing the browser.

### 6. 🔔 Toast Notifications
Users receive relevant notifications when they:
- Add a workout to today's plan
- Save a workout
- Remove a workout
- Mark a workout as done

### 7. 📱 Fully Responsive
The application is optimized for:
- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

The layout adapts automatically with responsive navigation, stacked hero sections, and responsive workout grids.

### 8. ❌ Custom 404 Page
A dedicated 404 page is displayed when users visit an invalid or unknown route.

### 9. ⚡ Loading States
Loading animations/messages are displayed while workout data is being fetched so users receive visual feedback before the content loads.

### 10. 🧭 Client-Side Navigation
Built with the Next.js App Router for fast navigation between:
- Workout Library
- Workout Details
- My Plan
- 404 Page

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js** | React framework and application structure |
| **React** | Building reusable UI components |
| **App Router** | Page routing and navigation |
| **Tailwind CSS** | Styling and responsive layouts |
| **JavaScript / JSX** | Application logic and UI development |
| **LocalStorage** | Persisting plan and saved workout data |
| **REST API** | Fetching workout/exercise data |
| **Vercel** | Deployment |

---

## 📂 Main Pages

### `/`
Workout Library home page containing:

- Navbar
- Hero/banner
- Workout library
- Search/sort controls
- Workout cards
- Footer

### `/workout/[id]`
Workout details page containing:

- Workout image
- Workout title
- Description
- Categories
- Key specifications
- Instructions
- Add to Today's Plan button
- Save for Later button

### `/my-plan`
Workout planning page containing:

- Plan metrics
- Today's Plan tab
- Saved tab
- Workout list
- Mark as Done action
- Remove action
- View Details action
- Empty state

### `404`
Custom page for unknown routes.

---

## 🎨 UI Highlights

FitLog follows a bold, dark visual style designed for a modern gym/workout experience.

### Navbar
- FitLog logo
- Workout navigation
- My Plan navigation
- Plan counter badge
- Saved counter badge

### Hero
- `WORKOUT LIBRARY` eyebrow
- `TRAIN WITH INTENT. LOG EVERY SET.` heading
- Workout library description
- Browse Workouts CTA
- Hero image

### Workout Cards
Each card displays:

```text
CATEGORY
WORKOUT NAME
Equipment

⏱ Duration   🔥 Calories   ★ Rating
```

### My Plan Metrics

```text
Exercises     Minutes     Calories
```

These values update automatically as workouts are added or removed.

---

## 📊 Today's Plan Rules

The Today's Plan has a maximum capacity of **5 exercises**.

When the plan reaches five workouts:

- The **Add to today's plan** button becomes disabled.
- Users can remove an existing workout before adding another one.

This keeps the daily workout plan focused and manageable.

---

## 💾 Data Persistence

FitLog uses browser `localStorage` to persist user selections.

Stored information includes:

- Today's Plan
- Saved Workouts
- Completed workout status

This allows the user's workout selections to survive page reloads.

> Note: Because the application uses browser localStorage, the data is stored locally on the user's device/browser and is not synchronized between different devices.

---

## 📱 Responsive Design

The application supports multiple screen sizes.

### Desktop
- 3-column workout grid
- Two-column workout details layout
- Full navigation layout

### Tablet
- Responsive workout grid
- Flexible hero layout
- Adapted navigation and spacing

### Mobile
- Single-column workout cards
- Stacked hero section
- Mobile-friendly navigation
- Full-width action buttons
- Responsive workout details

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/fitlog.git
```

### 2. Enter the project directory

```bash
cd fitlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Before deployment, make sure the production build completes without errors.

---

## 🌐 Deployment

The project can be deployed using platforms such as:

- Vercel
- Netlify
- Cloudflare Pages

For Vercel, connect the GitHub repository and deploy the Next.js application.

### SPA/Route Reload Consideration

The application uses the Next.js App Router. Dynamic routes and unknown routes should be handled through Next.js routing so refreshing pages such as:

```text
/workout/1
/my-plan
```

does not result in a client-side routing error after deployment.

---

## 📁 Suggested Project Structure

```text
fitlog/
├── app/
│   ├── page.jsx
│   ├── my-plan/
│   │   └── page.jsx
│   ├── workout/
│   │   └── [id]/
│   │       └── page.jsx
│   ├── not-found.jsx
│   ├── layout.jsx
│   └── globals.css
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── WorkoutCard.jsx
│   ├── WorkoutGrid.jsx
│   ├── WorkoutDetails.jsx
│   ├── PlanCard.jsx
│   ├── Metrics.jsx
│   ├── SearchBar.jsx
│   └── SortDropdown.jsx
│
├── public/
│   └── images/
│
├── lib/
│   ├── api.js
│   └── storage.js
│
├── README.md
├── package.json
├── tailwind.config.js
└── next.config.js
```

---

## 🔄 User Flow

```text
Home
  │
  ├── Browse Workouts
  │       │
  │       └── Workout Details
  │              │
  │              ├── Add to Today's Plan
  │              │
  │              └── Save for Later
  │
  └── My Plan
          │
          ├── Today's Plan
          │     ├── View Details
          │     ├── Mark as Done
          │     └── Remove
          │
          └── Saved
                └── View Details
```

---

## 🧪 Recommended Git Commit History

The project should contain at least **8 meaningful commits**. For example:

```text
feat: create responsive navbar and navigation
feat: add workout library card component
feat: add home page hero section
feat: implement workout details page
feat: add today's plan functionality
feat: add saved workouts and local storage
feat: add search and workout sorting
feat: add mark as done and remove actions
feat: add responsive mobile and tablet layouts
docs: add project README
```

Keep commits focused and descriptive so the development history clearly shows the project's progress.

---

## ✅ Requirements Checklist

- [x] Responsive mobile, tablet, and desktop layout
- [x] Navbar with Workout and My Plan navigation
- [x] Plan and Saved counters
- [x] Hero/banner section
- [x] Workout library
- [x] Responsive workout grid
- [x] Workout details page
- [x] Add to Today's Plan
- [x] Save for Later
- [x] My Plan page
- [x] Today's Plan / Saved tabs
- [x] Plan metrics
- [x] Loading state
- [x] Empty state
- [x] Mark as Done
- [x] Remove workout
- [x] Toast notifications
- [x] Search
- [x] Sort by Duration, Calories, Rating
- [x] Five-workout plan limit
- [x] localStorage persistence
- [x] Responsive footer
- [x] Custom 404 page
- [x] Production-ready routing
- [x] Git history with meaningful commits
- [x] README documentation

---

## 📄 License

This project was created for educational and portfolio purposes.

---

## 👨‍💻 Author

**Your Name**

GitHub: `https://github.com/YOUR_USERNAME`

---

### 🏋️ FitLog

**Train with intent. Log every set.**