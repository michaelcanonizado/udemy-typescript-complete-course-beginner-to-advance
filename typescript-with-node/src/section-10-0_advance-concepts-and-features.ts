//
// 1. typecasting - overriding the inferred type by using 'as' followed by the desire type at the end of the expression.
let firstNameField = document.querySelector('#firstName')! as HTMLInputElement;

//
// 2. totality - typescript ensures that you have covered all possible values (totality checking / exhaustiveness). This comes handy when dealing with unions .
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
// 3. descriminated unions - allows you to assign a type to an object, and mandate that type when declaring the object.
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
