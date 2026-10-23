# A family or roommates

Everyone gets their own account and boards, and shared boards (chores, groceries, trips) update live for everyone. It runs on one always-on machine at home: a spare PC, a NAS (Synology, Unraid, TrueNAS) or a Raspberry Pi 4/5.

## 1. Start the server (Docker)

On the always-on machine, with Docker installed:

```bash
mkdir ~/zomello && cd ~/zomello
curl -O https://raw.githubusercontent.com/ZomBeatz/Zomello/main/deploy/docker-compose.yml
docker compose up -d
```

No Docker? Download `zomello-server` for Windows, Linux or macOS from the [latest release](https://github.com/ZomBeatz/Zomello/releases/latest), run it, then run it once more with `install` so it starts with the machine.

## 2. Make the admin account

Open `http://<that-machine's-address>:7311` in a browser and create the admin account (that's you).

## 3. Add everyone

**Admin > People > Add a person** for each family member. Zomello suggests a password and gives you sign-in details to send them. They can change their password later in **Settings > Account**.

## 4. Get everyone connected

- **Phones and computers with the Zomello app:** **Settings > Servers > Add server** (or **Find servers on this network**), then sign in.
- **In a browser:** the server's address. To install it on a phone as an app, the server needs https: the simplest is [Tailscale](./away-from-home) (`tailscale serve --bg 7311`), or the server's own certificate (`ZOMELLO_TLS=self`; the sign-in page then offers the certificate). Options are in the [server guide](https://github.com/ZomBeatz/Zomello/blob/main/docs/server.md).

## 5. Share the family boards

1. Make a board, for example "Chores".
2. **⋯ > Share…** and invite each person by username.
3. They accept on their **Home** page.

Then set up [Household chores](./household-chores) on it.

## Good to know

- Each person's own boards stay private unless they share them.
- The server keeps a backup every day; admins can also **Download a backup now** on the Admin page.
- The Zomello app keeps working with its own boards on each device too. The server is just another place in the menu.

More: [Zomello Server: people and sharing](../server-people).
