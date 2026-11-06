---
description: "Where Zom's MRP keeps the plan, its daily copies, saving and restoring a backup, importing from Excel or CSV, and clearing everything."
---

# Data and backups

Where the plan is kept, how it's copied, and how to back it up, restore it, bring lists in and start over. On a server, see also [Backups and security](./server-backups).

## Where the plan is kept

| Zom's MRP as | The plan is |
|---|---|
| The desktop app | `mrp.json` in the app's data folder, with daily copies in `backups` next to it ([The desktop app](./desktop-app#where-the-plan-is-kept)) |
| A server | The server's database, in its data folder ([Backups and security](./server-backups)) |
| The live demo | That browser's storage, apart from anything else |

Nothing is sent to ZomBeatz Media.

## Saving a backup

**Settings > Your data > Save a backup** saves the whole plan as one file, `zoms-mrp-backup-(date).json`, in your Downloads folder. Keep one somewhere other than the computer the plan is on.

## Restoring a backup

**Settings > Your data > Restore a backup…** replaces the plan with the backup's. Backups from older versions open too.

::: warning It replaces everything
Restoring replaces the whole plan. Save a backup of the current one first if you might want it back. Undo works right after.
:::

The plan's rules come with it: work limits, flight-hour limits, kinds of contract, training warnings, maintenance and preferences. The theme and layout stay this device's own.

## Importing from Excel or CSV

1. **Settings > Your data > Download the import template**.
2. Fill in its **People**, **Aircraft**, **Courses** and **Training** sheets, keeping the headings. Hover a heading for what goes in it; the **Read me** sheet has examples.
3. **Import from Excel or CSV…** and pick the file.
4. The preview lists what's added, updated (matched by name, or tail number) and skipped. Press **Import** to keep it.

## Exporting to Excel

**Export to Excel** makes a workbook of the whole plan, to read anywhere or post in Teams. It can't be imported back; use a backup for that. More in [Reports and sharing](./reports).

## Undo

Every change can be undone with <kbd>Ctrl</kbd> <kbd>Z</kbd> (<kbd>⌘</kbd> <kbd>Z</kbd> on a Mac), and the message after adding or deleting something has **Undo**. Undo lasts until the app is closed.

## Starting over

**Settings > Your data > Clear all data…** says exactly what it deletes, offers a backup first, and needs DELETE typed before it goes.

## Related

- [The desktop app](./desktop-app): the data folder and daily copies.
- [Backups and security](./server-backups): copies on a server.
- [Moving in from a spreadsheet](./scenarios/from-a-spreadsheet): the import, step by step.
