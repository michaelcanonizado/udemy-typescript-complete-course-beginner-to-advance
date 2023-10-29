class Person {
	name: string;
	email: string;

	constructor(name: string, email: string) {
		this.name = name;
		this.email = email;
		console.log(`Name: ${name} | Email: ${email}`);
	}

	greet() {
		return `Hello! My name is ${this.name}`;
	}
}

const person1: Person = new Person('Michael', 'mike@gmail.com');

console.log(person1.greet());
