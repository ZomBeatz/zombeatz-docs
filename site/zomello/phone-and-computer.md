# Your computer's boards on your phone

The phone and tablet apps keep their own boards, and can also open the boards on your computer while both are on the same Wi‑Fi. The connection is encrypted, and nothing passes through the internet or ZomBeatz Media.

![Zomello on a phone](/img/zomello/phone.png){.phone}

## On the computer (once)

1. Open Zomello > **Settings > Phones & tablets** and tick **Allow access from phones and tablets on this network**.
2. **Let it through the firewall:** click **Allow through firewall** and confirm (Windows asks for an OK; Linux asks for your password). If the page says no firewall is blocking it, skip this.
3. Turn on **Settings > Desktop app > Keep running in the tray**, so phones still connect after you close the window.

## On the phone (once per phone)

1. **Install the computer's certificate.** It's what makes the connection secure. On the computer, under **Security certificate**, click **Put it on a device** and scan the QR code with the phone's camera app. The page that opens has the download and the steps for Android, iPhone and iPad.
2. **Pair:** on the computer, click **Pair a device**. A QR code and a six-digit code appear (they expire after 10 minutes).
3. In the Zomello app on the phone: **Settings > Servers > Scan the QR code on your computer**, and scan it. (Or type the `https://` address it shows, or paste the whole pairing link, then tap **Connect**.)
4. If the phone asks to let Zomello find devices on your local network, allow it.

That's it. The menu now has a heading for each place: **This phone** and **Computer** (plus any [Zomello Servers](./server)). Tap a board under **Computer** to open it there.

::: tip If it can't connect
"Couldn't reach your computer" almost always means one of three things: the computer's certificate isn't installed on the phone yet, the two aren't on the same Wi‑Fi, or Zomello isn't open on the computer. After scanning, Zomello offers **Install your computer's certificate** if that's the problem.
:::

## How it behaves

- Your computer's boards stay on the computer. The phone shows them while it can reach the computer; otherwise it opens its own boards and offers **Try again**.
- The app reopens wherever you were last.
- Your phone keeps its own look (theme, colors, density and accessibility settings) even on the computer's boards.
- While the phone is connected, its boards also show in the computer's sidebar under the phone's name, so you can open and edit them on the computer. To hide a phone's boards there, untick **Show its boards on this computer while it's connected** for that phone in **Settings > Phones & tablets**.

## Managing phones and tablets (on the computer)

**Settings > Phones & tablets** on the computer lists every paired device:

- **Rename** it (click its name), and see when it was last used.
- **Show its boards on this computer while it's connected:** untick to keep its boards out of the computer's sidebar.
- **Unlink** disconnects it right away; it would need to pair again.

The same page also has:

- **Devices connect to:** which of the computer's addresses phones use (pick another if it has Wi‑Fi and a cable, or a VPN like Tailscale, or type a name your router gives it), and the **port** (change it only if something else uses 7311).
- **Security certificate:** **Put it on a device** (a QR code for the certificate's setup page), **Save certificate file** (to install it by hand: send it to the device by cable, email, AirDrop or a cloud drive), and **Make a new certificate** (every device then installs the new one).

## Using a browser instead of the app

Any phone's browser can open your computer's boards too: scan the **Pair a device** QR code with the camera. The page installs the certificate and pairs the browser. On Android, Chrome then offers **Install app**; on iPhone and iPad, **Share > Add to Home Screen**.

## Related

- [Moving boards between devices](./moving-boards)
- [Sharing between your devices](./sharing-between-devices)
- [Troubleshooting](./troubleshooting)
