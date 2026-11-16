---
description: "Connect to your machines from Zom's HaRM: a terminal in HaRM with a saved login, your own SSH app, Remote Desktop, VNC, the Proxmox console and iDRAC or iLO."
---

# Connecting to your machines

Open a device and press **🔌 Connect**. Pick the address, the port and a saved login, then the way in. New in version 0.3.2.

| Way in | What it does |
|---|---|
| **⌨ Terminal in HaRM** | SSH in HaRM's own window, signed in with the saved login. |
| **↗ Open in my SSH app** | An `ssh://` link, for computers with an app that opens them. |
| **📋 Copy SSH command** | `ssh user@host` (with `-p` for another port), to paste into your own terminal. |
| **🖥 Remote desktop file (.rdp)** | For Windows machines, or anything with port 3389. Opens in Remote Desktop (Windows, Mac) or Remmina, which asks for the password itself. |
| **↗ VNC** | A `vnc://` link, when the device has a VNC port (5900–5999) on its **Network** tab. |
| **↗ Proxmox console** | A VM's or container's screen, or a node's shell, in Proxmox's own console. Shown when HaRM is connected to Proxmox ([Discover](./discover)). |
| **↗ Management page** | iDRAC, iLO or IPMI, which have their own remote console. |

Only the terminal in HaRM uses the saved password. The others open apps on your computer, which ask for it themselves.

## The terminal in HaRM

It's a full terminal: colors, `htop`, `nano`, copy and paste. It follows the window's size. **⧉ New window** opens another one beside it.

::: tip Safe by design
- It only works while HaRM is unlocked, and closes when HaRM locks, when you sign out, after 30 minutes without typing, or when you leave the page.
- At most 4 are open at once.
- Opening and closing one is recorded in the audit log. What you type and what the machine shows are never stored.
- If the machine's SSH key changed, HaRM won't connect until you press **Trust the new key and connect**. That's normal after reinstalling a machine, but can also mean something is intercepting the connection.
- Don't need it? Turn it off in **Settings > Locking and security > Terminal in HaRM**.
:::

It needs the `ssh` program on the computer running HaRM (it's built into Windows 10 and 11, macOS and most Linux), and a browser that can draw with WebGL (all current ones). On Windows the terminal doesn't follow the window's size.

## Related

- [Logins](./logins): saving the login the terminal uses, and changing a machine's password
- [Actions](./actions): saved commands you run with one click
- [Security and privacy](./security)
