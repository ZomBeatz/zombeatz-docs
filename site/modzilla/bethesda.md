---
description: "Skyrim, Fallout, Oblivion and Starfield in Zom's Modzilla: the Data folder, plugins, LOOT, script extenders and launch options."
---

# Skyrim, Fallout and other Bethesda games

Bethesda's games (Skyrim SE, AE and LE, Fallout 4, New Vegas, Fallout 3, Oblivion, Starfield) are the most modded, and need a few extra things.

## The Data folder

Mods go in the game's `Data` folder. A mod that brings its own `Data` folder goes in the same place; a mod with loose files is put inside `Data`. Mods packed a folder too deep are caught by the [conflict check](./conflict-check).

Linux file names care about upper and lower case, and Windows' don't: a mod's `Textures` folder goes into the game's existing `textures`, so nothing is duplicated.

## Plugins

Plugins (`.esp`, `.esm`, `.esl`) are switched on in the game's `plugins.txt` (in its Proton prefix) when a profile goes in, in the profile's order. The check catches plugins missing a master or loading before it. **Sort plugins (LOOT)…** sorts them with LOOT's masterlist: see [Load order](./load-order#sorting-with-loot).

## Script extenders

SKSE, F4SE, NVSE, FOSE and OBSE need their loader started instead of the game's launcher. **Steam's Play starts SKSE** in the game's [Game tools](./game-tools#steam-s-play-starts-the-script-extender) makes Steam's Play button (and Game Mode) do that. SKSE plugins also need **Address Library**, which the check asks for.

## Modding tools

xEdit (SSEEdit, FO4Edit), BodySlide, Nemesis, Pandora and DynDOLOD run in the game's prefix from [Game tools](./game-tools#modding-tools), and what they make can be kept as a mod.

## Under Proton

- Most script extender plugins need **Visual C++** in the prefix: [Game tools › Windows parts](./game-tools#windows-parts-in-the-prefix).
- ENB and ReShade need a launch option for their DLL (`d3d11` or `dxgi`): the check gives the exact text.
- A game that keeps closing at start with a new mod list is usually a missing master or a script extender plugin for another game version: the check and the loaders' logs say which.
