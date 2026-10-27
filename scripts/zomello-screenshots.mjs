// Screenshots for the Zomello guide, made from Zomello's demo boards (never real data).
//
//   1. In the Zomello folder:  VITE_DEMO=1 npx vite --port 1420
//   2. Here:                   node scripts/zomello-screenshots.mjs
//
// Needs Chromium (or Chrome: set CHROME=/path/to/chrome) and ImageMagick's `magick` for resizing.
// Writes site/public/img/zomello/*.png. Run it again after a release so the pictures stay current.
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const APP = process.env.APP_URL ?? "http://localhost:1420";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "../site/public/img/zomello");
mkdirSync(OUT, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), "zomello-shots-"));
const chrome = spawn(process.env.CHROME ?? "chromium", ["--headless=new", "--remote-debugging-port=9334", `--user-data-dir=${profile}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(1500);

const target = (await (await fetch("http://127.0.0.1:9334/json")).json()).find((t) => t.type === "page");
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let n = 0;
const waiting = new Map();
ws.onmessage = (m) => {
  const d = JSON.parse(m.data);
  if (d.id && waiting.has(d.id)) (waiting.get(d.id)(d), waiting.delete(d.id));
};
const cdp = (method, params = {}) => new Promise((r) => { const i = ++n; waiting.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expr) => {
  const r = await cdp("Runtime.evaluate", { expression: `(async () => { ${expr} })()`, awaitPromise: true, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description ?? r.result.exceptionDetails.text);
  return r.result?.result?.value;
};
const size = (w, h, scale, mobile, dark = true) =>
  Promise.all([
    cdp("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: scale, mobile }),
    cdp("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: dark ? "dark" : "light" }] }),
  ]);
// The demo's "Live demo" bar doesn't belong in the guide.
await cdp("Page.addScriptToEvaluateOnNewDocument", {
  source: `addEventListener("DOMContentLoaded", () => { const s = document.createElement("style"); s.textContent = ".demo-banner{display:none!important}"; document.head.append(s); });`,
});

// First visit: the demo makes its boards. Keep that data (welcome guide off) and start every shot from it.
await size(1440, 900, 2, false);
await cdp("Page.navigate", { url: `${APP}/#/home` });
await sleep(2500);
await ev(`localStorage.clear(); location.reload();`).catch(() => {});
await sleep(2500);
const data = await ev(`const d = JSON.parse(localStorage.getItem("zomello-data")); d.settings.onboarded = true; return d;`);
const boardId = (title) => Object.values(data.boards).find((b) => b.title === title).id;
const cardId = (title) => Object.values(data.cards).find((c) => c.title === title).id;
const WEB = boardId("Website Launch");
const HOME = boardId("Home Projects");
const store = `const { useStore } = await import("/src/store.ts"); const st = useStore.getState();`;
const click = (sel, text) =>
  `[...document.querySelectorAll(${JSON.stringify(sel)})].find((b) => b.textContent.trim() === ${JSON.stringify(text)})?.click();`;

async function shot(name, hash, prep = "", { wait = 900 } = {}) {
  await cdp("Page.navigate", { url: `${APP}/${hash}` });
  await sleep(600);
  await ev(`localStorage.setItem("zomello-data", ${JSON.stringify(JSON.stringify(data))}); location.reload();`).catch(() => {});
  await sleep(2200);
  await ev(`const s = document.createElement("style"); s.textContent = ".demo-banner{display:none!important}"; document.head.append(s);`);
  if (prep) {
    await ev(prep);
    await sleep(wait);
  }
  const { result } = await cdp("Page.captureScreenshot", { format: "png" });
  const file = join(OUT, `${name}.png`);
  writeFileSync(file, Buffer.from(result.data, "base64"));
  console.log("saved", name);
  return file;
}
const shrink = (file, width) => execFileSync("magick", [file, "-resize", `${width}x`, "-strip", file]);

// ---- Computer-size pictures ----
const desktop = [
  ["board", `#/board/${WEB}`],
  ["calendar", `#/board/${WEB}`, `localStorage.setItem("zomello-calendar-view", "month"); ${click(".view-tabs button", "Calendar")}`],
  ["calendar-week", `#/board/${WEB}`, `${click(".view-tabs button", "Calendar")} await new Promise((r) => setTimeout(r, 400)); ${click(".cal-views button", "Week")}`],
  ["timeline", `#/board/${WEB}`, click(".view-tabs button", "Timeline")],
  ["list", `#/board/${WEB}`, click(".view-tabs button", "List")],
  ["charts", `#/board/${WEB}`, click(".view-tabs button", "Charts")],
  ["home", "#/home"],
  ["my-tasks", "#/mytasks"],
  ["my-day", "#/myday"],
  ["settings", "#/settings"],
  ["card", `#/board/${WEB}`, `${store} st.openCard(${JSON.stringify(cardId("Homepage redesign"))});`],
  ["customize", `#/board/${WEB}`, `${store} st.setOverlay({ customizeBoardId: ${JSON.stringify(WEB)} });`],
  ["quick-add", `#/board/${WEB}`, `${store} st.setOverlay({ quickAddOpen: true });`],
  ["search", `#/board/${WEB}`, `${store} st.setSearchOpen(true); await new Promise((r) => setTimeout(r, 300)); const i = document.querySelector(".search-palette input, .modal input"); if (i) { const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set; set.call(i, "launch"); i.dispatchEvent(new Event("input", { bubbles: true })); }`],
  ["ai-tools", `#/board/${WEB}`, `${store} st.setOverlay({ aiDialog: { tab: "ask", mode: "cards", boardId: ${JSON.stringify(WEB)} } });`],
  ["paste-cards", `#/board/${HOME}`, `${store} st.setOverlay({ pasteCards: { boardId: ${JSON.stringify(HOME)}, text: "- Replace the porch light\\n- Fix the squeaky door\\n  - Hinges\\n  - Oil" } });`],
  ["card-menu", `#/board/${WEB}`, `const t = [...document.querySelectorAll(".card-tile")].find((c) => c.textContent.includes("Homepage redesign")); const r = t.getBoundingClientRect(); t.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, clientX: r.left + 120, clientY: r.top + 20 }));`],
  ["board-menu", `#/board/${WEB}`, `const b = [...document.querySelectorAll(".board-header button")].pop(); b.click();`],
  ["filter", `#/board/${WEB}`, click(".board-page button", "Filter")],
];
await size(1440, 900, 2, false);
for (const [name, hash, prep] of desktop) shrink(await shot(name, hash, prep), 1600);

// Light theme, for the Appearance pages.
await size(1440, 900, 2, false, false);
shrink(await shot("board-light", `#/board/${HOME}`), 1600);

// ---- Phone-size pictures ----
// Zomello tells phones apart by their browser name, so look like Chrome on Android (no keyboard hints).
await cdp("Emulation.setUserAgentOverride", {
  userAgent: "Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
});
await cdp("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
await size(390, 844, 3, true);
const phone = [
  ["phone", `#/board/${HOME}`],
  ["phone-menu", "#/home", `document.querySelector("[aria-label=Menu]")?.click();`],
  ["phone-card", `#/board/${HOME}`, `${store} st.openCard(${JSON.stringify(cardId("New shelves for the garage"))});`],
  ["phone-home", "#/home"],
];
for (const [name, hash, prep] of phone) shrink(await shot(name, hash, prep), 585);

// ---- iPad pictures (iPad 10.2", 810 × 1080) ----
await cdp("Emulation.setUserAgentOverride", {
  userAgent: "Mozilla/5.0 (iPad; CPU OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1",
});
await size(810, 1080, 2, true);
const ipad = [
  ["ipad", `#/board/${WEB}`],
  ["ipad-card", `#/board/${WEB}`, `${store} st.openCard(${JSON.stringify(cardId("Homepage redesign"))});`],
];
for (const [name, hash, prep] of ipad) shrink(await shot(name, hash, prep), 810);
await size(1080, 810, 2, true);
shrink(await shot("ipad-landscape", `#/board/${HOME}`, click(".view-tabs button", "Calendar")), 1080);

ws.close();
chrome.kill();
await sleep(800);
rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
