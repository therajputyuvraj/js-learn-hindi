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






