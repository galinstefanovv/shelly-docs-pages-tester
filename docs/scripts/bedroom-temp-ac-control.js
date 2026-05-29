const params = {
  minTemp: 22.0,
  maxTemp: 25.0,
};

var ac = Shelly.getDevice("x");
var tempSensor = Shelly.getDevice("y");

Shelly.setRepeatedTrigger(tempSensor, ("temperature < " + params.minTemp), () => ac.on = true);
Shelly.setRepeatedTrigger(tempSensor, ("temperature > " + params.maxTemp), () => ac.off = true);