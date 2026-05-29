const params = {
  maxTemp: 25,
  minTemp: 20,
};

var ac = Shelly.getDevice("x"); 
var tempSensor = Shelly.getDevice("y"); 
var homeaway = Virtual.getDevice("z_200");

function highTemperature() {
  if (Shelly.checkActiveTime({start: "10:00", duration: "600", days: [1, 2, 3, 4, 5, 6, 7]})) {
      ac.on = true;
  }
}

Shelly.setTriggerOnce(homeaway, "atHome == true", () => ac.on = true);
Shelly.setTriggerOnce(tempSensor, "temperature >" + params.maxTemp, highTemperature);
Shelly.setTriggerOnce(tempSensor, "temperature <" + params.minTemp, () => ac.on = false);