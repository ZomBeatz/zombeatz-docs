---
description: "Zom's HaRM on an always-on NAS, home server or Raspberry Pi, used by every computer and phone in the house."
---

# An always-on home server

HaRM runs on a machine that's always on (a NAS, home server, mini PC or Raspberry Pi), and every computer and phone in the house uses it in a browser. You end up with one HaRM for the whole house, backed up with the server.

## On the server (once)

1. Give the server a fixed address in your router.
2. Set up HaRM with Docker or as a Linux service: [Setting up a server](../server). Put that address in **HARM_CERT_NAMES** before the first start.
3. Copy the `data` folder into the server's own backups, or to another disk now and then: [Backups, recovery and security](../server-backups).

## On your computer (once)

1. Open `https://<server address>:8077`. Continue past the certificate warning once, or trust HaRM's certificate on the computer ([https and certificates](../server-https#trusting-harm-on-a-device)).
2. Create your master password and keep the recovery code safe.
3. Follow the setup guide, then [Discover](../discover) to bring in your network.

## On each phone (once)

1. In HaRM, open **Settings > Phones & tablets > How to connect a phone…**.
2. Scan the QR codes and follow the steps for the phone: [Phones and tablets](../phones-and-tablets).

## Every day

- Every device in the house opens the same HaRM, at the same address.
- Updating is `docker compose pull && docker compose up -d`: [Setting up a server](../server#docker).

## Good to know

- There's no control panel on a server; HaRM is always running.
- Discover's network scan needs host networking in Docker: [Network scan and MAC addresses](../server#network-scan-and-mac-addresses).
- Everyone who uses HaRM shares the master password. Turn on 2FA for extra safety.
- Keep the server on your home network; use a VPN from outside.

## Related

- [Setting up a server](../server): Docker and the Linux service
- [https and certificates](../server-https): the address phones use
- [Server settings](../server-settings): every setting
