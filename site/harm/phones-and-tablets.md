---
description: "Connect your phone or tablet to Zom's HaRM: trust its certificate once, then install it as an app. Android, Samsung Galaxy, iPhone and iPad."
---

# Phones and tablets

Your phone uses HaRM over your home Wi‑Fi, like an app on its home screen. It needs to trust HaRM's certificate once; after that, restarts and certificate changes keep working.

## Why a certificate?

HaRM uses HTTPS so your logins travel encrypted and your phone allows the camera and **Install app**. Because HaRM runs at home, it makes its own small certificate authority (`harm-ca.crt`). Your phone trusts that once, and from then on trusts HaRM.

## With the desktop app: Phone setup

In the desktop app, press **Phone setup**. (It shows once HaRM is running and shared on your network.)

![Phone setup: a checklist that ticks itself off, and QR codes](/img/harm/phone-setup.png)

- **QR codes**, so you never type an address: one downloads the certificate, the other opens HaRM.
- **Steps for Android, Samsung Galaxy and iPhone / iPad**, chosen with the buttons.
- **A checklist that ticks itself off** as your phone reaches HaRM, downloads the certificate, trusts it, signs in and installs the app. If something's wrong it says which step, and offers a fix where it can (share on the network, turn on HTTPS, fix the certificate, open the firewall).

## Without the desktop app (server, Docker)

In HaRM go to **Settings > Phone app**. It shows the same two QR codes and the steps for each phone.

![Settings > Phone app](/img/harm/phone-app-help.png)

## Android (Pixel and most phones)

1. Scan the first QR code (or open `https://<address>:8077/harm-ca.crt`). Chrome warns once that the connection isn't private: tap **Advanced > Proceed**. **harm-ca.crt** downloads.
2. Open **Settings > Security & privacy > More security & privacy > Encryption & credentials > Install a certificate > CA certificate > Install anyway** and pick **harm-ca.crt**.
3. Close Chrome completely (swipe it away in recent apps), then scan the second QR code. HaRM opens with a padlock and no warning.
4. Unlock HaRM, then **Chrome menu > Add to Home screen > Install**.

## Samsung Galaxy

Same as Android, except step 2: **Settings > Security and privacy > More security settings > Install from device storage > CA certificate > Install anyway**, then pick **harm-ca.crt**. Use Chrome rather than Samsung Internet for HaRM.

## iPhone and iPad

1. **If you opened HaRM on this iPhone or iPad before**, clear it first: **Settings > Apps > Safari > Advanced > Website Data** (older versions: **Settings > Safari > Advanced > Website Data**), search for HaRM's address and delete it. Remove any HaRM icon from the home screen.
2. Scan the first QR code with the **Camera** and open it in **Safari**. If Safari warns, tap **Show Details > visit this website**. Tap **Allow**, then **Close**.
3. **Settings > Profile Downloaded** (or **General > VPN & Device Management**) > **Zom's HaRM local CA** > **Install**.
4. **Settings > General > About > Certificate Trust Settings**: turn on **Zom's HaRM local CA**. Don't skip this one: without it HaRM works in Safari but never from the home screen.
5. Close Safari completely, then scan the second QR code. HaRM opens with no warning.
6. Unlock, then **Share > Add to Home Screen > Add**.

## On the phone

![HaRM on a phone](/img/harm/phone-home.png)

- A bottom bar with **Home**, **Devices**, **Racks**, **Tasks** and **More** (the full menu).

  ![The full menu on a phone](/img/harm/phone-menu.png)

- Press and hold the HaRM icon on the home screen for **Scan**, **Devices** and **Tasks** shortcuts.
- On an iPad, HaRM shows the full sidebar like a computer.

  ![HaRM on an iPad](/img/harm/ipad-device.png)

- Camera buttons read serials, part numbers and MACs from labels: [Scanning and labels](./scanning-and-labels).

## Related

- [Troubleshooting](./troubleshooting)
- [Desktop app](./desktop-app)
- [Security](./security)
