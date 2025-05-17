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
