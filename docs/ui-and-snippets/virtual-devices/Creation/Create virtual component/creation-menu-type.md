---
sidebar_position: 2
---

# Creation menu

When you press **Create virtual component** a creation dialog opens. The first step in this dialog is selecting the type of virtual component that will be added to the device.

<!-- ![Creation menu - type](images/creation-menu-types.png) -->

The interface presents a dropdown menu, where you can choose one of the supported component types:

- **Button** - a virtual push‑button that can be used to trigger actions or scenes.
- **Number** - a numeric input field for values such as levels, thresholds or counters.
- **Boolean** - a true/false state, often used to represent toggles or binary conditions.
- **Text** - a text field for storing or displaying string values.
- **Enum** - a predefined list of selectable options, useful for mode selection or multi‑state logic.

After selecting the component type, you proceed to the Settings tab. This section defines the component’s identity and behavior. The available fields depend on the chosen type, but the general structure is consistent across all virtual components.

<!-- ![Creation menu - settings](images/creation-menu-settings.png) -->

For a button virtual component, the following configuration options are available:

- **Name** - A text field that specifies the name of the component.
- **View** - Determines how the component will appear in the UI.
- **Custom Icon URL** - Allows you to assign a custom icon by providing a direct URL to an image. If set, the component will display the chosen icon instead of the default one, making it easier to visually identify in dashboards and device panels.
- **Enable Event Log** - A toggle that controls whether interactions with this virtual component should be recorded in the event log. When enabled, every press or state change will appear in the device’s history, which is useful for debugging or tracking automation behavior.
- **Saving the Component** - Once all settings are configured, you finalize the creation by selecting **Save**. The new virtual component is then added to the device’s Components list and becomes immediately available for use in:
  - **Scenes**.
  - **Groups**.
  - **Automations**.
  - **Dashboards**.

<img src="/img/virtual-devices/creation-menu-types.png" alt="Creation menu - type" width="600" />

<img src="/img/virtual-devices/creation-menu-settings.png" alt="Creation menu - settings" width="600" />
