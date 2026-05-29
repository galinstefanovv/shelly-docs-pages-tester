var myTextGroup = Virtual.getDevice("x");

Shelly.setTriggerOnce(myTextGroup, "mytext == Test", () => Shelly.logActivity());