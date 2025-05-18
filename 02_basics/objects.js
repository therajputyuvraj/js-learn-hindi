// console.log("OBJECTS");


// const mtSym = Symbol("mySymbol"); // Symbol is a primitive data type in JavaScript
// const person = {
//   name: "Alice",
//   age: 30,
//     [mtSym]: "This is a symbol property", // Symbol property
//   greet() {
//     console.log("Hello!");
//   },
//   address: {
//     city: "Wonderland",
//     zip: "12345"
//   },
//   "full name": "Alice Wondeland" // property with space in name
// };

// //to access any value in object we use dot notation or bracket notation
// console.log(person.name); // Output: Alice

// // but if we want to access the property with space in name, we have to use bracket notation
// console.log(person["full name"]); // Output: Alice Wondeland

// console.log(person[mtSym]); // Output: This is a symbol property


// const jsUser = {
//   name: "John",
//   age: 25,
//   email: "yuvraj.a.a@rakuteb.com",
//   address: {
//     city: "New York",
//     zip: "10001"
//   },
//   hobbies: ["reading", "traveling", "coding"]
// };

// jsUser.greeting = function(){
//     // console.log("Hello, my name is " + this.name); 
//     console.log(`Hello, my name is ${jsUser.name}`); // Output: Hello, my name is John
    
//     /* 
//     Output: Hello, my name is John and this is a method is used to 
//             access the properties of the object we are referencing.
//     */ 
// }

// jsUser.greeting(); // Output: Hello, my name is John



const mySymbol = Symbol("mySymbol"); // Symbol is a primitive data type in JavaScript

const theUser = {
    name: "Alice",
    age: 30,
    [mySymbol]: 'hello', // Symbol property
    greet() {
        console.log("Hello!");
    },
    address: {
        city: "Wonderland",
        zip: "12345"
    },
    "full name": "Alice Wondeland" // property with space in name
}

console.log(theUser[mySymbol]); // Output: This is a symbol property
console.log(typeof theUser[mySymbol]); // Output: symbol

console.log(typeof mySymbol);



