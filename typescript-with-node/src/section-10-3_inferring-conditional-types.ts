// infer basically allows us to capture the type of the array conditionally

type ArrayElementType<T> = T extends (infer E)[] ? E : T;

// string
type TypeOne = ArrayElementType<string[]>;

// number
type TypeTwo = ArrayElementType<number[]>;

// string | number | boolean
type TypeThree = ArrayElementType<(number | string | boolean)[]>;

// {name: string}
type TypeFour = ArrayElementType<{ name: string }>;

// string
type TypeFive = ArrayElementType<string>;
