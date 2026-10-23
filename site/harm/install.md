---
description: "How to install Zom's HaRM on Windows or Linux, or run it on a server with Docker or as a Linux service."
---

# Installing HaRM


## Install on Windows

You need Windows 10 or 11 and about 400 MB of disk space. No administrator rights are needed.

1. **Extract the zip somewhere in your user folder**, for example `C:\Users\you\ZomsHaRM`.
   Don't use *Program Files*: HaRM keeps its data next to the app, and Windows doesn't allow that there.
2. Open the folder and **double-click `Install HaRM.cmd`**.
   - If Windows shows *"Windows protected your PC"*, click **More info › Run anyway**. That warning appears for any script downloaded from the internet.
   - If Python isn't installed, the installer offers to install it for you (using Windows' own `winget`). Otherwise, get it from [python.org](https://www.python.org/downloads/) and tick **"Add python.exe to PATH"**.
3. Wait a few minutes while it downloads HaRM's parts (about 150 MB the first time).
4. When it finishes there's a **Zom's HaRM** icon in the Start Menu and on the Desktop.

## Install on Linux

You need Python 3.10 or newer (most distributions have it already).

```bash
tar xzf zoms-harm-1.1.0.tar.gz
cd zoms-harm-1.1.0
./install.sh
```

This sets HaRM up inside its folder and adds **Zom's HaRM** to your app menu (KDE, GNOME, and others). Nothing needs root.

- On Debian/Ubuntu, if it says the venv module is missing: `sudo apt install python3-venv`
- Optional extras: `tesseract` (reads printed text on labels), `zbar` (barcode reading on the server), and `qrencode`. Install them with your package manager if you want them.
- Prefer the terminal or a headless server? Use `./install.sh --no-menu`, then start HaRM with `HARM_HOST=0.0.0.0 HARM_TLS=1 ./run.sh`. There's also a `Dockerfile`.

## Run on a server (Docker or Linux service)

Want HaRM always on, on a home server, NAS or mini PC? There are two ways. Both keep everything in a `data` folder you can back up, and both set up HTTPS by themselves.

### Docker (any OS with Docker: Linux servers, Unraid, TrueNAS SCALE, Synology with Container Manager…)

1. Extract the release on the server.
2. Open `docker-compose.yml` and set `HARM_CERT_NAMES` to the address phones will use: the server's LAN IP and/or hostname, e.g. `"192.168.1.50 harm.lan"`. Set `TZ` to your time zone.
3. Start it:
   ```bash
   docker compose up -d --build
   ```
4. Open `https://<that address>:8077` and create your master password.

- **Data** (database, certificates, daily backups) is in `./data` next to the compose file.
- **Changing the address** later: edit `HARM_CERT_NAMES` and run `docker compose up -d`. The certificate is re-issued, and phones keep trusting it.
- **Updating:** extract the new release over the old one (keep `data`), then `docker compose up -d --build`.
- **Network discovery** (scan / MAC addresses) needs host networking. In `docker-compose.yml`, remove `ports:` and uncomment `network_mode: host`. The UniFi, Proxmox and router-list imports work either way.
- **Behind your own reverse proxy** (Caddy, Traefik, Nginx Proxy Manager)? Set `HARM_TLS: "0"` and let the proxy handle HTTPS.

### Linux service (no Docker)

```bash
./scripts/install-server.sh --names "192.168.1.50 harm.lan"
```

This sets HaRM up in its folder, creates the certificate, and installs a system service that starts at boot and restarts if it stops. It asks for your sudo password once.

- **Logs:** `journalctl -u zoms-harm -f`
- **Stop / start:** `sudo systemctl stop zoms-harm` / `sudo systemctl start zoms-harm`
- **Remove:** `./scripts/install-server.sh --uninstall` (your data stays)

Then connect your phone as below: open `https://<address>:8077/harm-ca.crt` on the phone to get the certificate, and follow **Help & Guide › Troubleshooting** in HaRM for the exact steps per phone.

## Related

- [First start and your phone](./first-start)
- [Backups, updates and uninstalling](./backups-and-updates)
