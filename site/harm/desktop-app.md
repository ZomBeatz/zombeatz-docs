---
description: "The Zom's HaRM desktop app: start and stop the server, see its addresses, set up phones, fix the certificate, and keep it running in the tray."
---

# The desktop app

The desktop app (the control panel) starts and stops HaRM, shows the addresses to use, and helps connect phones. HaRM itself runs in your browser; the control panel just looks after the server.

![The control panel while HaRM is running](/img/harm/desktop-app.png)

## Starting and stopping

- **Start**, **Stop** and **Restart** control the server. While it runs, the panel shows how long it's been up (for example *Up 3d 4h 17m 09s*), whether it uses HTTPS, and whether it's shared on your network.
- **Open HaRM** opens it in your browser.
- Closing the window keeps HaRM running in the **system tray**. Right-click the tray icon to open HaRM, start or stop it, or quit. Quitting asks whether to stop the server too.
- Opening the app again brings the same window forward. After an update, a bar offers to reload the panel (the server keeps running).

![Before starting: only the settings that matter are shown](/img/harm/desktop-app-stopped.png)

## Where to open it

Once running, the panel lists **This computer** (`https://localhost:8077`) and, when shared, the address for phones, each with **Copy**.

If the computer's IP address changes and the certificate doesn't cover it, the panel says so and offers **Fix certificate**. HaRM re-issues the certificate from the same authority, so phones that already trust HaRM keep trusting it.

## Settings

| Setting | What it does |
|---|---|
| **Let phones and other devices connect** | Shares HaRM on your network. Off means only this computer can use it. |
| **Use HTTPS** | Needed for phones (camera, installing the app). |
| **Port** | 8077 unless another program uses it. |
| **Start HaRM when I log in** | Starts the server in the tray when you sign in to your computer. |
| **Keep running in the tray when this window is closed** | Closing the window hides it instead of quitting. |

Changes to sharing, HTTPS or the port take effect after **Restart**.

## Looks

The control panel follows your computer's light or dark setting, with the same colors as HaRM itself. New in version 0.3.2.

## Bringing in an older HaRM's data

Versions before 0.3.2 kept data next to the app. Until the installed app has data of its own, the panel shows **Used HaRM before?** with **Bring in data from an older HaRM…**: pick the old HaRM folder, and its devices, logins, certificates and backups are copied into the [data folder](./data-and-backups#where-your-data-is). The old folder isn't changed.

## Phone setup

**Phone setup** opens a step-by-step guide with QR codes and a checklist that follows your phone's progress. See [Phones and tablets](./phones-and-tablets).

## Server log

**Server log** at the bottom shows what the server is doing. If HaRM won't start, the reason is there.

## Related

- [Installing and updating](./installing): installing and the first start
- [Phones and tablets](./phones-and-tablets): Phone setup, step by step
- [Troubleshooting](./troubleshooting#starting-harm): when it won't start
