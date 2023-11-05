"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allows us to create a type where the properties are any or all of the properties of the type that is passed to the generic
function updateUser(user, updates) {
    return Object.assign(Object.assign({}, user), updates);
}
const user = {
    name: 'John',
    email: 'test@email.com',
    password: 'password',
};
const updatedUser = updateUser(user, { email: 'email@test.com' });
