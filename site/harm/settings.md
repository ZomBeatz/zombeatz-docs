---
description: "Every setting in Zom's HaRM, and the environment settings for servers."
---

# Settings

Everything under **Settings**, plus the desktop app's settings and the options for servers.

![Settings](/img/harm/settings.png)

## In HaRM: Settings

| Section | What it does |
|---|---|
| **Appearance** | Light or dark, or match your system (dark is the default). Saved per device, so your phone and computer can differ. There may be another look to find if you click the logo enough. |
| **AI Assist** | Which AI service AI Assist sends photos to, its API key, model, address (for local services) and whether it may search the web. Off by default. See [AI Assist](./ai-assist). |
| **Master password** | Change it. Your stored logins stay intact, and every other signed-in device is signed out. |
| **Two-factor authentication** | Require a code from an authenticator app (Aegis, 2FAS, Bitwarden, 1Password, Google Authenticator…) when unlocking. |
| **Recovery code** | Make a new one if you lost the old one. The old code stops working right away. |
| **Phone & scanning** | Whether this connection is secure, whether the camera and server-side barcode and text reading are available, and the address to use. |
| **Phone app** | QR codes and steps to connect a phone. See [Phones and tablets](./phones-and-tablets). |
| **Session** | How long HaRM waits before locking (30 minutes idle), and **Lock** to lock now. |
| **Backup** | **Download backup (.db)**: the whole database. Logins inside stay encrypted. |
| **Automatic backups** | The latest daily snapshots and where they're kept. |
| **Export CSV** | A spreadsheet of each list: devices, parts, racks, locations, networks, interfaces, services, cables, slots. Logins are never included. |
| **Guides** | The setup guide and Help & guide. |

The light look:

![HaRM in light mode](/img/harm/home-light.png)

## In the desktop app

See [Desktop app](./desktop-app#settings): share on the network, HTTPS, port, start at login, keep running in the tray.

## For servers

Environment settings, set in `docker-compose.yml` or before `./run.sh`:

| Setting | Default | What it does |
|---|---|---|
| `HARM_HOST` | `127.0.0.1` | `0.0.0.0` shares HaRM on your network (`run.sh` only; Docker always shares). |
| `HARM_PORT` | `8077` | The port. |
| `HARM_TLS` | `1` in Docker | `1` serves HTTPS with HaRM's own certificate. |
| `HARM_CERT_NAMES` | | Names and IPs the certificate covers (Docker). |
| `HARM_IDLE_MINUTES` | `30` | Minutes idle before HaRM locks. |
| `HARM_MAX_SESSION_HOURS` | `12` | Longest a sign-in lasts. |
| `HARM_AUTO_BACKUP` | `1` | `0` turns daily backups off. |
| `HARM_BACKUP_KEEP` | `14` | Daily backups kept. |
| `HARM_DB` | `data/harm.db` | Where the database lives (the `data` folder sits next to it). |
| `HARM_TRUSTED_PROXIES` | `127.0.0.1` | Reverse proxies allowed to pass on visitors' addresses. |

## Related

- [Security](./security)
- [Running on a server](./server)
