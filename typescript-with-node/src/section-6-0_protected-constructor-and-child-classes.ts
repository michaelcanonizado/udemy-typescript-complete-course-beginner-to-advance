type Holidays = {
	date: Date;
	reason: string;
}[];

abstract class Department {
	protected abstract holidays: Holidays;

	protected constructor(protected name: string) {}

	public addHolidays(holidays: Holidays) {
		if (Array.isArray(holidays)) {
			for (const holiday of holidays) {
				this.holidays.push(holiday);
			}
		}
	}

	public printHolidays() {
		if (this.holidays.length === 0) {
			return console.log(`The ${this.name} has no holidays`);
		}
		console.log(`Here is the list of holidays for the ${this.name}.`);

		this.holidays.forEach((holiday, index) => {
			console.log(`   ${index + 1}). ${holiday.reason} - ${holiday.date}`);
		});
	}
}

class ItDepartment extends Department {
	protected holidays: Holidays = [];

	constructor() {
		super('IT Department');
	}
}

class AdminDepartment extends Department {
	protected holidays: Holidays = [];

	constructor() {
		super('Admin Department');
	}
}

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

itDepartment.addHolidays([
	{ date: new Date(), reason: 'xmas' },
	{ date: new Date(), reason: 'easter' },
	{ date: new Date(), reason: 'halloween' },
]);

itDepartment.printHolidays();
adminDepartment.printHolidays();
