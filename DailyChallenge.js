let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

function ownedByLuke(pet) {
    return pet.ownerName == "Luke";
}

let lukesPets = pets.filter(pet => pet.ownerName == "Luke");

// console.log(lukesPets);

// 2 Use the Array.map function to create an array of all the names of the owners.

function getOwner(pet) {
    return pet.ownerName;
}

let owners = pets.map(pet => pet.ownerName);

// console.log(owners);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy
function findShaggysPet(pet) {
    return pet.ownerName == "Shaggy";
}

let shaggysPet = pets.find(pet => pet.ownerName == "Shaggy");
// console.log(shaggysPet);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

function filterCallback(pet) {
    let lessThan5 = pet.age < 5;
    let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
    return lessThan5 && (hasS);
}

// const filterCallback = pet => {
//     let lessThan5 = pet.age < 5;
//     let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
//     return lessThan5 && (hasS);
// }

let filteredPets = pets
    .filter(pet => pet.age < 5)
    .filter(pet => pet.name[0] == "S" || pet.ownerName[0] == "S");
// console.log(filteredPets);

let sentence = "The quick brown fox jumps over the lazy dog.";

// 1 Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise
// function searchInSentence(searchTerm) {
//     return sentence.includes(searchTerm);
// }

const searchInSentence = (searchTerm) => sentence.includes(searchTerm);

// console.log(searchInSentence("dog"));
// console.log(searchInSentence("program"));

// 2 Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise
// function findIndexInSentence(searchTerm) {
//     return sentence.indexOf(searchTerm);
// }

const findIndexInSentence = searchTerm => sentence.indexOf(searchTerm);

// console.log(findIndexInSentence("dog"));
// console.log(findIndexInSentence("program"));

// 3 Write a function that takes a string and returns the first three characters of that string
// function firstThreeChars(myString) {
//     return myString.substring(0, 3);
// }

const firstThreeChars = myString => myString.substring(0, 3);

// console.log(firstThreeChars(sentence));

// 4 Write a function that takes a string and returns the last two characters of that string
// function lastTwoChars(myString) {
//     return myString.substring(myString.length - 2);
// }

const lastTwoChars = myString => myString.substring(myString.length - 2);

// console.log(lastTwoChars(sentence)); // Outputs "g."
// console.log(lastTwoChars("Luke")); // Outputs "ke"

// 5 Write a function that converts a string into an array of words where a word is any string separated by a space.
function stringToArray(myString) {
    return myString.split(" ");
}

// const stringToArray = myString => myString.split(" ");

console.log(stringToArray(sentence));

// 6 Write a function that counts the number of times a string appears inside the sentence string above
// function countOccurrences(searchTerm) {
//     let count = 0;
//     let startIndex = 0;
//     while (true) {
//         let index = sentence.indexOf(searchTerm, startIndex);
//         if (index == -1) {
//             break;
//         }
//         count++;
//         startIndex = index + 1;
//     }
//     return count;
// }

const countOccurrences = (stringToSearch, searchTerm) => {
    return stringToSearch.split("").reduce((counter, char) => char == searchTerm ? counter + 1 : counter, 0);
}

// console.log(countOccurrences(sentence, "e"));
