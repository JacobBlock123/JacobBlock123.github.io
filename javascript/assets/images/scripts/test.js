// Exercise 1

const person = {
    firstName: "Jacob",
    lastName : "Block",
    age: "16",
    dateOfBirth: "04/16/05"
  };

function printObject (person)  {
    for (let prop in person) {
        console.log(`Property: ${prop} Value: ${person[prop]}`)
    }
}

printObject(person);

// Exercise 2

const empty = {};

function flip (person, empty) {
    for (let prop in person) {
        empty[person[prop].toLowerCase()] = prop;
    }

    console.log(`Property: ${prop} Value: ${empty[prop]}`)
}

flip(person, empty);
















// Exercise 1

let empty = [];

function func (empty, prop, value) {
    Object.defineProperty(empty,
        prop, {
            value: value,
            enumerable: true
        }
    )
}


// Exercise 2

const document = {
    size : null,
    title : null,
    type: null
};

const nullValues = [];

for (i = 0; i = document.length; i++) {
    if (document[property] == null) {
        nullValues.push(document[property]);
    }
}



























// Exercise 1
let property = prompt("What property would you like to delete?", "age, name, etc");

let person = {
    name: "Jacob Block",
    age: "16",
    birthday: "04/16/05",
    city: "Winnipeg, MB"
}

function deleteProp (person, property) {
    if (person.hasOWnProperty(property) == true) {
        delete person.property;
        console.log("Property: " + property + " deleted successfully.");
    }

    else {
        console.log("Property: " + property + " not found.")
    }
}

deleteProp(person, property);


// Exercise 2

let passwd = "pwd";

function pwdGen (passwd) {
    numbers = Math.random().toFixed(6) * 1000000;
    passwd = "pwd" += numbers;
    console.log(passwd);
}

pwdGen(passwd);

// Exercise 3
let greeting = "empty";

function greetings (greeting) {
    let num = Math.random();

    if (num < 0.17) {
        greeting = "Hey, what's up?"
    }

    if (num > 0.17 && num < 0.34) {
        greeting = "Hello, my friend!"
    }

    if (num > 0.34 && num < 0.51) {
        greeting = "Hey buddy!"
    }

    if (num > 0.51 && num < 0.68) {
        greeting = "Wasuuuup!"
    }

    if (num > 0.68 && num < 0.85) {
        greeting = "Hey bro!"
    }

    else {
        greeting = "Greetings and salutations good sire."
    }

    console.log(greeting);
}

greetings(greeting);
