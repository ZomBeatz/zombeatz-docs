// Screenshots for the Zom's Modzilla guide, made from its demo data (made-up games and mods, never real ones).
//
//   1. In the zoms-modzilla folder:  npm run dev      (the page with demo data, on http://localhost:1440)
//   2. Here:                      node scripts/modzilla-screenshots.mjs
//
// Needs Chromium (or Chrome: set CHROME=/path/to/chrome) and ImageMagick's `magick` for resizing.
// Writes site/public/img/modzilla/*.png. Run it again after a release so the pictures stay current.
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const APP = process.env.APP_URL ?? "http://localhost:1440";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "../site/public/img/modzilla");
mkdirSync(OUT, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), "modzilla-shots-"));
const chrome = spawn(process.env.CHROME ?? "chromium", ["--headless=new", "--remote-debugging-port=9337", `--user-data-dir=${profile}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
await sleep(1500);

const target = (await (await fetch("http://127.0.0.1:9337/json")).json()).find((t) => t.type === "page");
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
const wait = (ms) => `await new Promise((r) => setTimeout(r, ${ms}));`;
const waitFor = (sel) => `for (let i = 0; i < 50 && !document.querySelector(${JSON.stringify(sel)}); i++) await new Promise((r) => setTimeout(r, 100));`;
// Press the first button whose text or label starts with this.
const click = (sel, text) =>
  `${wait(250)} [...document.querySelectorAll(${JSON.stringify(sel)})].find((b) => (b.textContent.trim() || b.getAttribute("aria-label") || "").startsWith(${JSON.stringify(text)}))?.click(); ${wait(400)}`;

async function shot(name, page, prep = "", { game = "frostrim", deck = false } = {}) {
  await cdp("Page.navigate", { url: APP });
  await sleep(800);
  await ev(`localStorage.clear();
    localStorage.setItem("zoms-modzilla:page", ${JSON.stringify(page)});
    localStorage.setItem("zoms-modzilla:game", ${JSON.stringify(JSON.stringify(game))});
    localStorage.setItem("zoms-modzilla:setup-hidden", "1");
    localStorage.setItem("zoms-modzilla:deck-setup", "1");
    localStorage.setItem("zoms-modzilla:ui", ${JSON.stringify(JSON.stringify({ mode: deck ? "deck" : "desktop" }))});`);
  await cdp("Page.navigate", { url: `${APP}/?shot=${name}` });
  await sleep(1800);
  await ev(waitFor(".page-head"));
  if (prep) {
    await ev(prep);
    await sleep(900);
  }
  const { result } = await cdp("Page.captureScreenshot", { format: "png" });
  const file = join(OUT, `${name}.png`);
  writeFileSync(file, Buffer.from(result.data, "base64"));
  execFileSync("magick", [file, "-resize", "1600x", "-strip", file]);
  console.log("saved", name);
}

await cdp("Emulation.setDeviceMetricsOverride", { width: 1280, height: 800, deviceScaleFactor: 2, mobile: false });
await shot("library", "library");
await shot("profiles", "profiles");
await shot("downloads", "downloads");
await shot("games", "games");
// Frostrim's card is the second one.
await shot("game-tools", "games", `${wait(300)} document.querySelectorAll("[aria-label='Game tools']")[1]?.click(); ${wait(500)}`);
await shot("look-inside", "library", click("[aria-label='Look inside']", "Look inside"));
await shot("help", "guide");
await shot("phone", "settings", `${wait(300)} window.dispatchEvent(new KeyboardEvent("keydown", { key: "F4", bubbles: true })); ${wait(600)}`);
// The Steam Deck's screen, in Deck mode.
await cdp("Emulation.setDeviceMetricsOverride", { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false });
await shot("deck-mode", "profiles", "", { deck: true });

ws.close();
chrome.kill();
await sleep(500);
rmSync(profile, { recursive: true, force: true, maxRetries: 5 });
