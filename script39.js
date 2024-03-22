console.log("39) Destructure an object to get its properties.");

const person = {
    fName:"John",
    lName:"Shelby",
    age: 24,
    city: "Birmingham"
}

console.log(person);
const {fName,lName} = person;

console.log(fName);
console.log(lName);