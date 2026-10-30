---
description: "The Status page shows which of your devices are answering right now, grouped by where they are, with a day of history and Wake-on-LAN."
---

# Status

The **Status** page shows which of your devices are answering right now, grouped by where they are, with the last 24 hours for each. Open **Status** in the sidebar (on a phone, in the bar at the bottom) to follow along. New in version 0.3.2.

![The Status page: devices grouped by room, each marked Online or Offline with a bar of the last 24 hours](/img/harm/status.png)

## Reading the page

Every device with an IP address gets a tile, grouped under its location and in rack order, top of the rack first. Virtual machines and containers sit with their host's location, after the hardware. Devices without an address aren't shown; the bottom of the page says how many.

| On a tile | What it means |
|---|---|
| **Online** | The device answered. The address and how fast it answered (in ms) are next to it. |
| **Offline** | No answer on any port, and no answer to ping. The tile says for how long; hover over that to see the time it stopped. |
| **Not checked** | **Check if it's online** is off for this device. |
| **Not hooked up** | The device is marked as not hooked up, so HaRM doesn't expect an answer. |
| **Not checked yet** | It's new, and the next check hasn't run. |
| The colored edge | What kind of device it is, the same colors as the rack drawing. The type is written under the address. |
| The 24 bars | One per hour, oldest on the left: green when it answered all hour, red when it didn't, and amber when it changed during the hour. The share of the day it was up is next to them. |

The counts at the top add up **Online**, **Offline** and **Not checked**. The menu at the top shows **All devices**, **Only the ones checked** or **Only offline**.

## How a device is checked

HaRM knocks on a few ports of each address at the same time: first the ports of the device's own services (its **Network** tab), then common ones like SSH, the web, Proxmox and Windows file sharing. Any answer counts, even "connection refused", because only a running machine can refuse. If no port answers, HaRM tries one ping.

Only the addresses you've recorded in HaRM are contacted, and nothing leaves your network.

A device is checked when all of these are true:

- It's marked **Hooked up**.
- Its status isn't **Retired** or **Sold**.
- **Check if it's online** is ticked on its form (it is unless you untick it).
- It has an IP address on its **Network** tab.

## Management ports

A server's iLO, iDRAC or IPMI address is checked too, and shows under the server's main address with its own word. That tells "the server is off" (the management port answers, the server doesn't) from "the whole box lost power" (neither answers). HaRM checks up to 4 addresses per device: the main one first.

## Services

Once a device answers, HaRM checks the services on its **Network** tab too, and each says **Answering** or **Not answering** on its tile:

| A service with | Counts as answering when |
|---|---|
| A web address (`https://…` or `http://…`) | It sends any reply below a 500 error. A login page, a 401 or a 404 still means it's there; a 502 from a proxy in front of it means it isn't. Certificates aren't checked, since home-lab services usually have their own. |
| A port, and no web address | The port accepts a connection. |

Services marked **Stopped**, **Planned** or **Deprecated**, and UDP ones, aren't checked. A service that isn't answering also shows on **Home**, and the room's heading says how many.

The device's own page shows the same thing: its summary row starts with **Online** or **Offline**, and its **Actions** tab lists every address and service with its answer and the 24 bars, and the **Network** tab has an **Answering** column for services. Tap the word to check again.

## How often it checks

| When | How often |
|---|---|
| In the background | Every 5 minutes. Change it in **Settings > Status and actions**: every minute up to every hour, or **Never (only when I press Check now)**. |
| While the Status page is open | Every minute, and the page updates by itself. |
| **⟳ Check now** | Right away, every device. On a device's page, **⋯ > Check if it's online** checks just that one. |

When a device goes offline while the page is open, a message says so. Devices that are offline also show on **Home**, under **Needs attention**, with how long they've been down. To get a message on your phone or by email, set up [Alerts](./alerts).

In the rack drawing, a device that isn't answering is outlined in red and says **Offline** (see [Places and racks](./places-and-racks#the-rack-view)).

## Waking a device up

An offline device with a MAC address on its **Network** tab gets a **⏻ Wake** button on its tile, and **⋯ > Wake up (Wake-on-LAN)** on its page. It sends the Wake-on-LAN "magic packet" to the whole network and to the device's own subnet.

- Wake-on-LAN has to be turned on in the device's BIOS or network card settings, and most devices only wake from sleep or soft-off, not after losing power.
- HaRM has to be on the same network (or VLAN) as the device, because routers don't pass these packets on.
- In Docker, HaRM can only wake devices with `network_mode: host` (see [Setting up a server](./server)).

For servers, powering on through the iLO or iDRAC is more dependable: see the examples in [Actions](./actions#examples).

![The Office group: Alex's desktop is offline with a Wake button, pi-dns is online](/img/harm/status-office.png)

## On a wall screen or a phone

**⋯ > Full screen (for a wall screen)** hides the sidebar and bars, so a spare monitor or tablet can show the page all day. It keeps itself up to date. Press **Esc** to leave.

On a phone, **Status** is in the bar at the bottom, and the tiles are one per row.

<div class="phone-shots">

![The Status page on a phone](/img/harm/phone-status.png)

</div>

## When the answer seems wrong

- **Offline, but it's on:** its firewall blocks every port HaRM tries, and ping. Add a service with a port that's open (HaRM tries those first), or allow ping. Windows blocks ping until you allow it.
- **Online, but it's off:** something else answers on that address (a different device took the IP, or a router answers for it). Check the address on its **Network** tab.
- **A VM shows Offline when its host is off:** that's right; it can't answer without its host.

- **A service says Not answering, but it works in the browser:** its address on the **Network** tab may be different from the one you use (a name instead of an IP, or another port). HaRM checks exactly the address recorded there.

More in [Troubleshooting](./troubleshooting#status-and-actions).

## Related

- [Alerts](./alerts): a message by ntfy, email or webhook when something stops answering
- [Actions](./actions): one-click commands, from a tile or a device's page
- [Settings](./settings#status-and-actions): how often HaRM checks
- [Networks and cables](./networks): addresses, MACs and services that the checks use
- [Home and search](./home-and-search): offline devices under **Needs attention**
