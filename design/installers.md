# Installers

How a ZomBeatz product gets onto someone's computer or phone. Zomello is the reference: people download one file, double-click it, and the app is in their Start Menu or app menu. Nobody needs a terminal, Python, Node.js or anything else installed first.

## The rules

1. **One file per platform, one double-click.** The download installs the app, its icon and its menu entry, then offers to open it. No unzipping, no "run this script", no "install X first".
2. **Everything is inside.** The installer carries its own runtime (Python, Qt, WebView loader, libraries). The only allowed exception is something the operating system provides and installs by itself, like Windows' WebView2. A missing optional extra must never block the install; the app says where it's needed when you use that feature.
3. **No administrator rights** for the desktop app. It installs for the current user.
4. **Uninstalls like any other app:** Windows' **Settings > Apps**, or the Linux software center / package manager. Uninstalling keeps the person's data, unless they tick a box asking to remove it.
5. **Updating = installing the newer file** over the old one. Data, settings and sign-ins carry over.
6. **Built by GitHub Actions** from a version tag, never on someone's own computer, and attached to a GitHub release. The release notes are that version's section of the changelog.
7. **Scripts are for servers and developers only.** `install.sh`, PowerShell scripts and `docker compose` belong in the README's server and developer sections, not in Quick start.

## Files and names

Attach these to every GitHub release, with these names. `(Product)` uses the product's short name with no spaces (`Zomello`, `Zoms-HaRM`), and `(version)` is like `0.5.4`.

| Platform | File | Format | What it does |
|---|---|---|---|
| **Windows 10/11** | `(Product)_(version)_x64-setup.exe` | NSIS or Inno Setup installer | Per-user install into `%LOCALAPPDATA%\Programs\(Product)`. Start Menu entry, optional desktop shortcut, entry in **Settings > Apps** with uninstall. Last page: **Run (Product)**, ticked. |
| **Linux (Ubuntu, Mint, Debian)** | `(product)_(version)_amd64.deb` | Debian package | Opens in the software installer. Menu entry and icon; dependencies come from the system's own packages. |
| **Linux (Fedora, openSUSE)** | `(product)-(version)-1.x86_64.rpm` | RPM package | The same, for RPM systems. |
| **Linux (any)** | `(Product)_(version)_amd64.AppImage` | AppImage | One file that runs without installing (right-click > Properties > allow running). |
| **Android** | `(Product).apk` until it's in Google Play | APK | Allow installing from the browser when asked. |
| **macOS** (when there is one) | `(Product)_(version)_universal.dmg` | Disk image | Drag to Applications. |
| **Server** | `(product)-server-(os)-(arch)` plus a Docker image | One program | See [Servers](#servers). |
| **Microsoft Store** (optional) | `(Product)_(version).msix` | MSIX | Built by the same workflow, uploaded by hand. |

Every installer uses the product's icon (from `branding/`), its full name ("Zom's HaRM", not "harm"), **ZomBeatz Media** as the publisher, and the same version number as the app's About page. All the version numbers come from one place in the code.

## What the person sees

1. Downloads the file for their device from the README's Quick start table.
2. **Windows:** opens it. Until the installers are code-signed, Windows shows *"Windows protected your PC"*: the README and guide say to click **More info > Run anyway**, and that the file is built by GitHub from the public code. Then they click **Install**, then **Finish** with **Run (Product)** ticked.
   **Linux:** opens the `.deb` or `.rpm` in the software installer and clicks **Install**.
3. The app opens to its first-run screen (a welcome guide, a setup step or a demo board). Nothing else to do.

Desktop apps that run a local web server (like HaRM) open their own window, or the person's browser, by themselves. The person never types `127.0.0.1:8077`.

## Where things go

| | Windows | Linux |
|---|---|---|
| The app | `%LOCALAPPDATA%\Programs\(Product)` | `/usr/lib/(product)` or `/opt/(product)` (package), or inside the AppImage |
| The person's data | `%APPDATA%\com.zombeatz.(product)` | `~/.local/share/com.zombeatz.(product)` |
| Backups | a `backups` folder inside the data folder | the same |

Data never goes inside the app's folder, so updating or reinstalling can't touch it. The guide's "Where is my data?" answer and the README's Questions name these exact folders.

## Servers

A server version (Zomello Server, HaRM on a home server) gives two ways in, both one step:

- **Docker:** download the compose file and `docker compose up -d`. The image is built and published by GitHub Actions (`ghcr.io/zombeatz/(product)-server`), so nobody has to build it.
- **A single program** for Windows, Linux and macOS. Opening it starts the server and opens the browser to set up the admin account. Running it with `install` makes it start with the computer, and `uninstall` undoes that (data stays).

A server needs no extra installs, and it sets up its own https (its own certificate authority, offered to devices from a page on the server).

## Building them

- A `.github/workflows/build.yml` runs on every version tag (`v0.5.4`) and on demand. One job per platform (`windows-latest`, `ubuntu-22.04`), each uploading its files to a **draft** release. A person checks the draft, pastes the changelog section and publishes it.
- **Tauri apps** (Zomello): `bundle.targets` is `["nsis", "deb", "rpm", "appimage"]` and `windows.nsis.installMode` is `"currentUser"`.
- **Python apps** (HaRM): freeze the app with **PyInstaller** into a folder with Python, the libraries and the Qt launcher. Then wrap that folder per platform:
  - Windows: **Inno Setup** with `PrivilegesRequired=lowest`.
  - Linux: **nfpm** for the `.deb` and `.rpm`, and **appimagetool** for the AppImage.

  The frozen app looks for its data folder in the same places as above.
- Tests run before packaging. A failed test means no release files.

## Before a release

- [ ] Install each file on a clean machine or VM (Windows 11, Ubuntu LTS, Fedora) and open the app.
- [ ] Install over the previous version: data and settings are still there.
- [ ] Uninstall: the app is gone from the menu and Settings > Apps, and the data folder is still there.
- [ ] The README's Quick start table matches the real file names.
