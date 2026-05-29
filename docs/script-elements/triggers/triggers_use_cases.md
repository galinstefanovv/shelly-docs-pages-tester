---
sidebar_position: 4
id: trigger-hints
title: Trigger Hints
sidebar_label: Trigger Hints
---

## What to avoid

### Illuminance as a trigger

Illuminance on a motion sensor only updates when motion is also detected — it is not an independent event. Using it as a trigger couples your logic to both motion and an illuminance change at the same time, which is rarely what you want.

Use **motion as the trigger** and check illuminance as a condition inside the handler. Motion is a discrete event. Inside the handler you can then decide whether the room is dark enough to act.

```js
// Fires constantly — every illuminance update
Shelly.setTriggerOnAnyChange(motionSensor, "illuminance < 50", () => light.on = true);

// Fires on motion, then checks illuminance as a condition
function turnOnLights() {
  if (motionSensor.illuminance < 50) {
    light.on = true;
  }
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLights);
```

---

### Equality checks in triggers

Trigger conditions with `=` on numeric sensor values are unreliable. A sensor reporting temperature will send values like `24.8`, `25.1`, `25.3` — it will almost never land on exactly `25.0`. If your trigger waits for `"temperature = 25"`, it may never fire.

Use range operators instead — `>`, `<`, `>=`, `<=`.

**Instead of:**

```js
// May never fire — sensor might skip exactly 25
Shelly.setTriggerOnce(tempSensor, "temperature = 25", handler);
```

**Use this:**

```js
// Fires as soon as temperature crosses the threshold
Shelly.setTriggerOnce(tempSensor, "temperature > 25", handler);
```

Equality (`==`) is reliable for discrete states — like `"motion"`, `"open"`, `"closed"`, or virtual device properties with fixed values like `"atHome == true"`. For any numeric measurement from a physical sensor, always use a range.

---

### Re-checking the triggers

A trigger fires only when its condition is true. Repeating that same check inside the handler is redundant — it adds code without adding logic.

**Instead of:**

```js
// The trigger already confirmed motion is true — checking again adds nothing
function turnOnLights() {
  if (motionSensor.motion) {
    light.on = true;
  }
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLights);
```

**Use this:**

```js
// Trust the trigger — run the action directly
function turnOnLights() {
  light.on = true;
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLights);
```

Use `if` inside a handler for **additional conditions** that are not part of the trigger — checking a second device, validating a time window, or reading a global variable. Not for repeating what the trigger already confirmed.

---

### `setTriggerOnAnyChange` on fast-updating properties

`setTriggerOnAnyChange` fires every time the watched property reports a new value. For a door sensor's `open` state or a relay's output, that is a few times per day. For a property like EMeter power or temperature from a live sensor, that can be tens of times per minute — and your handler runs every single time.

**Instead of:**

```js
// Fires constantly — every power reading triggers the handler
Shelly.setTriggerOnAnyChange(emeter, "power > 200", function() {
  notifications.send("High power draw detected");
});
```

**Use this:**

```js
// Door state changes rarely; reacting to every change is exactly what you want
Shelly.setTriggerOnAnyChange(doorSensor, "open", function() {
  alarm.on = true;
});
```

Use `setTriggerOnAnyChange` for properties that change slowly and discretely: door open/closed, relay output, button state, presence.

### Overusing `setRepeatedTrigger`

`setRepeatedTrigger` fires the moment a condition becomes true and then **re-fires every minute** for as long as the condition stays true.

**Use it when:**
- You need to keep taking action while a condition persists — not just once.
- You are regulating something continuously, like temperature control or power monitoring.
- You want the script to "stay aware" that a condition is ongoing.

**Instead of:**

```js
//Fires every minute 
var emeter = Shelly.getDevice("x");

Shelly.setRepeatedTrigger(emeter, "powerConsumption > 3000", () => {
    Shelly.sendPhoneAlertNotification("Power overload detected");
});
```
The alert fires immediately when consumption crosses 3000W, and then again every minute until consumption drops below the threshold.

**Use this:**

```js
//Fires the first time the conditions become true
var emeter = Shelly.getDevice("x");

Shelly.setTriggerOnce(emeter, "powerConsumption > 3000", () => {
    Shelly.sendPhoneAlertNotification("Power overload detected");
});
```

**Do not use it when:**
- A single reaction is enough (use `setTriggerOnce`).
- You need a cooldown before the next fire (use `setTriggerWithHoldOff`).

---

## Good practices

### When to use a condition instead of a trigger

Not every check belongs in the trigger condition. If a value determines *what to do* rather than *when to run*, it belongs in the handler as a condition.

The trigger answers **when** the script runs. The condition inside the handler answers **what happens** when it does.

The same trigger can also produce different behaviors depending on what the handler finds. One motion event, for example, can set different brightness levels based on current illuminance — two distinct outcomes from a single trigger.

```js
function turnOnLights() {
  if (motionSensor.illuminance < 30) {
    lights.turnOn();
    lights.brightness = 100;
  } else if (motionSensor.illuminance < 60) {
    lights.turnOn();
    lights.brightness = 50;
  }
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLights);
```

Use a condition inside the handler when:
- You need to check a **second device** that is not the trigger source.
- You need to verify a **time window** with `checkActiveTime` or `checkSchedule`.
- You need to read a **global variable** — for example, a counter or a flag set by another part of the script.

---

### When multiple conditions must be true, trigger on the least frequent event

If an action requires two or more conditions to be true at the same time, choose the one that changes least often as the trigger. Check the remaining conditions inside the handler.

The handler runs every time the trigger fires. Triggering on the most active event means the handler runs constantly — only to find the other conditions are not met. Triggering on the rarest event keeps handler invocations low, and the check only runs when there is a realistic chance everything else is also satisfied.

**Instead of:**

```js
// emeter.power > 200 fires dozens of times per day
// The temperature check runs every single time, even when the room is cool
Shelly.setTriggerOnce(emeter, "power > 200", function() {
  if (tempSensor.temperature > 30) {
    fan.on = true;
    notifications.send("High load and high temperature — fan activated");
  }
});
```

**Use this:**

```js
// temperature > 30 fires a few times per day at most
// Power is checked only when the temperature has actually crossed the threshold
Shelly.setTriggerOnce(tempSensor, "temperature > 30", function() {
  if (emeter.power > 200) {
    fan.on = true;
    notifications.send("High load and high temperature — fan activated");
  }
});
```

To identify the least frequent event, ask: how often does each sensor update, and how often does each threshold get crossed under typical conditions? The answer is your trigger source.

---

### Use hold-off to filter out sensor noise before acting

Physical sensors often oscillate around a threshold. A temperature sensor near 25°C might report `24.9`, `25.1`, `24.8`, `25.2` in quick succession — each crossing fires a new trigger. `setTriggerWithHoldOff` requires the condition to stay continuously true for a set duration before the handler runs.

**Instead of:**

```js
// Fires on every threshold crossing, including brief fluctuations
Shelly.setTriggerOnce(tempSensor, "temperature > 25", function() {
  notifications.send("Temperature threshold crossed");
});
```

**Use this:**

```js
// Fires only after temperature has stayed above 25°C for 10 uninterrupted minutes
Shelly.setTriggerWithHoldOff(tempSensor, "temperature > 25", 10, function() {
  notifications.send("Temperature has been elevated for 10 minutes");
});
```

Use `setTriggerWithHoldOff` when false positives are a problem: sensor jitter, doors that bounce, or illuminance that fluctuates around a threshold at dawn and dusk.

---

### Use schedule triggers instead of polling for clock-based actions

For time-of-day actions, use `setScheduleTrigger`. Using `setTimerTrigger` with a manual time check inside the handler is a workaround — it fires on every interval just to check if it's the right moment, then does nothing. Schedule triggers exist exactly for this.

**Instead of:**

```js
// Runs every 5 minutes and does nothing 287 out of 288 times
Shelly.setTimerTrigger(5, function() {
  var t = Shelly.getTime();
  if (t.hours === 7 && t.minutes === 0) {
    lights.on = true;
    coffeemaker.on = true;
  }
});
```

**Use this:**

```js
// Fires at exactly 07:00 on weekdays
Shelly.setScheduleTrigger("07:00", [1,2,3,4,5], function() {
  lights.on = true;
  coffeemaker.on = true;
});

// Fires once on a specific date and time
Shelly.setDateTimeTrigger("2026-07-20", "22:00", function() {
  lights.off = true;
});
```

---

### Use `setTimerTrigger` for polling, not as a substitute for device events

`setTimerTrigger` fires unconditionally at a fixed interval — it does not watch any device property. This makes it the right choice when there is no natural device event to react to: checking battery levels across devices, sending periodic status reports, or simulating presence.

| Interval | Fires/day | Notes |
|---|---|---|
| 1 min | 1 440 | Use only for truly critical polling |
| 5 min | 288 | Acceptable for frequent checks |
| 15 min | 96 | Good general-purpose polling |
| 60 min | 24 | Safe, standard |
| 120 min | 12 | Light background task |

**Instead of:**

```js
// Polling the door every minute when the device already
// fires an event the moment the state changes
Shelly.setTimerTrigger(1, function() {
  if (doorSensor.open) {
    alarm.on = true;
  }
});
```

**Use this:**

```js
// React to the door event directly — no polling needed
Shelly.setTriggerOnce(doorSensor, "open", function() {
  alarm.on = true;
});

// Correct use of setTimerTrigger — battery drains gradually; no event fires for it
Shelly.setTimerTrigger(60, function() {
  if (motionSensor.battery < 20) {
    notifications.send("Battery low on motion sensor");
  }
});
```
