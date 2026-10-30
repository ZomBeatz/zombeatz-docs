<p align="center">
  <img src="design/brand/zombeatz/zombeatz-icon.svg" width="96" alt="ZomBeatz">
</p>

<h1 align="center">ZomBeatz docs and design</h1>

<p align="center">Guides for every ZomBeatz Media tool, and the shared look they all follow.</p>

## What's here

| Folder | What it is |
|---|---|
| [`design/`](design/) | The ZomBeatz design system: [`DESIGN.md`](design/DESIGN.md) (style and wording rules), [`github-readme.md`](design/github-readme.md) (the GitHub page), [`installers.md`](design/installers.md), [`licenses.md`](design/licenses.md), [`tokens.css`](design/tokens.css) and [`tokens.json`](design/tokens.json) (colors, type, spacing), and logos in [`design/brand/`](design/brand/) |
| [`site/`](site/) | The guides website (VitePress). One section per product: [`site/zomello/`](site/zomello/), [`site/harm/`](site/harm/) |

The site is published automatically to GitHub Pages on every push to `main`.

## Working on the guides

Needs Node.js 20 or newer.

```bash
npm install
npm run dev      # live preview at http://localhost:5173
npm run build    # the finished site in site/.vitepress/dist
```

Each product has a sidebar in [`site/.vitepress/config.mts`](site/.vitepress/config.mts). A new page is a Markdown file in the product's folder plus a line in its sidebar.

## Using the design system in a project

1. Copy `design/tokens.css` into the project (or link to it) and build the interface from its `--zb-*` variables.
2. Add this line to the project's `CLAUDE.md` so AI assistants follow it too:
   > Follow the ZomBeatz design system: https://github.com/ZomBeatz/zombeatz-docs/blob/main/design/DESIGN.md (tokens in design/tokens.css).

## Custom domain

To serve the site at `docs.zombeatzmedia.com`: add a DNS record `CNAME docs → zombeatz.github.io`, then set `DOCS_DOMAIN` (see the workflow in `.github/workflows/deploy.yml`) and the domain under the repository's Settings > Pages.
