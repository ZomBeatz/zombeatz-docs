---
description: "Locations, racks, shelves, bins and piles in Zom's HaRM: where everything lives, with a front and rear rack view."
---

# Places and racks

Tell HaRM where things are: **locations** are places (a house, a room, a closet), and **holders** are what hardware sits in or on (a rack, a shelf, a bin, a pile).

## Locations

Locations nest as deep as you like: *Home > Basement > Server closet*. Add one with **+ New > Location**, or from **Locations** (under **More** in the sidebar).

Each location's page shows what's inside: rooms within it, its holders, **loose devices** (sitting in the room, not in a holder, with an optional spot like "pile by the door"), loose parts, and notes and tasks. From there, **+ Device here**, **+ Part here** and **AI Assist here** add straight to that place.

![A location page: holders, loose devices and tasks](/img/harm/location.png)

On a phone, a location is a handy checklist while you walk the room: what each holder has, and what's left to do there.

<div class="phone-shots">

![A location on a phone](/img/harm/phone-location.png)

</div>

## Holders: racks, shelves, bins and piles

A holder is anything that holds hardware: **Rack**, **Cabinet**, **Wall-mount Rack**, **Open Frame Rack**, **Shelf**, **Wire Shelving**, **Bin**, **Tote**, **Drawer**, **Desk**, **Closet**, **Box**, **Pile** or **Floor**. Give racks a height in U; other holders don't need one.

When you pick a location on a form, the holder list shows only holders in that location.

## The rack view

Open a rack from **Racks & Storage** to see it front and rear.

![A rack, front and rear](/img/harm/rack.png)

- **Click an empty U** to add a device there, or to place one you already have.
- Each device shows its name, type and status. Its color says what kind of device it is (servers and computers, network, storage, power, other gear, accessories), and a key under the rack names each color. A device that isn't answering is outlined in red and says **Offline** (see [Status](./status)). New in version 0.3.2.
- Broken devices get a red outline, spares and standby devices are dimmed, and a flag shows open issues.
- Devices can be half depth and mounted at the front or rear, so a front and a rear device can share a U.
- HaRM refuses overlaps and positions outside the rack, and says which device is in the way.
- Notes and tasks for the rack itself sit beside the picture ("Rear door sticks").

On a phone the rack view fits the screen, front first:

<div class="phone-shots">

![A rack on a phone](/img/harm/phone-rack.png)

</div>

To move a device, open it, **Edit**, and change **Rack / holder** and **Lowest rack unit (U)**.

## Related

- [Devices](./devices): what goes in the racks
- [Parts and storage](./parts-and-storage): spares kept in holders
- [Scanning and labels](./scanning-and-labels#qr-labels): QR labels for each device
- [A small office closet](./scenarios/office-closet): a whole closet, step by step
