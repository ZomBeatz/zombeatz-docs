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
