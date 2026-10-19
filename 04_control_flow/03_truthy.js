

// truthy.js

// const userEmail = "h@hitesh.ai"            // truthy

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

// -----------------------------
// const userEmail = ""   // falsy

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }


// ---------------------------
const userEmail = []            //truthy

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


// --------------------

// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined ,NaN


//  truthy values
// "0" , 'false' ,  " "  , [] , {} ,function(){}

//  for Array
if(userEmail.length === 0){
    console.log("Array is empty");

}

// for object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??):  null undefined
// let val1;
// val1 = 5 ?? 10
// console.log(val1);

// // --------------------
// let val1;
// val1 = null ?? 10
// console.log(val1);

// ------------------------------
// let val1;
// val1 = undefined ?? 10
// console.log(val1);


// --------------
let val1;
val1 = null ?? 10 ?? 15
console.log(val1);

// -------------------------------------
// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

