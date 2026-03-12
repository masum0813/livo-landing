# Project Overview

## Purpose

`livo-landing` is the marketing, support, and policy website for **Livo Player**.

The site is informational only. It must not imply that the product provides IPTV streams,
channels, or subscriptions.

## Current product direction

- Replace the older static landing portal with a Docusaurus-based site.
- Keep store-facing pages stable:
  - support
  - privacy policy
  - terms
  - `app-ads.txt`
- Focus current rollout on `EN + TR`.
- Keep Spanish and Chinese legacy content in the repo until migration and routing are settled.

## Active content surfaces

- Landing page
- Product docs
- Blog / release notes
- Support page
- Privacy policy
- Terms

## Constraints

- Repo contains both the new Docusaurus app and legacy static assets.
- Store/compliance pages should avoid URL churn during migration.
- Docker deployment should stay simple enough to run on a personal VM.

## Current state summary

- Docusaurus is the primary active site implementation under `docusaurus/`.
- Legacy static HTML content still exists in the repo root and `legacy/`.
- Jekyll / GitHub Pages files were intentionally removed.
