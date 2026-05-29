var lights = Shelly.getDevice("x");
var tempSensor = Shelly.getDevice("y");
var motionSensor = Shelly.getDevice("z");
var ac = Shelly.getDevice("m");
var window = Shelly.getDevice("n");

function turnOnAc() {
    if (window.closed) {
        ac.on = true;
    } else {
        Shelly.sendPhoneStandardNotification("Cannot turn on AC while window is open.");
    }
}

Shelly.setTriggerOnce(tempSensor, "temperature > 27", turnOnAc);
Shelly.setTriggerOnce(motionSensor, "motion", () => lights.on = true);