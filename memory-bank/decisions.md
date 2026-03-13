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

### Localize SEO landing pages from one source

Status: accepted

Reason:

- English-only SEO page files caused drift and extra manual work for Turkish routes.
- Marketing landing pages need EN/TR parity without maintaining separate implementations per route.

Impact:

- SEO landing pages now use a shared locale-aware component and a single EN/TR content map.
- `/tr/...` versions are produced automatically from the same page key.
- New SEO landing pages should be added through the shared localized content structure, not as standalone English-only MDX files.

### Keep sitemap aligned with page routes

Status: accepted

Reason:

- Marketing and SEO pages need to be discoverable immediately after they are added.
- Missing sitemap entries create avoidable indexing lag and inconsistent SEO checks.

Impact:

- Docusaurus sitemap generation is the source of truth for page URLs.
- Any page add/remove/change under `src/pages` must be followed by a build check that confirms `sitemap.xml` includes or removes the route as expected.
- EN and TR routes should both be verified for localized SEO landing pages.
