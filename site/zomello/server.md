---
description: "Zomello Server is for a team or family sharing boards. It runs on one always-on computer (a home server, NAS, Raspberry Pi or VPS), and everyone signs in…"
---
# Setting up a Zomello Server

Zomello Server is for a team or family sharing boards. It runs on one always-on computer (a home server, NAS, Raspberry Pi or VPS), and everyone signs in from a browser, their phone or the Zomello app.

- Everyone gets their own account and boards.
- Boards are shared by invitation, and changes show up live for everyone.
- Admins add people, reset passwords and manage boards on the **Admin** page.
- A backup of the database is made every day.

Two ways to run it: **Docker** (recommended for servers and NAS boxes) or **a single program** on Windows, Linux or macOS.

## With Docker

1. **Install Docker** if the machine doesn't have it. On Debian, Ubuntu or Raspberry Pi OS: `curl -fsSL https://get.docker.com | sh`. Unraid, TrueNAS and Synology have Docker in their app centers.
2. **Get the setup file** and start it:

   ```bash
   mkdir ~/zomello && cd ~/zomello
   curl -O https://raw.githubusercontent.com/ZomBeatz/Zomello/main/deploy/docker-compose.yml
   docker compose up -d
   ```

3. **Open** `http://<server-address>:7311` in a browser and create the **admin account** (that's you).

The image works on normal PCs and on Raspberry Pi 4/5 (64-bit), is about 46 MB, and runs without administrator rights inside the container.

**Updating** to a new version:

```bash
cd ~/zomello && docker compose pull && docker compose up -d
```

Your data lives in the `zomello-data` volume, which updates never touch.

## Without Docker (Windows, Linux, macOS)

Zomello Server is also a single program, like Plex Media Server. Download the one for your computer from the [latest release](https://github.com/ZomBeatz/Zomello/releases/latest):

| Computer | File |
|---|---|
| Windows | `zomello-server-windows-x64.exe` |
| Linux PC, NAS or VPS | `zomello-server-linux-x64` |
| Raspberry Pi 4/5 (64-bit OS) | `zomello-server-linux-arm64` |
| Mac with Apple Silicon (M1 and newer) | `zomello-server-macos-apple-silicon` |
| Mac with Intel | `zomello-server-macos-intel` |

1. **Run it.**
   - **Windows:** double-click it. If SmartScreen warns, choose **More info > Run anyway**.
   - **Linux and Mac:** open a terminal in its folder, run `chmod +x zomello-server-*`, then run the file (for example `./zomello-server-linux-x64`). A Mac may refuse an unsigned download the first time: right-click it > **Open**, or allow it in **System Settings > Privacy & Security**.
2. **First run:** your browser opens so you can create the admin account. If it doesn't, go to `http://localhost:7311`.
3. **Start it with the computer** (optional): run it once more with `install`:
   - **Windows:** from an **administrator** Command Prompt: `zomello-server-windows-x64.exe install`. It adds a startup task that runs before anyone signs in, and a firewall rule for port 7311.
   - **Mac:** `./zomello-server-macos-apple-silicon install` adds a LaunchAgent that starts when you sign in.
   - **Linux:** `./zomello-server-linux-x64 install` adds a systemd service. With `sudo` it's system-wide; without, it's for your user, and `sudo loginctl enable-linger $USER` keeps it running while you're signed out.

   `uninstall` undoes this. Your data stays.

**Where it keeps everything:**

| System | Data folder |
|---|---|
| Windows | `C:\ProgramData\Zomello Server` |
| Linux | `~/.local/share/zomello-server` (or `/var/lib/zomello-server` when run as root) |
| macOS | `~/Library/Application Support/Zomello Server` |

**Updating:** download the new file, stop the old one, and run the new one in its place (run `install` again if you use it). Your data folder stays.

::: warning Same computer as the Zomello desktop app?
The desktop app's phone and tablet access also uses port 7311. To run both on one computer, give the server another port: in its `settings.env`, set `ZOMELLO_PORT=7312`. See [Server settings](./server-settings).
:::

## Connect to it

- **In a browser:** `http://<server-address>:7311`, then sign in.
- **Zomello on a computer:** **Settings > Servers > Add server** (or **Find servers on this network**). The server opens in its own window.
- **Zomello on a phone or tablet:** add it the same way. A server with an **https** address gets its own heading in the menu and opens right in the app; a plain `http://` server opens in the phone's browser instead. [Turning on https](./server-https) takes a few minutes.

## Next

- [Turning on https](./server-https), for phones and for access from anywhere
- [People and sharing](./server-people): accounts, shared boards and the Admin page
- [Server settings](./server-settings)
- [Backups, recovery and security](./server-backups)
- Scenarios: [a family or roommates](./scenarios/family-server), [a small team](./scenarios/small-team)
