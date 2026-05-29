var button = Virtual.getDevice("m");

Shelly.setTriggerOnce(button, "testVirtualButton", pressedThreeTimes, () => Shelly.logActivity());