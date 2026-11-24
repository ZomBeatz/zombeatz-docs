---
description: "Every problem Zom's Modzilla's conflict check reports, what it means, and how to fix it."
---

# The conflict check

Each profile is checked by itself whenever it changes, and the profile's card shows how many problems it found. **Check again** runs it on demand. Most problems come with a button that fixes them.

## What it looks for

| It says | What it means | What to do |
|---|---|---|
| **Files more than one mod has** | Two mods put the same file in the game. The later one in the profile wins. | Usually fine (patches are meant to win). Move a mod down to make it win, or add a load order rule. |
| **Needs a mod that isn't here** | Nexus Mods lists a requirement the profile doesn't have, or has switched off. | **Get** downloads it, **Switch on** turns it on. With **Handle requirements** on, the profile adds and sorts these by itself. |
| **Plugin missing a master** | A Bethesda plugin (.esp, .esm, .esl) needs another plugin that isn't there. The game crashes at start. | Get the mod with that plugin, or switch off the one that needs it. |
| **Plugin before its master** | A plugin loads before a plugin it needs. | Move it after, or **Sort plugins (LOOT)**. |
| **Packed a folder too deep** | The mod's files would land somewhere the game won't look (a mod wrapped in an extra folder). | The app shows where they'd go and where they should go; fix it by reinstalling with the right folder, or ask the author. |
| **Needs a loader** | Mods need SKSE, SMAPI, BepInEx, RED4ext or another loader that isn't in the game or the profile. | **Get** it, or see [Game tools](./game-tools#loaders). |
| **Needs a launch option** | Under Proton, a loader that comes as a DLL (winmm, version, dxgi, dwmapi…) won't load without telling Wine to use it. | Copy the launch options the check gives into Steam › the game › Properties › Launch options. |
| **May not work with this version of the game** | A mod that runs code (a DLL, scripts) is older than the game's last update. | Look on its page for an update. If the game crashes, switch it off first. |
| **Has programs in it** | A mod includes .exe files or scripts. Rarely needed; worth a look. | Look inside it; switch it off if you don't trust it. |
| **Mods not downloaded** | The profile lists mods that aren't in the library. | **Get** them. |
| **The game has an older version of this profile** | You changed the profile after its mods last went in. | **Put mods in game** (or Play) brings the game up to date. |

## What the game said

After a game started with the profile, the check also shows what the mod loaders logged (SKSE, F4SE, BepInEx, MelonLoader, SMAPI, UE4SS, Cyber Engine Tweaks, RED4ext and more) and names the mods their errors point to. See [When a game won't start](./troubleshooting).

## Trying a fix

**Test without…** switches off the mods the game's logs point to and puts the rest in, ready to try. Switch them back on any time. **Find the problem mod** goes further: it switches half the mods off at a time until it finds the one breaking the game.

## Copying the report

**Copy** puts the whole check in your clipboard as text, for asking for help on a forum or a mod's page.
