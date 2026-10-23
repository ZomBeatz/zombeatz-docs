---
description: "Use your computer's boards on your phone when you're out, by connecting the phone to your home network with a VPN. Nothing is opened to the internet."
---
# Away from home

Use your computer's boards on your phone when you're out, not just on your home Wi‑Fi. The safe way is a **VPN into your home network**: the phone connects back home, and Zomello works as if you never left. Nothing is opened to the internet.

## What you need

A VPN that puts your phone on your home network. Many home routers have one built in (look for **VPN server** in the router's settings; WireGuard and OpenVPN are common). Your router's maker has the setup steps. Zomello doesn't need anything special from it.

## Set it up

1. **At home first:** set up Zomello on your phone the usual way ([Your computer and your phone](./computer-and-phone)), so the phone is paired and has the certificate.
2. **Give the computer a fixed address** on your home network (in your router, often called a "DHCP reservation"), so the address the phone knows doesn't change.
3. Keep the computer on, with Zomello running in the tray.
4. **When you're out:** turn on the VPN on your phone, then open Zomello. It reaches your computer at its normal home address.

## If it doesn't connect

- **Try it at home with Wi‑Fi off.** Turn off Wi‑Fi on the phone, turn on the VPN, and open Zomello. If it works, it'll work when you're out too.
- **The VPN only sends some traffic home.** Check that the VPN on the phone includes your home network (for WireGuard, your home range such as `192.168.1.0/24` in **Allowed IPs**).
- **The VPN reaches the computer by a different address.** On the computer, go to **Settings > Phones & tablets** and pick that address next to **Devices connect to**. If the page says the certificate doesn't cover it, click **Make a new certificate**, put the new one on your phone (**Put it on a device**), and pair again with **Scan the QR code on your computer**.
- More help: [Troubleshooting](../troubleshooting).

::: danger Don't open port 7311 on your router
Forwarding the port to the internet makes your computer reachable by anyone. Use a VPN instead.
:::

## Would a server be better?

If your computer is often off, or several people need access, run a [Zomello Server](../server) on an always-on machine instead. The same VPN reaches it.
