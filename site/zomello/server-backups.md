---
description: "What a Zomello Server stores and where, daily and manual backups, restoring, resetting passwords, and how accounts are kept safe."
---
# Server backups, recovery and security

## What's stored where

Everything is in the data folder (the `zomello-data` volume in Docker, `/data` inside the container):

| Path | What |
|---|---|
| `zomello.db` | Accounts, boards and cards (a SQLite database) |
| `attachments/` | Files attached to cards |
| `backups/` | A copy of the database every day; the last 14 are kept |
| `tls/` | The server's own certificate, if `ZOMELLO_TLS` is `self` |
| `settings.env` | Settings (without Docker) |

## Backups

- **Daily, automatic:** a copy of the database lands in `backups/` every day.
- **Any time:** **Admin > Download a backup now**.
- **Everything, files included:** back up the whole data folder or volume. With Docker:

  ```bash
  docker run --rm -v zomello-data:/data -v "$PWD":/out alpine tar czf /out/zomello-data.tgz -C /data .
  ```

Keep a copy somewhere other than the server (another computer, a USB drive, a cloud drive).

## Restoring

1. Stop Zomello (`docker compose stop`, or stop the program).
2. Put the backup file in the data folder as `zomello.db` (replace the old one).
3. Start Zomello again.

## Forgotten password or locked out

Run these on the server.

| Command | Does |
|---|---|
| `zomello-server reset-password <username>` | Sets a new password (asks for it), turns the account back on and signs it out everywhere |
| `zomello-server create-admin <username>` | Adds a new admin account |

With Docker, put `docker exec -it zomello` in front, e.g. `docker exec -it zomello zomello-server reset-password alex`.

## Security

- Passwords are stored as Argon2 hashes, never as plain text.
- After 5 wrong passwords, signing in pauses for a minute. The answer never reveals whether a username exists.
- Sign-ins end after 60 days without use. Changing a password or turning an account off signs that account out everywhere.
- Requests from other websites are refused.
- Attached files can only be opened by people on a board that uses them.
- Calendar feeds are only fetched from addresses saved on a board.
- Admins can see and manage every board on the server, so only make people admins you trust with everything.
