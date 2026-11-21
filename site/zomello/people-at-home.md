---
description: "Share some of your computer's boards with the people in your home, on their own phones. Choose who sees each board and whether they can view, check off or edit, and assign them tasks."
---
# People in your home

Your computer can share some of its boards with other people on their own phones. Someone who helps around the house can see the chores board and tick off what you've given them, without seeing your other boards. New in version 0.6.1.

It works over your home Wi‑Fi, through the same connection as [your computer's boards on your phone](./phone-and-computer). Nothing passes through the internet or ZomBeatz Media, and there are no accounts or passwords. Your computer has to be on for their phone to reach the boards.

## Give someone a phone

1. Link their phone to your computer the usual way (see [On the computer (once)](./phone-and-computer#on-the-computer-once)).
2. On the computer, open **Settings > Phones & tablets**. Next to their phone, under **Whose is it?**, pick their name, or **Someone else…** to type a new one.

A phone that's **Mine** sees every board, as before. A phone that belongs to someone sees only the boards you share with them, and nothing else on your computer (not your other boards, and not your other devices).

## Share a board with them

On the computer, right-click a board (or open its **⋯** menu) > **People on this board…**, and choose for each person:

| Choice | On their phone |
|---|---|
| **No access** | They don't see the board |
| **Can view** | They see the board, and nothing they change is kept |
| **Can check off** | They add comments to any card. On the cards assigned to them, they also set the status (Not started, In progress, Done) and tick checklist items. Nothing else they change is kept: not titles, dates or labels, and not moving cards between buckets, so on boards where buckets set the status they change it on the card instead |
| **Can edit** | They change anything on the board: cards, buckets, dates, everything except who it's shared with |
| **Custom…** | You choose, bucket by bucket and ability by ability (see below) |

**Can check off** has three extras you can tick under the person's name: **Pick up cards nobody has**, **Move their cards between buckets**, and **Hand their cards to someone else**. It covers every status: Not started, In progress, Waiting, On hold and Completed.

### Custom permissions

**Custom…** opens the details for that person on that board:

- **Buckets:** each one **Hidden** (they don't see it or its cards at all), **See**, **Work in** (change cards there, and move cards between buckets they work in), or **In charge** (also add, remove and re-assign cards there). **Buckets added later** sets what new buckets get.
- **What they can do:** set the status and tick checklists (on no cards, their own, or any card in buckets they work in), comment, edit what cards say, add cards, archive or delete cards, pick up cards nobody has, hand their cards to someone else.
- **Priorities they can set:** **Any**, or only the ones you tick. They can't change a card that has a priority they may not set.

For example, someone who runs the laundry: **In charge** of Laundry, **Work in** Done, **See** the rest. Their phone shows **Limited** next to the board's name.

Your computer decides: it keeps only the changes each person is allowed, so a change they can't make is undone on their phone right away. Boards they can't fully change show **View only** or **Check off** next to the board's name.

Private boards (**Private: only on this device**) are never shared.

## Give them tasks

People you add this way are in every card's **Assigned to** list and in the board's **Filter**, so you can see just what's theirs. On their phone, the cards assigned to them are in **My Day** and **My Tasks**, and the comments they write carry their name.

## Files from their phones

Other people's phones can't attach files to cards on your computer until you allow it: **Settings > Phones & tablets > Files from other people's phones > Let them attach files to cards**. Then choose:

- **Kinds of file:** pictures only; pictures and documents (PDF, Office, text, audio and video); or anything that doesn't run.
- **Up to … MB from each person in all.** Settings shows how much each person has sent.

Programs, scripts, installers, shortcuts and web pages are never taken from someone else's phone. **Check files from phones for viruses** (on unless you turn it off) uses Microsoft Defender on Windows, or ClamAV on Linux if it's installed; a file with a threat in it is removed straight away and the phone is told. macOS checks files itself when they're opened.

Their phone only gets the files used on the boards and buckets shared with them, and doesn't keep backups on your computer.

## Taking it back

- Set the board back to **No access** and it disappears from their phone.
- Set **Whose is it?** back to **Mine**, or **Unlink** the phone in **Settings > Phones & tablets**, to change or end their access.
