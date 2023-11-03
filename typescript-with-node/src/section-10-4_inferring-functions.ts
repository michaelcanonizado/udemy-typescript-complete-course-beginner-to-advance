//
// INFERRING THE RETURN TYPE OF THE FUNCTION
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
