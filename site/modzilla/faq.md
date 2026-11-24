---
description: "Questions people ask about Zom's Modzilla."
---

# Questions

**Is it free?** Yes, and open source (MIT). There are no ads, no account of its own and no tracking.

**Do I need Nexus Mods Premium?** No. Free accounts click **Slow download** on the website for each file, as Nexus Mods asks; Zom's Modzilla opens the pages one after another so it's quick. Premium accounts download without clicks, several at once.

**Where are my mods kept?** In `~/Games/Nexus Mods/<game>/<mod id> - <name>/` by default (Settings › Storage), each with a `nexus.json`. Settings, profiles and the download list are in `~/.config/com.zombeatz.zoms-modzilla` and `~/.local/share/com.zombeatz.zoms-modzilla`.

**Does it change my game files?** Mods go in as links, and any game file a mod replaces is kept in `.zoms-modzilla-backup` in the game folder and put back with **Take mods out**. Zom's Modzilla never deletes a game file it didn't put there.

**Does it change Steam's settings?** It only reads them, with one exception you ask for: **Add to Steam** adds a shortcut while Steam is closed, after keeping a backup.

**Can I bring my Mod Organizer 2, Vortex or r2modman setup?** Mod Organizer 2 and r2modman profiles come across as profiles (Profiles › From MO2…, and the Thunderstore page). Vortex's mods can be added as your own files.

**Does it work on Windows or macOS?** No: it's made for Linux and the Steam Deck.

**Is there a Flatpak?** The Flathub files are in `packaging/flatpak`; it isn't on Flathub yet.

**Can I use it alongside Vortex or Mod Organizer 2?** Not on the same game at the same time: each manager expects to be the only one putting files in. Take one manager's mods out before using the other.

**Does it work with games not on Steam?** Yes: Heroic (GOG, Epic, Amazon) and Lutris games are found by themselves, and any other game can be added by hand with its folder and start command.

**Does it work with native Linux games?** Yes. Mods go in the same way; Proton-only things (the prefix, launch options) just don't apply.

**Why do mods take no extra space?** They're hard links: the game folder and the library point to the same file on the drive. On different drives they're copied instead (**Keep its mods on its drive** fixes that).

**Can I edit a mod's files?** Edit them in the library, then put the profile in again. Because of the links, a tool that changes a file in the game folder changes the library's copy too; **Copy mods instead of linking** in Settings avoids that for a game.

**How do I go back to the game without mods?** **Take mods out** on the profile, or **Without mods** on the Games page (which also starts it). Every game file a mod replaced comes back.

**Is my API key safe?** It stays on your computer in a file only you can read (or your keyring), and is only ever sent to Nexus Mods. It's never in logs, reports, or what AI help sends.

**Does it collect anything?** No. No account of its own, no ads, no tracking, no analytics. It talks to Nexus Mods (with your key), Thunderstore, Steam's image server and GitHub (for LOOT's lists, UE4SS and the update check), and to an AI service only if you set one up and press Send.

**Is it free?** Yes, free and open source (MIT), with no paid version.
