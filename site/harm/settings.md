---
description: "Every setting in Zom's HaRM, in the same groups as the app: appearance, locking, phones, AI Assist, data, shortcuts and About."
---

# Settings

Every option under **Settings** in HaRM, in the same order as the app, plus the control panel's settings. A server's own settings (address, port, backups kept) are on [Server settings](./server-settings).

![Settings](/img/harm/settings.png)

## Appearance

- **Match my computer** (or **Match my phone**, **Match my tablet**): light or dark, following the device's own setting. This is the default.
- **Light** and **Dark**: always that look.

The choice is kept on each device, so your phone and computer can differ. The light look:

![HaRM in the light look](/img/harm/home-light.png)

## Locking and security

- **Locking**: says how long HaRM waits before it locks (30 minutes without use, unless a server sets otherwise), and that it locks when the HaRM server restarts. **Lock now** locks it straight away.
- **Master password > Change password…**: a new master password. Saved logins are kept, and every other device is signed out.
- **Two-factor authentication > Set up 2FA**: unlocking also asks for a 6-digit code from an authenticator app (Aegis, 2FAS, Bitwarden, 1Password, Google Authenticator and others). **Turn off 2FA** asks for the master password.
- **Recovery code > New recovery code…**: makes a new code after asking for the master password. The old one stops working at once.

How it all protects your logins: [Security and privacy](./security).

## Phones & tablets

- **Phone app > How to connect a phone…**: the QR codes and steps for each kind of phone. See [Phones and tablets](./phones-and-tablets).
- **Install on this device**: shows on browsers that can install HaRM as an app right away.
- **Certificate**: downloads `harm-ca.crt`, for devices that need to trust HaRM.
- **Camera and scanning**: whether this connection is secure (the camera needs it), whether live camera scanning, server-side barcode reading and text recognition are available, and the address this device uses.

## Status and actions

- **Check**: how often HaRM checks which devices answer, from **Every minute** to **Every hour**, or **Never (only when I press Check now)**. Every 5 minutes at first. While the Status page is open, it checks every minute anyway.
- **Alerts**: a message by ntfy, email or a webhook when a device or service stops answering, when it's back, and when a certificate runs out soon, with optional **quiet hours**. **Set up alerts…** chooses how and when; **Send a test** checks it works, and the list under it shows the last alerts sent. See [Alerts](./alerts).
- **New devices on the network**: **Watch for new devices…** picks the networks to scan, how often, and whether to alert; **Scan now** scans straight away. See [New devices on the network](./new-devices).
- **Actions** opens your saved one-click commands.

To leave one device out of the checks, edit it and untick **Check if it's online**; to keep checking it without alerts, untick **Send alerts about it**. See [Status](./status) and [Actions](./actions). New in version 0.3.2.

## AI Assist

- **AI service**: Claude (Anthropic), ChatGPT (OpenAI), Gemini (Google), or **Other / local** for any OpenAI-compatible service such as Ollama, LM Studio or OpenRouter. Off until you pick one.
- **API key**: your own key for that service, kept encrypted in your vault. **Remove saved key** deletes it.
- **Model**: which model to use. Leave it blank for the recommended one; it must be able to see images.
- **Service address**: for **Other / local** only, for example `http://localhost:11434/v1` for Ollama.
- **Let it search the web for prices and specs**: the AI looks up what parts cost new and what they sell for now.

Photos go only to the service you pick, and logins are never sent. Without a service, AI Assist still works by copy and paste with any AI app. See [AI Assist](./ai-assist).

## Data & backups

- **Automatic backups**: the newest daily backups and where they're kept.
- **Copy to a second place**: **Choose a folder…** on another disk (a NAS share or USB drive) and how many copies to keep; **Copy now** copies straight away. See [Data and backups](./data-and-backups#copying-backups-to-a-second-place). New in version 0.3.2.
- **Download backup (.db)**: the whole database in one file. Logins stay encrypted inside.
- **Export CSV**: a spreadsheet of each list. The logins file has names and usernames only, never passwords.

More in [Data and backups](./data-and-backups) and [Export and share](./export-and-share).

## Shortcuts (computers only)

The keyboard shortcuts, the same as on [Keyboard shortcuts](./keyboard). Phones and tablets don't show this group.

## About

![Settings > About, with Send feedback](/img/harm/settings-about.png)

- The version of HaRM, and its license (MIT, free and open source).
- **See the code** and **What's new** open the project on GitHub.
- **Send feedback** starts an email to ZomBeatz Media with your version and device filled in. See [Contact and feedback](./contact).
- **Check for new versions**: off unless you tick it. HaRM then asks GitHub about twice a day, says here whether you have the newest version, and shows a note on **Home** when a newer one is out. Nothing else is sent. New in version 0.3.2.
- **Read the guide** opens this guide, and **Setup guide** runs the first-time guide again.

## The control panel (computer only)

The desktop app's own settings: **Let phones and other devices connect**, **Use HTTPS**, **Port**, **Start HaRM when I log in** and **Keep running in the tray when this window is closed**. See [The desktop app](./desktop-app#settings).

## Related

- [Server settings](./server-settings): settings for a server, in docker-compose.yml
- [Security and privacy](./security): what the locking settings protect
- [Keyboard shortcuts](./keyboard): the full list
- [The desktop app](./desktop-app): the control panel on your computer
