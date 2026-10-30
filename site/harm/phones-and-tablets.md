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

## When to grab your phone

HaRM on a computer is best for setting things up. The phone is best wherever the hardware is: at the rack, on the shelf, in the garage. Some good moments:

### Standing at the rack

You're behind a server with a cable in your hand. Search finds it by name, IP, serial or MAC, and the device page shows where it sits, what's plugged into it and its addresses.

<div class="phone-shots">

![Search on a phone](/img/harm/phone-search.png)
![A device's network ports on a phone](/img/harm/phone-device-network.png)

</div>

The **Network** tab lists every port with its address and MAC, and the ★ main address is the one the quick links use. See [Devices](./devices) and [Networks](./networks).

### At a console or a login prompt

You're on a crash cart and need the iDRAC or switch password. On the device's **Logins** tab, **Open** shows the login and copies the password, and the management page opens with one tap. Reveals are written to the audit log. See [Logins](./logins).

<div class="phone-shots">

![A login's Open window on a phone](/img/harm/phone-login-open.png)

</div>

### Putting away parts and new arrivals

A box of drives or RAM arrives, or you're sorting the spares bin. **+ New > New part from label** opens the form with the camera ready: point it at the label and tap the serial, model or part number. **Save & add another** keeps you going. See [Scanning and labels](./scanning-and-labels).

<div class="phone-shots">

![The + New menu on a phone](/img/harm/phone-new-menu.png)
![Adding a part on a phone, with camera buttons](/img/harm/phone-part-form.png)
![The label scanner](/img/harm/phone-scanner.png)

</div>

### Photographing a whole shelf

Too much to scan one by one? **AI Assist** takes photos of a shelf or a pile and turns them into parts and devices, with prices if the AI can look them up. On a phone you take the photos right there. See [AI Assist](./ai-assist).

<div class="phone-shots">

![AI Assist on a phone](/img/harm/phone-ai-assist.png)

</div>

### Walking the garage or storage room

Open a location to see what's in each holder there and what still needs doing. **Device here**, **Part here** and **AI Assist here** fill in the place for you. See [Places and racks](./places-and-racks).

<div class="phone-shots">

![A location on a phone](/img/harm/phone-location.png)
![Spare parts on a phone](/img/harm/phone-parts.png)

</div>

### While you work

Tick off tasks as you finish them, and jot down what you did ("swapped PSU 2") on the device you're touching, so the history is there next time. See [Notes and tasks](./notes-and-tasks).

<div class="phone-shots">

![Tasks on a phone](/img/harm/phone-tasks.png)

</div>

### Better on a computer

The first setup, **Discover** and other bulk imports, **Import specs**, the PC builder, exports and backups, and settings. They all work on a phone, but a big screen and a keyboard make them quicker. An iPad sits in between: the full layout, with the camera.

## Related

- [Troubleshooting](./troubleshooting)
- [Desktop app](./desktop-app)
- [Security](./security)
