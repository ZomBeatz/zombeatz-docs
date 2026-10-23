---
description: "Zom's HaRM is a self-hosted hardware and rack manager: locations, racks, devices, parts, networks, cables and logins for your home lab, on your own computer."
---

# Zom's HaRM

**Zom's HaRM** (Hardware and Rack Manager) keeps track of your computer and network hardware: where everything lives, how it's racked, what's inside it, what it runs, how it's cabled, and how to log into it. It also tracks spare parts and tells you which ones fit which devices.

It runs on your own computer or server. Your phone connects to it over your home Wi‑Fi, and nothing is sent to the internet.

## Start here

1. [Installing HaRM](./install) on Windows or Linux, or on a server with Docker.
2. [First start and your phone](./first-start).
3. [Everyday use](./everyday-use).

## What it keeps track of

| | |
|---|---|
| **Locations** | A nested tree (site, building, room, closet) with loose devices and parts noted by spot |
| **Racks and storage** | Racks with front and rear views (click an empty U to place a device), plus shelves, bins, totes, drawers and desks |
| **Devices** | Make, model, serial, status, hostname, OS, CPU, RAM, storage, power, management address, purchase and warranty, tags and notes |
| **Slots and bays** | What a device can take (drive bays, memory slots, PCIe), with a tap-to-fill bay map and a RAID calculator |
| **Spare parts** | Drives, RAM, CPUs, network cards, cables and more, with quantities and where they're stored; install them into devices or put them back |
| **Compatibility** | Each slot lists spares that fit; each spare shows which devices have room for it |
| **Networks and IPs** | Subnets and VLANs with an IP map: who uses which address, duplicates, and the next free ones |
| **Interfaces, services and cables** | Per-device addresses, MACs, VLANs and speeds; the services each runs; cables between ports |
| **Virtual machines and clusters** | VMs and containers on their hosts, with overcommit totals |
| **Vault** | Logins and secrets per device, live 2FA codes, encrypted notes and a password generator. **Open ↗** opens the management page and copies the password in one click |
| **Notes and tasks** | A journal on every device, rack and room; open tasks show on Home |

## Handy tools

- **Discover:** bring devices in from your router's client list, a UniFi console, Proxmox, or a network scan. You review everything before it's saved.
- **Import specs:** fill in a device's hardware over SSH, from the computer HaRM runs on, or by running a small read-only script yourself.
- **Scanning:** camera buttons read serials, part numbers and MACs from labels, barcodes and QR codes. Photos are never stored.
- **QR labels:** print stickers that open the device in HaRM.
- **PC Builder:** parts lists with compatibility checks (socket, memory, case size, power), from a library of about 30,000 parts or your own spares.
- **Export and share:** Markdown, CSV or JSON, or a printed spec or sell sheet. Secrets are never exported.
- **Automatic backups:** a daily snapshot, the last 14 kept.
- **Audit log:** every change, sign-in, secret reveal and export.

::: info No AI inside
Like Zomello, HaRM has no built-in AI. Its optional **AI Assist** only writes a prompt you can paste into an AI app you choose (with photos of your hardware), and reads the reply back for you to review.
:::

## Phones

HaRM works as an installable phone app once the phone trusts HaRM's certificate (**Settings > Phone app** walks you through it). Phones get a bottom bar with Home, Devices, Racks and Tasks.

## More

- [Backups, updates and uninstalling](./backups-and-updates)
- [Troubleshooting](./troubleshooting)
- [Security](./security)
