---
description: "Run Zom's MRP Server with Docker so a team signs in to one plan from their browsers, with https from Caddy and a copy every day."
---

# Setting up a server

Zom's MRP Server keeps one plan for a team. Everyone signs in from their own browser, on a computer or a phone, and changes others make show up on their own. This page sets it up with Docker and https.

## What you need

- A Linux server or VPS with Docker and Docker Compose.
- A domain name pointed at it (an A record), like `mrp.example.com`.
- Ports 80 and 443 open to it, so Caddy can get an https certificate.

## Setting it up

1. Get the files: `docker-compose.yml` and `deploy/Caddyfile` from [the repository](https://github.com/ZomBeatz/Zoms_MRP).
2. In `deploy/Caddyfile`, replace `mrp.example.com` with your domain.
3. Start it, in the folder with `docker-compose.yml`:

   ```bash
   docker compose up -d
   ```

4. Open `https://your-domain` right away and create the admin account: **Set up this server**, with your name, a username and a password of 10 characters or more.

::: danger Create the admin right away
Until there's an admin, whoever opens the page first can make one. Open it and set it up as soon as it's running.
:::

Caddy gets and renews the https certificate by itself. Zom's MRP itself isn't reachable except through Caddy.

## What's in it

The compose file runs two containers:

| Container | Does |
|---|---|
| `mrp` | Zom's MRP Server, from `ghcr.io/zombeatz/zoms-mrp-server`. Its data is in the `mrp-data` volume. |
| `mrp-caddy` | Caddy, for https on ports 80 and 443 |

## Server settings

Set these as environment variables on the `mrp` container in `docker-compose.yml`:

| Variable | What it does |
|---|---|
| `MRP_NAME` | The name on the sign-in page, like "Northern Rotor scheduling" |
| `MRP_TRUST_PROXY` | `on` when a proxy in front of it handles https (on in the compose file) |
| `MRP_PORT` | The port it listens on (7430) |
| `MRP_BIND` | The address it listens on (0.0.0.0) |
| `MRP_DATA` | The data folder (`/data` in Docker) |
| `MRP_TLS` | `off` behind a proxy, or `files` to use your own certificate |
| `MRP_TLS_CERT`, `MRP_TLS_KEY` | The PEM files, with `MRP_TLS=files` |

After changing them, run `docker compose up -d` again.

## Updating

In the folder with `docker-compose.yml`:

```bash
docker compose pull && docker compose up -d
```

The plan stays in the `mrp-data` volume. A plan from an older version is converted when the new one opens it.

## Moving a plan onto the server

1. In the desktop app, **Settings > Your data > Save a backup**.
2. Sign in to the server as an admin and use **Settings > The plan > Restore a backup…**.

## Related

- [People and roles](./server-people): adding the team.
- [Backups and security](./server-backups): copies, the activity log and what's protected.
- [A team on a server](./scenarios/team-server): the whole setup, step by step.
- [Phones and tablets](./phones-and-tablets): using it on a phone.
