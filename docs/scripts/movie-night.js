var door = Shelly.getDevice("x");
var tv = Shelly.getDevice("y");

var nightTime = { start: "20:00", duration: "600", days: [1, 2, 3, 4, 5, 6, 7] };
Shelly.setActiveTime(nightTime);

Shelly.setTriggerOnce(door, "open", () => tv.o1On = true);