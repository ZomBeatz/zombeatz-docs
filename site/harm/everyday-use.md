---
description: "How to use Zom's HaRM day to day: adding hardware, racks, parts, networks, logins and tasks."
---

# Everyday use


**Home** lists what needs attention (IP conflicts, broken gear, warranties ending, things not hooked up, old passwords) next to your open tasks.

**Search** (top bar, or press `/`): type a name, IP, MAC, serial, part number or login. Results appear as you type, and picking one opens that exact item: an IP opens its network entry, a login opens its reveal window.

**+ New** (top right) adds anything, or **scans a label** with the camera: barcodes, QR codes and printed text go straight into the right fields.

**Devices:** each device page starts with a summary (where it is, its IP to copy, the management page, one-tap logins) and has four tabs:
- **Overview:** notes and tasks (type one and press Enter), details, location and purchase info.
- **Hardware:** CPU, memory, drives and drive bays (tap an empty bay to fill it), all installed parts, and expansion slots. Spare parts that fit are suggested.
- **Network:** interfaces (IP, MAC, VLAN), services, and cables.
- **Logins:** **Open ↗** opens the iDRAC/iLO/web page and copies the password in one click. SSH logins give a ready-to-paste command.

The **⋯** button holds the less common actions: Import specs, export/PDF, print a QR label, clone, and delete.

**Import specs** fills in a device's hardware for you. Pick one of three ways:
- **Over SSH** with a saved login.
- **This computer**, for the machine HaRM runs on.
- **Run it yourself:** copy a one-line command, run it on the machine, and paste the result.

**Racks & Storage:** racks show a front/rear picture. Click an empty U to put a device there. Shelves, bins, totes and piles work too.

**🤖 AI Assist** (in **+ New**, Spare Parts, and on location and rack pages) logs a pile of hardware from photos:
1. Copy HaRM's prompt and paste it into any AI app (ChatGPT, Claude, Gemini) with your photos. Turn on web search so it can look up prices.
2. Paste the reply back into HaRM and check the preview.
3. Add. Each item gets its original price, current value, the AI's sources, and its to-dos as tasks.

**Spare Parts:** everything on the shelf or inside devices. Install parts into devices and take them out again; quantities split automatically.

**Virtual & Clusters:** track VMs and containers as devices that **run on** a host (VM ID, vCPUs, memory, disk). A host's **VMs** tab shows what's running on it and how much of its CPU and memory is claimed. Group hosts into **clusters** (Proxmox, Kubernetes, vSphere…). **Discover › Proxmox** imports a whole Proxmox cluster with all its VMs and containers.

**Main address:** if a device has several IPs (OS plus iDRAC, for example), tap the 🌐 address on its page and pick **☆ Main**. That one is used for quick links, logins and lists. Management ports are never picked automatically.

**Networks & IPs** keeps subnets and VLANs, with an IP map showing who uses what and the next free addresses. **Discover** brings in what's on your network from **any router** (paste its client or DHCP list: pfSense, OPNsense, OpenWrt, Pi-hole, MikroTik, Omada, ordinary home routers), a **UniFi** console (API key), **Proxmox**, or a **network scan**. Phones, tablets, TVs, consoles and smart-home gear are recognised by name. You review everything before it's saved.

**PC Builder:** plan builds from about 30,000 library parts or your own spares, with compatibility checks. **Create device** turns a finished build into a real device.

**Export & Share:** copy devices as text for a person or an AI assistant, download CSV/JSON, or print a spec sheet or sell sheet to PDF.

**Settings:** password, two-factor login, recovery code, and appearance (dark or light). There may also be something to find if you click the logo enough.

## Related

- [Backups, updates and uninstalling](./backups-and-updates)
