---
description: "How to install Zom's HaRM on Windows or Linux, and how to try it with demo data first."
---

# Installing HaRM

HaRM installs into one folder of your choosing: the app, its data and its backups all stay there. Nothing needs administrator rights. For an always-on server, see [Running on a server](./server) instead.

Download the latest release from [GitHub](https://github.com/ZomBeatz/Zoms-HaRM/releases/latest): the `.zip` for Windows, the `.tar.gz` for Linux.

## Windows

You need Windows 10 or 11 and about 400 MB of disk space.

1. **Extract the zip somewhere in your user folder**, for example `C:\Users\you\ZomsHaRM`. Don't use *Program Files*: HaRM keeps its data next to the app, and Windows doesn't allow that there.
2. Open the folder and **double-click Install HaRM.cmd**.
   - If Windows shows **Windows protected your PC**, click **More info > Run anyway**. That warning appears for any script downloaded from the internet.
   - If Python isn't installed, the installer offers to install it for you with Windows' own `winget`. Or get it from [python.org](https://www.python.org/downloads/) and tick **Add python.exe to PATH**.
3. Wait a few minutes while it downloads HaRM's parts (about 150 MB the first time).
4. When it's done there's a **Zom's HaRM** icon in the Start Menu and on the Desktop, and it offers to open HaRM.

## Linux

You need Python 3.10 or newer, which most distributions already have.

```bash
tar xzf zoms-harm-0.3.1.tar.gz
cd zoms-harm-0.3.1
./install.sh
```

This sets HaRM up in its folder and adds **Zom's HaRM** to your app menu (KDE, GNOME and others).

- **Debian or Ubuntu** says the venv module is missing: `sudo apt install python3-venv`.
- **The desktop app** needs Qt for Python. The installer uses your system's copy if it has one (on Arch: `sudo pacman -S pyside6`), or installs it just for HaRM.
- **Optional extras:** `tesseract` (reads printed text on labels), `zbar` (barcodes read on the server) and `qrencode` (QR codes in the desktop app if the built-in one isn't available). Install them with your package manager.
- **No desktop?** Use `./install.sh --no-menu`, then start HaRM with `HARM_HOST=0.0.0.0 HARM_TLS=1 ./run.sh`, or set it up as a service: [Running on a server](./server).

## Try the demo first

Want to look around before entering your own gear? **[Open the live demo](https://zombeatz.github.io/Zoms-HaRM/)**: the real HaRM, filled with a made-up home lab (a rack with two Proxmox hosts, a NAS, VMs, spare parts, tasks), running entirely in your browser.

- Nothing is installed, and nothing you type leaves your device.
- Your changes stay in that browser until you press **Reset demo** (bottom corner), or until a newer demo is published.
- If you lock it, the password is `demo-password`.
- The first visit downloads about 20 MB, so give it a few seconds.
- Features that reach other machines (network scan, UniFi, Proxmox, Import specs, sending photos to an AI) need HaRM on your own network, so the demo says so instead.

It works on phones too, so it's a quick way to see [what HaRM is like on a phone](./phones-and-tablets#when-to-grab-your-phone).

**Running the demo on your own computer.** In the HaRM folder, this starts a separate copy of HaRM with the same made-up data. It never touches your own data:

```bash
python3 scripts/demo.py
```

Open `http://127.0.0.1:8099` and unlock with the password `demo-password`. Press Ctrl+C in the terminal to stop it; the demo data is deleted.

## Related

- [First start](./first-start)
- [Running on a server](./server)
- [Backups, updates and uninstalling](./backups-and-updates)
