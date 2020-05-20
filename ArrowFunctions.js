

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// const addNumbers = function(num1, num2) {
//     return num1 + num2;
// }

// const addNumbers = (num1, num2) => {
//     return num1 + num2;
// }

const addNumbers = (num1, num2) => num1 + num2;
// console.log(addNumbers(12, 19));

// function timesTwo(num) {
//     return num * 2;
// }

// const timesTwo = function(num) {
//     return num * 2;
// }

// const timesTwo = (num) => {
//     return num * 2;
// }

// const timesTwo = (num) => num * 2;

const timesTwo = num => num * 2;

console.log(timesTwo(12));


let people = [
    { name: "Luke", age: 23 },
    { name: "Daniel", age: 42 },
    { name: "Sophie", age: 35 },
    { name: "Alicia", age: 29 }
];

// function lessThan30 (person) {
//     return person.age < 30;
// }

// const lessThan30 = function (person) {
//     return person.age < 30;
// }

// const lessThan30 = (person) => {
//     return person.age < 30;
// }

// const lessThan30 = (person) => person.age < 30;

// const lessThan30 = person => person.age < 30;

let peopleUnder30 = people.filter(person => person.age < 30);

console.log(peopleUnder30);
