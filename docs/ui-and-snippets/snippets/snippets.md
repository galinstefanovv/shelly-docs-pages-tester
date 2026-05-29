---
sidebar_position: 2
---

# Snippets

Snippets are predefined script elements you can quickly insert to speed up development. They provide ready‑made structures such as device references, conditions and actions, so you don’t have to write them manually. 

Snippets are added through the **Snippets** button in the Script Editor.

## Components

The Snippets menu includes elements such as **Device**, **Nested Scene**, **Alarm**, **Group**, **Trigger**, **Action**, **Active Time** and **Global Variable**. Each snippet inserts a code block based on the data you select in the dialog.

<img src="/img/ui-and-snippets/snippets-panel.png" alt="Snippets panel" width="400" />

## Devices

The **Device** snippet lets you add a device reference to your script.  
You select:

- **Room** - To filter devices visually;  
- **Device** - The specific device you want to use; 

The system automatically retrieves:

- The **device ID**;
- The **device type**;

The code preview shows exactly how the device will appear in your script.

<img src="/img/script-editor/script-page-add-device.png" alt="Script page add device" width="600" />

## Nested scenes

You choose an existing scene, and the system retrieves:

- The **scene ID**;
- The **scene name**;

The snippet inserts a reference that allows your script to run and control that scene.

<img src="/img/script-editor/script-page-add-nested-scene.png" alt="Script page add nested scene" width="600" />

## Alarms

You select an alarm from the list.  
The system retrieves:

- The **alarm ID**;
- The **alarm name**;

The snippet inserts a reference that lets your script enable, disable or toggle the alarm.

<img src="/img/script-editor/script-page-add-alarm.png" alt="Script page add alarm" width="600" />

## Device groups

You select a device group such as lights, relays or plugs.  
The system retrieves:

- The **group ID**;
- The **group type**;

The snippet inserts a reference that allows you to control all devices in the group.

<img src="/img/script-editor/script-page-add-group.png" alt="Script page add group" width="600" />

## Triggers

You select a device, choose a property, set a comparison operator and enter a value.  
The system retrieves:

- The **trigger type**;
- The **device name**;
- The **property name**;
- The **property's parameters**;
- The **handler name** (there is no name if the handler is an anonymous function);

Available trigger types:

- DeviceTrigger On Any Change;  
- DeviceTrigger Once With Value;  
- DeviceTrigger Once With Hold Off;  
- Repeated DeviceTrigger;  

<img src="/img/triggers-and-conditions/add-trigger.png" alt="Add trigger in the editor" width="600" />

## Time Triggers

Time triggers define when a script should run based on time rules.  
The system retrieves:

- **days**;
- **time values**;
- **solar event parameters**;
- **timer intervals**;
- The **handler name** (there is no name if the handler is an anonymous function);

Available time triggers:

- Schedule Trigger;
- Timer Trigger;  
- DateTime Trigger;  

<img src="/img/triggers-and-conditions/script-page-add-time-trigger.png" alt="Script page add time trigger" width="600" />

## Solar condition

You choose sunrise or sunset, select before/after and set an offset.  
The system retrieves:

- The **solar event type**;
- The **offset value**;
- The **comparison mode**;

<img src="/img/triggers-and-conditions/script-page-add-solar-condition.png" alt="Script page add solar condition" width="600" />

## Active time

You select the days and the time interval during which the script is allowed to run.  
The system retrieves:

- **start time**;
- **end time**;
- **active weekdays**;

<img src="/img/script-creation/time-interval.png" alt="Active time" width="600" />

## Global variables

You can create, read or update a global variable.  
The system retrieves:

- The **variable name**;
- The **value**;

<img src="/img/global-variables/global-variable-get.png" alt="Get the global variable" width="600" />
<img src="/img/global-variables/global-variable-set.png" alt="Set the global variable" width="600" />
<img src="/img/global-variables/global-variable-new.png" alt="Create a new global variable" width="600" />

## Actions

### Device action

You choose a device property (e.g., `o1On`) and set a value, delay or timeout.  
The system retrieves:

- The **device name**;
- The **property name**;
- The **action parameters**;

:::tip
Only relay devices support timeout.  
Other device types ignore this field.
:::

<img src="/img/actions/script-add-device-action.png" alt="Script page add device action" width="600" />

### Notification action

You choose a notification type.  
The system retrieves:

- The **notification type**;
- The **message**;
- The **delay** (in seconds or minutes). Delay is optional;

<img src="/img/actions/script-page-add-notification-action.png" alt="Script page add notification action" width="600" />

### Scene action

You choose a scene and select an operation (enable, disable, run).  
The system retrieves:

- The **scene name**;
- The **action type**;

<img src="/img/actions/script-page-add-scene-action.png" alt="Script page add scene action" width="600" />

### Device group action

You choose a device group and apply a command to all devices inside it.  
The system retrieves:

- The **group name**;
- The **action parameters**;

<img src="/img/actions/script-add-group-action.png" alt="Script page add group action" width="600" />

### Alarm action

You choose an alarm and define how the script should control it.  
The system retrieves:

- The **alarm name**;
- The **action type**;

<img src="/img/actions/script-add-alarm-action.png" alt="Script page add alarm action" width="600" />
