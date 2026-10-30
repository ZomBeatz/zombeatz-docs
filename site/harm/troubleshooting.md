---
description: "Fixes for common Zom's HaRM problems: phones and tablets, starting the server, Docker, Discover, Import specs and AI Assist."
---

# Troubleshooting

Find your problem below. HaRM has these steps built in too: **Help & guide > Troubleshooting**, the **Show troubleshooting steps** button when HaRM can't start on a device, and **Still not working?** in the desktop app's Phone setup.

![Troubleshooting inside HaRM, with the section for this device opened](/img/harm/help-troubleshooting.png)

## Phones and tablets

Most connection problems are about trust: a phone only talks to HaRM once it trusts HaRM's certificate. If HaRM opens on one device but not another, HaRM is fine; fix the device that fails.

| Problem | Fix |
|---|---|
| "Your connection is not private" | The certificate isn't trusted on this device yet. Follow [Phones and tablets](./phones-and-tablets) for your phone, then close the browser completely and reopen it. |
| iPhone or iPad works in Safari, but the home-screen app says **Cannot reach the HaRM server** | The certificate is installed but not trusted. **Settings > General > About > Certificate Trust Settings**: turn on **Zom's HaRM local CA**. If it isn't listed, install the profile again. Then delete the home-screen icon and add it again from Safari. |
| iPhone or iPad keeps showing **Cannot reach the HaRM server** even after reinstalling the certificate | Clear HaRM's saved data first: **Settings > Apps > Safari > Advanced > Website Data**, search HaRM's address, delete it. Then follow the iPhone and iPad steps from the top. |
| The home-screen icon is just a letter ("H") | iOS couldn't fetch the icon because it didn't trust HaRM yet. Trust the certificate, remove the icon, and add it again from Safari. |
| It stopped working after HaRM was updated or restarted | Update to the latest HaRM (older versions made certificates iPhones reject), restart it, then close the browser on the phone completely and reopen HaRM. |
| The phone can't connect at all | Same Wi‑Fi as HaRM, not guest Wi‑Fi or mobile data? In the desktop app, **Phone setup**'s checklist checks sharing, HTTPS, the certificate and the firewall, and offers fixes. |
| The camera button does nothing | The camera needs HTTPS. Open HaRM with `https://` and trust the certificate. |

## Starting HaRM

| Problem | Fix |
|---|---|
| **Port in use** | Another program uses port 8077. Change **Port** in the desktop app and press **Start**. |
| HaRM won't start | Open **Server log** at the bottom of the desktop app. It shows the reason. |
| The computer's IP address changed | The desktop app shows **Fix certificate**. Phones keep trusting HaRM. To avoid it, give the computer a fixed IP in your router. |
| Windows: phones can't connect | Allow Python through the firewall: **Windows Security > Firewall & network protection > Allow an app through firewall**, tick **Private** for Python. |
| Linux: phones can't connect | If your firewall is on, allow the port from your network, for example `sudo ufw allow from 192.168.1.0/24 to any port 8077 proto tcp`. Phone setup offers this with **Allow it**. |
| The desktop app looks out of date after an update | Right-click the tray icon > **Quit**, then open it again. |
| Forgot the master password | On the unlock screen choose **Forgot your password? Use the recovery code**. |
| Lost the password and the recovery code | Stored logins can't be recovered; that's what keeps them safe. Everything else is still readable from a backup. |

## Docker and servers

| Problem | Fix |
|---|---|
| Phones warn about the certificate | `HARM_CERT_NAMES` must include the address phones use. Fix it in `docker-compose.yml` and run `docker compose up -d`. |
| Permission errors on `./data` | HaRM fixes the folder's owner on start. If it still fails, check the folder isn't read-only, or on a network share that doesn't allow changing owners. |
| Network scan finds nothing, or no MAC addresses | Docker's own network hides your LAN. Use `network_mode: host` (see [Running on a server](./server#docker)), or use **Any router** in Discover instead. |
| The service won't start | `journalctl -u zoms-harm -n 50` shows why. |

## Discover

| Problem | Fix |
|---|---|
| UniFi: **The gateway rejected the API key** | Make a new key in **Settings > Control Plane > Integrations** and paste it fresh. Keys can expire. |
| UniFi: **no integration API** | Update UniFi Network to 9.0 or newer, or use **Any router** with the Client Devices list. |
| UniFi or Proxmox: **certificate isn't trusted** | Untick **Verify certificate**; both use self-signed certificates by default. |
| Proxmox: **The token isn't allowed to read this** | Give the token the **PVEAuditor** role on `/`, and untick **Privilege Separation** (or give the token the role too). |
| Proxmox: VMs have no IP addresses | Install the QEMU guest agent in the VMs and turn it on in each VM's Options. |
| Router list: nothing found | Paste the whole table, including IP and MAC columns. Screenshots don't work; copy the text. |

## Import specs

| Problem | Fix |
|---|---|
| **Login refused** | Check the username and password, or that the HaRM computer's SSH key is on the machine. |
| **The machine's SSH host key changed** | Normal after reinstalling the machine: press the button to trust the new key. Otherwise, check nothing is in between. |
| **sudo refused the password** | Untick **Use sudo**, or use an account that can sudo. |
| No serial number or memory sticks | Tick **Use sudo** (Linux), or run the command as administrator. |
| Windows over SSH fails | Turn on Windows' **OpenSSH Server** (Settings > System > Optional features), or use **Run it yourself**. |

## AI Assist

| Problem | Fix |
|---|---|
| **The AI answered, but not in HaRM's format** | The reply is placed in the copy and paste box: fix it there, or ask the AI again. |
| **The AI service rejected the API key** | Check the key in **Settings > AI Assist**. Paste a new one to replace it. |
| The service doesn't know the model | Type a model your account has (one that can see images) into **Model**, or leave it blank. |
| Values look wrong | They're estimates. Use a model with web search, and check the saved sources. |

## Still stuck?

Ask on the [contact page](/zomello/contact), with what you tried and what the **Server log** or error says.

## Related

- [Phones and tablets](./phones-and-tablets)
- [FAQ](./faq)
