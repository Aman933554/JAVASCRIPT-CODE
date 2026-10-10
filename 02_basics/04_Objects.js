

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