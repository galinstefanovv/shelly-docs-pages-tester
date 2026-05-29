---
sidebar_position: 2
id: creation-menu
title: Creation menu - groups
sidebar_label: Creation menu
---

At the bottom of the Groups list, you can select **Create group**. This opens a dialog where the you set the following values:

### Group name

At the top of the dialog, you specifie the group name.
A default name (e.g., group:205) is generated automatically, but it can be replaced with a more descriptive label such as _Lighting Controls_, _Thermostat_ or _Security Panel_.

### Selecting Virtual Components

Below the name field, the dialog displays a list of all available virtual components created for the device.
Each component can be added to the group by selecting it from the list.
Examples shown in the interface include:

- Home/Away (location/boolean).
- myEnum (enum).
- myText (text).
- Test Virtual Button (button).
- myNumber (number).

You may select one or multiple components depending on how you want the group to function. If a needed component is not yet created, the dialog provides a shortcut:

### Create Virtual Component

This opens the component creation workflow without leaving the group dialog.

### Extract Virtual Group as a device

When you enable this optional toggle, the entire group is exposed as a device in Shelly Control. This makes the group easier to access from dashboards, Scenes and the device list, especially when the group represents a functional feature (e.g., a thermostat, a mode selector or a custom control panel).

### Saving the Group

After selecting the components and configuring the options, you complete the process by pressing **Save**.
The new group is then added to the device’s Groups list and becomes visible on the device’s home page layout.

<img src="/img/virtual-devices/create-virtual-group.png" alt="Creation menu - virtual group" width="600" />
