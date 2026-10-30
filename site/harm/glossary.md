---
description: "The words used in Zom's HaRM and its guide, in alphabetical order, each linked to the page that explains it."
---

# Words used in HaRM

What HaRM's words mean, in alphabetical order. Each links to the page that explains it.

| Word | Means |
|---|---|
| **AI Assist** | Photos of hardware turned into parts and devices by an AI app or service ([AI Assist](./ai-assist)) |
| **Audit log** | A record of every change, sign-in, login reveal and export, under **More** ([Security and privacy](./security#the-audit-log)) |
| **Bay group** | A set of drive bays in a device, like *Front, 8 × 2.5"*, with the connections it takes ([Parts and storage](./parts-and-storage)) |
| **BMC, iDRAC, iLO, IPMI** | A server's separate management port. Dell calls it iDRAC, HPE calls it iLO. HaRM keeps it apart from the main address ([Devices](./devices#the-main-address)) |
| **Certificate authority (CA)** | The small issuer HaRM makes so devices can trust its https. Phones install `harm-ca.crt` once ([https and certificates](./server-https)) |
| **Cluster** | Hosts that work together, like a Proxmox or Kubernetes cluster ([Virtual machines and clusters](./virtual-and-clusters)) |
| **Container** | A light virtual machine (LXC, Docker) that runs on a host ([Virtual machines and clusters](./virtual-and-clusters)) |
| **Control panel** | The desktop app that starts and stops HaRM on your computer ([The desktop app](./desktop-app)) |
| **Data folder** | The one folder with your database, backups and certificates ([Data and backups](./data-and-backups#where-your-data-is)) |
| **DHCP lease, reservation** | The address a router hands a device; a reservation always gives it the same one ([Discover](./discover)) |
| **Discover** | Bringing in what's on your network from a router, UniFi, Proxmox or a scan ([Discover](./discover)) |
| **Holder** | Anything hardware sits in or on: a rack, cabinet, shelf, bin, tote, drawer, desk or pile ([Places and racks](./places-and-racks)) |
| **Hooked up** | Whether a device is cabled and powered right now ([Devices](./devices)) |
| **Host, hypervisor** | A physical machine that runs virtual machines, like a Proxmox server ([Virtual machines and clusters](./virtual-and-clusters)) |
| **Import specs** | Filling in a device's hardware over SSH or from this computer ([Import specs](./import-specs)) |
| **Interface** | A network connection on a device: its name, IP, MAC, speed and VLANs ([Networks and cables](./networks)) |
| **Location** | A place: a building, room or closet. Locations sit inside each other ([Places and racks](./places-and-racks)) |
| **Main address** | The one IP HaRM uses for a device's quick links, logins and lists ([Devices](./devices#the-main-address)) |
| **Master password** | The password that unlocks HaRM and encrypts your saved logins ([Security and privacy](./security)) |
| **Overcommit** | When a host's VMs are given more vCPUs or memory, in total, than it has ([Virtual machines and clusters](./virtual-and-clusters)) |
| **RAID, RAIDZ** | Ways of combining drives for speed or safety; HaRM shows the space each gives ([Parts and storage](./parts-and-storage)) |
| **Recovery code** | The code that gets you back in if you forget the master password ([Security and privacy](./security)) |
| **Spot** | Free text for exactly where something is: "top shelf left" ([Places and racks](./places-and-racks)) |
| **Task** | A note that stays on **Home** until it's ticked off ([Notes and tasks](./notes-and-tasks)) |
| **U (rack unit)** | A rack's height unit, 1.75 in. A 2U server takes two ([Places and racks](./places-and-racks#the-rack-view)) |
| **Vault** | Where saved logins are kept, encrypted (**Logins (Vault)** in the menu) ([Logins](./logins)) |
| **VLAN** | A separate network on the same cables and switches, numbered (VLAN 20) ([Networks and cables](./networks)) |
| **VM (virtual machine)** | A computer running inside a host, with its own vCPUs, memory and disk ([Virtual machines and clusters](./virtual-and-clusters)) |

## Related

- [Questions](./faq): quick answers
- [Quick start](./quick-start): from download to your first rack
- [Troubleshooting](./troubleshooting): when something isn't working
