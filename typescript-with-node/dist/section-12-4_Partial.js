"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateUser(user, updates) {
    return Object.assign(Object.assign({}, user), updates);
}
const user = {
    name: 'John',
    email: 'test@email.com',
    password: 'password',
};
const updatedUser = updateUser(user, { email: 'email@test.com' });
