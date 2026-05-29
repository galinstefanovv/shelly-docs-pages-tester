var homeaway = Virtual.getDevice("x_200");
var ac = Shelly.getDevice("y"); 

Shelly.setTriggerOnAnyChange(homeaway, "atHome == false", () => ac.off = true);