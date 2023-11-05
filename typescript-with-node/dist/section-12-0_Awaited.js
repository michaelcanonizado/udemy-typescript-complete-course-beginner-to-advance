"use strict";
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        // Return an object
        res({
            name: 'John',
            age: 36,
            email: 'john@example.com',
        });
    }, 1000);
});
let type = {
    name: 'mike',
    age: 19,
    email: 'mike@example.com',
};
