---
description: "Fill in a device's hardware automatically in Zom's HaRM: over SSH, from the computer HaRM runs on, or by running a small script."
---

# Import specs

Import specs reads a machine's hardware (hostname, OS, model, serial, CPU, memory, every drive, memory stick, graphics card and network card) and lets you add what you want.

Open the device, then **⋯ > Import specs…**. Pick one of three ways:

![Import specs](/img/harm/import-specs.png)

## Over SSH

HaRM connects to the machine, runs its read-only collector, and shows the result. Nothing on the machine changes.

1. **Address:** HaRM suggests the device's main address and hostname.
2. **Login:** pick a login saved on that device (SSH logins come first), or **Other** to type a username. Leave the password blank to use the SSH keys of the account HaRM runs as.
3. **Use sudo** adds the serial number and memory stick details on Linux.
4. **System:** detect automatically, or choose Linux / macOS or Windows (with OpenSSH).
5. **Connect & read specs**, then tick what to add.

The saved password is used on the HaRM computer only and never reaches your browser. The first connection remembers the machine's SSH key; if it changes later, HaRM refuses to connect and explains why. If you reinstalled the machine, a button lets you trust the new key.

## This computer

For the machine HaRM itself runs on. No SSH needed. The serial number and memory stick details are only included if HaRM runs with administrator rights.

## Run it yourself

For machines HaRM can't reach. Copy the one-line command for the machine's system, run it there, and paste what it prints. The command checks the script's fingerprint before running it, so a tampered download is refused. You can also download the script and copy it over on a USB stick.

## What gets added

You see a preview first. Already-recorded serials and MAC addresses are unticked, so importing twice doesn't duplicate anything. CPUs are matched to the parts library to get cores and threads, drives and memory become installed parts, and network cards become interfaces with their IPs and MACs.

## Related

- [Devices](./devices)
- [Logins](./logins)
- [Troubleshooting](./troubleshooting#import-specs)
