---
description: "Connect to your machines from Zom's HaRM: a terminal and a file browser in HaRM with a saved login, web pages through SSH, a command on many machines, your own SSH app, Remote Desktop, VNC (and setting it up), the Proxmox console and iDRAC or iLO."
---

# Connecting to your machines

Open a device and press **🔌 Connect**. Pick the address, the port and a saved login, then the way in. New in version 0.3.2. HaRM takes the port from the login's address when it has one (like `10.0.0.5:2222`).

| Way in | What it does |
|---|---|
| **⌨ Terminal in HaRM** | SSH in HaRM's own window, signed in with the saved login. |
| **📁 Files** | The machine's folders and files in HaRM: upload, download, edit, copy to another machine, and run a command in a folder. |
| **🌐 Web page through SSH** | A page that only answers on the machine itself (like Cockpit), in a new tab, encrypted. |
| **⌨ Run a command** | One command on this machine, or many at once, with each one's output. |
| **↗ Open in my SSH app** | An `ssh://` link, for computers with an app that opens them. |
| **📋 Copy SSH command** | `ssh user@host` (with `-p` for another port), to paste into your own terminal. |
| **🖥 Remote desktop file (.rdp)** | For Windows machines, or anything with port 3389. Opens in Remote Desktop (Windows, Mac) or Remmina, which asks for the password itself. |
| **🖥 Screen in HaRM (VNC)** | The machine's screen in HaRM's page, through SSH when a login is picked, or to a VNC port (5900–5999) on its **Network** tab. |
| **↗ VNC app** | A `vnc://` link, for the VNC app on your computer. |
| **↗ Proxmox console** | A VM's or container's screen, or a node's shell, in Proxmox's own console. Shown when HaRM is connected to Proxmox ([Discover](./discover)). |
| **↗ Management page** | iDRAC, iLO or IPMI, which have their own remote console. |

Only the terminal, files, web pages, commands and screen in HaRM use the saved login. The others open apps on your computer, which ask for it themselves.

## The terminal in HaRM

*[Try it in the demo](https://zombeatz.github.io/Zoms-HaRM/#/terminal?d=4&h=10.20.0.10&p=22&c=2&u=root): a pretend pve1. Type `help`.*

![A terminal on pve1 in HaRM, after a few Proxmox commands](/img/harm/terminal.png)

It's a full terminal: colors, `htop`, `nano`, copy and paste. It follows the window's size. **⧉ New window** opens another one beside it.

::: tip Safe by design
- It only works while HaRM is unlocked, and closes when HaRM locks, when you sign out, after 30 minutes without typing, or when you leave the page.
- At most 4 are open at once.
- Opening and closing one is recorded in the audit log. What you type and what the machine shows are never stored.
- If the machine's SSH key changed, HaRM won't connect until you press **Trust the new key and connect**. That's normal after reinstalling a machine, but can also mean something is intercepting the connection.
- Don't need it? Turn it off in **Settings > Locking and security > Terminal and screen in HaRM**.
:::

It needs the `ssh` program on the computer running HaRM (it's built into Windows 10 and 11, macOS and most Linux), and a browser that can draw with WebGL (all current ones). On Windows the terminal doesn't follow the window's size.

**★ Saved** at the top types one of your [saved commands](#saved-commands) into the terminal, for you to check and press Enter.

## The screen in HaRM (VNC)

HaRM relays the screen from the machine's VNC port to its page, over HaRM's own connection. **Ctrl+Alt+Del** sends that to the machine, **Only watch** stops your mouse and keys going to it, and **⛶ Full screen** fills the screen.

**Through SSH (encrypted).** When you pick a login with a username in **🔌 Connect**, **Through SSH** is on: HaRM signs in to the machine over SSH (with [its own key](#harm-s-ssh-key) if the machine has it, or the login's password) and reaches VNC on the machine itself. The screen is encrypted all the way, and VNC servers that only listen on the machine work too, like `x11vnc -localhost` or a desktop's built-in screen sharing set to local only. If the device has no VNC port on its **Network** tab, type the port: 5900 is display `:0`, 5901 is `:1`. New in version 0.3.3.

**Straight to VNC.** With no login, or **Through SSH** unticked, HaRM connects to the VNC port directly. VNC itself isn't encrypted between HaRM and the machine, so keep that to your home network.

If the machine asks for a VNC password, HaRM uses the screen's own saved password when [HaRM set it up](#finding-a-screen-or-setting-one-up), else the password of the login you picked (either is recorded in the audit log). If the machine refuses it, **⟳ Connect again** asks you instead. If nothing answers on that VNC port, the page offers **🔍 Find screens**.

**📋 Clipboard** opens a strip above the screen:

- **📋 Put on its clipboard** sends the text you type to the machine's clipboard: then paste it there (Ctrl+V).
- **⌨ Type it** types the text as keystrokes instead. That also works where pasting doesn't, like a login screen or a BIOS-style setup page (up to 2,000 characters).
- **Last copied on the machine** shows text copied on the machine, with **⧉ Copy** to put it on your computer's clipboard.

Whether the machine's clipboard comes through depends on its VNC server: x11vnc, wayvnc and most others do.

- It only connects to the device's own addresses, on a VNC port (5900–5999, or a service on its **Network** tab named VNC).
- If the machine's SSH key changed, HaRM won't connect until you press **Trust the new key and connect**, like the terminal.
- It closes when HaRM locks or you sign out, and at most 4 are open. Opening one is in the audit log, with whether it went through SSH; nothing on the screen is stored.
- Turn it off with the terminal in **Settings > Locking and security**.
- For Proxmox VMs, use **↗ Proxmox console** instead.

### Finding a screen, or setting one up

VNC needs a program on the machine that shares its screen (a VNC server). Many Linux desktops don't run one, so there's nothing to connect to. **🔍 Find screens**, next to the screen in **🔌 Connect**, looks at the machine over SSH (it only reads) and lists the VNC servers it runs, each with **🖥 Open**, including ones that only listen on the machine itself. New in version 0.3.3.

**🔧 Set up screen sharing** does it for you on most Linux desktops, depending on what draws the screen.

**X11 desktops** (Xfce, MATE, Cinnamon, LXQt, or GNOME and KDE in their X11 sessions). HaRM signs in with the login and, with sudo:

- installs **x11vnc** with the machine's package manager (apt, dnf, zypper, pacman or apk), if it isn't there yet,
- runs it as a service, `zoms-harm-vnc`, that shares the desktop on the machine itself only (127.0.0.1), so it can only be reached through SSH, also at the login screen and after a restart,
- with a new VNC password, saved in the vault as **VNC screen** and the device's name. HaRM uses it when you open the screen.

**Sway, Hyprland and other wlroots desktops** (on Wayland). Pick a login for the person signed in to the desktop: screen sharing on Wayland runs as them. HaRM:

- installs **wayvnc** with sudo, if it isn't there yet (it needs version 0.7 or newer, as in Ubuntu 24.04, Fedora and Arch),
- runs it as that user's own service, `zoms-harm-vnc`, sharing the desktop on the machine itself only (127.0.0.1), so it can only be reached through SSH. It starts when they sign in to the desktop,
- with the username `harm` and a new password, saved in the vault as **VNC screen**. HaRM fills both in when you open the screen.

**GNOME on Wayland** (as Ubuntu and Fedora start by default). Pick a login for the person signed in to the desktop. HaRM turns on GNOME's own screen sharing over VNC, with a new password in the vault, and lets the screen take the mouse and keyboard. GNOME shares it on the network (port 5900), not only on the machine: HaRM still opens it through SSH, and a firewall on the machine can keep others out. Where GNOME only offers RDP, HaRM says how to use that with the Remote Desktop file.

**Take it out** in the same place stops and removes it and deletes the password from the vault. The program stays installed. Setting up and taking out are in the audit log and the device's notes.

Machines it can't set up get directions instead:

- **KDE Plasma on Wayland** asks on its own screen before sharing it, so it can't be turned on from HaRM: on the machine, install **Krfb** (Desktop Sharing), turn on unattended access and set a password, then open port 5900. Or sign in to the X11 session and set it up here.
- **Macs**: **System Settings > General > Sharing > Screen Sharing**, then open it on port 5900.
- **Machines without a desktop**, like most servers: there's no screen to share. Use the terminal.
- **Windows**: use the Remote Desktop file.

## Files on a machine

*[Try it in the demo](https://zombeatz.github.io/Zoms-HaRM/#/files?d=4&h=10.20.0.10&p=22&c=2).*

**📁 Files** in **🔌 Connect** (and on the terminal page) opens the machine's folders in HaRM, signed in with the saved login (or [HaRM's key](#harm-s-ssh-key)). It starts in the login's home folder. New in version 0.3.3.

![Files on pve1: folders with size, date, permissions and owner, and what a command printed](/img/harm/files.png)

- Click a folder to open it; **↑** goes up, **⌂** goes home, and you can type a path. The list shows each file's size, when it changed, its permissions and its owner. **Hidden files** shows the ones starting with a dot. **Find in this folder** narrows the list by name.
- Tick the box in front of several files and folders (or **All**) to **⬇ .zip** them as one download, **⇄ Copy** them to another machine, or **🗑 Delete** them together.
- **⬆ Upload**, or drop files on the list. **⬇** downloads one.
- **⬇ .zip** next to a folder downloads it as a .zip, made on the HaRM server from the folder (links in it are left out, because a .zip can't hold them).
- **⇄** copies a file or folder to another machine with a saved SSH login: pick it, and a folder there (it's made if it isn't there yet; empty means that login's home folder). HaRM passes it straight from one machine to the other, with permissions and dates, and keeps no copy. Something with the same name there is replaced.
- **≠** next to a text file compares it with the same file on another machine (or another file on this one), line by line: lines only here are red, lines only there green. Handy for `/etc/ssh/sshd_config` or a Compose file on two servers. Different line endings (Windows and Linux) don't count as changes.
- Click a text file (up to 1 MB) to open it in an editor. **💾 Save…** (or Ctrl+S) first shows what you changed, line by line, in green and red; **💾 Save** then writes it, or **← Keep editing**. If the file changed on the machine since you opened it, HaRM asks before replacing it. Saving keeps the file's owner and permissions. Bigger or binary files download instead.
- **+ Folder**, **+ File**, **✎** to rename or move (type a full path to move it), and **🗑** to delete (a folder with everything in it). HaRM won't delete `/` or the home folder.
- **Use sudo** lists, opens, saves and deletes as root, for system files like those in `/etc`. It uses the login's saved password for sudo.
- **The command box** at the bottom runs one command in the folder you're in, as one shell, and shows what it printed and its exit code. It stops after 2 minutes, and can't take typing: for `nano`, `htop` and the like, press **⌨ Terminal**. **★ Saved** fills in one of your [saved commands](#saved-commands).

::: tip Safe by design
- One SSH connection per file browser, only while HaRM is unlocked. It closes when HaRM locks, after 30 minutes unused, or when you leave the page, and at most 4 are open.
- Uploads, downloads, copies, saves, renames, deletes and commands are in the audit log (which file, or the command). File contents are never stored in HaRM: downloads and .zip files pass through a temporary file that's deleted when the download ends.
- It works on Linux, macOS and NAS boxes with SSH, and on Windows (below).
:::

### Files on Windows

Windows machines get **📁 Files** too, with a saved login with a username, when **OpenSSH Server** is turned on in Windows (**Settings > System > Optional features**). New in version 0.3.3.

- It starts in the login's home folder, like `C:\Users\name`. The path shows as `/C:/Users/name`; typing `C:\Users\name` works too. **Drives** at the start of the path lists the drives.
- Upload, download, a folder as a .zip, copy to and from other machines, compare, edit, rename and delete work as on Linux. Copying folders and .zip files use Windows' own `tar`, in Windows 10 (1803) and newer.
- Text files with Windows line endings keep them when you save.
- The list shows Windows attributes (like `-a-h--`, where `h` is hidden) instead of permissions. There's no **Use sudo**: sign in with an administrator login for system folders.
- The command box runs **PowerShell** in the folder.
- Each step is its own short SSH connection, so it's a little slower than on Linux.

## A web page on the machine

Many admin pages only answer on the machine itself, or on a network behind it: Cockpit, a database admin, a container's dashboard, or a router or printer only the machine can reach. **🌐 Web page through SSH** in **🔌 Connect** opens one in a new tab. New in version 0.3.3.

1. Type the page's port on the machine (the device's services are suggested), and tick **https** if the page itself uses https (it's ticked for the usual ones, like 443, 8443 and Cockpit's 9090).
2. For a page on another device the machine can reach, press **Another address…** and type its address as the machine sees it.
3. Press **🌐 Web page through SSH**.

HaRM signs in once with the login (or [its key](#harm-s-ssh-key)), checks something answers there, and opens one of its own ports, 8078 to 8087, for that page. The tab opens at `https://<HaRM's address>:<that port>/` with HaRM's own certificate, so phones and computers that trust HaRM trust it too. The page itself may still ask you to sign in.

**Open:** under the button lists the pages you have open, with **Close**.

::: tip Safe by design
- Only the browser that opened it can use it (by its address), and only while HaRM is unlocked. It closes when HaRM locks or you sign out, after 30 minutes unused, or with **Close**. At most 4 are open.
- Between HaRM and the machine it's inside SSH, and between your browser and HaRM it's HTTPS, so it's encrypted all the way.
- Opening and closing one is in the audit log. Nothing the page shows is stored.
- Computers that reach HaRM from the same address as yours (several behind one VPN or router) could reach it too while it's open.
- In Docker, ports 8078-8087 have to be published, as in HaRM's `docker-compose.yml` ([Docker](./docker)). To use other ports, set `HARM_TUNNEL_PORTS`, like `9100-9109`.
:::

## A command on many machines

*[Try it in the demo](https://zombeatz.github.io/Zoms-HaRM/#/run?cmd=uptime): six pretend machines answer.*

**⌨ Run on machines**, on **Devices** and **Actions** (or **⌨ Run a command** in a device's **🔌 Connect**), runs one command on every machine you tick and shows each one's output side by side. New in version 0.3.3.

- The list has every device with a saved login of the kind **SSH** or **OS Account** with a username, at its first address (not Windows). Pick another login per machine when it has more than one. HaRM remembers what you ticked.
- **⚡ Save as action…** keeps the command as an [action](./actions) on each machine you ticked, with the login picked for it: one machine opens the action form, several get one action each with the same name.
- The command runs as a shell script (`sh`), so it can be several lines. **Run with sudo** runs it as root. Ctrl+Enter runs it.
- Four machines run at a time, up to 5 minutes each. Each card shows ✓ or ✗ with the exit code, how long it took, and what it printed, with **⧉** to copy it. A machine whose SSH key changed gets **Trust the new key and run**.
- Commands with `rm`, `reboot`, `shutdown` and the like ask first when they go to more than one machine.
- Every run is in the audit log, with the machine, the login and the first line of the command.

For a command you run often on the same machines, with its own button, save it as an action.

## Saved commands

**★ Saved** next to the command boxes (the terminal, Files and Run on machines) keeps the commands you use often. New in version 0.3.3.

- **＋ Save this command…** keeps what's in the box, with a name (and **Run with sudo**, used by Run on machines).
- Pick one to fill it in. In the terminal it's typed in, for you to check and press Enter.
- **✎ Edit saved commands…** renames, reorders and deletes them.

They're kept in HaRM's database, encrypted with your master password like your logins.

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
