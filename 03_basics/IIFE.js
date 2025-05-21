// Immediatly Invoked Function Expression (IIFE)

// IIFE is a function that runs as soon as it is defined.

(function hello(){
    console.log("DB Connected")
})(); //this is a named function expression, and it will run as soon as it is defined

((name) =>{
    console.log(`Hello ${name}, Welcome to the Website`)
})("YUVRAJ SINGH"); //this is an anonymous function expression, and it will run as soon as it is defined

