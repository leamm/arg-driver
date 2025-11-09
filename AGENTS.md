# Repository Guidelines

## Project Structure & Module Organization
The app is a Vite + React + TypeScript project. All runtime code lives in `src/`, with shared UI under `src/components`, feature views in `src/pages`, hooks/utilities in `src/hooks` and `src/utils`, and localized data in `src/data`. Static assets (icons, manifest, HTML shell) sit under `public/`, while production builds land in `dist/` via Vite.

## Build, Test, and Development Commands
Use `npm run dev` for a hot-reloading local server, and `npm run preview` to inspect the already-built bundle. `npm run build` (or `npm run build:dev` when you need unminified artifacts) compiles the project, while `npm run lint` enforces ESLint rules. Deployments rely on `npm run predeploy && npm run deploy`, which publishes `dist/` through `gh-pages`.

## Coding Style & Naming Conventions
Write modern TypeScript with React function components, preferring hooks and `useState`/`useEffect` patterns already present in `src/pages/Statistics.tsx`. Keep files in PascalCase when exporting components, camelCase for functions/constants, and kebab-case for CSS utility classes (most styling is Tailwind). Run `npm run lint` before sending a PR; it uses `eslint@9` with React hooks and TypeScript plugins, so fix rule violations instead of disabling them. Keep comments short and purposeful; JSX should remain self-explanatory.

## Testing Guidelines
There is no automated suite yet—add targeted coverage when you touch logic-heavy utilities (e.g., `src/utils/statistics.ts`). Prefer Vitest + React Testing Library to stay close to Vite defaults; name specs `<Component>.test.tsx` or `<util>.test.ts`. For statistics code, table-driven tests that cover edge cases (empty storage, malformed entries) are valued. Document manual verification steps in your PR when UI changes are hard to automate.

## Commit & Pull Request Guidelines
Recent history shows a lightweight Conventional Commit pattern (`feat`, `fix(scope)`). Follow that format so changelog generation stays simple: `type(optional-scope): short imperative message`. Each PR should summarize the change, list verification commands (`npm run build`, screenshots for UI), and link issues or task IDs. Keep diffs focused; include before/after visuals when you alter components inside `src/pages` or `src/components`. Update relevant docs (including this file) whenever workflows change.

## Security & Configuration Tips
No server secrets live here; configuration is purely client-side. Local storage holds user statistics, so guard new utilities against `null`/`undefined` data and avoid introducing personally identifiable info. When adding third-party packages, prefer audited dependencies already in use (Radix UI, shadcn) and run `npm audit` before merge.
