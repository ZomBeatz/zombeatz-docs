// Screenshots for the Zom's HaRM guide, made from HaRM's demo data (never real data).
//
//   1. In the HaRM folder:  python3 scripts/demo.py            (demo on http://127.0.0.1:8099)
//   2. Here:                node scripts/harm-screenshots.mjs
//   3. Desktop-app pictures: in the HaRM folder, python3 scripts/launcher-screenshots.py ../zombeatz-docs/site/public/img/harm
//
// Needs Chromium (or Chrome: set CHROME=/path/to/chrome) and ImageMagick's `magick` for resizing.
// Writes site/public/img/harm/*.png. Run it again after a release so the pictures stay current.
import { spawn, execFileSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const APP = process.env.APP_URL ?? "http://127.0.0.1:8099";
const PASSWORD = process.env.HARM_DEMO_PASSWORD ?? "demo-password";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "../site/public/img/harm");
mkdirSync(OUT, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), "harm-shots-"));
const chrome = spawn(process.env.CHROME ?? "chromium", ["--headless=new", "--remote-debugging-port=9335", `--user-data-dir=${profile}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
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
const size = (w, h, scale, mobile) => cdp("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: scale, mobile });
const theme = (mode, product = "zombeatz") =>
  ev(`localStorage.setItem("harm-theme", ${JSON.stringify(product)}); localStorage.setItem("harm-mode", ${JSON.stringify(mode)}); localStorage.setItem("harm-nav-more", "0");`);

// Sign in to the demo and look up the demo items' ids.
await size(1440, 900, 2, false);
await cdp("Page.navigate", { url: APP });
await sleep(1500);
await ev(`await fetch("/api/auth/login", { method: "POST", headers: { "X-HaRM": "1", "Content-Type": "application/json" }, body: JSON.stringify({ password: ${JSON.stringify(PASSWORD)} }) });`);
await theme("dark");
const ids = await ev(`
  const get = (p) => fetch("/api" + p, { headers: { "X-HaRM": "1" } }).then((r) => r.json());
  const [d, r, l, c, n, b] = await Promise.all(["/devices", "/racks", "/locations", "/clusters", "/networks", "/builds"].map(get));
  const by = (list, name) => list.find((x) => x.name === name)?.id;
  return { pve1: by(d, "pve1"), pve2: by(d, "pve2"), oldR610: by(d, "Old R610"), rack: by(r, "Main rack"), garage: by(l, "Garage"),
           cluster: by(c, "homelab"), lan: by(n, "Home LAN"), build: b[0]?.id };`);

const click = (sel, text) =>
  `[...document.querySelectorAll(${JSON.stringify(sel)})].find((b) => b.textContent.trim().includes(${JSON.stringify(text)}))?.click();`;
const wait = (ms) => `await new Promise((r) => setTimeout(r, ${ms}));`;
const waitFor = (sel) => `for (let i = 0; i < 50 && !document.querySelector(${JSON.stringify(sel)}); i++) await new Promise((r) => setTimeout(r, 100));`;
const tab = (name) => `document.querySelector('.tabs button[data-tab="${name}"]')?.click();`;
const type = (sel, text) => `const el = document.querySelector(${JSON.stringify(sel)}); el.value = ${JSON.stringify(text)}; el.dispatchEvent(new Event("input", { bubbles: true }));`;

async function shot(name, hash, prep = "", { settle = 900 } = {}) {
  // HaRM remembers the last tab per kind of page; every picture starts from the first tab.
  await ev(`Object.keys(localStorage).filter((k) => k.startsWith("harm-tab-")).forEach((k) => localStorage.removeItem(k));`);
  // A fresh page load for every picture (the same #hash twice wouldn't reload), then wait for it to draw.
  await cdp("Page.navigate", { url: `${APP}/?shot=${name}${hash}` });
  await sleep(1800);
  await ev(`${waitFor("#view .page-head, #view .card, .auth-card")}`);
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

const SAMPLE_LEASES = "1761900000 aa:bb:cc:10:00:21 192.168.10.121 Sams-iPhone *\n1761900000 aa:bb:cc:10:00:22 192.168.10.122 Jordans-Galaxy-S25 *\n1761900000 aa:bb:cc:10:00:23 192.168.10.123 LivingRoom-Roku *\n1761900000 aa:bb:cc:10:00:24 192.168.10.124 PS5-Console *\n1761900000 aa:bb:cc:10:00:25 192.168.10.125 Nest-Thermostat *";
const SAMPLE_AI = JSON.stringify({ harm_ai: 1, summary: "A shelf of spare server parts.", items: [
  { type: "part", category: "HDD", manufacturer: "Seagate", model: "ST4000NM0035", capacity: "4tb", interface: "SATA", form_factor: '3.5"', quantity: 4, msrp: 189, market_value: 38, confidence: "high", sources: ["https://example.com/sold-listings"], todo: ["Run SMART tests"] },
  { type: "part", category: "RAM", manufacturer: "Samsung", model: "M393A4K40CB2", capacity: "32gb", interface: "DDR4 RDIMM", quantity: 8, market_value: 22, confidence: "medium" },
  { type: "device", category: "Switch", name: "Cisco Catalyst 2960-X", manufacturer: "Cisco", model: "WS-C2960X-48TS-L", msrp: 3500, market_value: 120, confidence: "high", todo: ["Reset to factory defaults"] },
], todo: ["Label the shelf"] });

// ---- Computer-size pictures (dark) ----
const desktop = [
  ["home", "#/dashboard"],
  ["devices", "#/devices"],
  ["device", `#/devices/${ids.pve1}`],
  ["device-hardware", `#/devices/${ids.pve1}`, tab("hardware")],
  ["device-network", `#/devices/${ids.pve1}`, tab("network")],
  ["device-vms", `#/devices/${ids.pve1}`, tab("vms")],
  ["device-ip-menu", `#/devices/${ids.pve1}`, `${tab("overview")} ${waitFor(".facts .pop > button")} document.querySelector(".facts .pop > button").click();`],
  ["device-menu", `#/devices/${ids.pve1}`, `${waitFor(".page-actions .pop > button")} document.querySelector(".page-actions .pop > button").click();`],
  ["login-open", `#/devices/${ids.pve1}`, `${tab("logins")} ${wait(300)} ${click("button", "Open")}`],
  ["import-specs", `#/devices/${ids.pve1}`, `document.querySelector(".page-actions .pop > button").click(); ${wait(200)} ${click(".pop-menu button", "Import specs")}`, { settle: 1500 }],
  ["rack", `#/racks/${ids.rack}`],
  ["location", `#/locations/${ids.garage}`],
  ["parts", "#/components"],
  ["virtual", "#/virtual"],
  ["cluster", `#/clusters/${ids.cluster}`],
  ["networks", "#/networks"],
  ["network-ip-map", `#/networks/${ids.lan}`],
  ["discover-router", "#/discover", `${tab("router")} ${wait(200)} ${type("#disc-list", SAMPLE_LEASES)} ${click("button", "Read list")}`, { settle: 1500 }],
  ["discover-proxmox", "#/discover", tab("proxmox")],
  ["discover-unifi", "#/discover", tab("unifi")],
  ["ai-assist", "#/components", `await aiAssist(); ${wait(400)} ${type("#ai-reply", SAMPLE_AI)} ${click("button", "Read reply")} ${wait(800)} document.querySelector(".ai-table")?.scrollIntoView({ block: "center" });`, { settle: 1200 }],
  ["status", "#/status"],
  ["status-office", "#/status", `[...document.querySelectorAll(".st-group-head")].pop()?.scrollIntoView({ block: "start" }); window.scrollBy(0, -80);`],
  ["actions", "#/actions"],
  ["action-form", "#/actions", `editAction({ ...ACTION_TEMPLATES.find((t) => t.name.startsWith("Quiet")), device_id: ${ids.pve2}, hosts: "10.30.0.11" });`, { settle: 1200 }],
  ["device-actions", `#/devices/${ids.pve2}`, tab("actions")],
  ["tasks", "#/tasks"],
  ["vault", "#/vault"],
  ["export", "#/export"],
  ["pc-builder", `#/builds/${ids.build}`],
  ["settings", "#/settings"],
  ["search", "#/dashboard", `const i = document.querySelector(".topbar input[type=search]"); i.focus(); i.value = "pve"; i.dispatchEvent(new Event("input", { bubbles: true }));`],
  ["new-menu", "#/dashboard", `document.querySelector(".qa-btn").click();`],
  ["help-troubleshooting", "#/help?s=trouble"],
  ["settings-about", "#/settings", `document.querySelector(".about-row")?.scrollIntoView({ block: "center" });`],
  ["setup-guide", "#/setup"],
  ["phone-app-help", "#/settings", "phoneAppHelp();"],
  ["unlock", "#/dashboard", "showAuth();", { settle: 1200 }],
];
for (const [name, hash, prep, opts] of desktop) shrink(await shot(name, hash, prep, opts), 1600);

// Light theme, for the Appearance and overview pages. (Signing back in after the unlock shot.)
await ev(`await fetch("/api/auth/login", { method: "POST", headers: { "X-HaRM": "1", "Content-Type": "application/json" }, body: JSON.stringify({ password: ${JSON.stringify(PASSWORD)} }) });`);
await theme("light");
shrink(await shot("home-light", "#/dashboard"), 1600);
shrink(await shot("device-light", `#/devices/${ids.pve1}`), 1600);
await theme("dark");

// ---- Phone-size pictures ----
await cdp("Emulation.setUserAgentOverride", {
  userAgent: "Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
});
await cdp("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
await size(390, 844, 3, true);
const phone = [
  ["phone-home", "#/dashboard"],
  ["phone-device", `#/devices/${ids.pve1}`],
  ["phone-menu", "#/dashboard", `document.querySelector(".tabbar button").click();`],
  ["phone-rack", `#/racks/${ids.rack}`],
  ["phone-new-menu", "#/dashboard", `document.querySelector(".qa-btn").click();`],
  ["phone-search", "#/dashboard", `const i = document.querySelector(".topbar input[type=search]"); i.focus(); i.value = "pve"; i.dispatchEvent(new Event("input", { bubbles: true }));`],
  ["phone-device-network", `#/devices/${ids.pve1}`, tab("network")],
  ["phone-login-open", `#/devices/${ids.pve1}`, `${tab("logins")} ${wait(300)} ${click("button", "Open")}`],
  ["phone-location", `#/locations/${ids.garage}`],
  ["phone-parts", "#/components"],
  ["phone-part-form", "#/components", `editEntity("components", { status: "In Stock", quantity: 1 });`],
  ["phone-scanner", "#/components", `scanDialog({ title: "Scan label", targets: [{ k: "serial", label: "Serial" }, { k: "model", label: "Model" }], onPick: () => {} }); ${wait(600)} document.querySelector(".scan-status").textContent = "";`],  // headless Chromium has no camera
  ["phone-ai-assist", "#/components", `await aiAssist();`],
  ["phone-tasks", "#/tasks"],
  ["phone-status", "#/status"],
];
for (const [name, hash, prep] of phone) shrink(await shot(name, hash, prep), 585);

// ---- iPad picture (810 × 1080) ----
await cdp("Emulation.setUserAgentOverride", {
  userAgent: "Mozilla/5.0 (iPad; CPU OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1",
});
await size(810, 1080, 2, true);
shrink(await shot("ipad-device", `#/devices/${ids.pve1}`), 810);

ws.close();
chrome.kill();
await sleep(800);
rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
