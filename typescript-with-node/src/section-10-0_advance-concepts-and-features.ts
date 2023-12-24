//
//
// 1. TYPECASTING - overriding the inferred type by using 'as' followed by the desire type at the end of the expression.
// Commenting expression as document does not exist in node
// let firstNameField = document.querySelector('#firstName')! as HTMLInputElement;

//
//
// 2. TOTALITY - typescript ensures that you have covered all possible values (totality checking / exhaustiveness). This comes handy when dealing with unions .
type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Day = Weekdays | 'Sat' | 'Sun';
function nextDayForAWeekDay(weekday: Weekdays): Day {
	switch (weekday) {
		case 'Mon':
			return 'Tue';
		case 'Tue':
			return 'Wed';
		case 'Wed':
			return 'Thu';
		case 'Thu':
			return 'Fri';
		case 'Fri':
			return 'Sat';
	}
}

//
//
// 3. DESCRIMINATED UNIONS - allows you to assign a type to an object, and mandate that type when declaring the object.
type Cat = {
	type: 'cat';
	purrs: boolean;
};
type Dog = {
	type: 'dog';
	barks: boolean;
};
type Animal = Cat | Dog;
let cat: Animal = {
	type: 'cat',
	purrs: true,
};
let dog: Animal = {
	type: 'dog',
	barks: true,
};
function animalReaction(animal: Animal) {
	switch (animal.type) {
		case 'cat':
			console.log('The animal is a cat and it purrs');
			break;
		case 'dog':
			console.log('The Animal is a dog and it barks');
			break;
	}
}

//
//
// 4. INDEX ACCESSED TYPES - allows you to use part of a custom type aliase of an object and assign it to another type aliase.
//
// Using servicesList custom type aliase and assigning it to a separate type aliase. Instead of:
// type ServicesList = {
//		count: number;
//		services: {
//			id: number;
//			name: string;
//			price: number;
//		}[];
//	}
// This removes a lot of unnecessary repetitive code.
type ServiceList = UserDetailsAPIResponse['servicesList'];
type UserDetailsAPIResponse = {
	id: number;
	name: string;
	servicesList: {
		count: number;
		services: {
			id: number;
			name: string;
			price: number;
		}[];
	};
};

//
//
// 5. KEYOF - stores the keys of an Object as unions or general types.
type Events = {
	id: number;
	date: Date;
	type: 'indoor' | 'outdoor';
};
//
// the code below stores the keys of Events as unions: "id" | "date" | "type"
type unionOfKeysOfEvents = keyof Events;
//
// the code below stores the keys of Numeric as a number, as the keys of Numeric are set to be type of numbers.
type Numeric = {
	[key: number]: string;
};
type NumericKeyOf = keyof Numeric;

//
//
// 6. TYPEOF - allows us to extract the type of a value. This type can be used for conditionals or be used to assign to another value.
let greeting = 32;
let firstName: typeof greeting;
if (typeof greeting === 'number') {
	// console.log('value is number');
}

//
//
// 7. MAPPED TYPES - allows you to create new types by transforming the properties of existing types.
//
// commenting aliases out as it is declared earlier in the code
//type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
//type Day = Weekdays | 'Sat' | 'Sunday';
//
// example #1
type NextDay = {
	[W in Weekdays]: Day;
};
let nextDay: NextDay = {
	Mon: 'Tue',
	Tue: 'Wed',
	Wed: 'Thu',
	Thu: 'Fri',
	Fri: 'Sat',
};
// example #2
type Artist = {
	id: number;
	name: string;
	bio: string;
};
type MappedArtistForEdit = {
	[Property in keyof Artist]?: Artist[Property];
} & { id: number };
// The code above boils down to the type below.
// type MappedArtistForEdit = {
// 	id : number;
//  name ?: string;
//  bio ?: string;
// }
const artist: Artist = {
	id: 1,
	name: 'Justin',
	bio: 'Hey, I am Justin',
};
const editedArtist: MappedArtistForEdit = {
	id: 1,
	bio: 'Hello, I am Justin',
};

//
//
// 8. CONDITIONAL TYPES -
interface AnimalType {
	name: string;
	live: () => void;
}
interface DogType extends AnimalType {
	bark: () => void;
}
type DoesExtend = DogType extends AnimalType ? string : number;
// SomeType extends OtherType ? TrueType : FalseType;
type isString<T> = T extends string ? true : false;
type A = isString<string>;
type B = isString<number>;
