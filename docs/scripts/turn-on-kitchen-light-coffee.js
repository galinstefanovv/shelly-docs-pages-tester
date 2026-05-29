var kitchenLight = Shelly.getDevice("x");
var coffeeMachine = Shelly.getDevice("y");


Shelly.setScheduleTrigger("07:00", [1, 2, 3, 4, 5], () => {
    coffeeMachine.on = true;
    kitchenLight.on = true;
});