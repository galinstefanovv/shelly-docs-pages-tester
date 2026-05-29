var light1 = Shelly.getDevice("x");
var light2 = Shelly.getDevice("y");
var light3 = Shelly.getDevice("z");
var light4 = Shelly.getDevice("m");
var motionSensor = Shelly.getDevice("q");

function lightsToggle() {
    if (motionSensor.noMotion && motionSensor.illuminance < 30) {
        light1.on = { value: true, delay: "0s" };
        light2.on = { value: true, delay: "1s" };
        light3.on = { value: true, delay: "2s" };
        light4.on = { value: true, delay: "3s" };

        light1.off = { value: true, delay: "4s" };
        light2.off = { value: true, delay: "5s" };
        light3.off = { value: true, delay: "6s" };
        light4.off = { value: true, delay: "7s" };
    }
};

Shelly.setScheduleTrigger("21:00", [1, 2, 3, 4, 5], lightsToggle);