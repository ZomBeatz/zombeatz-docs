---
description: "Zom's Modzilla on the Steam Deck: Game Mode, the controller, typing, script extenders, the SD card, battery and the quick access menu."
---

# Steam Deck

Zom's Modzilla is made to work in Game Mode with the controller, after a few minutes of setup in Desktop Mode.

![Deck mode: bigger buttons and the controller's hints at the bottom](/img/modzilla/deck-mode.png)

## Set it up

1. In Desktop Mode, download the **AppImage** and open it. A first-run setup opens by itself on a Deck.
2. Press **Add to Steam**. Zom's Modzilla appears in your library in Game Mode, with its artwork. Steam has to be closed while it's added; the app offers to close and reopen it, and keeps a backup of Steam's shortcuts first.
3. **Sign in with your phone:** scan the QR code, then paste your API key on your phone.
4. **Games on the SD card:** press each one listed, so its mods are kept on the card too and linked, not copied.

## The controller

| Button | Does |
|---|---|
| D-pad or left stick | Moves between buttons |
| **A** | Presses (a text box opens Steam's keyboard) |
| **B** | Goes back, closes a dialog |
| **X** | Opens a thing's menu |
| **Y** | Plays the picked game's profile |
| **L1 / R1** | Previous and next page |
| **Menu** | Find anything |

For the back buttons and the trackpads, press the controller button on Zom's Modzilla's page in your library and pick **Gamepad with Mouse Trackpad**. Then set back buttons to keys: **F1** Help, **F2** find anything, **F3** Downloads, **F4** Send from your phone.

## Typing

Choosing a text box with **A**, or tapping it, opens Steam's keyboard (**STEAM + X** opens it any time). For long things, like an API key or a download link, use **Send from your phone** (Settings, or **F4**): scan the QR code, and paste on your phone. The page only works while that dialog is open, and only on your home network.

![Send from your phone](/img/modzilla/phone.png)

## Script extenders (SKSE, F4SE…)

Steam's Play button starts the game's launcher, never the script extender. On **Games**, open the game's **Game tools** (the wrench) and switch on **Steam's Play starts SKSE**. See [Game tools](./game-tools).

## Battery and sleep

Downloads cut off by sleep start again on waking, from where they stopped. In **Settings › Downloads**, new downloads can wait below a battery level, and unpacking can wait for the charger.

## The quick access menu

With [Decky Loader](https://decky.xyz), the Zom's Modzilla plugin lists your profiles in the **…** menu: switch a game's profile, or take its mods out, without leaving Game Mode. It's in the source under `packaging/decky`, with how to build and install it.
