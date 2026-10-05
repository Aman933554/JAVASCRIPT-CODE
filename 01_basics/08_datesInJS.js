
// Dates

let myDate = new Date()
console.log(myDate);

// dates converted into the string
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

//  for specific date for user
// month start from zero in JS

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());



// let myTimeStamp = new Date();

// let myTimeStamp = Date.now()   // time hamme milisecond me dega
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// time converted into second
let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000));


// find month ,year, hour

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMinutes());

console.log(newDate.getMonth() + 1);


// String Interpolation in JavaScript
// Iske liye backticks ` ` use hote hain, aur variable ke liye ${}.
const name = "Aman";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);



// goood

newDate.toLocaleString('default',{
    weekday:"long",
    day:"numeric"
})