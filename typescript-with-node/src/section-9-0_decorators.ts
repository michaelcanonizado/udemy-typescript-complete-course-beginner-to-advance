class Airplane {
	constructor(public model: string, public pilot: string) {}
}

const airplane: Airplane = new Airplane('A380', 'John');

console.log(airplane);

export {};
