//Stack and Heap Memory in JavaScript

/* 

1. Stack Memory (Primitive Data Types):
- Stack memory is used for static memory allocation.

2. Heap Memory (Non-Primitive Data Types):
- Heap memory is used for dynamic memory allocation.

 

*/

const user = {
    name: 'John Doe',
    age: 30,
    isLoggedIn: true,
    friends: ['Jane', 'Doe'],
    address: {
        street: '123 Main St',
        city: 'New York'
    }
} // object is stored in heap memory

const userTwo = user // userTwo is a reference to the same object in heap memory

userTwo.name = 'Yuvraj Singh' // changing the name property of userTwo will also change the name property of user

console.log(user.name) // Yuvraj Singh
console.log(userTwo.name) // Yuvraj Singh;



