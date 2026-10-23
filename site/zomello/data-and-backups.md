# Data and backups

## Where your boards are

| Device | Folder |
|---|---|
| Windows | `%APPDATA%\com.zombeatz.zomello` |
| Linux | `~/.local/share/com.zombeatz.zomello` |
| Android, iPhone, iPad | Inside the app (removed if you uninstall) |

The folder holds `zomello.json` (your boards), `attachments/` (files on cards) and `backups/`.

## Automatic backups

On a computer, Zomello saves a backup copy every 30 minutes while you work and keeps the last 30. **Settings > Data & backups > Automatic backups** lists them; **Restore** brings one back.

## Export and restore everything

- **Export JSON**: all boards and settings in one file.
- **Restore from Zomello JSON**: replace everything with an export (asks first).
- **Clean up unused files**: deletes attached files no card uses anymore.

## Before uninstalling a phone app

Everything on the phone is deleted with the app. Move the boards you want to your computer first ([Moving boards between devices](./moving-boards)), or save them as [board files](./board-files).
