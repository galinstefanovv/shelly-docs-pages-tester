---
sidebar_position: 2
id: description
title: How scripts work
sidebar_label: How scripts work
---

Scripts in Shelly are event‑driven automations. They run only when something happens - a device changes state, a value crosses a threshold, or a scheduled moment is reached. This page explains how scripts behave after a trigger fires, how events are processed, and how to keep automations stable and predictable.

:::important
Triggers are required for scripts. Without them, the script cannot be executed. 

Triggers cannot be used inside actions or handler functions.
:::

## Script lifecycle

Every script follows the same sequence every time it runs:

1. **Initialization** — The script loads, device variables are assigned, and all triggers are registered.
2. **Event occurs** — A device reports a new value, a threshold is crossed, or a scheduled time is reached.
3. **Trigger fires** — If the event matches the trigger's condition, the associated handler is called.
4. **Condition evaluation** — The handler runs its internal logic and checks whether the action should proceed.
5. **Action execution** — Commands are sent to devices, notifications are dispatched, or global variables are updated.

The initialization step runs once, every time the script starts. The remaining steps repeat each time a trigger fires.

## Triggers vs. conditions

Triggers and conditions are both ways to express "when should something happen", but they operate at different levels.

A **trigger** is declared at the top level of the script. It watches a device property and decides when to call the handler. The script does nothing until the trigger fires.

```js
Shelly.setTriggerOnAnyChange(motionSensor, "motion", handleLowLight);
```

A **condition** is a regular JavaScript `if` check inside the handler. It runs after the trigger has already fired and lets you apply additional logic before executing the action.

```js
function handleLowLight() {
    if (motionsensor.illuminance < 50) {
        light.on = true;
    }
}
```

Together they let you say: "fire when motion is detected, but only turn the light on if the illuminance is below 50."

Conditions can only be used inside handler functions. They cannot be placed at the top level of the script.

This page focuses on **script behavior**, while the **[Triggers](https://docs.sp.infn.dev/script-elements/triggers/overview)** page explains how scripts are started. Together, they give a complete picture of how Shelly automations work.