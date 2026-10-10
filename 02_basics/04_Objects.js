

// Singleton / constructor 


// const tinderUser = new Object()
// console.log(tinderUser);
// // output: {}


// const tinderUser = {}
// console.log(tinderUser);
// // output: {}



const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIn  = false
console.log(tinderUser);



// object k ander object
const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname : "kumar"
        }
    }
}
   console.log(regularUser.fullname);
   console.log(regularUser.fullname.userfullname);
   console.log(regularUser.fullname.userfullname.firstname);
   console.log(regularUser.fullname.userfullname.lastname);


//    combine Objects
    const obj1 = {1: "a", 2: "b"}
    const obj2 = {3: "a", 4: "b"}
    const obj4 = {5: "a", 6: "b"}
    // const obj3 = { obj1, obj2 }    // not good method to combine the object
    const obj3 = Object.assign({}, obj1 , obj2 , obj4)  //good method to combine the object
    console.log(obj3);


    // spread method to combine the object    best method to combine the object
    const obj5 = {3: "a", 4: "b"}
    const obj6 = {5: "a", 6: "b"}
    const obj7 = {...obj5, ...obj6}
    console.log(obj7);

    // jab database se value aata hai tab

    const users = [
       {
           id: 1,
           email: "amansharma@gmail.com"
    },

      {
           id: 1,
           email: "amansharma@gmail.com"
    },

      {
           id: 1,
           email: "amansharma@gmail.com"
    },

      {
           id: 1,
           email: "amansharma@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// kai bar values object me exist nhi karta hai to pusch sakte ho
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructuring 
// 1. destructuring of Array
// 2. destructuring of 

// Destructuring of object      // react padhoge to waha se object milega us object ko destructuring karke value lena hoga

const course = {
    coursename: "js in English",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);


// const {courseInstructor : Instructor} = course
// console.log(Instructor);  

// yahi hai destructuring of object



//APIs 

//pahle backend se value xml me aata tha ab
// JSON ME aata hai 

// JSON     APIs in object formate
 {
    "name": "hitesh",
   " coursename": :"js in english",
   " price": "free"
 }


//  APIs in array formate
[

   {},   //ye  object hai array k ander
   {},
   {},
   {},
]



// extra
// 1. Ruby on Rails
// Type: Web development framework
// Language: Ruby
// Use: Websites aur web applications ka backend banane ke liye.
// Example: E-commerce website, booking system.

// 2. PHP
// Type: Programming language
// Use: Dynamic websites aur backend development ke liye.
// Example: WordPress aur server-side applications.

// 3. JSON
// Full Form: JavaScript Object Notation
// Type: Data format
// Use: Applications ke beech data exchange karne ke liye.


