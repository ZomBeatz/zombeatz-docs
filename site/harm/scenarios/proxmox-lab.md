---
description: "Bring a Proxmox home lab into Zom's HaRM: hosts, VMs and containers without typing, placed in the rack with their hardware and logins."
---

# A Proxmox home lab

You run Proxmox and want its hosts, VMs and containers in HaRM without typing them in. You end up with the cluster, each host in its rack U with its hardware, every guest under its host, and one-tap logins.

## In Proxmox (once)

1. **Datacenter > Permissions > API Tokens > Add**: user `root@pam`, token ID `harm`. Untick **Privilege Separation**, or give the token the role too.
2. **Datacenter > Permissions > Add > API Token Permission**: path `/`, the token, role **PVEAuditor**. HaRM only reads.
3. Copy the token ID (`root@pam!harm`) and its secret.
4. To get VMs' IP addresses, install the QEMU guest agent in them.

## In HaRM (once)

1. Set up HaRM on [your computer](./computer-and-phone) or [a server](./home-server).
2. **Discover > Proxmox**: enter the address (`https://192.168.1.20:8006`), the token ID and secret, and press **Read Proxmox**. Untick **Verify certificate** unless Proxmox has a trusted one. See [Discover](../discover).
3. Check the preview and press **Import**: the cluster, its nodes, and every VM and container on its host.
4. Put each host in the rack: open it, **Edit**, set the rack and lowest U ([Places and racks](../places-and-racks)).
5. On each host, **⋯ > Import specs… > Over SSH** fills in CPUs, memory and drives ([Import specs](../import-specs)).
6. Save each host's iDRAC or iLO and Proxmox logins, so **Open** takes you straight in ([Logins](../logins)).

## Every day

- **Virtual & Clusters** shows every host, how full it is, and every guest: [Virtual machines and clusters](../virtual-and-clusters).
- After adding VMs, run **Discover > Proxmox** again. It updates what changed instead of adding duplicates.
- **Status** shows which hosts, VMs and iDRAC or iLO ports answer, with the last 24 hours: [Status](../status).
- Save the things you type over and over (updating a host, quieting a loud server's fans after a reboot) as one-click commands: [Actions](../actions).

## Good to know

- A host's management port (iDRAC, iLO) never becomes its main address, so quick links go to the host itself: [The main address](../devices#the-main-address).
- Over 100% on a host's meters means its VMs are given more CPU or memory than it has (overcommit). That's often fine; HaRM just shows it.
- The token is kept encrypted in your vault and only sent to the address you entered.

## Related

- [Discover](../discover#proxmox): every Proxmox option
- [Virtual machines and clusters](../virtual-and-clusters): hosts, guests and clusters
- [Import specs](../import-specs): hardware over SSH
