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
