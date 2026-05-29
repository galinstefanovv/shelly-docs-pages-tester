if (global.nonRainyDays === undefined) {global.nonRainyDays = 0;}

const params = {
  irrigationTime: "45m",
  floodHoldOff: 3
};

var hydrophorePump = Shelly.getDevice("x"); 
var flood = Shelly.getDevice("y");

function irrigate() {
  hydrophorePump.o1On = {value: true, timeout: params.irrigationTime};
  Shelly.sendPhoneStandardNotification("Garden irrigated for " + params.irrigationTime, "0");
}

function defineIrrigationNeeded() {
  global.nonRainyDays++;
  if (global.nonRainyDays >= 3) {irrigate();}
}

Shelly.setTriggerWithHoldOff(flood, "flood", params.floodHoldOff, () => {global.nonRainyDays = 0;});
Shelly.setScheduleTrigger("05:15", [1,2,3,4,5,6,7], defineIrrigationNeeded);