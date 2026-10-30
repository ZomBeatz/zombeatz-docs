---
description: "Install Zom's HaRM on Windows or Linux with one file, start it the first time, update it, uninstall it, or try the demo first."
---

# Installing and updating

How to install HaRM on Windows or Linux, what happens the first time it starts, and how updating and uninstalling work. For an always-on server, see [Setting up a server](./server) instead.

Every file is on [the latest release](https://github.com/ZomBeatz/Zoms-HaRM/releases/latest), under **Assets**. They're built by GitHub from HaRM's public code.

## Windows

You need Windows 10 or 11 (64-bit) and about 400 MB of disk space. Nothing else has to be installed first, and you don't need administrator rights.

1. Download **`Zoms-HaRM_(version)_x64-setup.exe`** and open it.
2. If Windows shows *"Windows protected your PC"*, click **More info > Run anyway**. The warning appears because the file isn't signed with a paid certificate yet.
3. Click **Install**. Tick **Add a desktop shortcut** if you want one.
4. Click **Finish** with **Run Zom's HaRM** ticked.

HaRM goes into your own user folder (`%LOCALAPPDATA%\Programs\Zoms-HaRM`), the Start Menu, and **Settings > Apps**.

## Linux

| Your system | File | How |
|---|---|---|
| Ubuntu, Mint, Debian, Pop!_OS | `zoms-harm_(version)_amd64.deb` | Open it in your software installer and click **Install**, or `sudo apt install ./zoms-harm_(version)_amd64.deb` |
| Fedora, openSUSE | `zoms-harm-(version)-1.x86_64.rpm` | Open it in your software installer and click **Install**, or `sudo dnf install ./zoms-harm-(version)-1.x86_64.rpm` |
| Arch, or anything else | `Zoms-HaRM_(version)_amd64.AppImage` | Right-click > **Properties** > **Allow executing file as program**, then double-click it |

**Zom's HaRM** is then in your app menu (KDE, GNOME and others).

Optional extras, from your package manager: `tesseract` reads printed text on labels, `zbar` reads barcodes on the server, and `qrencode` draws QR codes if the built-in way isn't available. HaRM works without them and says where they'd help.

## The first start

1. Open **Zom's HaRM**. The control panel opens.
2. Leave both settings ticked if you'll use a phone: **Let phones and other devices connect** and **Use HTTPS**. Phones need HTTPS for the camera and for installing HaRM as an app.
3. Press **Start**. HaRM offers to create its HTTPS certificate: choose **Yes**. On Windows, a firewall prompt appears: tick **Private networks** and choose **Allow**.
4. Press **Open HaRM**. Your browser warns once about the certificate. On this computer it's safe to continue (**Advanced > Proceed**), or make the browser trust it as on [Phones and tablets](./phones-and-tablets).
5. Create your **master password** (10 characters or more) and keep the **recovery code** it shows somewhere safe. Without your password or recovery code, saved logins can't be recovered.
6. The **setup guide** takes you through places, holders, networks, devices, security and your phone. Every step can be skipped.

![The setup guide](/img/harm/setup-guide.png)

## Where your data is

Your data is kept in its own folder, never next to the app, so updating or reinstalling can't touch it:

| | Folder |
|---|---|
| Windows | `%APPDATA%\com.zombeatz.zoms-harm` (paste it into File Explorer's address bar) |
| Linux | `~/.local/share/com.zombeatz.zoms-harm` |
| A server, Docker, or HaRM run from its source code | the `data` folder next to HaRM |

It holds the database, the daily backups, HaRM's certificates and its log. More in [Data and backups](./data-and-backups).

### Used HaRM before version 0.3.2?

Older versions ran from a folder (with **Install HaRM.cmd** or `install.sh`) and kept data inside it. The first time the installed app opens, it shows **Used HaRM before?**: press **Bring in data from an older HaRM…** and pick that folder. Your devices, logins, certificates and backups are copied over, and the old folder isn't changed. Use the same master password as before. New in version 0.3.2.

## Updating

Download the newer installer and open it, the same way you installed HaRM. It replaces the app and keeps your data, settings and sign-ins.

- **Windows:** the installer closes HaRM first if it's running.
- **Linux:** open the new `.deb` or `.rpm` the same way. For the AppImage, replace the file.
- Open HaRM. The first start of a new version upgrades the database by itself, and open browser tabs and the phone app show a **⟳ Reload** bar.

What changed in each version: [What's new](./whats-new).

## Uninstalling

| | How | Your data |
|---|---|---|
| Windows | **Settings > Apps > Zom's HaRM > Uninstall** | Kept, unless you choose **Yes** when it asks to remove it |
| Ubuntu, Debian | Your software center, or `sudo apt remove zoms-harm` | Kept |
| Fedora, openSUSE | Your software center, or `sudo dnf remove zoms-harm` | Kept |
| AppImage | Delete the file | Kept |

To remove the data too, delete the data folder above. Download a backup first if you might want your inventory again.

## Try the demo first

**[Open the live demo](https://zombeatz.github.io/Zoms-HaRM/)**: the real HaRM with a made-up home lab (a rack with two Proxmox hosts, a NAS, VMs, spare parts and tasks), running entirely in your browser.

- Nothing is installed, and nothing you type leaves your device.
- Your changes stay in that browser until you press **Reset demo** at the top, or until a newer demo is published.
- If you lock it, the password is `demo-password`.
- The first visit downloads about 20 MB, so give it a few seconds.
- Features that reach other machines (network scan, UniFi, Proxmox, Import specs, sending photos to an AI) need HaRM on your own network, so the demo says so instead.

It works on phones too, so it's a quick way to see [what HaRM is like on a phone](./phones-and-tablets#when-to-grab-your-phone).

## Running HaRM from its source code

For developers, or a machine without a desktop. Download the source archive (`zoms-harm-(version).tar.gz` or `.zip`) and extract it:

- **Linux:** `./install.sh` (add `--no-menu` without a desktop), then `./run.sh`. Debian or Ubuntu may first need `sudo apt install python3-venv`.
- **Windows:** double-click **Install HaRM.cmd**. It installs Python with `winget` if needed.
- **The demo, locally:** `python3 scripts/demo.py` starts a separate copy with the same made-up data on `http://127.0.0.1:8099`.

A copy run from source keeps its data in its own `data` folder.

## Related

- [Quick start](./quick-start): from download to your first rack in 15 minutes
- [Setting up a server](./server): Docker or a Linux service for the whole house
- [Data and backups](./data-and-backups): backing up, restoring and moving to another computer
- [Troubleshooting](./troubleshooting#installing): when installing or starting doesn't work
