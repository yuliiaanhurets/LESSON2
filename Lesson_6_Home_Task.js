// Task 1 - Create 3 objects with {}
// Object 1
const personMale = {
    firstName: "George",
    lastName: "Montgomery",
    isActive: true,
    age: 30,
    eyeColor: "blue",
    contactData: {
        email: "g.montgomery@randatmail.com",
        phone: 603 - 9656 - 74,
        fax: null
    },
    fullName: function () {
        return this.firstName + this.lastName;
    },
    favColor: ['blue','red']
};

// Object 2
const myCar = {
    make: "Infinity",
    model: "QX50",
    year: 2018,
    engine: {
        cylinders: 4,
        size: 2.2
    },
    carColor: ['blue','yellow']
};

// Object 3
const car = {};
car.make = "Ford";
car.model = "Mustang";
car.year = 1969;
car.engine = {
    cylinders: 4
}

console.log(car.engine.cylinders)

// Task 2 - Create 3 objects with Object()
// Object 1
const dog = new Object();
dog.breed = "Labrador Retriever";
dog.age = 4;
dog.eyeColor = "blue";
dog.breedAndAge = function () {
    return this.breed + " " + this.age;
};

console.log(dog.breedAndAge())

// Object 2
const cat = new Object();
cat.breed = "Abyssinian";
cat.age = 4;
cat.toys = {
    mouse: true,
    softToy: false
};
cat.breedAndToys = function () {
    return this.breed + " " + this.toys.mouse;
};

console.log(cat.breedAndToys())

// Object 3
const france = new Object();
france.age = 1035;
france.regions = {
    Normandy: true,
    Burgundy: true,
    Bretagne: true,
    Corsica: false
}
france.capital = function () {
    let capital = "Paris"
    return capital;
};

console.log(france.capital())

// Task 3 - Create an object based on object prototype - Object.create()
const personPrototype = {
    firstName: this.firstName,
    age: this.age,
    printIntroduction: function () {
        return `My name is ${this.firstName}.`;
    },
};

let jessica = Object.create(personPrototype);
jessica.firstName = "Jessica"
jessica.age = 50
jessica.occupation = "Architect"
console.log(jessica)
console.log(jessica.printIntroduction())

// Create an object based on object prototype - ___protorype___
let newEmployee = {
     newUser: true,
     occupation: "Architect"
}

let daniel = {
    firstName: "Daniel",
    lastName: "Bacigalupo",
    ___proto___ : newEmployee
}
console.log(daniel)

// Task 4 and 5
let person = {
    isHuman: true,
    sex: "female"
}

let engineer = {
    firstName: "Marta",
    lastName: "Smith",
    experienceYears: 5,
    age: 25,
    __proto__: person
};

let qaEngineer = {
    isQAEngineer: true,
    __proto__: engineer,
};

console.log(person)

console.log(Object.getPrototypeOf(engineer))
console.log(engineer)

console.log(Object.getPrototypeOf(qaEngineer))
console.log(qaEngineer)