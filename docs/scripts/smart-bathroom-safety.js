const params = {
  maxHum: 48,
  motionHoldOff: 1,
  lightsDelay: "1m",
  boilerDelay: "2m",
  exhaustDelay: "15m"
};

var h_t_sensor = Shelly.getDevice("x"); 
var motionSensor = Shelly.getDevice("y");  
var door = Shelly.getDevice("z");

var lights = Shelly.getDevice("m");
var exhaust_fan = Shelly.getDevice("n");
var boiler = Shelly.getDevice("f");

function enterBathroom() {
  if (motionSensor.motion && lights.o1Off) {
    boiler.o1On = false;
    lights.o1On = true;
    exhaust_fan.o1On = true;
  }
}

function exitBathroom() {
  lights.o1On = {
    value: false,
    delay: params.lightsDelay
  };
  
  boiler.o1On = {
    value: true,
    timeout: params.boilerDelay
  };
  
  exhaust_fan.o1On = {
    value: false,
    delay: params.exhaustDelay
  };
}

function checkHumAndExhaust() {
  if (h_t_sensor.humidity > params.maxHum) {
    exhaust_fan.o1On = {
      value: false,
      delay: params.exhaustDelay
    };
  }
}

Shelly.setTriggerOnce(door, "open", enterBathroom);
Shelly.setTriggerWithHoldOff(motionSensor, "noMotion", params.motionHoldOff, exitBathroom);

Shelly.setTimerTrigger(150, checkHumAndExhaust);