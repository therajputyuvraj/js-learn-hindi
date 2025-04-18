let score = 33
let scoreTwo = "33abc"
let hello = null

// console.table([typeof score, typeof scoreTwo])

let valueInNumber = Number(scoreTwo) // this will convert the string to number but if there will be any character the coverted will be Nan
let nullInNumber = Number(hello)
console.log(valueInNumber)
console.log(nullInNumber)


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) // this will print True, as 1 is True and 0 is False

let someNumber = 43

let stringNumber = String(someNumber) //converting a number to a string

console.log(stringNumber)