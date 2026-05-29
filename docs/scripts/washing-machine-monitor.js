var washingMachine = Shelly.getDevice("x");  // Washing machine
var floodSensor = Shelly.getDevice("y");  // Flood Sensor

if (global.cycleCounter === undefined) { 
    global.cycleCounter = 0;
}

function cleaningWashingMachine() {
  if (global.cycleCounter >= 30) {
    Shelly.sendPhoneStandardNotification("Clean the Washing machine!", "0");
    global.cycleCounter = 0;
  }
}

Shelly.setTriggerWithHoldOff(floodSensor, "flood", 3, () => washingMachine.o1On = false);
Shelly.setTriggerWithHoldOff(washingMachine, "o1PowerConsumption < 50", 10, () => {
  Shelly.sendPhoneStandardNotification("Washing machine is done.", "0");
  global.cycleCounter++;
});

Shelly.setScheduleTrigger("9:00", [6], cleaningWashingMachine);