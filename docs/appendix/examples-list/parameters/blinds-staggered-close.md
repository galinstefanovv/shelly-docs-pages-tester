---
sidebar_position: 7
id: blinds-staggered-close
title: Blinds staggered close
sidebar_label: Blinds staggered close
---

Closes each blind at a different time and to a different position to simulate a natural look.

```js title="blinds-staggered-close.js" file=../../../scripts/blinds-staggered-close.js

```

At 20:00, every day of the week, the script adjusts three blinds. Each blind moves to a different target position and each action is delayed by a different amount of time. This creates a more natural closing pattern.

### Initialization

- `checkSchedule("20:00")` - Runs the automation exactly at 20:00, Monday-Sunday.

### Condition evaluation

When the scheduled time is reached each blind moves to its configured position, using the delays defined in the parameters:

- Blind 1 moves after a short delay.
- Blind 2 follows after a longer delay.
- Blind 3 moves last, with the longest delay.

This staggered timing makes the blinds close in a more natural way.
