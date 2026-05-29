const params = {
  delay1: "5s",
  delay2: "12s",
  delay3: "23s",
};

var light1 = Shelly.getDevice("x");
var light2 = Shelly.getDevice("y");
var light3 = Shelly.getDevice("z"); 

function turnOnLights() {
    light1.on = { value: true, delay: params.delay1 };
    light2.on = { value: true, delay: params.delay2 };
    light3.on = { value: true, delay: params.delay3 };
}

Shelly.setScheduleTrigger("19:00", [1,2,3,4,5,6,7], turnOnLights);