---
description: "Auto-assign hands out a bucket's cards to whoever has the most room, by priority and effort, and queues what doesn't fit until someone frees up."
---
# Auto-assign

A bucket can hand out its cards by itself. A card that arrives with no one on it goes to the person with the most room, the most important cards first. When nobody has room, the card waits its turn. New in version 0.6.1.

Auto-assign is a [bucket rule](./buckets), so it needs **Bucket automation** turned on in **Settings > Features**.

## Turn it on

1. Open the bucket's **⋯** menu > **Bucket rules…**.
2. Under **Auto-assign**, tick **Give cards that arrive here with no one to whoever has the most room**.
3. Under **Who it can pick on this board**, tick the people it may give cards to, and for each one:
   - **Can carry:** how many effort points of unfinished cards they can have on this board at once.
   - **Biggest card:** the largest card they should get (a kid might take cards up to 2).

The people list is the same for every bucket on the board. Only the people ticked here are ever picked.

## Effort

Each card has an **Effort** in the card window: 1, 2, 3, 5 or 8 points. A card without one counts as 1. Effort is how much of someone's room the card takes. Cards with more than 1 point show it on the board.

## Who gets a card

When a card lands in the bucket with no one on it:

1. **Most important first.** Cards waiting in the same board go out in priority order (the board's own priorities if it has them), then oldest first.
2. **Only people who fit:** they're ticked for Auto-assign, may work in that bucket (see [People in your home](./people-at-home)), the card isn't bigger than their **Biggest card**, and it fits in what they **Can carry**.
3. **The least full afterwards wins.** Ties go to whoever has fewer cards, then by name, so it's predictable.

## The queue

If nobody has room, the card stays unassigned and shows **Waiting for someone (#2)**: its place in line. It goes out as soon as someone has room: when they finish a card, when a card is taken off them, or when you raise what they can carry.

A priority can be allowed to **go over capacity** (**Customize > Priorities**). Cards with that priority are given to whoever is least full even when everyone is full, for real emergencies.

## Rebalance

The bucket's **⋯** menu > **Rebalance** takes back the cards Auto-assign gave out that nobody has started yet, and hands them out again. Use it after changing what people can carry. A card someone re-assigned by hand is left alone.

## Where it runs

Auto-assign runs on the device that holds the boards: your computer for its own boards, a phone for its own. A phone showing your computer's boards leaves it to the computer, so a card is never handed out twice.
