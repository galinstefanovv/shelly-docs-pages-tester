---
sidebar_position: 9
id: automation-for-cooking
title: Activation triggered by motion and illuminance
sidebar_label: Stove activation
---

<!-- prettier-ignore-start -->

```js title="automation-for-cooking.js" file=../../../scripts/automation-for-cooking.js

```

<!-- prettier-ignore-end -->

This automation acts as a night‑time motion trigger that activates another scene when both motion is detected and the ambient light is below a defined threshold. It operates only during a configured time window and, when the conditions are met, it executes the `runDo()` actions of the linked scene `motionSensorStoveActivation`.

During initialization, the script sets two triggers on the motion sensor: one that reacts to any change in the motion state and another that repeatedly evaluates the illuminance condition while the value remains below the configured threshold. It also defines an active period ensuring the automation runs only during the evening and night.

The **if()** checks whether motion is currently detected and whether the illuminance is below the specified value **50 lx**. If both conditions are **true** and the script is within the active time window, the action is executed.

The script calls `motionSensorStoveActivation.runDo()`, which triggers the actions of the referenced scene without duplicating its logic. This allows the script to reuse existing automation behavior in an efficient way.
