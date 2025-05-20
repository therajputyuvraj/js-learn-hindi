// Arrow function and This keyword.

// globalThis.username = "Pawan"
const addtwo = {
    username: "Yuvraj",
    areaPinCode: 226002,

    welcomeMessage: function () {
        console.log(`Hello ${this.username}, Welcome to the website`)
    },

    welcomeMessage2: () => {
        console.log(this); // Will log the global object or undefined
        return `Hello ${globalThis.username}, Welcome to the website`
    }
    // here in this arrow function, this keyword will not work as expected, because it will not refer to the object addtwo, but to the global object.
}


console.log(addtwo.welcomeMessage()); // Output: Hello Yuvraj, Welcome to the website
console.log(addtwo.welcomeMessage2()); // Output: Hello Yuvraj, Welcome to the website

// ---------------------------------------------------------------------------------------

console.log(this);


function chai(){
    username = "amit"
    console.log(this.username); // Output: amit
}

chai() //this is a noermal function declations and we can use this here

chai2 = () => {
    user = "Vaibhav"
    console.log(this.user); // Output: undefined
}

chai2() //this is 


//example of an arrow function inheriting the this keyword from the parent scope

const person = {
    name: "Yuvraj",
    hobbies: ["cricket", "football", "badminton"],

    showHobbies: function(){
        this.hobbies.forEach((hobby) => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};

person.showHobbies();

// in a normal function u can use this keyword to refer to the object, but in an arrow function, 
// this keyword will refer to the parent scope, so we can use this keyword to refer to the object.

const addUser = function(){
    username = "pawan" //global variable as no var, let or const is used so treated in the global scope
    hobby = "cricket" //global variable as no var, let or const is used so treated in the global scope

    showHobby = () =>{
        console.log(`${this.username} likes ${this.hobby}`); // Output: pawan likes cricket
    }
    
    showHobby();
}

addUser()

//this was also a way but not grecommended to use.


