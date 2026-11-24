---
description: "Connecting your Nexus Mods account with an API key, free and Premium accounts, Mod manager download links and request limits."
---

# Connecting Nexus Mods

Zom's Modzilla talks to Nexus Mods with your personal **API key**. It's how the app knows your account, finds files and downloads them. You don't need a separate Zom's Modzilla account.

## Your API key

1. Sign in on [nexusmods.com](https://www.nexusmods.com) and open **Settings › API keys** (the [API keys page](https://next.nexusmods.com/settings/api-keys)).
2. Copy your **personal API key** at the bottom.
3. In Zom's Modzilla, paste it in **Settings › Nexus Mods account** and press **Save key**.

The key stays on your computer, in a file only you can read (or in your desktop's keyring, if you tick that). It's never in reports, logs or anything the app shares. **Remove key** takes it off this computer.

**On a Steam Deck**, typing a long key with a controller is painful: **Sign in with your phone** shows a QR code, and you paste the key on your phone instead. See [Send from your phone](./steam-deck#typing).

## Free and Premium accounts

| | Free account | Premium |
|---|---|---|
| How files download | You click **Slow download** on the website for each file, as Nexus Mods asks. The app opens each file's page for you, one after another. | Straight from the app, no clicks. |
| At once | One at a time (Nexus Mods slows free downloads, so several would only share the speed) | Up to 8 at once |
| Collections | Each file still needs its click | Everything queues by itself |

Zom's Modzilla never works around the free account's clicks: that's Nexus Mods' rule, and the way free downloads stay free.

## The website's download buttons

Let the website's buttons open Zom's Modzilla, so **Mod manager download** (and **Vortex**) buttons on nexusmods.com send files straight to it. Do it from *Getting started*, or **Settings › Nexus Mods links**. Behind the scenes, the app becomes your computer's handler for `nxm://` links.

Each link carries a key and an expiry time made when you clicked, so a link only works for a while. If one runs out before it downloads, click the button again.

## Requests

Every question the app asks Nexus Mods counts against your account's daily allowance (20,000 a day, then 500 an hour). The sidebar shows what's left. Normal use comes nowhere near it: the app keeps what it learns and only asks again when something might have changed. **Request saver** on the Browse page cuts it further: lists there only load when you ask.
