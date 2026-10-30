---
description: "Zom's HaRM is a self-hosted hardware and rack manager: where every device lives, what's inside it, how it's networked, how to log into it, and what still needs doing."
---

# Zom's HaRM

**Zom's HaRM** (Hardware and Rack Manager) keeps track of your computer and network hardware: where everything lives, how it's racked, what's inside it, what it runs, how it's cabled, how to log into it, and what still needs doing. It also tracks spare parts and tells you which ones fit which devices.

It runs on your own computer or server. Your phone connects to it over your home Wi‑Fi, and nothing is sent to the internet unless you choose to use an online AI service.

![HaRM's Home page with the things that need attention and open tasks](/img/harm/home.png)

## Start here

- **New?** [Quick start](./quick-start) gets you from download to your first rack in about 15 minutes.
- **Your situation, step by step:** [Set-up scenarios](./scenarios) (one PC, an always-on server, a Proxmox home lab, a pile of spares).
- **Want everything?** The pages below cover every feature, and [Settings](./settings) lists every option.

## What you can do

| | |
|---|---|
| **Know where everything is** | Locations, racks with front and rear views, shelves, bins and piles ([Places and racks](./places-and-racks)) |
| **Keep every detail** | Devices with serials, status, specs, purchase and warranty, plus notes and tasks ([Devices](./devices), [Notes and tasks](./notes-and-tasks)) |
| **Track parts** | Spare drives, memory, cards and cables; drive bays, RAID math and what fits where ([Parts and storage](./parts-and-storage)) |
| **Map the network** | Subnets and VLANs, an IP map, interfaces, services and cables ([Networks and cables](./networks)) |
| **Virtual machines** | VMs and containers on their hosts, clusters, Proxmox import ([Virtual machines and clusters](./virtual-and-clusters)) |
| **Log in faster** | Encrypted logins with one-click open for iDRAC, iLO and web pages ([Logins](./logins)) |
| **Fill it in fast** | Import specs over SSH, Discover from your router or Proxmox, scan labels, AI Assist from photos ([Import specs](./import-specs), [Discover](./discover), [Scanning and labels](./scanning-and-labels), [AI Assist](./ai-assist)) |
| **Share and sell** | Copy as text for a person or an AI, CSV and JSON, spec sheets and sell sheets ([Export and share](./export-and-share)) |
| **Plan a build** | PC parts lists with compatibility checks ([PC Builder](./pc-builder)) |
| **Phone and server** | An installable phone app, a desktop control panel, Docker and Linux service ([Phones and tablets](./phones-and-tablets), [Desktop app](./desktop-app), [Running on a server](./server)) |

::: info AI only when you ask
HaRM works fully without AI. **AI Assist** is optional: it either writes a prompt you paste into an AI app yourself, or, if you set up a service in **Settings > AI Assist**, sends the photos you pick to that service (Claude, ChatGPT, Gemini, or a model running on your own computer). Logins and other secrets are never sent. See [AI Assist](./ai-assist).
:::

## Get HaRM

- **Windows and Linux:** [the latest release on GitHub](https://github.com/ZomBeatz/Zoms-HaRM/releases/latest), then follow [Installing HaRM](./install).
- **Home server or NAS:** Docker or a Linux service, see [Running on a server](./server).
- **Try it first:** [the live demo](https://zombeatz.github.io/Zoms-HaRM/) runs in your browser with a made-up home lab. Nothing to install. More in [Try the demo first](./install#try-the-demo-first).

## Related

- [Zomello](/zomello/), the ZomBeatz planner, for the projects your hardware is part of.
