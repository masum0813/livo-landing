# Memory Bank

This folder is the durable project context for `livo-landing`.

Use it to recover state quickly before making changes.

## Files

- `project-overview.md`: product scope, current direction, constraints
- `architecture.md`: repo layout, runtime surfaces, build/deploy shape
- `workflows.md`: local development, Docker, release, deployment flow
- `decisions.md`: important technical decisions and why they were made
- `open-questions.md`: known gaps, cleanup items, and items to verify later

## Update rules

- Update `project-overview.md` when scope or release targets change.
- Update `architecture.md` when directories, services, or build boundaries change.
- Update `workflows.md` when commands, CI/CD, or runtime ports change.
- Append to `decisions.md` when a non-trivial technical decision is made.
- Remove items from `open-questions.md` when resolved.

## Current snapshot

- The project is moving from legacy static HTML pages to a Docusaurus-based product site.
- Active target languages are English and Turkish.
- Jekyll / GitHub Pages configuration has been removed from the repo.
- Production deployment is container-based and uses GHCR + Docker Compose on a VM.
