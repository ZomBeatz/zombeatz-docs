# ZomBeatz design system

How every ZomBeatz Media tool, website and guide should look and read, so they're recognizably one family. It's written for people and for AI assistants: if you're building or changing anything for a ZomBeatz product, follow this file and use `tokens.css` (or `tokens.json`).

Current products: **Zomello** (planner: boards, cards, calendar) and **Zom's HaRM** (hardware and rack manager). Examples below use both.

---

## 1. The brand pattern

Every product has the same three-part identity. Only the product's **symbol** (and optionally its accent color) changes.

### App icon
- **Tile:** rounded square, 928 of 1024 px with 48 px margin, corner radius 208 px (about 20%), vertical gradient `#232833` → `#12151b`.
- **Headphones (the ZomBeatz mark):** orange `#ec6a3f` headband arc over a thicker dark `#0a0c10` arc, orange ear cups with dark outer cushions. Same position and size in every product.
- **Product symbol** between the ear cups, in the product accent as a vertical gradient (`#4fb0ec` → `#2580c3` for blue), with small white `.85` opacity highlights:
  - Zomello: three kanban columns stepping down (they double as equalizer bars), each with a white card.
  - HaRM: three stacked rack servers with drive lights.
  - The suite itself: a five-bar equalizer (`brand/zombeatz/zombeatz-icon.svg`).
- **Maskable / Android adaptive version:** same artwork scaled to 74% around the center, so a round mask never cuts the headphones. On Android, the tile gradient is the background layer and the headphones + symbol are the foreground.
- Never put the tile on white inside another shape; let the platform shape it.

### Wordmark (logo)
- **Icon on the left**, then the name in **Open Sans Bold/ExtraBold**, outlined to paths in SVGs.
- The name splits into a dark part and a blue part: **Zom**`ello`, **Zom's** `HaRM`. Dark part `#14171f` (white `#ffffff` on dark backgrounds), product part in the accent (`#2580c3`, or `#4fb0ec` on dark).
- **Tagline** under the product part: small caps, wide letter spacing, slate `#5b6375` (lighter on dark): `BY ZOMBEATZ MEDIA`, or a short description (`HARDWARE & RACK MANAGER`).
- Ship a light and a dark version (`*-logo.svg`, `*-logo-dark.svg`). On websites, switch with `prefers-color-scheme` (`<picture>`).
- Templates: `brand/zomello/`, `brand/harm/`. HaRM's `branding/make-logos.py` builds icons and wordmarks from these rules; reuse it for new products.

### New product checklist
1. Pick a simple symbol that reads at 32 px and fits between the ear cups.
2. Use the ZomBeatz blue unless the product needs its own accent; if so, pick one with a light and a dark variant and add it to `tokens.css` under `[data-product="…"]`.
3. Make: icon (SVG + 1024/512/256 PNG), maskable icon, light and dark wordmark, store feature graphic (1024 × 500, wordmark centered on the `#0b1020` → `#1e3a8a` gradient).
4. Give its repository the standard GitHub page (see [Product README](#product-readme-the-github-page)) and a guide under `site/<product>/`.

---

## 2. Color

Use the tokens, not raw hex values, in interfaces.

| Use | Token | Notes |
|---|---|---|
| Page background | `--zb-bg` | Slightly off-white / near-black, never pure white or black |
| Cards, panels, dialogs, menus | `--zb-surface` | |
| Hover, chips, code, secondary panels | `--zb-surface-2`, `--zb-surface-3` | |
| Lines | `--zb-border` | 1 px |
| Text | `--zb-text`, `--zb-text-2` (secondary), `--zb-muted` (hints, counts) | |
| Primary actions, links, selection, focus | `--zb-accent` | One primary button per view |
| Selected background, focus ring | `--zb-accent-soft` | 15% accent |
| Brand highlight | `--zb-orange` | Logos, a single highlight; never for body text or errors |
| Danger / warning / success | `--zb-danger`, `--zb-warn`, `--zb-ok` | Always with an icon or word too |

- **Both themes, always.** Every screen works in light and dark; dark is chosen by the system unless the person picks one. Test both.
- **Board and label colors** (user content) may be any color; keep text on them readable (white on dark colors, dark on light).
- Backgrounds behind boards may use the brand gradients: `#0b1020 → #1e3a8a → #2580c3` (deep blue), `#0f766e → #22c55e` (green), `#6366f1 → #a855f7` (violet), `#ec6a3f → #f5a35c` (orange).

## 3. Type

- **Interface font:** `--zb-font` (Inter, then system fonts). Apps use 14 px body text, guides and websites 16 px.
- **Brand font:** Open Sans Bold, only in logos and the biggest headings on marketing pages.
- **Headings:** bold, sentence case ("Phone and tablet access", not "Phone And Tablet Access").
- **Numbers that line up** (counts, times, tables): `font-variant-numeric: tabular-nums`.
- **Code, keys, paths:** `--zb-font-mono`; keyboard keys in `<kbd>`.

## 4. Shape, spacing and depth

- Radius: 7 px inputs and small buttons, 10 px cards / panels / menus, 14 px dialogs.
- Spacing comes from the scale 4 · 8 · 12 · 16 · 24 · 32. Inside cards 10 to 16 px; between sections 24 to 32 px.
- Shadows are soft and small (`--zb-shadow`); big shadow (`--zb-shadow-lg`) only for things floating above the page (dialogs, menus, toasts, dragged items).
- Borders 1 px `--zb-border`. Prefer either a border or a shadow, not both.

## 5. Layout and components

These describe Zomello's interface, which is the reference. New tools reuse the same pieces.

- **App frame:** left sidebar (240 px, surface color) with the wordmark at the top, a big primary "Quick add" style action, navigation, then sections; main area on the background color. The sidebar collapses to icons on narrow windows.
- **Phones (under 700 px):** a top bar (menu, wordmark, search, +) and the sidebar becomes a drawer. One column at a time, swipe sideways between columns. Touch targets at least 40 px. Press and hold opens the same menu as right-click. Keep clear of the status bar and gesture bar (safe areas). No keyboard hints ("Ctrl+K") on touch screens.
- **Buttons:** primary (accent fill, `--zb-on-accent` text), normal (surface with border), ghost (text only), danger (red). Icons from **Lucide**, 14 to 16 px, beside the label.
- **Cards / tiles:** surface, 9 to 10 px radius, small shadow, title first, then small badges (labels as colored pills, dates, people as initials avatars).
- **Dialogs:** centered, 14 px radius, title at the top left with a close (×) at the top right, actions at the bottom right ("Cancel" then the primary action). Full screen on phones.
- **Menus (right-click / hold):** surface, 10 px radius, big shadow, icon + label rows, separators between groups, submenus open on hover and on tap, dangerous items in red at the end.
- **Toasts:** dark pill at the bottom (text color background, background color text), short message, optional action button ("Undo", "Share", "Show"). One at a time per subject.
- **Empty states:** a muted icon, one sentence saying what goes here, and the button to add the first one.
- **Banners** (status across the top): soft accent background, one sentence, one button, an × to hide.
- **Forms:** label above or left, hint text muted and small under the field, inline validation in red with a reason.
- **Lists of settings:** grouped under clear headings, each option says what it does in a short sentence.
- **Motion:** quick and small (120 to 150 ms fades and pops). Respect "reduce motion".

## 6. Writing (in the apps, guides, READMEs and store listings)

The voice is a helpful person explaining something plainly, not a marketing page.

- **Plain words, short sentences.** Say what happens: "Saved to Downloads" beats "Your export has been successfully completed".
- **No long dashes** (— or –). Use a period, comma, colon or parentheses instead. In ranges, write "5 to 60 minutes".
- **Few emojis.** None in headings or body text. Board icons the user picks are fine.
- **No hype or filler.** Avoid "seamless", "effortless", "powerful", "unlock", "supercharge", "game-changer", "dive in", "elevate", "robust", "leverage", "In today's world". Don't stack three adjectives.
- **Address the reader as "you"**; the product by name ("Zomello saves…"), not "we", in the app.
- **Sentence case** for buttons, menu items and headings ("Save as board file…", "Move to…").
- **Ellipsis (…) on items that open something to fill in** ("Rename…", "Paste cards…"), not on ones that act right away.
- **Menu paths** with ">" in text: **Settings > Phones & tablets**. Button and menu names in **bold**.
- **Device words** match the device: "this phone", "this iPad", "this tablet", "this computer".
- **Errors** say what happened and what to do: "Couldn't reach your computer. Check that it's on and on the same Wi‑Fi, then try again."
- **Confirmations** name the thing: "Delete the board “Garage build” and its 12 cards? You can undo this right after."
- **Numbers:** digits for anything counted ("3 cards", "14 days"); proper plurals ("1 card", "2 cards").
- **Curly quotes** in interface text (“Board”), straight quotes in code.

## 7. Screenshots and images

- Take screenshots from the **demo data** (made-up boards like Website Launch, Home Projects, Trip to Japan, people named Alex, Maya, Jordan, Sam). Never real personal data.
- Dark theme for hero images; show light theme somewhere in a guide too.
- 2× resolution for desktop shots (1600 px wide is plenty), phone shots at phone size (390 × 844 at 3×).
- Store sizes: Google Play phone 1080 × 1920 (9:16); App Store iPhone 1206 × 2622 (6.3") or 1290 × 2796 (6.9"), iPad 2064 × 2752 (13"); no transparency.
- Zomello's `shoot.mjs`-style script (headless Chromium with demo data) regenerates them, so guides never go stale.

## 8. Guides and docs

- Every product's guide lives in this repository under `site/<product>/` and uses the same layout: **Overview**, **Getting started**, then task pages ("How do I…"), then **Reference** (every setting and feature), then **Troubleshooting**.
- Task pages: start with one sentence saying what you'll achieve, then numbered steps, a screenshot, and "Related" links at the end.
- Link generously between pages and between products when they connect.
- Keep the same wording rules as the apps (section 6).

### Product README (the GitHub page)

Every product's `README.md` looks the same on GitHub (Zomello's is the reference):

1. **Centered wordmark** in a `<picture>`: `*-logo-dark.png` for dark mode, `*-logo.png` otherwise, 460 px wide.
2. **Three centered lines:** the promise in bold ("A planner for any occasion."), one sentence on what it is, one on where it runs.
3. **Badges** (shields.io, `style=for-the-badge`, white logos): downloads in ZomBeatz blue `2580c3`, the guide in slate `5b6375`, a demo or "try it" in green `22c55e`, the server in orange `ec6a3f`.
4. **A hero screenshot** from the demo data, 900 px wide.
5. **Quick start:** a table of "Your device | File to download | Then", then the first steps in the app, then a link to the guide.
6. **What it does:** a two-column table with bold row names, then a screenshot grid (two desktop shots beside a phone shot).
7. **What people use it for**, the **server** section, and short **Questions** with links to the guide.
8. **For developers** inside `<details>` (building, tests, project layout), then **License** and **Contact** ("Made by **ZomBeatz Media** · info@zombeatzmedia.com").

Screenshots for the README live in the product repository under `docs/screenshots/`, copied from the guide's pictures.

## 9. Accessibility

- Text contrast at least 4.5:1 (3:1 for large text and icons). Check both themes.
- Never color alone for meaning: add an icon, text or pattern.
- Everything works with a keyboard; visible focus ring (`--zb-accent-soft` 3 px ring).
- Respect reduced motion, larger text and high contrast settings.
- Icons that are buttons have an accessible name (`aria-label`).
