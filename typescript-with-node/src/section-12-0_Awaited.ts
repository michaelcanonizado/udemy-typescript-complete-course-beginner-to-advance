// Created a type alias to be passed in the promise
type obj = {
	name: string;
	age: number;
	email: string;
};

const promise: Promise<obj> = new Promise((res, rej) => {
	setTimeout(() => {
		// Return an object
		res({
			name: 'John',
			age: 36,
			email: 'john@example.com',
		});
	}, 1000);
});

// Catch the type alias of the object from the promise, and set it to a custom type, to be used on the variable that will hold the response object. This is useful as it allows us to catch the structure of an response object from an API, or check for changes on the response object.
type AwaitedType = Awaited<typeof promise>;

let type: AwaitedType = {
	name: 'mike',
	age: 19,
	email: 'mike@example.com',
};
