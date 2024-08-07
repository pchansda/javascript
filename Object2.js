// singleton
// const tinderUser = {} //non-singleton object

const tinderUser = new Object()  // singleton object
tinderUser.id = "815"
tinderUser.name = "Pc Hnasda"
tinderUser.age = 25
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "premhansda@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Prem",
            lastName: "Hansda"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

// optional chaining :- if anyting is not exist in object, then it is used. (?)
//suppose fullname doesn't exist in above expression then 
// console.log(regularUser.fullName?.userFullName.firstName);

//combination 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2} // Object inside object.
// console.log(obj3);

// const obj3 = Object.assign({},obj1, obj2) // Both object are define in object.
// console.log(obj3);

const obj3 = {...obj1,...obj2}  // Both object are define in object.
console.log(obj3);

const user =[
    {
        id: 1,
        email: "hansdap6@outlook.com"
    }, 
    {
        id: 2,
        email: "hansdap6@outlook.com"
    },
    {
        id: 3,
        email: "hansdap6@outlook.com"
    },
]
console.log(user[1].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //datatype:- string in the form of Array.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//It gives the output in the form of Array.



