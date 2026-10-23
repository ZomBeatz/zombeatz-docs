---
description: "Fixes for common Zom's HaRM problems."
---

# Troubleshooting


HaRM has these steps built in too: **Help & Guide › Troubleshooting**, the **Show troubleshooting steps** button when HaRM can't start on a device, and **Still not working?** in the desktop app's Phone setup.

| Problem | Fix |
|---|---|
| The phone shows "Your connection is not private" | The certificate isn't trusted on the phone yet. Open **Phone setup**, do step 2, then fully close and reopen Chrome. |
| The phone can't connect at all | Same Wi-Fi as the computer? **Phone setup**'s checklist checks sharing, HTTPS, the certificate and the firewall. On Windows, allow Python in *Windows Security › Firewall › Allow an app*. |
| iPhone/iPad: works in Safari but the home-screen app says "Cannot reach the HaRM server" | The certificate isn't fully trusted. Check **Settings › General › About › Certificate Trust Settings** and turn on *Zom's HaRM local CA*. If it isn't listed, redo **Phone setup** step 2. Then delete the home-screen icon and add it again from Safari. |
| iPhone/iPad home-screen icon is just a letter ("H") | iOS couldn't fetch the icon because it doesn't trust HaRM's certificate yet. Do **Phone setup** step 2 (iPhone / iPad), remove the home-screen icon, then open HaRM in Safari and Add to Home Screen again. |
| The computer's IP address changed | The control panel shows **Fix certificate**. Click it. Phones keep trusting HaRM. Better still, give the computer a fixed IP in your router. |
| "Port in use" | Another program uses port 8077. Change **Port** in the control panel's settings. |
| HaRM won't start | Open **Server log** at the bottom of the control panel. It shows the reason. |
| Forgot the master password | On the unlock screen choose **Use the recovery code**. |
| Lost the password *and* the recovery code | Stored logins can't be recovered; that's what keeps them safe. Everything else is still readable from a backup. |

## Related

- [Contact](./../zomello/contact)
