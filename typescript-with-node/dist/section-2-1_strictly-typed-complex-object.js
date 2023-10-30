"use strict";
const library = {
    name: 'Bicol University Library',
    address: 'Legazpi, Albay',
    numberOfBooks: 5000,
    type: 'academic',
    books: [
        { title: 'Math 101', pages: 371, isbn: '9928-2-1593-1' },
        { title: 'Computer Programming 1', pages: 371, isbn: '9928-2-1594-1' },
        { title: 'Introduction to Computing', pages: 371, isbn: '9928-2-1591-1' },
    ],
    genre: ['Fiction', 'History', 'Computers', 'Poetry'],
    members: [
        { name: 'Michael Xavier', phone: '123423213' },
        { name: 'John Franklin', phone: '893413213' },
        {
            name: 'Cheese Escudero',
            phone: '12341289',
            email: 'cheesyescu@gmail.com',
        },
    ],
};
console.log(library);
