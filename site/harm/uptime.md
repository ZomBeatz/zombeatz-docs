---
description: "The uptime report shows how much of the last day, week or month each device and service answered, worst first, with its outages."
---

# Uptime report

The uptime report shows how much of the last day, week or month each device and service answered, worst first. Open **Status** and press **📊 Uptime** to follow along. New in version 0.3.2.

![The uptime report: Alex's desktop and pve2 at the top with their outages, the rest at 100%](/img/harm/uptime.png)

## Reading it

Pick **Last 24 hours**, **Last 7 days** or **Last 30 days** at the top. There are two tables, **Devices** and **Services**, each sorted worst first. Click a column heading to sort by it.

| Column | What it means |
|---|---|
| **Answered** | The share of the time it answered, with a bar: green from 99.9%, amber from 99%, red below. |
| **Outages** | How many times it stopped answering in the period. |
| **Longest** | The longest of those outages. |
| **Down in total** | All the outages added up. |

A device is measured by its main address, the same one the [Status](./status) page shows first. Virtual machines and containers say which host they run on.

## Services and Docker containers

Every service HaRM checks is in the **Services** table: web pages and ports on a device's **Network** tab (see [Status](./status#services)).

HaRM doesn't talk to Docker itself. To see your Docker containers in the report, add each one as a service on the Docker host's **Network** tab, with the port or web address it publishes (Portainer on 9443, Nextcloud on 8080…). Put "Docker container" in its notes if you like. A container that runs as its own machine with its own address (an LXC container on Proxmox, say) can be a device instead: see [Virtual machines and clusters](./virtual-and-clusters).

## What counts

- Only time HaRM was checking counts. If the HaRM computer was off or asleep, or checks were off, that time is left out instead of counting as down.
- A device that's **Not hooked up**, retired, sold or has **Check if it's online** unticked isn't checked, so it isn't in the report.
- History is kept for 30 days, so a device added last week only has last week.
- For a full month with no gaps, run HaRM on an [always-on server](./scenarios/home-server).

## Related

- [Status](./status): what's answering right now
- [Alerts](./alerts): a message the moment something stops answering
- [Networks and cables](./networks): adding services and ports
