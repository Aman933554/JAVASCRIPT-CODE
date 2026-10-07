// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 
// Array         resizable , mixed array,
//  array index start from zero


// Array

const myArr = [0, 1, 2, 3, 4, 5, true, "hitesh"]
// console.log(myArr[0]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// shallow copy and deep copy

const myHeroes =["Aman", "kishan","mohit"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[3]);
console.log(myHeroes[2]);



//     Array Methods 

myArr.push(6)
myArr.push(7)
myArr.pop(7)
console.log(myArr);


//unshift and shift
const myArray = [1,2,3,4,5]
myArray.unshift(9)
console.log(myArray);

// shift 

const myArray1 = [1,2,3,4,5]
myArray1.unshift(10)
myArray1.shift()
console.log(myArray1);


// find out the element present or not
const AmanArr = [ 0,1,2,3,4,5]
console.log(AmanArr.includes(9));
console.log(AmanArr.includes(5));


// find out the element 
console.log(AmanArr.indexOf(5));


// Join method

const newArr = AmanArr.join();
console.log(AmanArr);
console.log(newArr);
console.log(typeof newArr );


// slice , splice
console.log("A", AmanArr)
const myn1 = AmanArr.slice(1,3)
console.log(myn1);
console.log("B",AmanArr);

// splice
const myn2 = AmanArr.splice(1,3)
console.log("C",AmanArr);
console.log(myn2);