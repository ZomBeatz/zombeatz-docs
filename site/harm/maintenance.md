---
description: "Keep your servers healthy with Zom's HaRM: disk space, drive health, RAID and ZFS, waiting updates, restarts, backups and Proxmox VMs, with one-click updates and optional background checks."
---

# Maintenance

HaRM can read each of your Linux machines over SSH, with a saved login, and tell you what needs attention: a disk filling up, a drive starting to fail, a degraded pool or RAID array, security updates waiting, a restart needed after an update, a backup that stopped coming. The **Maintenance** page gathers every machine in one place, with one-click updates and restarts. New in version 0.3.2.

![The Maintenance page: problems, system updates, container updates with versions, and Proxmox VMs](/img/harm/maintenance.png)

## Checking a machine

1. Open the server, VM or NAS and pick **⋯ > Health and updates…** (its **Health** tab).
2. Pick its **address** and a saved **login** (add the SSH login on the **Logins** tab first, if it has none). It's the same connection as the [Containers](./docker) tab, so a machine is only set up once.
3. Tick **Use sudo**: drive health and refreshing the update list need it.
4. Press **Check this machine**.

HaRM reads, and changes nothing:

| What | What it shows |
|---|---|
| **Health** | The system, how long it's been up, load, memory and swap, and a list of anything that needs attention. |
| **Updates** | How many updates are waiting (apt, dnf, pacman or apk), how many are security fixes, each package's current and new version, and whether it needs a restart (for example a new kernel installed but not running yet). |
| **Disks and space** | Each volume with how full it is; each drive with its size and SMART health (power-on hours, temperature, wear, reallocated sectors); ZFS pools and RAID arrays. |
| **Backups** | The backups you asked it to watch, with how old the newest one is. |

It also reads the machine's Docker containers in the same pass, if HaRM reads them. **⟳ Check again** reads it all fresh.

Drive health goes into each drive's **Health** field on its part (for example "SMART OK, 21k hours"), matched by serial number, so your inventory stays current.

### Virtual drives and labels

A RAID card shows its drives to the system as one big virtual drive: twelve 4 TB drives in RAID 6 appear as one 42 TB disk, without SMART health. Press **✎** next to it and say what it really is:

- **Call it**: a name, like "Media array".
- **What it really is**: like "12 × 4 TB WD Red in RAID 6 (40 TB usable)".
- **Don't warn about it**: for a volume that's meant to be full, like a small boot partition.

![A server's Health tab: a 42 TB RAID virtual drive labelled as 12 × 4 TB in RAID 6](/img/harm/health.png)

HaRM shows your words first and keeps reading the real values underneath ("42 TB as the system sees it"). Labels work on volumes, drives and ZFS pools.

### What counts as a problem

| Problem | When |
|---|---|
| A volume is almost full | 90% (and a red Problem from 95%). |
| A drive is failing | SMART says so, or reports reallocated or pending sectors, or an SSD has used 90% of its rated wear. |
| A pool or array is degraded | A ZFS pool that isn't ONLINE, or a RAID array with a missing drive. |
| Memory is almost full | Under 5% free. |
| Security updates | Any waiting. |
| A backup is late | The newest file or snapshot is older than you said to expect, or the folder is missing. |
| A container stopped | It was running at the last check and isn't now, keeps restarting, or is unhealthy. |

They show on the machine's Health tab, on **Home**, on its tile on the [Status](./status) page, and on **Maintenance**. A restart waiting shows as a note, not a problem.

## Backups to watch

**⋯ > Backups to watch** on a machine's Health tab takes:

- **A folder** that should get new files, like `/mnt/backups/nextcloud`. HaRM looks at the newest file, up to three folders deep.
- **A ZFS dataset** that should get new snapshots, like `tank/media` (its child datasets count too).

For each, choose how often a new one should arrive, from every 6 hours to every 30 days. HaRM warns when the newest is older than that.

[Proxmox backups](#proxmox) are checked by themselves.

## The Maintenance page

**Maintenance** (in the sidebar) shows every machine HaRM checks:

- **Needs attention**: every problem, with the machine it's on.
- **System updates**: machines with updates waiting or a restart needed. **Install** runs the system's own updater and keeps your changed settings files (on Proxmox it's a full upgrade, as Proxmox recommends). **Restart** restarts the machine. Both ask first.
- **Container updates**: every container with a newer image, with the version it runs and the new one when the image says (for example 1.41.9 → 1.42.2). **Update** or **Update all**, like on the [Containers](./docker) tab.
- **Machines**: each one's state, how long it's been up, and when it was last checked.
- **Backups**: every backup you watch, late ones first.
- **Proxmox**: your VMs and containers (below).

**⟳ Check everything** checks every machine, asks the registries about their containers' images, and reads Proxmox, one after another.

Everything that changes something runs when you press it, while HaRM is unlocked, and is recorded in the audit log. Nothing is installed or restarted on a schedule.

## Proxmox

With Proxmox connected in [Discover](./discover#proxmox) (keep **remember** on), the Maintenance page lists every VM and container with its state, CPU and memory use, how long it's been up, and its newest backup from any storage that holds backups (Proxmox Backup Server too). **⟳ Read Proxmox** reads them fresh.

A VM's **⋯** menu has **Start**, **Shut down**, **Reboot**, **Take a snapshot** and **Stop (force)**. A snapshot before updating a VM gives you a way back. HaRM names it `harm-` and the date; delete old ones in Proxmox.

Reading only needs the token's **PVEAuditor** role. For the buttons, give the token a role with `VM.PowerMgmt` and `VM.Snapshot` too: in Proxmox, **Datacenter > Permissions > Roles > Create**, then add it for the token on `/`.

**Settings > Status and actions > Maintenance** sets when a VM's newest backup counts as late (2 days at first). VMs with no backup at all show "none found" without a warning, since some are left out on purpose.

## The maintenance log

Every update, restart, container change, Proxmox power change or snapshot, and every [action](./actions) run leaves a **Did** note on the device, like "Updated container plex to 1.42.2." or "Installed 14 updates (curl, libcurl4, …).". When something breaks, the device's notes show what changed before. Turn it off in **Settings > Status and actions > Maintenance**.

## Background checks

Off at first. Checks normally happen when you press a button, because HaRM's saved logins are locked with your master password. Background checks read your machines every few hours on their own, also while HaRM is locked, and send [alerts](./alerts) for new problems. They only read: they never install, restart or change anything.

To turn them on:

1. **Settings > Status and actions > Maintenance**: tick **Check machines in the background** and choose how often (every hour to once a day).
2. On each machine's Health tab: **⋯ > Check it in the background…**, and pick the login to use.
3. To check Proxmox backups in the background too, tick **Also read Proxmox in the background** in the same Settings card.

::: warning A login HaRM can use while locked
For this, HaRM keeps a copy of the login (and the Proxmox token) encrypted with a key in its data folder, `background.key`, instead of your master password. It isn't in backups. Anyone who gets HaRM's data folder could use these logins, so give HaRM a login made for this.
:::

A limited login for background checks, on Debian, Ubuntu or Proxmox:

1. Make a user just for HaRM: `sudo adduser harm-check`, with a long random password (HaRM's password generator makes one). Save it as a login on the device in HaRM.
2. Drive health and refreshing the update list need root. Let the user run only those two, without a password: run `sudo visudo -f /etc/sudoers.d/harm-check` and add:
   ```
   harm-check ALL=(root) NOPASSWD: /usr/sbin/smartctl, /usr/bin/apt-get update -qq
   ```
3. When you turn background checks on for the machine, pick that login and **sudo: Only for drive health and the update list**.

Reading containers needs the `docker` group, which is as strong as root. Leave containers to your one-click checks if you'd rather not.

**⏸ Stop background checks** on the machine's Health tab forgets its copy of the login.

## Alerts

With [alerts](./alerts) on, **Also problems found by machine checks** (on at first) sends a message when a check finds a new problem, once, and another when it's gone. When a container stops or keeps restarting, the message includes the last lines of its log, so you see why without logging in.

## Related

- [Docker containers](./docker): a machine's containers, with updates, restarts and logs
- [Actions](./actions): any other command, sent with one click
- [Alerts](./alerts): how messages reach you
- [Security and privacy](./security): what's encrypted, and where
