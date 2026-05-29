---
sidebar_position: 2
id: scene
title: Scenes in Shelly
sidebar_label: Scene
---

<a href="https://www.shelly.com/" target="_blank"><strong>Shelly</strong></a> offers a wide range of smart devices to suit your specific automation needs - whether you want to control lighting, heating or appliances.

<a href="https://www.shelly.com/pages/shelly-app" target="_blank"><strong>Shelly Smart Control App</strong></a> and <a href="https://control.shelly.cloud/" target="_blank"><strong>Shelly Cloud</strong></a> help you to control your Shelly devices remotely, to easily configure devices, manage their settings individually and create personalized **Scenes** by combining them to trigger certain actions in your home automation.

A Scene in Shelly Smart Control is an automation workflow that executes one or more actions when specific triggers occur and optional conditions are met. Scenes allow you to connect devices, sensors, schedules and logic into a single automated behavior without writing code. They are ideal for creating smart routines, safety rules and multi‑device interactions across your home or workspace.

Scenes run in the Shelly ecosystem and can coordinate multiple devices, even across different rooms or locations, depending on your setup.

## Creating Scenes

Scenes are created in Shelly Cloud or the Shelly Smart Control App using these methods:

**Manual Scene (+):** A visual UI for building scenes by selecting triggers and actions.

**Scene with AI (AI):** Describes desired automation in natural language to generate the scene structure.

**[Scripting (JS):](https://docs.sp.infn.dev/Introduction/script)** A code-based editor for developers requiring full control over logic. Includes [**templates**](https://docs.sp.infn.dev/script-creation/template-scene) and [**snippets**](https://docs.sp.infn.dev/category/script-elements).

## Scene components

A scene in Shelly Smart Control is composed of these core components: **Triggers**, **Actions** and other **Settings** (active time, rooms, details etc.). These elements work together to define when and how automation is executed.

### Triggers

**Triggers** determine when a scene or script begins execution. Their behavior depends on the trigger type.

**Common trigger types include:**

- **Time-based** - They allow scenes to run automatically at specific moments or intervals. They make it possible to schedule actions, create repeating timers and execute one‑time events.

- **Device-based** - Each trigger monitors a device property and determines when the script should run. All triggers require a device object and a property name and some accept comparison operators.

- **Solar-based** - Triggers based on sunrise or sunset conditions. Where the event is **sunrise** or **sunset** and the direction is **before** or **after**.

- **Weather-based** - The triggers start a scene when forecasted weather conditions match the selected criteria. The weather forecast is checked at regular intervals and activates the scene when the chosen condition is expected to occur.

### Actions

Actions define what happens when triggers occur. A scene can execute one or multiple actions in sequence.

**Typical actions include:**

- Turning devices ON or OFF.
- Setting dim levels or color temperature.
- Activating another scene.
- Sending notifications.
- Adjusting thermostats or heating modes.
- Controlling multiple devices simultaneously.

:::tip
A scene can include one or **multiple triggers** and the automation runs only when the specified criteria are met, enabling precise control.

Each scene can execute **one or many actions** in sequence.
:::

### Settings and details

In addition to triggers and actions, each scene includes configuration settings that define how and when it operates within the application.

These settings define how a scene behaves and how it appears in the interface. **Active time** sets the time window during which the scene is allowed to run, while **More Options** provides additional behavior controls that don’t depend on triggers. The **Select room** setting organizes the scene within a specific room and **Details** defines its name and layout so it’s displayed clearly in the UI.

## Other resources

For additional guidance and reference materials about Shelly, devices and How to work with Shelly Smart Control, you can consult the following resources:

<a href="https://kb.shelly.cloud/knowledge-base/" target="_blank"><strong>Shelly Knowledge Base</strong></a> - Official documentation for Shelly devices, firmware, Shelly Smart Control Guides.

_These external resources provide further examples, best practices and reference material to complement this guide and help you implement complex automation scenarios._
