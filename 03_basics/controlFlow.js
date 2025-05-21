// CONTROL FLOW or LOGIC FLOW in Java Srcipt


// these are the all Falsy Values in JS:
// 1. false
// 2. 0 
// 3. -0
// 4. 0n
// 5. "", '', ``
// 6. null
// 7. undefined
// 8. NaN
// 9. document.all
// 10. BigInt(0)
// 11. Symbol()
// 12. BigInt(0n)

let age;
// let age = 24;
const actuallAge = age ?? null
 
console.log(actuallAge); // Output: 24

// this is called Nullish Coalescing Operator.

//now lets talk about TERNIARY OPERATOR:

const iceTeaPrice = 120
iceTeaPrice >= 150 ? console.log("ICE TEA IS EXPENSIVE") : console.log("ICE TEA IS CHEAP");