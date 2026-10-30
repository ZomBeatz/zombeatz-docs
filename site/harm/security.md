---
description: "How Zom's HaRM protects your logins, secrets and data, and how to keep it safe."
---

# Security

HaRM holds the keys to your network, so it's built to keep them safe even if someone copies its files.

## Your logins

- Passwords, 2FA secrets and secret notes are encrypted (AES-256-GCM) with a key that only your **master password** or **recovery code** unlocks. A copied database or backup doesn't reveal them.
- HaRM never stores your master password, and can't recover it. Keep the recovery code somewhere safe and separate.
- Secrets are never exported, never kept in form drafts, never cached on phones, and never sent to AI services.
- Every time a login is revealed or opened, it's recorded in the **Audit log**.

## Signing in

- HaRM locks after 30 minutes idle, and sign-ins last at most 12 hours.
- Repeated wrong passwords slow down further tries.
- Optional **two-factor authentication** asks for a code from an authenticator app too ([Settings](./settings)).
- Changing the master password signs out every other device.

## The connection

- HTTPS with HaRM's own certificate authority keeps logins encrypted on your Wi‑Fi.
- Only install HaRM's certificate (`harm-ca.crt`) on **your own** devices. Keep `data/tls/harm-ca.key` private: anyone with that file could impersonate websites to devices that trust it.
- Other tools you connect (UniFi, Proxmox, AI services) use keys stored encrypted in your vault, sent only to the address you entered.
- Import specs over SSH remembers each machine's SSH key and refuses to connect if it changes unexpectedly.

## Keep it at home

HaRM is made for your home network. Don't forward its port to the internet. To use it away from home, connect to your home network with a VPN (for example your router's VPN) and use HaRM as usual.

## The audit log

**Audit log** (under **More**) records every change, sign-in, failed sign-in, login reveal, export, backup and import, with the time and the address it came from.

## Related

- [Logins](./logins)
- [Backups, updates and uninstalling](./backups-and-updates)
