---
description: "Saves in Zom's Modzilla: saves per profile, save snapshots, the checks before Play, and Steam Cloud."
---

# Saves

Mods and saves go together: a save made with a big mod list often won't load without it. Zom's Modzilla can keep them apart per profile, and keep copies before you try something risky.

The game needs a known save folder (most games have one; set it on the [Games](./games#save-folders) page otherwise).

## Saves per profile

Tick **Own saves** on a profile, and it keeps its own saves. When it goes in, the save folder holds its saves; when another profile (or none) goes in, those are set aside and the usual ones come back. Nothing is deleted: saves that aren't in use wait in a `.zoms-modzilla-saves` folder beside the save folder.

A profile with its own saves starts with none: start a new game, or copy a save in.

## Save snapshots

**Save snapshots…** on a profile keeps a copy of the game's saves as a zip, with a label ("Before trying Big Overhaul"). **Restore** puts one back: the saves there now are snapshotted first and moved aside, never deleted. It won't restore while the game is running.

**Take one by itself before each Play** (in the Save snapshots window) takes one every time you press Play, for every game; the last 10 of those are kept per game (the ones you took are kept until you delete them).

## Steam Cloud

Steam Cloud copies a game's saves back when the save folder looks empty or different, which undoes saves per profile. When a profile keeps its own saves and Steam Cloud is on for the game, the app warns before Play. Turn Steam Cloud off for that game in Steam (the game › Properties › General › Keep game saves in the Steam Cloud), or let the profile share the usual saves.

## Checks before Play

Before starting a game, Zom's Modzilla checks:

- whether the game has been closing right after starting with this profile (with what changed since the last good run),
- whether the saves in the folder belong to another profile,
- whether Steam Cloud would get in the way.

Each check explains itself and offers to carry on, fix it, or play without mods.
