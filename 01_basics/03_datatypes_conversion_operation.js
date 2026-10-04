let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

// "33" --->33
// "33abc" --->NaN
// true --->1; false --> 0

let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 -->true
// 0 --->false
// "" -->false
// "Aman" --> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ----------Operations--------------

let value = 3
let negValue = -value
console.log(negValue);

 console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
 console.log(2%3);


// some operations

 let str1 = "Hello"
 let str2 = " Aman"
 let str3 = str1 + str2
 console.log(str3);


//  conversion datatypes

console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log(3 + 4 * 5 % 3);  // it is not good
console.log((3+4) * 5 % 3);  

console.log(true);
console.log(+true);
console.log(+"");

let num1,  num2, num3
num1 = num2 = num3 =2 + 2

// trick

// let gameCounter = 100  // postfix operator
// gameCounter++;
// console.log(gameCounter); 

let gameCounter = 100     // prefix operator
++gameCounter;
console.log(gameCounter);


// link to study about postfix and prefix operators 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
