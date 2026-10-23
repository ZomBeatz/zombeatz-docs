# Away from home

Use your computer's boards on your phone from anywhere, not just on your home Wi‑Fi. The simplest safe way is **Tailscale**, a free private network for your own devices. Nothing is opened to the internet.

1. **Install Tailscale** on your computer and your phone (tailscale.com, free for personal use) and sign in to the same account on both.
2. **On the computer:** **Settings > Phones & tablets**, next to **Devices connect to**, choose the Tailscale address (it starts with `100.`). If the page says the certificate doesn't cover that address, click **Make a new certificate**, then install the new one on your phone (**Put it on a device**).
3. **On the phone:** pair again with **Scan the QR code on your computer** (it now uses the Tailscale address).
4. Keep the computer on, with Zomello running in the tray.

Now, wherever the phone has internet and Tailscale is on, it can reach your computer's boards.

## Would a server be better?

If your computer is often off, or several people need access, run a [Zomello Server](../server) on an always-on machine instead ([A small team](./small-team) shows the setup with Tailscale).
