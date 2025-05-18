const marvel_heros = ["thor", "iron man", "hulk"];
const dc_heros = ["batman", "super man", "wonder women"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // Output will be dc heroes as an array in the array marvel_heros

// but if we want to add the elements of dc_heros to marvel_heros, we can use this:

const all_heroes = marvel_heros.concat(dc_heros);
console.log("A: ",all_heroes); // Output will be all heroes in a single array

// or we can use the spread operator
const all_heroes2 = [...marvel_heros, ...dc_heros];
console.log("B: ",all_heroes2); // Output will be all heroes in a single array

const anotherArray = [1,2,3, [4,5,6], 7, [6,7, [5,3]]]; // nested array

const flatArray = anotherArray.flat(1); // flatten the array to 2 levels
console.log("C: ",flatArray); // Output will be [1,2,3,4,5,6,7,6,7,5,3]

//convert to Array:

const str = "hello world";
const strArray = Array.from(str); // convert string to array

const score1 = 100;
const score2 = 200;  
const score3 = 300;

console.log("D: ", Array.from({score1, score2, score3})); // Output will be [100, 200, 300] // convert object to array



// working with array of objects
const users = [
    2, 
    4,
    { name: "John", age: 25, arr: [1, 2, 3] },
    { name: "Jane", age: 30 },
    { name: "Jim", age: 35 },
    5
];

console.log("E: ", users[2].arr[1]); // Output: 25

