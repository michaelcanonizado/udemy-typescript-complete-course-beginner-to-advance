interface User {
	name: string;
	email: string;
	password: string;
}

// Allows us to create a type where the properties are any or all of the properties of the type that is passed to the generic
function updateUser(user: User, updates: Partial<User>): User {
	return { ...user, ...updates };
}

const user: User = {
	name: 'John',
	email: 'test@email.com',
	password: 'password',
};

const updatedUser = updateUser(user, { email: 'email@test.com' });

export {};
