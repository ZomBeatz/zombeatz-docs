---
description: "Where Zomello keeps your boards on each device, how automatic backups work, and how to export, restore or clean up your data."
---
# Data and backups

## Where your boards are

| Device | Folder |
|---|---|
| Windows | `%APPDATA%\com.zombeatz.zomello` |
| Linux | `~/.local/share/com.zombeatz.zomello` |
| Android, iPhone, iPad | Inside the app (removed if you uninstall) |

The folder holds `zomello.json` (your boards), `attachments/` (files on cards) and `backups/`.

## Automatic backups

The Zomello apps (computer, phone and tablet) save a backup copy every 30 minutes while you work and keep the last 30. **Settings > Data & backups > Automatic backups** lists them; **Restore** brings one back.

## Export and restore everything

- **Export JSON**: all boards and settings in one file.
- **Restore from Zomello JSON**: replace everything with an export. It asks first, and **Ctrl Z** undoes it.
- **Clean up unused files**: deletes attached files no card uses anymore.

## Zomello Server

On a server, the data lives in the server's data folder (or Docker volume), with a backup every day; admins can **Download a backup now** on the Admin page. See [Server backups, recovery and security](./server-backups).

## Before uninstalling a phone app

Everything on the phone is deleted with the app. Move the boards you want to your computer first ([Moving boards between devices](./moving-boards)), or save them as [board files](./board-files). With [device backups](./device-backups) turned on, your computer already has a copy to send back after you reinstall.
