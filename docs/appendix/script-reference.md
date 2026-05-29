---
sidebar_position: 1
id: api-reference
title: API reference
sidebar_label: API reference
---

This page provides a reference to the Shelly Script API. It explains how to access devices, create triggers, send notifications, work with scenes, alarms, groups and manage global variables. The goal is to give you a quick and easy way to understand what each function does and how to use it in your automations.

## Script API reference

#### [Shelly](https://docs.sp.infn.dev/appendix/api-reference#shelly-1)

- **[Access methods](https://docs.sp.infn.dev/appendix/api-reference#access-methods)**
  - **[`Shelly.getDevice(id)`](https://docs.sp.infn.dev/appendix/api-reference#shellygetdeviceid)**
  - **[`Shelly.getGroup(id)`](https://docs.sp.infn.dev/appendix/api-reference#shellygetgroupid)**
  - **[`Shelly.getAlarm(id)`](https://docs.sp.infn.dev/appendix/api-reference#shellygetalarmid)**
  - **[`Shelly.getScene(id)`](https://docs.sp.infn.dev/appendix/api-reference#shellygetsceneid)**
- **[Device Triggers](https://docs.sp.infn.dev/appendix/api-reference#device-triggers)**
  - **[`Shelly.setTriggerOnAnyChange(device, condition, handler)`](https://docs.sp.infn.dev/appendix/api-reference#shellysettriggeronanychangeargs)**
  - **[`Shelly.setTriggerOnce(device, condition, handler)`](https://docs.sp.infn.dev/appendix/api-reference#shellysettriggeronceargs)**
  - **[`Shelly.setTriggerWithHoldOff(device, condition, holdOff, handler)`](https://docs.sp.infn.dev/appendix/api-reference#shellysettriggerwithholdoffargs)**
  - **[`Shelly.setRepeatedTrigger(device, condition, handler)`](https://docs.sp.infn.dev/appendix/api-reference#shellysetrepeatedtriggerargs)**
  - **[`Shelly.setTrigger(options, handler)`](https://docs.sp.infn.dev/appendix/api-reference#shellysettriggeroptions-handler)**
- **[Utility checks (Triggers)](https://docs.sp.infn.dev/appendix/api-reference#utility-checks-triggers)**
  - **[`Shelly.checkDateTime(dateTime)`](https://docs.sp.infn.dev/appendix/api-reference#shellycheckdatetimedatetime)**
  - **[`Shelly.checkSchedule(time, days)`](https://docs.sp.infn.dev/appendix/api-reference#shellycheckscheduletime-days)**
  - **[`Shelly.checkTimer(minutes)`](https://docs.sp.infn.dev/appendix/api-reference#shellychecktimerminutes)**
  - **[`Shelly.checkSolarCondition(event, direction, time)`](https://docs.sp.infn.dev/appendix/api-reference#shellychecksolarconditionargs)**
  - **[`Shelly.checkActiveTime(start, duration, days)`](https://docs.sp.infn.dev/appendix/api-reference#shellycheckactivetimeargs)**
  - **[`Shelly.getTime()`](https://docs.sp.infn.dev/appendix/api-reference#shellygettime)**
- **[Utility commands (Actions)](https://docs.sp.infn.dev/appendix/api-reference#utility-commands-actions)**
  - **[`Shelly.logActivity(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#shellylogactivitydelay)**
  - **[`Shelly.sendAlexaNotification(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#shellysendalexanotificationdelay)**
  - **[`Shelly.sendPhoneStandardNotification(message, delay?)`](https://docs.sp.infn.dev/appendix/api-reference#shellysendphonestandardnotificationmessage-delay)**
  - **[`Shelly.sendPhoneAlertNotification(message, delay?)`](https://docs.sp.infn.dev/appendix/api-reference#shellysendphonealertnotificationmessage-delay)**
  - **[`Shelly.sendEmailNotification(message, delay?)`](https://docs.sp.infn.dev/appendix/api-reference#shellysendemailnotificationmessage-delay)**

#### [Scene](https://docs.sp.infn.dev/appendix/api-reference#scene-1)

- **[`Scene.enable(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#sceneenabledelay)**
- **[`Scene.disable(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#scenedisabledelay)**
- **[`Scene.runDo(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#scenerundodelay)**
- **[`Scene.toggle(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#scenetoggledelay)**
- **[`Scene.trigger(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#scenetriggerdelay)**
- **[`Scene.isFulfilled()`](https://docs.sp.infn.dev/appendix/api-reference#sceneisfulfilled)**

#### [Alarm](https://docs.sp.infn.dev/appendix/api-reference#alarm-1)

- **[`Alarm.enable(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#alarmenabledelay)**
- **[`Alarm.disable(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#alarmdisabledelay)**
- **[`Alarm.toggle(delay?)`](https://docs.sp.infn.dev/appendix/api-reference#alarmtoggledelay)**
- **[`Alarm.isFulfilled()`](https://docs.sp.infn.dev/appendix/api-reference#alarmisfulfilled)**

#### [Device Group](https://docs.sp.infn.dev/appendix/api-reference#device-group-1)

- **[`Group.turnOn()`](https://docs.sp.infn.dev/appendix/api-reference#groupturnon)**
- **[`Group.turnOff()`](https://docs.sp.infn.dev/appendix/api-reference#groupturnoff)**
- **[`Group.openRoller()`](https://docs.sp.infn.dev/appendix/api-reference#groupopenroller)**
- **[`Group.closeRoller()`](https://docs.sp.infn.dev/appendix/api-reference#groupcloseroller)**
- **[`Group.stopRoller()`](https://docs.sp.infn.dev/appendix/api-reference#groupstoproller)**
- **[`Group.setPositionRoller(position)`](https://docs.sp.infn.dev/appendix/api-reference#groupsetpositionrollerposition)**

#### [Time Triggers](https://docs.sp.infn.dev/appendix/api-reference#time-triggers-1)

- **[`setTimerTrigger(minutes, handler)`](https://docs.sp.infn.dev/appendix/api-reference#settimertriggerargs)**
- **[`setScheduleTrigger(time, days, handler)`](https://docs.sp.infn.dev/appendix/api-reference#setscheduletriggerargs)**
- **[`setDateTimeTrigger(date, time, handler)`](https://docs.sp.infn.dev/appendix/api-reference#setdatetimetriggerargs)**
- **[`setSolarTrigger(event, direction, time, handler)`](https://docs.sp.infn.dev/appendix/api-reference#setsolartriggerargs)**
- **[`setActiveTime(start, duration, days)`](https://docs.sp.infn.dev/appendix/api-reference#setactivetimeargs)**

#### [Virtual devices](https://docs.sp.infn.dev/appendix/api-reference#virtual-devices-1)

- **[`Virtual.getDevice(id)`](https://docs.sp.infn.dev/appendix/api-reference#virtualgetdeviceid)**

#### [Global variables](https://docs.sp.infn.dev/appendix/api-reference#global-variables-1)

- **[`Global.Name`](https://docs.sp.infn.dev/appendix/api-reference#globalname)**

#### [Instance methods](https://docs.sp.infn.dev/appendix/api-reference#instance-methods-1)

#### [Troubleshooting](https://docs.sp.infn.dev/appendix/api-reference#troubleshooting-1)

---

## Shelly

### Access methods

Used for device, scene, device group and alarm initialization. These methods return references to existing elements.

### `Shelly.getDevice(id)`

Retrieves a Shelly device by its unique identifier.

- **id** - string, required - the device ID;
- Returns: Device object;

```js
var temperatureSensor = Shelly.getDevice("x");
```

### `Shelly.getGroup(id)`

Retrieves a group of devices by its numeric identifier.

- **id** - number, required - the group ID;
- Returns: Group object;

```js
var relays = Shelly.getGroup(xxx);
```

### `Shelly.getAlarm(id)`

Retrieves an alarm object by its identifier.

- **id** - string, required - the alarm ID;
- Returns: Alarm object;

```js
var alarm = Shelly.getAlarm("x");
```

### `Shelly.getScene(id)`

Retrieves a Shelly scene by its unique identifier.

- **id** - string, required - the scene ID;
- Returns: Scene object;

```js
var airConditionHeating = Shelly.getScene("x");
```

### Device Triggers

These methods define how a device triggers script execution. Each trigger monitors a device property and determines when the script should run. All triggers require a device object and a property name and some accept comparison operators or hold‑off periods.

### `Shelly.setTriggerOnAnyChange(args)`

Every time the value of the selected property changes and the condition remains valid, the script is re-run. The trigger accepts the following arguments:

- **device** - object, required. Device object returned by `Shelly.getDevice()` or `Virtual.getDevice()`;
- **device property** - string, required. The property to monitor for any change;
- **handler** - function;

```js
Shelly.setTriggerOnAnyChange(device, "illuminance < 50", handler);
Shelly.setTriggerOnAnyChange(device, "aPower == 100", handler);
```

### `Shelly.setTriggerOnce(args)`

When it reaches the desired state, the script is triggered. The trigger accepts the following arguments:

- **device** - object, required. Device object returned by `Shelly.getDevice()` or `Virtual.getDevice()`;
- **device property** - string, required;
- **handler** - function;

```js
Shelly.setTriggerOnce(device, "closed", handler);
Shelly.setTriggerOnce(device, "temperature > 30", handler);
```

### `Shelly.setTriggerWithHoldOff(args)`

When it transitions to the desired state, a timer is started during which the condition must remain valid for the set duration without changing its state. The trigger accepts the following arguments:

- **device** - object, required. Device object returned by `Shelly.getDevice()` or `Virtual.getDevice()`;
- **device condition** - string, required;
- **holdOffMinutes** - number, required. Number of minutes during which the condition must remain valid for before triggering;
- **handler** - function;

```js
Shelly.setTriggerWithHoldOff(device, "powerConsumption > 1000", 20, handler);
Shelly.setTriggerWithHoldOff(device, "temperature > 25", 10, handler);
```

### `Shelly.setRepeatedTrigger(args)`

When it reaches the desired state, the script is triggered and every minute it is checked and triggered again if the condition is still valid. The trigger accepts the following arguments:

- **device** - object, required. Device object returned by `Shelly.getDevice()` or `Virtual.getDevice()`;
- **device property** - string, required;
- **handler** - function;

```js
Shelly.setRepeatedTrigger(device, "humidity < 40", handler);
Shelly.setRepeatedTrigger(tempSensor, "temperature < 20", handler);`
```

### `Shelly.setTrigger(options, handler)`

Unified, options-based form for registering any trigger. The `type` field selects the trigger behavior and the remaining fields supply the parameters that behavior expects. It is functionally equivalent to the dedicated `set*Trigger` helpers above (and the time triggers below) but lets you build the options object dynamically and attach a per-trigger active-time window.

- **options** - object, required. It contains:
  - **type** - string, required. One of: `anyChange`,`once`,`holdOff`,`repeated`,`schedule`,`timer`,`datetime`,`solar`,`manual`.
  - **device** - object. Required for `anyChange`, `once`, `holdOff`, `repeated`. Device object returned by `Shelly.getDevice()` or `Virtual.getDevice()`;
  - **property** - string. Required for device-based types. Property name or comparison expression (e.g. `"motion"`, `"temperature > 25"`);
  - **holdOff** - number. Required for `holdOff`. Number of minutes the condition must remain valid before triggering;
  - **time** - string. Required for `schedule` (`"HH:mm"`) and `datetime` (`"HH:mm"`);
  - **days** - array of numbers, optional. Weekday numbers (1 - 7), used with `schedule`;
  - **date** - string. Required for `datetime`. Date in `"YYYY-MM-DD"` format;
  - **interval** - number. Required for `timer`. Repeat interval in minutes;
  - **event** - string. Required for `solar`. `"sunrise"` or `"sunset"`;
  - **direction** - string. Required for `solar`. `"before"` or `"after"`;
  - **label** - string. Required for `manual`. The manual trigger name;
  - **activeTime** - object, optional. Per-trigger active-time window. When set, the handler runs only if the current time falls inside this window and the per-trigger window overrides any scene-wide active time;
    - **start** - string, required. Time of day in `"HH:mm"` format;
    - **duration** - string, required. How long the window stays active in minutes;
    - **days** - array of numbers, optional. Weekday numbers (1 - 7);
- **handler** - function, required. Runs when the trigger fires;
- Returns: void;

<!-- prettier-ignore-start -->

```js
var motion = Shelly.getDevice("x");
var light = Shelly.getDevice("y");

// Same as Shelly.setTriggerOnce(motion, "motion", handler)
Shelly.setTrigger({
  type: "once",
  device: motion,
  property: "motion"
}, () => { light.on = true; });

// Schedule trigger restricted to a per-trigger active-time window
Shelly.setTrigger({
  type: "schedule",
  time: "07:00",
  days: [1, 2, 3, 4, 5],
  activeTime: { start: "06:00", duration: "180", days: [1, 2, 3, 4, 5] }
}, () => { light.on = true; });
```

<!-- prettier-ignore-end -->

### Utility checks (Triggers)

These functions evaluate conditions and return true or false. They are used inside conditional logic.

### `Shelly.checkDateTime(dateTime)`

Checks whether the current date and time match the specified value.

- **dateTime** - string, required. Exact date and time in the format "YYYY-MM-DD HH:mm";
- Returns: Boolean;

```js
var condition = Shelly.checkDateTime("2026-02-13 10:30");
```

### `Shelly.checkSchedule(time, days)`

Checks whether the current time matches a scheduled time on specific weekdays.

- **time** - string, required. Time of day in "HH:mm" format;
  - Example: "09:30";
- **days** - array of numbers, optional. Weekday numbers (1 - 7);
- Returns: Boolean;

```js
var condition = Shelly.checkSchedule("10:00", [5, 6, 7]);
```

### `Shelly.checkTimer(minutes)`

Checks whether a timer has expired or is currently active.

- **minutes** - int, required. Repeat interval in minutes;
- Returns: Boolean;

```js
var condition = Shelly.checkTimer(15);
```

### `Shelly.checkSolarCondition(args)`

Evaluates solar‑related conditions such as sunrise, sunset or solar offsets.

- **args** - object, required. It contains:
  - **event** - string, required - "sunrise" or "sunset";
  - **direction** - string, required - "before" or "after";
  - **time** - string, required - offset from the solar event;
    - Format: "HH:mm";
    - Example: "00:30" (30 minutes);
- Returns: Boolean;

<!-- prettier-ignore-start -->

```js
var condition = Shelly.checkSolarCondition({
  event: "sunset",
  direction: "after",
  time: "00:30"
});
```

<!-- prettier-ignore-end -->

### `Shelly.checkActiveTime(args)`

The method returns true if the current time matches the specified time.

- **args** - object, required. It contains:
  - **start** - string, required. Time of day in "HH:mm" format;
    - Example: "22:00";
  - **duration** - string, required. Specifies for how long the active time is valid;
    - Examle: "400";
  - **days** - array of numbers, optional. List of weekdays when the active time applies.
    - Values: 1 - 7 (1 = Monday, .., 7 = Sunday)

<!-- prettier-ignore-start -->

```js
var condition = Shelly.checkActiveTime({
  start: "22:00",
  duration: "400",
  days: [1, 2, 3, 4, 5, 6, 7]
});
```

<!-- prettier-ignore-end -->

### `Shelly.getTime()`

Returns the current date and time in the user's configured timezone. Use it inside a handler when you need numeric date/time fields for custom comparisons that `checkSchedule`, `checkDateTime` or `checkActiveTime` do not cover (for example, comparing the current hour against a parameter or branching on the day of week).

- Returns: object with the following fields:
  - **hour** - number, 0 - 23;
  - **minute** - number, 0 - 59;
  - **second** - number, 0 - 59;
  - **year** - number, four-digit year;
  - **month** - number, 1 - 12;
  - **day** - number, day of month 1 - 31;
  - **weekday** - number, 1 - 7 (1 = Monday, ..., 7 = Sunday);

```js
var door = Shelly.getDevice("x");
var hallwayLight = Shelly.getDevice("y");

Shelly.setTriggerOnce(door, "open", function () {
  var time = Shelly.getTime();
  if (time.hour >= 18 || time.hour < 8) {
    hallwayLight.on = true;
  }
});
```

:::warning
`Shelly.getTime()` returns the time at the moment the handler runs - it does not trigger the script. Use it together with a trigger (device, schedule, timer, etc.) to drive the automation.
:::

### Utility commands (Actions)

These commands perform actions such as logging or sending notifications.

### `Shelly.logActivity(delay?)`

Writes an entry to the activity log.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);
- Returns: void;

```js
Shelly.logActivity(); // no delay
Shelly.logActivity("2s"); // 2 seconds delay
Shelly.logActivity("6m"); // 6 minutes delay
```

### `Shelly.sendAlexaNotification(delay?)`

Sends a notification to Alexa‑enabled devices.

- **delay** - string, optional. Delay before executing;
  - Format: "5s" or "2m";
- Returns: void;

```js
Shelly.sendAlexaNotification(); // no delay
Shelly.sendAlexaNotification("5s"); // 5 seconds delay
Shelly.sendAlexaNotification("1m"); // 1 minute delay
```

### `Shelly.sendPhoneStandardNotification(message, delay?)`

Sends a standard push notification to the user’s phone.

- **message** - string, required. The notification text;
- **delay** - string, optional. Delay before executing;
  - Format: "5s" or "2m";
- Returns: void;

```js
Shelly.sendPhoneStandardNotification("My scene triggered!"); // no delay
Shelly.sendPhoneStandardNotification("My scene triggered!", "5s"); // 5 seconds delay
Shelly.sendPhoneStandardNotification("My scene triggered!", "2m"); // 2 minutes delay
```

### `Shelly.sendPhoneAlertNotification(message, delay?)`

Sends a high‑priority alert notification to the user’s phone.

- **message** - string, required. The alert text;
- **delay** - string, optional. Delay before executing;
  - Format: "5s" or "2m";
- Returns: void;

```js
Shelly.sendPhoneAlertNotification("My scene triggered!"); // no delay
Shelly.sendPhoneAlertNotification("My scene triggered!", "10s"); // 10 seconds delay
Shelly.sendPhoneAlertNotification("My scene triggered!", "1m"); // 1 minute delay
```

### `Shelly.sendEmailNotification(message, delay?)`

Sends an email notification.

- **message** - string, required. The email body text;
- **delay** - string, optional. Delay before executing;
  - Format: "5s" or "2m";
- Returns: void;

```js
Shelly.sendEmailNotification("My scene triggered!"); // no delay
Shelly.sendEmailNotification("My scene triggered!", "20s"); // 20 seconds delay
Shelly.sendEmailNotification("My scene triggered!", "1m"); // 1 minute delay
```

## Instance methods

Instance methods are functions that belong to a specific object. They can only be called after the object has been created. First, you use an object **([Scene](https://docs.sp.infn.dev/appendix/api-reference#scene-1), [Alarm](https://docs.sp.infn.dev/appendix/api-reference#alarm-1), or [Group](https://docs.sp.infn.dev/appendix/api-reference#group-1))** and then call its methods to perform actions.

Instance methods are used when the behavior depends on a particular object. For example, enabling a specific scene, toggling a specific alarm, or controlling a specific device group. Each object uses its own set of methods, and calling them affects only that object.

## Scene

Commands that control scene behavior.

### `Scene.enable(delay?)`

Enables the scene.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.enable(); // no delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.enable("5s"); // 5 seconds delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.enable("2m"); // 2 minutes delay
```

### `Scene.disable(delay?)`

Disables the scene.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.disable(); // no delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.disable("10s"); // 10 seconds delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.disable("1m"); // 1 minute delay
```

### `Scene.runDo(delay?)`

Executes the scene’s action block.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var everyDayExtractorHood = Shelly.getScene("x");
var stove = Shelly.getDevice("y");

Shelly.setTriggerOnce(stove, "on", () => everyDayExtractorHood.runDo()); // no delay
```

```js
var everyDayExtractorHood = Shelly.getScene("x");
var stove = Shelly.getDevice("y");

Shelly.setTriggerOnce(stove, "on", () => everyDayExtractorHood.runDo("5s")); // 5 seconds delay
```

```js
var everyDayExtractorHood = Shelly.getScene("x");
var stove = Shelly.getDevice("y");

Shelly.setTriggerOnce(stove, "on", () => everyDayExtractorHood.runDo("1m")); // 1 minute delay
```

### `Scene.toggle(delay?)`

Toggles the scene between enabled and disabled.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.toggle(); // no delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.toggle("10s"); // 10 seconds delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.toggle("2m"); // 2 minutes delay
```

### `Scene.trigger(delay?)`

Manually triggers the scene as if its conditions were fulfilled.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.trigger(); // no delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.trigger("8s"); // 8 seconds delay
```

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

weekendCoffeeRoutine.trigger("3m"); // 3 minutes delay
```

### `Scene.isFulfilled()`

Returns true if the scene’s trigger conditions are currently met.

```js
var weekendCoffeeRoutine = Shelly.getScene("x");

var condition = weekendCoffeeRoutine.isFulfilled();
```

## Alarm

### `Alarm.enable(delay?)`

Enables the alarm.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var alarm = Shelly.getAlarm("x");

alarm.enable(); // no delay
```

```js
var alarm = Shelly.getAlarm("x");

alarm.enable("10s"); // 10 seconds delay
```

```js
var alarm = Shelly.getAlarm("x");

alarm.enable("1m"); // 1 minute delay
```

### `Alarm.disable(delay?)`

Disables the alarm.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var alarm = Shelly.getAlarm("x");

alarm.disable(); // no delay
```

```js
var alarm = Shelly.getAlarm("x");

alarm.disable("15s"); // 15 seconds delay
```

```js
var alarm = Shelly.getAlarm("x");

alarm.disable("3m"); // 3 minutes delay
```

### `Alarm.toggle(delay?)`

Toggles the alarm state.

- **delay** - string, optional. Delay before executing the action;
  - Format: "5s" (seconds) or "2m" (minutes);

```js
var alarm = Shelly.getAlarm("x");

alarm.toggle(); // no delay
```

```js
var alarm = Shelly.getAlarm("x");

alarm.toggle("10s"); // 10 seconds delay
```

```js
var alarm = Shelly.getAlarm("x");

alarm.toggle("2m"); // 2 minutes delay
```

### `Alarm.isFulfilled()`

Returns true if the alarm’s trigger conditions are met.

```js
var alarm = Shelly.getAlarm("x");

var condition = alarm.isFulfilled();
```

## Device Group

Commands available for groups of devices.

### `Group.turnOn()`

Turns on all devices in the group.

```js
var lights = Shelly.getGroup(xxx);

lights.turnOn();
```

### `Group.turnOff()`

Turns off all devices in the group.

```js
var lights = Shelly.getGroup(xxx);

lights.turnOff();
```

### `Group.openRoller()`

Opens all roller devices in the group.

```js
var relayRoller = Shelly.getGroup(xxx);

relayRoller.openRoller();
```

### `Group.closeRoller()`

Closes all roller devices in the group.

```js
var relayRoller = Shelly.getGroup(xxx);

relayRoller.closeRoller();
```

### `Group.stopRoller()`

Stops all roller devices in the group.

```js
var relayRoller = Shelly.getGroup(xxx);

relayRoller.stopRoller();
```

### `Group.setPositionRoller(position)`

Sets the roller position for all devices in the group.

- **position** - number, required;

```js
var relayRoller = Shelly.getGroup(xxx);

relayRoller.setPositionRoller(60);
```

## Time Triggers

Time‑based triggers allow scenes to run automatically at specific moments or intervals. They make it possible to schedule actions, create repeating timers, execute one‑time events or react to sunrise and sunset conditions.

### `setTimerTrigger(args)`

Repeats the action every N minutes. The trigger accepts the following arguments:

- **minutes** - number, required. Sets a repeating timer that runs every N minutes;
- **handler** - function;

<!-- prettier-ignore-start -->

```js
var kitchenLight = Shelly.getDevice("x");

Shelly.setTimerTrigger(60, () => kitchenLight.on = false); // turn off after 60 minutes
```

<!-- prettier-ignore-end -->

### `setScheduleTrigger(args)`

Weekly schedule based on time and selected weekdays. The trigger accepts the following arguments:

- **time** - string, required. Time of day in "HH:mm" format;
  - Example: "09:30";
- **days** - array of numbers, optional. Weekday numbers (1 - 7);
- **handler** - function;

<!-- prettier-ignore-start -->

```js
var coffee = Shelly.getDevice("x");

Shelly.setScheduleTrigger("07:00", [1, 2, 3, 4, 5], () => coffee.on = true);
```

<!-- prettier-ignore-end -->

### `setDateTimeTrigger(args)`

One‑time trigger at a specific date and time. The trigger accepts the following arguments:

- **date** - string, required. Date in "YYYY-MM-DD" format;
  - Example: "2026-10-20";
- **time** - string, required. Time of day in "HH:mm" format;
  - Example: "09:30";
- **handler** - function;

<!-- prettier-ignore-start -->

```js
var light = Shelly.getDevice("x");

Shelly.setDateTimeTrigger("2026-10-20", "22:30", () => light.on = false);
```

<!-- prettier-ignore-end -->

### `setSolarTrigger(args)`

Triggers based on sunrise or sunset conditions. The trigger accepts the following arguments:

- **event** - string, required. The event is **sunrise** or **sunset**;
- **direction** - string, required. The direction is **before** or **after**;
- **time** - string, required. Time of day in "HH:mm" format;
  - Example: "09:30";
- **handler** - function;

<!-- prettier-ignore-start -->

```js
var blind = Shelly.getDevice("x");

Shelly.setSolarTrigger({ event: "sunrise", direction: "before", time: "06:35" }, () => blind.open = true);
```

<!-- prettier-ignore-end -->

### `setActiveTime(args)`

Sets a time window when a script is allowed to run. Outside the window, the script wont't execute. The trigger accepts the following arguments:

- **start** - string, required. Time of day in "HH:mm" format;
- **duration** - string, required. How long will it be active;
- **days** - array of numbers, optional. Weekday numbers (1 - 7);

<!-- prettier-ignore-start -->

```js
var everyDayExtractorHood = Shelly.getScene("x");
var stove = Shelly.getDevice("y");

Shelly.setActiveTime({ start: "10:00", duration: "600", days: [1, 2, 3, 4, 5] })

Shelly.setTriggerOnce(stove, "on", () => everyDayExtractorHood.runDo());
```

<!-- prettier-ignore-end -->

## Virtual devices

### `Virtual.getDevice(id)`

Retrieves a virtual device object by its virtual component group ID.

- **id** - string, required - the virtual component group ID;
  - Example: "deviceId_200";
- Returns: Virtual device object;

:::note
**Virtual** is used only when the device is virtual.
:::

```js
var homeaway = Virtual.getDevice("x_200"); // virtual device
var ac = Shelly.getDevice("y");

Shelly.setTriggerOnce(homeaway, "atHome == true", () => (ac.on = true));
```

## Global variables

Global variables allow scripts to store and share values across executions.
They persist between runs and are accessed through the **global** object.

### `Global.Name`

**Reading a global variable** - Retrieves the current value of a global variable.

```js
global.counter;
```

If the variable does not exist, the result is undefined.

**Setting a global variable** - Assigns a new value to an existing global variable.

```js
global.counter = 9;
```

**Creating a new global variable** - A new variable is created automatically when assigned for the first time.

```js
global.myvariable = 10;
```

:::note
**There is no separate create function**

Assignment creates or updates the variable.
:::

Global variables are shared across all scenes. Values can be numbers, strings or booleans. Global variables are used for counters, state tracking, timers or cross‑script communication.

## Troubleshooting

This **[page](https://docs.sp.infn.dev/appendix/troubleshooting)** provides information about possible errors that a function can return.
