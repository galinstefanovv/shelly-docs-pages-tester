var emeter = Shelly.getDevice("x");

Shelly.setRepeatedTrigger(emeter, "powerConsumption > 3000", () => {
    Shelly.sendPhoneAlertNotification("Power overload detected");
});