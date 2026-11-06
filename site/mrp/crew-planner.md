---
description: "The Crew planner works out how few pilots a job takes and the rotation that does it, with the arithmetic in plain words, then books it."
---

# Crew planner

The **Crew planner** answers "how many pilots does this job take?": the fewest pilots for your rules, the rotation that does it, and why. Open **Crew planner** in the sidebar, or press **Work out the crew** on a season's **Pilots** tab.

The **One job** view plans a single job. **Several jobs** adds up the coming jobs against the pilots you have.

![The Crew planner's answer: pilots needed, on duty each day, the rotation and why](/img/mrp/planner-answer.png)

## Putting in the job

### The job

**Start from a season** fills in everything from a season you've planned: dates, aircraft, limits and charge. Or pick **Your own numbers** and type them, to answer a question before there's a season. Then the **First day** and **Last day**.

### Aircraft

One line per aircraft:

| Field | What it means |
|---|---|
| **Type** | Only pilots rated on a type can fly it, so each type is planned on its own |
| **Hours staffed a day** | **12** or **24**, or any number of hours someone must be on duty |
| **Flight hours a day** | How much it flies, for the flight-hour limits |
| **The night pilot needs to be night qualified** | Shown when it's staffed more than 12 hours. Its night seats are planned apart. |

**Add an aircraft** adds a line.

### Rules

| Rule | What it means |
|---|---|
| **Most days in camp in a row** | The longest hitch, counting travel days |
| **Fewest days off between** | Days off between hitches |
| **Travel days each way** | Days getting to and from the job. They count as days on, not days off. |
| **Longest duty day** | The most hours on duty in a day |
| **Rest between duty days** | Hours off before the next duty day |
| **Flight-hour limits** | Such as 100 hours in any 30 days and 1,000 in 365. **Add a limit** adds one. |

They start from **Settings > Hitches and days off**, or the season's mission and [kind of contract](./work-limits#kinds-of-contract) when you start from a season.

### Cost

**Pilot pay per day away** and **Customer pays per day** are optional. With them, and each aircraft's cost per flight hour, the answer shows what the job costs and makes.

## The answer

It updates as you type:

| Tile | Means |
|---|---|
| **Pilots needed** | The fewest pilots that can staff the whole job on these rules |
| **On duty each day** | Pilots working at once |
| **Rotation** | Days on and off for each pilot |
| **Cost** or **Margin** | When rates are set: what the job costs, or what it makes |

### Why that many

The **Why** list gives the arithmetic in plain words, for each type and its night seats:

1. **Pilots on duty every day.** Each aircraft's staffed hours split into duty days no longer than allowed. A 24-hour aircraft with 14-hour duty days needs 2 pilots a day.
2. **Everyone needs their days off.** On 21 on, 7 off, a pilot covers a seat 21 days in every 28, so each seat takes 28 ÷ 21 = 1.3 pilots on average.
3. **Everyone can only fly so much.** With 100 hours in 30 days and 6 flight hours a day, each seat takes 6 × 30 ÷ 100 = 1.8 pilots.
4. **The plan.** The larger of those, rounded up, then checked day by day for this job's length. A short job can need fewer than the averages.
5. **You have N rated** on the type, so you can see at once whether it can be done.

### What would change it

- **Fewer isn't possible on these rules. It takes changing one:** the smallest change to each rule that saves a pilot, like "10 days off instead of 11" or "hitches up to 24 days instead of 21".
- One line says what one more pilot would buy, like "14 days off after each 21-day hitch".

## The rotation

Under the answer, one line per pilot shows their hitches across the job, with travel days marked. Pilots start a little apart, so the same number are on every day.

When you started from a season, each line has a pilot to pick, from those rated on its type (and night qualified, for night seats). A line warns when its pilot can't take some of its hitches, and why: time off, another job, training or currency.

**Book on "(season)"** sets the season's pilots needed and rotation, replaces its pilot shifts and opens the season:

- Each picked pilot gets the hitches they can take.
- Hitches they can't take go to other pilots, picked the way [Fill the schedule](./filling-the-schedule#who-it-picks) picks them.
- What nobody can take stays open, so it shows as an open seat instead of a booking over someone's time off.

The message after it says how many hitches went to others and what's still open. Undo puts everything back.

### Night seats

When **The night pilot needs to be night qualified** is ticked, pick the course that means it under **Night qualified means** (such as night vision goggles). Night seats are then their own group, and only pilots holding that course are counted or offered.

## Several jobs

![Several jobs: the most pilots tied up at once, per type, against those rated](/img/mrp/planner-several.png)

**Several jobs** looks at the coming jobs together. Each job's pilots are worked out for its whole run, on its own rules, and added up day by day.

- The tiles show, for each type, the most pilots tied up at once against the pilots rated on it, and when.
- A pilot rated on several types counts toward each of them, so the first tile counts everyone once.
- Untick a job to see the period without it.

## Good to know

- The planner doesn't change anything until you press **Book**.
- It plans pilots only. Maintainers follow the season's maintainer rotation.
- It works in whole days. A hitch's travel days are inside its days in camp.

## Related

- [Work limits](./work-limits): where the rules come from.
- [Filling the schedule](./filling-the-schedule): crewing a season with the people you have.
- [Two aircraft on 21-day hitches](./scenarios/two-aircraft-21-days): a worked example.
- [Four aircraft, some on 24-hour duty](./scenarios/24-hour-duty): another.
- [A 100 hours in 30 days limit](./scenarios/flight-hour-limit): flight hours as the limit.
