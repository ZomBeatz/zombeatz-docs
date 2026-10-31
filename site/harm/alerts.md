---
description: "Get a message by ntfy, email or a webhook when a device or service stops answering, and when it's back."
---

# Alerts

HaRM can send you a message when a device or service stops answering, and when it's back: by **ntfy** (a phone app), **email** or a **webhook**. Open **Settings > Status and actions > Alerts** to follow along. New in version 0.3.2.

![The Alerts window with ntfy turned on](/img/harm/alerts.png)

## Turning them on

1. Open **Settings > Status and actions** and press **Set up alerts…** in the **Alerts** card. (On the Status page: **⋯ > Alerts…**.)
2. Tick **Send alerts**, and choose how long to wait.
3. Turn on at least one way to send them: ntfy, email or a webhook, and fill in its details.
4. Press **Save**, then **Send a test**, and check it arrives.

| Option | What it does |
|---|---|
| **Send alerts** | Alerts on or off, for everything. |
| **When a device stops answering** | **Alert right away**, or wait 5, 10, 15 or 30 minutes, or an hour. Waiting skips short blips, like a restart. |
| **Also tell me when it's back** | A second message when it answers again, with how long it was down. |
| **Also when a service stops answering** | Alerts about the services on a device's **Network** tab too (a web page or a port), while the device itself answers. |
| **Also when a certificate runs out soon** | One alert 14 days before an https service's certificate runs out (or as soon as HaRM sees one that already has). |
| **Hold alerts during quiet hours** | With **From** and **Until**: see [Quiet hours](#quiet-hours). |

[New devices on the network](./new-devices) send their alerts the same way, when that's turned on.

Alerts only cover devices that are checked (see [Status](./status#how-a-device-is-checked)). To leave one device out, edit it and untick **Send alerts about it**.

## ntfy: a notification on your phone

[ntfy](https://ntfy.sh) is a free app for Android and iPhone that shows notifications sent to a "topic", a name you make up.

1. Install **ntfy** on your phone and add a subscription. Make up a long topic name only you know, like `harm-garage-7f3k2`: anyone who knows it can read your alerts.
2. In HaRM, tick **Send by ntfy** and enter the server and topic: `https://ntfy.sh/harm-garage-7f3k2`.
3. **Access token**: only if your topic or your own ntfy server needs one.

Offline alerts arrive with high priority, and "back online" ones with normal priority. If you run your own ntfy server, use its address instead of ntfy.sh.

## Email

| Field | What to enter |
|---|---|
| **Mail server** and **Port** | Your provider's SMTP server, like `smtp.gmail.com` and port 587. |
| **Security** | **STARTTLS** (usually port 587), **SSL/TLS** (usually port 465), or **None** for a mail server on your own network (port 25). |
| **Username** and **Password** | Your mail account. For Gmail and Outlook, make an **app password** in your account's security settings; your normal password won't work. |
| **From** | The sender. Leave it empty to use the username. |
| **Send to** | Where alerts go. Separate several addresses with commas. |

## Webhook

A webhook sends the alert to a web address: a Home Assistant automation, a Discord or Slack channel, Gotify, or your own script. Tick **Send to a webhook** and paste the address.

HaRM posts JSON with these fields:

| Field | What's in it |
|---|---|
| `title`, `message` | The alert, like "pve2 is offline" and "No answer from 10.20.0.11 since 14:30." |
| `text`, `content` | The title and message together (`text` is what Slack shows, `content` is what Discord shows). |
| `state` | `down` or `up`. |
| `kind`, `device`, `service`, `address` | What it's about. `kind` is `device`, `service`, `summary` or `test`. |

## What the messages look like

| When | Title |
|---|---|
| A device stops answering | **pve2 is offline**: "No answer from 10.20.0.11 since 14:30." |
| It's back | **pve2 is back online**: "10.20.0.11 answers again, after 25 min." |
| A service stops answering | **Proxmox VE on pve1 isn't answering**: the address and why (HTTP 502, connection refused, no answer). |
| A certificate runs out soon | **The certificate for DSM on vault runs out soon**: the address and the date. |
| A new device on a watched network | **New on Home LAN: Sams-iPhone**: its address, MAC and name. |
| More than 3 at once | One message, like **HaRM: 6 problems**, listing them. A power cut or a dead switch sends one message, not twenty. |

A service isn't reported while its device is offline: the device's own alert covers it. When you turn alerts on, things that were already down don't send an alert.

## Quiet hours

Tick **Hold alerts during quiet hours** and choose **From** and **Until** (in the HaRM computer's time), like 22:00 to 07:00. Alerts in that time are held, and when quiet hours end they arrive together as one message ("HaRM: 3 alerts from quiet hours") listing what happened, including things that went down and came back overnight. **Send a test** is never held.

## When they're sent

Alerts come from HaRM's background checks (every 5 minutes unless you changed it in [Settings](./settings#status-and-actions)), so they arrive within one check of the wait you chose. They're sent while HaRM is locked too, but only while HaRM is running: if the HaRM computer is off or asleep, nothing checks. For alerts all day and night, run HaRM on an [always-on server](./scenarios/home-server).

The list under **Send a test** shows the last alerts sent, and why any of them failed.

::: info Where alert passwords are kept
Alerts are sent while HaRM is locked, so their secrets (the email password, an ntfy token, the webhook address) can't be locked with your master password like logins are. HaRM encrypts them with a key of their own, in `alerts.key` in HaRM's [data folder](./data-and-backups#where-your-data-is). That file isn't in backups: after restoring a backup on another computer, enter them again.
:::

## Related

- [Status](./status): what's checked, and how
- [Settings](./settings#status-and-actions): how often HaRM checks
- [Troubleshooting](./troubleshooting#status-and-actions): when alerts don't arrive
- [An always-on home server](./scenarios/home-server): alerts around the clock
