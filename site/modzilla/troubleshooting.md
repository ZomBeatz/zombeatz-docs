---
description: "What to do when a modded game won't start, closes right away, or mods don't show up."
---

# When a game won't start

## Mods don't show up

- Press **Play** in Zom's Modzilla (or **Put mods in game**) before starting from Steam: that's when mods go in.
- Read the profile's problems: mods packed a folder too deep and missing loaders are the usual reasons.
- Script extender mods need the extender started: see [Game tools](./game-tools#steam-s-play-starts-the-script-extender).
- Under Proton, mod loaders that come as a DLL (RED4ext, ReShade, UE4SS…) need a launch option. The check gives the exact text to paste in Steam › Properties › Launch options.

## The game closes right after starting

Zom's Modzilla notices a game that closes within a minute, and shows what changed since the last run that lasted. It reads the mod loaders' logs (SKSE, F4SE, BepInEx, MelonLoader, SMAPI, UE4SS, Cyber Engine Tweaks, RED4ext…) and names the mod they blame.

- **Play without mods** checks the game itself works.
- **Find the problem mod** switches half the mods off at a time until it finds the one.
- A missing `MSVCP140.dll` or `.NET` means a part is missing from the prefix: [Game tools](./game-tools#windows-parts-in-the-prefix).

## Steam Cloud keeps undoing my saves

A profile that keeps its own saves empties the save folder for the others, and Steam Cloud fills it again. Turn off Steam Cloud for that game in Steam (Properties › General), or let the profile share the usual saves.

## Asking for help

- **Ask AI** (optional, off until you set it up) gets the check, the logs and the last runs, with your home folder and names taken out, and only when you press Send.
- **Save a report for getting help** (Settings) makes one file to share when asking for help. It never contains your API key.
- The app's log is in `~/.local/share/com.zombeatz.zoms-modzilla/zoms-modzilla.log`.
