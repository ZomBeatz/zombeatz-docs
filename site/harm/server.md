---
description: "Run Zom's HaRM on a home server, NAS or Raspberry Pi with Docker, or as a Linux service that starts at boot."
---

# Setting up a server

Run HaRM on an always-on machine (a home server, NAS, mini PC or Raspberry Pi) so every computer and phone in the house can use it in a browser. There are two ways. Both keep everything in one `data` folder and set up HTTPS by themselves.

::: danger Keep it on your home network
Don't forward port 8077 (or any port HaRM uses) to the internet: HaRM holds the logins to your whole network. To use it away from home, connect to your home network with a VPN, such as your router's VPN, and use HaRM as usual.
:::

## Docker

Works anywhere Docker runs: Linux servers, Unraid, TrueNAS SCALE, Synology with Container Manager, Raspberry Pi OS (64-bit) and others. The image is built by GitHub for PCs (amd64) and Raspberry Pis (arm64), so there's nothing to build.

1. Make a folder for HaRM on the server, and download [`docker-compose.yml`](https://github.com/ZomBeatz/Zoms-HaRM/raw/main/docker-compose.yml) into it.
2. Open it and set **HARM_CERT_NAMES** to the address your phones will use: the server's LAN IP and/or hostname, for example `"192.168.1.50 harm.lan"`. Set **TZ** to your time zone, for example `"Europe/London"`.
3. Start it, in that folder:
   ```bash
   docker compose up -d
   ```
4. Open `https://<that address>:8077`, continue past the certificate warning once, and create your master password.
5. Connect your phones with **Settings > Phones & tablets** in HaRM: [Phones and tablets](./phones-and-tablets).

| To | Run |
|---|---|
| See the log | `docker logs -f zoms-harm` |
| Stop or start | `docker compose stop` · `docker compose start` |
| Update to the newest version | `docker compose pull && docker compose up -d` |
| Remove it (the data stays in `./data`) | `docker compose down` |

Docker shows HaRM as **healthy** once it answers. All settings: [Server settings](./server-settings).

### Network scan and MAC addresses

Discover's **Network scan** only sees your network with host networking. In `docker-compose.yml`, remove the `ports:` lines and uncomment `network_mode: host`, then `docker compose up -d`. The router list, UniFi and Proxmox imports work either way.

## Linux service (no Docker)

On a Linux server without Docker, HaRM runs from its source archive as a system service that starts at boot and restarts if it stops.

On the server (it asks for your sudo password once):

```bash
tar xzf zoms-harm-(version).tar.gz && cd zoms-harm-(version)
./scripts/install-server.sh --names "192.168.1.50 harm.lan"
```

Leave out `--names` to use the server's hostname and IPs. The script installs HaRM's parts, creates the certificate and adds the `zoms-harm` service.

| To | Run |
|---|---|
| See the log | `journalctl -u zoms-harm -f` |
| Stop or start | `sudo systemctl stop zoms-harm` · `sudo systemctl start zoms-harm` |
| Use another port | `./scripts/install-server.sh --port 8443` |
| See what it would do, without doing it | `./scripts/install-server.sh --print` |
| Remove the service (the data stays) | `./scripts/install-server.sh --uninstall` |

**Updating:** extract the new release over the old folder (keep `data`), run `./scripts/install-server.sh` again, then `sudo systemctl restart zoms-harm`.

If the server's firewall is on, allow the port from your home network, for example:

```bash
sudo ufw allow from 192.168.1.0/24 to any port 8077 proto tcp
```

## Which computer?

| | Good for |
|---|---|
| A NAS or home server that's always on | The whole house uses HaRM, from any computer or phone, any time |
| A Raspberry Pi 4 or 5 (64-bit) | A small, quiet, always-on HaRM |
| A desktop PC | Use the [installer](./installing) instead: HaRM runs while the PC is on, with the control panel |

## Related

- [https and certificates](./server-https): the address phones use, and changing it later
- [Server settings](./server-settings): every setting in `docker-compose.yml`
- [Backups, recovery and security](./server-backups): keeping a server's data safe
- [An always-on home server](./scenarios/home-server): the whole setup, step by step
