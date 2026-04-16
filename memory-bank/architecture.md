# Architecture

## Repo layout

- `docusaurus/`: active site application
- `docusaurus/src/pages/`: standalone pages and homepage
- `docusaurus/docs/`: documentation content
- `docusaurus/blog/`: release notes and announcements
- `docusaurus/i18n/tr/`: Turkish translations
- `docusaurus/static/`: public assets such as badges, logos, and `app-ads.txt`
- `deploy/`: deployment artifacts, mainly Docker Compose
- `scripts/`: deployment and helper scripts
- `legacy/`: older localized static HTML pages kept for migration support
- `shared/`: reusable assets from the earlier site implementation

## App stack

- Node.js 20
- Docusaurus 3
- React 18
- TypeScript

## Runtime model

- Local development is orchestrated from `docusaurus/scripts/dev-server.mjs`.
- English is served at `/`.
- Turkish is served at `/tr/`.
- Production serves the built Docusaurus output through `npm run serve` in a container.
- The homepage source of truth is `docusaurus/src/pages/index.tsx`; build scripts must not swap it with an alternate static renderer.

## Docker model

`Dockerfile` defines four stages:

- `base`: installs npm dependencies in `/app/docusaurus`
- `dev`: runs the development server
- `build`: produces the static Docusaurus build
- `prod`: copies source, build output, and dependencies, then serves the site on port `3000`

## Deployment model

- CI builds and pushes a multi-arch image to GHCR.
- Deploy step copies `deploy/docker-compose.yml` and `scripts/deploy.sh` to the VM.
- Remote deploy pulls the tagged image and restarts the Docker Compose stack.
- Compose service name is `livo-www`.
- Default public port mapping is `${HOST_PORT:-3002}:3000`.

## Important note

`deploy/README.md` contains older deployment notes that no longer fully match the current GitHub Actions flow.
Treat workflow files and `scripts/deploy.sh` as the source of truth.
