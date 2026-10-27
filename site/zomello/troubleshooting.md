---
description: "Fixes for common problems: installing, connecting your phone to your computer, missing boards, notifications, servers, calendars and lost changes."
---
# Troubleshooting

## Installing

### "Windows protected your PC"

The installer isn't signed with a paid certificate yet. Click **More info > Run anyway**. It's built by GitHub straight from the public code.

### The window is blank on Linux (NVIDIA / Wayland)

Start it with `GDK_BACKEND=x11 zomello`.

## Phone and computer

### The phone can't reach my computer

Check, in order:
1. Zomello is open on the computer, with **Settings > Phones & tablets > Allow access from phones and tablets on this network** ticked. (Turn on **Settings > Desktop app > Keep running in the tray** so it keeps working after you close the window.)
2. Both are on the same Wi‑Fi (not a guest network, not mobile data).
3. The computer's certificate is installed on the phone (**Put it on a device** on the computer's Phones & tablets page).
4. The phone allows Zomello to find devices on your network: Android **Settings > Apps > Zomello > Permissions > Nearby devices**; iPhone and iPad **Settings > Privacy & Security > Local Network**.
5. The firewall lets it through: **Allow through firewall** on the computer's Phones & tablets page.

### It worked yesterday, not today

The computer's address may have changed (routers sometimes hand out new ones). On the computer, check the address next to **Devices connect to** in **Settings > Phones & tablets**. To stop it changing, ask your router to always give the computer the same address (a "DHCP reservation").

### "This certificate doesn't cover…"

The computer's address is outside what its certificate vouches for (for example after picking a VPN's address). Click **Make a new certificate**, then install it on each phone again with **Put it on a device**.

### The pairing code doesn't work

Codes last 10 minutes and work once. Click **Pair a device** again for a new one.

### My phone's boards don't show on the computer

The phone needs Zomello open and the same Wi‑Fi as the computer. On the computer, check that **Show its boards on this computer while it's connected** is ticked for that phone in **Settings > Phones & tablets**.

### My other device's boards don't show

Both devices need to be connected to the same computer, and the one sharing needs **Settings > Servers > Let my other devices see this phone's boards** ticked. Private boards never show.

### A board is missing on another device

If it's marked **Private: only on this device**, it stays where it was marked. Open its menu on that device and untick it.

## Reminders

### I don't get notifications

1. **Settings > Reminders:** **Notifications** is on; try **Send a test notification**.
2. Your device allows notifications from Zomello (system settings).
3. Zomello is running. On a computer, turn on **Settings > Desktop app > Keep running in the tray**. On a phone or tablet, open Zomello once after setting a reminder, so it can hand it to the phone; from version 0.5.4 it then arrives even when the app is closed. Also check that the phone allows notifications from Zomello (and, on Android, that battery saving doesn't stop it).

## Servers

### The server opens in the browser instead of the app (phone)

Phone and tablet apps open servers inside the app only over **https**. See [Zomello Server](./server) for the easy ways to add https.

### I forgot the admin password

On the server: `docker exec -it zomello zomello-server reset-password <username>`.

## Calendar feeds

### Calendar events don't show

Check the link is the private **iCal** address (Google: **Secret address in iCal format**), that **Show this calendar's events** is ticked in **Customize > Calendars**, and use the refresh button in the Calendar view. Events refresh every 15 minutes.

## Data

### I deleted something by mistake

**Ctrl Z**, or **Undo** on the message right after. Archived things are in **Archive**. Older states: **Settings > Data & backups > Automatic backups > Restore**.

### I'm getting a new phone

Move your boards to your computer first ([Moving boards](./moving-boards)) or save them as [board files](./board-files), then bring them to the new phone the same way.

## Something else

Email info@zombeatzmedia.com or open an issue on [GitHub](https://github.com/ZomBeatz/Zomello/issues).
