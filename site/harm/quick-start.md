---
description: "Get Zom's HaRM running, with your first rack, device and phone, in about 15 minutes."
prev:
  text: Overview
  link: /harm/
---

# Quick start

In about 15 minutes you'll have HaRM installed, your first rack and device in it, and your phone connected. When you want more, the advanced features and [set-up scenarios](./scenarios/) come next.

Just want to look around? [The live demo](https://zombeatz.github.io/Zoms-HaRM/) runs HaRM in your browser with made-up data.

## 1. Install Zom's HaRM

Download the file for your computer from [the latest release](https://github.com/ZomBeatz/Zoms-HaRM/releases/latest) (under **Assets**):

| Device | What to do |
|---|---|
| **Windows 10/11** | Open `Zoms-HaRM_(version)_x64-setup.exe` and click **Install**. If Windows says *"Windows protected your PC"*, click **More info > Run anyway**. |
| **Ubuntu, Mint, Debian** | Open `zoms-harm_(version)_amd64.deb` in your software installer and click **Install**. |
| **Fedora, openSUSE** | Open `zoms-harm-(version)-1.x86_64.rpm` the same way. |
| **Any other Linux** | Download the `.AppImage`, allow running it as a program, and double-click it. |
| **A home server or NAS** | Follow [Setting up a server](./server) instead, then continue at step 3. |

More detail, and how updating works: [Installing and updating](./installing).

## 2. Start it

Open **Zom's HaRM** from the Start Menu or app menu (the Windows installer opens it for you). The control panel appears.

![The HaRM control panel, with HaRM running](/img/harm/desktop-app.png)

1. Leave **Let phones and other devices connect** and **Use HTTPS** ticked if you'll use a phone.
2. Press **Start**. The first time, HaRM offers to make its HTTPS certificate: choose **Yes**. On Windows, allow it through the firewall on **Private networks**.
3. Press **Open HaRM**. Your browser warns once about the certificate, because it doesn't know HaRM's own certificate authority yet. On this computer it's fine to continue (**Advanced > Proceed**).

## 3. Create your master password

HaRM asks for a master password (10 characters or more). It unlocks HaRM and encrypts the logins you save in it.

Then it shows a **recovery code**. Write it down or print it, and keep it somewhere safe and separate. Without your password or recovery code, saved logins can't be recovered.

## 4. Follow the setup guide

The setup guide opens next. It walks through a place (your house, a room), a holder (a rack, a shelf, a bin), your network, and a first device. Every step can be skipped and done later from **Help > Setup guide**.

![The setup guide](/img/harm/setup-guide.png)

To put a device in a rack, open the rack and click an empty U. See [Places and racks](./places-and-racks).

## 5. Fill in a device without typing

Open a device and press **⋯ > Import specs…**. Pick **Over SSH** for another machine or **This computer** for the one HaRM runs on. HaRM fills in the processors, memory, drives and network ports. See [Import specs](./import-specs).

![A device page with its summary, tabs and notes](/img/harm/device.png)

## 6. Bring in the rest of your network

**Discover** (in the menu) reads the device list from your router, a UniFi console or a Proxmox cluster, or scans your network. Tick what to add and press **Add**. Phones, TVs and consoles are recognized, and management ports (iDRAC, iLO) can be attached to the server they belong to. See [Discover](./discover).

## 7. Connect your phone

In the control panel, press **Phone setup**. Scan the first QR code with your phone's camera to trust HaRM's certificate, then the second to open HaRM. Both need to be on the same Wi‑Fi. A checklist on the computer ticks itself off as your phone gets each step done.

![HaRM on a phone](/img/harm/phone-home.png)

Step-by-step for each phone: [Phones and tablets](./phones-and-tablets) and [iPhone and iPad](./iphone-ipad).

## 8. Save your logins

Open a device's **Logins** tab and add its iDRAC, iLO, router or SSH login. Next time, **Open** takes you to its page and copies the password. See [Logins](./logins).

## Five habits that save time

- **Search first.** <kbd>Ctrl</kbd> <kbd>K</kbd> on a computer, or the box at the top on a phone, finds any device by name, IP, serial or MAC.
- **Write it down as you go.** Type a note on the device you're working on ("swapped PSU 2") and press Enter. Next time, the history is there.
- **Let tasks remind you.** Make a note a **Task** and it shows on **Home** until it's done.
- **Scan, don't type.** The camera buttons next to serial and model fields read the label for you.
- **Keep a backup elsewhere.** HaRM backs itself up daily; copy one to another disk now and then ([Data and backups](./data-and-backups)).

## Where next?

- [Set-up scenarios](./scenarios/): your situation, from start to finish
- [Devices](./devices): everything on a device page
- [Spare parts](./parts-and-storage): what you have and what fits where
- [AI Assist](./ai-assist): photos of a shelf into inventory
- [Keyboard shortcuts](./keyboard): faster on a computer
