var motionAlarm = Shelly.getAlarm("x");
var motionSensor = Shelly.getDevice("y");

Shelly.setTriggerOnce(motionSensor, "motion", () => {
    if (motionSensor.illuminance < 5.0) {
        motionAlarm.enable();
    }
});