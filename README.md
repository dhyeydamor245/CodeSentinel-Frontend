# CodeSentinel Frontend (React + Vite)

CodeSentinel is an AI-powered software project auditor and security analysis platform. This frontend has been converted from Next.js to a high-performance **React SPA (Single Page Application)** using **Vite**, **React Router**, and **Tailwind CSS v4**.

## Features

- **Home / Landing Page (`/`)**: Hero section, interactive project preview, feature showcase, workflow steps, security overview, and call-to-actions.
- **Authentication (`/login`)**: Secure sign-in screen with password visibility toggle, remember-me support, and security badge metrics.
- **Dashboard (`/dashboard`)**: Security health score, 30-day interactive SVG trend charts, posture breakdown, open findings, and recent analyses.
- **Repositories (`/repositories`)**: Manage connected projects, search & branch filters, health badges, and "Connect repository" modal with GitHub integration.
- **Live Analysis (`/analysis`)**: Real-time multi-stage pipeline (Repository Scan, Static Analysis, AI Engineering Review, Architecture Analysis), AI agents status, pause/resume simulation, and live console logs.
- **Findings (`/findings`)**: Security vulnerabilities and code issues with severity categorization (Critical, High, Medium, Low), rule filters, affected code snippets with copy button, and remediation guidance.
- **Reports (`/reports`)**: Executive summaries, SVG score ring, risk distribution graphs, duration metrics, and historical audit logs.
- **Settings (`/settings`)**: Profile settings, API keys management with copy feature, and alert preferences.

## Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Geist](https://vercel.com/font) via Google Fonts

## Getting Started

### Development

Run the Vite development server:

```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Production Build

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
