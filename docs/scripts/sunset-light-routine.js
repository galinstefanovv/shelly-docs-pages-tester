var rgbLight = Shelly.getDevice("x");

function rgbLightBrightness() {
    if (Shelly.checkSolarCondition({ event: "sunset", direction: "after", time: "00:30"})) {
        rgbLight.brightness = 100.0;
        rgbLight.brightness = { value: 50.0, delay: "210m" };
        rgbLight.off = { value: true, delay: "360m"};
    }
}

Shelly.setTriggerOnce(rgbLight, "brightness < 30", rgbLightBrightness);