---
description: "Day rates, cost per flight hour and charge per day give each mission's crew and flying cost, its charge and the margin."
---

# Costs

Give people a day rate, aircraft a cost per flight hour and missions a charge per day, and Reports shows what each mission costs and makes. All of them are optional; anything without a rate counts as nothing.

## Setting the rates

| Where | Field | Means |
|---|---|---|
| A person's **Details** | **Day rate** | Pay and per diem for a day on duty |
| An aircraft | **Cost per flight hour** | What an hour of flying costs |
| A mission's **Details** | **Charge per day** | What the customer pays for a day |
| **Settings > Preferences** | **Currency symbol** | Shown before every amount |

## How it's worked out

For a season over the period:

- **Crew:** each shift's days × that person's day rate.
- **Flying:** the season's days × each aircraft's flight hours a day × its cost per flight hour.
- **Charged:** the season's days × the mission's charge per day.
- **Margin:** charged minus crew and flying.

The money columns show on Reports, in the Excel report, and in the [Crew planner](./crew-planner#cost) when you put rates there. They only show once some rate is set.

## Related

- [Reports and sharing](./reports): where the numbers show.
- [Crew planner](./crew-planner): the cost of a job before it's booked.
- [Settings](./settings#preferences): the currency symbol.
