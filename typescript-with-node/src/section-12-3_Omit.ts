interface User {
	name: string;
	age: number;
	email: string;
	password: string;
}

// Allows us to exclude specific type keys of an object to be set to the type alias
type DisplayedUser = Omit<User, 'password' | 'email'>;

export {};
