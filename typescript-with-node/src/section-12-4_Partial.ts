interface User {
	name: string;
	email: string;
	password: string;
}

// Allows us to create a type where the properties are any or all of the properties of the type that is passed to the generic
function updateUser(user: User, updates: Partial<User>): User {
	// It basically allows us to pass parts of the interface without passing the whole interface
	console.log(updates);
	return { ...user, ...updates };
}

const user: User = {
	name: 'John',
	email: 'test@email.com',
	password: 'password',
};

const updatedUser = updateUser(user, { name: 'email@test.com' });

// console.log(updatedUser);

export {};
