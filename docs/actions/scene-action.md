---
sidebar_position: 4
---

# Scene Action

Scene Actions allow one Scene to control another. Instead of interacting with devices directly, these actions manipulate the state, execution or behavior of a Scene itself. They are essential for building modular, reusable and maintainable automations.

They let you:

- Start a Scene manually.
- Enable or disable a Scene dynamically.
- Build complex automation without duplicating logic.

Scene Actions turn your automation system into a flexible, programmable environment where Scenes can coordinate with each other.

## Usage

When a scene reference is stored in a variable, it can be accessed and controlled directly from other scripts. This allows to enable, disable or modify the scene.

```js
var lightsOff = Shelly.getScene("x");

lightsOff.enable();
```

In this case, **lightsOff** becomes a direct reference to a scene.

## Available Scene Actions

Each action affects the Scene in a different way. Below is a complete explanation of what each one does and when to use it.

### Enable

- **Purpose** - `enable()` allows the Scene to run normally when its triggers occur. If a trigger condition is met, the Scene will execute.
- **Use cases:**
  - Enabling security automations when leaving home.
  - Activating a watering routine at the start of the season.
  - Re-enabling a morning routine after vacation mode is turned off.

```js
var lightsOff = Shelly.getScene("x");

lightsOff.enable();
```

### Disable

- **Purpose** - `disable()` prevents the Scene from running, even if its triggers occur. It will not execute until re-enabled.
- **Use cases:**
  - Disabling heating/cooling routines when windows are open.
  - Pausing a morning alarm scene during weekends or holidays.
  - Disabling a motion-triggered light scene during a movie to avoid interruptions.

### Toggle

- **Purpose** - `toggle()` switches the Scene between enabled and disabled states.
    - If the Scene is **enabled** → it becomes **disabled**.
    - If the Scene is **disabled** → it becomes **enabled**.
- **Use cases:**
  - Toggle a device group of scenes.
  - Switching night mode on or off with a single button press.
  - Switching between a home and away automation profile.

### Run Do

- **Purpose** - `runDo()` ignores triggers entirely and directly runs the action block.
- **Use case:**
  - Reusing the same action logic from multiple Scenes.

:::note
This is different from **trigger()**:

- **runDo()** directly runs the action block.
- **trigger()** simulates the trigger event.
:::

### Trigger

- **Purpose** - `trigger()` fires the Scene as if its trigger conditions were met. It executes the Scene exactly as if the trigger happened naturally.
- **Use case:**
  - Triggering a Scene manually from a button press or another script.

```js
var lightsOff = Shelly.getScene("x");
var bluetoothButton = Shelly.getDevice("y");

function triggerLightsOff() {
    lightsOff.trigger();
}

Shelly.setTriggerOnce(bluetoothButton, "o1PressedLong", triggerLightsOff);
```

For creation through the UI, see this **[page](https://docs.sp.infn.dev/ui-and-snippets/script-editor/snippets/#scene-action)**.
