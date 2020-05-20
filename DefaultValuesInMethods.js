function sayHello(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`)
}

sayHello("Luke"); // Output Hello Luke
sayHello("Luke", "Hi there"); // Output Hello Luke

class Pet {
    constructor(name, species){
        this.name = name;
        this.species = species;
    }
}

class Dog extends Pet {
    constructor (name, breed, species = "Dog") {
        super(name, species);
        this.breed = breed;
    }
}

let myDog = new Dog("Rex", "Staffy", "Big Dog");
console.log(myDog);