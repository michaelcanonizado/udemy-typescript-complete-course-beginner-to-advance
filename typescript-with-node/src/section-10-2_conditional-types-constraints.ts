interface WritePermission {
	write: true;
}
interface ReadPermission {
	write: false;
}

interface User {
	name: string;
	email: string;
}

interface Admin extends User, WritePermission {}
interface Author extends User, WritePermission {}
interface Reader extends User, ReadPermission {}

// Does T extend and object interface/type where a value write is set to true?
type FilterWritable<T> = T extends { write: true } ? true : false;

// Writeable is inferred as True
type Writeable = FilterWritable<Admin>;

let writeable: Writeable = true;

console.log(writeable);
