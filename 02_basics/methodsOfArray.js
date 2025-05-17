// Methods of Array in JS

const arr = new Array(1, 2, 3, 4, 5); // Array constructor

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array

arr.push(24); // Adds 24 to the end of the array
console.log(arr[arr.length - 1]); // Output: 24

//2. pop() - Removes the last element from an array and returns that element

arr.pop(); // Removes the last element (24)
console.log(arr); // Output: [1, 2, 3, 4, 5]

// 3. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array

arr.unshift(9); // Adds 9 to the beginning of the array
console.log(arr);

arr.unshift(14); // Adds 9 to the beginning of the array
console.log(arr);

// 4. shift() - Removes the first element from an array and returns that element

arr.shift(); // Removes the first element from the array
console.log(arr); // Output: [14, 1, 2, 3, 4, 5, 24]

prototype:

    // The prototype is an object that is associated with every JavaScript object by default.


const user = Object.create(person);

user.name = "Alice"; //add a new property to the user object

user.greet(); // Output: Hello!

console.log(user); // Output: Alice

    //it means that the user object has access to the greet method from the person object, even though it is not defined directly on the user object.

// //another way of declaring array

const arr2 = new Array(1, 2, 3, 4, 5); // Array constructor

console.log("ARR_2",arr2); // Output: [1, 2, 3, 4, 5]

const arr3 = arr2.slice(1, 3)

console.log("ARR_3",arr3); // Output: [2, 3]

const arr4 = arr2.splice(1,3) // removes 3 elements starting from index 1
console.log("ARR_4",arr4); // Output: [2, 3, 4]
console.log("ARR_2",arr2); // Output: [1, 5] // arr2 is modified