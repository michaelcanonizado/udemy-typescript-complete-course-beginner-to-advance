//
// INFERRING THE RETURN TYPE OF A FUNCTION
//
function returnString() {
	return 'this is a string';
}
// Check what if the generic passed is a function, if it is a function, return the return type of that function; else return the type of in the generic
type FunctionReturnTypeChecker<T> = T extends () => infer R ? R : T;

// infers a STRING
type FuncReturnType1 = FunctionReturnTypeChecker<typeof returnString>;

// infers a NUMBER, because it is not a function
type FuncReturnType2 = FunctionReturnTypeChecker<number>;

//
// INFERRING PARAMETERS OF A FUNCTION
//
function Person(name: string, age: number) {
	return {
		name,
		age,
	};
}
type InferFirstArgOfFunction<T> = T extends (arg1: infer Arg1, ...args: any[]) => any
	? Arg1
	: never;
type InferSecondArgOfFunction<T> = T extends (
	arg1: any,
	arg2: infer Arg2,
	...args: any[]
) => any
	? Arg2
	: never;

type FirstArgOfFunctionType = InferFirstArgOfFunction<typeof Person>;
type SecondArgOfFunctionType = InferSecondArgOfFunction<typeof Person>;

export {};
