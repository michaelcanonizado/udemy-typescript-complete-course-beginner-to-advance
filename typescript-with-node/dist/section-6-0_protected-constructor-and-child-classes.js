"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
class ItDepartment extends Department {
    constructor() {
        super('IT Department');
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log(`The ${this.name} has no holidays`);
        }
        console.log(`Here is the list of holidays for the ${this.name}.`);
        this.holidays.forEach((holiday, index) => {
            console.log(`   ${index + 1}). ${holiday.reason} - ${holiday.date}`);
        });
    }
}
class AdminDepartment extends Department {
    constructor() {
        super('Admin Department');
        this.holidays = [];
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log(`The ${this.name} has no holidays`);
        }
        console.log(`Here is the list of holidays for the ${this.name}.`);
        this.holidays.forEach((holiday, index) => {
            console.log(`   ${index + 1}). ${holiday.reason} - ${holiday.date}`);
        });
    }
}
const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();
itDepartment.addHolidays([
    { date: new Date(), reason: 'xmas' },
    { date: new Date(), reason: 'easter' },
    { date: new Date(), reason: 'halloween' },
]);
itDepartment.printHolidays();
adminDepartment.printHolidays();
