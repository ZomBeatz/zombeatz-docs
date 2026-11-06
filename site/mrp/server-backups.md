---
description: "How Zom's MRP Server keeps the plan safe: daily copies, backups to download, the activity log, and what it does to protect sign-in."
---

# Backups and security

What the server keeps, how to get a copy, and what it does to keep the plan to the people who should see it.

## Copies of the plan

- The plan is one SQLite database in the data folder (the `mrp-data` volume).
- A copy is made every day in its `backups` folder, and the last 30 are kept.
- Admins can download a copy any time with **Settings > Activity and backups > Download a backup**.
- Anyone can **Save a backup** or **Export to Excel** from **Settings > The plan**.

To go back to a copy, an admin uses **Settings > The plan > Restore a backup…**. It replaces the whole team's plan, so save a backup of the current one first.

## Two people saving at once

Each save carries a version number. If two people save at once, the second is told and nothing is overwritten.

## The activity log

**Show activity** under **Activity and backups** lists sign-ins, wrong passwords, account changes and who changed the plan.

## Signing in

- Passwords are at least 10 characters and stored only as Argon2id hashes.
- After 5 wrong passwords, that username can't sign in for 5 minutes. Unknown usernames take as long to answer as known ones.
- Sessions are random tokens, stored on the server only as hashes, in a cookie scripts can't read and other sites can't send.
- Changing a password, an admin setting a new one, or turning an account off signs that person out everywhere.

## In the browser

- Changes are only accepted from the server's own pages.
- A strict content policy allows only the server's own scripts, and the page can't be framed by other sites.
- API answers are never cached, and over https the browser is told to always use https.

::: danger Always behind https
Run the server behind https, as the compose file does with Caddy. Over plain http, passwords cross the network readable, and the server says so when it starts.
:::

## Reporting a security problem

Please email [info@zombeatzmedia.com](mailto:info@zombeatzmedia.com) rather than opening a public issue.

## Related

- [Setting up a server](./server): https with Caddy.
- [People and roles](./server-people): who can do what.
- [Data and backups](./data-and-backups): backups on a computer.
