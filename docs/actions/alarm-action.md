---
sidebar_position: 6
---

# Alarm Action

An Alarm Action is an automation that allows a Script to **enable**, **disable** or **toggle** a predefined alarm.

It provides a simple way to integrate alarm states into your automations, making it possible to trigger alerts, activate safety routines or synchronize alarms with other device events.

Alarm Actions are typically used when you want your automation logic to interact directly with the alarm in a fast and consistent way.

```js
var alarm = Shelly.getAlarm("x");

alarm.enable();
```

```js
var alarm = Shelly.getAlarm("x");

alarm.disable();
```

```js
var alarm = Shelly.getAlarm("x");

alarm.toggle();
```

## More examples

- **[Motion alarm in darkness](https://docs.sp.infn.dev/appendix/examples-list/alarms/motion-alarm-in-darkness)**
- **[Enable alarm when door is closed](https://docs.sp.infn.dev/appendix/examples-list/alarms/door-closed-alarm)**

For creation through the UI, see this **[page](https://docs.sp.infn.dev/ui-and-snippets/script-editor/snippets/#alarm-action)**.
