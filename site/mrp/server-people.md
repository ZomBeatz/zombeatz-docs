---
description: "Add people to Zom's MRP Server as Admin, Scheduler or Viewer, change passwords, turn accounts off and reset a forgotten admin password."
---

# People and roles

On a server, admins decide who has access. There's no sign-up page: every account is made by an admin, in **Settings > People with access**.

## Roles

| Role | Can |
|---|---|
| **Admin** | Change the plan and manage who has access, see the activity log, download backups, restore and clear the plan |
| **Scheduler** | Change the plan |
| **Viewer** | Look at everything, change nothing |

The server checks the role on every request; hidden buttons are only a convenience. There's always at least one admin: the last one can't be removed, turned off or made a scheduler.

## Adding someone

1. In **Settings > People with access**, press **Add a person…**.
2. Type their **Name**, a **Username** (what they sign in with) and a **Password** of 10 characters or more.
3. Pick their **Role** and press **Add person**.
4. Tell them the password, and to change it after signing in.

## Changing an account

Tap someone in the list to change their name, role or password, or:

- **Turn off** an account to stop it signing in while keeping it, and **Turn on** to let it back in.
- **Remove** to delete it.

Setting a new password or turning an account off signs that person out everywhere. Usernames can't change.

## Your own account

**Settings > Your account** has **Change password…** and **Sign out**. You're signed out after 14 days without using it, and after 60 days in any case.

## A forgotten password

Anyone else: an admin sets a new one in **People with access**. A forgotten admin password, on the server:

```bash
docker exec -it mrp zoms-mrp-server reset-password <username>
```

Type the new password when asked. `create-admin <username>` adds another admin the same way.

## Related

- [Setting up a server](./server): getting it running.
- [Backups and security](./server-backups): sign-in protection and the activity log.
