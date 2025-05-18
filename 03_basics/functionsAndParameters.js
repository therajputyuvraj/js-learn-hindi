// Functions and Parameters

function addTwoNumbers(a, b){
    if(typeof a === typeof b){
        console.log(a+b)
    }
    else{
        console.log("a and b are not equal");
    }
    
} // / here we are checking if the type of a and b are equal or not then we are adding them

const result = addTwoNumbers(3,8);

console.log(result);  // this will print undefine because we are not returning anything.


// to handle this we do this thing:

function addTwoNumbersAgain(a, b){
    if(typeof a === typeof b){
        return a+b; // here we are returning the value of a and b
    }
    return "a and b are not equal"; // here we are returning the value of a and b
} // / here we are checking if the type of a and b are equal or not then we are adding them

const resultTwo =  addTwoNumbersAgain(3,5);
console.log(resultTwo); // this will print 11

console.log(typeof resultTwo)

function isLoggedIn(userName = "Yuvraj Singh"){
    return `${userName} is Logged In`;
} //so if we assign a default value to the parameter then if somewhere undefined is passed then ,
    // it will use the default value


console.log((isLoggedIn())); //returns Yuvraj Singh is Logged In. Here function using the default value.
console.log((isLoggedIn("Amit Kumar"))); //returns Amit Kumar is Logged In


