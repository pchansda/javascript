// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 30);
console.log(myCreatedDate.toDateString());

// month is starting from 0 index 

let createdDate = new Date(2024, 0, 3, 7, 30, 21);
console.log(createdDate.toLocaleString());

let anotherDate = new Date("2024-01-14")
console.log(anotherDate.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp); // Time in the milisecond
console.log(anotherDate.getTime()); //Time in the milisecond
console.log(Math.floor(Date.now()/1000));
//Time in second

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(`The day is ${newDate.getDay()} and the date is ${newDate.getDate()} and the Year is ${newDate.getFullYear()}`);
console.log(newDate.toLocaleString('default',{weekday:"long"}));