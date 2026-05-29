---
sidebar_position: 5
id: unsupported-functions
title: Unsupported features
sidebar_label: Unsupported features
---

Some JavaScript features are not supported in Shelly Scripts. If any of these unsupported features are used, the script will fail to save. Below are the unsupported features and the correct Shelly‑compatible alternatives.

### 1. setTimeout

Use `setTriggerWithHoldOff` instead.

```js
var light = Shelly.getDevice("abc123");

Shelly.setTriggerOnAnyChange(light, "input", function () {
  setTimeout(() => {
    light.on = true;
  }, 5000);
});
```

### 2. setInterval

Use `checkSchedule` inside an if().

```js
var light = Shelly.getDevice("abc123");

setInterval(() => {
  light.toggle();
}, 60000);
```

### 3. clearTimeout / clearInterval

Use `setTriggerOnce` for one‑time actions.

```js
var light = Shelly.getDevice("abc123");

var t = setTimeout(() => {
  light.on = true;
}, 3000);

clearTimeout(t);
```

### 4. Promise / new Promise

Shelly commands are always synchronous, so promises are unnecessary.

```js
var light = Shelly.getDevice("abc123");

new Promise((resolve) => {
  light.on = true;
  resolve();
});
```

### 5. async / await

Use synchronous logic with `checkActiveTime` or other built‑in helpers.

```js
var motion = Shelly.getDevice("abc123");
var light = Shelly.getDevice("def456");

async function toggleLightOnMotion() {
  await light.on = true;
  await light.delay(2);
  light.off = true;
}

Shelly.setTriggerOnAnyChange(motion, "motion", toggleLightOnMotion);
```
