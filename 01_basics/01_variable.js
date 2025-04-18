const accountId = 12343
let accountEmail = "yuvraj@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //not a good practice

let accountState; //this will be undefined


console.table([accountId, accountEmail, accountPassword, accountCity])
// accountId =1232 //cannot be done

accountEmail="hello@gmail.com"
accountCity="Bengalore"

console.log(accountState)
console.table([accountId, accountEmail, accountPassword, accountCity])

//never use var in the modern java scrip: because of issue inblock scope nd functional scope