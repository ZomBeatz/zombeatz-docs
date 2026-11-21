---
description: "Every web page and port on your devices as cards or a list in Zom's HaRM: favorites, lists, filters, layouts, buttons of your own on each card, and pages only their machine answers on, through SSH."
---

# Services

**Services** (in the sidebar) shows every service on your devices (Proxmox's page, Plex, a NAS, Pi-hole, SSH) as cards or a list, with whether each one answers. It's a start page for your home lab: star the ones you use most, sort them into lists, and give each card its own buttons. New in version 0.3.2.

![The Services page as cards, with favorites, lists and colors](/img/harm/services.png)

Services come from each device's **Network** tab, **+ New** on this page, or [Discover](./discover). The [online checks](./status) check each one every few minutes.

## Cards or a list

**⊞ Cards** and **☰ List** at the top switch between them. **⚙ Layout** sets:

| Setting | Choices |
|---|---|
| **Card size** | **Small** (name and one button, many to a row), **Medium**, **Large** (with notes). |
| **Group by** | Nothing, **Device**, **Place**, **List** or **Answering or not**. |
| **Sort by** | Name, device, not answering first, or fastest first. |
| **Favorites first** | On at first. |
| **Show** | Answering or not, device, address, how fast it answered, version, lists and notes. Untick what you don't need. |

The layout is kept on each device, so a wall tablet can show small cards and your computer a list. **Back to how it was at first** undoes it.

### Saved layouts

**⚙ Layout > 💾 Save this layout as…** keeps the layout and the filters (answering or not, a list, favorites only) under a name, like "Wall tablet" or "Media". It's kept in HaRM, so every device lists it under **⚙ Layout**: pick it to show the same thing there. **Delete a saved layout…** takes one off the list. New in version 0.3.2.

## Finding one

- **Filter…** searches names, devices, addresses, lists, places, versions and notes (press <kbd>/</kbd> to jump to it).
- **All / Answering / Not answering / Not checked** shows only those.
- **★ Favorites** shows only your favorites.
- Each **list** has a chip: tap one to show only that list.

## Favorites and lists

Tap **☆** on a card to make it a favorite. Favorites come first, and show on **Home** too.

**Lists** are names you give: "Media", "Admin pages", "Family". A service can be in several. Set them with **⋯ > Edit card…** (tap a list's chip to add or remove it), or in the service's form. Favorites and lists are kept in HaRM, so they're the same on every device.

## Editing a card

**⋯ > Edit card…** on a card:

- **Icon**: about 50 plain symbols, or **Auto**, which guesses from the name (Plex gets a film, Pi-hole a shield).
- **Color**: shown along the card's top edge and on its icon.
- **Favorite** and **Lists**.
- **Buttons**: up to 8 of your own (below).

**⋯ > Edit service…** changes the service itself: its name, address, port and notes.

## Pages only their machine answers on

Some pages only answer on the machine itself, at an address like `http://localhost:9000` or `http://127.0.0.1:8080`. Your browser can't open those directly, so their card's **🌐 Open ↗** opens them [through SSH](./connect#a-web-page-on-the-machine) to the device instead, in a new tab. For any other service, **⋯ > 🌐 Open through SSH** does the same, for a page that's only open on the machine or its network. New in version 0.3.3.

- The device needs a saved login of the kind **SSH** or **OS Account** with a username (not Windows). HaRM uses its first one.
- A page that's open through SSH already is reused: pressing it again doesn't sign in again.
- It closes when HaRM locks or after 30 minutes unused, like any page through SSH.

## Buttons of your own

A card with a web address already has **Open ↗**. Add more buttons, each with a name, that do one of three things:

| Does | For example |
|---|---|
| **Open a link** | Another page (Plex's settings), or an app: `ssh://root@10.20.0.10` opens your SSH app, `smb://nas/share` your file manager, `rdp://` and `vnc://` your remote desktop app, if your computer has one set up for them. |
| **Copy text** | An address, an API URL, a share path. |
| **Run an action** | One of your saved [Actions](./actions), like "Restart Plex" or "Update packages". |

Buttons that run an action show ⚡, and say which action when you point at them.

### Results on the card

Tick **Show its result on the card** on an action button, and the card shows the last line the action printed, like "Plex: 2 streams" or "Newest backup: 3 h ago" (in red if it failed). It changes when you press the button: nothing runs by itself. Write the action so its last line says what you want to see, for example `echo "$(docker ps -q | wc -l) containers running"`.

::: tip Safe by design
- A button can only open a link, copy text, or run an action you saved. It can't hold commands of its own.
- Links only open web pages and the apps listed above (`http`, `https`, `ssh`, `sftp`, `smb`, `rdp`, `vnc`), never `javascript:` or files on your computer.
- Actions keep their own rules: they run only while HaRM is unlocked, ask first when **Ask before running** is ticked, and are recorded in the audit log. The card editor warns when an action runs without asking. Tick **Ask before running** on anything that restarts or shuts down.
:::

## Related

- [Status](./status): whether each device and service answers, with history
- [Actions](./actions): the commands card buttons can run
- [Devices](./devices): where each service lives, on its **Network** tab
