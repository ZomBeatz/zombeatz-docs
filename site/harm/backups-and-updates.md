---
description: "Backing up and restoring Zom's HaRM, moving it to another computer, updating to a new version, and uninstalling."
---

# Backups, updates and uninstalling

All of HaRM's data lives in one folder, `data`, next to the app: the database, the HTTPS certificates, and the daily backups. Keep that folder safe and you can always get back to where you were.

## Backups

- **Automatic:** HaRM saves a snapshot every day in `data/backups/` and keeps the last 14 (change it with `HARM_BACKUP_KEEP`).
- **Any time:** **Settings > Backup > Download backup (.db)**.
- Stored logins stay encrypted inside every backup; they open only with your master password or recovery code.
- Copy `data/backups` (or a downloaded backup) to another disk or computer now and then. A backup on the same disk doesn't help if the disk dies.

## Restoring a backup

1. Stop HaRM (desktop app: **Stop**; Docker: `docker compose stop`; service: `sudo systemctl stop zoms-harm`).
2. In the `data` folder, rename `harm.db` to `harm-old.db` (and delete `harm.db-wal` and `harm.db-shm` if they're there).
3. Copy the backup into the `data` folder and name it `harm.db`.
4. Start HaRM and unlock with the master password you had when the backup was made.

## Moving to another computer

1. Install HaRM on the new computer, but don't start it yet.
2. Stop HaRM on the old one and copy its whole `data` folder into the new installation's folder.
3. Start HaRM. Your inventory, logins and master password come along, and so do the certificates, so phones keep trusting HaRM. If the new computer has a different IP address, use **Fix certificate** in the desktop app (or update `HARM_CERT_NAMES` on a server).

## Updating

**Desktop (Windows and Linux):**

1. In the desktop app press **Stop**, then right-click the tray icon > **Quit**.
2. Extract the new version over your HaRM folder, replacing the files. Your `data` folder isn't in the download, so it's kept.
3. Run the installer again (**Install HaRM.cmd** or `./install.sh`) to pick up new parts.
4. Start HaRM. Open browser tabs and the phone app show a **Reload** bar.

**Docker:** extract the new release over the old one (keep `data`), then `docker compose up -d --build`.

**Linux service:** extract the new release over the old one, then `./install.sh --no-menu` and `sudo systemctl restart zoms-harm`.

Your database is upgraded automatically the first time the new version starts. A backup first never hurts.

## Uninstalling

- **Windows:** double-click **Uninstall HaRM.cmd** (removes the shortcuts and stops HaRM), then delete the HaRM folder.
- **Linux:** `./scripts/install-desktop-app.sh --uninstall`, then delete the HaRM folder. For the service: `./scripts/install-server.sh --uninstall` first.
- **Docker:** `docker compose down`, then delete the folder.

Back up `data` first if you might want your inventory again.

## Related

- [Security](./security)
- [Settings](./settings)
