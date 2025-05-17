// console.log("ARRAYS");

const original = {
  name: 'Alice',
  address: {
    city: 'Wonderland',
    zip: '12345'
  }
};


// Shallow copy:

// const shallowCopy = { ...original }; // or Object.assign({}, original)
const shallowCopy = Object.assign({}, original); // Shallow copy

shallowCopy.name = 'Bob';             // Affects only the copy
shallowCopy.address.city = 'Nowhere'; // Affects both original and copy

console.log(original.address.city);   // here city is changed to Nowhere because its a nested property.
console.log(original.name);   //but here name is still Alice because its a top level property.

// Deep copy:

const deep = JSON.parse(JSON.stringify(original)); // Deep copy

deep.address.city = 'Nowhere';

console.log(original.address.city); // Still 'Wonderland' ✅

deep.address.city = 'Nowhere';

console.log(original.address.city); // Still 'Wonderland' ✅

const person = {
  greet() {
    console.log("Hello!");
  }
}; // Object with a method
// Object.create() creates a new object with the specified prototype object and properties
// The new object is linked to the prototype object, allowing it to inherit properties and methods from it


// prototype:

    // The prototype is an object that is associated with every JavaScript object by default.


const user = Object.create(person);

user.name = "Alice"; //add a new property to the user object

user.greet(); // Output: Hello!

console.log(user); // Output: Alice

    //it means that the user object has access to the greet method from the person object, even though it is not defined directly on the user object.

//another way of declaring array

const arr2 = new Array(1, 2, 3, 4, 5); // Array constructor

console.log(arr2); // Output: [1, 2, 3, 4, 5]


