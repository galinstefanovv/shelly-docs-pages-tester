var myboolean = Virtual.getDevice("z");

Shelly.setTriggerOnce(myboolean, "trueFalse == true", () => Shelly.logActivity());