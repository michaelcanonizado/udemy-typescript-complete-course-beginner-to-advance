interface Person {
	name: string;
	age: number;
	address: string;
}

// Pick<Type,Keys> allows us to pick specific keys from an object type and set it to the custom type
type NameAndAge = Pick<Person, 'name' | 'age'>;
// Or pick keys from a object to be read only by passing it to a Utility Type. This also shows how you can combine Utility Types
type NameAndAgeReadonly = Readonly<Pick<Person, 'name' | 'age'>>;

const person: NameAndAge = {
	name: 'John',
	age: 32,
};

person.name = 'Else';
