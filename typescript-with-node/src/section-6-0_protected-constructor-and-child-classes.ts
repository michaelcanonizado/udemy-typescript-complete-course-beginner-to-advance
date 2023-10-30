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

const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();

itDepartment.addHolidays([
	{ date: new Date(), reason: 'xmas' },
	{ date: new Date(), reason: 'easter' },
	{ date: new Date(), reason: 'halloween' },
]);

console.log(itDepartment);
console.log(adminDepartment);
