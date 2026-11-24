---
description: "Baldur's Gate 3 mods in Zom's Modzilla: .pak mods, the mod list, Script Extender, and other tools' mods."
---

# Baldur's Gate 3

Baldur's Gate 3's mods mostly come as `.pak` files that go in the game's **Mods** folder (inside its Proton prefix) and on its mod list, `modsettings.lsx`.

When a profile goes in:

- each mod's `.pak` files go in `…/AppData/Local/Larian Studios/Baldur's Gate 3/Mods` in the prefix,
- each mod is added to `modsettings.lsx`, in the profile's order. Each mod's name and ID come from its `info.json`, or from inside the `.pak` itself,
- Script Extender and loose-file mods go in the game's own folder, like any other game.

The base game's entries, and mods other tools put there, are kept. Taking the mods out removes only what the profile put in, and puts the mod list back.

Start the game once before adding mods, so it has its prefix and settings file.
