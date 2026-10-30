---
description: "Common questions about Zom's HaRM."
---

# FAQ

**Does HaRM send my data anywhere?**
No. It runs on your own computer or server. The only time anything leaves your network is when you choose to: AI Assist with an online service (only the photos you add), and the parts library download.

**Do I need to be online?**
Only to install it and to download the parts library. After that, HaRM works offline on your home network.

**Can several people use it?**
Everyone who knows the master password can use it from their own browser or phone at the same time. There are no separate user accounts.

**What if I forget the master password?**
Use the recovery code on the unlock screen (**Forgot your password? Use the recovery code**). Without either, stored logins can't be recovered, though the rest of your inventory can be read from a backup.

**Can I use it away from home?**
Use a VPN into your home network, then HaRM works as usual. Don't forward its port to the internet. See [Security](./security#keep-it-at-home).

**Windows or Linux?**
Both, with a desktop app on each. For an always-on setup, run it on a server or NAS with Docker. See [Installing HaRM](./install) and [Running on a server](./server).

**Does it work on iPhone and iPad?**
Yes, in Safari and as a home-screen app, once the device trusts HaRM's certificate. See [Phones and tablets](./phones-and-tablets#iphone-and-ipad).

**Can I import a spreadsheet I already have?**
Not directly yet. [Discover](./discover) and [Import specs](./import-specs) fill in most things, and [AI Assist](./ai-assist) can read a photo of a printed list.

**Where's my data?**
In the `data` folder next to HaRM: the database, certificates and backups. See [Backups](./backups-and-updates).

**How do I try it without entering my own gear?**
Run the demo: `python3 scripts/demo.py`. See [Try the demo first](./install#try-the-demo-first).

## Related

- [Troubleshooting](./troubleshooting)
- [Glossary](./glossary)
