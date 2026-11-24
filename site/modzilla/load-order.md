---
description: "Load order in Zom's Modzilla: the profile's mod order, load order rules, Bethesda plugins, plugins.txt and LOOT sorting."
---

# Load order

There are two orders in a modded game, and Zom's Modzilla keeps them apart.

## The mod order

A profile's mods are in order: **later mods win** when two have the same file. Drag a mod up or down to change it, or **Move to the top**. The [conflict check](./conflict-check) lists every file more than one mod has, and which one wins.

### Rules

**Add rule** says "load this after that". Rules are kept whenever the order changes (new mods, updates, a collection's new revision), so a patch stays after what it patches. With **Handle requirements** on, a mod is also placed after the mods it needs.

## Bethesda plugins

Skyrim, Fallout, Oblivion and Starfield also load **plugins** (`.esp`, `.esm`, `.esl` files) in an order of their own, written to the game's `plugins.txt` in its Proton prefix. When a profile goes in, its plugins are switched on there, in the profile's mod order, after the game's own. Plugins that other tools added are kept.

## Sorting with LOOT

**Sort plugins (LOOT)…** on a profile sorts its plugins with [LOOT](https://loot.github.io)'s community masterlist (downloaded from GitHub and kept for a day). It shows the current order beside LOOT's, and LOOT's notes:

- plugins that don't work together,
- plugins missing what they need,
- plugins that need cleaning (with how many dirty records, and which tool cleans them).

Masters always load first, and each plugin after the plugins it needs, whatever else the masterlist says. The sorted order is kept for the profile, separate from the mod order, and used every time the profile goes in. Sorting works for Skyrim (SE, AE and LE), Fallout 4, New Vegas, Fallout 3, Oblivion, Starfield and Morrowind.

## Restore points

Each time a profile goes into the game, a **restore point** is noted: its mods, their order and rules. **History** on the profile lists them with what changed, and puts an older one back as a new profile, so a working setup is never lost.
