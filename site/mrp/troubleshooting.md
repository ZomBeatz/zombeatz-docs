---
description: "Fixes for common Zom's MRP problems: installing, opening, saving, the server, phones, and checks that seem wrong."
---

# Troubleshooting

Problems by area, in the order people meet them, each with the likely causes and fixes.

## Installing

### "Windows protected your PC"

The installer isn't signed with a paid certificate yet. Click **More info > Run anyway**. The file is built by GitHub from the public code.

### The Mac says it can't check the app

1. Choose **Done**.
2. Open **System Settings > Privacy & Security**, scroll down to the message about Zom's MRP, and choose **Open Anyway**.

On macOS 14 or older, right-clicking the app and choosing **Open** also works.

### An update won't install, or Check for updates fails

1. Check the computer is online: it asks GitHub for the latest release.
2. Press **Check for updates** in **Settings > About** again. It says what went wrong.
3. Still stuck? Download the installer from [the latest release](https://github.com/ZomBeatz/Zoms_MRP/releases/latest) and install it over the old one. Your plan stays.

### The AppImage won't open

Right-click it, open **Properties**, and allow running it as a program.

## Using it

### Nobody is offered for an open seat

Nobody fits every rule for those days. Press **Show everyone** on the season's **Pilots** tab: each person says why (not rated, training run out, time off, off rotation, over a limit). The season also offers a fix for the people closest. See [Filling the schedule](./filling-the-schedule#who-it-picks).

### A pilot is flagged for flight hours, but they haven't flown that much

Planned hours are the aircraft's flight hours a day shared by its pilots. Check the aircraft's **Hours on a mission day**, or type the real hours in the shift's **Flight hours flown**. See [Flight-hour limits](./work-limits#flight-hour-limits).

### A hitch is flagged as too long

Shifts with fewer days off between them than **Fewest days off between hitches** count as one hitch, and maintenance and on call count too. Check the person's shifts on the Schedule's **Crew** view.

### Save says something is missing

It says what, like a name or a date, and on which tab. Fill that in and press **Save** again.

### I deleted something by mistake

Press **Undo** in the message, or <kbd>Ctrl</kbd> <kbd>Z</kbd>. After the app has been closed, restore a backup or a daily copy ([Data and backups](./data-and-backups)).

## Saving files

### Reports or backups don't appear

They go to your Downloads folder. The message after saving has **Show**, which opens it. In the desktop app, check that Downloads exists and has space.

### The Excel copy for Teams isn't updating

**Settings > Excel copy for Teams** shows when it was last written, or why it couldn't be. Check that the folder still exists and OneDrive is syncing, then press **Write it now**. If the file is open in Excel, close it.

## The server

### The page doesn't load

1. Check both containers run: `docker compose ps`.
2. Check the domain points at the server, and ports 80 and 443 are open. Caddy needs both to get its certificate.
3. Read the logs: `docker compose logs mrp` and `docker compose logs caddy`.

### "Someone else saved changes a moment ago"

Two people saved at once. Nothing was overwritten: press **Reload** to see their change, then make yours again.

### I forgot the admin password

On the server: `docker exec -it mrp zoms-mrp-server reset-password <username>`. See [People and roles](./server-people#a-forgotten-password).

### Signed out after a while

Sessions end after 14 days without use, and after 60 days in any case. Sign in again.

## Phones

### The phone can't reach the server

Use the full `https://` address of your server, the same as on a computer. If the computer can open it and the phone can't, check the phone isn't on a network that blocks it.

### A chart won't fit on the screen

Charts are wider than a phone on purpose: swipe sideways to move through time and pinch to zoom. See [Phones and tablets](./phones-and-tablets).

## Still stuck?

Email [info@zombeatzmedia.com](mailto:info@zombeatzmedia.com) with what you did, what happened, and your version from **Settings > About**. See [Contact and feedback](./contact).
