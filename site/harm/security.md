---
description: "How Zom's HaRM protects your logins, secrets and data, and how to keep it safe."
---

# Security and privacy

HaRM holds the keys to your network, so it's built to keep them safe even if someone copies its files.

## Your logins

- Passwords, 2FA secrets and secret notes are encrypted (AES-256-GCM) with a key that only your **master password** or **recovery code** unlocks. A copied database or backup doesn't reveal them.
- HaRM never stores your master password, and can't recover it. Keep the recovery code somewhere safe and separate.
- Secrets are never kept in form drafts, never cached on phones, and never sent to AI services. They only leave HaRM in an [export for Bitwarden](./logins#bitwarden-and-vaultwarden), which asks for your master password again.
- Every time a login is revealed or opened, it's recorded in the **Audit log**.

## Signing in

- HaRM is locked after 30 minutes without use, whenever the HaRM server restarts, and 12 hours after unlocking at the latest. Change both in **Settings > Locking and security**. **Lock now** (at the bottom of the menu, and in **Settings > Locking and security**) locks it straight away.
- The lock screen shows the wordmark, one password field and **Unlock**.
- Repeated wrong passwords slow down further tries.
- Optional **two-factor authentication** asks for a code from an authenticator app too ([Settings](./settings)).
- Changing the master password signs out every other device.

## The connection

- HTTPS with HaRM's own certificate authority keeps logins encrypted on your Wi‑Fi.
- Only install HaRM's certificate (`harm-ca.crt`) on **your own** devices. Keep `data/tls/harm-ca.key` private: anyone with that file could impersonate websites to devices that trust it.
- Other tools you connect (UniFi, Proxmox, AI services) use keys stored encrypted in your vault, sent only to the address you entered.
- UniFi consoles and Proxmox use self-signed certificates, which can't be checked against a certificate authority. HaRM remembers each one's certificate the first time it connects, and if it changes, asks before sending the key again, so a look-alike on your network can't catch it. A change is normal after a reinstall or a new certificate.
- Import specs over SSH remembers each machine's SSH key and refuses to connect if it changes unexpectedly.

## Keep it at home

HaRM is made for your home network. Don't forward its port to the internet. To use it away from home, connect to your home network with a VPN (for example your router's VPN) and use HaRM as usual.

## Actions and online checks

- [Actions](./actions) connect with your saved logins, so they only run while HaRM is unlocked. Their results are kept encrypted, like your logins.
- The [terminal in HaRM](./connect#the-terminal-in-harm) only works while HaRM is unlocked, closes when it locks or after 30 minutes without typing, and never stores what you type or see. Turn it off in **Settings > Locking and security**.
- **Change on machine** sends the new password to the machine as input, never on a command line, and checks it signs in afterwards.
- Passwords reach SSH through a helper for that one connection, never on a command line. Extra SSH settings are limited to connection settings, so nothing can make SSH run a program on the HaRM computer.
- The [Status](./status) page only contacts the addresses you've recorded, on your own network.
- [Background checks](./maintenance#background-checks) are off unless you turn them on. They read your machines while HaRM is locked, so the logins they use (and the Proxmox token, if you choose) are encrypted with `background.key` in the data folder, not your master password, and not in backups. Give them [a limited login](./maintenance#background-checks). They only read; updates and restarts always wait for you.
- [Alerts](./alerts) are sent while HaRM is locked, so their secrets (email password, ntfy token, webhook address) are encrypted with a separate key in `alerts.key` in the data folder, not with your master password. Use an app password for email, and a topic name nobody could guess for ntfy.

## The audit log

**Audit log** (under **More**) records every change, sign-in, failed sign-in, login reveal, action run, export, backup and import, with the time and the address it came from.

## Related

- [Logins](./logins): saving and opening logins
- [Data and backups](./data-and-backups): what's in a backup
- [Backups, recovery and security](./server-backups): keeping a server safe
- [Settings](./settings#locking-and-security): locking and 2FA
