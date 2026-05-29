---
sidebar_position: 1
---

# Creating a new group

A Group of virtual components is a named container that bundles multiple virtual components (button/number/boolean/text/enum) on the same Shelly device into one organized set.

### What it is used for?

- **Organization & UI** - Only groups (and the components inside them) are shown on the device’s home page; components outside a group may not be visualized there.
- **One place for related logic** - Keep all script-driven values/controls for a feature together (e.g., “Thermostat”, “Security”, “Energy”).
- **Optional “extract as device”** - You can expose the whole group as a device for easier control in the app.

Once virtual components have been created for a device, they can be organized into Groups.

In the Groups tab, you see a list of all existing groups associated with the selected device. Each group displays:

- The group name.
- The virtual component assigned to that group.
- The current value or state of that component.

This provides a clear organized overview of all virtual components that are part of the device’s UI.

<img src="/img/virtual-devices/virtual-components-groups.png" alt="Groups of virtual compoents" width="auto" height="500" />
