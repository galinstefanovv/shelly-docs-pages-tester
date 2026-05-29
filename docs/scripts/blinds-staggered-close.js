const params = {
  delay1: "3s",
  position1: 80.0,
  delay2: "10s",
  position2: 65.0,
  delay3: "18s",
  position3: 90.0,
};

var blind1 = Shelly.getDevice("x");
var blind2 = Shelly.getDevice("y");
var blind3 = Shelly.getDevice("z");

function blindsPosition() {
  blind1.position = { value: params.position1, delay: params.delay1 };
  blind2.position = { value: params.position2, delay: params.delay2 };
  blind3.position = { value: params.position3, delay: params.delay3 };
}

Shelly.setScheduleTrigger("20:00", [1, 2, 3, 4, 5, 6, 7], blindsPosition); 
