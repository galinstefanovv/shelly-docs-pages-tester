var bluetoothButton = Shelly.getDevice("h"); 
var myTextGroup = Virtual.getDevice("x"); 
var myNumberGroup = Virtual.getDevice("y"); 
var myBoolean = Virtual.getDevice("z");
var myButton = Virtual.getDevice("m");
var myEnumGroup = Virtual.getDevice("n")

Shelly.setTriggerOnce(bluetoothButton, "o1PressedOnce", () => myNumberGroup.mynumber = 18);
Shelly.setTriggerOnce(bluetoothButton, "o1PressedTwice", () => myTextGroup.mytext = "Hello");
Shelly.setTriggerOnce(bluetoothButton, "o1PressedThreeTimes", () => myBoolean.trueFalse = true);
Shelly.setTriggerOnce(bluetoothButton, "o1PressedLong", () => myEnumGroup.myenum = "option2");
Shelly.setScheduleTrigger("12:00", [1], () => myButton.pressedOnce = "pressedOnce");