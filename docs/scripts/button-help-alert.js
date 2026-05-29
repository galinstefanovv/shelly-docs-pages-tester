var button = Shelly.getDevice("y");

Shelly.setTriggerOnce(button, "o1PressedTwice", () => {
  Shelly.sendPhoneAlertNotification("Button was double-pressed.");
});