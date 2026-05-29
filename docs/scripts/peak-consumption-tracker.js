var officeClima = Shelly.getDevice("x");
var washingMachine = Shelly.getDevice("y");
var hydrophorePump = Shelly.getDevice("z");
var clima = Shelly.getDevice("c");
var bluetoothButton = Shelly.getDevice("v");
var holdOff = 1;

function peaksIncrement() {
    if (global.consumptionPeaks === undefined) {
        global.consumptionPeaks = 0;
    }

    global.consumptionPeaks++;

    Shelly.sendPhoneStandardNotification(
        "Peaks incremented to " + global.consumptionPeaks,
        "0"
    );
}

Shelly.setTriggerWithHoldOff(officeClima, "o1PowerConsumption > 1500", holdOff, peaksIncrement);
Shelly.setTriggerWithHoldOff(washingMachine, "o1PowerConsumption > 1500", holdOff, peaksIncrement);
Shelly.setTriggerWithHoldOff(hydrophorePump, "o1PowerConsumption > 1500", holdOff, peaksIncrement);
Shelly.setTriggerWithHoldOff(clima, "o1PowerConsumption > 1500", holdOff, peaksIncrement);

function getPeaksValue() {
    
    if (global.consumptionPeaks === undefined) {
        Shelly.sendPhoneStandardNotification("Value is 0", "0");
    } else {
        Shelly.sendPhoneStandardNotification(
            "Value is " + global.consumptionPeaks,
            "0"
        );
    }
}

Shelly.setTriggerOnce(bluetoothButton, "o1PressedTwice", getPeaksValue);

function clearPeaksCount() {
    var value;

    if (global.consumptionPeaks === undefined) {
        value = 0;
    } else {
        value = global.consumptionPeaks;
    }

    Shelly.sendEmailNotification(
        "Peaks value will be cleared. Value before reset: " + value,
        "0"
    );

    global.consumptionPeaks = 0;
}

Shelly.setScheduleTrigger("23:59", [1, 2, 3, 4, 5, 6, 7], clearPeaksCount);