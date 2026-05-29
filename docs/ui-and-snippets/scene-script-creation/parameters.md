---
sidebar_position: 4
id: parameters
title: Script parameters
sidebar_label: Script parameters
---

## Create a scene with parameters

The **Parameters section** allows to define the temperature thresholds that control the behavior of the automated heating scene. These values determine when the air conditioner should turn on or off based on the measured room temperature.

**minTemp**

- Defines the minimum temperature threshold.
- When the room temperature drops below this value, the heating will turn on automatically.

**maxTemp**

- Defines the maximum temperature threshold.
- When the room temperature rises above this value, the heating will turn off automatically.

:::note
Using parameters is valid only when the scene is created through a template.
:::

<img src="/img/script-creation/template-scene-parts.png" alt="Template scene - change parameters in UI" width="600" />

## Edit parameters

Once the scene has been created, its parameters can be modified directly from the UI. To edit an existing scene, the user can click the **pencil icon** associated with that scene. This action opens an editing window where all configurable parameters can be adjusted.

<img src="/img/script-structure/edit-parameters.png" alt="Edit scene parameters" width="500" />

After making the changes, the user can save the updated configuration and the scene will immediately operate according to the new settings.

<img src="/img/script-structure/parameters-editor.png" alt="Parameters editor" width="600" />
