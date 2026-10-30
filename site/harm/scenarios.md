---
description: "Step-by-step setups for Zom's HaRM: one PC, an always-on home server, a Proxmox home lab, and cataloging a pile of spares."
---

# Set-up scenarios

Pick the one that sounds like you. Each lists the pages to follow, in order.

## Just my PC

You have a desktop or laptop and want HaRM on it, with your phone connecting when the PC is on.

1. [Install HaRM](./install) on the PC.
2. [First start](./first-start): press **Start**, create your master password, follow the setup guide.
3. In the desktop app, tick **Start HaRM when I log in** so it's always there. See [Desktop app](./desktop-app).
4. [Connect your phone](./phones-and-tablets).
5. Give the PC a fixed IP address in your router, so the phone's address never changes.

## An always-on home server or NAS

HaRM runs on a server, NAS or mini PC, and every computer and phone in the house uses it through a browser.

1. On the server: [Docker or a Linux service](./server). Set the server's address (`HARM_CERT_NAMES`) before the first start.
2. On your PC, open `https://<server address>:8077`, create your master password and follow the setup guide.
3. On each phone: **Settings > Phone app** in HaRM shows QR codes for the certificate and the app. See [Phones and tablets](./phones-and-tablets).
4. Keep a copy of the server's `data` folder somewhere else now and then: [Backups](./backups-and-updates).

## A Proxmox home lab

You run Proxmox and want hosts, VMs and containers tracked without typing them in.

1. Set up HaRM ([one PC](#just-my-pc) or [a server](#an-always-on-home-server-or-nas)).
2. In Proxmox, make a read-only API token, then **Discover > Proxmox** imports the cluster, its nodes and every VM and container. See [Discover](./discover#proxmox).
3. Place the hosts in your rack: open each one, **Edit**, and set the rack and U. See [Places and racks](./places-and-racks).
4. On each host, **⋯ > Import specs…** over SSH fills in CPUs, memory and drives. See [Import specs](./import-specs).
5. Save the iDRAC/iLO and Proxmox logins so **Open** takes you straight in: [Logins](./logins).
6. Run Discover again after big changes: it updates what's there instead of adding duplicates.

## A pile of spare parts

You have boxes of drives, memory and cards and want to know what you've got and what it's worth.

1. Make a location for where they live (Garage) and holders for the boxes (Drive bin, Wire shelf). See [Places and racks](./places-and-racks).
2. Photograph each box with labels showing, then use [AI Assist](./ai-assist) from the holder's page: it identifies each part, looks up its value, and adds everything to that holder.
3. Scan any serials the AI couldn't read with the camera: [Scanning and labels](./scanning-and-labels).
4. Open a device's **Hardware** tab to see which spares fit its free slots: [Parts and storage](./parts-and-storage).
5. Selling some? **Export and share** makes a sell sheet: [Export and share](./export-and-share).

## Related

- [Quick start](./quick-start)
- [Glossary](./glossary)
