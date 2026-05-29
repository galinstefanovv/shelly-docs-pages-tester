var myNumberGroup = Virtual.getDevice("y");

Shelly.setTriggerOnce(myNumberGroup, "mynumber > 17.0", () => Shelly.logActivity());