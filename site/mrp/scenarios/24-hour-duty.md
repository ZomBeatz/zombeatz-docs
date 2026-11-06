---
description: "Two aircraft on 12-hour days and two on 24-hour duty, with 28 days on and 14 off: why it takes nine pilots."
---

# Four aircraft, some on 24-hour duty

Four aircraft on one contract: two staffed 12 hours a day and two staffed around the clock. Pilots work 28 days on and 14 off, with duty days of at most 14 hours and 10 hours of rest. You end up with how many pilots it takes and the rotation.

## Working it out (once)

1. Open **Crew planner**, **One job**, and put in the contract's dates.
2. Add four aircraft: two with **Hours staffed a day** at **12**, two at **24**. Give them all the same **Type** if any pilot can fly any of them.
3. Under **Rules**: **Most days in camp in a row** 28, **Fewest days off between** 14, **Longest duty day** 14, **Rest between duty days** 10.

The answer is **9 pilots**, with **6 on duty each day**.

## Why nine

- A 12-hour aircraft needs one pilot a day. A 24-hour aircraft needs two, since nobody may work more than 14 hours: 2 + 2 + 2 = **6 seats**.
- On 28 on, 14 off, each pilot covers a seat 28 days in every 42, so each seat takes 42 ÷ 28 = 1.5 pilots: 6 × 1.5 = **9**.

## Night seats

If the night pilot on a 24-hour aircraft needs night vision goggles:

1. Tick **The night pilot needs to be night qualified** on those aircraft.
2. Pick the course under **Night qualified means**.

Night seats are then planned apart, and only pilots holding the course count for them. The answer may grow if few pilots hold it. See [Night seats](../crew-planner#night-seats).

## Different types

If the 24-hour aircraft are a different type, give them their own **Type**. Each type is planned on its own, since only rated pilots can fly it, and the answer adds them up.

## Good to know

- With duty days of 8 hours, a 24-hour aircraft needs 3 pilots a day.
- **Fewer isn't possible on these rules** lists the one rule change that saves a pilot, like a shorter time off.
- [Several jobs](../crew-planner#several-jobs) shows whether your pilots also cover your other contracts at the same time.
