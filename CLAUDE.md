# ZomBeatz docs and design

This repository holds the ZomBeatz Media design system (`design/`) and the guides website for every product (`site/`, VitePress).

- Follow `design/DESIGN.md` for anything visual or written: colors and spacing from `design/tokens.css`, the brand pattern for icons and logos, and the writing rules (plain words, no long dashes, few emojis, sentence case, menu paths as Settings > Data).
- Guide pages: one product per folder under `site/`; register new pages in that product's sidebar in `site/.vitepress/config.mts`. Structure: Overview, Getting started, task pages, Reference, Troubleshooting.
- Screenshots come from each product's demo data (never real data) and go in `site/public/img/<product>/`.
- Product code lives in its own repository (Zomello: github.com/ZomBeatz/Zomello). When a feature changes there, update its guide page here.
