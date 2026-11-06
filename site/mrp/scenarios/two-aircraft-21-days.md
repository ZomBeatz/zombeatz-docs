---
description: "Two aircraft from June 1 to September 15, one pilot each, on 21-day hitches with 10 days off: how many pilots, and booking them."
---

# Two aircraft on 21-day hitches

A customer needs two aircraft from June 1 to September 15, each with one pilot on 12-hour days. Hitches are at most 21 days, with at least 10 days off between. You end up with the number of pilots and a rotation booked on the season.

## Working it out (once)

1. Open **Crew planner** and pick **One job**.
2. Under **The job**, pick **Your own numbers**, first day June 1 and last day September 15.
3. Under **Aircraft**, set the first one's **Hours staffed a day** to **12**, then **Add an aircraft** for the second.
4. Under **Rules**, set **Most days in camp in a row** to 21 and **Fewest days off between** to 10.

The answer is **3 pilots**, with **2 on duty each day**.

## Why three

- Two seats every day, one per aircraft.
- On 21 on, 10 off, each pilot covers a seat 21 days in every 31, so two seats take 2 × 31 ÷ 21 = 2.95, rounded up to **3**.
- Three pilots start a week apart, so while one is off the other two are on.

The [Crew planner](../crew-planner#what-would-change-it) also says what changes it: with **11** days off, it takes **4**, because three pilots can only give each other 10 days off on 21-day hitches.

## Booking it

1. Add the customer as a mission with a season for those dates and both tails ([Missions and seasons](../missions-and-seasons)).
2. On the season's **Pilots** tab, press **Work out the crew**. The planner opens with the season filled in.
3. Pick a rated pilot on each line and press **Book on "(season)"**.

## Every day

The Overview flags anything that moves the plan off the rules: time off, a lapsed course or a hitch running long. [Filling the schedule](../filling-the-schedule) fills any gaps.

## Good to know

- Travel days count as days in camp. With 1 travel day each way, set **Travel days each way** to 1 and see whether it still fits.
- On a job shorter than a hitch, no rotation is needed: one pilot per seat.
- Only pilots rated on the aircraft's type count. "You have N rated" says whether you have enough.
