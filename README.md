# Jinyi Astro Homepage

Astro implementation of Jinyi Liu's personal homepage. This is a clean rebuild, not a HugoBlox theme fork.

## Structure

- `src/data/`: editable content data.
- `src/components/`: reusable page sections.
- `src/layouts/BaseLayout.astro`: HTML shell, metadata, header, footer.
- `src/pages/index.astro`: page composition.
- `src/styles/global.css`: visual system and responsive behavior.

## Commands

```bash
npm install
npm run dev
npm run build
```

Development server defaults to `http://127.0.0.1:4321/`.

Astro telemetry is disabled in the npm scripts so the project builds cleanly in sandboxed environments.

## Content Policy

The current content follows the confirmed public-facing constraints:

- No phone number.
- No CV download.
- No citation metric.
- No sensitive medical, military, or client collaboration details.
- First-screen metrics are limited to confirmed publication and CellAgent figures.
