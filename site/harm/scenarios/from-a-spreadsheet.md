---
description: "Moving from an Excel or Google Sheets hardware list to Zom's HaRM, without typing it all in again."
---

# Moving in from a spreadsheet

You've kept your hardware in Excel, Google Sheets or a text file until now. HaRM can't open a spreadsheet directly yet, but most of it can come in without retyping. You end up with everything in HaRM, and the spreadsheet retired.

## Bring in what's on the network (once)

1. Set up HaRM: [Quick start](../quick-start).
2. **Discover** reads your router's device list, a UniFi console or a Proxmox cluster, or scans your network. Everything that's switched on comes in with its name, IP and MAC: [Discover](../discover).
3. For servers and PCs, **⋯ > Import specs…** fills in their hardware over SSH: [Import specs](../import-specs).

## Bring in what's left

What's turned off, in boxes, or only in your spreadsheet:

1. **Print or screenshot** a part of the spreadsheet (say 20 rows), and give it to [AI Assist](../ai-assist) as a photo. It reads the rows and adds them as devices or parts for you to check.
2. **Repeat** for the rest of the sheet, a page at a time.
3. **Anything odd** is quickest typed in: **+ New** (<kbd>N</kbd>) with **Save & add another**.

## Then fill the gaps

- Put devices in racks and holders: [Places and racks](../places-and-racks).
- Move passwords from the spreadsheet into **Logins**, where they're encrypted, and delete them from the spreadsheet: [Logins](../logins).
- Copy **Purchased**, **Original price (new)** and **Warranty until** onto each device's **Edit** form.

## Every day

Use HaRM instead of the spreadsheet. If you still need a spreadsheet for someone else, **Settings > Data & backups > Export CSV** makes one from HaRM.

## Good to know

- Passwords in a spreadsheet aren't protected. Once they're in HaRM's logins, delete the column.
- A spreadsheet import (CSV) is on the list for a future version. Say if you'd use it: [Contact and feedback](../contact).

## Related

- [Discover](../discover): your network's devices, without typing
- [AI Assist](../ai-assist): photos (and printed lists) into inventory
- [Export and share](../export-and-share): spreadsheets out of HaRM
