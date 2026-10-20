
// while and do while loop

// while loop
let index = 0;
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2
}

// --------------------------------
// Array ko while loop se 
let myArray1 = ["flash" , "batman" , "superman"]
let arr = 0 
while(arr < myArray1.length){
    console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

// --------------------------------
//  do while loop

// do {
    
// } while (condition);

let score = 1
do{
    console.log(`score is ${score}`);
    score++
} while (score <= 10);