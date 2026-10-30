---
description: "Networks, VLANs, the IP map, interfaces, services and cables in Zom's HaRM."
---

# Networks and cables

Record your subnets and VLANs, which device has which address, what each runs, and how they're cabled together.

## Networks and the IP map

**Networks & IPs** lists your networks: name, VLAN, subnet, gateway, DHCP pool, DNS and domain.

![Networks & IPs](/img/harm/networks.png)

Open one for its IP map: how full it is, every address in use and by what, addresses used twice (a conflict), static addresses inside the DHCP pool, and the next free addresses. Tap a free address to give it to a device.

![A network's IP map](/img/harm/network-ip-map.png)

Interfaces join the right network automatically from their IP address.

## Interfaces

A device's **Network** tab lists its interfaces: name, kind (Ethernet, SFP+, Wi‑Fi, IPMI / BMC…), IP and subnet (`10.0.0.5/24` works), IPv6, assignment (static, DHCP reservation, DHCP), gateway, DNS, MAC (any format, tidied automatically), speed, MTU, PoE, link state, VLANs (access, or trunk with native and tagged), the bond or bridge it belongs to, and Wi‑Fi network.

![A device's Network tab](/img/harm/device-network.png)

One interface per device can be the **main address**, used for quick links and logins. See [Devices](./devices#the-main-address).

## Services

What each device runs: name, protocol and port, its web address, version and status. Services show on the device and in search, and a login linked to a service opens its page. [Discover](./discover) can add services from open ports.

## Cables

**Cables & connections** on a device's Network tab (and the **Cables** page under **More**) record what's plugged into what: the ports at each end (or something HaRM doesn't track, like "ISP modem"), the medium (Cat6, DAC, fiber, SFF-8643, power), a label, length, color and speed.

## Related

- [Discover](./discover)
- [Logins](./logins)
