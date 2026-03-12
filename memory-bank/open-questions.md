# Open Questions

## Deployment docs drift

- `deploy/README.md` still describes an older image-transfer flow.
- It also references a port mapping that does not match the current compose file.
- This should be reconciled so docs match `.github/workflows/deploy.yml` and `scripts/deploy.sh`.

## Legacy cleanup boundary

- Root-level legacy entry points still exist.
- Decide when `index.html` and legacy localized pages can be removed or redirected.

## Verification gaps

- Docker build validation was blocked locally when the Docker daemon was unavailable.
- If container behavior changes again, rerun an actual `docker buildx build` with a live daemon.
