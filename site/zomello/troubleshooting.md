# Troubleshooting

## "Windows protected your PC" when installing

The installer isn't signed with a paid certificate yet. Click **More info > Run anyway**. It's built by GitHub straight from the public code.

## The phone can't reach my computer

Check, in order:
1. Zomello is open on the computer with **Settings > Phones & tablets** turned on.
2. Both are on the same Wi‑Fi (not guest Wi‑Fi, not mobile data).
3. The computer's certificate is installed on the phone (the **Phones & tablets** page shows how).
4. Android 17 / iPhone: Zomello is allowed to find devices on your network (the phone's **Settings > Apps > Zomello > Permissions**, or **Settings > Privacy > Local Network** on iPhone).
5. Windows firewall: **Allow through firewall** on the **Phones & tablets** page.

## My phone's boards don't show on the computer

The phone needs Zomello open and the same Wi‑Fi. Check **Show its boards on this computer** in **Settings > Phones & tablets** on the computer.

## A board I marked private is missing on another device

That's what Private does: it stays on the device where it was marked. Open its menu there and untick **Private: only on this device**.

## The window is blank on Linux (NVIDIA / Wayland)

Start it with `GDK_BACKEND=x11 zomello`.

## Something else

Email info@zombeatzmedia.com or open an issue on [GitHub](https://github.com/ZomBeatz/Zomello/issues).
