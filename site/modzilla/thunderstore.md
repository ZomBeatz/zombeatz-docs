---
description: "Thunderstore mods in Zom's Modzilla: 340+ games, BepInEx and other loaders, updates, mod packs, and bringing r2modman profiles across."
---

# Thunderstore and r2modman

[Thunderstore](https://thunderstore.io) hosts mods for games like Valheim, Lethal Company, R.E.P.O., Risk of Rain 2 and Content Warning. Zom's Modzilla handles them alongside Nexus Mods, without Overwolf or r2modman.

## Getting mods

For a Thunderstore game, [Browse](./browse) shows Thunderstore's mods. Search, sort, and **Get**: the mod and everything it needs are downloaded (no account or key needed). **Put into** sends them straight into a profile, in the right order.

The game's list of mods comes from Thunderstore's CDN and is kept for an hour; the list of games and their install rules is kept for a day.

## Loaders

Each game's loader (BepInEx, MelonLoader, Shimloader, UMM, Northstar, GDWeave and others) is installed like a mod, from Thunderstore's own rules for that game. Mods for 343 of Thunderstore's 351 games install; the rest (Godot games, whose mods go in as zips, and Balatro, whose mods go in the Proton prefix) can be browsed but not installed yet.

Under Proton, BepInEx needs a launch option (`WINEDLLOVERRIDES="winhttp=n,b" %command%`); the [conflict check](./conflict-check) gives the exact text.

## Updates

A Thunderstore game's Browse page lists newer versions of the mods you have, with **Update all**.

## Mod packs

A Thunderstore **modpack** (a package that lists other mods) becomes a profile. When the pack has a newer version, the profile says so and updates to it.

## From r2modman

**From r2modman…** on the Profiles page brings a profile across:

- **A profile on this computer**: pick it from r2modman's profiles (the usual install or the Flatpak).
- **A profile code**: the code someone shared from r2modman.

Its mods are downloaded (or reused if you have them) and its config files come with it, kept as the profile's [mod settings](./mod-settings).
