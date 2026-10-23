# Installing and updating

## Windows 10 and 11

1. Download `Zomello_(version)_x64-setup.exe` from the [latest release](https://github.com/ZomBeatz/Zomello/releases/latest) (under **Assets**).
2. Open it. If Windows says **"Windows protected your PC"**, click **More info > Run anyway**. (The installer isn't signed with a paid certificate yet; it's built by GitHub straight from the public code.)
3. It installs for your user only, so no administrator password is needed, and adds Zomello to the Start menu.

**Update:** download and run the newer installer; your boards stay. **Uninstall:** Windows Settings > Apps > Zomello > Uninstall. Your boards stay in `%APPDATA%\com.zombeatz.zomello` unless you delete that folder.

## Linux

Pick one from the [latest release](https://github.com/ZomBeatz/Zomello/releases/latest):

| File | For | How |
|---|---|---|
| `.deb` | Ubuntu, Linux Mint, Debian, Pop!_OS | Open it with your software installer, or `sudo apt install ./Zomello_*.deb` |
| `.rpm` | Fedora, openSUSE | Open it with your software installer, or `sudo dnf install ./Zomello-*.rpm` |
| `.AppImage` | Any Linux | Right-click > Properties > allow running as a program (or `chmod +x Zomello_*.AppImage`), then open it |

**Update:** install the newer package the same way (an AppImage: replace the old file). **Spell check:** install a dictionary such as `hunspell-en_us` if mistakes aren't underlined.

## Android

**From the release (now):**

1. On the phone, download `Zomello.apk` from the [latest release](https://github.com/ZomBeatz/Zomello/releases/latest).
2. Open it. Android asks to allow installs from your browser or Files app: allow it, then tap **Install**.

**From Google Play:** coming soon.

**Update:** install the newer APK over the old one; your boards stay. (A copy from Google Play can't be updated with an APK, or the other way around; move your boards to your computer before switching.)

## iPhone and iPad

The App Store: coming soon.

## Zomello Server

See [Setting up a Zomello Server](./server).

## Try it first

The [online demo](https://zombeatz.github.io/Zomello/) runs in your browser with example boards. Changes stay in your browser only; **Reset demo** starts over.

## Before uninstalling a phone or tablet app

Everything on the phone is deleted with the app. Move boards to your computer first ([Moving boards between devices](./moving-boards)) or save them as [board files](./board-files).
