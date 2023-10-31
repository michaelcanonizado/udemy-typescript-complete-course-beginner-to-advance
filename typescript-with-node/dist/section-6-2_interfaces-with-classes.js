"use strict";
var AutomobileType;
(function (AutomobileType) {
    AutomobileType["car"] = "car";
    AutomobileType["bus"] = "bus";
    AutomobileType["truck"] = "truck";
    AutomobileType["motorcycle"] = "motorcycle";
})(AutomobileType || (AutomobileType = {}));
var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["toyota"] = "toyota";
    AutomobileBrands["mitsubishi"] = "mitsubishi";
    AutomobileBrands["honda"] = "honda";
})(AutomobileBrands || (AutomobileBrands = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["green"] = "green";
})(AutomobileColors || (AutomobileColors = {}));
// Using the Automobile Interface to create an Object
const car1 = {
    type: AutomobileType.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.red, AutomobileColors.green],
    description: 'This car is a Ferrari',
};
// Using the Automobile Interface as a blueprint for a Class, and using that Class to generate the Object
class Car {
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.type = AutomobileType.car;
    }
}
class Truck {
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.type = AutomobileType.truck;
    }
}
const car2 = new Car(AutomobileBrands.honda, [AutomobileColors.red, AutomobileColors.green, AutomobileColors.blue], 'This car is a Honda');
const truck2 = new Truck(AutomobileBrands.honda, [AutomobileColors.red], 'This truck is a Honda');
// Outputting the Objects
console.log(car1);
console.log(car2);
console.log(truck2);
