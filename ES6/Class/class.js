function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
};

let person = new Person('John');
console.log(person.getName());
console.log(person instanceof Person);
console.log(person instanceof Object);

// ===========================================================

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let animal = new Animal('cow');
console.log(animal.getName());
console.log(animal instanceof Animal);
console.log(animal instanceof Object);


// ===========================================================

