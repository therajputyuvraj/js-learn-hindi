// // In this we will learn about advance loops

// // 1. for of loop:
// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     // console.log(num);
// }

// // 2. Map method:

// const map = new Map()
// map.set('name', 'Yuvraj');
// map.set('Username', 'Yuvraj_123');
// map.set('age', 20);
// map.set('isStudent', true);

// console.log(map);

// for (const [key] of map){
//     console.log(key);
// } //just to print keys

// for (const [key, value] of map){
//     console.log(key, ":-", value);  
// } //for printing both keys and values

// //lets create an object
// const obj = {
//     name: 'Yuvraj',
//     Username: 'Yuvraj_123',
//     age: 20,
//     isStudent: true
// }

// for(const [key, value] of Object.entries(obj)){ //this is how we can convert an object to a map
//     console.log(key, ":-", value);   
// }

// const coding = ['js', 'python', 'java', 'c++', 'c#'];

// coding.forEach(function(item){
//     console.log(item);
// })

// coding.forEach((item, index) =>{
//     console.log(item, index);
// })

const values = [1, 2, 3, 4, 5,6,7,8,9,10];

const newValues = values.filter((items)=> (items%2 == 0));

console.log(newValues); //this will print all the values which are greater than 5

