// Default Methods
// 1 Create a method called addNumbers. The function should take 2 numbers as its parameters and return the sum of those numbers. Both parameters should default to 0 if they are not provided.
function addNumbers(num1 = 0, num2 = 0) {
    return num1 + num2;
}

let myNewNumber = addNumbers();
console.log(myNewNumber);

// 2 Create a method called sayHello with 2 parameters, name and greeting. The function should log the greeting followed by the name. The greeting parameter should default to "Hello".
function sayHello(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`);
}

sayHello("Luke", "Hi There");


// Arrow Functions

// 1 Convert this function to an arrow function
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

const multiplyNumbersArrow = (num1, num2) => num1 * num2;

console.log(multiplyNumbers(12,4));
console.log(multiplyNumbersArrow(12,4));

// 2 Convert this function to an arrow function
function personOver40(person) {
    return person.age > 40;
}

const personOver40Arrow = person => person.age > 40;

let person = {
    firstName: "Luke",
    lastName: "Parker",
    age: 23
}

console.log(personOver40(person));
console.log(personOver40Arrow(person));

// 3 Convert this function to an arrow function
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

const getFullNameArrow = person => `${person.firstName} ${person.lastName}`;

console.log(getFullName(person));
console.log(getFullNameArrow(person));


// 4 Convert this function to an arrow function
function getPersonTitle(person) {
    if (person.preferedTitle) {
        return person.preferedTitle;
    } else if (person.gender == "male") {
        return "Mr.";
    } else if (person.gender == "female") {
        if (person.maritalStatus == "married") {
            return "Mrs.";
        } else if (person.maritalStatus == "unmarried") {
            return "Miss";
        } else {
            return "Ms."
        }
    } else {
        return "Mx."
    }
}

const getPersonTitleArrow = person => {
    if (person.preferedTitle) {
        return person.preferedTitle;
    } else if (person.gender == "male") {
        return "Mr.";
    } else if (person.gender == "female") {
        if (person.maritalStatus == "married") {
            return "Mrs.";
        } else if (person.maritalStatus == "unmarried") {
            return "Miss";
        } else {
            return "Ms."
        }
    } else {
        return "Mx."
    }
}

console.log(getPersonTitle(person));
console.log(getPersonTitleArrow(person));


// Throwing and handling exceptions

