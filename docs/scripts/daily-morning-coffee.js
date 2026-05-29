var coffee = Shelly.getDevice("x");
var motionSensor = Shelly.getDevice("y");

function turnOnCoffee() {
    if (motionSensor.motion) {
        Shelly.sendPhoneStandardNotification("Coffee machine is ON");
        coffee.o1On = {
            value: true,
            timeout: "10m"
        };
    }
}

Shelly.setScheduleTrigger("10:00", [6, 7], turnOnCoffee);
Shelly.setScheduleTrigger("7:00", [1, 2, 3, 4, 5], turnOnCoffee);
