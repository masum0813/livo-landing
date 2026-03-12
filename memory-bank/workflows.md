# Workflows

## Local development

From `docusaurus/`:

```bash
npm install
npm run start
```

Important scripts from `docusaurus/package.json`:

- `npm run start`: clears generated files and starts the orchestrated dev server
- `npm run start:single`: starts a single Docusaurus instance
- `npm run build`: creates the production build
- `npm run serve`: serves the built site
- `npm run typecheck`: runs TypeScript checks

## Docker

Build context is the repo root.

- `Dockerfile` uses `ARG BUILDPLATFORM=linux/amd64` as a safe default
- Production container listens on port `3000`
- Compose publishes `${HOST_PORT:-3002}` to container port `3000`

## Release flow

GitHub Actions release workflow is in `.github/workflows/deploy.yml`.

Trigger:

- Push a tag matching `v*`

Build job:

- checks out the repo
- sets up Node 20
- logs into GHCR
- sets up QEMU + Buildx
- builds and pushes a multi-arch `prod` image for `linux/amd64` and `linux/arm64`

Deploy job:

- copies `deploy/docker-compose.yml` and `scripts/deploy.sh` to the VM
- optionally logs into GHCR on the VM using `GHCR_USER` and `GHCR_PAT`
- runs `deploy.sh` with the resolved image name and tag

## Remote deploy script

`scripts/deploy.sh`:

- updates or creates `.env` unless `SKIP_ENV_FILE=1`
- pulls the requested image tag
- runs `docker compose up -d --remove-orphans`

Inputs:

- `IMAGE_NAME`
- `IMAGE_TAG`
- optional `APP_DIR`
- optional `HOST_PORT`

## Operational checks

Before changing deployment behavior, verify:

- `.github/workflows/deploy.yml`
- `deploy/docker-compose.yml`
- `scripts/deploy.sh`
- actual VM expectations in `deploy/README.md`
