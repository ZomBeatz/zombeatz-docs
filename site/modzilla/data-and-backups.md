---
description: "Where Zom's Modzilla keeps everything, app backups, moving the library, and what stays when you uninstall."
---

# Data and backups

Everything stays on your computer. Nothing is sent to ZomBeatz Media.

## Where things are kept

| What | Where |
|---|---|
| Settings and profiles | `~/.config/com.zombeatz.zoms-modzilla/` (`settings.json`, `profiles.json`) |
| Your API key | `~/.config/com.zombeatz.zoms-modzilla/api-key` (only you can read it), or your keyring |
| The AI service's key (if you set one) | `~/.config/com.zombeatz.zoms-modzilla/ai-key` |
| The download list, what's in each game, run history | `~/.local/share/com.zombeatz.zoms-modzilla/` |
| Mods | The library folder (**Settings › Storage**), `~/Games/Nexus Mods` at first |
| Each profile's mod settings | `~/.local/share/com.zombeatz.zoms-modzilla/profile-settings/` |
| Save snapshots | `~/.local/share/com.zombeatz.zoms-modzilla/save-snapshots/<game>/` |
| The log | `~/.local/share/com.zombeatz.zoms-modzilla/zoms-modzilla.log` |
| Game art, Thunderstore's lists, LOOT's masterlists | `~/.cache/com.zombeatz.zoms-modzilla/` (fetched again when needed) |
| A game's own files that mods replaced | `<game folder>/.zoms-modzilla-backup/` while mods are in |

The Flatpak keeps the config, data and cache folders under `~/.var/app/com.zombeatz.zoms-modzilla/` instead.

## App backups

**Settings › Backup › Save a backup…** saves everything Zom's Modzilla knows in one file: profiles (with their rules, add-ons and notes), your notes and tags on mods, restore points, time played, settings and collections' installer choices. Not the mods themselves, the API key, or the download list.

**Restore from a backup…** replaces your profiles, notes, tags, restore points and settings with the backup's. The library folder, per-game folders and API key stay as they are, and mods already in games aren't touched: put a profile in again to use it. Save a backup of how things are now first if you might want them back.

Take a backup before reinstalling, or to move to another computer (copy the library folder too).

## Moving the library

Change **Settings › Storage › Library folder** to move all mods, or **A folder of its own for a game** to move one game's. Moving copies everything first and only then deletes the old copy; downloads wait while it moves.

## Game files

Putting mods in never deletes a game file it didn't put there. A game file a mod replaces is moved to `.zoms-modzilla-backup` in the game folder and put back by **Take mods out**. If Steam's **Verify integrity of game files** runs while mods are in, take the mods out and put them in again.

## Uninstalling

Uninstalling the app leaves all of the above. Take every game's mods out first (**Settings › Before uninstalling**). To remove everything, delete the three `com.zombeatz.zoms-modzilla` folders and your library folder.
