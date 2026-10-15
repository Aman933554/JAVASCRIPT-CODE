

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website `);
      

//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// ---------------------------------------------


// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website `);
//        console.log(this);

//     }
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// -------------------------------------


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
       console.log(this);

    }
}
console.log(this);


// ------------------------------

// function chai(){
//     console.log(this);
// }
// chai()


// --------------------------------
// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()


// ------------------------
// function chai=function(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()


// ------- Arrow function ----
const chai = () => {
    let username = "hitesh";
    console.log(this);
};

chai();

// ----- Arrow Function ----- explicit return hai jab ham {} use krte hai

const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))


// ----Implicit return -----------No need to write {}

const addTwoNum = (num1, num2) => num1 + num2
console.log(addTwoNum(3,4))


// -Implicit return -------------

const addTwoNumber = (num1, num2) => ( num1 + num2)
console.log(addTwoNumber(3,4))



// ------------------
const addTw = (num1, num2) => ({username: "hitesh"})
console.log(addTw(3,4))

// ---------------------------------

//  const myArray = [2,5,3,7,8]
//   myArray.forEach(function () {})
    // myArray.forEach(() => {})
    //  myArray.forEach(() => ())