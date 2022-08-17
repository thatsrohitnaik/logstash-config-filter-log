'use strict';

var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());

var person = new Person('Rohit', 31);
console.log(person.name, person.age);
