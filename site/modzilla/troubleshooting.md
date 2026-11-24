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

## Downloads are stuck or slow

- **Waiting** with a reason (download hours, a game running, the battery): it says which setting is holding it.
- **Needs your click** (free accounts): the file is waiting for **Slow download** on its page. **Open page**, or walk through them one after another.
- **The link ran out**: Mod manager download links only last a while. Click the button on the website again.
- **Out of requests**: the sidebar shows what's left of your Nexus Mods allowance. Downloads pick up again when it refills.
- **Slow**: free accounts are slowed by Nexus Mods; check **Speed limit** in Settings isn't set lower than you meant.

## The website's buttons don't open the app

**Settings › Nexus Mods links** says whether Zom's Modzilla handles `nxm://` links, and fixes it in one click. Another manager (Vortex, MO2 under Wine) may have taken them over; clicking there takes them back. In a browser in a Flatpak or Snap, the browser may ask the first time which app to open the link with.

## The window is blank

On some NVIDIA setups the window stays white. Zom's Modzilla already turns off the WebKit setting that usually causes it; if it still happens, start it from a terminal with `WEBKIT_DISABLE_COMPOSITING_MODE=1 zoms-modzilla` (or the AppImage's name).

## Nothing moves with the controller in Game Mode

Set Zom's Modzilla's controller layout in Steam to a **Gamepad** layout (the controller button on its page in your library). Controller input is ignored while a game is running and when the window isn't in front.

## Asking for help

- **Ask AI** (optional, off until you set it up) gets the check, the logs and the last runs, with your home folder and names taken out, and only when you press Send.
- **Save a report for getting help** (Settings) makes one file to share when asking for help. It never contains your API key.
- The app's log is in `~/.local/share/com.zombeatz.zoms-modzilla/zoms-modzilla.log`.
