interface User {
	name: string;
	age: number;
}

// Allows us to set properties of a type to be readonly. Can be paired with Pick utility type if a only specific type is to be readonly
const user: Readonly<User> = {
	name: 'John',
	age: 32,
};

// will error as .name is readonly
// user.name = 'Something Else';

export {};
