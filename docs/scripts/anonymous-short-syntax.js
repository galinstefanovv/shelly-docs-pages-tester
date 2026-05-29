var motionSensor = Shelly.getDevice("x");
var light = Shelly.getDevice("y");

Shelly.setTriggerOnce(motionSensor, "motion", () => light.on = true);