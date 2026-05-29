var livingroomLight = Shelly.getDevice("x");
var bedroomLight = Shelly.getDevice("y");

Shelly.setTriggerOnce(bedroomLight, "on", () => livingroomLight.on = false);