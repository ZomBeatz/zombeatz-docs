---
description: "Encrypted logins in Zom's HaRM: one-click open for iDRAC, iLO and web pages, SSH commands, 2FA codes and the password generator."
---

# Logins

HaRM keeps your logins encrypted and gets you into things faster: one tap opens the management page and copies the password.

## Saving a login

Add one from a device's **Logins** tab, **+ New > Login**, or **Logins (Vault)**. A login has a label, kind (Web UI, SSH, IPMI / BMC, OS account, API key, Wi‑Fi password…), username, password, an optional 2FA secret, secret notes, an address, the device or service it belongs to, and when it was last changed. **Password generator** on the vault page makes a strong one.

![The vault](/img/harm/vault.png)

## Opening what a login is for

Press **Open** on a login. Its window shows how to get in:

![A login's Open window](/img/harm/login-open.png)

On a phone the same window fills the screen. It's useful at a console or crash cart: copy the password, or show it to type it in.

<div class="phone-shots">

![A login's Open window on a phone](/img/harm/phone-login-open.png)

</div>

- **Web pages** (iDRAC, iLO, a service's address, the device's management page): one button opens the page and copies the password on the same tap, so you just paste it into the sign-in box. Let your browser save it after the first time for one-click sign-in.
- **SSH:** a ready-made `ssh user@host` command to copy, and an `ssh://` link for SSH apps.
- **Windows:** a `.rdp` file for Remote Desktop.
- The password (hidden until you press **Show**), the username, secret notes, and a live **2FA code** if the login has a 2FA secret.

The window closes by itself after 60 seconds. Every reveal is recorded in the audit log. Devices show up to three logins in their summary row, so you can open them straight from the device.

## How they're protected

Passwords, 2FA secrets and secret notes are encrypted with a key that only your master password or recovery code unlocks. They're never exported, never kept in form drafts, and never stored on phones. See [Security](./security).

## Related

- [Devices](./devices)
- [Settings](./settings)
