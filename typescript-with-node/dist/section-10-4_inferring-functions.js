"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// INFERRING THE RETURN TYPE OF A FUNCTION
//
function returnString() {
    return 'this is a string';
}
//
// INFERRING PARAMETERS OF A FUNCTION
//
function Person(name, age) {
    return {
        name,
        age,
    };
}
