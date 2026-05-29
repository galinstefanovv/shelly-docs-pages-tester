var light = Shelly.getDevice("x");

function lowLightNotification() {
    if (light.on && light.brightness < 30) {
        Shelly.sendPhoneStandardNotification("Low light!");
    }
}

Shelly.setTriggerOnce(light, "on", lowLightNotification);
Shelly.setTriggerOnce(light, "brightness < 30", lowLightNotification);