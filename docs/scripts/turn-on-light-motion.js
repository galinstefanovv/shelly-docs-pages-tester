var motionSensor = Shelly.getDevice("x");
var light = Shelly.getDevice("y");

Shelly.setTriggerOnAnyChange(motionSensor, "illuminance < 50", () => light.on = true);