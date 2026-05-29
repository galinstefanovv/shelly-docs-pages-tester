var light = Shelly.getDevice("x"); // Replace "x" with your Device ID

Shelly.setTriggerOnce(light, "on", () => {
    Shelly.sendPhoneStandardNotification("Hello World! The light has been turned on.");
});