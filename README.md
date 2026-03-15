# livo-landing

This repository is transitioning from a static HTML landing portal to a Docusaurus-based product site for
**Livo Player**.

## Current state

- The legacy static HTML site is still in the repo root (`index.html`, `en/`, `tr/`, `es/`, `zh/`).
- The new content system lives under `docusaurus/`.
- The target first release is `TR + EN` with:
  - landing page
  - docs
  - support
  - privacy
  - terms
  - blog

## New structure

- `docusaurus/src/pages`: landing page and standalone pages such as support, privacy and terms
- `docusaurus/docs`: product documentation
- `docusaurus/blog`: release notes and announcements
- `docusaurus/i18n/tr`: Turkish translations for docs, blog and pages
- `docusaurus/static`: logos, badges and public files such as `app-ads.txt`

## Development

1. Change into the new site directory:
   `cd docusaurus`
2. Install dependencies:
   `npm install`
3. Start the local server:
   `npm run start`
   This starts a single development endpoint at `http://localhost:3000`. English is served at `/` and Turkish is served at `/tr/`. Locale-specific dev processes are managed internally by the orchestrator and are not part of the public dev URL surface.
4. Build the production output:
   `npm run build`
5. Export the Docusaurus build to the repo-root `dist/` directory for `wrangler` or other static-host uploads:
   `npm run build:dist`

## Docker

- Development server:
  `docker compose up --build livo-docs-dev`
- Production preview:
  `docker compose --profile prod up --build livo-docs-prod`

Ports:

- `http://localhost:3000` for development
- `http://localhost:3001` for production preview

## Migration notes

- Existing support, privacy and terms content has been moved into MDX pages.
- Existing marketing copy has been reorganized into homepage, docs and blog content.
- Spanish and Chinese are intentionally deferred until the TR + EN structure settles.
- The old static site can remain in place until routing and deployment are switched.

## Notes

- Livo is informational only and does not provide IPTV streams, channels or subscriptions.
- Keep store-facing pages (`support`, `privacy`, `terms`, `app-ads.txt`) stable during migration.
