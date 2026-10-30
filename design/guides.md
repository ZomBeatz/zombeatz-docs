# Guides (the docs site)

How every ZomBeatz product's guide is laid out on docs.zombeatzmedia.com: which sections it has, what goes on each kind of page, how deep each one goes, and how pages look. The Zomello guide is the reference. Wording follows [DESIGN.md section 6](DESIGN.md#6-writing-in-the-apps-guides-readmes-and-store-listings).

## Who reads it, and how deep each part goes

A guide serves three kinds of readers. Each part of the guide is written for one of them:

| Reader | They want | Where they go | Depth |
|---|---|---|---|
| **Trying it out** | To know if it's for them, and to get it running | Start here: Overview, Live demo, Quick start, Installing | Just enough to succeed. No options, no edge cases. |
| **Using it every day** | To do the common things well | The basics | The 80% everyone uses in their first week. Each page covers one thing people can see in the app. |
| **Going further** | Every option, every setup, every why | Advanced pages, scenarios, server, reference | Complete. Every setting, every limit, every platform difference. |

**The one-home rule:** every feature is explained in full in **exactly one** page. Basics pages give the short version and link to the deep dive ("More in [Cards in depth](./cards-in-depth#reminders)"). Other pages link to that page, and never explain the feature a second time. When a feature changes, only one page needs the full update.

## The sidebar

Groups appear in this order. Leave out a group the product doesn't need, but never reorder them.

| # | Group | What goes in it | Folded? |
|---|---|---|---|
| 1 | **Start here** | Overview, **Live demo** (if there is one), Quick start, Installing and updating, Questions | Open |
| 2 | **The basics** | 4 to 7 pages, one per main thing in the app (Boards, Cards, Views…) | Open |
| 3 | **Advanced features** | Deep dives on one feature each, plus Settings, Keyboard shortcuts, Accessibility, and a page per platform (desktop app, phones and tablets) | Open |
| 4 | **Topic groups** (optional) | A group for a big area with 3 or more pages, named for what people want to do: "Phones, computers and sharing", "Filling it in fast" | Open |
| 5 | **Server** | `<Product> Server` or "Running on a server": setting it up, https, people, settings, backups and security | Open |
| 6 | **Set-up scenarios** | "All scenarios" first, then one recipe per situation | Folded |
| 7 | **More** | What's new, Data and backups, Troubleshooting, the glossary ("Words used in <Product>"), Contact and feedback | Open |

- **Sidebar names** are short and plain, 1 to 5 words, in sentence case, and match the page's title (`# Cards in depth` shows as "Cards in depth").
- A group has **2 to 13 items**. Past 13, split it into two topic groups.
- **Live demo** is an external link, so it opens in a new tab. Pages next to it set `prev` / `next` in their front matter, so the Previous and Next buttons skip it.
- The whole guide has **25 to 50 pages** (scenarios included). Fewer means pages are doing too much; more means split the product's guide into topic groups.

## Kinds of page

Every page is one of these kinds. Each kind has a set shape.

### Overview (`index.md`)

- **What it's for:** "What is this, and is it for me?"
- **Length:** 40 to 60 lines.
- **Shape:**
  1. The `# Product` title, then 2 or 3 sentences: what it is, like what well-known tools, where it runs, and the privacy promise.
  2. The hero picture (the main screen, dark theme).
  3. The **Try the live demo** button (`<a class="zb-cta" … target="_blank">`) with one sentence on what the demo is.
  4. `## Start here`: 3 or 4 bullets, each starting with a bold question ("**New?**", "**Just looking?**", "**Your situation, step by step:**", "**Want everything?**").
  5. `## What you can do`: a two-column table with an empty header, 8 to 12 rows. Bold area name on the left; one line on the right, ending with the pages that cover it in parentheses.
  6. Optionally `## Where it runs` (a platform table) and `## Related`.

### Quick start

- **What it's for:** from nothing to using it, in about 10 minutes.
- **Length:** 700 to 900 words, 3 to 6 pictures.
- **Shape:**
  1. One sentence promising the outcome, with links to the deep end ("When you want more, the advanced features and set-up scenarios are next").
  2. One line pointing to the live demo for people who just want to look.
  3. **Numbered `##` sections**, `## 1. Install <Product>` to about `## 8.`, each one thing to do. Section 1 is a table: Device | What to do.
  4. A final `## Five habits that save time` (or similar) with 3 to 5 bullets.
  5. `## Where next?` with 3 to 5 links.
- Only the default way to do each thing; alternatives go in the basics pages.

### Basics page

- **What it's for:** one thing in the app (Boards, Cards, Devices).
- **Length:** 40 to 80 lines, 300 to 700 words, 1 to 3 pictures.
- **Shape:**
  1. Title, then 1 or 2 sentences on what the thing is and the one action people need first ("Click it to open it").
  2. A picture of it.
  3. 3 to 6 `##` sections, each something people do or see ("On the board", "The main parts of a card", "Quick changes without opening the card"). Short paragraphs, tables for "this button does that", numbered steps only for a sequence of 3 or more.
  4. A link to the deep dive wherever a topic has more.
  5. `## Related`.

### Deep dive ("in depth", one feature, a platform page)

- **What it's for:** everything about one feature: every option, limit and platform difference.
- **Length:** 80 to 150 lines, 600 to 1,200 words. Past that, split it.
- **Shape:**
  1. Title, then one sentence saying what's covered, plus where to follow along ("Open any card to follow along").
  2. One `##` per sub-feature, in the order people meet them. Each starts with a sentence on what it's for, then how to use it, then its options as a table (Option | What it does), then limits and platform differences.
  3. `###` for a task inside a sub-feature ("Turn a step into its own task").
  4. Pictures where something is hard to describe, at most one per `##`.
  5. `## Related`.

### Set-up scenario

- **What it's for:** a start-to-finish recipe for one situation ("My computer and my phone", "A small team").
- **Length:** 30 to 60 lines.
- **Shape:**
  1. Title, then one sentence describing the situation and what you end up with.
  2. `## On the computer (once)` / `## On the phone (once)` style sections, each with numbered steps. The steps link to the pages explaining each part, and don't re-explain them.
  3. `## Every day`: what using it looks like after setup.
  4. `## Good to know`: 2 to 5 bullets of limits and tips.
- The scenarios index (`scenarios/index.md`) groups them under 2 or 3 `##` headings ("Where your boards live", "Moving in", "Ideas"), each a table of Scenario | Good for.

### Server pages

These follow the deep-dive shape. They also need:

- A `::: danger` box if anything could expose the server to the internet ("Don't port-forward 7311 to the internet").
- Every command in a code block, with the platform named above it ("On Windows (as administrator):").

### Reference pages (Settings, Keyboard shortcuts, the glossary)

- **Settings:**
  - One `##` per group, in the same order and with the same names as the app's Settings.
  - One bullet per option: **its exact name**, then what it does.
  - Platform-only groups say so in the heading: "## Desktop app (computer only)".
- **Keyboard shortcuts:** the same groups as the app's own list, as tables of Keys | Does, with keys in `<kbd>`.
- **Glossary** ("Words used in <Product>"):
  - One table of Word | Means, in alphabetical order.
  - Each meaning is one line, linking to the page that explains it.

### Troubleshooting

- `##` for each area (Installing, Phone and computer, Reminders, Servers…), in the order people set things up.
- `###` for each problem, written as the person would say it or as the error reads ("The phone can't reach my computer", "“Windows protected your PC”").
- Under each problem:
  - the likely causes, most common first, each with its fix;
  - a numbered list when the fix has steps.
- End with how to get help: Contact, and what to include.
- No pictures, unless the fix is finding something on screen.

### Questions (FAQ)

- 10 to 15 `##` questions, written the way people ask them ("Is Zomello free?", "Where are my boards stored? Does ZomBeatz Media see them?").
- Each answer is 1 to 3 sentences plus a link. Anything longer belongs on a page of its own.
- Always include: is it free, account or internet needed, where data is stored, AI, getting data out, what's new, reporting a bug.

### What's new

- The product's `CHANGELOG.md`, version by version, newest first, with the same `##` version headings and bold groups.
- Update it whenever the changelog changes.

### Contact and feedback

- How to reach ZomBeatz Media (info@zombeatzmedia.com), the in-app **Send feedback** button, what to include in a bug report, and how to help test.

## How every page looks

- **Front matter:** `description:` is the page's first sentence (at most 160 characters). Search results and link previews show it.
- **Title (`#`):** exactly one, the same as the sidebar name.
- **First paragraph:** 1 or 2 sentences saying what the page covers or what you'll achieve. No "In this page we will…".
- **Headings:** `##` for sections and `###` for parts of them. Never deeper. Headings say what people do or see ("Moving a card", not "Card relocation").
- **Paragraphs:** at most 4 sentences. Prefer a table to a long list of "X does Y".
- **Steps:** numbered, one action each, starting with the verb or place ("Open **Settings > Phones & tablets**"). At most 8 steps per list; past that, split into `##` stages.
- **Names of things in the app:** in **bold**, exactly as the app writes them, with menu paths using ">" (**Settings > Data & backups**). Keys in `<kbd>` or bold (**Esc**).
- **Platform differences:** inside the text when it's one line ("press and hold on a phone, right-click on a computer"); a `::: tip On a phone` box when it's a few lines; a `##` per platform when the steps differ completely.
- **Boxes** (VitePress containers), at most 2 per page:
  - `::: tip`: a shortcut or a helpful aside.
  - `::: info`: background people may want, like what's in a backup.
  - `::: warning`: something that can lose data or lock you out.
  - `::: danger`: security risks only.
  - Each box has a short title ("::: warning Keep the password somewhere safe").
- **New features:** end the paragraph or table row with "New in version 0.5.4." Remove the note two minor versions later (in 0.7).
- **`## Related`:** the last section of every page except the Overview. 3 to 6 links, each with a few words on why ("[Device backups](./device-backups): a copy of your phone's boards on your computer").
- **Links:**
  - Link to the one home of a feature, to its `#section` when that helps.
  - Inside a product, use relative links (`./cards`).
  - Between products, use full paths (`/harm/`).
  - Links to other sites open in a new tab by themselves.

## Pictures

- From the **demo data** only, dark theme for the main pictures, with light theme shown at least once per guide.
- **Where they live:** `site/public/img/<product>/<name>.png`. Names describe the screen (`calendar-week.png`, `phone-menu.png`, `ipad-board.png`).
- **Sizes:** desktop 1600 px wide; phones 390 × 844 at 3×; iPad 1024 × 1366 at 2×. Crop to what the page is about.
- **Alt text** says what the picture shows: "The card window with a checklist and a due date".
- **Kept fresh by a script** (`scripts/<product>-screenshots.mjs`) that rebuilds every picture from the demo, so a picture never shows an old version of the app.
- **How many:** at most one per `##` section. A page of text with no pictures is fine (Troubleshooting, the glossary).

## Keeping it right

- **When a feature changes,** its guide page changes in the same piece of work: the one home page, the Settings page if a setting changed, What's new, and the pictures if the screen changed.
- **Every setting, menu item and shortcut in the app** appears in the guide: Settings, the page about its feature, and Keyboard shortcuts.
- **Before a release,** search the guide for every renamed button or menu item and fix the old name.
- The site builds with no dead links (`npm run build` fails on one).
- **Never in the guide:** hidden features and Easter eggs, personal email addresses or names, and real people's data.

## New product checklist

1. Make `site/<product>/` with at least: `index.md`, `quick-start.md`, `installing.md`, `faq.md`, 4 basics pages, `settings.md`, `troubleshooting.md`, `glossary.md`, `whats-new.md`, `contact.md`.
2. Add its sidebar to `site/.vitepress/config.mts` in the group order above, its nav link at the top, and a card for it on the site's front page.
3. Add a screenshot script and take the pictures from its demo.
4. Link the guide from the product's README (the **Read the guide** badge) and from its **Help** menu.
