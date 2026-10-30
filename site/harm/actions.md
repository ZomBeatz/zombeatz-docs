---
description: "Save a command once and send it to a device over SSH with one click: quiet a server's fans, update, restart, power on through the iLO."
---

# Actions

An action is a command you save once and send to a device over SSH with one click: quieting a server's fans after a reboot, updating a Proxmox host, powering a server on through its iDRAC. Open **Actions** in the sidebar (under Network) to follow along. New in version 0.3.2.

![The Actions page with four saved actions and the examples to start from](/img/harm/actions.png)

## Making an action

1. Open **Actions** and press **+ New action**. On a device's page, use its **Actions** tab or **⋯ > New action…**, and the device is filled in.
2. Pick **Start from an example**, or fill in the form yourself.
3. Check the commands, then press **Save**.

![The new action form, filled in from the iLO fan example](/img/harm/action-form.png)

| Field | What it does |
|---|---|
| **Name** | What the button says: "Quiet the fans", "Update". |
| **Device** | The device it belongs to. It shows on that device's **Actions** tab and its tile on the Status page. |
| **Send to** | Leave it empty to use the device's main address. Enter the iLO or iDRAC address to send it there instead, or several addresses, one per line, to send it to each. |
| **Login** | A saved login from your [Vault](./logins). HaRM connects with its username and password (and uses the password for sudo). Choose none to use the HaRM computer's own SSH key. |
| **Username** | Only needed without a login, or to connect as someone else. |
| **SSH port** | Leave it empty for 22. |
| **How to send it** | **As one shell script** or **One command per line**: see below. |
| **Commands** | What to run. Lines starting with `#` are notes. |
| **Run with sudo** | Runs the script as root, using the login's password. Only for shell scripts. |
| **Older SSH (iLO, iDRAC, old switches)** | Turns on the older ways of connecting that old management ports need: see below. |
| **Ask before running** | Asks "Run …?" first. Tick it for anything that restarts or shuts down. |
| **Show a button on the Status page** | Puts a **▶** button for it on the device's tile. |
| **Other SSH settings** | Under **More details**: SSH settings pasted from a command that works. |

## Shell script or one command per line

| How to send it | For | What happens |
|---|---|---|
| **As one shell script** | Linux, macOS, Proxmox, TrueNAS, Synology, Raspberry Pi | The whole text runs as one script, so variables, `if` and loops work. A first line like `#!/bin/bash` runs it with bash. It reports success when the script ends with code 0. |
| **One command per line** | HPE iLO, Dell iDRAC, switches, Windows | Each line is sent on its own, the way you'd type it at the device's prompt. It stops at the first command that fails. These devices have no Unix shell, so a script wouldn't work. |

## Older SSH for old management ports

Older iLO and iDRAC versions and older switches only know ways of connecting that modern SSH turns off. Without help, the connection fails with "no matching key exchange method" or "no matching host key type", and HaRM says the machine "only speaks an older kind of SSH".

- Tick **Older SSH**. HaRM turns the older methods back on for this action only. It only adds the ones the HaRM computer's SSH still has, because naming one it doesn't know would stop SSH.
- If it still fails, copy the settings from an `ssh` command that works for you (the `-o …` parts, like `-o KexAlgorithms=+diffie-hellman-group14-sha1 -o HostKeyAlgorithms=+ssh-rsa`) into **Other SSH settings**.

Only connection settings are accepted there: KexAlgorithms, HostKeyAlgorithms, PubkeyAcceptedAlgorithms, Ciphers, MACs, ConnectTimeout and ServerAliveInterval. Settings that could run a program on the HaRM computer (like ProxyCommand) are refused.

## Running an action

Press **▶ Run** on the **Actions** page, on a device's **Actions** tab, or on the device's tile on the [Status](./status) page. An action only runs when you press it: nothing runs on a schedule or by itself.

- A message says whether it worked. **Show output** shows what each machine printed, how long it took and its exit code.
- With several addresses, it runs on each at the same time, and the message says how many worked.
- **Last run** shows ✓ or ✗ and when; click it to see the last runs and their output. HaRM keeps the last 50 runs of each action, encrypted like your logins.
- The first time HaRM connects to a machine, it remembers the machine's key. If the key changes later, HaRM asks before trusting the new one: normal after reinstalling the machine or replacing its iLO or iDRAC card, a warning sign otherwise.

::: info Actions only run while HaRM is unlocked
An action uses a saved login, and logins can only be read while HaRM is unlocked. So actions never run on their own or while HaRM is locked. Every run is recorded in the **Audit log**.
:::

## Examples

**Start from an example** fills in the form. They're starting points: check the commands against your own gear before running them.

| Example | How it's sent | Notes |
|---|---|---|
| **Uptime and disk space** | Shell script | Only reads. A safe first try. |
| **Update packages (Debian, Ubuntu, Proxmox)** | Shell script, sudo | Asks first. |
| **Restart** and **Shut down** | Shell script, sudo | Ask first. |
| **Proxmox: list VMs and containers** | Shell script, sudo | `qm list` and `pct list`. |
| **Quiet the fans (HPE iLO 4)** | One per line, older SSH | Needs the iLO 4 fan-control ("unlocked") firmware. One line per fan; change the fan numbers and speeds (0 to 255) for your server, and watch its temperatures afterwards. Send it to the iLO address with the iLO login. |
| **Power on (HPE iLO)** | One per line, older SSH | Send it to the iLO address. |
| **Power on (Dell iDRAC)** | One per line, older SSH | `racadm serveraction powerup`, sent to the iDRAC address. |
| **Shut down (Windows)** | One per line | Needs OpenSSH Server turned on in Windows (**Settings > System > Optional features**). |

::: tip A server whose fans start at full speed
Make the fan action once, with **Show a button on the Status page** ticked. After a reboot, open **Status** and press **▶ Quiet the fans** on the server's tile.
:::

## Related

- [Status](./status): which devices are online, with your action buttons on each
- [Logins](./logins): the saved logins actions connect with
- [Import specs](./import-specs): the other thing HaRM does over SSH
- [Security and privacy](./security): how logins and action results are protected
