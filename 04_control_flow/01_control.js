

//  control flow

// if statement

// if(true){

// }

// if(false){

// }

// comparison operator
//  > , < ,<= , >= , == , != , ===

if(2 == "2"){
    console.log("executed");
}

const isUserLoggedIn = true
const temperature = 41
if(temperature == 41){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50")
}

console.log("Executed");


// const  ka use


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// -----------------------------------------
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// // ----------------------------
// const score = 200
// if(score > 100){
//      var power = "fly"
//     console.log(`User power: ${power}`);
// }
// // ------------------------------
// const score = 200
// if(score > 100){
//     var power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// // ----------------------------
const score = 200
if(score > 100){
    let power = "fly"
    console.log(`User power: ${power}`);
}

// ------------------------------
// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// implicit scope

// const balance = 1000
// if(balance > 500) console.log("test");
// if(balance > 500) console.log("test"), console.log("test2");

const balance = 1000
if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750 ");
}
else if(balance < 900){
    console.log("less than 900");
}
else {
    console.log("less than 1200");
}


// --------------------

// const userLoggedIn  = true
// const debitCard = true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }

// ------------------

const userLoggedIn  = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true


if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail ){
    console.log("User Logged in");
}