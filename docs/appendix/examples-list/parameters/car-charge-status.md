---
sidebar_position: 5
id: car-charge-status
title: Car charge status
sidebar_label: Car charge status
---

<!-- prettier-ignore-start -->

```js title="car-charge-status.js" file=../../../scripts/car-charge-status.js

```

<!-- prettier-ignore-end -->

---

The script automatically sends notifications based on car charging status using **power meter**. If consumption is below 100 W for 10 minutes - send notification that car started charging. If consumption rises above set consumption - send notification that car is fully charged.

- **params** - Define the messages and thresholds:
  - **lowThreshold (100 W)** - Treated as "car is charging".
  - **highThreshold (1000 W)** - Treated as "car fully charged".
  - Notification texts are reused via `params.carChargingNotification` and `params.carChargedNotification`.
- **Initialization** - Registers two repeated triggers, so the script is re-evaluated whenever consumption is below/above the thresholds.
- **condition** - Becomes **true** if power is outside the normal band (below low OR above high).
- **if() block** - Decides which notification to send based on which threshold is currently met.
