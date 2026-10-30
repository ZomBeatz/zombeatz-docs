---
description: "Starting Zom's HaRM the first time: the master password, the recovery code and the setup guide."
---

# First start

The first time, you start HaRM, create the master password that protects your logins, and follow a short setup guide.

![The HaRM desktop app, running](/img/harm/desktop-app.png)

1. Open **Zom's HaRM** from the Start Menu or app menu. The control panel opens.
2. Leave both settings ticked if you want to use a phone:
   - **Let phones and other devices connect (share on my network)**
   - **Use HTTPS** (phones need it for the camera and for installing HaRM as an app)
3. Press **Start**. The first time, HaRM offers to create its HTTPS certificate: choose **Yes**.
   - **Windows:** a firewall prompt appears. Tick **Private networks** and choose **Allow**.
4. Press **Open HaRM**. Your browser warns once about the certificate, because it doesn't know HaRM's own certificate authority yet. On this computer it's safe to continue (**Advanced > Proceed**), or set up trust properly as on [Phones and tablets](./phones-and-tablets).
5. **Create your master password** (10 or more characters). It encrypts your stored logins. HaRM can't recover it for you.
6. **Write down the recovery code** HaRM shows and keep it somewhere safe. It's the only way back in if you forget the password.
   ![Unlocking HaRM](/img/harm/unlock.png)

7. Follow the **setup guide**: Locations, then racks, shelves and piles, then networks, then devices, then security and your phone. It takes about 10 minutes, and every step can be skipped and done later.

![The setup guide](/img/harm/setup-guide.png)

After that, HaRM opens on **Home**: what needs attention and your open tasks. See [Home and search](./home-and-search).

::: tip Running on a server?
If HaRM runs in Docker or as a service, there's no control panel: open `https://<server address>:8077` in a browser and start from step 5.
:::

## Related

- [Phones and tablets](./phones-and-tablets)
- [Desktop app](./desktop-app)
- [Places and racks](./places-and-racks)
