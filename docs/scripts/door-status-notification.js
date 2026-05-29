var doorSensor = Shelly.getDevice("x");

Shelly.setTriggerOnce(doorSensor, "open", () => {
  Shelly.sendPhoneStandardNotification("Door opened! Tilt changed: current value is " + doorSensor.tilt);
});