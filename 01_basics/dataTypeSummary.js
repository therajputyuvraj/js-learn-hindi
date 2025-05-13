/* 

DATA TYPE SUMMARY

This code provides a summary of the data types in JavaScript, including their characteristics and examples.


    1.  Primitive Data Types
            Primitive data types are the most basic data types in JavaScript. They are immutable and 
            represent a single value. The primitive data types in JavaScript are:
            
                example: string, number, boolean, null, undefined, symbol, and bigint.

    2.  Non-Primitive Data Types
            Non-primitive data types are more complex data types that can hold multiple values or 
            properties. They are mutable and can be changed after creation. The non-primitive data types 
            in JavaScript are:
        
                example: object, array, function, date, and regular expression.

*/

// 1. Primitive Data Types

const score = 100;
const scoreValue = 100.5 //both are numbers

const isLoggedIn = true; //boolean
const outsideTemperature = null; //null

const userEmail = undefined; //undefined

console.table({
    score,
    scoreValue,
    isLoggedIn,
    outsideTemperature,
    userEmail
});

const id = Symbol('123')
const id2 = Symbol('123') 

console.log("are they both same: ", id === id2) // false

const bigNumber = 1234567890123456789012345678901234567890n //bigint

console.log("big number type: ", typeof bigNumber) // checking the types which will be bigint;

// 2. Non-Primitive Data Types

const heros = ['spiderman', 'batman', 'superman']          // array is a collection of values or we can say list.

const user = {
    name: 'John Doe',
    age: 30,
    isLoggedIn: true,
    friends: ['Jane', 'Doe'],
    address: {
        street: '123 Main St',
        city: 'New York'
    }
}                                                           // object is a collection of key-value pairs or we can say dictionary.


const myFunction = function() {
    console.log("Hello, World!");
}                                                           // function is a block of code that can be called and executed.

const greet = () => {
    console.log("Hello!");
}                                                           // arrow function is a shorter syntax for writing functions.    

console.log("data type of a null is:", typeof outsideTemperature) // null is an object in JavaScript, which is a known bug in JavaScript.;
console.log("data type of  an object is:", typeof user)           // object;
console.log("data type of an array is:", typeof heros)            // object;
console.log("data type of a function is:", typeof myFunction)     // function;






