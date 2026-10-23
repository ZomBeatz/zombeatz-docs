---
description: "How Zom's HaRM protects your logins, secrets and data."
---

# Security


- Logins are encrypted (AES-256-GCM) with a key that only your master password or recovery code unlocks. Nobody can read them from a copied database.
- HaRM locks itself after 30 minutes idle. Optional two-factor login is in **Settings**.
- Every change, sign-in and password reveal is recorded in the **Audit Log**.
- Only install HaRM's certificate on **your own** devices. Keep `data/tls/harm-ca.key` private: anyone with that file could impersonate websites to phones that trust it.
- HaRM is meant for your home network. Don't expose it directly to the internet. For access away from home, use a VPN into your home network (for example your router's VPN).
