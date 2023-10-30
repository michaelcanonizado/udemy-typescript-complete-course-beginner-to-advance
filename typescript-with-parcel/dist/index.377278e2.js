class Person {
    // using 'private' before the parameter, makes key-value of the object to be accessed only within the class.
    constructor(_name, age){
        this._name = _name;
        this.age = age;
    }
    // The set access modifier allows us to allow the object key-value to be altered via: 'person.name = " ";'
    set name(name) {
        this._name = name;
    }
    // The get access modifier allows us to allow the object key-value to be accessed
    get name() {
        return this._name;
    }
}
const person1 = new Person("Michael", 18);
person1.name = "John";
console.log(person1.name);

//# sourceMappingURL=index.377278e2.js.map
