---
description: "Every environment setting for a Zom's HaRM server: address, port, https, locking, backups, the data folder and reverse proxies."
---

# Server settings

The settings a HaRM server reads when it starts, set in `docker-compose.yml` under `environment:` (or before `./run.sh` on a copy run from source). Change one, then run `docker compose up -d` to restart HaRM with it.

Settings you change inside HaRM itself (appearance, the master password, 2FA, AI Assist) are on the [Settings](./settings) page.

## Address and https

| Setting | Default | What it does |
|---|---|---|
| `HARM_CERT_NAMES` | the server's name and IPs | Names and addresses the https certificate covers, separated by spaces. See [https and certificates](./server-https). |
| `HARM_TLS` | `1` in Docker | `1` serves https with HaRM's own certificate. `0` serves plain http, only behind your own https reverse proxy. |
| `HARM_PORT` | `8077` | The port HaRM listens on. In Docker, change the `ports:` line instead. |
| `HARM_HOST` | `127.0.0.1` | `0.0.0.0` shares HaRM on your network (`./run.sh` only; Docker always shares). |
| `HARM_TRUSTED_PROXIES` | `127.0.0.1` | Reverse proxies allowed to pass on visitors' real addresses. |

## Locking

| Setting | Default | What it does |
|---|---|---|
| `HARM_IDLE_MINUTES` | `30` | Minutes without use before HaRM locks. **Settings > Locking and security** shows it. |
| `HARM_MAX_SESSION_HOURS` | `12` | The longest an unlock lasts, even while in use. |

## Data and backups

| Setting | Default | What it does |
|---|---|---|
| `HARM_DATA` | `/data` in Docker | The folder for the database, backups, certificates and logs. |
| `HARM_DB` | `harm.db` in the data folder | The database file, if it should live somewhere else. |
| `HARM_AUTO_BACKUP` | `1` | `0` turns the daily backups off. |
| `HARM_BACKUP_KEEP` | `14` | How many daily backups to keep. |
| `TZ` | `Etc/UTC` | Your time zone, for backup names and log times (for example `Europe/London`). |

## Docker only

| Line in docker-compose.yml | What it does |
|---|---|
| `image: ghcr.io/zombeatz/zoms-harm:latest` | The image GitHub builds. Pin a version with `:0.3.2` instead of `:latest`. |
| `ports: "8077:8077"` | The port on the server (left) and in the container (right). |
| `volumes: ./data:/data` | Where the data folder is on the server. |
| `network_mode: host` | Lets Discover's network scan see your network (remove `ports:` when you use it). |

## Related

- [Setting up a server](./server): Docker and the Linux service
- [https and certificates](./server-https): addresses, phones and reverse proxies
- [Settings](./settings): what you change inside HaRM
