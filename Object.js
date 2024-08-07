// Object Litrals 

const mySym = Symbol("key1")
const jsUser = {
    name: "Prem",
    "full name": "Premchand Hansda",
    age: 25,
    location: "Delhi",
    email: "hansdap6@gmaail.com",
    [mySym]: "mykey1", // It is a symbol key.
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Wednesday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "prem006@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "kumarprem@gmail.com" // It will not change the value of email because our object is freeze.
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello jsUser");
}

// console.log(jsUser.greeting);
// console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello jsUser,${this.name}`);
}

console.log(jsUser.greeting2());
