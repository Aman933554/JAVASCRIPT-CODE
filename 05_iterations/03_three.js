
// for of   loop

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1,2,3,4,5]
// for(const iterator of object){
// }
for(const num of arr){
    console.log(num);
}

// -------------------------------------
const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// ---------------------------------

// map in JS

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// console.log(map);


// --------------------------
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")


// for(const key of map){
//     console.log(key);
// }

// ----------------------------------
// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// for(const [key, value] of map){
//     console.log(key, ':-', value);
// }

// ------------------------
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);


for(const key of map){
   console.log(key);
 }

for(const [key, value] of map){
    console.log(key, ':-', value);
}

