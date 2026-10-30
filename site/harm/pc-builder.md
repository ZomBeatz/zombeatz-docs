---
description: "Plan PC builds in Zom's HaRM with compatibility checks, from a library of about 30,000 parts, your spares, or custom parts."
---

# PC Builder

Plan a build part by part, with compatibility checks, then turn the finished build into a device.

![A build with its parts, prices and compatibility](/img/harm/pc-builder.png)

## The parts library

The first time, **Parts Library** offers to download about 30,000 parts (CPUs, motherboards, memory, graphics cards, cases, power supplies, coolers, storage and fans) with the specs HaRM needs for checks. It's about 16 MB, from BuildCores OpenDB, free for personal use. Without it you can still use your own spares and custom parts. **Custom part** adds anything that's missing.

## Making a build

1. **PC Builder > + New build**: name it, pick a purpose (Gaming PC, Workstation, Home lab server, NAS…) and an optional budget.
2. For each slot (CPU, cooler, motherboard, memory, storage, graphics, case, power supply), choose a part from the library, from your spare parts, or a custom one. **Only compatible** hides parts that wouldn't fit.
3. Mark each part **Have**, **Need** or **Ordered** and set prices. The total and budget update as you go.

## Compatibility checks

HaRM checks the CPU socket against the motherboard and cooler; memory type, slots, capacity and ECC or registered; board size, graphics card length and cooler height against the case; power supply size, wattage against estimated draw, and graphics power connectors; M.2 slots and sizes, SATA ports and drive bays; and SAS drives without an HBA. Problems show at the top of the build with the part they're about.

## When it's built

**Create device** turns the build into a device with its motherboard's slots and the parts installed. **Duplicate** copies a build to try a variation.

## Related

- [Parts and storage](./parts-and-storage): the spares a build can use
- [Devices](./devices): turning a build into a device
- [Export and share](./export-and-share): spec sheets for a build
