const accountId = 815
let accountEmail = "pchansda@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState ;

// accountId = 2 //Not Allowed

/*
 prefer not to use var 
because of  issue in block scope and functional scope
*/

console.log(accountId);

accountEmail = "prem@gmail.com"
accountPassword = "121212"
accountCity = "Ranchi"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])