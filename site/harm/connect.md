---
description: "Connect to your machines from Zom's HaRM: a terminal and a file browser in HaRM with a saved login, your own SSH app, Remote Desktop, VNC (and setting it up), the Proxmox console and iDRAC or iLO."
---

# Connecting to your machines

Open a device and press **🔌 Connect**. Pick the address, the port and a saved login, then the way in. New in version 0.3.2. HaRM takes the port from the login's address when it has one (like `10.0.0.5:2222`).

| Way in | What it does |
|---|---|
| **⌨ Terminal in HaRM** | SSH in HaRM's own window, signed in with the saved login. |
| **📁 Files** | The machine's folders and files in HaRM: upload, download, edit, and run a command in a folder. |
| **↗ Open in my SSH app** | An `ssh://` link, for computers with an app that opens them. |
| **📋 Copy SSH command** | `ssh user@host` (with `-p` for another port), to paste into your own terminal. |
| **🖥 Remote desktop file (.rdp)** | For Windows machines, or anything with port 3389. Opens in Remote Desktop (Windows, Mac) or Remmina, which asks for the password itself. |
| **🖥 Screen in HaRM (VNC)** | The machine's screen in HaRM's page, through SSH when a login is picked, or to a VNC port (5900–5999) on its **Network** tab. |
| **↗ VNC app** | A `vnc://` link, for the VNC app on your computer. |
| **↗ Proxmox console** | A VM's or container's screen, or a node's shell, in Proxmox's own console. Shown when HaRM is connected to Proxmox ([Discover](./discover)). |
| **↗ Management page** | iDRAC, iLO or IPMI, which have their own remote console. |

Only the terminal, files and screen in HaRM use the saved login. The others open apps on your computer, which ask for it themselves.

## The terminal in HaRM

It's a full terminal: colors, `htop`, `nano`, copy and paste. It follows the window's size. **⧉ New window** opens another one beside it.

::: tip Safe by design
- It only works while HaRM is unlocked, and closes when HaRM locks, when you sign out, after 30 minutes without typing, or when you leave the page.
- At most 4 are open at once.
- Opening and closing one is recorded in the audit log. What you type and what the machine shows are never stored.
- If the machine's SSH key changed, HaRM won't connect until you press **Trust the new key and connect**. That's normal after reinstalling a machine, but can also mean something is intercepting the connection.
- Don't need it? Turn it off in **Settings > Locking and security > Terminal and screen in HaRM**.
:::

It needs the `ssh` program on the computer running HaRM (it's built into Windows 10 and 11, macOS and most Linux), and a browser that can draw with WebGL (all current ones). On Windows the terminal doesn't follow the window's size.

## The screen in HaRM (VNC)

HaRM relays the screen from the machine's VNC port to its page, over HaRM's own connection. **Ctrl+Alt+Del** sends that to the machine, **Only watch** stops your mouse and keys going to it, and **⛶ Full screen** fills the screen.

**Through SSH (encrypted).** When you pick a login with a username in **🔌 Connect**, **Through SSH** is on: HaRM signs in to the machine over SSH (with [its own key](#harm-s-ssh-key) if the machine has it, or the login's password) and reaches VNC on the machine itself. The screen is encrypted all the way, and VNC servers that only listen on the machine work too, like `x11vnc -localhost` or a desktop's built-in screen sharing set to local only. If the device has no VNC port on its **Network** tab, type the port: 5900 is display `:0`, 5901 is `:1`. New in version 0.3.3.

**Straight to VNC.** With no login, or **Through SSH** unticked, HaRM connects to the VNC port directly. VNC itself isn't encrypted between HaRM and the machine, so keep that to your home network.

If the machine asks for a VNC password, HaRM uses the password of the login you picked (that's recorded in the audit log). If the machine refuses it, **⟳ Connect again** asks you instead.

- It only connects to the device's own addresses, on a VNC port (5900–5999, or a service on its **Network** tab named VNC).
- If the machine's SSH key changed, HaRM won't connect until you press **Trust the new key and connect**, like the terminal.
- It closes when HaRM locks or you sign out, and at most 4 are open. Opening one is in the audit log, with whether it went through SSH; nothing on the screen is stored.
- Turn it off with the terminal in **Settings > Locking and security**.
- For Proxmox VMs, use **↗ Proxmox console** instead.

### Finding a screen, or setting one up

VNC needs a program on the machine that shares its screen (a VNC server). Many Linux desktops don't run one, so there's nothing to connect to. **🔍 Find screens**, next to the screen in **🔌 Connect**, looks at the machine over SSH (it only reads) and lists the VNC servers it runs, each with **🖥 Open**, including ones that only listen on the machine itself. New in version 0.3.3.

On a Linux desktop that uses X11 (Xfce, MATE, Cinnamon, LXQt, or GNOME and KDE in their X11 sessions), **🔧 Set up screen sharing** does it for you. HaRM signs in with the login and, with sudo:

- installs **x11vnc** with the machine's package manager (apt, dnf, zypper, pacman or apk), if it isn't there yet,
- runs it as a service, `zoms-harm-vnc`, that shares the desktop on the machine itself only (127.0.0.1), so it can only be reached through SSH, also at the login screen and after a restart,
- with a new VNC password, saved in the vault as **VNC screen** and the device's name. HaRM uses it when you open the screen.

**Take it out** in the same place stops and removes the service and deletes the password from the vault. x11vnc stays installed. Setting up and taking out are in the audit log and the device's notes.

Machines it can't set up get directions instead:

- **Wayland desktops** (GNOME, KDE Plasma and Sway, as they start by default): x11vnc can't share them. GNOME has **Settings > System > Remote Desktop**, KDE has **Krfb**, Sway has **wayvnc**. Or sign in to the X11 session and set it up here.
- **Macs**: **System Settings > General > Sharing > Screen Sharing**, then open it on port 5900.
- **Machines without a desktop**, like most servers: there's no screen to share. Use the terminal.
- **Windows**: use the Remote Desktop file.

## Files on a machine

**📁 Files** in **🔌 Connect** (and on the terminal page) opens the machine's folders in HaRM, signed in with the saved login (or [HaRM's key](#harm-s-ssh-key)). It starts in the login's home folder. New in version 0.3.3.

- Click a folder to open it; **↑** goes up, **⌂** goes home, and you can type a path. The list shows each file's size, when it changed, its permissions and its owner. **Hidden files** shows the ones starting with a dot.
- **⬆ Upload**, or drop files on the list. **⬇** downloads one.
- Click a text file (up to 1 MB) to open it in an editor, and **💾 Save** (or Ctrl+S). Saving keeps the file's owner and permissions. Bigger or binary files download instead.
- **+ Folder**, **+ File**, **✎** to rename or move (type a full path to move it), and **🗑** to delete (a folder with everything in it). HaRM won't delete `/` or the home folder.
- **Use sudo** lists, opens, saves and deletes as root, for system files like those in `/etc`. It uses the login's saved password for sudo.
- **The command box** at the bottom runs one command in the folder you're in, as one shell, and shows what it printed and its exit code. It stops after 2 minutes, and can't take typing: for `nano`, `htop` and the like, press **⌨ Terminal**.

::: tip Safe by design
- One SSH connection per file browser, only while HaRM is unlocked. It closes when HaRM locks, after 30 minutes unused, or when you leave the page, and at most 4 are open.
- Uploads, downloads, saves, renames, deletes and commands are in the audit log (which file, or the command). File contents are never stored in HaRM.
- It works on Linux, macOS and NAS boxes with SSH. Windows machines don't get it.
:::

## HaRM's SSH key

Instead of a password, HaRM can sign in with a key of its own, the safer way to use SSH:

1. **Settings > Locking and security > HaRM's SSH key > 🗝 Make a key.** HaRM makes one key pair (ed25519). The public key shows there, with **Copy**.
2. Add it to your machines:
   - **All at once:** **🗝 Add to my machines…** under the key in Settings lists every device with a saved login of the kind **SSH** or **OS Account** (with a username and password), at its first address. Tick the ones you want and press **Add**: HaRM goes through them one after another and shows ✓ or the reason for each. Machines that already have it say **added** and start unticked. Windows machines aren't listed.
   - **One machine:** on a device, **🔌 Connect**, pick the login, and **🗝 Add HaRM's SSH key**.

   Either way, HaRM signs in with the login's password once and adds the public key to that user's `~/.ssh/authorized_keys` (changing nothing else), then checks it can sign in with only the key.
3. From then on HaRM tries the key first: checks, actions, the terminal, the screen through SSH, and **Change on machine**. Background checks can use it too, so they don't need a stored password ([Maintenance](./maintenance#background-checks)).

::: tip Safe by design
- The private key is encrypted with your master password, like your logins, so HaRM can only use it while unlocked. Background checks get a copy only when you tick it for a machine.
- For each connection it's written to a file only HaRM can read, and deleted straight after (a terminal deletes it 30 seconds after connecting).
- **Take it out** (next to **Add HaRM's SSH key**) removes it from a machine again. Making, adding and removing keys is in the audit log.
:::

### A new key

**⟳ New key…** in Settings asks how:

- **⟳ Swap on my machines**: HaRM makes the new key and lists every machine it added the current one to. On each, it adds the new key, checks it can sign in with only that, and then takes the old one out. When you're done, **✓ Use the new key** makes it HaRM's key. Until then the old one keeps working, so nothing stops along the way. Machines it couldn't reach keep the old key: HaRM uses their saved passwords there until you add the new one. **Stop** throws the new key away. New in version 0.3.3.
- **Just make a new one**: replaces it in HaRM straight away. Machines with the old key stop letting HaRM in with it until you add the new one, and you take the old one out yourself.

You can also paste the public key into a machine's `authorized_keys` yourself, or into Proxmox, a NAS or a router that takes SSH keys.

## Related

- [Logins](./logins): saving the login the terminal and files use, and changing a machine's password
- [Actions](./actions): saved commands you run with one click
- [Security and privacy](./security)
