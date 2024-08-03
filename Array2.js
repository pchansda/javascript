const Marvel_heros = ["thor", "ironman","spiderman"]
const DC_heros = ["superman", "batman","flash"]

//console.log(Marvel_heros);
//console.log(DC_heros);

//Marvel_heros.push(DC_heros)
//console.log(Marvel_heros);
//console.log(Marvel_heros[3][1]);

const allHeros = Marvel_heros.concat(DC_heros)
//console.log(allHeros);

const allNewHero = [...Marvel_heros, ...DC_heros]
//console.log(allNewHero);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArr = anotherArr.flat(Infinity)

console.log(anotherArr);
console.log(realAnotherArr); // every sub array element moved into the parent array.

console.log(Array.isArray("premchand")); // false - boolean value 
console.log(Array.from("premchandhansda")); // ['p','r','e','m','c','h','a','n','d','h','a','n','s','d','a']
console.log(Array.from({name:"prem"}));  // if it can't change directly in array , it will always give an empty value.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
// Returns a new array from set of elements.








