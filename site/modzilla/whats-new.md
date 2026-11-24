---
description: "What changed in each version of Zom's Modzilla."
---

# What's new

## Next version

- **Send from your phone** takes download links and mod or collection addresses only, never your API key: its page isn't encrypted, which is fine for links that run out but not for a key that doesn't.
- The browser demo has a made-up Unreal Engine game (for UE4SS) and made-up loaders for each game, with the launch options they need.

## 0.0.1

The first public release: a free mod manager for Linux and the Steam Deck.

**Downloads**
- Nexus Mods downloads **one at a time**, **several at once** (1 to 8), or **Match my account** (several with Premium, one with a free account), with a speed limit, download hours, and a lower limit for some hours.
- Pause, resume, reorder and **Download now**. Downloads pick up where they stopped, even after closing the app, after a dropped connection, or after the computer sleeps.
- Free accounts click **Slow download** in an in-app Nexus Mods window, one file after another, as Nexus Mods asks. Premium downloads straight from the API.
- **Collections:** paste a collection's address or use its button on the website. Every file is queued, with a profile made from it and the curator's installer choices.
- On battery: new downloads can wait below a charge, and unpacking can wait for the charger.
- **Send from your phone:** scan a QR code to paste your API key or a Mod manager download link on your phone instead of typing it.

**Profiles and Play**
- Profiles per game, in load order. **Play** puts the mods in the game (hard links; the game's own files kept aside and put back), switches Bethesda plugins on, and starts the game. Only what changed moves.
- A conflict check that runs by itself: file overwrites, plugin masters, missing requirements, mods packed a folder too deep, loaders that need a Steam launch option under Proton, and mods older than the last game update.
- Mod installers (FOMOD), load order rules, add-ons over a collection, restore points, notes, tags, mod packs and share codes.
- Saves per profile, save snapshots (before each Play if you like), and checks before Play for a game that keeps closing or Steam Cloud undoing saves.
- Each profile keeps its own mod settings, with an editor.
- **LOOT** plugin sorting for Skyrim, Fallout, Oblivion, Starfield and Morrowind.
- **Baldur's Gate 3:** .pak mods go into its Mods folder and onto its mod list.

**Troubleshooting**
- Quick exits compared with the last good run, loader logs read for errors (SKSE, F4SE, BepInEx, SMAPI and more), Find the problem mod, and Play without mods.
- Optional **AI help** with any service (Claude, or any OpenAI-style one). You see everything that's sent first; answers can suggest buttons you choose to press.

**Game tools** (Games › the wrench on a game)
- **Steam's Play starts SKSE**, F4SE, NVSE, FOSE or OBSE, so script extenders work from Game Mode. The launcher is kept aside and put back.
- **Windows parts in the prefix:** Visual C++, .NET and DirectX parts installed with Protontricks or winetricks, marked when a loader's log says one is missing.
- **Modding tools** (xEdit, BodySlide, Nemesis, Pandora, DynDOLOD…) run in the game's prefix and see the profile's mods. New files a tool makes can be kept as a mod of your own.
- **Loaders:** UE4SS for Unreal Engine games and ReShade in one click; Cyber Engine Tweaks, redscript, RED4ext, SKSE and Address Library from Nexus Mods.

**Library**
- Every mod in its own folder under its game. Updates, endorsing and tracking on Nexus Mods, your own mod files, and **Look inside** a mod: its files, which lose to a later mod, its pictures and readmes.

**More than Nexus Mods**
- **Thunderstore** mods for 343 games (BepInEx, MelonLoader and more), with updates and mod packs; r2modman and Mod Organizer 2 profiles brought across; tModLoader for Terraria; Heroic and Lutris games.

**Steam Deck**
- Deck mode with controller navigation, a first-run setup, **Add to Steam** with artwork (while Steam is closed, with a backup), Steam's keyboard for text boxes, F1–F4 for the back buttons, and a Help page.
- A Decky Loader plugin (`packaging/decky`) to switch profiles from the quick access menu.

**Also**
- Game art from Steam or Nexus Mods, a game picker, find anything (Ctrl+K), drive space bars, a tray icon, start with the computer, app backups, an update check, Flathub packaging files, and a browser demo.

---

Downloads for every version are on the [releases page](https://github.com/ZomBeatz/zoms-modzilla/releases).
