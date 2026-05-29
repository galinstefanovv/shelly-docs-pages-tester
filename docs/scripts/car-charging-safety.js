var mainEmeter = Shelly.getDevice("x"); 
var evCharger = Shelly.getDevice("y"); 

function pauseEvCharger() {
  evCharger.o1On = {
    value: false,
    timeout: "30m"
  };
}
Shelly.setTriggerOnce(mainEmeter, "totalPower > 11500", pauseEvCharger);