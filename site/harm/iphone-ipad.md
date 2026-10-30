---
description: "Connect an iPhone or iPad to Zom's HaRM: trust its certificate, add it to the home screen, and fix it when it won't connect."
---

# iPhone and iPad

Every step to use HaRM on an iPhone or iPad, and what to do when it won't connect. HaRM must be running and shared on your network with HTTPS: [Phones and tablets](./phones-and-tablets) covers that part, and Android.

## Before you start

- The iPhone or iPad is on the **same Wi‑Fi** as the computer or server running HaRM.
- On the computer, the control panel's **Phone setup** is open with **iPhone / iPad** chosen. On a server, open **Settings > Phones & tablets > How to connect a phone…** in HaRM on another device.
- Keep both in reach: the checklist on the computer ticks off each step as the iPhone gets there.

## 1. Clear anything left from before

Opened HaRM on this device before? Clear it first, or Safari keeps using the old certificate.

1. **Settings > Apps > Safari > Advanced > Website Data** (older versions: **Settings > Safari > Advanced > Website Data**).
2. Search for HaRM's address (like `192.168`) and delete it.
3. Remove any HaRM icon from the home screen.

## 2. Download and install the certificate

1. Scan the **first** QR code with the **Camera** app and open the link in **Safari**. If Safari warns, tap **Show Details > visit this website**.
2. Tap **Allow** to download the profile, then **Close**.
3. Open **Settings**. Tap **Profile Downloaded** near the top (or **General > VPN & Device Management**), then **Zom's HaRM local CA > Install**, and enter your passcode.

## 3. Turn on full trust

1. **Settings > General > About > Certificate Trust Settings**.
2. Turn on **Zom's HaRM local CA**, and tap **Continue**.

::: warning Don't skip this step
Without full trust, HaRM may open in Safari but never from the home screen, and the home-screen icon shows a letter instead of HaRM's logo.
:::

## 4. Open HaRM and add it to the home screen

1. Close Safari completely (swipe it away), then scan the **second** QR code. HaRM opens with no warning.
2. Unlock with your master password.
3. Tap **Share > Add to Home Screen > Add**.

HaRM now opens from its own icon, without Safari's bars. Press and hold the icon for **Scan**, **Devices** and **Tasks**.

## On an iPad

The iPad shows the full layout, sidebar included, like a computer, and the camera works for labels and AI Assist. It's a good size for walking a rack: the rack drawing fits the screen.

![HaRM on an iPad](/img/harm/ipad-device.png)

## When it won't connect

### "Cannot reach the HaRM server" or "Failed to start"

- The device doesn't trust HaRM's certificate. Go back to step 3 and check **Zom's HaRM local CA** is turned on.
- The certificate changed and Safari remembers the old one. Do step 1, then open HaRM again.
- HaRM isn't running, or the iPhone isn't on the same Wi‑Fi. The checklist on the computer says which.

### It works in Safari but not from the home screen

Full trust is off (step 3). Turn it on, remove the home-screen icon, and add it again.

### The home-screen icon is just a letter

Same cause: the iPhone added the icon before it trusted HaRM. Turn on full trust, remove the icon, open HaRM in Safari, and add it again.

### "This Connection Is Not Private"

The profile isn't installed, or it was installed for an older HaRM. Delete it in **Settings > General > VPN & Device Management**, then start from step 1.

### Still stuck

**Help > Troubleshooting: can't connect** in HaRM opens at the steps for this device. More in [Troubleshooting](./troubleshooting#phones-and-tablets).

## Related

- [Phones and tablets](./phones-and-tablets): Android, and what works best on a phone
- [https and certificates](./server-https): how HaRM's certificate works
- [Troubleshooting](./troubleshooting#phones-and-tablets): every connection problem
