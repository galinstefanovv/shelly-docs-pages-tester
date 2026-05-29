const params = {
  minTemp: 8.0,
  maxTemp: 15.0,
  tempHoldOff: 5,
  
  minHum: 70,
  maxHum: 80,
  alertHum: 85
};

var t_h_sensor = Shelly.getDevice("x"); 

var air_conditioning = Shelly.getDevice("y");  
var heater = Shelly.getDevice("z");

var fan_1 = Shelly.getDevice("m");
var fan_2 = Shelly.getDevice("n");

// Fan handlers and triggers
function turnFan1ForHalfDay() {
    fan_1.on = {
      value: true,
      timeout: "720m"
    };
}

function turnFan2ForHalfDay() {
    fan_2.on = {
      value: true,
      timeout: "720m"
    };
}

function checkHumAndTurnFan() {
    if (t_h_sensor.humidity > params.maxHum) {
      if (fan_1.on.value) {
        fan_2.on = {
          value: true,
          timeout: "30m"
        };
      } else if (fan_2.on.value) {
        fan_1.on = {
          value: true,
          timeout: "30m"
        };
      }
    }

    if (t_h_sensor.humidity > params.alertHum) {
      Shelly.sendPhoneStandardNotification("Humidity over 85%");
    }
}

Shelly.setScheduleTrigger("00:00", [1, 2, 3, 4, 5, 6, 7], turnFan1ForHalfDay);
Shelly.setScheduleTrigger("12:00", [1, 2, 3, 4, 5, 6, 7], turnFan2ForHalfDay);
Shelly.setTimerTrigger(60, checkHumAndTurnFan);

// Temp control handlers and triggers
function warmUp() {
    heater.on = {
      value: true,
      timeout: "20m"
    };
}

function coolDown() {
    air_conditioning.on = {
      value: true,
      timeout: "20m"
    };
}

Shelly.setTriggerWithHoldOff(t_h_sensor, "temperature > " + params.maxTemp, params.tempHoldOff, coolDown);
Shelly.setTriggerWithHoldOff(t_h_sensor, "temperature < " + params.minTemp, params.tempHoldOff, warmUp);