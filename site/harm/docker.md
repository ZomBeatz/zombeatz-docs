---
description: "See the Docker containers on a server from Zom's HaRM: which are running and healthy, which have newer images, and update, restart or read the logs of one with one click."
---

# Docker containers

A device's **Containers** tab lists the Docker containers on it: which are running and healthy, how long they've been up, the image each runs and whether a newer one is out, and the ports they publish. Updating Plex, restarting Nextcloud or reading why Paperless stopped is one click. New in version 0.3.2.

![A server's Containers tab: five containers, one with an update available and one stopped](/img/harm/containers.png)

## Reading the containers

1. Open the device that runs Docker (a server, a VM, a NAS) and pick **⋯ > Docker containers…**.
2. Pick its **address** and one of its saved **logins** (add the SSH login on the **Logins** tab first, if it has none).
3. Tick **Use sudo**, unless the login is in the `docker` group.
4. Press **Read containers**.

HaRM connects over SSH, like [Actions](./actions), and asks Docker for its containers. Nothing is changed. It remembers the address and login, and keeps the list it read, so the tab and the [Status](./status) page show it without connecting. **⟳ Read again** gets a fresh list.

| Column | What it shows |
|---|---|
| **Container** | Its name, and its Docker Compose project. |
| **State** | **Running**, **Stopped**, **Restarting**, **Paused**, or **Unhealthy** / **Starting** when the image has a health check. A container that keeps restarting says how often. |
| **Up for** | How long a running container has been up. |
| **Image** | The image and tag, with **Update available** or **up to date** after a check, and the versions when the image says (for example **1.41.9 → 1.42.2**). |
| **Ports** | Published ports. A web port opens in a new tab. |

## Updates

*[Try it in the demo](https://zombeatz.github.io/Zoms-HaRM/#/devices/16?tab=containers): Nextcloud and Plex have newer images.*

**Check for updates** asks each image's registry for its current version and compares it with the one on the server. Nothing is downloaded. An image built on the machine itself, or a registry that can't be asked, shows nothing rather than a guess. (It needs `docker buildx`, which comes with Docker Engine.)

Most images say which version they are; then the check shows the version you run and the newest one. [Maintenance](./maintenance) lists every container with an update, across all your machines.

**Update** on a container (or **⋯ > Update now**) downloads the newest image and re-creates the container with Docker Compose, using its own compose file, so its settings, volumes and ports stay the same. It's down for a moment while it restarts. The message says whether it was updated or already up to date, and **Output** shows what Docker printed. With more than one update, **Update all** does them one after another.

A container that wasn't started with Docker Compose can't be re-created with the same settings from outside, so **Update** only downloads its new image; re-create it the way you started it.

**⋯ > Clean up old images** deletes the images no container uses any more, like the old versions left after updates, and says how much space it freed.

## Restart, stop, start and logs

Each container's **⋯** menu has **Restart**, **Stop** (or **Start**), **Logs** (the last 200 lines) and **Update now**. Update, restart and stop ask first. Everything runs when you press it, while HaRM is unlocked, and is recorded in the audit log. Nothing runs on a schedule.

## Status and alerts

The [Status](./status) page shows a server's containers under it: how many, which ones aren't running, and how many have updates.

To be told when a container's web page stops answering, pick **⋯ > Watch its web page**. It becomes one of the device's services, checked every few minutes like the others, with [alerts](./alerts) and an [uptime report](./uptime). That works even while HaRM is locked, since it only checks the port.

::: tip Plex installed without Docker
For Plex installed from Plex's own package, use the **Update Plex (installed as a package, Debian or Ubuntu)** example in [Actions](./actions#examples).
:::

## Related

- [Maintenance](./maintenance): disk space, drive health, system updates and backups, and every update in one place
- [Actions](./actions): any command, sent with one click (with examples for Docker and Plex)
- [Status](./status): every device and service, with containers under their server
- [Logins](./logins): the saved logins HaRM connects with
