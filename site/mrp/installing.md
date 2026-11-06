---
description: "Install Zom's MRP on Windows, macOS or Linux, how it updates itself, uninstalling it, or trying the online demo first."
---

# Installing and updating

How to install Zom's MRP on a computer, update it and uninstall it. For a team sharing one plan, see [Setting up a server](./server) instead.

Every file is on [the latest release](https://github.com/ZomBeatz/Zoms_MRP/releases/latest), under **Assets**. They're built by GitHub from Zom's MRP's public code.

## Windows

You need Windows 10 or 11 (64-bit). You don't need administrator rights.

1. Download **`Zom’s MRP_(version)_x64-setup.exe`** and open it.
2. If Windows shows *"Windows protected your PC"*, click **More info > Run anyway**. The warning appears because the file isn't signed with a paid certificate yet.
3. Click through the installer and finish with Zom's MRP ticked to open.

## Mac

One app runs on Apple silicon and Intel Macs, with macOS 10.15 or later.

1. Download **`Zom's MRP_(version)_universal.dmg`** and open it.
2. Drag **Zom's MRP** to **Applications**.
3. Open it. The first time, macOS says it can't check the app: choose **Done**.
4. Open **System Settings > Privacy & Security**, scroll down to the message about Zom's MRP and choose **Open Anyway**.

After that it opens normally. On macOS 14 or older, right-clicking the app and choosing **Open** also works.

## Linux

| Your system | File | How |
|---|---|---|
| Ubuntu, Mint, Debian, Pop!_OS | the `.deb` | Open it in your software installer, or `sudo apt install ./<file>.deb` |
| Fedora, openSUSE | the `.rpm` | Open it in your software installer, or `sudo dnf install ./<file>.rpm` |
| Anything else | the `.AppImage` | Right-click > **Properties** > allow running it as a program, then open it |

## The first start

Zom's MRP opens with an empty plan and a **Getting started** card on the **Overview**. Follow its steps in order: aircraft, training, pilots, maintainers, then each customer as a mission. [Quick start](./quick-start) goes through them.

There's nothing to sign in to. The plan is saved in a file on this computer, with a copy every day for a month ([Data and backups](./data-and-backups)).

## Updating

From the next version on, Zom's MRP updates itself. When it opens, and every few hours while it stays open, it looks for a newer release and downloads it in the background. Then a note across the top says it's ready:

| Button | Does |
|---|---|
| **Restart now** | Saves everything, keeps a copy of the plan, installs the new version and opens it again |
| **What's new** | Opens [What's new](./whats-new) |
| **Later** | Hides the note for a few days |

It never restarts on its own, so it can't close a form you're in. On Windows a small progress window shows while it installs.

**Settings > About** has **Check for updates**, and **Download new versions by themselves** if you'd rather be asked first.

| | How it updates |
|---|---|
| Windows, Mac, Linux AppImage | By itself, as above |
| Linux `.deb` or `.rpm` | The note has **Download**, which opens the release; install it as before |
| Version 0.2.4 or older | Not by itself: download the new installer from [the latest release](https://github.com/ZomBeatz/Zoms_MRP/releases/latest) and install it over the old one, once |

Your plan is kept in its own folder, never next to the app, so updating can't touch it. Before installing, a copy is kept in its `backups` folder as `before-(version).json`. A plan from an older version is converted when the new one opens it.

## Uninstalling

| | How |
|---|---|
| Windows | **Settings > Apps**, find Zom's MRP and choose **Uninstall** |
| Mac | Drag **Zom's MRP** from **Applications** to the Bin |
| Linux | Remove it with your software installer, or delete the AppImage |

Uninstalling leaves your plan where it is, so reinstalling brings it back. To remove it too, delete its folder ([where it is](./data-and-backups#where-the-plan-is-kept)).

## Trying it first

The [live demo](https://zombeatz.github.io/Zoms_MRP/) runs in your browser with made-up data and hands-on lessons. Nothing is installed, and your changes stay in that browser.

## Related

- [Quick start](./quick-start): from nothing to a crewed mission.
- [The desktop app](./desktop-app): what the installed app adds.
- [Setting up a server](./server): one plan for a team.
- [Troubleshooting](./troubleshooting#installing): when it won't install or open.
