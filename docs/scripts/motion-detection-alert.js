var motionSensor = Shelly.getDevice("x");

Shelly.setTriggerOnce(motionSensor, "motion", () => {
    Shelly.sendPhoneStandardNotification("Motion detected");
});