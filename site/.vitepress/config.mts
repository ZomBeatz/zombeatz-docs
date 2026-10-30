import { defineConfig } from "vitepress";

// Served from https://zombeatz.github.io/zombeatz-docs/ until a custom domain is set up; then the
// deploy workflow builds with DOCS_BASE=/ (see .github/workflows/deploy.yml).
const base = process.env.DOCS_BASE ?? "/zombeatz-docs/";

export default defineConfig({
  base,
  lang: "en-US",
  title: "ZomBeatz Docs",
  description: "Guides for Zomello, Zom's HaRM and every ZomBeatz Media tool.",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: `${base}zombeatz-icon.svg` }],
    ["meta", { name: "theme-color", content: "#2580c3" }],
  ],
  // The design pages are the files in design/ (included), with DESIGN.md as the section's front page.
  rewrites: { "design/DESIGN.md": "design/index.md" },
  markdown: {
    // The design files are written for GitHub: point their DESIGN.md links at the section's front page,
    // and match the site's ids for numbered headings ("#6-writing" on GitHub is "#_6-writing" here).
    config(md) {
      md.core.ruler.push("zb-design-links", (state) => {
        for (const block of state.tokens)
          for (const t of block.children ?? []) {
            if (t.type !== "link_open") continue;
            const href = t.attrGet("href");
            if (!href || /^[a-z]+:/i.test(href)) continue;
            const m = href.match(/^(?:\.\/)?([\w-]+\.md)?(#.*)?$/);
            if (!m || (!m[1] && !m[2])) continue;
            const page = m[1] === "DESIGN.md" ? "./" : m[1] ?? "";
            const hash = (m[2] ?? "").replace(/^#(\d)/, "#_$1");
            t.attrSet("href", page + hash);
          }
      });
    },
  },
  themeConfig: {
    logo: "/zombeatz-icon.svg",
    siteTitle: "ZomBeatz Docs",
    nav: [
      { text: "Zomello", link: "/zomello/", activeMatch: "/zomello/" },
      { text: "Zomello beta", link: "/zomello/help-test" },
      { text: "Zom's HaRM", link: "/harm/", activeMatch: "/harm/" },
      { text: "Design", link: "/design/", activeMatch: "/design/" },
    ],
    sidebar: {
      "/zomello/": [
        {
          text: "Start here",
          items: [
            { text: "Overview", link: "/zomello/" },
            { text: "Live demo", link: "https://zombeatz.github.io/Zomello/" },
            { text: "GitHub", link: "https://github.com/ZomBeatz/Zomello" },
            { text: "Help test Zomello", link: "/zomello/help-test" },
            { text: "Quick start", link: "/zomello/quick-start" },
            { text: "Installing and updating", link: "/zomello/installing" },
            { text: "Questions", link: "/zomello/faq" },
          ],
        },
        {
          text: "The basics",
          items: [
            { text: "Boards and sections", link: "/zomello/boards" },
            { text: "Buckets", link: "/zomello/buckets" },
            { text: "Cards", link: "/zomello/cards" },
            { text: "Views", link: "/zomello/views" },
            { text: "Home, My Tasks and search", link: "/zomello/home-and-search" },
          ],
        },
        {
          text: "Advanced features",
          collapsed: false,
          items: [
            { text: "Cards in depth", link: "/zomello/cards-in-depth" },
            { text: "Custom fields", link: "/zomello/custom-fields" },
            { text: "Templates", link: "/zomello/templates" },
            { text: "Customizing a board", link: "/zomello/customize-board" },
            { text: "Calendar feeds", link: "/zomello/calendar-feeds" },
            { text: "Copying and pasting cards", link: "/zomello/copy-paste-cards" },
            { text: "Keyboard shortcuts", link: "/zomello/keyboard" },
            { text: "AI tools (optional)", link: "/zomello/ai-tools" },
            { text: "Settings", link: "/zomello/settings" },
            { text: "Accessibility", link: "/zomello/accessibility" },
            { text: "The desktop app", link: "/zomello/desktop-app" },
            { text: "Phones and tablets", link: "/zomello/phones-and-tablets" },
            { text: "iPhone and iPad", link: "/zomello/iphone-ipad" },
          ],
        },
        {
          text: "Phones, computers and sharing",
          collapsed: false,
          items: [
            { text: "Your computer's boards on your phone", link: "/zomello/phone-and-computer" },
            { text: "Moving boards between devices", link: "/zomello/moving-boards" },
            { text: "Sharing between your devices", link: "/zomello/sharing-between-devices" },
            { text: "Device backups", link: "/zomello/device-backups" },
            { text: "Board files (.zomello)", link: "/zomello/board-files" },
            { text: "Coming from Trello or Planner", link: "/zomello/import" },
          ],
        },
        {
          text: "Zomello Server",
          collapsed: false,
          items: [
            { text: "Setting up a server", link: "/zomello/server" },
            { text: "Turning on https", link: "/zomello/server-https" },
            { text: "People and sharing", link: "/zomello/server-people" },
            { text: "Server settings", link: "/zomello/server-settings" },
            { text: "Backups, recovery and security", link: "/zomello/server-backups" },
          ],
        },
        {
          text: "Set-up scenarios",
          collapsed: true,
          items: [
            { text: "All scenarios", link: "/zomello/scenarios/" },
            { text: "Just me, on one computer", link: "/zomello/scenarios/just-me" },
            { text: "Just a phone", link: "/zomello/scenarios/phone-only" },
            { text: "My computer and my phone", link: "/zomello/scenarios/computer-and-phone" },
            { text: "All my devices together", link: "/zomello/scenarios/all-my-devices" },
            { text: "Away from home", link: "/zomello/scenarios/away-from-home" },
            { text: "A family or roommates", link: "/zomello/scenarios/family-server" },
            { text: "A small team", link: "/zomello/scenarios/small-team" },
            { text: "Switching from Trello or Planner", link: "/zomello/scenarios/from-trello" },
            { text: "Sending a board to a friend", link: "/zomello/scenarios/send-a-board" },
            { text: "Household chores", link: "/zomello/scenarios/household-chores" },
            { text: "A project with a deadline", link: "/zomello/scenarios/project" },
            { text: "School or studying", link: "/zomello/scenarios/school" },
          ],
        },
        {
          text: "More",
          items: [
            { text: "What's new", link: "/zomello/whats-new" },
            { text: "Data and backups", link: "/zomello/data-and-backups" },
            { text: "Troubleshooting", link: "/zomello/troubleshooting" },
            { text: "Words used in Zomello", link: "/zomello/glossary" },
            { text: "Contact and feedback", link: "/zomello/contact" },
          ],
        },
      ],
      "/design/": [
        {
          text: "Design system",
          items: [
            { text: "Look and wording", link: "/design/" },
            { text: "Guides", link: "/design/guides" },
            { text: "GitHub page", link: "/design/github-readme" },
            { text: "Installers", link: "/design/installers" },
            { text: "Licenses", link: "/design/licenses" },
          ],
        },
      ],
      "/harm/": [
        {
          text: "Start here",
          items: [
            { text: "Overview", link: "/harm/" },
            { text: "Live demo", link: "https://zombeatz.github.io/Zoms-HaRM/" },
            { text: "GitHub", link: "https://github.com/ZomBeatz/Zoms-HaRM" },
            { text: "Quick start", link: "/harm/quick-start" },
            { text: "Installing and updating", link: "/harm/installing" },
            { text: "Questions", link: "/harm/faq" },
          ],
        },
        {
          text: "The basics",
          items: [
            { text: "Home and search", link: "/harm/home-and-search" },
            { text: "Places and racks", link: "/harm/places-and-racks" },
            { text: "Devices", link: "/harm/devices" },
            { text: "Parts and storage", link: "/harm/parts-and-storage" },
            { text: "Networks and cables", link: "/harm/networks" },
            { text: "Logins", link: "/harm/logins" },
            { text: "Notes and tasks", link: "/harm/notes-and-tasks" },
          ],
        },
        {
          text: "Advanced features",
          collapsed: false,
          items: [
            { text: "Virtual machines and clusters", link: "/harm/virtual-and-clusters" },
            { text: "Status", link: "/harm/status" },
            { text: "Alerts", link: "/harm/alerts" },
            { text: "Actions", link: "/harm/actions" },
            { text: "Export and share", link: "/harm/export-and-share" },
            { text: "PC Builder", link: "/harm/pc-builder" },
            { text: "Keyboard shortcuts", link: "/harm/keyboard" },
            { text: "Settings", link: "/harm/settings" },
            { text: "Security and privacy", link: "/harm/security" },
            { text: "Accessibility", link: "/harm/accessibility" },
            { text: "The desktop app", link: "/harm/desktop-app" },
            { text: "Phones and tablets", link: "/harm/phones-and-tablets" },
            { text: "iPhone and iPad", link: "/harm/iphone-ipad" },
          ],
        },
        {
          text: "Filling it in fast",
          collapsed: false,
          items: [
            { text: "Import specs", link: "/harm/import-specs" },
            { text: "Discover", link: "/harm/discover" },
            { text: "AI Assist", link: "/harm/ai-assist" },
            { text: "Scanning and labels", link: "/harm/scanning-and-labels" },
          ],
        },
        {
          text: "Running on a server",
          collapsed: false,
          items: [
            { text: "Setting up a server", link: "/harm/server" },
            { text: "https and certificates", link: "/harm/server-https" },
            { text: "Server settings", link: "/harm/server-settings" },
            { text: "Backups, recovery and security", link: "/harm/server-backups" },
          ],
        },
        {
          text: "Set-up scenarios",
          collapsed: true,
          items: [
            { text: "All scenarios", link: "/harm/scenarios/" },
            { text: "Just my computer", link: "/harm/scenarios/just-my-computer" },
            { text: "My computer and my phone", link: "/harm/scenarios/computer-and-phone" },
            { text: "An always-on home server", link: "/harm/scenarios/home-server" },
            { text: "A Proxmox home lab", link: "/harm/scenarios/proxmox-lab" },
            { text: "A pile of spare parts", link: "/harm/scenarios/spare-parts" },
            { text: "Moving in from a spreadsheet", link: "/harm/scenarios/from-a-spreadsheet" },
            { text: "Selling old gear", link: "/harm/scenarios/selling-gear" },
            { text: "A small office closet", link: "/harm/scenarios/office-closet" },
          ],
        },
        {
          text: "More",
          items: [
            { text: "What's new", link: "/harm/whats-new" },
            { text: "Data and backups", link: "/harm/data-and-backups" },
            { text: "Troubleshooting", link: "/harm/troubleshooting" },
            { text: "Words used in HaRM", link: "/harm/glossary" },
            { text: "Contact and feedback", link: "/harm/contact" },
          ],
        },
      ],
    },
    search: { provider: "local" },
    outline: { level: [2, 3], label: "On this page" },
    socialLinks: [{ icon: "github", link: "https://github.com/ZomBeatz" }],
    editLink: {
      // The design pages only include files from design/, so suggest changes to those.
      pattern: ({ filePath }) =>
        `https://github.com/ZomBeatz/zombeatz-docs/edit/main/${filePath.startsWith("design/") ? filePath : `site/${filePath}`}`,
      text: "Suggest a change to this page",
    },
    footer: {
      message:
        'Made by ZomBeatz Media · <a href="mailto:info@zombeatzmedia.com">info@zombeatzmedia.com</a> · <a href="https://zombeatz.github.io/Zomello/privacy.html">Privacy policy</a> · Text and pictures <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>',
    },
    docFooter: { prev: "Previous", next: "Next" },
  },
});
