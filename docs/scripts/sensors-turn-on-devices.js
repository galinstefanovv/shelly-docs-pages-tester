var motionSensor = Shelly.getDevice("x");
var tempSensor = Shelly.getDevice("y");
var lights = Shelly.getDevice("z");
var ac = Shelly.getDevice("m");

function turnOnLight() {
    lights.on = true;
}
function turnOnAC() {
    ac.on = true;
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLight);
Shelly.setRepeatedTrigger(tempSensor, "temperature > 27", turnOnAC);