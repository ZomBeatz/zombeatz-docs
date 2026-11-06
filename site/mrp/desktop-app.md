---
description: "What the Zom's MRP desktop app adds on Windows, macOS and Linux: the plan in a file, daily copies, saving to Downloads and the Excel copy for Teams."
---

# The desktop app

The desktop app is Zom's MRP installed on one computer, for one scheduler or a small office that shares one machine. For several people at once, use [a server](./server).

## Where the plan is kept

The plan is one file, `mrp.json`, in the app's data folder:

| | Folder |
|---|---|
| Windows | `%APPDATA%\com.zombeatz.zoms-mrp` (paste it into File Explorer's address bar) |
| Mac | `~/Library/Application Support/com.zombeatz.zoms-mrp` |
| Linux | `~/.local/share/com.zombeatz.zoms-mrp` |

**Settings > Your data** shows the folder, and **Open folder** opens it in Explorer, Finder or your file manager. It's saved as you work; there's no Save button for the whole plan.

## Daily copies

Each day the app is used, it keeps a copy of the plan in the `backups` folder next to it, and keeps the last 30. To go back to one, use **Settings > Your data > Restore a backup…** and pick it. More in [Data and backups](./data-and-backups).

## Saving files

**Save a backup**, **Export to Excel** and the PDF and Excel reports go to your Downloads folder. The message after each has **Show**, which opens the folder.

## Excel copy for Teams

Only the desktop app can keep an Excel copy of the plan up to date in a folder you pick, such as a Teams channel's synced folder. See [Reports and sharing](./reports#an-excel-copy-for-teams-desktop-app).

## Updates

The desktop app downloads new versions in the background and installs them when you press **Restart now**. See [Updating](./installing#updating).

## Moving to another computer or a server

1. On the old computer, **Settings > Your data > Save a backup**.
2. On the new one (or the server, as an admin), **Restore a backup…** and pick the file.

The plan's rules come with it: hitch limits, flight-hour limits, kinds of contract and training warnings. Theme and layout stay each device's own.

## Related

- [Installing and updating](./installing): getting the app.
- [Data and backups](./data-and-backups): backups and imports.
- [Setting up a server](./server): one plan for a team.
