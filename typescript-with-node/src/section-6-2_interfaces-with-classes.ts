enum AutomobileType {
	car = 'car',
	bus = 'bus',
	truck = 'truck',
	motorcycle = 'motorcycle',
}
enum AutomobileBrands {
	ferrari = 'ferrari',
	toyota = 'toyota',
	mitsubishi = 'mitsubishi',
	honda = 'honda',
}
enum AutomobileColors {
	red = 'red',
	blue = 'blue',
	green = 'green',
}

interface Automobile<Type, Brands, Colors> {
	type: Type;
	brand: Brands;
	colors: Colors[];
	description: string;
}

// Using the Automobile Interface to create an Object
const car1: Automobile<AutomobileType, AutomobileBrands, AutomobileColors> = {
	type: AutomobileType.car,
	brand: AutomobileBrands.ferrari,
	colors: [AutomobileColors.red, AutomobileColors.green],
	description: 'This car is a Ferrari',
};

// Using the Automobile Interface as a blueprint for a Class, and using that Class to generate the Object
class Car implements Automobile<AutomobileType, AutomobileBrands, AutomobileColors> {
	public type: AutomobileType = AutomobileType.car;

	constructor(
		public brand: AutomobileBrands,
		public colors: AutomobileColors[],
		public description: string
	) {}
}
class Truck
	implements Automobile<AutomobileType, AutomobileBrands, AutomobileColors>
{
	public type: AutomobileType = AutomobileType.truck;

	constructor(
		public brand: AutomobileBrands,
		public colors: AutomobileColors[],
		public description: string
	) {}
}
const car2: Car = new Car(
	AutomobileBrands.honda,
	[AutomobileColors.red, AutomobileColors.green, AutomobileColors.blue],
	'This car is a Honda'
);
const truck2 = new Truck(
	AutomobileBrands.honda,
	[AutomobileColors.red],
	'This truck is a Honda'
);

// Outputting the Objects
console.log(car1);
console.log(car2);
console.log(truck2);
