---
description: "HaRM can scan the networks you pick now and then and tell you about devices it doesn't know: a new phone, a guest's laptop, something that shouldn't be there."
---

# New devices on the network

HaRM can scan the networks you pick now and then, and tell you about any device it doesn't know yet: a new phone, a smart plug, a visitor's laptop, or something that shouldn't be there. Open **Status > ⋯ > Watch for new devices** to follow along. New in version 0.3.2.

## Turning it on

1. Add your networks with their address ranges first, in **Networks & IPs** (like `192.168.1.0/24`). See [Networks and cables](./networks).
2. Open **Status > ⋯ > Watch for new devices** (or **Settings > Status and actions > New devices on the network**).
3. Tick **Watch for new devices**, and tick the networks to watch.
4. Press **Save**. HaRM runs the first scan straight away.

![The watch settings with the home LAN ticked and the guest Wi-Fi left out](/img/harm/new-devices-settings.png)

| Option | What it does |
|---|---|
| **Watch for new devices** | On or off. |
| **Scan** | Every 15 or 30 minutes, every hour, or every 2 or 6 hours. |
| **Send an alert for each new one** | Uses the ways set up in [Alerts](./alerts), with their quiet hours. |
| The networks | Only the ticked ones are scanned. |

### Which networks to watch

Leave out networks where devices come and go all day, or you'll get an alert for every visitor:

- **Guest Wi-Fi:** phones and laptops of whoever is visiting.
- **IoT:** usually fine to watch once it's settled, but busy at first.
- **WAN, VPN and transit networks:** not yours to scan.

HaRM ticks your LAN, server and management networks the first time and leaves guest, IoT, Wi-Fi and WAN ones unticked. A network needs an address range to be watched, and the range can be at most a /22 (1,022 addresses).

## The first scan only learns

The first scan after turning the watch on, or after changing the networks, only learns what's already there: nothing is listed and no alerts are sent. From the next scan on, anything that wasn't there before shows up.

## Adding or ignoring what it finds

New devices show at the top of the [Status](./status) page under **New on the network**, with their address, name (when the network gives one), MAC address, network and when they were first seen. **Home** says how many are waiting.

![New on the network, with two devices to add or ignore](/img/harm/new-devices.png)

- **+ Add…** opens a new device with its name filled in. Save it, and HaRM adds its address and MAC on the **Network** tab and opens its page.
- **Ignore** takes it off the list for good. A device ignored here doesn't come back, even when it leaves and returns.

A device you add another way (by hand or with [Discover](./discover)) leaves the list by itself.

## Good to know

- A device is "known" when one of HaRM's devices has its MAC address or IP address. Devices that change their address use their MAC, so keep MACs on the **Network** tab.
- Phones and laptops often use a different, made-up MAC on each Wi-Fi network (private Wi-Fi addresses). Add them once, or turn that off for your home Wi-Fi on the phone.
- MAC addresses are only seen when HaRM is on the same network as the devices. In Docker, use `network_mode: host` (see [Setting up a server](./server)); otherwise it matches by IP address only.
- The scan knocks on a few common ports and pings each address, like Discover's network scan. Devices that answer neither may be missed.

## Related

- [Discover](./discover): bring in a whole network at once
- [Alerts](./alerts): how alerts are sent
- [Status](./status): where new devices are listed
