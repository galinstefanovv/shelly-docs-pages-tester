var doorSensor = Shelly.getDevice("x");
var light = Shelly.getDevice("y");

global.activityDetected = false;

var eveningWindow = { start: "19:00", duration: "60", days: [1, 2, 3, 4, 5] };

function onDoorOpened() {
    if (Shelly.checkActiveTime(eveningWindow)) {
        global.activityDetected = true;
    }
}

function onLightTurnedOn() {
    if (Shelly.checkActiveTime(eveningWindow)) {
        global.activityDetected = true;
    }
}

function checkAndReset() {
    if (!global.activityDetected) {
        Shelly.sendPhoneAlertNotification("Alert: The door was not opened and the lights were not turned on between 7 PM and 8 PM.");
    }
    global.activityDetected = false;
}

Shelly.setTriggerOnce(doorSensor, "open", onDoorOpened);
Shelly.setTriggerOnce(light, "on", onLightTurnedOn);
Shelly.setScheduleTrigger("20:00", [1, 2, 3, 4, 5], checkAndReset);
