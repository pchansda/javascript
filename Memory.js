/* 
Memory:- There are two types of memory 
1. Stack (for premitive)
2. Heap (for non-premitive)
  */

let myName = "Premchand Hansda"

let  anotherName = myName
anotherName = "Pc Hansda" 

 console.log(myName);
 console.log(anotherName);

 let userOne = {
    email: "hansdap6@gmail.com",
    phNo: "7050068390"
 }

 let userTwo = userOne

 userTwo.email = "premchandhansda006@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);