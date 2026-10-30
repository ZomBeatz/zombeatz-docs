---
description: "Where Zom's HaRM keeps your data, its daily backups, downloading and restoring a backup, and moving HaRM to another computer."
---

# Data and backups

Where HaRM keeps your data, how it backs itself up, and how to restore a backup or move to another computer. On a server, see also [Backups, recovery and security](./server-backups).

## Where your data is

Everything HaRM knows lives in one folder:

| HaRM installed with | Folder |
|---|---|
| The Windows installer | `%APPDATA%\com.zombeatz.zoms-harm` |
| The Linux `.deb`, `.rpm` or AppImage | `~/.local/share/com.zombeatz.zoms-harm` |
| Docker | `./data` next to `docker-compose.yml` |
| The Linux service, or from source | the `data` folder next to HaRM |

Inside it:

| | What it is |
|---|---|
| `harm.db` | The database: every place, device, part, network, note and (encrypted) login |
| `backups/` | The daily backups |
| `tls/` | HaRM's certificate authority and HTTPS certificate. Phones trust HaRM because of these. |
| `alerts.key` | The key for [alert](./alerts) passwords. Not in backups: after restoring on another computer, enter them again. |
| `logs/` | The server log the control panel shows |

The app itself is somewhere else, so updating or reinstalling never touches this folder.

## Automatic backups

HaRM saves a copy of the database every day in `backups/` and keeps the last 14 (on a server, change that with `HARM_BACKUP_KEEP`). **Settings > Data & backups** lists the newest ones.

::: info What's in a backup
Everything in the database, including your saved logins. They stay encrypted inside the backup and only open with your master password or recovery code, so a copied backup doesn't give them away.
:::

A backup on the same disk doesn't help if the disk dies. Copy the `backups` folder (or a downloaded backup) to another disk or computer now and then.

## Downloading a backup

**Settings > Data & backups > Download backup (.db)** saves the whole database to your Downloads, whenever you like. It's the same kind of file as the daily ones.

**Export CSV** in the same place gives spreadsheets of each list instead: devices, parts, racks, locations, networks, interfaces, services, cables and slots. The logins file has names and usernames only, never passwords. More ways to get data out: [Export and share](./export-and-share).

## Restoring a backup

1. Stop HaRM: **Stop** in the control panel (Docker: `docker compose stop`; service: `sudo systemctl stop zoms-harm`).
2. In the data folder, rename `harm.db` to `harm-old.db`. Delete `harm.db-wal` and `harm.db-shm` if they're there.
3. Copy the backup into the data folder and name it `harm.db`.
4. Start HaRM and unlock with the master password you had when the backup was made.

A backup from an older version is upgraded by itself when HaRM starts.

## Moving to another computer

1. Install HaRM on the new computer and open it, but don't press **Start**.
2. On the old computer, press **Stop**, then copy its whole data folder.
3. On the new computer, paste it over the new data folder (the table above says where).
4. Press **Start**. Your inventory, logins and master password come along, and so do the certificates, so phones keep trusting HaRM.
5. If the new computer has a different address, the control panel offers **Fix certificate**. On a server, update `HARM_CERT_NAMES`.

### From an older HaRM folder

Before version 0.3.2, HaRM kept its data in a `data` folder next to the app. The installed app's **Bring in data from an older HaRM…** button copies it over for you. See [Installing and updating](./installing#used-harm-before-version-0-3-2).

## Related

- [Installing and updating](./installing): updating keeps this folder as it is
- [Backups, recovery and security](./server-backups): the same for a server, plus recovery
- [Security and privacy](./security): how logins are protected inside the database
- [Export and share](./export-and-share): spreadsheets, text and sheets for other people
