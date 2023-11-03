"use strict";
//
//
// 1. TYPECASTING - overriding the inferred type by using 'as' followed by the desire type at the end of the expression.
// Commenting expression as document does not exist in node
// let firstNameField = document.querySelector('#firstName')! as HTMLInputElement;
function nextDayForAWeekDay(weekday) {
    switch (weekday) {
        case 'Mon':
            return 'Tue';
        case 'Tue':
            return 'Wed';
        case 'Wed':
            return 'Thu';
        case 'Thu':
            return 'Fri';
        case 'Fri':
            return 'Sat';
    }
}
let cat = {
    type: 'cat',
    purrs: true,
};
let dog = {
    type: 'dog',
    barks: true,
};
function animalReaction(animal) {
    switch (animal.type) {
        case 'cat':
            console.log('The animal is a cat and it purrs');
            break;
        case 'dog':
            console.log('The Animal is a dog and it barks');
            break;
    }
}
//
//
// 6. TYPEOF - allows us to extract the type of a value. This type can be used for conditionals or be used to assign to another value.
let greeting = 32;
let firstName;
if (typeof greeting === 'number') {
    // console.log('value is number');
}
let nextDay = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
};
const artist = {
    id: 1,
    name: 'Justin',
    bio: 'Hey, I am Justin',
};
const editedArtist = {
    id: 1,
    bio: 'Hello, I am Justin',
};
