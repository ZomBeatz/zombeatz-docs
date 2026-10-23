# A small team

A shared planning space for a small business, club or project team, on your own server, reachable from anywhere.

## 1. Pick where it runs

- **A small cloud server (VPS)** or an always-on office machine.
- Run it with Docker as in [A family or roommates](./family-server), step 1.

## 2. Reach it securely from anywhere

Pick one:

- **Tailscale** (easiest and safest): install it on the server and on everyone's devices, then on the server run `tailscale serve --bg 7311`. The team opens `https://<server>.<your-tailnet>.ts.net`. Nothing is exposed to the internet.
- **Your own domain** with a reverse proxy such as Caddy:

  ```
  plan.example.com {
      reverse_proxy localhost:7311
  }
  ```

Don't expose port 7311 directly to the internet. Details: [server guide](https://github.com/ZomBeatz/Zomello/blob/main/docs/server.md).

## 3. Set up people

- **Admin > People > Add a person** for each member; make a second admin so you're not the only one who can reset passwords.
- In **Settings > People**, everyone with an account can be assigned cards.

## 4. Organize the work

- One board per project or area; sections such as "Clients", "Internal", "Archive".
- On each board, **⋯ > Share…** with the people working on it. The board's owner manages who's on it.
- Use [custom fields](../custom-fields) for things like Client or Budget, and [templates](../templates) for repeating work (onboarding a client, a release checklist).
- Everyone's **My Tasks** shows what's theirs across all shared boards.

## 5. Look after it

- Daily backups happen automatically; download one now and then (**Admin > Download a backup now**) and keep it elsewhere.
- Updating: `docker compose pull && docker compose up -d`.
