var myEnumGroup = Virtual.getDevice("n");
var light = Shelly.getDevice("h");

Shelly.setTriggerOnce(myEnumGroup, "myenum == option1", () => Shelly.logActivity());
Shelly.setTriggerOnce(myEnumGroup, "myenum == option2", () => light.on = true);
Shelly.setTriggerOnce(myEnumGroup, "myenum == option3", () => light.off = true);