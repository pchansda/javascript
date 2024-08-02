const myArr = [ 1, 2, 3, 4, 5]
const myHeros = [ "Ironman", "Thor", "Black Panther"]
const myArr2 = new Array(1, 2, 3, 4, 5)

console.log(myArr[4]);
console.log(myArr2[2]);
console.log(myHeros[2]);

//Array Method

myArr.push(6)
myArr.push(7)  // add element at the last position.

console.log(myArr);

myArr.pop() //Delete or Remove the last element of the Array.

console.log(myArr);

myArr.unshift(9) // Add the element at the first position.

console.log(myArr);

myArr.shift() // remove element from the frist position.

console.log(myArr);
console.log(myArr.includes(9)); // its give us a boolean value.
console.log(myArr.indexOf(3)); // give index value of the element we mentioned over there.

const newArr = myArr.join()
console.log(myArr) // [1,2,3,4,5,6]
console.log(newArr); // 1,2,3,4,5,6
console.log(typeof newArr); // string

//  slice/splice

console.log("A",myArr); // A[1,2,3,4,5,6]

const myN1 = myArr.slice(1,3) //index 3 doesnot include.
console.log(myN1);[2,3]

console.log("B",myArr); //  B[1,2,3,4,5,6]

const myN2 = myArr.splice(1,3)
console.log(myN2); // [2,3,4]
console.log("C",myArr); // C[1,5,6]


