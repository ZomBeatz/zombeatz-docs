---
description: "How a Zom's HaRM server sets up https with its own certificate authority, how phones trust it, and changing the server's address."
---

# https and certificates

A HaRM server serves https with a certificate from its own small certificate authority, so logins travel encrypted on your network and phones allow the camera and **Install app**. This page covers how that works on a server; on a desktop computer the control panel does all of it ([The desktop app](./desktop-app)).

## How it works

The first time it starts, HaRM makes two things in `data/tls`:

| File | What it is |
|---|---|
| `harm-ca.crt` | HaRM's certificate authority. Devices trust this **once**, and from then on trust HaRM. |
| `harm-ca.key` | Its private key. Never share it. |
| `harm.crt`, `harm.key` | The server's certificate, for the names and addresses in `HARM_CERT_NAMES`, signed by the authority |

The server certificate lasts 820 days, which iPhones and iPads require (they refuse anything over 825). In Docker, each start checks it and makes a new one, from the same authority, when it's within 30 days of running out or doesn't cover `HARM_CERT_NAMES`. Devices keep trusting it.

## Choosing the address

Set **HARM_CERT_NAMES** to every name and address your devices will use, separated by spaces:

```yaml
HARM_CERT_NAMES: "192.168.1.50 harm.lan"
```

- Give the server a fixed IP address in your router (a DHCP reservation), so it never changes.
- A name like `harm.lan` only works if your router or DNS server knows it.
- `localhost` and `127.0.0.1` are always included.

## Changing the address later

1. Change `HARM_CERT_NAMES` (Linux service: run `./scripts/install-server.sh --names "…"` again).
2. Run `docker compose up -d`. HaRM re-issues the server certificate from the same authority.

Phones that already trust HaRM keep trusting it: they trust the authority, not the single certificate.

## Trusting HaRM on a device

Each phone, tablet or computer that uses HaRM trusts `harm-ca.crt` once:

- **Phones and tablets:** **Settings > Phones & tablets** in HaRM shows a QR code for the certificate and the steps for each phone. See [Phones and tablets](./phones-and-tablets) and [iPhone and iPad](./iphone-ipad).
- **Computers:** download it from `https://<server>:8077/harm-ca.crt` and add it to the computer's trusted certificate authorities. Or continue past the browser's warning on that computer; that works too, but the warning comes back now and then.

::: warning Only on your own devices
Only install `harm-ca.crt` on devices you own. Anyone with `harm-ca.key` could make certificates those devices would trust for any website, so keep the `data` folder private.
:::

## Behind your own reverse proxy

Already have Caddy, Traefik or Nginx Proxy Manager with a real certificate? Let it handle https:

1. Set `HARM_TLS: "0"` so HaRM serves plain http, only to the proxy.
2. Point the proxy at `http://<server>:8077`.
3. Set `HARM_TRUSTED_PROXIES` to the proxy's address, so HaRM sees visitors' real addresses (for the audit log and sign-in limits).

Keep the proxy on your home network or VPN too.

## Related

- [Setting up a server](./server): Docker and the Linux service
- [Server settings](./server-settings): every environment setting
- [Phones and tablets](./phones-and-tablets): connecting a phone, step by step
- [Troubleshooting](./troubleshooting#phones-and-tablets): when a phone won't connect
