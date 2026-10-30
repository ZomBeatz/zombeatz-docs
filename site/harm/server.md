---
description: "Run Zom's HaRM on a home server or NAS with Docker, or as a Linux service that starts at boot."
---

# Running on a server

Run HaRM on an always-on machine (home server, NAS, mini PC) so every computer and phone in the house can use it. There are two ways; both keep everything in one `data` folder and set up HTTPS by themselves.

## Docker

Works anywhere Docker runs: Linux servers, Unraid, TrueNAS SCALE, Synology with Container Manager, and others.

1. Extract the release on the server.
2. Open `docker-compose.yml` and set **HARM_CERT_NAMES** to the address your phones will use: the server's LAN IP and/or hostname, for example `"192.168.1.50 harm.lan"`. Set **TZ** to your time zone.
3. Start it:
   ```bash
   docker compose up -d --build
   ```
4. Open `https://<that address>:8077` and create your master password.
5. Connect your phones with **Settings > Phone app** in HaRM: [Phones and tablets](./phones-and-tablets).

| Setting in docker-compose.yml | What it does |
|---|---|
| `HARM_CERT_NAMES` | Names and IPs the HTTPS certificate covers. Change it and run `docker compose up -d`; phones keep trusting HaRM. |
| `HARM_IDLE_MINUTES` | Minutes of inactivity before HaRM locks (default 30). |
| `HARM_BACKUP_KEEP` | Daily backups kept in `./data/backups` (default 14). |
| `TZ` | Your time zone, for backup and log times. |
| `HARM_TLS: "0"` | Plain HTTP. Only behind your own HTTPS reverse proxy (Caddy, Traefik, Nginx Proxy Manager). |

- **Your data** (database, certificates, backups) is in `./data` next to the compose file.
- **Network scan and MAC addresses** in Discover only see your network with host networking: in `docker-compose.yml`, remove `ports:` and uncomment `network_mode: host`. The router list, UniFi and Proxmox imports work either way.
- **Health:** Docker shows HaRM as healthy once it answers. `docker logs zoms-harm` shows its log.
- **Updating:** extract the new release over the old one (keep `data`), then `docker compose up -d --build`.

## Linux service (no Docker)

```bash
./scripts/install-server.sh --names "192.168.1.50 harm.lan"
```

This installs HaRM in its folder, creates the certificate, and adds a system service that starts at boot and restarts if it stops. It asks for your sudo password once. Leave out `--names` to use the server's hostname and IPs.

| To | Run |
|---|---|
| See the log | `journalctl -u zoms-harm -f` |
| Stop or start | `sudo systemctl stop zoms-harm` · `sudo systemctl start zoms-harm` |
| Use another port | `./scripts/install-server.sh --port 8443` |
| Remove the service | `./scripts/install-server.sh --uninstall` (your data stays) |

If the server's firewall is on, allow the port from your home network, for example `sudo ufw allow from 192.168.1.0/24 to any port 8077 proto tcp`.

::: warning Keep it at home
HaRM is made for your home network. Don't forward its port to the internet. To reach it away from home, use a VPN into your network, such as your router's VPN.
:::

## Related

- [Phones and tablets](./phones-and-tablets)
- [Backups, updates and uninstalling](./backups-and-updates)
- [Security](./security)
