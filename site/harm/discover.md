---
description: "Bring devices into Zom's HaRM from any router's client list, a UniFi console, Proxmox, or a network scan, and review them before saving."
---

# Discover

Discover brings what's on your network into HaRM. Pick the source that fits your setup; you always review the results before anything is saved.

## Any router

Works with almost every router and DHCP server. Copy its list of connected devices or DHCP leases (the whole table is fine) and paste it into **Discover > Any router**, then **Read list**. HaRM picks out each device's IP, MAC address and name.

![A pasted client list, read into devices](/img/harm/discover-router.png)

Where to find the list:

| Router | Where |
|---|---|
| pfSense | **Status > DHCP Leases** (select the table and copy), or the file `/var/dhcpd/var/db/dhcpd.leases` |
| OPNsense | **Services > ISC DHCPv4 > Leases**, or **Services > Dnsmasq / Kea > Leases** on newer versions |
| OpenWrt | **Status > Overview > Active DHCP Leases**, or the file `/tmp/dhcp.leases` |
| Pi-hole | **Settings > DHCP > Currently active DHCP leases**, or `/etc/pihole/dhcp.leases` |
| MikroTik | **IP > DHCP Server > Leases** (select all, copy), or `/ip dhcp-server lease print` |
| TP-Link Omada | **Clients > Export** (CSV), then paste the file's contents |
| UniFi without API keys | **Client Devices** (select the table and copy), or Export |
| Home routers (Netgear, ASUS, TP-Link, Eero, internet provider boxes) | Look for *Attached devices*, *Client list*, *DHCP clients* or *Connected devices* and copy the table |
| No router access | Run `arp -a` on a Windows PC (or `ip neigh` on Linux) and paste the output. It only lists devices that PC talked to recently. |

## UniFi

For UniFi OS consoles (UDM, UCG, UDR, UXG, Cloud Key Gen2 and later) with UniFi Network 9 or newer.

1. In the UniFi Network app, sign in as an admin and open **Settings > Control Plane > Integrations**. Some versions call it **Settings > System > Integrations** or **Control Plane > API Access**.
2. **Create API Key**, name it "HaRM", and copy it. UniFi shows it only once.
3. In HaRM, **Discover > UniFi**: enter the console's address (for example `https://192.168.1.1`) and paste the key. Leave **Verify certificate** off unless you replaced the console's self-signed certificate. **Remember the key** stores it encrypted in your vault.
4. **Import from UniFi**.

You get your UniFi gear, current clients with their switch port or Wi‑Fi network, reserved (fixed-IP) clients even when they're offline, and your networks and VLANs. Older self-hosted UniFi Network Server has no API keys: use **Any router** with its client list instead.

![Discover > UniFi](/img/harm/discover-unifi.png)

## Proxmox

Imports your cluster, its nodes, and every virtual machine and container with its vCPUs, memory and disk. VM IP addresses come along when the QEMU guest agent is installed in the VM.

1. In Proxmox, **Datacenter > Permissions > API Tokens > Add**. Pick a user (for example root@pam), name the token "harm", and untick **Privilege Separation**.
2. **Datacenter > Permissions > Add > API Token Permission**: path `/`, role **PVEAuditor** (read-only).
3. Copy the secret. Proxmox shows it only once.
4. In HaRM, **Discover > Proxmox**: enter any node's address (`https://192.168.1.20:8006`), the token ID (`root@pam!harm`) and the secret, then **Read Proxmox**.
5. Choose for each node: link it to a device you already have, or add it as a new host. Untick any VM you don't want, pick where new hosts go, then **Import**.

![Discover > Proxmox](/img/harm/discover-proxmox.png)

Running it again later updates VM sizes and states and adds new ones, without duplicates. See [Virtual machines and clusters](./virtual-and-clusters).

## Network scan

Sweeps a private range (for example `192.168.1.0/24`, up to a /22) from the HaRM computer: common ports (SSH, web, RDP, SMB, Proxmox, Plex…) on every address, then names and MAC addresses. It takes 10 to 30 seconds. Good for finding servers and web pages; phones and locked-down devices may not answer. Open ports become suggested services.

## Reviewing the results

- **New** devices aren't in HaRM yet. Choose **Add as new device**; HaRM suggests a type, recognizing phones, tablets, TVs, game consoles, smart-home gear, switches and access points by name. Or **Attach to** an existing device, for example an iDRAC address to its server (it becomes a management interface).
- **IP changed** devices are matched by MAC but HaRM has an older address; they're set to update.
- Matches use the MAC first, then the IP, then the device's management address, then the name.
- **Hide** anything you never want to track (guests' phones, smart plugs). Hidden devices stay out of future results; the **Hidden** filter brings them back.
- **Apply** saves the changes. **Add services for open ports** adds a service for each web page or SSH it found.

## Related

- [Virtual machines and clusters](./virtual-and-clusters)
- [Networks and cables](./networks)
- [Troubleshooting](./troubleshooting#discover)
