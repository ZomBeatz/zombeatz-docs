---
description: "Let your computer keep a copy of a phone's or tablet's boards, one a day for two weeks, and send it back after a reinstall or to a new device. Private boards can come along, locked with a password."
---
# Device backups

Your computer can keep a copy of a phone's or tablet's boards, so a reinstall or a new phone doesn't lose them. New in version 0.5.4.

## Turn it on (on the phone or tablet)

1. Connect it to your computer first: [Your computer's boards on your phone](./phone-and-computer).
2. In Zomello on the phone: **Settings > Servers**, under **Boards on your computer**, tick **Back up this phone's boards on my computer**.

That's it. While the two are connected (same Wi‑Fi, both apps open), your computer saves a copy, one a day, and keeps the last two weeks.

::: info What's in a backup
The boards, buckets and cards, with everything on them: checklists, notes, dates, labels and links. **Attached files** stay on the phone and aren't in it.
:::

## Private boards, locked

Boards marked **Private: only on this device** are left out, unless you choose otherwise:

1. Tick **Include private boards, locked with a password**.
2. Type a password (8 or more characters) twice, then **Save password**.

They're then locked on the phone before they're sent (AES-256 encryption). Your computer stores the locked copy but can't open it. Only that password can.

::: warning Keep the password somewhere safe
Without it, the private boards in a backup can't be restored. Zomello can't recover it for you.
:::

## Restoring (on the computer)

After reinstalling Zomello, or on a new phone:

1. Pair the phone with your computer again and open Zomello on it.
2. On the computer: **Settings > Phones & tablets > Device backups**.
3. Pick the device, and which day's copy (the newest is first).
4. **Send to a device…** and choose the phone. Its boards arrive as boards on the phone.
5. If the backup has locked private boards, the phone asks for the backup password, then adds them.

**Copy to this computer** adds copies of a backup's boards to the computer itself, to look something up or keep it there. The trash can deletes all of a device's backups.

## Good to know

- Restoring is done from the computer, so one person's phone can't fetch someone else's backup.
- A backup is a copy: changing boards on the computer doesn't change it, and restoring adds boards (it never replaces what's already on the phone).
- Backups are kept in Zomello's data folder on the computer, under `device-backups`.

## Related

- [Sharing between your devices](./sharing-between-devices)
- [Data and backups](./data-and-backups)
- [Your computer's boards on your phone](./phone-and-computer)
