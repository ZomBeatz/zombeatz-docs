---
description: "Adding and managing devices in Zom's HaRM: status, the device page and its tabs, the main address, cloning, labels and deleting."
---

# Devices

A device is anything with its own identity: a server, switch, NAS, router, UPS, PC, phone, tablet, even a virtual machine.

## Adding a device

Use **Devices > Add device**, **+ New > Device**, or click an empty U in a rack. Only the name is required. The form shows the basics first; **More details** opens the rest (system, purchase and warranty, values, tags).

Faster ways: [Import specs](./import-specs) fills in hardware from the machine itself, [Discover](./discover) brings in what's on your network, and [Scanning](./scanning-and-labels) reads serials from labels.

## The devices list

![The devices list](/img/harm/devices.png)

- The line at the top totals what you're looking at: devices, cores, memory, raw storage, open issues.
- Filter by text and status; **Filters** adds type, location, holder, hooked up, and physical or virtual.
- **Hardware columns** adds cores, memory and storage.
- Change a device's status right in the list.

**Status** is one of Active, Standby, Testing, Spare, In Repair, Broken, Retired or Sold. **Hooked up** says whether it's cabled and powered.

## The device page

![A device page](/img/harm/device.png)

The top row is a summary: where it is, its cluster, its **main address** (tap to copy, or open the list of all its addresses), the management page, up to three logins to open in one tap, and open tasks.

The tabs:

- **Overview:** notes and tasks, then details, location and purchase.
- **VMs** (hosts only): the virtual machines and containers it runs. See [Virtual machines and clusters](./virtual-and-clusters).
- **Hardware:** processors, memory, storage and drive bays, all installed parts, and expansion slots. See [Parts and storage](./parts-and-storage).
- **Network:** interfaces, services, and cables. See [Networks and cables](./networks).
- **Logins:** see [Logins](./logins).

A **Finish setting up** box lists what's missing (serial, where it lives, CPU and memory, drives, network, a login) with a button for each; hide it when you don't need it.

## The main address

When a device has several IPs (the operating system and an iDRAC, for example), HaRM uses its **main address** for the summary, quick links, logins and lists. Management ports (iDRAC, iLO, IPMI, or interfaces named like "mgmt") are never picked automatically.

![All of a device's addresses](/img/harm/device-ip-menu.png)

To choose, tap the address in the summary and pick **Main** next to the right one, or tick **Main address for this device** on the interface.

## More actions

The **⋯** button holds the less common actions: **Import specs…**, **Add note or task**, **Export / PDF / sell sheet**, **Print label…**, **Clone…** (a new device like this one, with the next number: *R515 #2* becomes *R515 #3*) and **Delete**.

![The ⋯ menu](/img/harm/device-menu.png)

Deleting a device removes its interfaces, services, slots and cables. Parts inside go back to stock where the device was, and its virtual machines stay (just without a host).

## Related

- [Places and racks](./places-and-racks)
- [Import specs](./import-specs)
- [Notes and tasks](./notes-and-tasks)
