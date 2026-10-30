---
description: "Keeping a Zom's HaRM server's data safe: backups, restoring, a forgotten master password, updates and security."
---

# Backups, recovery and security

How to keep a HaRM server's data safe, get it back when something goes wrong, and keep the server itself secure. The same backups exist on a desktop install: [Data and backups](./data-and-backups).

## What to back up

Everything is in the `data` folder (Docker: `./data` next to `docker-compose.yml`):

| | Why it matters |
|---|---|
| `harm.db` | Your whole inventory and the encrypted logins |
| `backups/` | Daily copies of `harm.db`, the last 14 by default |
| `tls/` | The certificate authority your phones trust. Without it, every phone has to trust HaRM again. |

HaRM makes the daily backups by itself. What it can't do is put them on another disk: copy the whole `data` folder to another disk, NAS share or computer now and then, or include it in the server's own backups.

## Restoring

1. Stop HaRM: `docker compose stop` (service: `sudo systemctl stop zoms-harm`).
2. In `data`, rename `harm.db` to `harm-old.db` and delete `harm.db-wal` and `harm.db-shm` if they're there.
3. Copy the backup you want into `data` as `harm.db`.
4. Start HaRM: `docker compose start`, and unlock with the master password you had when that backup was made.

A whole lost server? Set HaRM up again on another machine, put your copy of the `data` folder in place before the first start, and start it. Phones keep trusting it if the address is the same; otherwise update `HARM_CERT_NAMES`.

## A forgotten master password

On the unlock screen, choose **Forgot your password? Use the recovery code**, enter the recovery code you saved at the start, and set a new password.

::: warning Without the password or the recovery code
Saved logins can't be recovered: that's what keeps them safe. The rest of the inventory isn't encrypted, so a backup can still be read with any SQLite tool, but the passwords, 2FA codes and secret notes inside it can't.
:::

Make a new recovery code any time in **Settings > Locking and security > Recovery code**.

## Updating

- **Docker:** `docker compose pull && docker compose up -d`.
- **Linux service:** extract the new release over the old folder, run `./scripts/install-server.sh` again, then `sudo systemctl restart zoms-harm`.

The database is upgraded by itself the first time a new version starts. A backup first never hurts.

## Keeping the server secure

- **Keep it on your home network.** Don't forward its port to the internet; use a VPN to reach it from outside.
- **Turn on 2FA** in **Settings > Locking and security**, so unlocking also needs a code from your phone.
- **Keep the `data` folder private.** It holds `tls/harm-ca.key`, which devices trust.
- **Check the audit log** (**More > Audit log**): every sign-in, failed sign-in, login reveal, export and import, with the time and address.
- **Locking:** HaRM locks after 30 minutes without use and when the server restarts. Change it with `HARM_IDLE_MINUTES`.

More on how logins are protected: [Security and privacy](./security).

## Related

- [Data and backups](./data-and-backups): where the data is and what's in a backup
- [Security and privacy](./security): encryption, locking and the audit log
- [Server settings](./server-settings): backup and locking settings
- [Troubleshooting](./troubleshooting#servers): when a server won't start
