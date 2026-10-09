

// object 

// Object declare karne ke types
// 1. Object Literal
// 2.Singleton / Constructor 

// Singleton / Constructor 
// Object.create

     
 //in object, key and values hota hai

// Object Literal  

// symbol
const mySym = Symbol("Key1")


const JsUser = {
    name:"Aman",
    "Full name": "Hitesh Kumar",
   [ mySym]: "myKey1",
    age: 19,
    location: "Ghziabad",
    email: "amansharma@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]

}

// access object

console.log(JsUser.email) //First METHOD TO ACCESS OBJECT
console.log(JsUser["email"])  // BEST METHOD TO ACCESS OBJECT
console.log(JsUser["Full name"]) // access object best method
// symbol ka use object me
console.log(JsUser[mySym])

// for changing the email of object
JsUser.email = "amansharma@chatgpt.com"


// for locking the value of object 
// Object.freeze(JsUser)  
JsUser.email = "amansharma@microsoft.com"
console.log(JsUser);

// Functions in JS
JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());
// only  function return
console.log(JsUser.greeting);

// another

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);  //take same refrence
}
console.log(JsUser.greetingTwo());