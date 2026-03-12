# Decisions

## 2026-03-13

### Remove Jekyll / GitHub Pages support

Status: accepted

Reason:

- The active site is Docusaurus-based.
- Keeping Jekyll files created obsolete build paths and maintenance noise.

Impact:

- Removed `Gemfile`, `Gemfile.lock`, and `_config.yml`.
- GitHub Pages/Jekyll is no longer a supported build or deploy path for this repo.

### Keep legacy static content during migration

Status: accepted

Reason:

- Existing support and compliance pages must stay stable while Docusaurus migration finishes.
- Spanish and Chinese are deferred, not fully retired.

Impact:

- Legacy files remain in the repo until routing and deployment are fully switched.

### Use GHCR + Docker Compose deployment

Status: accepted

Reason:

- Simpler operating model for a personal VM than maintaining a separate registry/deploy system.
- Works with multi-arch images and existing GitHub Actions automation.

Impact:

- Release deploys are tied to Git tags.
- Runtime configuration is driven by `IMAGE_NAME`, `IMAGE_TAG`, and `HOST_PORT`.

### Default `BUILDPLATFORM` in Dockerfile

Status: accepted

Reason:

- Some build paths parse `FROM --platform=$BUILDPLATFORM` before Buildx injects the arg.

Impact:

- Dockerfile now defaults `BUILDPLATFORM` to `linux/amd64` to avoid parse-time failure.
