class Person {
	// using 'private' before the parameter, makes key-value of the object to be accessed only within the class.
	constructor(private _name: string, private age: number) {}

	// The set access modifier allows us to allow the object key-value to be altered via: 'person.name = " ";'
	public set name(name: string) {
		this._name = name;
	}

	// The get access modifier allows us to allow the object key-value to be accessed
	public get name() {
		return this._name;
	}
}

const person1: Person = new Person('Michael', 18);
person1.name = 'John';
console.log(person1.name);
