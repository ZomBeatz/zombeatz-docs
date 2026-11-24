---
description: "Installing, updating and uninstalling Zom's Modzilla on Ubuntu, Fedora, Arch, the Steam Deck and other Linux systems."
---

# Installing and updating

Zom's Modzilla is one file to download for your Linux. Nothing else has to be installed first.

## Which file

Open the [latest release](https://github.com/ZomBeatz/zoms-modzilla/releases/latest) and look under **Assets** at the bottom:

| Your system | File | How to install |
|---|---|---|
| **Ubuntu, Linux Mint, Pop!_OS, Debian, Zorin** | `zoms-modzilla_(version)_amd64.deb` | Double-click it: your software installer opens it. Press **Install**. |
| **Fedora, Nobara, openSUSE** | `zoms-modzilla-(version)-1.x86_64.rpm` | Double-click it and press **Install**. |
| **Steam Deck, Arch, CachyOS, Manjaro, Bazzite, anything else** | `Zoms-Modzilla_(version)_amd64.AppImage` | Right-click it › **Properties** › **Permissions** › allow running it as a program, then double-click it. |

From a terminal it's `sudo apt install ./zoms-modzilla_*.deb`, `sudo dnf install ./zoms-modzilla-*.rpm` (`sudo zypper install` on openSUSE), or `chmod +x Zoms-Modzilla_*.AppImage`.

The `.deb` and `.rpm` add Zom's Modzilla to your app menu. The AppImage runs from wherever you keep it: put it in a folder like `~/Applications` so it doesn't get deleted with your downloads.

## On a Steam Deck

1. Switch to **Desktop Mode** (Steam button › Power › Switch to Desktop).
2. Download the AppImage with the browser, make it runnable as above, and open it.
3. The first-run setup offers **Add to Steam**, so it shows up in Game Mode with its artwork. See [Steam Deck](./steam-deck).

## The first start

*Getting started* at the top of the app walks through four steps: [connect your Nexus Mods account](./nexus-account), let the website's download buttons open the app, find your games, and get your first mod. **Settings › This computer** checks what's set up and gives the exact command for anything missing on your Linux.

### Optional extras

The app runs without these. Each one adds something, and **Settings › This computer** says which you have:

| For | Arch-based | Ubuntu, Debian, Mint | Fedora | openSUSE |
|---|---|---|---|---|
| A tray icon (keep downloading with the window closed) | `libayatana-appindicator` | `libayatana-appindicator3-1` | `libayatana-appindicator-gtk3` | `libayatana-appindicator3-1` |
| Notifications | `libnotify` | `libnotify-bin` | `libnotify` | `libnotify-tools` |
| Unpacking `.rar` mods (zip and 7z always work) | `libarchive` | `libarchive-tools` | `bsdtar` | `bsdtar` |
| Windows parts in Proton prefixes | `protontricks` | `protontricks` | `protontricks` | `protontricks` |

On a Steam Deck, Protontricks comes from **Discover** in Desktop Mode.

## Updating

Zom's Modzilla checks GitHub once a day and shows a banner when a newer version is out (you can turn that off in **Settings › New versions**). To update, download the new file and install it the same way: over the old one for a `.deb` or `.rpm`, or replace the old AppImage. Your mods, profiles, settings and download list all stay.

## Uninstalling

Uninstall it like any other app: your software center, `sudo apt remove zoms-modzilla`, `sudo dnf remove zoms-modzilla`, or delete the AppImage.

**Before uninstalling**, take each game's mods out (**Settings › Before uninstalling**), so every game goes back to how it came. Uninstalling keeps your mods and settings; to remove them too, delete the folders listed in [Data and backups](./data-and-backups).
