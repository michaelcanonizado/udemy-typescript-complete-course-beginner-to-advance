"use strict";
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res({
            name: 'John',
            age: 36,
            email: 'john@example.com',
        });
    }, 1000);
});
let type = {
    age: 'hello',
};
console.log(type);
