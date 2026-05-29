var mainDoor = Shelly.getDevice("x");

Shelly.setTriggerOnce(mainDoor, "open", () => {
  Shelly.sendPhoneAlertNotification("Door opened");
});