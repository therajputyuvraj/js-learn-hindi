// declaring Objects as Singleton or other way


const email = Symbol("email")
const person = (function () {
    let instance;
    
    return {
        getInstance: function () {
            if (!instance) {
                instance = {
                    name: "John Doe",
                    age: 30,
                    [email]: "yuvraj.s.singh@rakuten.com",
                    address: {
                        city: "New York",
                        zip: "10001"
                    }
                }
                return instance;
            }
        }
    };
})(); //this is an IIFE (Immediately Invoked Function Expression) that creates a singleton object

//now to use this object, we can call the getInstance method
const user1 = person.getInstance();
const user2 = person.getInstance();
console.log(user1 === user2); // Output: true

user1.name = "yuvraj";
user1[email] = "yuvraj.a.singh@rakuten.com";

console.log("Type of the email in USER2", typeof user1[email]); 


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {...obj1, ...obj2}; // Spread operator to merge objects

console.log(obj1);

const obj4 = Object.assign({}, obj1, obj2); // Object.assign to merge objects

console.log("Merged Object 3", obj3); // Output: {1: "a", 2: "b", 3: "a", 4: "b"}
console.log("Merged Object 4", obj4); // Output: {1: "a", 2: "b", 3: "a", 4: "b"}







