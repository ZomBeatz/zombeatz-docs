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
- The password, hidden as dots until you press the eye button. It hides again by itself after 30 seconds.
- The username and secret notes, each with **Copy**.
- A live **2FA code**, if the login has a 2FA secret: six digits in two groups of three, with a ring showing the seconds left. **Copy** copies it without the space.

The window closes by itself after 60 seconds. Every reveal is recorded in the audit log. Devices show up to three logins in their summary row, so you can open them straight from the device.

## Bitwarden and Vaultwarden

On **Logins (Vault)**, the **⋯** menu has:

- **Import from Bitwarden…**: in Bitwarden (or Vaultwarden) use **Tools > Export vault**, file format **.json** (not the encrypted one), then pick the file. HaRM lists each login with the device it seems to be for (by address, host name or name), before anything is saved. Untick any you don't want and change the device if it guessed wrong; logins HaRM already has start unticked. Cards, identities and secure notes stay in Bitwarden. Delete the export file afterwards: it holds every password in plain text.
- **Export for Bitwarden…**: asks for your master password again, then saves every login in a file Bitwarden and Vaultwarden can import (**Tools > Import data**, format **Bitwarden (json)**), in a folder called HaRM. Import it, then delete it.

## Changing a password on the machine

On a Linux login (one with a username and password), **🔑 Change on machine…** sets a new password on the machine itself and keeps it in HaRM, so you can change old passwords without typing them anywhere:

1. Pick the machine's address, and the login to connect with (this one, or another such as root).
2. Tick **Use sudo** unless you connect as root.
3. Keep the generated password or type your own (12 characters or more), and press **🔑 Change password**.

**Maintenance** lists old passwords with this button, so you can work through them ([Old passwords](./maintenance#old-passwords)).

HaRM sets it with `chpasswd`, saves it straight away, keeps the old one in the login's secret notes (as "Previous password"), then checks that the new one signs in. Anything else that uses the old password, such as a backup job, needs updating too, and so does your password manager. It's recorded in the audit log.

## How they're protected

Passwords, 2FA secrets and secret notes are encrypted with a key that only your master password or recovery code unlocks. They're never kept in form drafts or stored on phones, and only leave HaRM in an export for Bitwarden, which asks for your master password again. See [Security and privacy](./security).

## Related

- [Security and privacy](./security): how logins are encrypted
- [Devices](./devices): where each login belongs
- [Settings](./settings#locking-and-security): locking, 2FA and the recovery code
