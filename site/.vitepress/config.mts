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
  themeConfig: {
    logo: "/zombeatz-icon.svg",
    siteTitle: "ZomBeatz Docs",
    nav: [
      { text: "Zomello", link: "/zomello/", activeMatch: "/zomello/" },
      { text: "Zom's HaRM", link: "/harm/", activeMatch: "/harm/" },
      { text: "Design", link: "/design", activeMatch: "/design" },
    ],
    sidebar: {
      "/zomello/": [
        {
          text: "Zomello",
          items: [
            { text: "Overview", link: "/zomello/" },
            { text: "Getting started", link: "/zomello/getting-started" },
          ],
        },
        {
          text: "Using Zomello",
          items: [
            { text: "Boards, buckets and cards", link: "/zomello/boards-and-cards" },
            { text: "Views", link: "/zomello/views" },
            { text: "Home, My Tasks and search", link: "/zomello/home-and-search" },
            { text: "Copying and pasting cards", link: "/zomello/copy-paste-cards" },
          ],
        },
        {
          text: "Phones, computers and sharing",
          items: [
            { text: "Your computer's boards on your phone", link: "/zomello/phone-and-computer" },
            { text: "Moving boards between devices", link: "/zomello/moving-boards" },
            { text: "Sharing between your devices", link: "/zomello/sharing-between-devices" },
            { text: "Board files (.zomello)", link: "/zomello/board-files" },
            { text: "Zomello Server", link: "/zomello/server" },
          ],
        },
        {
          text: "More",
          items: [
            { text: "Data and backups", link: "/zomello/data-and-backups" },
            { text: "Troubleshooting", link: "/zomello/troubleshooting" },
          ],
        },
      ],
      "/harm/": [
        {
          text: "Zom's HaRM",
          items: [{ text: "Guide", link: "/harm/" }],
        },
      ],
    },
    search: { provider: "local" },
    outline: { level: [2, 3], label: "On this page" },
    socialLinks: [{ icon: "github", link: "https://github.com/ZomBeatz" }],
    editLink: {
      pattern: "https://github.com/ZomBeatz/zombeatz-docs/edit/main/site/:path",
      text: "Suggest a change to this page",
    },
    footer: {
      message: "Made by ZomBeatz Media · info@zombeatzmedia.com",
    },
    docFooter: { prev: "Previous", next: "Next" },
  },
});
