// Define union of strings that will serve as keys for the object
type Roles = 'author' | 'editor' | 'researcher';

// Define a type alias to be used as a type for the values of the object
interface User {
	name: string;
	email: string;
	age: number;
}

interface Article {
	title: string;
	content: string;
	// Record<keys,Type> returns a type alias with
	contributors: Record<Roles, User>;
}

const article: Article = {
	title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	content: 'Duis est urna, eleifend at malesuada id, suscipit eu',
	// Contributors can be type generated from Roles type and User interface
	contributors: {
		author: { name: 'John', email: 'john@email.com', age: 32 },
		editor: { name: 'Frank', email: 'frank@email.com', age: 36 },
		researcher: { name: 'Mark', email: 'mark@email.com', age: 36 },
	},
};

export {};
