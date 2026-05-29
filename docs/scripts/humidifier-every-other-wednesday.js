var humidifier = Shelly.getDevice("x");

global.everyOtherWednesday = 0;

function turnOnHumidifier() {
    if (Shelly.checkSchedule("13:40", [3])) {
        global.everyOtherWednesday++;

        if (global.everyOtherWednesday == 2) {
            humidifier.on = true;
            global.everyOtherWednesday = 0;
        }
    }
}

Shelly.setTriggerOnce(humidifier, "off", turnOnHumidifier);