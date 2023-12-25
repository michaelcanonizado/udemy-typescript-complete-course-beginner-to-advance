interface User {
	name?: string;
	age?: number;
	email?: string;
	password?: string;
}

// Allows us to require properties of a type that have been set to optional. Usually paired with Pick utility type
type RegisterUser = Required<Pick<User, 'email' | 'password'>>;
// RegisterUser becomes -> {
// email : string
// password : string
// name ?: string
// age ?: number
//}

export {};
