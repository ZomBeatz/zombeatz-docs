# The product README (GitHub page)

Every ZomBeatz product's `README.md` has the same sections, in the same order, at the same sizes, so a person who has seen one knows where to look on the next. Zomello's README is the reference. Wording follows [DESIGN.md section 6](DESIGN.md#6-writing-in-the-apps-guides-readmes-and-store-listings): no long dashes, no emojis, no hype words.

A copyable starting point is at the [end of this page](#template).

## Sections, in order

| # | Section | Heading | Required |
|---|---|---|---|
| 1 | Wordmark | none | yes |
| 2 | Three-line intro | none | yes |
| 3 | Badges | none | yes |
| 4 | Hero screenshot | none | yes |
| 5 | Quick start | `## Quick start` | yes |
| 6 | What it does, plus a screenshot grid | `## What it does` | yes |
| 7 | Full feature list | `<details>` under section 6 | optional |
| 8 | Who it's for | `## What people use it for` | yes |
| 9 | Try it | `## Try it with demo data` | only when the demo runs locally (an online demo is a badge and a line in Quick start) |
| 10 | Server | `## <Product> Server` when the server is its own program, otherwise `## Running on a server` | when there is one |
| 11 | Questions | `## Questions` | yes |
| 12 | For developers | `## For developers` | yes |
| 13 | License | `## License` | yes |
| 14 | Contact | `## Contact` | yes |

Nothing goes before the wordmark (no badges row, no title line, no table of contents). No other `##` sections. Anything else goes into the guide, linked from Questions.

## 1. Wordmark

- A centered `<picture>`: `branding/<product>-logo-dark.png` for dark mode, `branding/<product>-logo.png` otherwise.
- `width="460"`. PNG, not SVG, because GitHub doesn't render the wordmark's fonts reliably in an `<img>` SVG.
- `alt="<Product name> by ZomBeatz Media"`.

## 2. Three-line intro

One centered `<p>` with three lines separated by `<br>`:

| Line | What it says | Length |
|---|---|---|
| 1 | The promise, in bold: `<b>A planner for any occasion.</b>` | 3 to 7 words, ends with a period |
| 2 | What it is, in plain words, naming 1 or 2 well-known tools it's like | at most 120 characters |
| 3 | Where it runs (platforms, then "or self-host it" / "your own server") | at most 110 characters |

## 3. Badges

- One centered `<p>`, one row, **3 to 6 badges**, each a shields.io badge with `style=for-the-badge` and `logoColor=white`, wrapped in a link.
- Always in this order, leaving out what doesn't apply:

| Order | Badge | Left / right text | Color | Logo | Links to |
|---|---|---|---|---|---|
| 1 to 3 | One per platform | `Windows-Download`, `Linux-Download`, `Android-APK`, `macOS-Download`, `iOS-App_Store` | `2580c3` (blue) | `windows`, `linux`, `android`, `apple` | `releases/latest` (or the store page) |
| next | The guide | `Read_the-Guide` | `5b6375` (slate) | `readthedocs` | `https://docs.zombeatzmedia.com/<product>/` |
| next | A demo | `Try_it-Online_demo` or `Try_it-Demo_data` | `22c55e` (green) | `googlechrome` (online) or the language's logo (local) | the demo, or `#try-it-with-demo-data` |
| last | The server | `Server-Docker` | `ec6a3f` (orange) | `docker` | the server section |

- `alt` text says what clicking does: "Download for Windows", "Read the guide".
- No status badges (build passing, stars, downloads, version). They're for developers and change the look of the row.

## 4. Hero screenshot

- Centered, `width="900"`, from `docs/screenshots/`, taken from the demo data in the **dark theme**.
- Source image 1600 to 1800 px wide, about 16:10. The product's main screen (a board, the Home page), not a settings page.
- `alt` describes what's shown: "A Zomello board with buckets and cards".

## 5. Quick start

1. If there's an online demo, one bold lead-in line first: **Just want to look around?** Try the online demo...
2. A numbered list of **3 or 4 steps**:
   - Step 1 is **Download** with a link to `releases/latest` and "(under **Assets** at the bottom)", followed by a table:

     | Your device | File to download | Then |
     |---|---|---|

     One row per platform, **at most 4 rows**. "File to download" shows the real file name with `(version)` in place of the number. "Then" is at most 2 sentences and includes the unsigned-app warning text in italics (*"Windows protected your PC"*) and how to get past it.
   - Step 2 is opening the app and what it shows first.
   - Step 3 is what you need (or don't): "No account or sign-up needed."
3. One closing sentence linking to the guide or the server section.

The download must be **one file that installs with a double-click** (see [installers.md](installers.md)). A terminal command never appears in Quick start; scripts belong in the server and developer sections.

## 6. What it does

- At most **one sentence** before the table, comparing it to tools people know.
- A two-column table with an empty header row (`| | |`):
  - **6 to 10 rows.**
  - Left: the feature area in bold, 1 to 3 words.
  - Right: at most 2 sentences, about 200 characters.
  - The last row is always **Privacy**.
- Then a screenshot grid as an HTML table:

  ```html
  <table>
    <tr>
      <td width="66%"><img src="docs/screenshots/<desktop-1>.png" alt="..."></td>
      <td rowspan="2" width="34%"><img src="docs/screenshots/<phone>.png" alt="..."></td>
    </tr>
    <tr>
      <td><img src="docs/screenshots/<desktop-2>.png" alt="..."></td>
    </tr>
  </table>
  ```

  It holds 2 desktop shots on the left and 1 phone shot (390 × 844 at 3×) on the right. A product without a phone app uses a 2 × 2 grid of desktop shots, each `width="50%"`. **At most 4 images** in the grid.

## 7. Full feature list (optional)

`<details><summary><b>The full feature list</b></summary>`, with bullets inside, each starting with the feature in bold. No limit, but every item must also be in the guide.

## 8. What people use it for

- A two-column table with an empty header row (`| | |`).
- **4 to 6 rows**: the group in bold on the left (Home and family, Personal, School, Work, Groups, Creative), and a comma-separated list of 4 to 8 uses on the right.
- No bullets and no full sentences.

## 9. Try it with demo data (only for a local demo)

- One sentence on what the demo is and that it never touches your data.
- One code block with the command, then one line with the address, the sign-in if any, and how to stop it.

## 10. Server

- One or two sentences on who it's for. Then **3 to 5 bullets** on what you get.
- **With Docker** (in bold, then the kinds of machines in parentheses): a code block of at most 3 commands, then the address to open.
- **Without Docker:** one paragraph on the downloadable server file or service install.
- The last line links to the full server guide.

## 11. Questions

- **4 to 6 questions**, each its own `<details>` block, with the question in bold as the `<summary>`:

  ```html
  <details>
  <summary><b>Where are my files saved?</b></summary>

  The answer, 1 to 3 sentences, with a link to the guide.
  </details>
  ```

- Always include: where the data is saved, the unsigned-app warning, and the most common setup question (phones, importing, a forgotten password).
- Questions are written the way a person would ask them.

## 12. For developers

- Everything inside `<details>` blocks. The first is `<b>Building and project layout</b>` (or `<b>Running from source, tests and project layout</b>`), holding:
  - one line on the stack and what's needed (language versions);
  - one `bash` block of commands, each with a `#` comment saying what it does;
  - a short project layout (a bullet list or a plain code block), at most 15 lines.
- Further `<details>` for security or architecture notes when the product has them.

## 13. License

One line: the license name linked to `LICENSE`. Then one sentence per third-party part with its own license (icons, libraries, data sets), if any. See [licenses.md](licenses.md) for which license each kind of project uses.

## 14. Contact

Exactly:

```markdown
Made by **ZomBeatz Media** · [info@zombeatzmedia.com](mailto:info@zombeatzmedia.com)
```

## Files the README uses

| File | Size | Notes |
|---|---|---|
| `branding/<product>-logo.png` / `-logo-dark.png` | 920 px wide (shown at 460) | Light and dark wordmarks |
| `branding/<product>-social-preview.png` (or `social-preview.png`) | 1280 × 640 | Set as the repository's social preview in GitHub Settings |
| `docs/screenshots/*.png` | desktop 1600 to 1800 px wide, phone 1170 × 2532 | Demo data only; copied from the guide's pictures |

Repository settings to match: a description that is line 2 of the intro, the website set to the guide, and topics for the platforms and the kind of tool.

## Length

A finished README is **180 to 260 lines** of Markdown. If it grows past that, move detail into the guide and link to it.

## Template

````markdown
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="branding/PRODUCT-logo-dark.png">
    <img src="branding/PRODUCT-logo.png" alt="PRODUCT NAME by ZomBeatz Media" width="460">
  </picture>
</p>

<p align="center">
  <b>THE PROMISE.</b><br>
  WHAT IT IS, LIKE A TOOL PEOPLE KNOW.<br>
  WHERE IT RUNS.
</p>

<p align="center">
  <a href="https://github.com/ZomBeatz/REPO/releases/latest"><img alt="Download for Windows" src="https://img.shields.io/badge/Windows-Download-2580c3?style=for-the-badge&logo=windows&logoColor=white"></a>
  <a href="https://github.com/ZomBeatz/REPO/releases/latest"><img alt="Download for Linux" src="https://img.shields.io/badge/Linux-Download-2580c3?style=for-the-badge&logo=linux&logoColor=white"></a>
  <a href="https://docs.zombeatzmedia.com/PRODUCT/"><img alt="Read the guide" src="https://img.shields.io/badge/Read_the-Guide-5b6375?style=for-the-badge&logo=readthedocs&logoColor=white"></a>
  <a href="#running-on-a-server"><img alt="Server with Docker" src="https://img.shields.io/badge/Server-Docker-ec6a3f?style=for-the-badge&logo=docker&logoColor=white"></a>
</p>

<p align="center">
  <img src="docs/screenshots/MAIN.png" alt="WHAT THE PICTURE SHOWS" width="900">
</p>

## Quick start

1. **Download** the file for your computer from the [latest release](https://github.com/ZomBeatz/REPO/releases/latest) (under **Assets** at the bottom):

   | Your computer | File to download | Then |
   |---|---|---|
   | **Windows 10/11** | `PRODUCT_(version)_x64-setup.exe` | Open it. If Windows says *"Windows protected your PC"*, click **More info > Run anyway**. |
   | **Linux** | `.deb`, `.rpm` or `.AppImage` | Open it with your software installer. |

2. **Open PRODUCT.** WHAT YOU SEE FIRST.
3. No account or sign-up needed.

## What it does

| | |
|---|---|
| **Area** | What it does, in a sentence or two. |
| **Privacy** | No ads, no tracking and no cloud account. |

(screenshot grid)

## What people use it for

| | |
|---|---|
| **Home** | use, use, use, use |

## Running on a server

## Questions

## For developers

## License

## Contact

Made by **ZomBeatz Media** · [info@zombeatzmedia.com](mailto:info@zombeatzmedia.com)
````
