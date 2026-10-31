---
description: "See how much power each UPS, PDU and rack is asked for, and get a warning before a UPS or circuit is overloaded."
---

# Power budget

HaRM adds up what your devices draw and compares it with what each UPS or PDU can supply and what each rack's circuit allows. Open a rack (or a UPS) to follow along. New in version 0.3.2.

![A rack's Power card: the rack at 33% of its circuit, and the UPS at 47%](/img/harm/rack-power.png)

## Setting it up

| Where | Field | What to enter |
|---|---|---|
| Each device, **Edit > More details** | **Typical draw (W)** | What it usually draws, in watts. The label, the maker's spec sheet or a plug-in power meter tells you. |
| Each device, **Edit > More details** | **Plugged into** | The UPS or PDU it draws power from. |
| The UPS or PDU, **Edit > More details** | **Can supply (W)** | The most it can power, in **watts**. A UPS has two ratings: use the W one, not the VA one (an "1500 VA" UPS is often 1000 W). |
| The rack, **Edit** | **Power available (W)** | The circuit's safe limit. A 15 A, 120 V circuit is 1,440 W (80% of 1,800 W); a 16 A, 230 V one is about 2,900 W. |

**Can supply** shows once the device's type is UPS or PDU. Only UPSes, PDUs and devices with **Can supply** set appear in the **Plugged into** list.

## What it shows

- **The rack page:** a **Power** card with everything hooked up in the rack against its **Power available**, and each UPS or PDU in the rack against what it can supply.
- **A UPS or PDU's page:** a **Power** card on its **Overview** tab with its load and everything plugged into it.
- **Home:** a warning under **Needs attention** when a UPS or rack reaches 80%, and "Over" past 100%.

The bars turn amber at 80% and red at 100%.

## How it's added up

- Only devices that are **Hooked up** count. A spare server on the shelf doesn't draw anything.
- A PDU plugged into a UPS passes its load on: the UPS's load includes everything plugged into the PDU.
- A rack's total is each hooked-up device's own **Typical draw**, so a PDU in the rack isn't counted twice.
- Devices without a **Typical draw** count as 0 W, and the card lists them, so you know the real total is higher.
- A device can't be plugged into itself, or into something that's plugged into it.

::: tip Why 80%
A circuit shouldn't carry more than 80% of its rating for long, and a UPS near 100% has little runtime left and no room for a server's start-up surge. That's why HaRM warns at 80%.
:::

## Related

- [Places and racks](./places-and-racks): the rack page
- [Devices](./devices): editing a device
- [Status](./status): which devices are answering right now
