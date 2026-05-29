var lightSensor = Shelly.getDevice("x");

Shelly.setTriggerOnAnyChange(lightSensor, "illuminance < 50", () => {
    Shelly.sendPhoneStandardNotification("Low light detected: " + lightSensor.illuminance + " lx");
});