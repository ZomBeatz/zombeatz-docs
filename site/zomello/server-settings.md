# Server settings

Settings are environment variables.

- **With Docker:** in `docker-compose.yml` under `environment:`, then `docker compose up -d`.
- **Without Docker:** in `settings.env` inside the [data folder](./server#without-docker-windows-linux-macos). Zomello creates the file with every setting listed; remove the `#` in front of the ones you want and restart. The server prints the file's location when it starts. (Environment variables win if both are set.)

| Setting | Default | What it does |
|---|---|---|
| `ZOMELLO_PORT` | `7311` | The port it listens on |
| `ZOMELLO_BIND` | `0.0.0.0` | Which address it listens on. `127.0.0.1` when a proxy on the same machine is in front |
| `ZOMELLO_DATA` | the system's data folder (`/data` in Docker) | Where everything is stored |
| `ZOMELLO_TLS` | `off` | https: `off`, `self` or `files` ([Turning on https](./server-https)) |
| `ZOMELLO_HOSTS` | | Extra names or addresses for the `self` certificate, e.g. `zomello.lan,192.168.1.50` |
| `ZOMELLO_TLS_CERT`, `ZOMELLO_TLS_KEY` | | Your certificate and key files, for `files` |
| `ZOMELLO_PUBLIC_URL` | | The address people use, shown on the Admin page |
| `ZOMELLO_NAME` | `Zomello on <computer name>` | The name the Zomello app shows when it finds this server on your network |
| `ZOMELLO_DISCOVERY` | `on` (`off` in Docker) | Announce the server on your network so **Find servers on this network** lists it |

## Finding the server on your network (Docker)

Network announcements don't get out of a normal Docker container. To use **Find servers on this network** with Docker, in `docker-compose.yml`:

1. Uncomment `network_mode: host` and remove the `ports:` lines.
2. Uncomment `ZOMELLO_DISCOVERY: "on"` (and optionally `ZOMELLO_NAME`).
3. `docker compose up -d`.

Otherwise just add the server by its address.
