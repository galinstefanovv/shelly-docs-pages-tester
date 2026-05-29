const params = {
    powerThreshold: 200.0,
    notification: "Washing machine has been running above 200W for 5 minutes",
    maxCount: 3,
};

var washingMachine = Shelly.getDevice("x");
var button = Shelly.getDevice("y");
global.highPowerCount = 0;

Shelly.setActiveTime({ start: "11:00", duration: "180", days: [5, 6, 7] });

function notificationForPowerConsumption() {
    global.highPowerCount++;
    if (global.highPowerCount < params.maxCount) {
        Shelly.sendPhoneStandardNotification(params.notification + " " + global.highPowerCount + " times");
    } else if (global.highPowerCount == params.maxCount) {
        Shelly.sendPhoneStandardNotification(params.notification + " exactly " + params.maxCount + " times. Reset with pressing the button.");
    }
}

Shelly.setTriggerWithHoldOff(washingMachine, "powerConsumption > " + params.powerThreshold, 5, notificationForPowerConsumption);
Shelly.setTriggerOnce(button, "o1PressedOnce", () => global.highPowerCount = 0);