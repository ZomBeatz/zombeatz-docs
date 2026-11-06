// Screenshots for the Zom's MRP guide, made from MRP's demo data (never real data).
//
//   1. In the Zoms_MRP folder:  VITE_DEMO=1 npx vite --port 1433      (the online demo, on http://localhost:1433)
//   2. Here:                    node scripts/mrp-screenshots.mjs
//
// Needs Chromium (or Chrome: set CHROME=/path/to/chrome) and ImageMagick's `magick` for resizing.
// Writes site/public/img/mrp/*.png. Run it again after a release so the pictures stay current.
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const APP = process.env.APP_URL ?? "http://localhost:1433";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "../site/public/img/mrp");
mkdirSync(OUT, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), "mrp-shots-"));
const chrome = spawn(process.env.CHROME ?? "chromium", ["--headless=new", "--remote-debugging-port=9336", `--user-data-dir=${profile}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(1500);

const target = (await (await fetch("http://127.0.0.1:9336/json")).json()).find((t) => t.type === "page");
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
const size = (w, h, scale, mobile) => cdp("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: scale, mobile });

const wait = (ms) => `await new Promise((r) => setTimeout(r, ${ms}));`;
const waitFor = (sel) => `for (let i = 0; i < 50 && !document.querySelector(${JSON.stringify(sel)}); i++) await new Promise((r) => setTimeout(r, 100));`;
// Press the first button (or tab, or row) whose text starts with this.
const click = (sel, text) =>
  `${wait(250)} [...document.querySelectorAll(${JSON.stringify(sel)})].find((b) => b.textContent.trim().startsWith(${JSON.stringify(text)}))?.click(); ${wait(350)}`;
const tab = (text) => click(".dialog .tabs button, .dialog [role=tab]", text);
const scrollTo = (sel) => `document.querySelector(${JSON.stringify(sel)})?.scrollIntoView({ block: "start" });`;

// The demo, put back the way it starts, in the theme asked for. The theme is part of the plan's settings.
async function fresh(theme) {
  await cdp("Page.navigate", { url: APP });
  await sleep(1200);
  // The notes on new pages are closed, so the pictures show the page itself.
  await ev(`localStorage.clear(); localStorage.setItem("zoms-mrp:page", "settings");
    for (const p of ["planner", "balance", "inspections"]) localStorage.setItem("zoms-mrp:note:" + p, "closed");`);
  await cdp("Page.navigate", { url: APP });
  await sleep(1800);
  await ev(`${waitFor(".page-head")} ${click(".seg button", theme === "dark" ? "Dark" : "Light")}`);
  await sleep(600);
}

async function shot(name, page, prep = "", { settle = 900 } = {}) {
  await ev(`localStorage.setItem("zoms-mrp:page", ${JSON.stringify(page)});`);
  await cdp("Page.navigate", { url: `${APP}/?shot=${name}` });
  await sleep(1800);
  await ev(waitFor(".page-head"));
  if (prep) {
    await ev(prep);
    await sleep(settle);
  }
  const { result } = await cdp("Page.captureScreenshot", { format: "png" });
  const file = join(OUT, `${name}.png`);
  writeFileSync(file, Buffer.from(result.data, "base64"));
  console.log("saved", name);
  return file;
}
const shrink = (file, width) => execFileSync("magick", [file, "-resize", `${width}x`, "-strip", file]);

// Open the first mission, then its running season (the second line), on the tab asked for.
const openSeason = (tabName) =>
  `${click(".page tbody tr, .page .list-card", "")} ${wait(400)} ${tab("Seasons")} ${wait(250)} document.querySelectorAll(".dialog .line-main")[1]?.click(); ${wait(500)} ${tab(tabName)}`;

// ---- Computer-size pictures (dark) ----
await size(1440, 900, 2, false);
await fresh("dark");
const desktop = [
  ["overview", "overview"],
  ["fleet", "aircraft"],
  ["fleet-can-we", "aircraft", click(".page-head .btn", "Can we take a job")],
  ["schedule", "schedule"],
  ["schedule-crew", "schedule", click(".page-head .seg button", "Crew")],
  ["missions", "missions"],
  ["mission", "missions", click(".page tbody tr, .page .list-card", "")],
  ["season", "missions", openSeason("Details")],
  ["season-pilots", "missions", openSeason("Pilots")],
  ["crew", "people"],
  ["person", "people", `${click(".page tbody tr, .page .list-card", "")}`],
  ["training", "training"],
  ["maintenance", "maintenance"],
  ["inspections", "inspections"],
  ["planner", "planner", click(".page-head .seg button", "One job")],
  ["planner-answer", "planner", `${click(".page-head .seg button", "One job")} ${scrollTo(".planner-answer, .plan-answer, .tiles")}`],
  ["planner-several", "planner", click(".page-head .seg button", "Several jobs")],
  ["balance", "balance"],
  ["reports", "reports"],
  ["settings", "settings"],
  ["settings-limits", "settings", `[...document.querySelectorAll("h3")].find((h) => h.textContent.includes("Hitches and days off"))?.scrollIntoView({ block: "start" }); window.scrollBy(0, -20);`],
  ["guide", "guide"],
  ["find", "overview", `document.querySelector(".find-item")?.click(); ${wait(300)}`],
];
for (const [name, page, prep, opts] of desktop) shrink(await shot(name, page, prep, opts), 1600);

// Light theme, shown on the Overview and the Settings page.
await fresh("light");
shrink(await shot("overview-light", "overview"), 1600);
shrink(await shot("fleet-light", "aircraft"), 1600);

// ---- Phone-size pictures ----
await fresh("dark");
await cdp("Emulation.setUserAgentOverride", {
  userAgent: "Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
});
await cdp("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
await size(390, 844, 3, true);
const phone = [
  ["phone-overview", "overview"],
  ["phone-menu", "overview", `document.querySelector('button[aria-label="Menu"]')?.click();`],
  ["phone-fleet", "aircraft"],
  ["phone-season", "missions", openSeason("Pilots")],
  ["phone-planner", "planner"],
];
for (const [name, page, prep] of phone) shrink(await shot(name, page, prep), 585);

ws.close();
chrome.kill();
await sleep(800);
rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
