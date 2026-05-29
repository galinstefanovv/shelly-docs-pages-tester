var motionSensor = Shelly.getDevice("x");
var tempSensor = Shelly.getDevice("y");
var window = Shelly.getDevice("z");
var lights = Shelly.getDevice("m");
var ac = Shelly.getDevice("n");
var coffeeMachine = Shelly.getDevice("f");
var tv = Shelly.getDevice("t");


var nightTime = { start: "22:00", duration: "480", days: [1,2,3,4,5,6,7] };

function turnOnLightOnMotion() {
if (Shelly.checkActiveTime(nightTime)) {
lights.on = true;
}
}

function windowStatus() {
if (Shelly.checkActiveTime(nightTime)) {
Shelly.sendPhoneAlertNotification("Window opened at night");
}
}

function morningRoutine() {
coffeeMachine.on = true;
ac.off = true;
}

function nightMode() {
ac.off = true;
lights.off = true;
tv.off = true;
}

Shelly.setTriggerOnce(motionSensor, "motion", turnOnLightOnMotion);
Shelly.setTriggerOnce(tempSensor, "temperature > 27", () => ac.on = true);
Shelly.setTriggerOnce(tempSensor, "temperature < 20", () => ac.on = false);
Shelly.setTriggerWithHoldOff(window, "open", 5, windowStatus);
Shelly.setScheduleTrigger("07:00", [1, 2, 3, 4, 5], morningRoutine);
Shelly.setScheduleTrigger("22:00", [1, 2, 3, 4, 5, 6, 7], nightMode);
