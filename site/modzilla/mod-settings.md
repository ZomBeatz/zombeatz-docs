---
description: "Each profile's own mod settings in Zom's Modzilla: settings files kept per profile, and the editor."
---

# Mod settings per profile

Many mods keep their settings in a file (`.ini`, `.cfg`, `.json`, `.toml`). Zom's Modzilla keeps those files **per profile**, so a "performance" profile and a "pretty" profile can have different settings for the same mod.

## How it works

- Settings files are **copied** into the game, never linked, so a mod saving its settings never changes the library's copy.
- When you switch profiles, the settings you changed while playing are kept for the profile you were playing, and the next profile's come in.
- Only files you changed are kept. Everything else comes from the mod as it was.

## The editor

**Mod settings…** on a profile lists the mods with settings files. Opening one shows its settings as switches, number boxes and text boxes, grouped like the file. Changes are saved for that profile. Resetting a file goes back to the mod's own copy.

For a file the editor can't read, it opens as plain text.
