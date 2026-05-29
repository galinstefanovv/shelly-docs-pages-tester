var evCharger= Shelly.getDevice("x");

Shelly.setScheduleTrigger("22:30", [1, 2, 3, 4, 5, 6, 7], () => {evCharger.on = true});
Shelly.setScheduleTrigger("06:30", [1, 2, 3, 4, 5, 6, 7], () => {evCharger.on = false});