# Zomello Server: people and sharing

How accounts, shared boards and the Admin page work once a [Zomello Server](./server) is running.

## Signing in

Open the server's address in a browser (or add it in **Settings > Servers** in the Zomello app). Sign in with the username and password an admin gave you. Change your password and display name in **Settings > Account**.

## Your own boards

Everyone has their own boards. Nobody else sees them unless you share them.

## Sharing a board

1. Open the board > **⋯ > Share…**
2. Type a person's **username** and invite them.
3. They see the invitation on their **Home** page and accept it.

Everyone on a board can add, change and complete cards, and changes show up live for everyone.

| The board's owner can | Others on the board can |
|---|---|
| Invite and remove people | See who's on it (**People on this board…**) |
| Make someone else the owner | **Leave board** |
| Archive or delete the board | Add, edit and complete cards |

A small people icon in the menu marks boards that are shared.

## The Admin page (admins only)

**Admin** in the menu:

- **Server:** how many people, boards and cards, how much is stored, the version, and where the data lives. A database backup is kept every day (the last 14); **Download a backup now** gives you one.
- **People:** **Add a person** (Zomello suggests a password and gives you sign-in details to send), rename, make admin or remove admin rights, set a new password, turn an account off (signs them out everywhere) or back on, delete an account (their boards are handed to you).
- **Boards:** every board on the server. Change its owner, add or remove people, or delete it for everyone.

## Forgotten admin password

On the server: `docker exec -it zomello zomello-server reset-password <username>`. More in [Server backups, recovery and security](./server-backups).
