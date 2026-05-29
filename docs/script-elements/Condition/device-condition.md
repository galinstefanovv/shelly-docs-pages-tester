---
sidebar_position: 1
---

# Device Conditions

A device condition is a rule based on a device’s property (sensor value/state) that must be met to trigger or allow an automation to run.

:::warning
Conditions can be used only inside handlers.
:::

### Button

```js
var button = Shelly.getDevice("x");

function lowBattery() {
    if(button.battery == 30) {
        Shelly.sendEmailNotification("Low battery"); 
    }
}

Shelly.setTriggerOnce(button, "o1PressedOnce", lowBattery);
```

### Emeter

```js
var powerMeter = Shelly.getDevice("x");
var boiler = Shelly.getDevice("y");

function highPowerUsage() {
    if (powerMeter.totalPower >= 1000) {
        boiler.off = true
    }
}

Shelly.setRepeatedTrigger(boiler, "on", highPowerUsage);
```

### Light

```js
var lights = Shelly.getGroup(xxx);
var colorLight = Shelly.getDevice("x");
var doorSensor = Shelly.getDevice("y");

function turnOffLights() {
    if(colorLight.brightness >= 90) {
        lights.turnOff();
    }
}

Shelly.setTriggerOnce(doorSensor, "open", turnOffLights);
```

### Relay

```js
var relay = Shelly.getDevice("x");

function turnOff() {
    if(relay.o1PowerConsumption == 300) {
        relay.o1On = false;
    }
}

Shelly.setTriggerOnce(relay, "o1On", turnOff);
```

### Sensor

```js
var motionSensor = Shelly.getDevice("x");
var light = Shelly.getDevice("y");

function increaseBrightness() {
    if (light.brightness < 40) {
        light.brightness = 70;
    }
}

Shelly.setTriggerOnce(motionSensor, "illuminance == 60", increaseBrightness);
```

## Device properties

Read more about device properties **[here](https://docs.sp.infn.dev/script-elements/device#device-properties)**.

## Property as a Trigger

See this **[page](https://docs.sp.infn.dev/triggers/trigger-types)**.
