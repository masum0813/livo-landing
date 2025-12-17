# livo-landing

This repository hosts the marketing, support and policy landing portal for the **Livo IPTV** experience. The single-page gateway at `index.html` links to localized sets of static HTML pages in English, Turkish, Spanish and Simplified Chinese so visitors can quickly jump to the right documentation.

## Structure
- `index.html`: language selector landing page
- `en/`, `tr/`, `es/`, `zh/`: localized marketing/support/privacy/terms pages with their own sub-navigation
- `_config.yml`, `Gemfile`: minimal Jekyll scaffolding used by the GitHub Pages build
- `livo-logo.png` and shared assets referenced by the landing page

## Development
1. Install dependencies: `bundle install`
2. Run the local site: `bundle exec jekyll serve --incremental`
3. Open `http://127.0.0.1:4000` to preview the portal

Changes are static, so updates typically mean authoring or tweaking HTML/CSS inside a localized folder, then pushing the commit for CI or GitHub Pages to publish.

## Notes
- The portal is informational only and does not provide any IPTV streams or access codes.
- Keep localized content synchronized across `en`, `tr`, `es`, and `zh`.
