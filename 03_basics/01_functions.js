function SayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
SayMyName()     // functions call 

// --------------------------------------------------------
// functions

function addTwoNumbers(number1, number2){
   console.log(number1 + number2);

}
addTwoNumbers(3,4)

// ----------------------------------------------------
// ye bhi print krke dekh sakte ho

addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)


// --------------------------

// function addTwoNumbers(number1 ,number2){
    
//     let result = number1 + number2
//     console.log("Hitesh");
//     return result
// }
// const result = addTwoNumbers(3,5)
// console.log("Result:",result)

// ----------------------------------------


function addTwoNumbers(number1 ,number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
console.log("Result:",result)


// -----------------------------------

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))


// ---------------------------
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())


// ----------------------------
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())


// -----------------------------

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())


// --------------------------
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())

// ------------------------------------

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))



// lecture 20

// shopping card user add item  not know about no of 
// item and add price

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2))


// -----------------
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))

// --------------------------

function calculateCartPrice(val1,  val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500, 2000))



// Object uses in function


const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

// ----------------
handleObject({
    username: "sam",
    price: 399
})

// ----------------------------------

// Array in function
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// same value output
console.log(returnSecondValue([200,400,500,600]));

