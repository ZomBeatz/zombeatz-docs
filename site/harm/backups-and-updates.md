---
description: "Backing up Zom's HaRM, moving it to a new computer, updating to a new version, and uninstalling."
---

# Backups, updates and uninstalling


## Backups and moving to a new PC

- HaRM **backs itself up daily** into `data/backups/` and keeps the last 14.
- **Settings › Backup** downloads a copy whenever you want one. Keep a copy on another drive or computer now and then.
- **To move HaRM**, copy the whole `data` folder into the new installation's folder before starting it. That brings your database, certificates (so phones keep trusting it) and backups. Your master password stays the same.

## Updating

1. Stop HaRM: in the control panel press **Stop**, then Quit from the tray.
2. Extract the new version **over** your current HaRM folder, replacing the files. Your `data` folder isn't in the download, so it's kept.
3. Run the installer again (`Install HaRM.cmd` or `./install.sh`) to pick up new parts.
4. Start HaRM. Open browser tabs and the phone app show a **⟳ Reload** banner.

## Uninstalling

- **Windows:** double-click `Uninstall HaRM.cmd` (removes the shortcuts and stops HaRM), then delete the HaRM folder.
- **Linux:** run `./scripts/install-desktop-app.sh --uninstall`, then delete the HaRM folder.

Back up `data/` first if you might want your inventory again.

## Related

- [Security](./security)
