var kitchenDoor = Shelly.getDevice("x");
var coffee = Shelly.getDevice("y"); 

function prepareCoffee() {
    coffee.o1On = {
        value: true,
        timeout: "15m",
        delay: "30s"
    };
}

Shelly.setTriggerOnce(kitchenDoor, "open", prepareCoffee);