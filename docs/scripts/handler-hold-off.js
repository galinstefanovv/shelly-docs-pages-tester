var ac = Shelly.getDevice("x");
var tempSensor = Shelly.getDevice("y");

Shelly.setTriggerWithHoldOff(tempSensor, "temperature > 25", 10, () => ac.o1On = true);