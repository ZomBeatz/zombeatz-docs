---
description: "Fixes for common Zom's HaRM problems: installing, starting, phones and tablets, servers, Discover, Import specs and AI Assist."
---

# Troubleshooting

Find your problem below, in the order you'd meet it. HaRM has the phone fixes built in too: **Help > Troubleshooting: can't connect**, the **Show troubleshooting steps** button when HaRM can't start on a device, and **Still not working?** in the control panel's **Phone setup**.

## Installing

### "Windows protected your PC"

The installer isn't signed with a paid certificate yet, so Windows doesn't recognize it. Click **More info > Run anyway**. The file is built by GitHub from HaRM's public code.

### The .deb or .rpm won't install

- **A missing package:** install with the package manager instead, so it fetches what's needed: `sudo apt install ./zoms-harm_(version)_amd64.deb` or `sudo dnf install ./zoms-harm-(version)-1.x86_64.rpm`.
- **An older Linux:** use the AppImage instead.

### The AppImage doesn't open

1. Right-click it > **Properties** > allow running it as a program.
2. Still nothing? Run it from a terminal (`./Zoms-HaRM_(version)_amd64.AppImage`) to see why. On Ubuntu 22.04 and newer, `sudo apt install libfuse2` is the usual fix.

### My data from an older HaRM isn't there

Versions before 0.3.2 kept data next to the app. Press **Bring in data from an older HaRM…** in the control panel and pick the old folder. See [Installing and updating](./installing#used-harm-before-version-0-3-2).

## Starting HaRM

### "Port in use"

Another program uses port 8077. Change **Port** in the control panel and press **Start**.

### HaRM won't start

Open **Server log** at the bottom of the control panel: the reason is there. If it isn't clear, send it with [Send feedback](./contact).

### The computer's address changed, and phones show a warning

The control panel shows **Fix certificate**. HaRM re-issues the certificate from the same authority, so phones keep trusting it. To avoid it, give the computer a fixed address in your router.

### I forgot the master password

On the unlock screen, choose **Forgot your password? Use the recovery code**.

### I lost the password and the recovery code

Saved logins can't be recovered; that's what keeps them safe. The rest of your inventory is still readable from a backup. See [Backups, recovery and security](./server-backups#a-forgotten-master-password).

## Phones and tablets

Most connection problems are about trust: a phone only talks to HaRM once it trusts HaRM's certificate. If HaRM opens on one device but not another, HaRM is fine; fix the device that fails.

### "Your connection is not private"

The certificate isn't trusted on this device yet. Follow [Phones and tablets](./phones-and-tablets) (or [iPhone and iPad](./iphone-ipad)) for your phone, then close the browser completely and open HaRM again.

### The phone can't connect at all

1. Is the phone on the **same Wi‑Fi** as HaRM? Not guest Wi‑Fi, and not mobile data.
2. In the control panel, **Phone setup**'s checklist checks sharing, HTTPS, the certificate and the firewall, and offers a fix for each.
3. **Windows:** allow HaRM through the firewall: **Windows Security > Firewall & network protection > Allow an app through firewall**, and tick **Private** for Zom's HaRM.
4. **Linux:** if the firewall is on, allow the port from your network (Phone setup offers **Allow it**), for example `sudo ufw allow from 192.168.1.0/24 to any port 8077 proto tcp`.

### iPhone or iPad: "Cannot reach the HaRM server"

The certificate isn't fully trusted, or Safari remembers an old one. See [iPhone and iPad: when it won't connect](./iphone-ipad#when-it-won-t-connect).

### The home-screen icon is just a letter

The phone added the icon before it trusted HaRM. Trust the certificate, remove the icon, and add it again.

### It stopped working after HaRM was updated or restarted

Close the browser on the phone completely and open HaRM again. On an iPhone or iPad, clear HaRM's website data first ([step 1](./iphone-ipad#_1-clear-anything-left-from-before)).

### The camera button does nothing

The camera needs HTTPS. Open HaRM with `https://` and trust the certificate. **Settings > Phones & tablets > Camera and scanning** shows whether the camera is available.

## Servers

### Phones warn about the certificate

`HARM_CERT_NAMES` must include the address phones use. Fix it in `docker-compose.yml` and run `docker compose up -d`. See [https and certificates](./server-https).

### Permission errors on ./data

HaRM fixes the folder's owner when it starts. If it still fails, check the folder isn't read-only, or on a network share that doesn't allow changing owners.

### Network scan finds nothing, or no MAC addresses

Docker's own network hides your LAN. Use `network_mode: host` ([how](./server#network-scan-and-mac-addresses)), or use **Any router** in Discover instead.

### The service won't start

`journalctl -u zoms-harm -n 50` shows why.

### docker compose pull says the image isn't found

Check the `image:` line is `ghcr.io/zombeatz/zoms-harm:latest`. To build it yourself instead, use the `build: .` line in `docker-compose.yml` and `docker compose up -d --build`.

## Discover

### UniFi: "The gateway rejected the API key"

Keys can expire. Make a new one in **Settings > Control Plane > Integrations** and paste it fresh.

### UniFi: "no integration API"

Update UniFi Network to 9.0 or newer, or use **Any router** with the **Client Devices** list.

### UniFi or Proxmox: "certificate isn't trusted"

Untick **Verify certificate**: both use self-signed certificates by default.

### Proxmox: "The token isn't allowed to read this"

Give the token the **PVEAuditor** role on `/`, and untick **Privilege Separation** (or give the token the role too). See [A Proxmox home lab](./scenarios/proxmox-lab).

### Proxmox: VMs have no IP addresses

Install the QEMU guest agent in the VMs and turn it on in each VM's **Options**.

### Any router: nothing found

Paste the whole table, including the IP and MAC columns. Screenshots don't work; copy the text.

## Import specs

### "Login refused"

Check the username and password, or that the HaRM computer's SSH key is on the machine.

### "The machine's SSH host key changed"

Normal after reinstalling that machine: press the button to trust the new key. Otherwise, check nothing is in between.

### "sudo refused the password"

Untick **Use sudo**, or use an account that can use sudo.

### No serial number or memory sticks

Tick **Use sudo** (Linux), or run the command as administrator (Windows).

### Windows over SSH fails

Turn on Windows' **OpenSSH Server** (**Settings > System > Optional features**), or use **Run it yourself**.

## Status and actions

### A device says Offline, but it's on

Its firewall blocks every port HaRM tries, and ping. Add a service with a port that's open on its **Network** tab (HaRM tries those first), or allow ping. Windows blocks ping until you allow it in its firewall.

### A device says Online, but it's off

Something else answers on that address: another device took the IP, or a router answers for it. Check the address on its **Network** tab.

### Wake doesn't wake it

1. Turn on Wake-on-LAN in the device's BIOS and its network card settings.
2. Check its MAC address on the **Network** tab is the wired port's.
3. HaRM has to be on the same network or VLAN as the device. In Docker, use `network_mode: host`.

### A service says Not answering, but it works in the browser

HaRM checks exactly the web address or port on the device's **Network** tab. If you open it by another name or port, change the service to match.

### Alerts don't arrive

1. Press **Send a test** in **Settings > Status and actions > Alerts**. The list under it shows each attempt and why it failed.
2. ntfy: check the phone is subscribed to exactly the same topic, on the same server.
3. Email: for Gmail and Outlook, use an app password. Check **Security** matches the port (STARTTLS with 587, SSL/TLS with 465).
4. Nothing at all after a real outage: the HaRM computer has to be on, and checks on (**Settings > Status and actions > Check**). Alerts wait as long as you chose before sending.

### An action says the machine "only speaks an older kind of SSH"

Edit the action and tick **Older SSH**. If it still fails, paste the `-o …` settings from an `ssh` command that works into **Other SSH settings** (under **More details**).

### An action says "Login refused"

Check the login's username and password, and that the action sends to the right address: an iLO or iDRAC login only works on the iLO or iDRAC address, in **Send to**.

### An action stops at the first line

With **One command per line**, HaRM stops at the first command that fails. **Show output** shows which one, and what it printed.

## AI Assist

### "The AI answered, but not in HaRM's format"

The reply is placed in the copy and paste box: fix it there, or ask the AI again.

### "The AI service rejected the API key"

Check the key in **Settings > AI Assist**, or paste a new one to replace it.

### The service doesn't know the model

Type a model your account has (one that can see images) into **Model**, or leave it blank for the recommended one.

### The values look wrong

They're estimates. Turn on **Let it search the web for prices and specs**, and check the sources saved with each item.

## Still stuck?

Use **Settings > About > Send feedback**, or email [info@zombeatzmedia.com](mailto:info@zombeatzmedia.com). Include what you tried, your HaRM version, what it runs on, and what the **Server log** or error says. See [Contact and feedback](./contact).

## Related

- [Questions](./faq): quick answers
- [iPhone and iPad](./iphone-ipad): Apple devices, step by step
- [Contact and feedback](./contact): what to include when asking for help
