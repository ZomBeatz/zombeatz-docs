# Licenses

Which license each kind of ZomBeatz project uses, and how it shows up. **This page is a proposal until the open choices below are made.**

Without a license file, a public repository is "all rights reserved": people can read the code, but they're not allowed to copy, change or share it. So every public repository gets a `LICENSE` file.

## Where things stand

| Repository | Now | Proposed |
|---|---|---|
| Zom's HaRM | MIT | MIT (no change) |
| Zomello (app and server) | **No license** | **To choose:** MIT or AGPL-3.0 (see below) |
| zombeatz-docs: the guides' text and pictures | **No license** | CC BY 4.0 |
| zombeatz-docs: code (site config, scripts, `tokens.css`) | **No license** | MIT |
| Logos, icons, product names (everywhere) | Not covered | Not licensed: the names and logos stay ZomBeatz Media's, even where the code is open |

## The choice for Zomello

| | MIT | AGPL-3.0 |
|---|---|---|
| Anyone can use, change and share the code | Yes | Yes |
| Someone can sell it, or run it as a paid hosted service, without sharing their changes | Yes | No: whoever runs a changed version for others must publish their changes under the AGPL |
| Fits a later paid "Zomello Cloud" | Anyone could offer the same service | Others can only do it in the open, which protects a hosted service of your own |
| Outside contributions in the App Store and Google Play | No problem | Apple's terms clash with the GPL family. You can still publish your own code. Taking other people's code needs a contributor agreement that lets ZomBeatz Media publish it under other terms too. |
| Same as HaRM | Yes | No |

Plain recommendation: **MIT** if the goal is the simplest path and the most people using it. **AGPL-3.0, with a short contributor agreement**, if a paid hosted Zomello is likely.

## How it shows in each repository

- A `LICENSE` file at the top with the standard text, `Copyright (c) 2026 ZomBeatz Media`.
- Each package file states the same license: `"license"` in `package.json`, and `license` in `Cargo.toml` and `pyproject.toml`.
- A `## License` section near the end of the README (see [github-readme.md](github-readme.md#13-license)): one line naming the license, then one sentence per third-party part with its own terms (icons, libraries, data sets).
- The guides' footer: "Text and pictures CC BY 4.0 · ZomBeatz Media" once that's chosen.
- The app's **About** page shows the license name and links to the third-party notices.
