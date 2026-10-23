# Zomello Server

Zomello Server is for a team or family sharing boards. It runs on one always-on computer (a home server, NAS, Raspberry Pi or VPS), and everyone signs in from a browser, their phone or the Zomello app.

- Everyone gets their own account and boards.
- Boards are shared by invitation, and changes show up live for everyone.
- Admins add people, reset passwords and manage boards on the **Admin** page.
- A backup is made every day.

## With Docker

```bash
curl -O https://raw.githubusercontent.com/ZomBeatz/Zomello/main/deploy/docker-compose.yml
docker compose up -d
```

Open `http://<your-server>:7311` and create the admin account. The image works on normal PCs and on Raspberry Pi 4/5.

## Without Docker

Download `zomello-server-…` for Windows, Linux or macOS from the [latest release](https://github.com/ZomBeatz/Zomello/releases/latest) and run it. Your browser opens to create the admin account. Run it once with `install` to start it with the computer (an administrator Command Prompt on Windows).

## In the Zomello app

**Settings > Servers > Add server** (or **Find servers on this network**). The server then has its own heading in the menu.

## https, backups and more

Phones need https to install the server as an app. Options (Tailscale, a reverse proxy with your own domain, or the server's own certificate), all settings, backups and password recovery are in the full server guide: [docs/server.md on GitHub](https://github.com/ZomBeatz/Zomello/blob/main/docs/server.md).

## Related

- [People and sharing](./server-people): accounts, shared boards and the Admin page
- [Scenario: a family or roommates](./scenarios/family-server)
- [Scenario: a small team](./scenarios/small-team)
