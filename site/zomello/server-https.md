---
description: "https encrypts the connection, and it's what phones need: the Zomello phone app opens a server inside the app only over https, and browsers only offer…"
---
# Turning on https

https encrypts the connection, and it's what phones need: the Zomello phone app opens a server inside the app only over https, and browsers only offer **Install app** on https sites. Pick one of these.

## 1. Tailscale (easiest, and works from anywhere)

Nothing is exposed to the internet: only devices signed in to your Tailscale account can reach the server.

1. Install Tailscale on the server and on everyone's devices (tailscale.com, free for personal use).
2. On the server, run: `tailscale serve --bg 7311`
3. Everyone opens `https://<machine-name>.<your-tailnet>.ts.net`, and adds that address in **Settings > Servers** in the app.

Keep `ZOMELLO_TLS` set to `off`.

## 2. Zomello's own certificate (a home network without a domain)

Zomello makes its own certificate, limited to home-network addresses (so it can't vouch for any real website).

1. Set `ZOMELLO_TLS` to `self`: in `docker-compose.yml` under `environment:` (`ZOMELLO_TLS: "self"`), or in `settings.env` without Docker. Restart the server.
2. If people reach it by a name (like `zomello.lan`) or a fixed address, list them: `ZOMELLO_HOSTS: "zomello.lan,192.168.1.50"`.
3. **On each device, once:** open the server's sign-in page (plain `http://` works for this step) and use **Download this server's certificate**. It has the steps for Android, iPhone/iPad, Windows and Mac. The Admin page has the same button.
4. From then on, use `https://<server-address>:7311`.

## 3. A reverse proxy with your own domain

If you already run Caddy, Nginx Proxy Manager or Traefik with a real domain, point it at port 7311 and keep `ZOMELLO_TLS` at `off`. With Caddy:

```
zomello.example.com {
    reverse_proxy localhost:7311
}
```

Live updates use a long-lived connection; Caddy handles it as-is. With Nginx, turn off `proxy_buffering` for `/api/events`. If the proxy runs on the same machine, set `ZOMELLO_BIND` to `127.0.0.1` so only the proxy can reach Zomello directly.

## 4. Your own certificate files

Set `ZOMELLO_TLS` to `files`, and `ZOMELLO_TLS_CERT` / `ZOMELLO_TLS_KEY` to your PEM certificate and key (in Docker, mount them into the container, for example at `/certs`).

::: danger Don't port-forward 7311 to the internet
Opening the port on your router makes the sign-in page reachable by anyone. Use Tailscale or a reverse proxy instead.
:::
