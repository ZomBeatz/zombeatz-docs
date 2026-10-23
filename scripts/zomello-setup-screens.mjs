// Pictures of Zomello screens that only exist in the installed apps (the computer's Phones & tablets
// settings, pairing, a phone's menu with several places), made from the web version with a stand-in
// for the app's back end that answers with example data. Never real data.
//
//   1. In the Zomello folder:  VITE_DEMO=1 npx vite --port 1420
//   2. Here:                   node scripts/zomello-setup-screens.mjs
//
// Needs Chromium, ImageMagick (`magick`) and qrencode. Writes site/public/img/zomello/.
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const APP = process.env.APP_URL ?? "http://localhost:1420";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "../site/public/img/zomello");
mkdirSync(OUT, { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const qr = (text) => execFileSync("qrencode", ["-t", "SVG", "-m", "1", "-o", "-", text]).toString().replace(/<\?xml[^>]*>\s*(<!--.*?-->\s*)?/s, "");

const profile = mkdtempSync(join(tmpdir(), "zomello-setup-"));
const chrome = spawn(process.env.CHROME ?? "chromium", ["--headless=new", "--remote-debugging-port=9335", `--user-data-dir=${profile}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
await sleep(1500);
const target = (await (await fetch("http://127.0.0.1:9335/json")).json()).find((t) => t.type === "page");
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
await cdp("Page.enable");

// ---- The demo boards (as the online demo makes them) ----
await cdp("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 2, mobile: false });
await cdp("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: "dark" }] });
await cdp("Page.navigate", { url: `${APP}/#/home` });
await sleep(2500);
await ev(`localStorage.clear(); location.reload();`).catch(() => {});
await sleep(2500);
const demo = await ev(`const d = JSON.parse(localStorage.getItem("zomello-data")); d.settings.onboarded = true; return d;`);
const boardsOf = (titles) =>
  Object.values(demo.boards)
    .filter((b) => titles.includes(b.title))
    .map((b) => ({ id: b.id, title: b.title, color: b.color, icon: b.icon, category: b.category ?? null, starred: false, order: b.order }));

// ---- The stand-in back end ----
const COMPUTER = "https://192.168.1.10:7311";
const now = Math.floor(Date.now() / 1000);
const status = {
  enabled: true, running: true, port: 7311, addresses: ["192.168.1.10"], address: null, host: "192.168.1.10",
  url: "http://192.168.1.10:7311/", secure_url: `${COMPUTER}/`, setup_url: "http://192.168.1.10:7311/setup", error: null,
  devices: [
    { id: "d1", name: "Pixel phone", created: now - 86400 * 20, last_seen: now - 120, show_boards: true, can_link: true },
    { id: "d2", name: "iPad", created: now - 86400 * 6, last_seen: now - 3600 * 5, show_boards: true, can_link: true },
  ],
  firewall: { kind: "ufw", allowed: true, command: "sudo ufw allow 7311/tcp" },
  cert: { fingerprint: "6C:1F:9A:42:BD:07:E3:55:91:2E:4A:C8:7D:30:F6:A1", created: now - 86400 * 20, covers_address: true },
};
function stub(cfg) {
  return `(() => {
    const cfg = ${JSON.stringify(cfg)};
    let next = 1;
    const answers = {
      load_data: () => JSON.stringify(cfg.data),
      take_opened_files: () => [], list_backups: () => [], list_attachments: () => [],
      linked_devices: () => cfg.linked ?? [],
      remote_status: () => cfg.status,
      remote_qr: () => cfg.qr,
      remote_start_pairing: () => ({ code: "482915", url: cfg.status.secure_url, qr_svg: cfg.pairQr, expires_in: 600 }),
      places_read: () => cfg.places,
      get_autostart: () => false, store_package: () => false,
      data_location: () => "/home/you/.local/share/com.zombeatz.zomello/zomello.json",
      "plugin:notification|is_permission_granted": () => true,
      "plugin:event|listen": () => next++,
    };
    window.__TAURI_INTERNALS__ = {
      invoke: async (cmd, args) => (answers[cmd] ? answers[cmd](args) : null),
      transformCallback: (cb) => { const id = next++; window["_" + id] = cb; return id; },
      unregisterCallback: () => {},
      convertFileSrc: (p) => p,
      metadata: { currentWindow: { label: "main" }, currentWebview: { windowLabel: "main", label: "main" } },
    };
    window.__TAURI_EVENT_PLUGIN_INTERNALS__ = { unregisterListener: () => {} };
    addEventListener("DOMContentLoaded", () => {
      const s = document.createElement("style");
      s.textContent = ".demo-banner{display:none!important}";
      document.head.append(s);
    });
  })();`;
}

let stubId = null;
async function useStub(cfg) {
  if (stubId) await cdp("Page.removeScriptToEvaluateOnNewDocument", { identifier: stubId });
  stubId = (await cdp("Page.addScriptToEvaluateOnNewDocument", { source: stub(cfg) })).result.identifier;
}
async function open(hash) {
  // A fresh page each time (changing only the #… wouldn't load the stand-in).
  await cdp("Page.navigate", { url: "about:blank" });
  await sleep(200);
  await cdp("Page.navigate", { url: `${APP}/${hash}` });
  await sleep(2600);
}
async function capture(name, width, clip) {
  const { result } = await cdp("Page.captureScreenshot", { format: "png", ...(clip ? { clip: { ...clip, scale: 1 } } : {}) });
  const file = join(OUT, `${name}.png`);
  writeFileSync(file, Buffer.from(result.data, "base64"));
  execFileSync("magick", [file, "-resize", `${width}x`, "-strip", file]);
  console.log("saved", name);
  return file;
}
const clickText = (sel, text) =>
  `const el = [...document.querySelectorAll(${JSON.stringify(sel)})].find((b) => b.textContent.trim().startsWith(${JSON.stringify(text)})); if (!el) throw new Error("no " + ${JSON.stringify(text)}); el.click();`;

// ---- Computer: Settings > Phones & tablets, pairing, certificate ----
const desktopData = structuredClone(demo);
await useStub({ data: desktopData, status, qr: qr("http://192.168.1.10:7311/setup"), pairQr: qr("http://192.168.1.10:7311/setup#pair=482915") });
await open("#/settings");
await ev(`const el = document.getElementById("set-devices"); if (!el) throw new Error("no Phones & tablets section: " + [...document.querySelectorAll(".settings-nav button")].map((b) => b.textContent).join(", ")); el.scrollIntoView({ block: "start" });`);
await sleep(600);
await capture("phones-tablets-settings", 1600);
await ev(clickText("button", "Pair a device"));
await sleep(900);
await capture("pair-a-device", 1600);
await ev(`document.querySelector(".modal [aria-label=Close], .modal .icon-btn")?.click();`);
await sleep(400);
await ev(clickText("button", "Put it on a device"));
await sleep(900);
await capture("certificate-qr", 1600);

// ---- Computer: a connected phone's boards in the sidebar ----
const phoneBoards = boardsOf(["Home Projects", "Meals & Groceries"]).map((b) => ({ ...b, category: "Home" }));
await useStub({
  data: desktopData,
  status,
  linked: [{ id: "d1", name: "Pixel phone", boards: phoneBoards, sections: ["Home"] }],
});
await open(`#/board/${Object.values(demo.boards).find((b) => b.title === "Website Launch").id}`);
await capture("computer-sidebar-phone", 1600);

// ---- Phone: the menu with several places, and Settings > Servers ----
await cdp("Emulation.setUserAgentOverride", {
  userAgent: "Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
});
await cdp("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
await cdp("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 3, mobile: true });

// The phone keeps the home boards; work and school live on the computer.
const phoneData = structuredClone(demo);
const keep = new Set(["Home Projects", "Meals & Groceries", "Trip to Japan", "Fitness Goals"]);
for (const [id, b] of Object.entries(phoneData.boards)) if (!keep.has(b.title)) delete phoneData.boards[id];
phoneData.settings.sections = ["Home", "Personal"];
phoneData.settings.servers = [{ id: "c1", name: "My computer", url: COMPUTER, kind: "computer" }];
phoneData.settings.shareWithDevices = true;
const places = {
  me: "phone",
  list: [{ origin: COMPUTER, name: "My computer", kind: "computer" }],
  boards: {
    [COMPUTER]: { at: now, boards: boardsOf(["Website Launch", "Semester Plan", "Getting started"]), sections: ["Work", "School"] },
  },
  linked: COMPUTER,
};
await useStub({ data: phoneData, status, places });
await open("#/home");
await ev(`document.querySelector("[aria-label=Menu]").click();`);
await sleep(900);
await capture("phone-places-menu", 585);
await ev(`document.querySelector(".nav-backdrop")?.click();`);
await open("#/home");
await ev(`const { useStore } = await import("/src/store.ts"); useStore.getState().navigate({ page: "settings" });`);
await sleep(800);
await ev(`for (let i = 0; i < 50 && !document.getElementById("set-servers"); i++) await new Promise((r) => setTimeout(r, 100)); const el = document.getElementById("set-servers"); if (!el) throw new Error("no Servers section on " + location.href + ": " + document.body.innerText.slice(0, 200)); el.scrollIntoView({ block: "start" });`);
await sleep(600);
await capture("phone-servers-settings", 585);

// ---- Animation: dragging a board from This phone onto Computer ----
await open("#/home");
await ev(`document.querySelector("[aria-label=Menu]").click();`);
await sleep(900);
const at = await ev(`
  const row = [...document.querySelectorAll(".place-section.here .nav-item")].find((e) => e.textContent.includes("Trip to Japan"));
  const head = [...document.querySelectorAll(".place-head")].find((e) => e.textContent.includes("Computer"));
  const a = row.getBoundingClientRect(), b = head.getBoundingClientRect();
  return { x: a.left + 60, y: a.top + a.height / 2, ty: b.top + b.height / 2 };`);
const frames = [];
const frame = async (ms) => {
  const { result } = await cdp("Page.captureScreenshot", { format: "png" });
  const f = join(profile, `f${frames.length}.png`);
  writeFileSync(f, Buffer.from(result.data, "base64"));
  frames.push([f, ms]);
};
const touch = (type, x, y) => cdp("Input.dispatchTouchEvent", { type, touchPoints: type === "touchEnd" ? [] : [{ x, y }] });
await frame(1200);
await touch("touchStart", at.x, at.y);
await sleep(450); // press and hold
await touch("touchMove", at.x, at.y + 6);
await frame(500);
const steps = 6;
for (let i = 1; i <= steps; i++) {
  await touch("touchMove", at.x, at.y + ((at.ty - at.y) * i) / steps);
  await sleep(120);
  await frame(i === steps ? 900 : 180);
}
await touch("touchEnd", at.x, at.ty);
await sleep(700);
await frame(2600); // "Move or Copy?"
const files = [];
for (const [f, ms] of frames) files.push("-delay", String(Math.round(ms / 10)), f);
const anim = join(OUT, "move-board.webp");
execFileSync("magick", [...files, "-resize", "390x", "-loop", "0", "-quality", "80", anim]);
console.log("saved move-board.webp", frames.length, "frames");

ws.close();
chrome.kill();
await sleep(800);
rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
