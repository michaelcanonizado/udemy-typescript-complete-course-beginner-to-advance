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
}
class AdminDepartment extends Department {
    constructor() {
        super('Admin Department');
        this.holidays = [];
    }
}
const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();
console.log(itDepartment);
console.log(adminDepartment);