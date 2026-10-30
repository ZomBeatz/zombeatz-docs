---
description: "Spare parts, installed parts, drive bays, RAID math, CPUs and memory in Zom's HaRM, and which spares fit which device."
---

# Parts and storage

Keep track of every drive, memory stick, card and cable: on the shelf or inside a device, and which spares fit where.

## Spare parts

**Spare Parts** lists everything, with tabs for **Spares in stock**, **Installed**, **RMA / faulty / reserved** and **All**. The line above the list totals the drives you're looking at.

![Spare parts](/img/harm/parts.png)

Add a part with **Add part** or **+ New > Spare part**. Pick the category first; the form then offers the usual sizes and connections (4 TB, SATA, 3.5", DDR4 RDIMM…). Sizes are tidied automatically: "4tb" becomes "4 TB".

- **Install** puts a spare into a device. If you have 4 and install 1, HaRM splits them: 1 installed, 3 still on the shelf.
- **Remove** takes an installed part out and puts it back in a holder.
- A part's **Fits** list shows which devices have a free slot for it.

::: tip On a phone
Sort the spares bin with your phone in hand: **+ Add part** has camera buttons on the serial, model and part number, and **Scan label** reads the whole label at once. **Save & add another** keeps the form open for the next one.

<div class="phone-shots">

![Spare parts on a phone](/img/harm/phone-parts.png)
![Adding a part on a phone](/img/harm/phone-part-form.png)

</div>
:::

## Inside a device: the Hardware tab

![The Hardware tab: processors, memory, storage and drive bays](/img/harm/device-hardware.png)

- **Processors:** **Add CPU** picks from the library (common server CPUs like Opteron, Xeon and EPYC are built in), so HaRM knows the cores and threads: *2 × Xeon E5-2680 v4 = 28 cores / 56 threads*.
- **Memory:** sticks grouped by size and type with a total, and **Slots** for how many the board has.
- **Storage:** drives grouped by size, the raw total, and a calculator for what you'd get as JBOD, RAID 0, 1, 5, 6, 10 or RAIDZ1 to 3.
- **Drive bays:** add a bay group (**Drive bays**) such as *Front, 8 × 2.5", SAS/SATA, RAID 6*. The bay map shows each bay; tap an empty one to put a drive there, or tap a drive to mark it failed, move it or take it out. Marking a drive failed adds an issue to the device's tasks.
- **All installed parts** and **Expansion and other slots** (PCIe, M.2, PSU bays). Slots show how many spares in stock would fit.

Bay groups accept several connections at once: a SAS backplane takes SATA drives too, and a PCIe x16 slot takes x8 and x4 cards.

## Related

- [AI Assist](./ai-assist) to catalog a box of parts from photos
- [PC Builder](./pc-builder)
- [Export and share](./export-and-share) to make a sell sheet
