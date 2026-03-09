# My Design System

A reusable component library built with **React**, **TypeScript**, **MUI (Material UI)**, and **Vite**. Components are documented and previewed using **Storybook**.

---

## 📦 Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| MUI (Material UI) | Base component library |
| Vite | Build tool & dev server |
| Storybook | Component documentation & playground |
| Vitest + Playwright | Unit & browser testing |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-design-system

# Install dependencies
npm install
```

---

## 🖥️ Running the Project

### Development Server

Starts the Vite dev server for the main app at `http://localhost:5173`:

```bash
npm run dev
```

### Storybook

Launches the Storybook component explorer at `http://localhost:6006`:

```bash
npm run storybook
```

> Use Storybook to browse, interact with, and test all components in isolation.

---

## 🏗️ Building

### Build the App

```bash
npm run build
```

### Build Storybook (Static)

Generates a static Storybook site to the `storybook-static/` folder:

```bash
npm run build-storybook
```

### Preview the Production Build

```bash
npm run preview
```

---

## 🧪 Linting

```bash
npm run lint
```

---




## 📖 Available Components

| Component | Description |
|---|---|
| `Button` | Primary, secondary, and icon button variants |
| `Input` | Text input with label and validation states |
| `Select` | Dropdown select component |
| `Checkbox` | Checkbox with label support |
| `RadioButton` | Radio group component |
| `Toggle` | On/off switch toggle |
| `Card` | Content container card |
| `Dialog` | Modal dialog component |
| `Accordion` | Expandable/collapsible section |
| `Snackbar` | Toast notification messages |
| `Skeleton` | Loading placeholder skeleton |
| `SideNav` | Side navigation menu |
| `Typography` | Heading and body text components |
| `Theme` | MUI theme customization |
| `TokenShowcase` | Visual display of design tokens |

---

## 📝 Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Build static Storybook |
| `npm run lint` | Run ESLint |
