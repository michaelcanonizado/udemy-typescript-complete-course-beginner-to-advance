"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    testUsersAge(age) {
        if (age > 200 || age < 0) {
            throw new Error('The age must be within range of 0-200');
        }
        return age;
    }
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.testUsersAge(_age);
        this._age = _age;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this.testUsersAge(age);
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
const person = new Person('John', 42);
console.log(person);
console.log(person.age);
console.log(person.name);
