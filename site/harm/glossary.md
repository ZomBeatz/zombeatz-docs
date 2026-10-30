---
description: "The words used in Zom's HaRM and its guide, explained."
---

# Glossary

**BMC, iDRAC, iLO, IPMI** · A server's separate management port (Baseboard Management Controller). Dell calls it iDRAC, HPE calls it iLO. HaRM keeps it apart from the server's main address.

**Bay group** · A set of drive bays in a device, such as *Front, 8 × 2.5"*, with the connections it accepts and the array it belongs to.

**Certificate authority (CA)** · The small "issuer" HaRM creates so phones can trust its HTTPS. You install `harm-ca.crt` on a phone once.

**Cluster** · A group of hosts that work together, such as a Proxmox cluster or a Kubernetes cluster.

**Container** · A lightweight virtual machine (LXC, Docker). In HaRM, a device that runs on a host.

**DHCP lease, reservation** · The address a router hands a device. A reservation (fixed IP) always gives the same device the same address.

**Discover** · HaRM's way of bringing in what's on your network from a router, UniFi, Proxmox or a scan.

**Holder** · Anything hardware sits in or on: a rack, cabinet, shelf, bin, tote, drawer, desk or pile.

**Hooked up** · Whether a device is cabled and powered right now.

**Host, hypervisor** · A physical machine that runs virtual machines, such as a Proxmox server.

**Interface** · A network connection on a device: its name, IP, MAC, speed and VLANs.

**Location** · A place: a building, room or closet. Locations nest inside each other.

**Main address** · The one IP HaRM uses for a device's quick links, logins and lists.

**Master password** · The password that unlocks HaRM and encrypts your stored logins.

**Overcommit** · When the VMs on a host are given more vCPUs or memory, in total, than the host has.

**RAID, RAIDZ** · Ways of combining drives for speed or safety. HaRM's calculator shows how much space each would give.

**Recovery code** · The one-time code that gets you back in if you forget the master password.

**Spot** · Free text for exactly where something is: "top shelf left", "pile by the door".

**U (rack unit)** · The height unit of a rack: 1U is 1.75 inches. A 2U server takes two.

**VLAN** · A separate network on the same cables and switches, numbered (VLAN 20, VLAN 30).

**VM (virtual machine)** · A computer running inside a host. In HaRM, a device that runs on a host, with its own vCPUs, memory and disk.

## Related

- [FAQ](./faq)
