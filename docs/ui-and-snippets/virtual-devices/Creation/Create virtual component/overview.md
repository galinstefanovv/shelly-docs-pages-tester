---
sidebar_position: 1
---

# Creating a new virtual component

A Virtual component is a device component that has no physical representation on the Shelly device, but can be created in the device’s interface and then updated by a script running on that device.

**What it is used for**

- Store or transfer data between scripts or script runs (e.g., computed values, states).
- Expose script logic as a usable control/state on the device’s home page/app (so automations can see it).

**Types you can create**:

- Button.
- Number.
- Boolean.
- Text.
- Enum (depending on device).

At the bottom of the Components section, you can press **Create virtual component**.
Selecting this option opens a dedicated creation menu, where you choose the component type and configure its properties.
Virtual components created here become part of the device’s structure and behave like real controls. They can be used in:

- Scenes.
- Groups.
- Automations.
- Dashboards.

<img src="/img/virtual-devices/virtual-components.png" alt="Virtual components" width="auto" height="500" />

<!-- ![Virtual components](images/virtual-components.png) -->
