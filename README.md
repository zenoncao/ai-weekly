# AI Weekly Blog

[中文](README.zh.md)

An AI weekly static site built with Astro, curating frontier AI research, engineering, product, and organizational workflow articles.

Website: https://fuquay-varina-seven.vercel.app

Issue 001: https://fuquay-varina-seven.vercel.app/issues/2026-06-09/

## What This Is

This repository is not a generic link dump. It is an editorial AI weekly archive with source-heavy curation and explicit judgment. Each issue separates:

- `summary`: facts, dates, product updates, data, and claims from the original source.
- `why`: the editorial reason the article is worth reading.
- `factOpinionInference`: a clear boundary between source facts, editorial opinion, and inference.

## Stack

- Astro 5
- TypeScript
- Static site generation
- Vercel deployment

## Project Structure

```text
src/
  data/
    issues.ts              # Issue data, newest first
  pages/
    index.astro            # Home page for the latest issue and archive
    issues/[slug].astro    # Generated issue detail pages
  styles/
    global.css             # Global styles
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Adding a New Issue

All issue content lives in `src/data/issues.ts`. Add a new issue object to the top of the `issues` array; `latestIssue` automatically resolves to `issues[0]`.

Each issue should include:

- `slug`: a stable route, usually an ISO date such as `2026-06-09`.
- `date`: publication date.
- `range`: covered date range.
- `deck`: the main editorial thesis for the issue.
- `editorial`: the opening editorial note.
- `articles`: curated article entries.

Each article should include:

- title, source, author/team, date, and URL.
- category, tags, signal strength, and confidence.
- summary, recommendation rationale, target audience, and fact/opinion/inference separation.

Content rules:

- Do not invent publication dates, authors, URLs, numbers, quotes, or product names.
- Verify current, recent, or unstable information before adding it.
- Keep facts in `summary`, editorial judgment in `why`, and source/inference separation in `factOpinionInference`.
- Keep `issues` ordered newest first, and append new dated issues instead of replacing history.

## Deployment

The site is deployed on Vercel:

https://fuquay-varina-seven.vercel.app

Common production deployment command:

```bash
npx vercel@latest deploy --prod
```

The local `.vercel/` directory stores Vercel project binding metadata and should not be committed.
