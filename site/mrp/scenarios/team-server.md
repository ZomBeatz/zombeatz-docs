---
description: "Several schedulers and the crew sign in to one plan on your own server: setting it up, adding people, and using it from phones."
---

# A team on a server

Several people schedule, and the crew want to check their shifts from their phones. You end up with one plan on your own server, with https and an account for each person.

## On the server (once)

1. Point a domain name at the server and [set it up with Docker](../server).
2. Open it right away and create the admin account.
3. If you've been using the desktop app, restore its backup: **Settings > The plan > Restore a backup…**.

## Adding the team (once)

1. In **Settings > People with access**, press **Add a person…** for each person ([People and roles](../server-people)).
2. Make schedulers **Scheduler** and everyone else **Viewer**.
3. Send each person the address, their username and password, and ask them to change it.

## On each phone (once)

1. Open the address in the phone's browser and sign in.
2. Add it to the home screen ([Phones and tablets](../phones-and-tablets#adding-it-to-the-home-screen)).

## Every day

- Schedulers plan as usual. Changes others save show up on their own, and two saves at once never overwrite each other.
- Crew open it on their phones to see their shifts, or look at their **Their schedule (PDF)**.

## Good to know

- The server keeps a copy every day, the last 30 ([Backups and security](../server-backups)).
- Viewers can still **Save a backup** and **Export to Excel**.
- A forgotten admin password is reset on the server with `reset-password` ([People and roles](../server-people#a-forgotten-password)).
