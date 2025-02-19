// Values Stored On The Stack

const name = "Ayuush"
const age = 22;

// Reference Values Stored On The Heap

const person = {
    name: "Sharma",
    age: 23
};

let newName = name;
newName = "Jimmy";

let newPerson = person;
newPerson.name = "John"

console.log(name, newName);
console.log(person, newPerson);