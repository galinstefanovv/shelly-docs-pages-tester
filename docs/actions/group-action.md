---
sidebar_position: 5
---

# Device Group Action

Device Group Actions target an entire group. Group is a collection of devices of the same type (relays, lights, plugs, dimmers, covers, etc.). Instead of controlling each device individually, a Device group action applies a single command to all members at once, ensuring synchronized and consistent behavior.
They are essential for building clean, scalable automations where multiple devices must act together.

## How to use them?

You can select a group and apply an action such as turning all relays **ON** or **OFF**.
This allows scenes to manage entire device clusters with one instruction.

```js
var relays = Shelly.getGroup(xxx);

relays.turnOn();
```

```js
var relays = Shelly.getGroup(xxx);

relays.turnOff();
```

## Group types

- **Light**
  - `on`
  - `off`
  - `brightness`
- **Relay**
  - `turnOn`
  - `turnOff`
- **Roller**
  - `turnOn`
  - `turnOff`
  - `openRoller`
  - `closeRoller`
  - `stopRoller`
  - `setPositionRoller`

## Available Device Group Actions

### `turnOn()`

- Every device in the group receives an on command.
- Devices that are already on remain unchanged.
- Ensures synchronized activation.

### `turnOff()`

- Every device receives an off command.
- Devices already off remain unchanged.
- Guarantees consistent shutdown.

### `brightness()`

- Sets the brightness percentage for all lights in the group.
- Devices stay ON and only adjust intensity.

### `openRoller()`

- Sends an open command to every roller.
- Rollers already fully open remain unchanged.

### `closeRoller()`

- Sends a close command to every roller.
- Rollers already closed stay as they are.

### `stopRoller()`

- Stops all rollers immediately.
- Useful for partial positioning.

### `setPositionRoller()`

- Applies the same target position to every roller.
- Rollers adjust individually but end aligned.
- Ideal for precise control.

For creation through the UI, see this **[page](https://docs.sp.infn.dev/ui-and-snippets/script-editor/snippets/#device-group-action)**.
