const name = "premchand"
const repoCount = 15

console.log(name + repoCount + "value") // old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // new way

const gameName = new String('Freefire') //better way 

console.log(gameName[0]); //F
console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // FREEFIRE
console.log(gameName.charAt(4)); // f
console.log(gameName.indexOf('i')); // 5
console.log(gameName.__proto__); // {}

const newString = gameName.substring(0,4)
console.log(newString); // Free

const newString2 = gameName.slice(0,4)
console.log(newString2); // Free

const newString3 = gameName.slice(-8,4)
console.log(newString3); // Free

const url = "https://www.premchand.com/free%20fire"

console.log(url.replace('%20',' ')); // https://www.premchand.com/free fire
console.log(url.includes('premchand')); // true
console.log(url.includes('kumar')); // false

const myName = "prem-chand-hansda"
console.log(myName.split('-')); // ["prem", "chand", "hansda"]
 