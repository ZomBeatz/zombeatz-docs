---
description: "Buckets are the columns on a board. Add, rename and move them, sort cards, set WIP limits and auto-progress, and collapse or archive them."
---
# Buckets

Buckets are the columns on a board: steps in a process ("To do, Doing, Done"), categories ("Groceries, Hardware") or anything else.

## Add, rename and move

- **+ Add bucket** at the right end of the board.
- Click a bucket's title to rename it.
- Drag a bucket by its title to move it.
- On a phone, one bucket fills the screen; swipe sideways for the next.

## The bucket menu (⋯)

| Option | What it does |
|---|---|
| **Collapse** | Folds the bucket into a slim strip to save room |
| **Sort** | Due date, priority, name, progress, newest or recently updated, with **Reverse order** and **Use this sort for every bucket on the board**. Your own order underneath is never lost |
| **Bucket rules…** | What happens to cards made in, or moved into, this bucket. See [Bucket rules](#bucket-rules) |
| **Select all cards** | Selects every card in the bucket, to change them all at once ([Select several cards](./keyboard#select-several-cards)) |
| **WIP limit** | "Work in progress" limit: the bucket shows "3 / 5" and is highlighted when it holds more cards than this |
| **Card display…** | What cards show in this bucket only (overrides the board's choice) |
| **Ticked checklist items** | Show or hide finished checklist items on this bucket's cards |
| **Ask AI for cards here…**, **Export bucket for AI…**, **Copy work order** | Optional AI helpers ([AI tools](./ai-tools)) |
| **Paste cards here…** | Adds cards you copied |
| **Archive bucket** / **Delete bucket** | With its cards; Undo works right after |

## Bucket rules

**Bucket rules…** in the bucket menu sets what happens to cards automatically. The menu shows **(on)** when a bucket has any.

| Rule | What it does |
|---|---|
| **When a card is made here: Add labels** | New cards made in this bucket get these labels, and keep them when they move on. Handy for remembering where a card came from, like a "From testing" label on a Testing bucket |
| **When a card is made here: Set priority** | New cards made here start with this priority |
| **When a card is moved or made here: Set progress** | Common: "In progress" for a Doing bucket, "Completed" for Done |
| **When a card is made here: Start from** | New cards made here start from one of your [templates](./templates): its description, checklist, labels and so on. The title you type is kept |
| **When a card is moved or made here: Add labels** | Cards dropped here get these labels, for example "Needs review" on a Review bucket |
| **When a card is moved or made here: Due date** | Cards without a due date get one: today, tomorrow, in a few days or a week or two. A card that already has a due date keeps it |
| **When a card is moved or made here: Assign** | Cards get these people (added to anyone already on them) |
| **When a card is moved or made here: My Day** | Cards go on today's [My Day](./home-and-search) |
| **When every checklist item is ticked: Complete it** | Ticking the last item completes the card. Sub-tasks count: completing the last one does it too |
| **When every checklist item is ticked: Move it to** | Ticking the last item moves the card to another bucket on the board, for example from Doing to Review. That bucket's own rules then apply |
| **Tidy up: Archive** | Completed cards in this bucket are archived a day, 3, 7, 14 or 30 days after they were completed. Archived cards stay in the board's Archive, where you can restore them |

Rules only add things: moving a card out of a bucket doesn't take labels or people off. **Turn off all rules** clears them.

**Example:** a "Doing" bucket that assigns you, adds the card to My Day and moves it to "Review" when its checklist is done; a "Done" bucket that completes cards and archives them after a week.

## Show completed

Completed cards fold away under **Show completed** at the bottom of each bucket, with a count. Click it to see them, or to bring one back by un-ticking it.

## Add cards from a template

The template button (a small layout icon) next to **+ Add card** makes a card from one of your templates. See [Templates](./templates).

## Related

- [Cards](./cards)
- [Views](./views)
