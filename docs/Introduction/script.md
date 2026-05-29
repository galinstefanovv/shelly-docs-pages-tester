---
sidebar_position: 3
id: cloud-script
title: What is a Cloud Script?
sidebar_label: Cloud Script
---

A **[Cloud Script](/Introduction/script#example)** is a custom automation program executing user-defined logic. Scripts enable advanced, stateful automations extending beyond standard configurations, allowing complex logic, internal state maintenance and event reactions.

To understand the difference between Device Script and Cloud Script, check **[here](https://docs.sp.infn.dev/appendix/device-scripts)**.

**Cloud Script** executes in the cloud, does not consume device resources and provides a global automation layer across the entire user profile. It extends the Scene capabilities and allows you to define dynamic behaviors, evaluate runtime conditions, manage device states and orchestrate complex workflows across multiple devices.

:::important
Cloud Script can execute commands only on devices that are currently **online**.
:::

## Use cases and key features

1. **Cloud execution -** Script run in the cloud and do not consume device resources. They operate only with devices that are currently online.
2. **Access to all devices -** They can react to events from any device, read device data (sensors, states, power) and send commands to any device in the user profile.
3. **Group control -** Script can send commands to device groups, enabling synchronized actions (e.g., turning off all lights).
4. **Global context awareness -** Scripts can use cloud context data such as sunrise/sunset times, weather information and user profile data (device states, rooms, groups).
5. **Global variables -** Scripts can share data using global variables, enabling communication, synchronization and shared state between scripts.
6. **Cross-device event handling -** Scripts can react to events from multiple devices and evaluate complex multi-device conditions, enabling whole-home automation logic.

Script can evaluate complex mathematical formulas using values chosen by the user or retrieved from any device. This allows implementing advanced conditions such as calculated thresholds, dynamic limits, proportional logic or multi‑sensor computations that are not possible with standard Scenes.

## Create a new Script

After logging into <a href="https://control.shelly.cloud/" target="_blank"><strong>Shelly Cloud</strong></a> or <a href="https://www.shelly.com/pages/shelly-app" target="_blank"><strong>Shelly Smart Control App</strong></a>, use the **JS** button to start the process.

You can start from either a predefined **template** or a fully **custom** configuration.

- **_Template_** - Provides a list with predefined automation logic covering common use cases. The templates include preconfigured triggers and actions, making them suitable for quick setup or as a starting point for further customization.

- **_Custom_** - Opens a blank script page in the editor where you manually define all triggers and actions. This option gives the user the freedom to create the automation they want without having predefined templates.

:::note
When scripting a scene with the **_JS Editor_**, whether starting from a **[Template](https://docs.sp.infn.dev/script-creation/template-scene/)** or a **[Custom Scene](https://docs.sp.infn.dev/script-creation/custom-script-scene)**, you can use **[Script elements](https://docs.sp.infn.dev/category/script-elements)** to quickly add ready-to-use components to your script.
:::

---

## Example

This script will automatically turn the living room light OFF when the bedroom light turns ON.

```js title="light-trigger.js" file=../scripts/light-trigger.js

```

View another example **[here](https://docs.sp.infn.dev/script-structure/overview#example)**.
