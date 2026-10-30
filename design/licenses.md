# Licenses

Which license each kind of ZomBeatz project uses, and how it shows up.

Without a license file, a public repository is "all rights reserved": people can read the code, but they're not allowed to copy, change or share it. So every public repository gets a license.

| What | License | File |
|---|---|---|
| App and server code (Zomello, Zom's HaRM, new products) | MIT | `LICENSE` |
| Guides' text and pictures (this repository's `site/`) | CC BY 4.0 | `LICENSE-CONTENT` |
| Docs code (site config, theme, scripts, `tokens.css`, `tokens.json`) | MIT | `LICENSE` |
| Product names and logos (ZomBeatz Media, Zomello, Zom's HaRM, the icons) | Not licensed: they stay ZomBeatz Media's | named in the README's License section |

## Changing a license later

ZomBeatz Media owns all the code, so it can choose a different license for **future** versions (for example AGPL-3.0 before a paid hosted service). Versions already released under MIT stay MIT for anyone who has them.

Before accepting code from other people, add a short contributor agreement, so their code can be relicensed too. Without one, changing the license needs each contributor's permission.

## How it shows in each repository

- A `LICENSE` file at the top with the standard text, `Copyright (c) 2026 ZomBeatz Media`.
- Each package file states the same license: `"license"` in `package.json`, and `license` in `Cargo.toml` and `pyproject.toml`.
- A `## License` section near the end of the README (see [github-readme.md](github-readme.md#13-license)): one line naming the license, then one sentence per third-party part with its own terms (icons, libraries, data sets).
- The guides' footer: "Text and pictures CC BY 4.0".
- The app's **About** page names the license and links to the code.
